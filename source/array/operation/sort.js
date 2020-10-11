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
  _or,
} from '../../compare/or.js';

import {
  isObjectParameter,
} from '../../object/isObjectParameter.js';

import {
  _objectValues,
} from '../../object/objectValues.js';

import {
  _sort,
} from '../../array/operation/_sort.js';

/**
 * array.operation.sort
 */
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

sort.orderFunc = _sort.orderFunc;

sort.order = _sort.order;

sort.targetFunc = _sort.targetFunc;

export const _sortNumber = (array, order) => {
  return _sort(array, order);
};

export const sortNumber = (array, order) => {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsNumber);
};

export const _sortLength = (array, order) => {
  return _sort(array, order, sort.targetFunc.returnLength);
};

export const sortLength = (array, order) => {
  return sort(array, order, sort.targetFunc.returnLengthErrorNotHasLength);
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

export default {
  _sortNumber,
  _sortLength,

  sort,
  sortNumber,
  sortLength,
  sortNumberAscending, sortNumberDescending,
  sortLengthAscending, sortLengthDescending,
};
