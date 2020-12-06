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

export default { _copyProperty };
