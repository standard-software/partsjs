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

/**
 * match
 */
const _match = (value, compare) => {
  if (isString(value)) {
    let result;
    if (isRegExp(compare)) {
      result = value.match(compare) !== null;
    } else if (isFunction(compare)) {
      result = compare(value);
      if (!isBoolean(result)) {
        throw new TypeError(
          '_match args(compareArray element function result) is not boolean',
        );
      }
    } else {
      result = value === compare;
    }
    return result;
  } else {
    let result;
    if (isFunction(compare)) {
      result = compare(value);
      if (!isBoolean(result)) {
        throw new TypeError(
          '_match args(compareArray element function result) is not boolean',
        );
      }
    } else {
      result = value === compare;
    }
    return result;
  }
};

const match = (
  value,
  compare,
) => {
  if (isObjectParameter(value, 'value, compare')) {
    ({ value, compare } = value);
  } else if (isObjectParameter(compare, 'compare')) {
    ({ compare } = compare);
  }

  return _match(value, compare);
};

module.exports = {
  _match,
  match,
};
