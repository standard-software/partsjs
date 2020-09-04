import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
} from '../type/isType.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _hasOwn,
} from '../object/_hasOwn.js';

/**
 * objectValues
 */
export const _objectValues = (object) => {
  const result = [];
  for (const key in object) {
    if (_hasOwn(object, key)) {
      result.push(object[key]);
    }
  }
  return result;
};

export const objectValues = (object) => {
  if (isObjectParameter(object, 'object')) {
    ({ object } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'objectValues args(object) is not object',
    );
  }

  return _objectValues(object);
};

export const objectToValueArray = objectValues;

export default {
  _objectValues,
  objectValues,
  objectToValueArray,
};
