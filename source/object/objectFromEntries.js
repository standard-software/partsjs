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
  _all,
} from '../array/array_common.js';

import {
  _objectFromEntries,
} from '../object/_objectFromEntries.js';

/**
 * objectFromEntries
 */
export const objectFromEntries = (entries) => {
  if (!isArray(entries)) {
    throw new TypeError(
      'objectFromEntries args(entriesArray) is not array',
    );
  }
  if (!(
    entries.length === 0
    || _all(entries, element => isArray(element) && element.length === 2)
  )) {
    throw new TypeError(
      'objectFromEntries args(entries) element is not array.length === 2',
    );
  }

  return _objectFromEntries(entries);
};

export const objectFromKeyValueArray = objectFromEntries;

export default {
  objectFromEntries,
  objectFromKeyValueArray,
};
