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
  isEven,
  _inRange,
} from '../number/number.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {  _clone } from '../root/clone.js';
import {  _cloneDeep } from '../root/cloneDeep.js';
import { _unique } from '../array/_unique.js';
import { _min } from '../array/_min.js';
import { _max } from '../array/_max.js';

/**
 * from
 */
export const from = (arrayLike) => {
  return Array.prototype.slice.call(arrayLike);
};

/**
 * sum
 */
export const _sum = (array) => {
  let result = 0;
  for (let i = 0, l = array.length; i < l; i += 1) {
    result += array[i];
  }
  return result;
};

export const sum = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'sum args(array) is not array',
    );
  }
  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError(
      'sum args(array) element is not number',
    );
  }
  return _sum(array);
};

/**
 * average
 */
export const _average = (array) => {
  if (array.length === 0) {
    return null;
  }
  return _sum(array) / array.length;
};

export const average = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'average args(array) is not array',
    );
  }
  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError(
      'average args(array) element is not number',
    );
  }
  return _average(array);
};

/**
 * median
 */
export const _median = (array) => {
  if (array.length === 0) {
    return null;
  }
  const sortedArray = _cloneDeep(array);
  sortedArray.sort((a, b) => {
    return a - b;
  });
  if (isEven(sortedArray.length)) {
    // Even number length
    const centerIndex = sortedArray.length / 2;
    return (
      sortedArray[centerIndex - 1] +
      sortedArray[centerIndex]
    ) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

export const median = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'median args(array) is not array',
    );
  }
  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError(
      'median args(array) element is not number',
    );
  }
  return _median(array);
};

/**
 * mode
 */
export const _mode = (array) => {
  if (array.length === 0) {
    return [];
  }
  const uniqueArray = _unique(array);
  const countArray = _map(uniqueArray,
    (element1) => _filter(array,
      (element2) => element1 === element2).length,
  );
  const maxValue = _max(countArray);
  return _filter(uniqueArray,
    (element, index) => countArray[index] === maxValue,
  );
};

export const mode = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'mode args(array) is not array',
    );
  }
  return _mode(array);
};

/**
 * single
 */
export const _single = (array) => {
  if (array.length === 0) {
    return [];
  }
  const uniqueArray = _unique(array);
  const countArray = _map(uniqueArray,
    (element1) => _filter(array,
      (element2) => element1 === element2).length,
  );
  return _filter(uniqueArray,
    (element, index) => countArray[index] === 1,
  );
};

export const single = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'single args(array) is not array',
    );
  }
  return _single(array);
};

/**
 * multiple
 */
export const _multiple = (array) => {
  if (array.length === 0) {
    return [];
  }
  const uniqueArray = _unique(array);
  const countArray = _map(uniqueArray,
    (element1) => _filter(array,
      (element2) => element1 === element2).length,
  );
  return _filter(uniqueArray,
    (element, index) => countArray[index] >= 2,
  );
};

export const multiple = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'multiple args(array) is not array',
    );
  }
  return _multiple(array);
};

/**
 * filter
 */
export const _filter = (array, func) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_filter args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      result.push(array[i]);
    }
  }
  return result;
};

export const filter = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'filter args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'filter args(func) is not function',
    );
  }
  return _filter(array, func);
};

/**
 * map
 */
export const _map = (array, func) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }
  return result;
};

export const map = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'map args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'map args(productFunc) is not function',
    );
  }
  return _map(array, func);
};

/**
 * count
 */
export const _count = (array, func) => {
  let result = 0;
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_count args(func) result is not boolean',
      );
    }
    if (resultFunc) {
      result += 1;
    }
  }
  return result;
};

export const count = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'count args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'count args(func) is not function',
    );
  }
  return _count(array, func);
};

/**
 * findFirstIndex
 */
export const _findFirstIndex = (array, func) => {
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_findFirstIndex args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      return i;
    }
  }
  return -1;
};

export const findFirstIndex = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findFirstIndex args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findFirstIndex args(compareFunc) is not function',
    );
  }
  return _findFirstIndex(array, func);
};

export const findIndex = findFirstIndex;

/**
 * findLastIndex
 */
export const _findLastIndex = (array, func) => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_findLastIndex args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      return i;
    }
  }
  return -1;
};

export const findLastIndex = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findLastIndex args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findLastIndex args(compareFunc) is not function',
    );
  }
  return _findLastIndex(array, func);
};

export const findBackIndex = findLastIndex;

/**
 * findFirst
 */
export const _findFirst = (array, func) => {
  const resultIndex = _findFirstIndex(array, func);
  if (resultIndex === -1) {
    return undefined;
  }
  return array[resultIndex];
};

export const findFirst = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findFirst args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findFirst args(compareFunc) is not function',
    );
  }
  return _findFirst(array, func);
};

export const find = findFirst;

/**
 * findLast
 */
export const _findLast = (array, func) => {
  const resultIndex = _findLastIndex(array, func);
  if (resultIndex === -1) {
    return undefined;
  }
  return array[resultIndex];
};

export const findLast = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'findLast args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'findLast args(compareFunc) is not function',
    );
  }
  return _findLast(array, func);
};

export const findBack = findLast;

/**
 * some
 */
export const _some = (array, func) => {
  return (_findFirstIndex(array, func) !== -1);
};

export const some = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'some args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'some args(compareFunc) is not function',
    );
  }
  return _some(array, func);
};


/**
 * all:every
 */
export const _all = (array, func) => {
  if (array.length === 0) {
    return false;
  }
  return (_filter(array, func).length === array.length);
};

export const all = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'all args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'all args(compareFunc) is not function',
    );
  }

  return _all(array, func);
};

