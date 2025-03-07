import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@chromatic-com/storybook",
	],

	framework: "@storybook/nextjs",

	docs: {},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};
export default config;
