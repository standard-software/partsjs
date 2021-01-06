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
    'no-multi-spaces': ['warn', {
      'ignoreEOLComments': true,
      'exceptions': {
        'ArrayExpression': true,
        'Property': true,
        // 'ObjectPattern': true,
        'ObjectExpression': true,
        'CallExpression': true,
        'IfStatement': false,
        'VariableDeclarator': true,
        'ImportDeclaration': true,
      },
    }],
    'space-in-parens': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'no-spaced-func': 'warn',
    'space-infix-ops': 'warn',
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
    'operator-linebreak':   ['off'],
    'require-jsdoc':        ['off'],
    'brace-style':          ['off'],
    'key-spacing':          ['off'],
    'guard-for-in':         ['off'],
    'max-len':              ['error', { 'code': 90 }],
    'quotes':               ['warn', 'single', {
      'avoidEscape': true, 'allowTemplateLiterals': true,
    }],
    'new-cap':              ['off'],
    'no-var':               ['off'],
    'comma-dangle':         ['warn', 'always-multiline'],
    'no-invalid-this':      ['off'],
    'no-fallthrough':       ['error'],
    'no-plusplus':          ['error'],
  },
};
