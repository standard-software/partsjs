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
    _isException = _require._isException;

var _require2 = require('../object/object.js'),
    _copyProperty = _require2._copyProperty,
    _propertyCount = _require2._propertyCount,
    _inProperty = _require2._inProperty;
/**
 * equal
 */


var _equal = function _equal(value1, value2) {
  return value1 === value2;
};

var equal = function equal(value1, value2) {
  if (_inProperty(value1, 'value1,value2')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
  }

  return _equal(value1, value2);
};
/**
 * or
 */


var _or = function _or(value, compareArray) {
  for (var i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }

  return false;
};

var or = function or(value, compareArray) {
  if (_inProperty(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('or args(compareArray) is not array');
  }

  return _or(value, compareArray);
};
/**
 * match
 */


var _match = function _match(value, compareArray) {
  if (_isString(value)) {
    for (var i = 0, l = compareArray.length; i < l; i += 1) {
      var element = compareArray[i];
      var result = false;

      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);

        if (!_isBoolean(result)) {
          throw new TypeError('_match args(compareArray element function result) is not boolean');
        }
      } else {
        result = value === element;
      }

      if (result) {
        return true;
      }
    }

    return false;
  } else {
    for (var _i = 0, _l = compareArray.length; _i < _l; _i += 1) {
      var _element = compareArray[_i];

      var _result = void 0;

      if (_isFunction(_element)) {
        _result = _element(value);

        if (!_isBoolean(_result)) {
          throw new TypeError('_match args(compareArray element function result) is not boolean');
        }
      } else {
        _result = value === _element;
      }

      if (_result) {
        return true;
      }
    }

    return false;
  }
};

var match = function match(value, compareArray) {
  if (_inProperty(value, 'value,compareArray')) {
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('match args(compareArray) is not array');
  }

  return _match(value, compareArray);
};
/**
 * matchAll
 */


var _matchAll = function _matchAll(valueArray, compareArray) {
  var result = false;

  for (var i = 0, l = valueArray.length; i < l; i += 1) {
    if (_match(valueArray[i], compareArray)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
};

var matchAll = function matchAll(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('matchAll args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(valueArray, compareArray);
};
/**
 * matchSome
 */


var _matchSomeIndex = function _matchSomeIndex(valueArray, compareArray) {
  var result = -1;

  for (var i = 0, l = valueArray.length; i < l; i += 1) {
    if (!_match(valueArray[i], compareArray)) {
      result = i;
      break;
    }
  }

  return result;
};

var _matchSome = function _matchSome(valueArray, compareArray) {
  return _matchSomeIndex(valueArray, compareArray) !== -1;
};

var matchSomeIndex = function matchSomeIndex(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
    compareArray = _valueArray2.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('matchSomeIndex args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchSomeIndex args(compareArray) is not array');
  }

  return _matchSome(valueArray, compareArray);
};

var matchSome = function matchSome(valueArray, compareArray) {
  return matchSomeIndex(valueArray, compareArray) !== -1;
};
/**
 * matchValue
 */


var _matchValue = function _matchValue(value, compareArray, inMatchValue) {
  if (_match(value, compareArray)) {
    return inMatchValue;
  }

  return value;
};

var matchValue = function matchValue(value, compareArray, inMatchValue) {
  if (_inProperty(value, 'value,compareArray,inMatchValue')) {
    var _value4 = value;
    value = _value4.value;
    compareArray = _value4.compareArray;
    inMatchValue = _value4.inMatchValue;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchValue args(compareArray) is not array');
  }

  return _matchValue(value, compareArray, inMatchValue);
};
/**
 * initialValue
 */


var _initialValue = function _initialValue(value, inMatchValue) {
  if (_match(value, [_isUndefined])) {
    return inMatchValue;
  }

  return value;
};

var initialValue = function initialValue(value, inMatchValue) {
  if (_inProperty(value, 'value,inMatchValue')) {
    var _value5 = value;
    value = _value5.value;
    inMatchValue = _value5.inMatchValue;
  }

  return _initialValue(value, inMatchValue);
};
/**
 * isEmpty
 */


var isEmpty = function isEmpty(value) {
  return _match(value, [undefined, null, '', function (value) {
    return _isObject(value) && _propertyCount(value) === 0;
  }, function (value) {
    return _isArrayType(value) && value.length === 0;
  }]);
};

var matchEvery = matchAll;
var matchAnyIndex = matchSomeIndex;
var matchAny = matchSome;
module.exports = {
  _equal: _equal,
  _or: _or,
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _matchAll: _matchAll,
  _matchSomeIndex: _matchSomeIndex,
  _matchSome: _matchSome,
  equal: equal,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  matchAll: matchAll,
  matchSomeIndex: matchSomeIndex,
  matchSome: matchSome,
  matchEvery: matchEvery,
  matchAnyIndex: matchAnyIndex,
  matchAny: matchAny,
  isEmpty: isEmpty
};