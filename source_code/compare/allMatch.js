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
  _all,
} = require('../array/array_common.js');

const {
  _match,
} = require('../compare/match.js');

/**
 * allMatch
 */
const _allMatch = (
  valueArray,
  compare,
) => {
  return _all(valueArray, value => {
    return _match(value, compare);
  });
};

const allMatch = (
  valueArray,
  compare,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    ({ valueArray, compare } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'allMatch args(valueArray) is not array',
    );
  }

  return _allMatch(valueArray, compare);
};

module.exports = {
  _allMatch,
  allMatch,
};
