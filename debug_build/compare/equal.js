"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
    isObjectType = _require.isObjectType,
    isArray = _require.isArray,
    isArrayType = _require.isArrayType,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet,
    isUndefinedAll = _require.isUndefinedAll,
    isNullAll = _require.isNullAll,
    isNaNStrictAll = _require.isNaNStrictAll,
    isBooleanAll = _require.isBooleanAll,
    isNumberAll = _require.isNumberAll,
    isIntegerAll = _require.isIntegerAll,
    isStringAll = _require.isStringAll,
    isFunctionAll = _require.isFunctionAll,
    isObjectAll = _require.isObjectAll,
    isObjectTypeAll = _require.isObjectTypeAll,
    isArrayAll = _require.isArrayAll,
    isArrayTypeAll = _require.isArrayTypeAll,
    isDateAll = _require.isDateAll,
    isRegExpAll = _require.isRegExpAll,
    isExceptionAll = _require.isExceptionAll,
    isMapAll = _require.isMapAll,
    isWeakMapAll = _require.isWeakMapAll,
    isSetAll = _require.isSetAll,
    isWeakSetAll = _require.isWeakSetAll;

var _require2 = require('../object/object.js'),
    _copyProperty = _require2._copyProperty,
    isObjectParameter = _require2.isObjectParameter;
/**
 * equalFunction
 */


var equalFunction = {};

equalFunction.equalValue = function (value1, value2) {
  if (isNaNStrict(value1) && isNaNStrict(value2)) {
    return true;
  }

  return value1 === value2;
}; // function is no recursive call


equalFunction.equalFunction = function (value1, value2) {
  if (!isFunctionAll(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equalFunction.equalObject = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isObjectAll(value1, value2)) {
    return;
  }

  var value1Keys = Object.keys(value1);
  var value2Keys = Object.keys(value2);

  if (value1Keys.length !== value2Keys.length) {
    return false;
  }

  bufferWrite(value1, value2);

  for (var i = 0, l = value1Keys.length; i < l; i += 1) {
    var key = value1Keys[i];

    if (__equalDeep(value1[key], value2[key]) === false) {
      return false;
    }
  }

  return true;
};

equalFunction.equalArrayType = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isArrayTypeAll(value1, value2)) {
    return;
  }

  if (value1.length !== value2.length) {
    return false;
  }

  bufferWrite(value1, value2);

  for (var i = 0, l = value1.length; i < l; i += 1) {
    if (__equalDeep(value1[i], value2[i]) === false) {
      return false;
    }
  }

  return true;
};

equalFunction.equalDate = function (value1, value2) {
  if (!isDateAll(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = function (value1, value2) {
  if (!isRegExpAll(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equalFunction.equalMap = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isMapAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator = _createForOfIteratorHelper(value1.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
};

equalFunction.equalWeakMap = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakMapAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator2 = _createForOfIteratorHelper(value1.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return true;
};

equalFunction.equalSet = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isSetAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator3 = _createForOfIteratorHelper(value1),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var v1item = _step3.value;
      var result = false;

      var _iterator4 = _createForOfIteratorHelper(value2),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var v2item = _step4.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return true;
};

equalFunction.equalWeakSet = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakSetAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator5 = _createForOfIteratorHelper(value1),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var v1item = _step5.value;
      var result = false;

      var _iterator6 = _createForOfIteratorHelper(value2),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var v2item = _step6.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
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

      if (!isUndefined(result)) {
        return result;
      }
    }

    return false;
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

  _equal.add(equalFunction.equalValue);

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
  if (isObjectParameter(value1, 'value1, value2')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
  }

  return _equal(value1, value2);
};

_copyProperty(_equal, 'clear,reset,add,' + '', equal);
/**
 * equalDeep
 */


var _equalDeep = function _equalDeep(value1, value2) {
  var CircularReferenceBuffer = {
    v1Array: [],
    v2Array: []
  };

  var __equalDeep = function __equalDeep(value1, value2) {
    var index = CircularReferenceBuffer.v1Array.indexOf(value1);

    if (index !== -1) {
      if (CircularReferenceBuffer.v2Array[index] === value2) {
        return true;
      }

      return value1 === value2;
    }

    for (var i = 0, l = _equalDeep.functions.length; i < l; i += 1) {
      var result = _equalDeep.functions[i](value1, value2, function (v1, v2) {
        CircularReferenceBuffer.v1Array.push(v1);
        CircularReferenceBuffer.v2Array.push(v2);
      }, __equalDeep);

      if (!isUndefined(result)) {
        return result;
      }
    }

    return false;
  };

  return __equalDeep(value1, value2);
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

  _equalDeep.add(equalFunction.equalValue);

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
  if (isObjectParameter(value1, 'value1,value2')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
  }

  return _equalDeep(value1, value2);
};

_copyProperty(_equalDeep, 'clear,reset,add,' + '', equalDeep);

module.exports = {
  _equal: _equal,
  _equalDeep: _equalDeep,
  equal: equal,
  equalDeep: equalDeep,
  equalFunction: equalFunction
};