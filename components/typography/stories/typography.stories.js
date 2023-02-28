// Import the component markup template
import { Template } from "./template";

export default {
  title: "Typography",
  description: "The Typography component is...",
  component: "Typography",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
  },
  args: {
    rootClass: "spectrum-",
    size: "m",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('typography') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};