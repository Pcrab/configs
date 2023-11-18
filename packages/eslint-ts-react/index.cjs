const baseEslintConfig = require("@pcrab/configs-eslint-ts");

/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
    ...baseEslintConfig,
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: baseEslintConfig.parser,
            plugins: [...baseEslintConfig.plugins, "react", "react-hooks", "jest"],
            extends: [
                ...baseEslintConfig.extends,
                "plugin:jest/recommended",
                "plugin:react/recommended",
                "plugin:react-hooks/recommended",
            ],
            rules: [...baseEslintConfig.rules],
            env: {
                ...baseEslintConfig.env,
                browser: true,
            },
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
            settings: {
                react: {
                    version: "detect",
                },
            },
        },
    ],
};
