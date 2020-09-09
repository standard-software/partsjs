import * as parts from '../../source/index.js';

import {
  test_execute_index,
} from '../../source/index.test.js';

parts.platform.buildMode = 'source';
parts.platform.startName = 'test_source_deno_3.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.name() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.startName,
  '.',
) + '.txt';
const text = parts.array.operation.sortDictionaryAscending(
  parts.propertyList(parts).split('\n'),
).join('\n');
Deno.writeTextFile('./test/outputPropertyList/' + fileName,
  text,
);

// console.log(Object.keys(parts).toString());
