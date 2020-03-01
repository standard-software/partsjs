"use strict";

var _require = require('../type/type.js'),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = require('../number/number.js'),
    isEven = _require2.isEven,
    _inRange = _require2._inRange;

var _require3 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = require('../root/clone.js'),
    _clone = _require4._clone,
    _cloneDeep = _require4._cloneDeep;
/**
 * array.min max
 */


var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

var min = function min(array) {
  if (!isArray(array)) {
    throw new TypeError('min args(array) is not array');
  }

  return _min(array);
};

var _max = function _max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

var max = function max(array) {
  if (!isArray(array)) {
    throw new TypeError('max args(array) is not array');
  }

  return _max(array);
};
/**
 * from
 */


var from = function from(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};
/**
 * sum
 */


var _sum = function _sum(array) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    result += array[i];
  }

  return result;
};

var sum = function sum(array) {
  if (!isArray(array)) {
    throw new TypeError('sum args(array) is not array');
  }

  return _sum(array);
};
/**
 * average
 */


var _average = function _average(array) {
  if (array.length === 0) {
    return null;
  }

  return _sum(array) / array.length;
};

var average = function average(array) {
  if (!isArray(array)) {
    throw new TypeError('average args(array) is not array');
  }

  return _average(array);
};
/**
 * median
 */


var _median = function _median(array) {
  var sortedArray = _cloneDeep(array);

  sortedArray.sort(function (a, b) {
    return a - b;
  });

  if (isEven(sortedArray.length)) {
    // Even number length
    var centerIndex = sortedArray.length / 2;
    return (sortedArray[centerIndex - 1] + sortedArray[centerIndex]) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

var median = function median(array) {
  if (!isArray(array)) {
    throw new TypeError('median args(array) is not array');
  }

  return _median(array);
};
/**
 * mode
 */


var _mode = function _mode(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  var maxValue = _max(countArray);

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === maxValue;
  });
};

var mode = function mode(array) {
  if (!isArray(array)) {
    throw new TypeError('mode args(array) is not array');
  }

  return _mode(array);
};
/**
 * uniqe
 */


var _unique = function _unique(array) {
  var resultArray = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!resultArray.includes(array[i])) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
};

var unique = function unique(array) {
  if (!isArray(array)) {
    throw new TypeError('unique args(array) is not array');
  }

  return _unique(array);
};
/**
 * single
 */


var _single = function _single(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === 1;
  });
};

var single = function single(array) {
  if (!isArray(array)) {
    throw new TypeError('single args(array) is not array');
  }

  return _single(array);
};
/**
 * multiple
 */


var _multiple = function _multiple(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] >= 2;
  });
};

var multiple = function multiple(array) {
  if (!isArray(array)) {
    throw new TypeError('multiple args(array) is not array');
  }

  return _multiple(array);
};
/**
 * filter
 */


var _filter = function _filter(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      result.push(array[i]);
    }
  }

  return result;
};

var filter = function filter(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!isArray(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, func);
};
/**
 * map
 */


var _map = function _map(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }

  return result;
};

var map = function map(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array2 = array;
    array = _array2.array;
    func = _array2.func;
  }

  if (!isArray(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return _map(array, func);
};
/**
 * count
 */


var _count = function _count(array, func) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_count args(func) result is not boolean');
    }

    if (resultFunc) {
      result += 1;
    }
  }

  return result;
};

var count = function count(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array3 = array;
    array = _array3.array;
    func = _array3.func;
  }

  if (!isArray(array)) {
    throw new TypeError('count args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('count args(func) is not function');
  }

  return _count(array, func);
};
/**
 * findIndex
 */


var _findFirstIndex = function _findFirstIndex(array, func) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_findFirstIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

var findFirstIndex = function findFirstIndex(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array4 = array;
    array = _array4.array;
    func = _array4.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findFirstIndex args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findFirstIndex args(compareFunc) is not function');
  }

  return _findFirstIndex(array, func);
};

var findIndex = findFirstIndex;
/**
 * findBackIndex
 */

var _findLastIndex = function _findLastIndex(array, func) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_findLastIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

var findLastIndex = function findLastIndex(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array5 = array;
    array = _array5.array;
    func = _array5.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findLastIndex args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findLastIndex args(compareFunc) is not function');
  }

  return _findLastIndex(array, func);
};

var findBackIndex = findLastIndex;
/**
 * findFirst
 */

var _findFirst = function _findFirst(array, func) {
  var resultIndex = _findFirstIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

var findFirst = function findFirst(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array6 = array;
    array = _array6.array;
    func = _array6.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findFirst args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findFirst args(compareFunc) is not function');
  }

  return _findFirst(array, func);
};

var find = findFirst;
/**
 * findLast
 */

var _findLast = function _findLast(array, func) {
  var resultIndex = _findLastIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

var findLast = function findLast(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array7 = array;
    array = _array7.array;
    func = _array7.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findLast args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findLast args(compareFunc) is not function');
  }

  return _findLast(array, func);
};

var findBack = findLast;
/**
 * some
 */

var _some = function _some(array, func) {
  return _findFirstIndex(array, func) !== -1;
};

