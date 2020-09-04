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
 * objectKeys
 */
export const _objectKeys = (object) => {
  const result = [];
  for (const key in object) {
    if (_hasOwn(object, key)) {
      result.push(key);
    }
  }
  return result;
};

export const objectKeys = (object) => {
  if (isObjectParameter(object, 'object')) {
    ({ object } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'objectKeys args(object) is not object',
    );
  }

  return _objectKeys(object);
};

export const objectToKeyArray = objectKeys;

export default {
  _objectKeys,
  objectKeys,
  objectToKeyArray,
};
