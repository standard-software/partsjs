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
import { _copyProperty } from '../object/_copyProperty.js';

/**
 * copyProperty
 */
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

export const copyProp = copyProperty;

export default { copyProperty, copyProp };
