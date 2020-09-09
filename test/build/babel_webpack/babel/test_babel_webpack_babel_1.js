const parts = require('../../../../build/babel_webpack/babel/index.js');

const {
  test_execute_index,
} = require('../../../../build/babel_webpack/babel/index.test.js');

parts.platform.buildMode = 'debug';
parts.platform.startName = 'test_babel_webpack_babel_1.js';

test_execute_index(parts);

const fileName = parts.string.subFirstDelimFirst(
  parts.platform.name() + '_' +
  parts.platform.buildMode + '_' +
  parts.platform.startName,
  '.',
) + '.txt';
const fs = require('fs');
fs.writeFileSync('./test/outputPropertyList/' + fileName,
  parts.propertyList(parts),
);

// console.log(Object.keys(parts).toString());
