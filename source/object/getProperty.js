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
  _has,
} from '../object/has.js';

/**
 * getProperty
 */
export const _getPropertyBase = (
  object,
  propertyPath,
  hasOwn = true,
) => {
  let result = object;
  const propertyArray = propertyPath.split('.');
  for (let i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '' ) {
      return { in: false };
    }

    const hasResult = _has(result, propertyArray[i], hasOwn);
    if (!hasResult) {
      return { in: false};
    }

    if (isUndefined(result[propertyArray[i]])) {
      return { in: true, value: undefined };
    }

    result = result[propertyArray[i]];
  }
  return { in: true, value: result};
};


export const _getProperty = (
  object,
  propertyPath,
  hasOwn = true,
) => {
  const result = _getPropertyBase(object, propertyPath, hasOwn);

  if (!isBoolean(result.in)) {
    throw new Error('_getProperty _getPropertyBase result is not boolean');
  }

  if (result.in === false) {
    return undefined;
  } else {
    return result.value;
  }
};

export const getProperty = (object, propertyPath, hasOwn = true) => {
  if (isObjectParameter(object, 'object, propertyPath', 'hasOwn')) {
    ({ object, propertyPath, hasOwn = true } = object);
  }

  if (!isObject(object)) {
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

  return _getProperty(object, propertyPath, hasOwn);
};

export const getProp = getProperty;

export default {
  _getPropertyBase,
  _getProperty,
  getProperty,
  getProp,
}