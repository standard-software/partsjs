const parts = require('../../../../build/babel_webpack/babel/index.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/babel/index.test.js');

parts.platform.buildMode = 'debug';
parts.platform.startName = 'test_babel_webpack_babel_1.js';

test_execute_index(parts);

// console.log(Object.keys(parts).toString());
