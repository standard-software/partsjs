const { parts } = require('../../release_build/parts.js');

const {
  test_execute_index,
} = require('../../release_build/test_parts.js');

parts.platform.buildMode = 'release';

test_execute_index(parts);
