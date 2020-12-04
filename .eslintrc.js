module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
    },
    ignorePatterns: ['node_modules', 'lib'],
};
