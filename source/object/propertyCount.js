import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _propertyCount,
} from '../object/_propertyCount.js';

/**
 * propertyCount
 */
export const propertyCount = (object, hasOwn = true) => {
  if (isObjectParameter(object, 'object', 'hasOwn')) {
    ({ object, hasOwn = true } = object);
  } else if (isObjectParameter(hasOwn, 'hasOwn')) {
    ({ hasOwn } = hasOwn);
  }

  if (!isObjectType(object)) {
    throw new TypeError(
      'propertyCount args(object) is not object type',
    );
  }
  if (!isBoolean(hasOwn)) {
    throw new TypeError(
      'getProperty args(hasOwn) is not boolean',
    );
  }

  return _propertyCount(object, hasOwn);
};

export const propCount = propertyCount;

export default {
  propertyCount,
  propCount,
};
