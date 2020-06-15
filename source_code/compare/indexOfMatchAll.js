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
  _matchAll,
} = require('../compare/matchAll.js');

/**
 * indexOfMatchAll
 */
const _indexOfMatchAll = (
  valueArray,
  compareArray,
) => {
  return _findFirstIndex(valueArray, value => {
    return _matchAll(value, compareArray);
  });
};

const indexOfMatchAll = (
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
      'indexOfMatchAll args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'indexOfMatchAll args(compareArray) is not array',
    );
  }

  return _indexOfMatchAll(valueArray, compareArray);
};

module.exports = {
  _indexOfMatchAll,
  indexOfMatchAll,
};
