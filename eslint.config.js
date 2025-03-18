import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "src/components/PostHog.astro",
    "tailwind.config.mjs",
    ".astro/",
    "node_modules/",
    ".vscode/",
    "dist/",
    "public",
  ]),

  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {},
  },
]);
