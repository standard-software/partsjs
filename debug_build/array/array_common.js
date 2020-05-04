"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var _require5 = require('../syntax/syntax.js'),
    canUseSet = _require5.canUseSet;
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
  if (canUseSet() && array.length > 120) {
    return _toConsumableArray(new Set(array));
  } else {
    var result = [];

    for (var i = 0, l = array.length; i < l; i += 1) {
      if (!result.includes(array[i])) {
        result.push(array[i]);
      }
    }

    return result;
  } // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120

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
 * findFirstIndex
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
 * findLastIndex
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

var _isFirst = function _isFirst(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    return array[index] === value;
  });
};

var isFirst = function isFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array10 = array;
    array = _array10.array;
    valueArray = _array10.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('isFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isFirst(array, valueArray);
};
/**
 * isLast
 */


var _isLast = function _isLast(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    return array[array.length - valueArray.length + index] === value;
  });
};

var isLast = function isLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueArray = _array11.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('isLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isLast(array, valueArray);
};
/**
 * isBothEdges
 */


var _isBothEdges = function _isBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (array.length <= 1) {
    return false;
  }

  return _isFirst(array, valueFirstArray) && _isLast(array, valueLastArray);
};

var isBothEdges = function isBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array12 = array;
    array = _array12.array;
    valueFirstArray = _array12.valueFirstArray;
    var _array12$valueLastArr = _array12.valueLastArray;
    valueLastArray = _array12$valueLastArr === void 0 ? valueFirstArray : _array12$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueFirstArray = _array13.valueArray;
    var _array13$valueLastArr = _array13.valueLastArray;
    valueLastArray = _array13$valueLastArr === void 0 ? valueFirstArray : _array13$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('isBothEdges args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('isBothEdges args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('isBothEdges args(valueLastArray) is not array');
  }

  return _isBothEdges(array, valueFirstArray, valueLastArray);
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
/**
 * subFirst
 */


var _subFirst = function _subFirst(array, length) {
  return _subLength(array, 0, length);
};

var subFirst = function subFirst(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array16 = array;
    array = _array16.array;
    length = _array16.length;
  }

  if (!isArray(array)) {
    throw new TypeError('subFirst args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to array.length');
  }

  return _subFirst(array, length);
};
/**
 * subLast
 */


var _subLast = function _subLast(array, length) {
  return _subLength(array, array.length - length, length);
};

var subLast = function subLast(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array17 = array;
    array = _array17.array;
    length = _array17.length;
  }

  if (!isArray(array)) {
    throw new TypeError('subLast args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('subLast args(length) must be from 0 to array.length');
  }

  return _subLast(array, length);
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
  _subFirst: _subFirst,
  _subLast: _subLast,
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
  subFirst: subFirst,
  subLast: subLast,
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every,
  isBothEnds: isBothEnds
};