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
  _matchSome,
} = require('../compare/matchSome.js');

/**
 * allMatchSome
 */
const _allMatchSome = (
  valueArray,
  compareArray,
) => {
  return _all(valueArray, value => {
    return _matchSome(value, compareArray);
  });
};

const allMatchSome = (
  valueArray,
  compareArray,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'allMatchSome args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'allMatchSome args(compareArray) is not array',
    );
  }

  return _allMatchSome(valueArray, compareArray);
};

module.exports = {
  _allMatchSome,
  allMatchSome,
};
