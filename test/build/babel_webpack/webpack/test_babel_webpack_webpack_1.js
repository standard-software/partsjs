const parts = require('../../../../build/babel_webpack/webpack/parts.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/webpack/test_parts.js');

parts.platform.buildMode = 'release';
parts.platform.startName = 'test_babel_webpack_webpack_1.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.name() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.startName,
  '.',
) + '.txt';
const fs = require('fs');
const text = parts.array.operation.sortDictionaryAscending(
  parts.propertyList(parts).split('\n'),
).join('\n');
fs.writeFileSync('./test/outputPropertyList/' + fileName,
  text,
);
