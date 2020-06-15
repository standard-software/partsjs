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
  _findFirstIndex,
} = require('../array/array_common.js');

const {
  _match,
} = require('../compare/match.js');

/**
 * indexOfMatch
 */
const _indexOfMatch = (
  valueArray,
  compare,
) => {
  return _findFirstIndex(valueArray, value => {
    return _match(value, compare);
  });
};

const indexOfMatch = (
  valueArray,
  compare,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    ({ valueArray, compare } = valueArray);
  } else if (isObjectParameter(compare, 'compare')) {
    ({ compare } = compare);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'indexOfMatch args(valueArray) is not array',
    );
  }

  return _indexOfMatch(valueArray, compare);
};

module.exports = {
  _indexOfMatch,
  indexOfMatch,
};
