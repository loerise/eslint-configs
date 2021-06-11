module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['import'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    'import/dynamic-import-chunkname': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'index',
          ['sibling', 'parent'],
          'object',
        ],
        alphabetize: {
          order: 'ignore',
        },
        'newlines-between': 'always',
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
};
