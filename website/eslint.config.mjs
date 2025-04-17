/* eslint-env node */

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import path from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  {
    ignores: [
      "**/.next/*",
      "**/.yarn/*",
      "**/out/*",
      "**/node_modules/*",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  perfectionist.configs["recommended-natural"],
  prettier,
);

