import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isStringArray,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _replaceAllArray,
} from '../string/_replaceAllArray.js';

import { allMatchAll } from '../compare/allMatchAll.js';

/**
 * replaceAllArray
 */
export const replaceAllArray = (str, replaceArray) => {
  if (isObjectParameter(str, 'str, replaceArray')) {
    ({ str, replaceArray } = str);
  } else if (isObjectParameter(replaceArray, 'replaceArray')) {
    ({ replaceArray } = replaceArray);
  }

  if (!isString(str)) {
    throw new TypeError(
      'replaceAllArray args(str) is not string',
    );
  }
  if (!allMatchAll(replaceArray, [
    isArray,
    element => isStringArray(element),
    element => element.length === 2,
  ])) {
    throw new TypeError(
      'replaceAllArray args(replaceArray) element is not string array(length is 2)',
    );
  }

  return _replaceAllArray(str, replaceArray);
};

export default {
  replaceAllArray,
};
