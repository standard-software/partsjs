const { parts } = require('../../debug_build/index.js');

const {
  test_execute_index,
} = require('../../debug_build/index.test.js');

parts.platform.buildMode = 'debug';

test_execute_index(parts);
