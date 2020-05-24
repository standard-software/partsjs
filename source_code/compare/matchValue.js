const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _match,
} = require('../compare/match.js');

/**
 * matchValue
 */
const _matchValue = (
  value,
  compare,
  then,
) => {
  if (_match(value, compare)) {
    if (isFunction(then)) {
      return then(value);
    }
    return then;
  }
  return value;
};

const matchValue = (
  value,
  compare,
  then,
) => {
  if (isObjectParameter(value, 'value, compare, then')) {
    ({ value, compare, then } = value);
  }

  return _matchValue(
    value,
    compare,
    then,
  );
};

module.exports = {
  _matchValue,
  matchValue,
};
