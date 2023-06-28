// Import the component markup template
import { Template } from "./template.js";

export default {
	title: "Components/Color loupe",
	description:
		"The Color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.",
	component: "Colorloupe",
	argTypes: {
		isOpen: {
			description: "Apply `is-open` to display the component",
			defaultValue: true,
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
		isOpen: true,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("colorloupe")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
