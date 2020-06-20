import parts from '../../source_code/index.js';

import {
  test_execute_index,
} from '../../source_code/index.test.js';

parts.platform.buildMode = 'source';

test_execute_index(parts);
