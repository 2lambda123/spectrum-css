const postcss = require("postcss");

function process(root) {
	root.walkRules((rule, ruleIndex) => {
		if (rule.selector === ":root") {
			rule.remove();
		}
	});
}

let allVariables;
module.exports = postcss.plugin("postcss-droproot", function () {
	allVariables = [];
	return (root, result) => {
		process(root);
	};
});
