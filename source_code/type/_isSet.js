const {
  _typeofCheck, _objectToStringCheck, objectToString,
} = require('../type/isType.js');

const _isSet = _objectToStringCheck('Set');
const _isWeakSet = _objectToStringCheck('WeakSet');

const _isNotSet   = value => !_isSet(value);
const _isNotWeakSet   = value => !_isWeakSet(value);

module.exports = {
  _isSet, _isNotSet,
  _isWeakSet, _isNotWeakSet,
};

