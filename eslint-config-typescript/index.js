module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'import/dynamic-import-chunkname': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'index', ['sibling', 'parent'], 'object'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-console': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
