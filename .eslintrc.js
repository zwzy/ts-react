module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': 'off', // 解决 typescript - eslint import React from 'react' 报错
    '@typescript-eslint/no-use-before-define': ['error'], // 解决 typescript - eslint import React from 'react' 报错
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }], // jsx 文件名结尾支持 .tsx
  },
};
