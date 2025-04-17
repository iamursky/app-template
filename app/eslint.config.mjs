/* eslint-env node */

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "./.expo/*",
      "./.yarn/*",
      "./android/*",
      "./babel.config.js",
      "./dist/*",
      "./ios/*",
      "./metro.config.js",
      "./node_modules/*",
      "./tailwind.config.js",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  perfectionist.configs["recommended-natural"],
  prettier,
);
