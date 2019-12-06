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

module.exports = {
  _min, _max,
  _sum, _average, _midian,
  // _mode,

  from,
  min, max,
  sum, average, midian,
  // mode,

};

