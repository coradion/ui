import { withThemeByClassName } from "@storybook/addon-themes";
import type { Decorator, Parameters } from "@storybook/react";
import "../src/styles.css";

export const parameters: Parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators: Decorator[] = [
	withThemeByClassName({
		themes: {
			light: "light",
			dark: "dark",
		},
		defaultTheme: "dark",
	}),
];
