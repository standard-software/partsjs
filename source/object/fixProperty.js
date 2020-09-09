import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
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
  _hasOwn,
} from '../object/_hasOwn.js';

import {
  _propertyCount,
} from '../object/_propertyCount.js';

import {
  _splitCommaItems,
} from '../string/splitCommaItems.js';

import {
  __includes,
} from '../compare/__includes.js';

/**
 * _fixProperty
 */
export const _fixProperty = (object, propertyNames) => {

  if (isString(propertyNames)) {
    propertyNames = _splitCommaItems(propertyNames);
  } else {
    if (__includes(propertyNames, '')) {
      throw new Error(
        '_fixProperty args(propertyNames) element is not empty string',
      );
    }
  }

  for (let i = 0; i < propertyNames.length; i += 1) {
    const result = _hasOwn(object, propertyNames[i]);
    if (result === false) {
      return false;
    }
  }
  return _propertyCount(object) === propertyNames.length;
};

/**
 * fixProperty
 */
export const fixProperty = (object, propertyNames) => {
  if (isObjectParameter(object, 'object, propertyNames')) {
    ({ object, propertyNames } = object);
  } else if (isObjectParameter(propertyNames, 'propertyNames')) {
    ({ propertyNames } = propertyNames);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'fixProperty args(object) is not objectLike',
    );
  }

  if (!(isString(propertyNames) || isStringArray(propertyNames))) {
    throw new TypeError(
      'fixProperty args(propertyPaths) is not [string array|string]',
    );
  }

  return _fixProperty(
    object,
    propertyNames,
  );
};

export const fixProp = fixProperty;

export default {
  _fixProperty,

  fixProperty,
  fixProp,
};
