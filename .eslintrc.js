module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*"],
      env: {
        node: true,
      },
    },
    {
      files: ["stories/**/*"],
      extends: ["plugin:storybook/recommended"],
    },
  ],
};
