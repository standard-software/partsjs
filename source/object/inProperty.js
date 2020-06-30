import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike, isModule,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,
} from '../type/isType.js';

import {
  _replaceAll,
} from '../string/_replaceAll.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _getPropertyBase,
} from '../object/getProperty.js';

/**
 * _inProperty
 */
export const _inProperty = (object, propertyPaths, hasOwn = true) => {

  if (!isObjectLike(object)) {
    return false;
  }

  if (isString(propertyPaths)) {
    propertyPaths = _replaceAll(propertyPaths, ' ', '').split(',');
  }

  for (let i = 0; i < propertyPaths.length; i += 1) {
    if ((i !== 0) && (i === propertyPaths.length - 1)) {
      if ((propertyPaths[i] === '')
      || (isUndefined(propertyPaths[i]))) {
        continue;
      }
    }
    if (!isString(propertyPaths[i])) {
      throw new TypeError(
        '_inProperty args(propertyPaths) element is not string',
      );
    }
    const result = _getPropertyBase(object, propertyPaths[i], hasOwn);
    if (result.in === false) {
      return false;
    }
  }
  return true;
};

/**
 * inProperty
 */
export const inProperty = (object, propertyPaths, hasOwn = true) => {
  if (isObjectParameter(object, 'object, propertyPaths', 'hasOwn')) {
    ({ object, propertyPaths, hasOwn = true } = object);
  } else if (isObjectParameter(propertyPaths, 'propertyPaths', 'hasOwn')) {
    ({ propertyPaths, hasOwn = true } = propertyPaths);
  } else if (isObjectParameter(hasOwn, 'hasOwn')) {
    ({ hasOwn } = hasOwn);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'inProperty args(object) is not object type',
    );
  }

  if (!(isString(propertyPaths) || isArray(propertyPaths))) {
    throw new TypeError(
      'inProperty args(propertyPaths) is not [array|string]',
    );
  }
  if (!isBoolean(hasOwn)) {
    throw new TypeError(
      'inProperty args(hasOwn) is not boolean',
    );
  }

  return _inProperty(
    object,
    propertyPaths,
    hasOwn,
  );
};

export const inProp = inProperty;

export default {
  _inProperty,

  inProperty,
  inProp,
};
