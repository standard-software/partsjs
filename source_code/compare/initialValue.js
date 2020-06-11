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
} = require('../compare/match.js');

/**
 * initialValue
 */
const _initialValue = (
  value,
  valueWhenMatched,
  compareArray = [undefined],
) => {
  return _matchSomeValue(value, compareArray, valueWhenMatched);
};

const initialValue = (
  value,
  valueWhenMatched,
  compareArray = [undefined],
) => {
  if (isObjectParameter(value, 'value, valueWhenMatched', 'compareArray')) {
    ({
      value, valueWhenMatched, compareArray = [undefined],
    } = value);
  }

  return _initialValue(
    value,
    valueWhenMatched,
    compareArray,
  );
};

module.exports = {
  _initialValue,
  initialValue,
};
