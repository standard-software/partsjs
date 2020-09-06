import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike, isModule,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isStringArray,
} from '../type/type.js';

import {
  _replaceAll,
} from '../string/_replaceAll.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _getProperty,
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
    const result = _getProperty(object, propertyPaths[i], hasOwn, true);
    if (result.exist === false) {
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
      'inProperty args(object) is not objectLike',
    );
  }

  if (!(isString(propertyPaths) || isStringArray(propertyPaths))) {
    throw new TypeError(
      'inProperty args(propertyPaths) is not [string array|string]',
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
