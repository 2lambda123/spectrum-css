import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "@spectrum-css/dropindicator";

export const Template = ({
	rootClass = "spectrum-DropIndicator",
	customClasses = [],
	customStyles = {},
	direction = "vertical",
	size = "300px",
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${direction}`]: typeof direction !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap({
				blockSize: direction == "vertical" ? size : undefined,
				inlineSize: direction == "horizontal" ? size : undefined,
				...customStyles,
			}))}
		></div>
	`;
};
