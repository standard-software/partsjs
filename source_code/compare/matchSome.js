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
  _some,
} = require('../array/array_common.js');

const {
  _match,
} = require('../compare/match.js');

/**
 * matchSome
 */
const _matchSome = (value, compareArray) => {
  return _some(compareArray, compare => {
    return _match(value, compare);
  });
};

const matchSome = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value, compareArray')) {
    ({ value, compareArray } = value);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchSome args(compareArray) is not array',
    );
  }

  return _matchSome(value, compareArray);
};

module.exports = {
  _matchSome,
  matchSome,
};
