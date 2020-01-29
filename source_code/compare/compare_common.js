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
 * or
 */
const _or = (value, compareArray) => {
  for (let i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }
  return false;
};

const or = (value, compareArray) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'or args(compareArray) is not array',
    );
  }

  return _or(value, compareArray);
};

module.exports = {
  _or,
  or,
};
