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
    rules: {
        'comma-dangle': ['error', 'never'],
        'handle-callback-err': 'error',
        indent: [2, 4],
        'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'new-cap': 'error',
        'no-console': 'error',
        'no-self-compare': 'error',
        yoda: ['error', 'always']
    }
};
