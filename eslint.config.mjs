import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import prettierRecommended from "eslint-plugin-prettier/recommended"

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "next.config.mjs",
      "eslint.config.mjs",
      "tailwind.config.ts",
      "postcss.config.mjs",
      "components/Flip.jsx",
    ],
  },
  ...nextCoreWebVitals,
  prettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "prettier/prettier": ["error"],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx", ".ts"] }],
      "react/require-default-props": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "react/react-in-jsx-scope": 0,
      "react/jsx-props-no-spreading": 0,
      "import/prefer-default-export": 0,
      "no-underscore-dangle": 0,
      "no-console": ["warn", { allow: ["warn", "error", "info", "debug"] }],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: { "react/prop-types": "off" },
  },
]
