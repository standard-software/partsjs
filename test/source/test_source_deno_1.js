import parts from '../../source/index.js';

import {
  test_execute_index,
} from '../../source/index.test.js';

parts.platform.buildMode = 'source';
parts.platform.startName = 'test_source_deno_1.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.name() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.startName,
  '.',
) + '.txt';
Deno.writeTextFile('./test/outputPropertyList/' + fileName,
  parts.propertyList(parts),
);

// console.log(Object.keys(parts).toString());
