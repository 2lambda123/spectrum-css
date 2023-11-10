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

const fs = require("fs");
const path = require("path");

const fg = require("fast-glob");

const gulp = require("gulp");
const concat = require("gulp-concat");
const through = require("through2");
const postcss = require("postcss");

function getVarsFromCSS(css) {
	const variableList = new Set();

	postcss.parse(css).walkDecls((decl) => {
		const matches = decl.value.match(/var\(.*?\)/g);
		if (!matches) return;

		matches.forEach((match) => {
			const varName = match.replace(/var\((--[\w\-]+),?.*?\)/, "$1").trim();
			if (varName) variableList.add(varName);
		});
	});

	return [...variableList];
}

function getVarValues(css) {
	const variables = {};
	postcss.parse(css).walkDecls((decl) => variables[decl.prop] = decl.value);
	return variables;
}

function getClassNames(contents, pkgName) {
	const classNames = new Set();

	postcss.parse(contents).walkRules((rule) => {
		if (pkgName === "page") return false;

		rule.selectors.forEach((fullSelector) => {
			// Skip compound selectors, they may not start with the component itself
			if (fullSelector.match(/~|\+/)) return true;

			const selector = fullSelector.split(" ").shift();

			if (rule.type === "rule") {
				let matches = selector.match(/^\.spectrum-[\w]+/);
				if (matches && matches[0]) {
					classNames.add(matches[0]);
				}
			}
		});
	});

	return [...classNames];
}

function getAllVars() {
	return new Promise((resolve, reject) => {
		let variableList;

		const varDir = path.dirname(
			require.resolve("@spectrum-css/vars/package.json", {
				paths: [
					process.cwd(),
					path.join(__dirname, "../../../../")
				],
			})
		);

		const coreTokensFile = path.dirname(
			require.resolve("@spectrum-css/tokens/package.json", {
				paths: [
					process.cwd(),
					path.join(__dirname, "../../../../")
				],
			})
		);

		gulp
			.src([
				`${varDir}/css/themes/*.css`,
				`${varDir}/css/scales/*.css`,
				`${varDir}/css/components/*.css`,
				`${varDir}/css/globals/*.css`,
				`${varDir}/custom.css`,
				coreTokensFile,
			])
			.pipe(concat("everything.css"))
			.pipe(
				through.obj(function getAllVars(file, enc, cb) {
					variableList = getVarValues(file.contents.toString());

					cb(null, file);
				})
			)
			.on("finish", () => {
				resolve(variableList);
			})
			.on("error", reject);
	});
}

function getAllComponentVars() {
	const varDir = path.dirname(
		require.resolve("@spectrum-css/vars/package.json", {
			paths: [
				path.join(process.cwd(), "node_modules"),
				path.join(__dirname, "../../node_modules")
			],
		})
	);

	const variableList = {};

	fg.sync([
		`css/components/*.css`,
		`css/globals/*.css`,
		`custom.css`,
	], {
		cwd: varDir,
	}).then((files) => {
		files.forEach((file) => {
			const content = fs.readFileSync(path.join(varDir, file));
			const list = getVarValues(content.toString());
			Object.entries(list).forEach(([key, value]) => {
				variableList[key] = value;
			});
		});
	});

	return variableList;
}

exports.getAllComponentVars = getAllComponentVars;
exports.getAllVars = getAllVars;
exports.getVarsFromCSS = getVarsFromCSS;
exports.getClassNames = getClassNames;
