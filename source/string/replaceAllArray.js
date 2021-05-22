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
export const replaceAllArray = (str, replaceArray, detail = false) => {
  if (isObjectParameter(str, 'str, replaceArray', 'detail')) {
    ({ str, replaceArray, detail = false } = str);
  } else if (isObjectParameter(replaceArray, 'replaceArray', 'detail')) {
    ({ replaceArray, detail = false } = replaceArray);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
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
  if (!isBoolean(detail)) {
    throw new TypeError(
      'replaceAllArray args(detail) is not boolean',
    );
  }

  return _replaceAllArray(str, replaceArray, detail);
};

export default {
  replaceAllArray,
};
