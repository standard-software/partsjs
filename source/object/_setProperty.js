import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import { _propertyCount } from '../object/_propertyCount.js';
import { _replaceAll } from '../string/_replaceAll.js';
import { _splitCommaItems } from '../string/splitCommaItems.js';
import { _splitDotItems } from '../string/splitDotItems.js';
import { __includes } from '../compare/__includes.js';
import { _excludeFirst } from '../string/string_common.js';

/**
 * setProperty
 */
export const _setProperty = (object, propertyPath, value) => {
  const propertyArray = _splitDotItems(propertyPath);
  if (propertyArray.length === 0) {
    throw new Error('setProperty args(propertyPath) is empty string');
  }
  for (let i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
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

export default { _setProperty };
