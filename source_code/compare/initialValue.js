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
  _matchSomeValue,
} = require('../compare/matchSomeValue.js');

/**
 * initialValue
 */
const _initialValue = (
  value,
  match,
  compareArray = [undefined],
) => {
  return _matchSomeValue(value, compareArray, match);
};

const initialValue = (
  value,
  match,
  compareArray = [undefined],
) => {
  if (isObjectParameter(value, 'value, match', 'compareArray')) {
    ({ value, match, compareArray = [undefined] } = value);
  } else if (isObjectParameter(match, 'match', 'compareArray')) {
    ({ match, compareArray = [undefined] } = match);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'initialValue args(compareArray) is not array',
    );
  }

  return _initialValue(
    value,
    match,
    compareArray,
  );
};

module.exports = {
  _initialValue,
  initialValue,
};
