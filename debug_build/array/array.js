"use strict";

var _require = require('../type/type.js'),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = require('../number/number.js'),
    isEven = _require2.isEven;

var _require3 = require('../object/_inProperty.js'),
    _inProperty = _require3._inProperty;

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
    if (!_isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

var min = function min(array) {
  if (!_isArray(array)) {
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
    if (!_isNumber(array[i])) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

var max = function max(array) {
  if (!_isArray(array)) {
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
    if (!_isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    result += array[i];
  }

  return result;
};

var sum = function sum(array) {
  if (!_isArray(array)) {
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
  if (!_isArray(array)) {
    throw new TypeError('average args(array) is not array');
  }

  return _average(array);
};
/**
 * midian
 */


var _midian = function _midian(array) {
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

var midian = function midian(array) {
  if (!_isArray(array)) {
    throw new TypeError('midian args(array) is not array');
  }

  return _midian(array);
};
/**
 * mode
 */


var _mode = function _mode(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

  var countArray = uniqueArray.map(function (element1) {
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
  if (!_isArray(array)) {
    throw new TypeError('mode args(array) is not array');
  }

  return _mode(array);
};
/**
 * uniqe
 */


var _unique = function _unique(array) {
  return _filter(array, function (element, index) {
    return array.indexOf(element) === index;
  });
};

var unique = function unique(array) {
  if (!_isArray(array)) {
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

  var countArray = uniqueArray.map(function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });
  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === 1;
  });
};

var single = function single(array) {
  if (!_isArray(array)) {
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

  var countArray = uniqueArray.map(function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });
  return _filter(uniqueArray, function (element, index) {
    return countArray[index] >= 2;
  });
};

var multiple = function multiple(array) {
  if (!_isArray(array)) {
    throw new TypeError('multiple args(array) is not array');
  }

  return _multiple(array);
};
/**
 * filter
 */


var _filter = function _filter(array, compareFunc) {
  var resultArray = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var result = compareFunc(array[i], i, array);

    if (!_isBoolean(result)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (result) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
};

var filter = function filter(array, compareFunc) {
  if (!_isArray(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!_isFunction(compareFunc)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, compareFunc);
};
/**
 * map
 */


var _map = function _map(array, productFunc) {
  var resultArray = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var result = productFunc(array[i], i, array);
    resultArray.push(result);
  }

  return resultArray;
};

var map = function map(array, productFunc) {
  if (!_isArray(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!_isFunction(productFunc)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return _map(array, productFunc);
};

module.exports = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _midian: _midian,
  _mode: _mode,
  _unique: _unique,
  _single: _single,
  _multiple: _multiple,
  _filter: _filter,
  _map: _map,
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  midian: midian,
  mode: mode,
  unique: unique,
  single: single,
  multiple: multiple,
  filter: filter,
  map: map
};