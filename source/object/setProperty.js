import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import { isObjectParameter } from '../object/isObjectParameter.js';
import { _propertyCount } from '../object/_propertyCount.js';
import { _replaceAll } from '../string/_replaceAll.js';
import { _splitCommaItems } from '../string/splitCommaItems.js';
import { _splitDotItems } from '../string/splitDotItems.js';
import { __includes } from '../compare/__includes.js';
import { _excludeFirst } from '../string/string_common.js';
import { _setProperty } from '../object/_setProperty.js';

/**
 * setProperty
 */
export const setProperty = (object, propertyPath, value) => {
  if (isObjectParameter(object, 'object, propertyPath, value')) {
    ({ object, propertyPath, value } = object);
  } else if (isObjectParameter(propertyPath, 'propertyPath, value')) {
    ({ propertyPath, value } = propertyPath);
  } else if (isObjectParameter(value, 'value')) {
    ({ value } = value);
  }

  if (!isObjectLike(object)) {
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

export const setProp = setProperty;

export default { setProperty, setProp };
