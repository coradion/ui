import { theme } from "./theme";
import { Theme } from "../libs/Theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  docs: { theme },
};

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
