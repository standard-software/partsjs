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
  _or,
} from '../../compare/or.js';

import {
  isObjectParameter,
} from '../../object/isObjectParameter.js';

/**
 * array.operation.sort
 */
export const _sort = (
  array,
  order = sort.order.ascending,
  func = v => v,
) => {
  const orderFunc =
    switch_(order)([
      [sort.order.ascending, () => sort.orderFunction.ascending],
      [sort.order.descending, () => sort.orderFunction.descending],
      [
        () => { throw new Error(
          '_sort args(order) is not ["ascending"|"descending"]',
        ); },
      ],
    ]);

  array.sort((a, b) => {
    return orderFunc(func(a), func(b));
  });
  return array;
};

export const sort = (
  array,
  order = sort.order.ascending,
  func = v => v,
) => {
  if (isObjectParameter(array, 'array', 'order, func')) {
    ({ array, order = sort.order.ascending, func = v => v } = array);
  } else if (isObjectParameter(order, '', 'order, func')) {
    ({ order = sort.order.ascending, func = v => v } = order);
  } else if (isObjectParameter(func, 'func')) {
    ({ func = v => v } = func);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'sort args(array) is not array',
    );
  }
  if (!_or(order, [sort.order.ascending, sort.order.descending])) {
    throw new TypeError(
      'sort args(order) is not ["ascending"|"descending"]',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'sort args(func) is not function',
    );
  }

  return _sort(array, order, func);
};

sort.orderFunction = {
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

sort.order = {
  ascending: 'ascending',
  descending: 'descending',
};

export const _sortNumber = (array, order) => {
  return _sort(array, order);
};

export const sortNumber = (array, order) => {
  return sort(array, order, v => {
    if (!isNumber(v)) {
      throw new TypeError('sortLength args(array) element is not number');
    }
    return v;
  });
};

export const _sortLength = (array, order) => {
  return sort(array, order, v => v.length);
};

export const sortLength = (array, order) => {
  return sort(array, order, v => {
    if (!(isString(v) || ('length' in v))) {
      throw new TypeError('sortLength args(array) element must have length property');
    }
    return v.length;
  });
};

export const _sortDictionary = (array, order) => {
  return sort(array, order);
};

export const sortDictionary = (array, order) => {
  return sort(array, order, v => {
    if (!isString(v)) {
      throw new TypeError('sortLength args(array) element is not string');
    }
    return v;
  });
};

export const sortNumberAscending = (array) => {
  return sortNumber(array, sort.order.ascending);
};

export const sortNumberDescending = (array) => {
  return sortNumber(array, sort.order.descending);
};

export const sortLengthAscending = (array) => {
  return sortLength(array, sort.order.ascending);
};

export const sortLengthDescending = (array) => {
  return sortLength(array, sort.order.descending);
};

export const sortDictionaryAscending = (array) => {
  return sortDictionary(array, sort.order.ascending);
};

export const sortDictionaryDescending = (array) => {
  return sortDictionary(array, sort.order.descending);
};

export default {
  _sort,
  _sortNumber,
  _sortLength,
  _sortDictionary,

  sort,
  sortNumber,
  sortLength,
  sortDictionary,
  sortNumberAscending, sortNumberDescending,
  sortLengthAscending, sortLengthDescending,
  sortDictionaryAscending, sortDictionaryDescending,
};
