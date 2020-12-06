import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import { isObjectParameter } from '../object/isObjectParameter.js';
import { _has } from '../object/has.js';
import { _splitDotItems } from '../string/splitDotItems.js';
import { _getProperty } from '../object/_getProperty.js';

/**
 * getProperty
 */
export const getProperty = (object, propertyPath, hasOwn = true, detail = false) => {
  if (isObjectParameter(object, 'object, propertyPath', 'hasOwn, detail')) {
    ({ object, propertyPath, hasOwn = true, detail = false } = object);
  } else if (isObjectParameter(propertyPath, 'propertyPath', 'hasOwn, detail')) {
    ({ propertyPath, hasOwn = true, detail = false } = propertyPath);
  } else if (isObjectParameter(hasOwn, '', 'hasOwn, detail', 1)) {
    ({ hasOwn = true, detail = false } = hasOwn);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'getProperty args(object) is not object',
    );
  }
  if (!isString(propertyPath)) {
    throw new TypeError(
      'getProperty args(propertyPath) is not string',
    );
  }
  if (!isBoolean(hasOwn)) {
    throw new TypeError(
      'getProperty args(hasOwn) is not boolean',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'getProperty args(detail) is not boolean',
    );
  }

  return _getProperty(object, propertyPath, hasOwn, detail);
};

export const getProp = getProperty;

export default {
  getProperty,
  getProp,
};
