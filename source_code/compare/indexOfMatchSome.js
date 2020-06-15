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
  _matchSome,
} = require('../compare/matchSome.js');

/**
 * indexOfMatchSome
 */
const _indexOfMatchSome = (
  valueArray,
  compareArray,
) => {
  return _findFirstIndex(valueArray, value => {
    return _matchSome(value, compareArray);
  });
};

const indexOfMatchSome = (
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
      'indexOfMatchSome args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'indexOfMatchSome args(compareArray) is not array',
    );
  }

  return _indexOfMatchSome(valueArray, compareArray);
};

module.exports = {
  _indexOfMatchSome,
  indexOfMatchSome,
};
