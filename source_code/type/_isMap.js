const {
  _typeofCheck, _objectToStringCheck, objectToString,
} = require('../type/isType.js');

const _isMap = _objectToStringCheck('Map');
const _isWeakMap = _objectToStringCheck('WeakMap');

const _isNotMap   = value => !_isMap(value);
const _isNotWeakMap   = value => !_isWeakMap(value);

module.exports = {
  _isMap, _isNotMap,
  _isWeakMap, _isNotWeakMap,
};

