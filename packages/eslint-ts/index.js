/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict",
        "plugin:@typescript-eslint/stylistic",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-var-requires": "off",
    },
    env: {
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
    },
};
