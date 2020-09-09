import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _hasOwn,
} from '../object/_hasOwn.js';

/**
 * has
 */
export const _has = (object, propertyName, hasOwn = false) => {
  if (hasOwn) {
    return _hasOwn(object, propertyName);
  } else {
    return propertyName in object;
  }
};

export const has = (object, propertyName, hasOwn = false) => {
  if (isObjectParameter(object, 'object, propertyName', 'hasOwn')) {
    ({ object, propertyName, hasOwn = false } = object);
  } else if (isObjectParameter(propertyName, 'propertyName', 'hasOwn')) {
    ({ propertyName, hasOwn = false } = propertyName);
  } else if (isObjectParameter(hasOwn, 'hasOwn')) {
    ({ hasOwn } = hasOwn);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'has args(object) is not objectLike',
    );
  }
  if (!isString(propertyName)) {
    throw new TypeError(
      'has args(propertyName) is not string',
    );
  }
  if (!isBoolean(hasOwn)) {
    throw new TypeError(
      'has args(hasOwn) is not boolean',
    );
  }

  return _has(object, propertyName, hasOwn);
};

/**
 * hasPrototype
 */
export const _hasPrototype = (object, propertyName) => {
  if (!(propertyName in object)) {
    return false;
  }
  return !_hasOwn(object, propertyName);
};

export const hasPrototype = (object, propertyName) => {
  if (isObjectParameter(object, 'object, propertyName')) {
    ({ object, propertyName } = object);
  } else if (isObjectParameter(propertyName, 'propertyName')) {
    ({ propertyName } = propertyName);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'hasPrototype args(object) is not objectLike',
    );
  }
  if (!isString(propertyName)) {
    throw new TypeError(
      'hasPrototype args(propertyName) is not string',
    );
  }

  return _hasPrototype(object, propertyName);
};

export default {
  _hasPrototype, _has,
  hasPrototype, has,
};
