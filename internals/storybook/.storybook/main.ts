import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import type {StorybookConfig} from "@storybook/nextjs";

// ES module equivalent of __dirname
// @ts-expect-error
const __dirname = dirname(fileURLToPath(import.meta.url));

// Helper to resolve paths
const getAbsolutePath = (packageName: string) => {
	return join(__dirname, "../node_modules", packageName);
};

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@chromatic-com/storybook"),
	],
	framework: {
		name: getAbsolutePath("@storybook/nextjs"),
		options: {},
	},
	staticDirs: ["../public"], // Fixed Windows path separator
};

export default config;
