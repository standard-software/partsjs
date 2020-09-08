import parts from '../../source/index.js';

import {
  test_execute_index,
} from '../../source/index.test.js';

parts.platform.buildMode = 'source';
parts.platform.startName = 'test_source_deno_1.js';

test_execute_index(parts);

// console.log(Object.keys(parts).toString());
