module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': { node: {} },
  },
  rules: {
    "no-console": "error",
    "no-redeclare": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/consistent-type-imports": ["error"],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        "ignoreVoid": true
      }
    ]
  }
}