import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/theme.css";
import theme from "./theme";
import 'happo-plugin-storybook/register';

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
  },

  tags: [],
};

export default preview;
