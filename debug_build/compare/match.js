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
    isObjectType = _require.isObjectType,
    isArray = _require.isArray,
    isArrayType = _require.isArrayType,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = require('../array/array_common.js'),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;
/**
 * match
 */


var _match = function _match(value, compare) {
  if (isString(value)) {
    var result;

    if (isRegExp(compare)) {
      result = value.match(compare) !== null;
    } else if (isFunction(compare)) {
      result = compare(value);

      if (!isBoolean(result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      result = value === compare;
    }

    return result;
  } else {
    var _result;

    if (isFunction(compare)) {
      _result = compare(value);

      if (!isBoolean(_result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      _result = value === compare;
    }

    return _result;
  }
};

var match = function match(value, compare) {
  if (isObjectParameter(value, 'value, compare')) {
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
  if (isObjectParameter(value, 'value, compare, valueWhenMatched')) {
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
  return _matchValue(value, isUndefined, valueWhenMatched);
};

var initialValue = function initialValue(value, valueWhenMatched) {
  if (isObjectParameter(value, 'value, valueWhenMatched')) {
    var _value3 = value;
    value = _value3.value;
    valueWhenMatched = _value3.valueWhenMatched;
  }

  return _initialValue(value, valueWhenMatched);
};
/**
 * allMatch
 */


var _allMatch = function _allMatch(valueArray, compare) {
  return _all(valueArray, function (value) {
    return _match(value, compare);
  });
};

var allMatch = function allMatch(valueArray, compare) {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatch args(valueArray) is not array');
  }

  return _allMatch(valueArray, compare);
};
/**
 * indexOfMatch
 */


var _indexOfMatch = function _indexOfMatch(valueArray, compare) {
  return _findFirstIndex(valueArray, function (value) {
    return _match(value, compare);
  });
};

var indexOfMatch = function indexOfMatch(valueArray, compare) {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
    compare = _valueArray2.compare;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('indexOfMatch args(valueArray) is not array');
  }

  return _indexOfMatch(valueArray, compare);
};
/**
 * someMatch
 */


var _someMatch = function _someMatch(valueArray, compare) {
  return _indexOfMatch(valueArray, compare) !== -1;
};

var someMatch = function someMatch(valueArray, compare) {
  return indexOfMatch(valueArray, compare) !== -1;
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
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value4 = value;
    value = _value4.value;
    compareArray = _value4.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
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
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    var _value5 = value;
    value = _value5.value;
    compareArray = _value5.compareArray;
    valueWhenMatched = _value5.valueWhenMatched;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchSomeValue args(compareArray) is not array');
  }

  return _matchSomeValue(value, compareArray, valueWhenMatched);
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
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray3 = valueArray;
    valueArray = _valueArray3.valueArray;
    compareArray = _valueArray3.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatchSome args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
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
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray4 = valueArray;
    valueArray = _valueArray4.valueArray;
    compareArray = _valueArray4.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('indexOfMatchSome args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
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
 * matchAll
 */


var _matchAll = function _matchAll(value, compareArray) {
  return _all(compareArray, function (compare) {
    return _match(value, compare);
  });
};

var matchAll = function matchAll(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value6 = value;
    value = _value6.value;
    compareArray = _value6.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
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
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    var _value7 = value;
    value = _value7.value;
    compareArray = _value7.compareArray;
    valueWhenMatched = _value7.valueWhenMatched;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, valueWhenMatched);
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
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray5 = valueArray;
    valueArray = _valueArray5.valueArray;
    compareArray = _valueArray5.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatchAll args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
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
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray6 = valueArray;
    valueArray = _valueArray6.valueArray;
    compareArray = _valueArray6.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('indexOfMatchAll args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
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

module.exports = {
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _allMatch: _allMatch,
  _indexOfMatch: _indexOfMatch,
  _someMatch: _someMatch,
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
  allMatch: allMatch,
  indexOfMatch: indexOfMatch,
  someMatch: someMatch,
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