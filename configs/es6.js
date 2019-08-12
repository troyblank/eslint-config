module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict'
    ],
    plugins: [
        'json'
    ],
    rules: {
        'comma-dangle': [2, 'never'],
        'handle-callback-err': 2,
        indent: [2, 4, { 'ignoredNodes': ['JSXElement *', 'JSXElement'] }],
        'lines-between-class-members': 0,
        'object-curly-newline': 0,
        'one-var': [0, { uninitialized: 'always', initialized: 'never' }],
        'one-var-declaration-per-line': [2, 'initializations'],
        'operator-linebreak': 0,
        'max-len': 'off',
        'new-cap': 2,
        'no-console': 2,
        'no-return-assign': 0,
        'no-self-compare': 2,
        yoda: 0
    }
};
