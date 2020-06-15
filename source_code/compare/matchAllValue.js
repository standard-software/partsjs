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
  _matchAll,
} = require('../compare/matchAll.js');

/**
 * matchAllValue
 */
const _matchAllValue = (
  value,
  compareArray,
  match,
  unmatch = value,
) => {
  if (_matchAll(value, compareArray)) {
    if (isFunction(match)) {
      return match(value);
    }
    return match;
  }
  if (isFunction(unmatch)) {
    return unmatch(value);
  }
  return unmatch;
};

const matchAllValue = (
  value,
  compareArray,
  match,
  unmatch = value,
) => {
  if (isObjectParameter(value, 'value, compareArray, match', 'unmatch')) {
    ({ value, compareArray, match, unmatch = value } = value);
  } else if (isObjectParameter(compareArray, 'compareArray, match', 'unmatch')) {
    ({ compareArray, match, unmatch = value } = compareArray);
  } else if (isObjectParameter(match, 'match', 'unmatch')) {
    ({ match, unmatch = value } = match);
  } else if (isObjectParameter(unmatch, 'unmatch')) {
    ({ unmatch } = unmatch);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchAllValue args(compareArray) is not array',
    );
  }

  return _matchAllValue(
    value,
    compareArray,
    match,
    unmatch,
  );
};

module.exports = {
  _matchAllValue,
  matchAllValue,
};
