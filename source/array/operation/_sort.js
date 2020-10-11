import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} from '../../type/type.js';

import {
  switch_,
} from '../../syntax/syntax.js';

import {
  _Enum,
} from '../../syntax/_Enum.js';

/**
 * array.operation.sort
 */
export const _sort = (
  array,
  order = _sort.order.ascending,
  func = _sort.targetFunc.returnValue,
) => {
  const orderFunc =
    switch_(order)([
      [_sort.order.ascending, () => _sort.orderFunc.ascending],
      [_sort.order.descending, () => _sort.orderFunc.descending],
      [
        () => { throw new TypeError(
          '_sort args(order) is not ["ascending"|"descending"]',
        ); },
      ],
    ]);

  array.sort((a, b) => {
    return orderFunc(func(a), func(b));
  });
  return array;
};

_sort.orderFunc = {
  ascending: (a, b) => (
    a > b ? 1
    : a < b ? -1
    : 0
  ),
  descending: (a, b) => (
    a > b ? -1
    : a < b ? 1
    : 0
  ),
};

_sort.order = _Enum(['ascending', 'descending']);

_sort.targetFunc = {
  returnValue: v => v,
  returnValueErrorNotIsNumber: v => {
    if (!isNumber(v)) {
      throw new TypeError('sortNumber args(array) element is not number');
    }
    return v;
  },
  returnValueErrorNotIsString: v => {
    if (!isString(v)) {
      throw new TypeError('sortDictionary args(array) element is not string');
    }
    return v;
  },
  returnLength: v => v.length,
  returnLengthErrorNotHasLength: v => {
    if (!(isString(v) || ('length' in v))) {
      throw new TypeError('sortLength args(array) element must have length property');
    }
    return v.length;
  },
};

export default {
  _sort,
};
