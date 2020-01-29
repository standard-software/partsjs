const {
  _typeofCheck, _objectToStringCheck, objectToString,
} = require('../type/isType.js');

const isSet = _objectToStringCheck('Set');
const isWeakSet = _objectToStringCheck('WeakSet');

const isNotSet   = value => !isSet(value);
const isNotWeakSet   = value => !isWeakSet(value);

module.exports = {
 isSet,isNotSet,
 isWeakSet,isNotWeakSet,
};

