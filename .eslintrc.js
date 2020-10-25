module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'camelcase': ['off'],
    'object-curly-spacing': ['off'],
    'no-multi-spaces': ['off'],
    'no-unused-vars': ['off'],
    'indent': ['warn', 2, {
      'flatTernaryExpressions': true,
    }],
    'padded-blocks': ['off'],
    'block-spacing': ['warn', 'always'],
    'arrow-parens': ['off'],
    'valid-jsdoc': ['off'],
    // "operator-linebreak": ["warn", "before",
    //   { "overrides": {
    //     "=": "ignore",
    //     "===": "ignore",
    //     "+": "ignore",
    //     "?": "ignore",
    //     ":": "ignore" }
    //   }
    // ],
    'operator-linebreak': ['off'],
    'require-jsdoc':  ['off'],
    'brace-style':    ['off'],
    'key-spacing':    ['off'],
    'guard-for-in':   ['off'],
    'max-len':        ['error', { 'code': 90 }],
    'quotes':         ['warn', 'single', { 'avoidEscape': true }],
    'new-cap':        ['off'],
    'no-var':         ['off'],
    'comma-dangle':   ['warn', 'always-multiline'],
  },
};
