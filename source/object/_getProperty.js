import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import { _has } from '../object/has.js';
import { _splitDotItems } from '../string/splitDotItems.js';

/**
 * getProperty
 */
export const _getProperty = (
  object,
  propertyPath,
  hasOwn = true,
  detail = false,
) => {
  let result = object;
  const propertyArray = _splitDotItems(propertyPath);

  if (propertyArray.length === 0) {
    return detail ? { exist: false} : undefined;
  }

  for (let i = 0, l = propertyArray.length; i < l; i += 1) {
    if (!isObjectLike(result)) {
      return detail ? { exist: false} : undefined;
    }
    const hasResult = _has(result, propertyArray[i], hasOwn);
    if (!hasResult) {
      return detail ? { exist: false} : undefined;
    }
    result = result[propertyArray[i]];
  }
  return detail ? { exist: true, value: result} : result;
};

export default { _getProperty };
