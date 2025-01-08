module.exports = {
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: [
    "tailwindcss",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
    "sonarjs",
    "security"
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "off",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": "latest"
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.js"
    },
    react: {
      version: "detect"
    },
    next: {
      rootDir: ["./"]
    }
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
      ]
    }
  ],
  ignorePatterns: ["dist/*", ".cache", "public", "node_modules", "*.esm.js"],
};