var some = function some(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array8 = array;
    array = _array8.array;
    func = _array8.func;
  }

  if (!isArray(array)) {
    throw new TypeError('some args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('some args(compareFunc) is not function');
  }

  return _some(array, func);
};
/**
 * all:every
 */


var _all = function _all(array, func) {
  if (array.length === 0) {
    return false;
  }

  return _filter(array, func).length === array.length;
};

var all = function all(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array9 = array;
    array = _array9.array;
    func = _array9.func;
  }

  if (!isArray(array)) {
    throw new TypeError('all args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('all args(compareFunc) is not function');
  }

  return _all(array, func);
};

var every = all;
/**
 * isFirst
 */

var _isFirst = function _isFirst(array, value) {
  if (array.length === 0) {
    return false;
  }

  return array[0] === value;
};

var isLast = function isLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array10 = array;
    array = _array10.array;
    value = _array10.value;
  }

  if (!isArray(array)) {
    throw new TypeError('isLast args(array) is not array');
  }

  return _isLast(array, value);
};
/**
 * isLast
 */


var _isLast = function _isLast(array, value) {
  if (array.length === 0) {
    return false;
  }

  return array[array.length - 1] === value;
};

var isFirst = function isFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array11 = array;
    array = _array11.array;
    value = _array11.value;
  }

  if (!isArray(array)) {
    throw new TypeError('isFirst args(array) is not array');
  }

  return _isFirst(array, value);
};
/**
 * isBothEdges
 */


var _isBothEdges = function _isBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (array.length <= 1) {
    return false;
  }

  return _isFirst(array, valueFirst) && _isLast(array, valueLast);
};

var isBothEdges = function isBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    var _array12 = array;
    array = _array12.array;
    valueFirst = _array12.valueFirst;
    var _array12$valueLast = _array12.valueLast;
    valueLast = _array12$valueLast === void 0 ? valueFirst : _array12$valueLast;
  } else if (isObjectParameter(array, 'array, value')) {
    var _array13 = array;
    array = _array13.array;
    valueFirst = _array13.value;
    var _array13$valueLast = _array13.valueLast;
    valueLast = _array13$valueLast === void 0 ? valueFirst : _array13$valueLast;
  }

  if (!isArray(array)) {
    throw new TypeError('isBothEdges args(array) is not array');
  }

  return _isBothEdges(array, valueFirst, valueLast);
};

var isBothEnds = isBothEdges;
/**
 * subIndex
 */

var _subIndex = function _subIndex(array, indexFirst, indexLast) {
  return array.slice(indexFirst, indexLast + 1);
};

var subIndex = function subIndex(array, indexFirst, indexLast) {
  if (isObjectParameter(array, 'array, indexFirst, indexLast')) {
    var _array14 = array;
    array = _array14.array;
    indexFirst = _array14.indexFirst;
    indexLast = _array14.indexLast;
  }

  if (!isArray(array)) {
    throw new TypeError('subIndex args(array) is not array');
  }

  if (!isInteger(indexFirst)) {
    throw new TypeError('subIndex args(indexFirst) is not integer');
  }

  if (!_inRange(indexFirst, 0, array.length - 1)) {
    throw new RangeError('subIndex args(indexFirst) must be from 0 to array.length - 1');
  }

  if (!isInteger(indexLast)) {
    throw new TypeError('subIndex args(indexLast) is not integer');
  }

  if (!_inRange(indexLast, indexFirst, array.length - 1)) {
    throw new RangeError('subIndex args(indexLast) must be from 0 to array.length - 1');
  }

  return _subIndex(array, indexFirst, indexLast);
};
/**
 * subLength
 */


var _subLength = function _subLength(array, index, length) {
  return array.slice(index, index + length);
};

var subLength = function subLength(array, index, length) {
  if (isObjectParameter(array, 'array, index, length')) {
    var _array15 = array;
    array = _array15.array;
    index = _array15.index;
    length = _array15.length;
  }

  if (!isArray(array)) {
    throw new TypeError('subLength args(array) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('subLength args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError('subLength args(index) must be from 0 to array.length - 1');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length - 1)) {
    throw new RangeError('subLength args(length) must be from 0 to array.length - 1');
  }

  return _subLength(array, index, length);
};

module.exports = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
  _unique: _unique,
  _single: _single,
  _multiple: _multiple,
  _filter: _filter,
  _map: _map,
  _count: _count,
  _findFirstIndex: _findFirstIndex,
  _findLastIndex: _findLastIndex,
  _findFirst: _findFirst,
  _findLast: _findLast,
  _some: _some,
  _all: _all,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEdges: _isBothEdges,
  _subIndex: _subIndex,
  _subLength: _subLength,
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  median: median,
  mode: mode,
  unique: unique,
  single: single,
  multiple: multiple,
  filter: filter,
  map: map,
  count: count,
  findFirstIndex: findFirstIndex,
  findLastIndex: findLastIndex,
  findFirst: findFirst,
  findLast: findLast,
  some: some,
  all: all,
  isFirst: isFirst,
  isLast: isLast,
  isBothEdges: isBothEdges,
  subIndex: subIndex,
  subLength: subLength,
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every,
  isBothEnds: isBothEnds
};