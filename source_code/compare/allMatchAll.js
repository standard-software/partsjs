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
  _matchAll,
} = require('../compare/matchAll.js');

/**
 * allMatchAll
 */
const _allMatchAll = (
  valueArray,
  compareArray,
) => {
  return _all(valueArray, value => {
    return _matchAll(value, compareArray);
  });
};

const allMatchAll = (
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
      'allMatchAll args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'allMatchAll args(compareArray) is not array',
    );
  }

  return _allMatchAll(valueArray, compareArray);
};

module.exports = {
  _allMatchAll,
  allMatchAll,
};
