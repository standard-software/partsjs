import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,
} from '../type/isType.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _hasOwn,
} from '../object/_hasOwn.js';

/**
 * objectEntries
 */
export const _objectEntries = (object) => {
  const result = [];
  for (const key in object) {
    if (_hasOwn(object, key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
};

export const objectEntries = (object) => {
  if (isObjectParameter(object, 'object')) {
    ({ object } = object);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'objectEntries args(object) is not object',
    );
  }

  return _objectEntries(object);
};

export const objectToKeyValueArray = objectEntries;

export default {
  _objectEntries,
  objectEntries,
  objectToKeyValueArray,
};
