module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'airbnb-base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/extensions': ['error', 'never'],
    'class-methods-use-this': 'off',
    semi: 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-tabs': 'off',
    'object-curly-newline': "off",
    'no-use-before-define': 0,
    'no-console': 1,
    'no-undef': 0,
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/', 'scripts'],
      },
    },
  },
};
