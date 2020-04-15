const path = require('path');

module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
		mocha: true,
		jest: true,
	},
	extends: [
		'airbnb', 
		'jest-enzyme'
	],
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"indent": ["error", 2, { "SwitchCase": 1 }],
		"no-shadow": [0, {"builtinGlobals": false, "hoist": "functions", "allow": []}],
		"react/prefer-stateless-function": "off",
		"react/no-did-update-set-state": "off",
		"no-unused-vars": "warn",
		'import/prefer-default-export': 'off',
		'linebreak-style': 'off', // Don't play nicely with Windows.
		'arrow-parens': 'off', // Incompatible with prettier
		'object-curly-newline': 'off', // Incompatible with prettier
		'no-mixed-operators': 'off', // Incompatible with prettier
		'arrow-body-style': 'off', // Not our taste?
		'function-paren-newline': 'off', // Incompatible with prettier
		'no-plusplus': 'off',
		'space-before-function-paren': 0, // Incompatible with prettier

		'max-len': ['error', 260, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
		'no-console': 'error', // airbnb is using warn
		'no-alert': 'error', // airbnb is using warn

		'no-param-reassign': 'off', // Not our taste?
		"radix": "off", // parseInt, parseFloat radix turned off. Not my taste.

		'react/require-default-props': 'off', // airbnb use error
		'react/forbid-prop-types': 'off', // airbnb use error
		'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx

		'prefer-destructuring': 'off',

		'react/no-find-dom-node': 'off', // I don't know
		'react/no-did-mount-set-state': 'off',
		'react/no-unused-prop-types': 'off', // Is still buggy
		'react/jsx-one-expression-per-line': 'off',

		"jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
		"jsx-a11y/label-has-for": [2, {
			"required": {
				"every": ["id"]
			}
		}], // for nested label htmlFor error
		"no-debugger": "error",
		"no-underscore-dangle": "off",
		"prettier/prettier": ['error'],
		"class-methods-use-this": "off",
		"operator-linebreak": [
			"error",
			"after",
			{
			  "overrides": {
				":": "before"
			  }
			}
		],
		"operator-linebreak": ["error", "after", { "overrides": { "?": "ignore", ":": "ignore" }}],
		"react/jsx-props-no-spreading": "off",
		"no-unused-expressions": ["error", { "allowShortCircuit": true }],
		"no-use-before-define": ["off", { "functions": false, "classes": false }],
		"jsx-a11y/alt-text": ["off"]
	},
};