import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

/**
 * function Value
 */
export const functionValue = (value) => {
  if (isFunction(value)) {
    return value();
  } else {
    return value;
  }
};

export default {
  functionValue,
};
