import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * group
 */
export const _group = (array, func = v => v, detail = false) => {
  const index = [];
  const result = [];
  array.forEach(v => {
    const funcResult = func(v);
    const i = index.indexOf(funcResult);
    if (i === -1) {
      index.push(funcResult);
      result.push([v]);
    } else {
      result[i].push(v);
    }
  });

  if (detail) {
    return { index, result };
  }
  return result;
};

export const group = (array, func = v => v, detail = false) => {
  if (isObjectParameter(array, 'array', 'func, detail')) {
    ({ array, func = v => v, detail = false } = array);
  } else if (isObjectParameter(func, '', 'func, detail')) {
    ({ func = v => v, detail = false } = func);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'group args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'group args(func) is not function',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'group args(detail) is not boolean',
    );
  }

  return _group(array, func, detail);
};

export default {
  _group,
  group,
};
