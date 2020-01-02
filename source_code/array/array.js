const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/type.js');

const {
  isEven,
} = require('../number/number.js');

const {
  _inProperty,
} = require('../object/_inProperty.js');

const {
  _clone, _cloneDeep,
} = require('../root/clone.js');

/**
 * array.min max
 */
const _min = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError(
        '_min args(array) element is not number',
      );
    }
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;
};

const min = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'min args(array) is not array',
    );
  }
  return _min(array);
};

const _max = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError(
        '_max args(array) element is not number',
      );
    }
    if (result < array[i]) {
      result = array[i];
    }
  }
  return result;
};

const max = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'max args(array) is not array',
    );
  }
  return _max(array);
};

/**
 * from
 */
const from = (arrayLike) => {
  return Array.prototype.slice.call(arrayLike);
};

/**
 * sum
 */
const _sum = (array) => {
  let result = 0;
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError(
        '_min args(array) element is not number',
      );
    }
    result += array[i];
  }
  return result;
};

const sum = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'sum args(array) is not array',
    );
  }
  return _sum(array);
};

/**
 * average
 */
const _average = (array) => {
  if (array.length === 0) {
    return null;
  }
  return _sum(array) / array.length;
};

const average = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'average args(array) is not array',
    );
  }
  return _average(array);
};

/**
 * midian
 */
const _midian = (array) => {
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

const midian = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'midian args(array) is not array',
    );
  }
  return _midian(array);
};

/**
 * mode
 */
const _mode = (array) => {
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

const mode = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'mode args(array) is not array',
    );
  }
  return _mode(array);
};

/**
 * uniqe
 */
const _unique = (array) => {
  const resultArray = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!resultArray.includes(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};

const unique = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'unique args(array) is not array',
    );
  }
  return _unique(array);
};

/**
 * single
 */
const _single = (array) => {
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

const single = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'single args(array) is not array',
    );
  }
  return _single(array);
};

/**
 * multiple
 */
const _multiple = (array) => {
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

const multiple = (array) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'multiple args(array) is not array',
    );
  }
  return _multiple(array);
};

/**
 * filter
 */
const _filter = (array, func) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!_isBoolean(resultFunc)) {
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

const filter = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'filter args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'filter args(compareFunc) is not function',
    );
  }
  return _filter(array, func);
};

/**
 * map
 */
const _map = (array, func) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }
  return result;
};

const map = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'map args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'map args(productFunc) is not function',
    );
  }
  return _map(array, func);
};

/**
 * count
 */
const _count = (array, func) => {
  let result = 0;
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!_isBoolean(resultFunc)) {
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

const count = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'count args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'count args(func) is not function',
    );
  }
  return _count(array, func);
};

/**
 * findIndex
 */
const _findIndex = (array, func) => {
  for (let i = 0, l = array.length; i < l; i += 1) {
    const resultFunc = func(array[i], i, array);
    if (!_isBoolean(resultFunc)) {
      throw new TypeError(
        '_findIndex args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      return i;
    }
  }
  return -1;
};

const findIndex = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'findIndex args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'findIndex args(compareFunc) is not function',
    );
  }
  return _findIndex(array, func);
};

const findIndexFirst = findIndex;

/**
 * findBackIndex
 */
const _findBackIndex = (array, func) => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const resultFunc = func(array[i], i, array);
    if (!_isBoolean(resultFunc)) {
      throw new TypeError(
        '_findBackIndex args(compareFunc) result is not boolean',
      );
    }
    if (resultFunc) {
      return i;
    }
  }
  return -1;
};

const findBackIndex = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'findBackIndex args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'findBackIndex args(compareFunc) is not function',
    );
  }
  return _findBackIndex(array, func);
};

const findIndexLast = findBackIndex;

/**
 * find
 */
const _find = (array, func) => {
  const resultIndex = _findIndex(array, func);
  if (resultIndex === -1) {
    return undefined;
  }
  return array[resultIndex];
};

const find = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'find args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'find args(compareFunc) is not function',
    );
  }
  return _find(array, func);
};

const findFirst = find;

/**
 * findBack
 */
const _findBack = (array, func) => {
  const resultIndex = _findBackIndex(array, func);
  if (resultIndex === -1) {
    return undefined;
  }
  return array[resultIndex];
};

const findBack = (array, func) => {
  if (!_isArray(array)) {
    throw new TypeError(
      'findBack args(array) is not array',
    );
  }
  if (!_isFunction(func)) {
    throw new TypeError(
      'findBack args(compareFunc) is not function',
    );
  }
  return _findBack(array, func);
};

const findLast = findBack;

module.exports = {
  _min, _max,
  _sum, _average, _midian,
  _mode,
  _unique, _single, _multiple,
  _filter, _map, _count,
  _findIndex,
  _findBackIndex,
  _find,
  _findBack,

  from,
  min, max,
  sum, average, midian,
  mode,
  unique, single, multiple,
  filter, map, count,
  findIndex, findIndexFirst,
  findBackIndex, findIndexLast,
  find, findFirst,
  findBack, findLast,

};

