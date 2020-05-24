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
  _match,
} = require('../compare/match.js');

/**
 * matchValue
 */
const _matchValue = (
  value,
  compare,
  thenResult,
  elseResult = value,
) => {
  if (_match(value, compare)) {
    if (isFunction(thenResult)) {
      return thenResult(value);
    }
    return thenResult;
  }
  if (isFunction(elseResult)) {
    return elseResult(value);
  }
  return elseResult;
};

const matchValue = (
  value,
  compare,
  thenResult,
  elseResult = value,
) => {
  if (isObjectParameter(
    value, 'value, compare, thenResult', 'elseResult',
  )) {
    ({ value, compare, thenResult, elseResult } = value);
  }

  return _matchValue(
    value,
    compare,
    thenResult,
    elseResult,
  );
};

module.exports = {
  _matchValue,
  matchValue,
};
