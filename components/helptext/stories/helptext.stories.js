// Import the component markup template
import { Template } from "./template";

/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It’s commonly used in forms.
 */
export default {
    title: "Components/Help text",
    component: "HelpText",
    argTypes: {
        text: {
            name: "Text",
            type: { name: "string", required: true },
            table: {
                type: { summary: "string" },
                disable: false,
                category: "Component",
            },
            control: { type: "text" },
        },
        treatment: {
            name: "Treatment",
            type: { name: "string" },
            table: {
                type: { summary: "string" },
                category: "Component",
            },
            options: ["neutral", "negative"],
            control: "inline-radio",
        },
        hideIcon: {
            name: "Hide icon",
            type: { name: "boolean" },
            description: "Only applicable if treatment is negative.",
            table: {
                type: { summary: "boolean" },
                disable: false,
                category: "Advanced",
            },
            control: "boolean",
            if: { arg: "treatment", eq: "negative" },
        },
        isDisabled: {
            name: "Disabled",
            type: { name: "boolean" },
            table: {
                type: { summary: "boolean" },
                category: "State",
            },
            control: "boolean",
        },
    },
    args: {
        rootClass: "spectrum-HelpText",
        text: "Create a password with at least 8 characters.",
        treatment: "neutral",
        hideIcon: false,
        isDisabled: false,
    },
    parameters: {
        actions: {
            handles: [],
        },
        status: {
            type: process.env.MIGRATED_PACKAGES.includes("helptext") ? "migrated" : "legacy",
        },
    },
};

export const Default = Template.bind({});
Default.storyName = "Neutral";
Default.args = {};

export const Negative = Template.bind({});
Negative.storyName = "Negative";
Negative.args = {
	variant: "negative",
	text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	customStyles: {'max-width': '350px'},
};
