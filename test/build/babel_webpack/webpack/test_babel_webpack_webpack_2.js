const { parts } = require('../../../../build/babel_webpack/webpack/parts.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/webpack/test_parts.js');

parts.platform.buildMode = 'release';
parts.platform.testStartFileName = 'test_babel_webpack_webpack_2.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.platformName() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.testStartFileName,
  '.',
) + '.txt';
const fs = require('fs');
const text = parts.array.unique(parts.propertyList(parts).split('\n').map(
  line => {
    line = parts.string.excludeFirst(line, '.default');
    line = parts.string.excludeFirst(line, '.parts');
    return line;
  },
).sort(
  parts.array.SortFunc.order.dictionaryUpperCase.ascending,
)).join('\n');
fs.writeFileSync('./test/outputPropertyList/' + fileName,
  text,
);
