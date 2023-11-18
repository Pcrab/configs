const baseEslintConfig = require("@pcrab/configs-eslint-ts");

/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
    ...baseEslintConfig,
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: baseEslintConfig.parser,
            plugins: [...baseEslintConfig.plugins],
            extends: [...baseEslintConfig.extends, "next", "next/core-web-vitals"],
            rules: [...baseEslintConfig.rules],
            env: {
                ...baseEslintConfig.env,
                browser: true,
            },
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: ["apps/*/", "packages/*/*/"],
            },
            settings: {
                next: {
                    rootDir: ["apps/*/", "packages/*/*/"],
                },
                react: {
                    version: "detect",
                },
            },
        },
    ],
};
