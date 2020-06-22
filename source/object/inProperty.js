import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
} from '../type/isType.js';

import {
  _replaceAll,
} from '../string/_replaceAll.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _getPropertyBase,
} from '../object/object_common.js';

/**
 * _inProperty
 */
export const _inProperty = (object, propertyPathArray, hasOwn = true) => {

  if (!isObject(object)) {
    return false;
  }

  if (isString(propertyPathArray)) {
    propertyPathArray = _replaceAll(propertyPathArray, ' ', '').split(',');
  }

  for (let i = 0; i < propertyPathArray.length; i += 1) {
    if ((i !== 0) && (i === propertyPathArray.length - 1)) {
      if ((propertyPathArray[i] === '')
      || (isUndefined(propertyPathArray[i]))) {
        continue;
      }
    }
    if (!isString(propertyPathArray[i])) {
      throw new TypeError(
        '_inProperty args(propertyArray) element is not string',
      );
    }
    const result = _getPropertyBase(object, propertyPathArray[i], hasOwn);
    if (result.in === false) {
      return false;
    }
  }
  return true;
};

/**
 * inProperty
 */
export const inProperty = (object, propertyPathArray, hasOwn = true) => {
  if (isObjectParameter(object, 'object, propertyPathArray', 'hasOwn')) {
    ({ object, propertyPathArray, hasOwn = true } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'inProperty args(object) is not object',
    );
  }

  if (!isString(propertyPathArray)) {
    if (!isArray(propertyPathArray)) {
      throw new TypeError(
        'inProperty args(propertyPathArray) is not [array|string]',
      );
    }
  }
  if (!isBoolean(hasOwn)) {
    throw new TypeError(
      'inProperty args(hasOwn) is not boolean',
    );
  }

  return _inProperty(
    object,
    propertyPathArray,
    hasOwn,
  );
};

export const inProp = inProperty;

export default {
  _inProperty,

  inProperty,
  inProp,
}
