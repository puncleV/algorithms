module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'jest',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  env: {
    node: true
  }
};
