import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
} from '../type/isType.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * objectToKeyValueArray
 */
export const _objectToKeyValueArray = (object) => {
  const result = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
};

export const objectToKeyValueArray = (object) => {
  if (isObjectParameter(object, 'object')) {
    ({ object } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'objectToKeyValueArray args(object) is not object',
    );
  }

  return _objectToKeyValueArray(object);
};

export const objectEntries = objectToKeyValueArray;

export default {
  _objectToKeyValueArray,
  objectToKeyValueArray,

  objectEntries,
}
