import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _hasOwn,
} from '../object/_hasOwn.js';

/**
 * hasOwn
 */
export const hasOwn = (object, propertyName) => {
  if (isObjectParameter(object, 'object, propertyName')) {
    ({ object, propertyName } = object);
  } else if (isObjectParameter(propertyName, 'propertyName')) {
    ({ propertyName } = propertyName);
  }

  if (!isObjectLike(object)) {
    throw new TypeError(
      'hasOwn args(object) is not object type',
    );
  }
  if (!isString(propertyName)) {
    throw new TypeError(
      'hasOwn args(propertyName) is not string',
    );
  }

  return _hasOwn(object, propertyName);
};

export default {
  hasOwn,
};
