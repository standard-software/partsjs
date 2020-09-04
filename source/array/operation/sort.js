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

import {
  _objectValues,
} from '../../object/objectValues.js';

import {
  _Enum,
} from '../../syntax/Enum.js';

/**
 * array.operation.sort
 */
export const _sort = (
  array,
  order = sort.order.ascending,
  func = sort.targetFunc.returnValue,
) => {
  const orderFunc =
    switch_(order)([
      [sort.order.ascending, () => sort.orderFunc.ascending],
      [sort.order.descending, () => sort.orderFunc.descending],
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

export const sort = (
  array,
  order = sort.order.ascending,
  func = sort.targetFunc.returnValue,
) => {
  if (isObjectParameter(array, 'array', 'order, func')) {
    ({
      array, order = sort.order.ascending, func = sort.targetFunc.returnValue,
    } = array);
  } else if (isObjectParameter(order, '', 'order, func')) {
    ({ order = sort.order.ascending, func = sort.targetFunc.returnValue } = order);
  } else if (isObjectParameter(func, 'func')) {
    ({ func = sort.targetFunc.returnValue } = func);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'sort args(array) is not array',
    );
  }
  if (!_or(order, _objectValues(sort.order))) {
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

sort.orderFunc = {
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

sort.order = _Enum(['ascending', 'descending']);

sort.targetFunc = {
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

export const _sortNumber = (array, order) => {
  return _sort(array, order);
};

export const sortNumber = (array, order) => {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsNumber);
};

export const _sortLength = (array, order) => {
  return sort(array, order, sort.targetFunc.returnLength);
};

export const sortLength = (array, order) => {
  return sort(array, order, sort.targetFunc.returnLengthErrorNotHasLength);
};

export const _sortDictionary = (array, order) => {
  return sort(array, order);
};

export const sortDictionary = (array, order) => {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsString);
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
