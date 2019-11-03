"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    _isWeakSet = _require._isWeakSet,
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

var _require2 = require('../object/object.js'),
    _copyProperty = _require2._copyProperty,
    _propertyCount = _require2._propertyCount,
    _inProperty = _require2._inProperty;
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
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
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
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
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
    if (_match(valueArray[i], compareArray)) {
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

  return _matchSomeIndex(valueArray, compareArray);
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
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
    inMatchValue = _value3.inMatchValue;
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
    var _value4 = value;
    value = _value4.value;
    inMatchValue = _value4.inMatchValue;
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
/**
 * equalFunction
 */


var equalFunction = {}; // function is no recursive call

equalFunction.equalFunction = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isFunction(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equalFunction.equalObject = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isObject(value1, value2)) {
    return;
  }

  var value1Keys = Object.keys(value1);
  var value2Keys = Object.keys(value2);

  if (value1Keys.length !== value2Keys.length) {
    return false;
  }

  for (var i = 0, l = value1Keys.length; i < l; i += 1) {
    var key = value1Keys[i];

    if (__equalDeep(value1[key], value2[key]) === false) {
      return false;
    }
  }

  return true;
};

equalFunction.equalArrayType = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isArrayType(value1, value2)) {
    return;
  }

  if (value1.length !== value2.length) {
    return false;
  }

  for (var i = 0, l = value1.length; i < l; i += 1) {
    if (__equalDeep(value1[i], value2[i]) === false) {
      return false;
    }
  }

  return true;
};

equalFunction.equalDate = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isDate(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isRegExp(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equalFunction.equalMap = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isMap(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = value1.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

equalFunction.equalWeakMap = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakMap(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = value1.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
};

equalFunction.equalSet = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isSet(value1, value2)) {
    return;
    ;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = value1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var v1item = _step3.value;
      var result = false;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = value2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var v2item = _step4.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return true;
};

equalFunction.equalWeakSet = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakSet(value1, value2)) {
    return;
    ;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = value1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var v1item = _step5.value;
      var result = false;
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = value2[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var v2item = _step6.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return true;
};
/**
 * equal
 */


var _equal = function _equal(value1, value2) {
  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = _equal.functions.length; i < l; i += 1) {
      var result = _equal.functions[i](value1, value2);

      if (!_isUndefined(result)) {
        return result;
      }
    }

    return value1 === value2;
  };

  return __equal(value1, value2);
};

_equal.functions = [];

_equal.clear = function () {
  _equal.functions = [];
};

_equal.add = function (func) {
  _equal.functions.unshift(func);
};

_equal.reset = function () {
  _equal.clear();

  _equal.add(equalFunction.equalObject);

  _equal.add(equalFunction.equalArrayType);

  _equal.add(equalFunction.equalWeakSet);

  _equal.add(equalFunction.equalSet);

  _equal.add(equalFunction.equalWeakMap);

  _equal.add(equalFunction.equalMap);

  _equal.add(equalFunction.equalFunction);

  _equal.add(equalFunction.equalRegExp);

  _equal.add(equalFunction.equalDate);
};

_equal.reset();

var equal = function equal(value1, value2) {
  if (_inProperty(value1, 'value1,value2')) {
    var _value5 = value1;
    value1 = _value5.value1;
    value2 = _value5.value2;
  }

  return _equal(value1, value2);
};

_copyProperty(_equal, 'clear,reset,add,' + '', equal);
/**
 * equalDeep
 */


var _equalDeep = function _equalDeep(value1, value2) {
  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = _equalDeep.functions.length; i < l; i += 1) {
      var result = _equalDeep.functions[i](value1, value2, __equal);

      if (!_isUndefined(result)) {
        return result;
      }
    }

    return value1 === value2;
  };

  return __equal(value1, value2);
};

_equalDeep.functions = [];

_equalDeep.clear = function () {
  _equalDeep.functions = [];
};

_equalDeep.add = function (func) {
  _equalDeep.functions.unshift(func);
};

_equalDeep.reset = function () {
  _equalDeep.clear();

  _equalDeep.add(equalFunction.equalObject);

  _equalDeep.add(equalFunction.equalArrayType);

  _equalDeep.add(equalFunction.equalWeakSet);

  _equalDeep.add(equalFunction.equalSet);

  _equalDeep.add(equalFunction.equalWeakMap);

  _equalDeep.add(equalFunction.equalMap);

  _equalDeep.add(equalFunction.equalFunction);

  _equalDeep.add(equalFunction.equalRegExp);

  _equalDeep.add(equalFunction.equalDate);
};

_equalDeep.reset();

var equalDeep = function equalDeep(value1, value2) {
  if (_inProperty(value1, 'value1,value2')) {
    var _value6 = value1;
    value1 = _value6.value1;
    value2 = _value6.value2;
  }

  return _equalDeep(value1, value2);
};

_copyProperty(_equalDeep, 'clear,reset,add,' + '', equalDeep);

var matchEvery = matchAll;
var matchAnyIndex = matchSomeIndex;
var matchAny = matchSome;
module.exports = {
  _equal: _equal,
  _equalDeep: _equalDeep,
  _or: _or,
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _matchAll: _matchAll,
  _matchSomeIndex: _matchSomeIndex,
  _matchSome: _matchSome,
  equal: equal,
  equalDeep: equalDeep,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  matchAll: matchAll,
  matchSomeIndex: matchSomeIndex,
  matchSome: matchSome,
  equalFunction: equalFunction,
  matchEvery: matchEvery,
  matchAnyIndex: matchAnyIndex,
  matchAny: matchAny,
  isEmpty: isEmpty
};