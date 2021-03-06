module.exports = {
    extends: [
        './es6.js',
        'eslint-config-airbnb/rules/react'
    ],
    rules: {
        'jsx-quotes': 'error',
        'no-extra-parens': 'off',
        'react/button-has-type': 0,
        'react/display-name': 'error',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-curly-brace-presence': 0,
        'react/destructuring-assignment': [2, 'always', { ignoreClassFields: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-fragments': [2, 'element'],
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 'error',
        'react/jsx-no-bind': 'error',
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-spreading': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [2, { prop: 'ignore', arrow: 'ignore' }],
        'react/no-danger': 0,
        'react/no-is-mounted': 'error',
        'react/no-this-in-sfc': 0,
        'react/no-unknown-property': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': [2, {
            order: [
                'static-methods',
                'instance-variables',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }]
    }
};
