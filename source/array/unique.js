import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  canUseSet,
} from '../syntax/syntax.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * uniqe
 */
export const __unique = (array) => {
  if (canUseSet() && array.length > 120) {
    return [...(new Set(array))];
  } else {
    const result = [];
    for (let i = 0, l = array.length; i < l; i += 1) {
      if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }
    return result;
  }
  // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120
};

export const _unique = (array, func, detail) => {
  if (isUndefined(func)) {
    if (detail === false) {
      return __unique(array);
    }
    func = v => v;
  }

  const index = [];
  const result = [];
  array.forEach(v => {
    const funcResult = func(v);
    const i = index.indexOf(funcResult);
    if (i === -1) {
      index.push(funcResult);
      result.push(v);
    }
  });

  if (detail) {
    return { index, result };
  }
  return result;
};

export const unique = (array, func, detail = false) => {
  if (isObjectParameter(array, 'array', 'func, detail')) {
    ({ array, func, detail = false } = array);
  } else if (isObjectParameter(func, '', 'func, detail')) {
    ({ func, detail = false } = func);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'unique args(array) is not array',
    );
  }
  if (!(isFunction(func) || isUndefined(func))) {
    throw new TypeError(
      'group args(func) is not [function|undefined]',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'group args(detail) is not boolean',
    );
  }
  if (detail && isUndefined(func)) {
    throw new TypeError(
      'group args(detail) is true and args(func) must be function',
    );
  }

  return _unique(array, func, detail);
};

export default {
  __unique,
  _unique,
  unique,
};
