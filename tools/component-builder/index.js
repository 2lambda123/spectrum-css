/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fsp = require("fs").promises;
const path = require("path");

const gulp = require("gulp");
const data = require("gulp-data");
const through = require("through2");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

const {
	getClassNames,
	getVarsFromCSS,
	getAllComponentVars,
	getAllVars,
} = require("./utilities");

const pug = require("pug");
const yaml = require("js-yaml");
const ext = require("replace-ext");

const sitePath = path.join(__dirname, "../../site");

async function readJSONFile(filepath) {
	return fsp.readFile(filepath).then(JSON.parse);
}

function clean() {
	return require("del")("dist/*");
}

async function getDependencies(packagePath = process.cwd()) {
	const pkg = await readJSONFile(path.join(packagePath, "package.json"));

	if (!pkg.devDependencies) return [];

	return Object.keys(pkg.devDependencies).filter((dep) => {
		return dep.startsWith("@spectrum-css") && !dep.includes("builder");
	}).map((dep) => dep.split("/").pop());
}

function buildDocs_html() {
	return new Promise(async (resolve, reject) => {
		const dependencies = await getDependencies();
		const package = await readJSONFile("package.json");

		const dnaVars = require("@spectrum-css/vars", {
			paths: [
				path.join(process.cwd(), "node_modules"),
				path.join(__dirname, "node_modules"),
				path.join(__dirname, "../../node_modules")
			],
		}) ?? {};

		gulp
			.src(["metadata/*.yml"], { allowEmpty: true })
			.pipe(
				data(() => ({
					dependencies,
					dnaVars,
					pkg: package,
					util: require(path.join(sitePath, "util")),
				}))
			)
			.pipe(
				through.obj(function compilePug(file, enc, cb) {
					file.path = ext(file.path, ".html");

					try {
						const compiled = pug.renderFile(`${sitePath}/templates/individualComponent.pug`, {
							component: yaml.load(String(file.contents)),
							...file.data ?? {}
						});
						file.contents = Buffer.from(compiled);
					} catch (e) {
						return cb(e);
					}
					cb(null, file);
				})
			)
			.pipe(gulp.dest(path.join(__dirname, "../../dist/")))
			.on("end", resolve)
			.on("error", reject);
	});
}

function getVariableDeclarations(classNames, vars) {
	const varNames = Object.keys(vars);
	if (!varNames || varNames.length === 0) return "";

	return `
${classNames.map((className) => `${className}`).join(",\n")} {
  ${varNames.map((varName) => `${varName}: ${vars[varName]};`).join("\n  ")}
}\n`;
}

const bakeVars = () => gulp .src(["dist/index-vars.css"], { allowEmpty: true })
	.pipe(
		through.obj(async function doBake(file, _, cb) {
			const pkg = readJSONFile(path.join(process.cwd(), "package.json"));
			const pkgName = pkg.name.split("/").pop();
			const classNames = getClassNames(file.contents, pkgName);

			// Find all custom properties used in the component
			const variableList = getVarsFromCSS(file.contents);

			// Get vars in ALL components
			const vars = await getAllComponentVars();

			// Get literally all of the possible vars (even overridden vars that are different between themes/scales)
			const allVars = await getAllVars();

			// For each color stop and scale, filter the variables for those matching the component
			const usedVars = {};
			variableList.forEach((varName) => {
				if (!varName.includes("spectrum-global") && (
					allVars[varName] ||
					varName.startsWith("--mod") ||
					varName.startsWith("--highcontrast")
				)) usedVars[varName] = vars[varName];
			});

			const contents = getVariableDeclarations(classNames, usedVars);
			const newFile = file.clone({ contents: false });

			newFile.path = path.join(file.base, `vars.css`);
			newFile.contents = Buffer.from(contents);

			cb(null, newFile);
		})
	)
	.pipe(gulp.dest("dist/"));

const buildIndexVars = () => gulp
	.src(["index.css", "skin.css"], {
		allowEmpty: true,
	})
	.pipe(concat("index-vars.css"))
	.pipe(postcss({
		keepVars: true,
	}))
	.pipe(gulp.dest("dist/"));

function copyIndex() {
	// Just copy index.vars as index.css to maintain backwards compat
	return gulp
		.src("dist/index-vars.css")
		.pipe(
			rename((file) => {
				file.basename = "index";
			})
		)
		.pipe(gulp.dest("dist/"));
}

const buildVars = gulp.series(buildIndexVars, bakeVars);

exports.default = exports.build = gulp.series(clean, gulp.parallel(buildVars, buildDocs_html));

exports.buildLite = gulp.series(clean, buildIndexVars);
exports.buildMedium = gulp.series(clean, buildVars);
exports.buildHeavy = gulp.series(clean, buildVars, copyIndex);

exports.clean = clean;
