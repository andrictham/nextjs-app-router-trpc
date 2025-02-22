// @ts-nocheck
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
    arrowParens: "always",
    printWidth: 100, // Increased for MDX readability
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 2,
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    tailwindConfig: "./packages/config/tailwind",
    // MDX-specific overrides
    overrides: [
      {
        files: "*.mdx",
        options: {
          parser: "mdx",
          jsxSingleQuote: false,
          proseWrap: "preserve",
          singleAttributePerLine: true,
          jsxBracketSameLine: false,
          bracketSameLine: false,
          bracketSpacing: true,
          mdxLists: {
            bullet: "*",
            indent: 2,
            check: false,
          },
          mdxExpression: "per-line",
          mdxEsm: true,
        },
      },
    ],
    // Import sorting configuration (unchanged)
    importOrder: [
      "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
      "^(next/(.*)$)|^(next$)",
      "^(expo(.*)$)|^(expo$)",
      "<THIRD_PARTY_MODULES>",
      "",
      "^@summon/(.*)$",
      "",
      "^~/utils/(.*)$",
      "^~/components/(.*)$",
      "^~/styles/(.*)$",
      "^~/(.*)$",
      "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
  };
  
  module.exports = config;
  