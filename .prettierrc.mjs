import * as prettierPluginAstro from "prettier-plugin-astro";

export default {
  singleQuote: true,
  tabWidth: 2,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};