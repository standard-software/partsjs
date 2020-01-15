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
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException,
    _isMap = _require._isMap,
    _isWeakMap = _require._isWeakMap,
    _isSet = _require._isSet,
    _isWeakSet = _require._isWeakSet;

var _require2 = require('../object/object.js'),
    _copyProperty = _require2._copyProperty,
    _propertyCount = _require2._propertyCount,
    _inProperty = _require2._inProperty;

var _require3 = require('../array/array_common.js'),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;
/**
 * match
 */


var _match = function _match(value, compare) {
  if (_isString(value)) {
    var result;

    if (_isRegExp(compare)) {
      result = value.match(compare) !== null;
    } else if (_isFunction(compare)) {
      result = compare(value);

      if (!_isBoolean(result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      result = value === compare;
    }

    return result;
  } else {
    var _result;

    if (_isFunction(compare)) {
      _result = compare(value);

      if (!_isBoolean(_result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      _result = value === compare;
    }

    return _result;
  }
};

var match = function match(value, compare) {
  if (_inProperty(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  return _match(value, compare);
};
/**
 * matchValue
 */


var _matchValue = function _matchValue(value, compare, valueWhenMatched) {
  if (_match(value, compare)) {
    return valueWhenMatched;
  }

  return value;
};

var matchValue = function matchValue(value, compare, valueWhenMatched) {
  if (_inProperty(value, 'value, compare, valueWhenMatched')) {
    var _value2 = value;
    value = _value2.value;
    compare = _value2.compare;
    valueWhenMatched = _value2.valueWhenMatched;
  }

  return _matchValue(value, compare, valueWhenMatched);
};
/**
 * initialValue
 */


var _initialValue = function _initialValue(value, valueWhenMatched) {
  return _matchValue(value, _isUndefined, valueWhenMatched);
};

var initialValue = function initialValue(value, valueWhenMatched) {
  if (_inProperty(value, 'value, valueWhenMatched')) {
    var _value3 = value;
    value = _value3.value;
    valueWhenMatched = _value3.valueWhenMatched;
  }

  return _initialValue(value, valueWhenMatched);
};
/**
 * matchSome
 */


var _matchSome = function _matchSome(value, compareArray) {
  return _some(compareArray, function (compare) {
    return _match(value, compare);
  });
};

var matchSome = function matchSome(value, compareArray) {
  if (_inProperty(value, 'value,compareArray')) {
    var _value4 = value;
    value = _value4.value;
    compareArray = _value4.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
};
/**
 * allMatchSome
 */


var _allMatchSome = function _allMatchSome(valueArray, compareArray) {
  return _all(valueArray, function (value) {
    return _matchSome(value, compareArray);
  });
};

var allMatchSome = function allMatchSome(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('allMatchSome args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('allMatchSome args(compareArray) is not array');
  }

  return _allMatchSome(valueArray, compareArray);
};
/**
 * indexOfMatchSome
 */


var _indexOfMatchSome = function _indexOfMatchSome(valueArray, compareArray) {
  return _findFirstIndex(valueArray, function (value) {
    return _matchSome(value, compareArray);
  });
};

var indexOfMatchSome = function indexOfMatchSome(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
    compareArray = _valueArray2.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('indexOfMatchSome args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('indexOfMatchSome args(compareArray) is not array');
  }

  return _indexOfMatchSome(valueArray, compareArray);
};
/**
 * someMatchSome
 */


var _someMatchSome = function _someMatchSome(valueArray, compareArray) {
  return _indexOfMatchSome(valueArray, compareArray) !== -1;
};

var someMatchSome = function someMatchSome(valueArray, compareArray) {
  return indexOfMatchSome(valueArray, compareArray) !== -1;
};
/**
 * matchSomeValue
 */


var _matchSomeValue = function _matchSomeValue(value, compareArray, valueWhenMatched) {
  if (_matchSome(value, compareArray)) {
    return valueWhenMatched;
  }

  return value;
};

var matchSomeValue = function matchSomeValue(value, compareArray, valueWhenMatched) {
  if (_inProperty(value, 'value, compareArray, valueWhenMatched')) {
    var _value5 = value;
    value = _value5.value;
    compareArray = _value5.compareArray;
    valueWhenMatched = _value5.valueWhenMatched;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchSomeValue args(compareArray) is not array');
  }

  return _matchSomeValue(value, compareArray, valueWhenMatched);
};
/**
 * matchAll
 */


var _matchAll = function _matchAll(value, compareArray) {
  return _all(compareArray, function (compare) {
    return _match(value, compare);
  });
};

var matchAll = function matchAll(value, compareArray) {
  if (_inProperty(value, 'value,compareArray')) {
    var _value6 = value;
    value = _value6.value;
    compareArray = _value6.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
};
/**
 * allMatchAll
 */


var _allMatchAll = function _allMatchAll(valueArray, compareArray) {
  return _all(valueArray, function (value) {
    return _matchAll(value, compareArray);
  });
};

var allMatchAll = function allMatchAll(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray3 = valueArray;
    valueArray = _valueArray3.valueArray;
    compareArray = _valueArray3.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('allMatchAll args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('allMatchAll args(compareArray) is not array');
  }

  return _allMatchAll(valueArray, compareArray);
};
/**
 * indexOfMatchAll
 */


var _indexOfMatchAll = function _indexOfMatchAll(valueArray, compareArray) {
  return _findFirstIndex(valueArray, function (value) {
    return _matchAll(value, compareArray);
  });
};

var indexOfMatchAll = function indexOfMatchAll(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray4 = valueArray;
    valueArray = _valueArray4.valueArray;
    compareArray = _valueArray4.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('indexOfMatchAll args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('indexOfMatchAll args(compareArray) is not array');
  }

  return _indexOfMatchAll(valueArray, compareArray);
};
/**
 * someMatchAll
 */


var _someMatchAll = function _someMatchAll(valueArray, compareArray) {
  return _indexOfMatchAll(valueArray, compareArray) !== -1;
};

var someMatchAll = function someMatchAll(valueArray, compareArray) {
  return indexOfMatchAll(valueArray, compareArray) !== -1;
};
/**
 * matchAllValue
 */


var _matchAllValue = function _matchAllValue(value, compareArray, valueWhenMatched) {
  if (_matchAll(value, compareArray)) {
    return valueWhenMatched;
  }

  return value;
};

var matchAllValue = function matchAllValue(value, compareArray, valueWhenMatched) {
  if (_inProperty(value, 'value, compareArray, valueWhenMatched')) {
    var _value7 = value;
    value = _value7.value;
    compareArray = _value7.compareArray;
    valueWhenMatched = _value7.valueWhenMatched;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, valueWhenMatched);
};

module.exports = {
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _matchSome: _matchSome,
  _matchSomeValue: _matchSomeValue,
  _allMatchSome: _allMatchSome,
  _indexOfMatchSome: _indexOfMatchSome,
  _someMatchSome: _someMatchSome,
  _matchAll: _matchAll,
  _matchAllValue: _matchAllValue,
  _allMatchAll: _allMatchAll,
  _indexOfMatchAll: _indexOfMatchAll,
  _someMatchAll: _someMatchAll,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  matchSome: matchSome,
  matchSomeValue: matchSomeValue,
  allMatchSome: allMatchSome,
  indexOfMatchSome: indexOfMatchSome,
  someMatchSome: someMatchSome,
  matchAll: matchAll,
  matchAllValue: matchAllValue,
  allMatchAll: allMatchAll,
  indexOfMatchAll: indexOfMatchAll,
  someMatchAll: someMatchAll
};