export const every = all;

/**
 * isFirst
 */
export const _isFirst = (array, valueArray) => {
  if (array.length < valueArray.length ) {
    return false;
  }
  return _all(
    valueArray,
    (value, index) => {
      const firstValue = array[index];
      if (isFunction(value)) {
        return value(firstValue);
      }
      return firstValue === value;
    },
  );
};

export const isFirst = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  } else if (isObjectParameter(valueArray, 'valueArray')) {
    ({ valueArray } = valueArray);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'isFirst args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'isFirst args(valueArray) is not array',
    );
  }

  return _isFirst(array, valueArray);
};

/**
 * isLast
 */
export const _isLast = (array, valueArray) => {
  if (array.length < valueArray.length ) {
    return false;
  }
  return _all(
    valueArray,
    (value, index) => {
      const lastValue = array[
        array.length - valueArray.length + index
      ];
      if (isFunction(value)) {
        return value(lastValue);
      }
      return lastValue === value;
    },
  );
};

export const isLast = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  } else if (isObjectParameter(valueArray, 'valueArray')) {
    ({ valueArray } = valueArray);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'isLast args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'isFirst args(valueArray) is not array',
    );
  }

  return _isLast(array, valueArray);
};

/**
 * isBothEnds
 */
export const _isBothEnds = (
  array,
  valueFirstArray,
  valueLastArray = valueFirstArray,
) => {
  if (array.length <= 1) {
    return false;
  }
  return _isFirst(array, valueFirstArray) && _isLast(array, valueLastArray);
};

export const isBothEnds = (
  array,
  valueFirstArray,
  valueLastArray = valueFirstArray,
) => {
  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    ({ array, valueFirstArray, valueLastArray = valueFirstArray } = array);
  } else if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray: valueFirstArray } = array);
    valueLastArray = valueFirstArray;
  }

  if (!isArray(array)) {
    throw new TypeError(
      'isBothEnds args(array) is not array',
    );
  }
  if (!isArray(valueFirstArray)) {
    throw new TypeError(
      'isBothEnds args(valueFirstArray) is not array',
    );
  }
  if (!isArray(valueLastArray)) {
    throw new TypeError(
      'isBothEnds args(valueLastArray) is not array',
    );
  }

  return _isBothEnds(array, valueFirstArray, valueLastArray);
};

/**
 * subIndex
 */
export const _subIndex = (
  array, indexStart, indexEnd = indexStart,
) => {
  return array.slice(indexStart, indexEnd + 1);
};

export const subIndex = (
  array, indexStart, indexEnd = indexStart,
) => {
  if (isObjectParameter(array, 'array, indexStart', 'indexEnd')) {
    ({ array, indexStart, indexEnd = indexStart } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'subIndex args(array) is not array',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'subIndex args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, array.length - 1)) {
    throw new RangeError(
      'subIndex args(indexStart) must be from 0 to array.length - 1',
    );
  }
  if (!isInteger(indexEnd)) {
    throw new TypeError(
      'subIndex args(indexEnd) is not integer',
    );
  }
  if (!_inRange(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError(
      'subIndex args(indexEnd) must be from indexStart to array.length - 1',
    );
  }

  return _subIndex(array, indexStart, indexEnd);
};

/**
 * subLength
 */
export const _subLength = (
  array, index, length = array.length - index,
) => {
  return _subIndex(array, index, index + length - 1);
  // same:
  //  return array.slice(index, index + length);
};

export const subLength = (
  array, index, length = array.length - index,
) => {
  if (isObjectParameter(array, 'array, index', 'length')) {
    ({
      array, index, length = array.length - index,
    } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'subLength args(array) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'subLength args(index) is not integer',
    );
  }
  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError(
      'subLength args(index) must be from 0 to array.length - 1',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subLength args(length) is not integer',
    );
  }
  length = _min([length, array.length - index]);
  if (!_inRange(length, 0, array.length - index)) {
    throw new RangeError(
      'subLength args(length) must be from 0 to array.length - 1',
    );
  }

  return _subLength(array, index, length);
};

/**
 * subFirst
 */
export const _subFirst = (array, length = 1) => {
  return _subLength(
    array, 0, length,
  );
};

export const subFirst = (array, length = 1) => {
  if (isObjectParameter(array, 'array, length')) {
    ({ array, length = 1 } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'subFirst args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subFirst args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, array.length)) {
    throw new RangeError(
      'subFirst args(length) must be from 0 to array.length',
    );
  }

  return _subFirst(array, length);
};

/**
 * subLast
 */
export const _subLast = (array, length = 1) => {
  return _subLength(
    array, array.length - length, length,
  );
};

export const subLast = (array, length = 1) => {
  if (isObjectParameter(array, 'array, length')) {
    ({ array, length = 1 } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'subLast args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subLast args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, array.length)) {
    throw new RangeError(
      'subLast args(length) must be from 0 to array.length',
    );
  }

  return _subLast(array, length);
};

export default {
  _sum, _average, _median,
  _mode,
  _single, _multiple,
  _filter, _map, _count,
  _findFirstIndex, _findLastIndex,
  _findFirst, _findLast,
  _some, _all,
  _isFirst, _isLast, _isBothEnds,
  _subIndex, _subLength,
  _subFirst, _subLast,

  from,
  sum, average, median,
  mode,
  single, multiple,
  filter, map, count,
  findFirstIndex, findLastIndex,
  findFirst, findLast,
  some, all,
  isFirst, isLast, isBothEnds,
  subIndex, subLength,
  subFirst, subLast,

  findIndex, findBackIndex,
  find, findBack,
  every,

};

