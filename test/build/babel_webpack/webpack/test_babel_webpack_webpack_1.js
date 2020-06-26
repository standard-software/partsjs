const parts = require('../../../../build/babel_webpack/webpack/parts.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/webpack/test_parts.js');

parts.platform.buildMode = 'release';

test_execute_index(parts);
