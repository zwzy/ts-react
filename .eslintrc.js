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
  // 解决引入.ts 模块报错
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
        ],
      },
    },
  },
  rules: {
    // 关闭props?时 defaultProps的强制指定
    'react/require-default-props': [0],
    'no-use-before-define': 'off', // 解决 typescript - eslint import React from 'react' 报错
    '@typescript-eslint/no-use-before-define': ['error'], // 解决 typescript - eslint import React from 'react' 报错
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }], // jsx 文件名结尾支持 .tsx
    // 解决引入.ts 模块报错
    'import/extensions': ['error', 'never'], // jsx 文件名结尾支持 .tsx
  },
};
