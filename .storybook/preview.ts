import type { Preview } from "@storybook/react";
import { themes } from "storybook/internal/theming";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
