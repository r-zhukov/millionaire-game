module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['react-app', 'react-app/jest', 'airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {},
};
