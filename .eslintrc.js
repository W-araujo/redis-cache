module.exports = {
     env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ["error", {
          "argsIgnorePattern": "_"
        }],
        "@typescript-eslint/naming-convention": [
            "error",
        {
            "selector": "interface",
            "prefix": ["I"],
            "format": ["PascalCase"]
        }
    ],
    }
}
