module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', 'windows'],
    'eslint linebreak-style': ['error', 'windows'],
    'eslint operator-linebreak': ['error', 'before'],
    'eslint quotes': [
      'error',
      'single',
      { avoidEscape: true },
      { allowTemplateLiterals: true },
    ],
    'eslint object-curly-newline': ['error', 'never', { multiline: true }],
  },
};
