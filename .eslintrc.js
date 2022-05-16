module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    google: true,
    NodeJS: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'no-use-before-define': 'off',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 100, tabWidth: 2 }],
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-extraneous-dependencies': 0,
  },
}
