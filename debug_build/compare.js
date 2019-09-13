"use strict";

var _require = require('./type.js'),
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
    _isError = _require._isError,
    _isException = _require._isException;

var _require2 = require('./syntax.js'),
    assert = _require2.assert,
    guard = _require2.guard,
    if_ = _require2.if_;
/**
 * equal
 */


var _equal = function _equal(value1, value2) {
  return value1 === value2;
};

var equal = function equal(value1, value2) {
  if (_isObject(value1)) {
    if ('value1' in value1 && 'value2' in value1) {
      return _equal(value1.value1, value1.value2);
    } else {
      throw new SyntaxError('equal args do not have value1 and value2 property.');
    }
  } else {
    return _equal(value1, value2);
  }
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
  var param;

  if (_isObject(value)) {
    if ('value' in value && 'compareArray' in value) {
      param = value;
    } else {
      throw new ReferenceError('or parameter args value,compareArray is not defined');
    }
  } else {
    param = {
      value: value,
      compareArray: compareArray
    };
  }

  if (!_isArray(param.compareArray)) {
    throw new TypeError('or args compareArray is not array');
  }

  return _or(param.value, param.compareArray);
};

var _match = function _match(value, compareArray) {
  if (_isString(value)) {
    return compareArray.some(function (element) {
      var result;

      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);

        if (!_isBoolean(result)) {
          throw new TypeError('_match args compareArray element function result is not boolean');
        }
      } else {
        result = value === element;
      }

      return result;
    });
  } else {
    return compareArray.some(function (element) {
      var result;

      if (_isFunction(element)) {
        result = element(value);

        if (!_isBoolean(result)) {
          throw new TypeError('_match args compareArray element function result is not boolean');
        }
      } else {
        result = value === element;
      }

      return result;
    });
  }
};

var match = function match(value, compareArray) {
  var param;

  if (_isObject(value)) {
    if ('value' in value && 'compareArray' in value) {
      param = value;
    } else {
      throw new ReferenceError('match parameter args value,compareArray is not defined');
    }
  } else {
    param = {
      value: value,
      compareArray: compareArray
    };
  }

  if (!_isArray(param.compareArray)) {
    throw new TypeError('match args compareArray is not array');
  }

  return _match(param.value, param.compareArray);
};

var _matchValue = function _matchValue(value, compareArray, inMatchValue) {
  if (_match(value, compareArray)) {
    return inMatchValue;
  }

  return value;
};

var matchValue = function matchValue(value, compareArray, inMatchValue) {
  var param;

  if (_isObject(value)) {
    if ('value' in value && 'compareArray' in value && 'inMatchValue' in value) {
      param = value;
    } else {
      throw new ReferenceError('matchValue parameter args value,compareArray,inMatchValue is not defined');
    }
  } else {
    param = {
      value: value,
      compareArray: compareArray,
      inMatchValue: inMatchValue
    };
  }

  if (!_isArray(param.compareArray)) {
    throw new TypeError('match args compareArray is not array');
  }

  return _matchValue(param.value, param.compareArray, param.inMatchValue);
};

var defaultValue = function defaultValue(value, inMatchValue) {
  var parameter = if_(_isObject(value))({
    then: value,
    "else": {
      value: value,
      inMatchValue: inMatchValue
    }
  });
  return matchValue(parameter.value, [_isUndefined, _isNull], parameter.inMatchValue);
};

module.exports = {
  _equal: _equal,
  equal: equal,
  or: or,
  match: match,
  matchValue: matchValue,
  defaultValue: defaultValue
};