const parts = require('../../source_code/index.js');

const {
  test_execute_index,
} = require('../../source_code/index.test.js');

parts.platform.buildMode = 'source';

test_execute_index(parts);
