const { resolve, relative, basename, sep } = require("path");
const { existsSync } = require("fs");

const simpleBuilder = require("@spectrum-css/component-builder-simple/css/processors.js");
const legacyBuilder = require("@spectrum-css/component-builder/css/processors.js");

module.exports = (ctx) => {
	let plugins = [];
	const componentPath = resolve(__dirname, "../components");
	const folderName = ctx.file.includes('node_modules') ? relative(resolve(__dirname, "../../node_modules/@spectrum-css"), ctx.file)?.split(sep)?.shift() : relative(componentPath, ctx.file).split("/")[0];
	const pkgPath = resolve(componentPath, folderName, "package.json");

	if (existsSync(pkgPath)) {
		const { devDependencies } = require(pkgPath);
		if (
			Object.keys(devDependencies).includes("@spectrum-css/component-builder")
		) {
			plugins.push(...legacyBuilder.processors);
		} else {
			if (ctx.file.split("/").includes("themes")) {
				plugins.push(...simpleBuilder.getProcessors({ noSelectors: false }));
			} else {
				plugins.push(...simpleBuilder.getProcessors());
			}
		}
	} else {
		plugins.push(...simpleBuilder.getProcessors());
	}

	if (folderName.includes("expressvars") || ctx.file.includes("express")) {
		plugins.push(
			require("postcss-prefix-selector")({
				prefix: ".spectrum.spectrum--express",
				transform(_prefix, selector, prefixedSelector) {
					/* Smoosh the selectors together b/c they co-exist */
					if ([".spectrum", ".spectrum--express", ".spectrum--medium", ".spectrum--large", ".spectrum--light", ".spectrum--lightest", ".spectrum--dark", ".spectrum--darkest"].includes(selector)) {
						return prefixedSelector.replace(" ", "");
					}

					return prefixedSelector;
				},
			}),
		);
	}

	return { plugins };
};
