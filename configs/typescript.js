module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        './es6.js'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    rules: {
        'import/extensions': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error']
    }
};
