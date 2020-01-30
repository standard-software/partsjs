const {
  _typeofCheck, _objectToStringCheck, objectToString,
} = require('../type/isType.js');

const isMap = _objectToStringCheck('Map');
const isWeakMap = _objectToStringCheck('WeakMap');

const isNotMap   = value => !isMap(value);
const isNotWeakMap   = value => !isWeakMap(value);

module.exports = {
  isMap, isNotMap,
  isWeakMap, isNotWeakMap,
};

