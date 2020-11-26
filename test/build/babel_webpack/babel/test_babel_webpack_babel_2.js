const { parts } = require('../../../../build/babel_webpack/babel/index.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/babel/index.test.js');

parts.platform.buildMode = 'debug';
parts.platform.testStartFileName = 'test_babel_webpack_babel_2.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.platformName() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.testStartFileName,
  '.',
) + '.txt';
const fs = require('fs');
const text = parts.propertyList(parts).split('\n').sort(
  parts.array.SortFunc.order.dictionaryUpperCase.ascending,
).join('\n');
fs.writeFileSync('./test/outputPropertyList/' + fileName,
  text,
);

// console.log(Object.keys(parts).toString());
