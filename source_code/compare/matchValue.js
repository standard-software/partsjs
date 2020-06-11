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
  match,
  unmatch = value,
) => {
  if (_match(value, compare)) {
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

const matchValue = (
  value,
  compare,
  match,
  unmatch = value,
) => {
  if (isObjectParameter(value, 'value, compare, match', 'unmatch')) {
    ({ value, compare, match, unmatch = value } = value);
  } else if (isObjectParameter(compare, 'compare, match', 'unmatch')) {
    ({ compare, match, unmatch = value } = compare);
  } else if (isObjectParameter(match, 'match', 'unmatch')) {
    ({ match, unmatch = value } = match);
  } else if (isObjectParameter(unmatch, 'unmatch')) {
    ({ unmatch } = unmatch);
  }

  return _matchValue(
    value,
    compare,
    match,
    unmatch,
  );
};

module.exports = {
  _matchValue,
  matchValue,
};
