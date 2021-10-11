module.exports = {
  extends: '@loopback/eslint-config',
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: [
          'camelCase',
          'strictCamelCase',
          'PascalCase',
          'StrictPascalCase',
          'snake_case',
          'UPPER_CASE',
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
  },
  parserOptions:  {
    createDefaultProgram: true,
},
};
