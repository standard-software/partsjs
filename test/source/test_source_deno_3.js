import * as parts from '../../source/index.js';

import {
  test_execute_index,
} from '../../source/index.test.js';

parts.platform.buildMode = 'source';
parts.platform.testStartFileName = 'test_source_deno_3.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.name() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.testStartFileName,
  '.',
) + '.txt';
const text = parts.propertyList(parts).split('\n').sort(
  parts.array.SortFunc.order.version.ascending,
).join('\n');
Deno.writeTextFile('./test/outputPropertyList/' + fileName,
  text,
);

// console.log(Object.keys(parts).toString());
