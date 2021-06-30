module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    plugins: ['@rushstack/eslint-plugin', '@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: { '@rushstack/hoist-jest-mock': 'error' },
    ignorePatterns: ['src/schema/generated/**'],
};
