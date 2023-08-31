import { html } from "lit";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

export const Template = ({
	customClasses = [],
	items = [],
	isOpen = false,
	...globals
}) => {

	if (!items.length) {
		console.warn("ActionMenu: requires items be passed in to render.");
		return html``;
	}

	return Popover({
		...globals,
		position: "bottom",
		isOpen,
		id: "popover-1",
		testId: "popover-1",
		triggerId: 'trigger',
		content: [
			Menu({ items })
		],
		trigger: (passthroughs) => ActionButton({
			size: "m",
			isQuiet: true,
			isSelected: isOpen,
			label: "More Actions",
			iconName: "More",
			id: "trigger",
			customClasses,
			...passthroughs,
		})
	})
};
