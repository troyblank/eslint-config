module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.eslint.json'],
	},
	plugins: [
		'json',
		'testing-library',
	],
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'handle-callback-err': 2,
		'import/namespace': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		'import/default': 0,
		"indent": ["error", "tab"],
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
		'semi': [2, 'never'],
		'space-in-parens': [2, 'never'],
		'yoda': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
