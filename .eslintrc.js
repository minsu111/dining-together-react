module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
                project: './tsconfig.json',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {},
};
