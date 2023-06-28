import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

import "@spectrum-css/searchwithin";

export const Template = ({
	rootClass = "spectrum-SearchWithin",
	customClasses = [],
	customStyles = {},
	isOpen = false,
	size = "m",
	...globals
}) => {
	return html`
		<form
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
		>
			${PickerButton({
				...globals,
				size,
				label: "All",
				isOpen,
				position: "left",
				customClasses: [`${rootClass}-picker`],
			})}
			${Textfield({
				...globals,
				size,
				autocomplete: false,
				name: "search",
				placeholder: "Search",
				type: "search",
				customInputClasses: [`${rootClass}-input`],
			})}
			${ClearButton({
				...globals,
				size,
				customClasses: [`${rootClass}-clearButton`],
			})}
			${Popover({
				...globals,
				isOpen: isOpen,
				withTip: false,
				position: "bottom",
				customStyles: {
					position: "absolute",
					top: "38px",
					left: "0",
				},
				content: [
					Menu({
						...globals,
						items: [
							{ label: "Deselect" },
							{ label: "Select Inverse" },
							{ label: "Feather..." },
							{ label: "Select and Mask..." },
							{ type: "divider" },
							{ label: "Save Selection" },
							{ label: "Make Work Path", isDisabled: true },
						],
					}),
				],
			})}
		</form>
	`;
};
