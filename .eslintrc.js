module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'import-newlines',
    'jsx-a11y',
  ],
  rules: {
    indent: ['error', 2],
    'import-newlines/enforce': ['error', {
      items: 3,
      'max-len': 100,
      semi: false,
    }],
    'no-multi-spaces': ['error'],
    'react/style-prop-object': ['off'],
    'no-console': 'off',
    'no-use-before-define': 'off',
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'react/prop-types': ['off'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
    }],
    'react/jsx-one-expression-per-line': ['error', {
      allow: 'literal',
    }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
  },
};
