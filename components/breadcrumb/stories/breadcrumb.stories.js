// Import the component markup template
import { Template } from "./template.js";

export default {
	title: "Components/Breadcrumbs",
	description:
		"Breadcrumbs show hierarchy and navigational context for a user’s location within an app.",
	component: "Breadcrumbs",
	argTypes: {
		items: { table: { disable: true } },
		variant: {
			name: "Variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "multiline"],
			control: "inline-radio",
		},
	},
	args: {
		rootClass: "spectrum-Breadcrumbs",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("breadcrumb")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			label: "Nav root",
			isDragged: true,
		},
		{
			label: "Trend",
			isDisabled: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
};

export const NestedMultiline = Template.bind({});
NestedMultiline.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			iconName: "FolderOpen",
			isDisabled: true,
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "multiline",
};

export const HighContrast = Default;
HighContrast.parameters = {
	chromatic: { forcedColors: "active" },
};
