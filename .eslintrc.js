module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      1,
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function',
      }
    ],
    "react/jsx-props-no-spreading": [
      1,
      {
        "html": "enforce",
        "custom": "ignore",
        "explicitSpread": "enforce"
      }
    ]
 
  },
};
