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
  rules: {
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/no-unused-prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/indent': ['off'],
  },
};
