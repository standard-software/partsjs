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
 * matchAll
 */
const _matchAll = (value, compareArray) => {
  return _all(compareArray, compare => {
    return _match(value, compare);
  });
};

const matchAll = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchAll args(compareArray) is not array',
    );
  }

  return _matchAll(value, compareArray);
};

module.exports = {
  _matchAll,
  matchAll,
};
