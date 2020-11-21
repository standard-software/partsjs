import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import {  isObjectParameter } from '../object/isObjectParameter.js';
import {  _propertyCount } from '../object/_propertyCount.js';
import {  _replaceAll } from '../string/_replaceAll.js';
import {  _splitCommaItems } from '../string/splitCommaItems.js';
import { _splitDotItems } from '../string/splitDotItems.js';
import {  __includes } from '../compare/__includes.js';
import {  _excludeFirst } from '../string/string_common.js';

/**
 * copyProperty
 */
export const _copyProperty = (fromObject, propertyNames, toObject = {}) => {

  if (isString(propertyNames)) {
    propertyNames = _splitCommaItems(propertyNames);
  } else {
    if (__includes(propertyNames, '')) {
      throw new Error(
        '_copyProperty args(propertyNames) element is not empty string',
      );
    }
  }

  for (let i = 0; i < propertyNames.length; i += 1) {
    toObject[propertyNames[i]] = fromObject[propertyNames[i]];
  }
  return toObject;
};

export const copyProperty = (fromObject, propertyNames, toObject = {}) => {
  if (isObjectParameter(fromObject, 'fromObject, propertyNames', 'toObject')) {
    ({ fromObject, propertyNames, toObject = {} } = fromObject);
  } else if (isObjectParameter(propertyNames, 'propertyNames', 'toObject')) {
    ({ propertyNames, toObject = {} } = propertyNames);
  } else if (isObjectParameter(toObject, 'toObject')) {
    ({ toObject } = toObject);
  }

  if (!isObject(fromObject)) {
    throw new TypeError(
      'copyProperty args(fromObject) is not object',
    );
  }
  if (!(isString(propertyNames) || isStringArray(propertyNames))) {
    throw new TypeError(
      'copyProperty args(propertyNames) is not [array|string]',
    );
  }
  if (!isObject(toObject)) {
    throw new TypeError(
      'copyProperty args(toObject) is not object',
    );
  }

  return _copyProperty(
    fromObject,
    propertyNames,
    toObject,
  );
};

/**
 * setProperty
 */
export const _setProperty = (object, propertyPath, value) => {
  const propertyArray = _splitDotItems(propertyPath);
  if (propertyArray.length === 0) {
    throw new Error('setProperty args(propertyPath) is empty string');
  }
  for (let i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '' ) {
      throw new Error('setProperty args(propertyPath) is empty string');
    }
  }

  let result = object;
  for (let i = 0, l = propertyArray.length - 1; i < l; i += 1) {
    if (
      !(
        isObject(result[propertyArray[i]])
        ||isArraySeries(result[propertyArray[i]])
      )
    ) {
      result[propertyArray[i]] = {};
    }
    result = result[propertyArray[i]];
  }
  result[propertyArray[propertyArray.length - 1]] = value;
  return result;
};

export const setProperty = (object, propertyPath, value) => {
  if (isObjectParameter(object, 'object, propertyPath, value')) {
    ({ object, propertyPath, value } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'setProperty args(object) is not object',
    );
  }
  if (!isString(propertyPath)) {
    throw new TypeError(
      'setProperty args(propertyPath) is not string',
    );
  }

  return _setProperty(object, propertyPath, value);
};

export const copyProp = copyProperty;
export const setProp = setProperty;

export default {
  _copyProperty,
  _setProperty,

  copyProperty,
  setProperty,

  copyProp,
  setProp,
};
