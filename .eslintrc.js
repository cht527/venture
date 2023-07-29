/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
      browser: true,
      node: true,
    },
    extends: ['eslint-config-vcpe/react'],
    parserOptions: {
      project: './tsconfig.eslint.json',
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'prettier/prettier': ['error', { singleQuote: true }],
      'import/no-unused-modules': 'off',
    },
    overrides: [
      {
        files: ['**/examples/*.tsx'],
        rules: {
          'react/display-name': 'off',
          'import/order': 'off',
        },
      },
    ],
  };