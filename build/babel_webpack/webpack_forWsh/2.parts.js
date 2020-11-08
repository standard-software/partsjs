(this["webpackJsonpparts"] = this["webpackJsonpparts"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.merge = exports.functionValue = exports.cloneDeep = exports.clone = exports._merge = exports._cloneDeep = exports._clone = void 0;

var _clone2 = _interopRequireDefault(__webpack_require__(4));

var _clone3 = _interopRequireDefault(__webpack_require__(103));

var _cloneDeep2 = _interopRequireDefault(__webpack_require__(25));

var _cloneDeep3 = _interopRequireDefault(__webpack_require__(104));

var _functionValue = _interopRequireDefault(__webpack_require__(44));

var _merge2 = _interopRequireDefault(__webpack_require__(105));

var _merge3 = _interopRequireDefault(__webpack_require__(106));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _clone2["default"]), _clone3["default"]), _cloneDeep2["default"]), _cloneDeep3["default"]), _functionValue["default"]), _merge2["default"]), _merge3["default"]);

var _clone = commonJs._clone,
    _cloneDeep = commonJs._cloneDeep,
    _merge = commonJs._merge,
    clone = commonJs.clone,
    cloneDeep = commonJs.cloneDeep,
    functionValue = commonJs.functionValue,
    merge = commonJs.merge;
exports.merge = merge;
exports.functionValue = functionValue;
exports.cloneDeep = cloneDeep;
exports.clone = clone;
exports._merge = _merge;
exports._cloneDeep = _cloneDeep;
exports._clone = _clone;
var _default = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  _merge: _merge,
  clone: clone,
  cloneDeep: cloneDeep,
  functionValue: functionValue,
  merge: merge
};
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._clone = void 0;

var _type = __webpack_require__(5);

var _hasOwn2 = __webpack_require__(8);

var _clone2 = __webpack_require__(23);

var _cloneDeep2 = __webpack_require__(25);

var _cloneFunc = __webpack_require__(27);

/**
 * clone
 */
var _clone = function _clone(source, cloneFuncArray) {
  if ((0, _type.isUndefined)(cloneFuncArray)) {
    return (0, _clone2.__clone)(source, false);
  }

  var _clone_ = function _clone_(value) {
    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return _clone_(source);
};

exports._clone = _clone;
_clone.func = _cloneFunc.__cloneFunc;
var _default = {
  _clone: _clone
};
exports["default"] = _default;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__includes = void 0;

/**
 * __includes
 */
var __includes = function __includes(value, compare) {
  return value.indexOf(compare) !== -1;
};

exports.__includes = __includes;
var _default = {
  __includes: __includes
};
exports["default"] = _default;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._global = void 0;

var _global = new Function('return this')();

exports._global = _global;
var _default = {
  _global: _global
};
exports["default"] = _default;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__clone = void 0;

var _isType = __webpack_require__(6);

var _returnValueFunction = __webpack_require__(24);

/**
 * clone
 */
var __clone = function __clone(source) {
  var __clone_ = function __clone_(value) {
    if ((0, _isType.isObject)(value)) {
      var cloneValue = {};

      for (var key in value) {
        cloneValue[key] = value[key];
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      var _cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        _cloneValue[i] = value[i];
      }

      return _cloneValue;
    }

    return value;
  };

  return __clone_(source);
};

exports.__clone = __clone;
var _default = {
  __clone: __clone
};
exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__returnValueFunction = void 0;

/**
 * returnValueFunction
 */
var __returnValueFunction = function __returnValueFunction(v) {
  return v;
};

exports.__returnValueFunction = __returnValueFunction;
var _default = {
  __returnValueFunction: __returnValueFunction
};
exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._cloneDeep = void 0;

var _type = __webpack_require__(5);

var _cloneDeep2 = __webpack_require__(26);

var _cloneFunc = __webpack_require__(27);

/**
 * cloneDeep
 */
var _cloneDeep = function _cloneDeep(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cloneFunc.__cloneFunc.defaultArray;

  if ((0, _type.isUndefined)(cloneFuncArray)) {
    return (0, _cloneDeep2.__cloneDeep)(source);
  }

  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var _cloneDeep_ = function _cloneDeep_(value) {
    var index = CircularReferenceBuffer.source.indexOf(value);

    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }

    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value, function (source, clone) {
        CircularReferenceBuffer.source.push(source);
        CircularReferenceBuffer.clone.push(clone);
      }, _cloneDeep_);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return _cloneDeep_(source);
};

exports._cloneDeep = _cloneDeep;
_cloneDeep.func = _cloneFunc.__cloneFunc;
var _default = {
  _cloneDeep: _cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__cloneDeep = void 0;

var _isType = __webpack_require__(6);

/**
 * cloneDeep
 */
var __cloneDeep = function __cloneDeep(source) {
  var __cloneDeep_ = function __cloneDeep_(value) {
    if ((0, _isType.isObject)(value)) {
      var cloneValue = {};

      for (var key in value) {
        cloneValue[key] = __cloneDeep_(value[key]);
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      var _cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        _cloneValue[i] = __cloneDeep_(value[i]);
      }

      return _cloneValue;
    }

    return value;
  };

  return __cloneDeep_(source);
};

exports.__cloneDeep = __cloneDeep;
var _default = {
  __cloneDeep: __cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__cloneFunc = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(28);

var _hasOwn2 = __webpack_require__(8);

var _clone = __webpack_require__(23);

var _cloneDeep2 = __webpack_require__(25);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * clone.func
 */
var __cloneFunc = {}; // function is no clone

exports.__cloneFunc = __cloneFunc;

__cloneFunc.ignoreFunction = function (source) {
  if (!(0, _type.isFunction)(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arraySeries
//  Just good usability


__cloneFunc.object = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isObject)(source)) {
    return undefined;
  }

  var cloneValue = (0, _type.isObjectFromNull)(source) ? Object.create(null) : new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if ((0, _hasOwn2._hasOwn)(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

__cloneFunc.arraySeries = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isArraySeries)(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var i = 0, l = source.length; i < l; i += 1) {
    cloneValue[i] = __cloneDeep(source[i]);
  } // // Code that does the same thing
  // // for in array key is string.
  // // legacy for loop is simple for array
  // for (const key in source) {
  //   if (source.hasOwnProperty(key)) {
  //     cloneValue[key] = __cloneDeep(source[key]);
  //   }
  // }


  return cloneValue;
}; // support
//  all object
//  but Math or JSON etc clone
//  Cloning unnecessary objects


__cloneFunc.objectLike = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isObjectLike)(source)) {
    return undefined;
  }

  var cloneValue = (0, _type.isObjectFromNull)(source) ? Object.create(null) : new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if ((0, _hasOwn2._hasOwn)(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

__cloneFunc.date = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isDate)(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

__cloneFunc.regExp = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isRegExp)(source)) {
    return undefined;
  }

  var cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
}; // cloneMap
//  key not recursive call
//  value recursive call


__cloneFunc.map = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isMap)(source)) {
    return undefined;
  }

  var cloneValue = new Map();
  bufferWrite(source, cloneValue);
  var sourceEntries = [];
  source.forEach(function (value, key) {
    sourceEntries.push([key, value]);
  });

  for (var _i = 0, _sourceEntries = sourceEntries; _i < _sourceEntries.length; _i++) {
    var _sourceEntries$_i = _slicedToArray(_sourceEntries[_i], 2),
        key = _sourceEntries$_i[0],
        value = _sourceEntries$_i[1];

    cloneValue.set(key, __cloneDeep(value));
  } // IE11 no support map.keys map.entries


  return cloneValue;
};

__cloneFunc.ignoreWeakMap = function (source) {
  if (!(0, _type.isWeakMap)(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


__cloneFunc.set = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isSet)(source)) {
    return undefined;
  }

  var cloneValue = new Set();
  bufferWrite(source, cloneValue);
  var sourceEntries = [];
  source.forEach(function (value, key) {
    sourceEntries.push([key, value]);
  });

  for (var _i2 = 0, _sourceEntries2 = sourceEntries; _i2 < _sourceEntries2.length; _i2++) {
    var _sourceEntries2$_i = _slicedToArray(_sourceEntries2[_i2], 2),
        key = _sourceEntries2$_i[0],
        value = _sourceEntries2$_i[1];

    cloneValue.add(value);
  } // IE11 no support set.keys set.entries


  return cloneValue;
};

__cloneFunc.ignoreWeakSet = function (source) {
  if (!(0, _type.isWeakSet)(source)) {
    return undefined;
  }

  return source;
};

__cloneFunc.DefaultArray = function () {
  return [__cloneFunc.date, __cloneFunc.regExp, __cloneFunc.ignoreFunction, __cloneFunc.map, __cloneFunc.ignoreWeakMap, __cloneFunc.set, __cloneFunc.ignoreWeakSet, __cloneFunc.arraySeries, __cloneFunc.object];
};

var _default = {
  __cloneFunc: __cloneFunc
};
exports["default"] = _default;

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._IntegerArray = void 0;

var _type = __webpack_require__(5);

var _NumberArray2 = __webpack_require__(35);

/**
 * IntegerArray
 */
var _IntegerArray = function _IntegerArray(start, end, increment) {
  return (0, _NumberArray2._NumberArray)(start, end, increment);
};

exports._IntegerArray = _IntegerArray;
var _default = {
  _IntegerArray: _IntegerArray
};
exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._NumberArray = void 0;

var _type = __webpack_require__(5);

/**
 * NumberArray
 */
var _NumberArray = function _NumberArray(start, end, increment) {
  if ((0, _type.isUndefined)(increment)) {
    if ((0, _type.isUndefined)(end)) {
      increment = 1;
      end = increment * start - 1;
      start = 0;
    } else {
      if (start <= end) {
        increment = 1;
      } else {
        increment = -1;
      }
    }
  }

  if (increment === 0) {
    throw new RangeError('_NumberArray args(increment) is 0');
  }

  if (start <= end) {
    if (increment < 0) {
      throw new Error('_NumberArray args(increment) < 0');
    }
  } else {
    if (increment > 0) {
      throw new Error('_NumberArray args(increment) > 0');
    }
  }

  var result = [];

  if (start <= end) {
    for (var i = start, l = end; i <= l; i += increment) {
      result.push(i);
    }
  } else {
    for (var _i = start, _l = end; _l <= _i; _i += increment) {
      result.push(_i);
    }
  }

  return result;
};

exports._NumberArray = _NumberArray;
var _default = {
  _NumberArray: _NumberArray
};
exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filter = exports._filter = exports.remainLast = exports._remainLast = exports.remainFirst = exports._remainFirst = exports.pushLast = exports._pushLast = exports.pushFirst = exports._pushFirst = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.add = exports._add = exports.insert = exports._insert = void 0;

var _type = __webpack_require__(5);

var _number = __webpack_require__(37);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _min2 = __webpack_require__(55);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * array.operation.insert
 */
var _insert = function _insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

exports._insert = _insert;

var insert = function insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray, index')) {
    var _array = array;
    array = _array.array;
    valueArray = _array.valueArray;
    index = _array.index;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('insert args(valueArray) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, valueArray, index);
};
/**
 * array.operation.add
 */


exports.insert = insert;

var _add = function _add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

exports._add = _add;

var add = function add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray, index')) {
    var _array2 = array;
    array = _array2.array;
    valueArray = _array2.valueArray;
    index = _array2.index;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('add args(valueArray) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from -1 to array.length - 1');
  }

  return _add(array, valueArray, index);
};
/**
 * array.operation.deleteIndex
 */


exports.add = add;

var _deleteIndex = function _deleteIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  array.splice(indexStart, indexEnd - indexStart + 1);
  return array;
};

exports._deleteIndex = _deleteIndex;

var deleteIndex = function deleteIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, indexStart', 'indexEnd')) {
    var _array3 = array;
    array = _array3.array;
    indexStart = _array3.indexStart;
    var _array3$indexEnd = _array3.indexEnd;
    indexEnd = _array3$indexEnd === void 0 ? indexStart : _array3$indexEnd;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, index')) {
    var _array4 = array;
    array = _array4.array;
    indexStart = _array4.index;
    var _array4$indexEnd = _array4.indexEnd;
    indexEnd = _array4$indexEnd === void 0 ? indexStart : _array4$indexEnd;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteIndex args(array) is not array');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('deleteIndex args(indexStart) is not integer');
  }

  if (!(0, _type.isInteger)(indexEnd)) {
    throw new TypeError('deleteIndex args(indexEnd) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexStart) must be from 0 to array.length - 1');
  }

  if (!(0, _number._inRange)(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexEnd) must be from indexStart to array.length - 1');
  }

  return _deleteIndex(array, indexStart, indexEnd);
};
/**
 * array.operation.deleteLength
 */


exports.deleteIndex = deleteIndex;

var _deleteLength = function _deleteLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;
  array.splice(index, length);
  return array;
};

exports._deleteLength = _deleteLength;

var deleteLength = function deleteLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, index', 'length')) {
    var _array5 = array;
    array = _array5.array;
    index = _array5.index;
    var _array5$length = _array5.length;
    length = _array5$length === void 0 ? array.length - index : _array5$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(index, 'index', 'length')) {
    var _index = index;
    index = _index.index;
    var _index$length = _index.length;
    length = _index$length === void 0 ? array.length - index : _index$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteLength args(array) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('deleteLength args(index) is not integer');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, array.length - 1)) {
    throw new RangeError('deleteLength args(index) must be from 0 to array.length - 1');
  }

  length = (0, _min2._min)([length, array.length - index]);

  if (!(0, _number._inRange)(length, 0, array.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 0 to array.length - index');
  }

  return _deleteLength(array, index, length);
};
/**
 * array.operation.deleteFirst
 */


exports.deleteLength = deleteLength;

var _deleteFirst = function _deleteFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(array, 0, length);
};

exports._deleteFirst = _deleteFirst;

var deleteFirst = function deleteFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array6 = array;
    array = _array6.array;
    var _array6$length = _array6.length;
    length = _array6$length === void 0 ? 1 : _array6$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length2 = length;
    length = _length2.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteFirst args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to array.length');
  }

  return _deleteFirst(array, length);
};
/**
 * array.operation.deleteLast
 */


exports.deleteFirst = deleteFirst;

var _deleteLast = function _deleteLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(array, array.length - length, length);
};

exports._deleteLast = _deleteLast;

var deleteLast = function deleteLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array7 = array;
    array = _array7.array;
    var _array7$length = _array7.length;
    length = _array7$length === void 0 ? 1 : _array7$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length3 = length;
    length = _length3.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteLast args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to array.length');
  }

  return _deleteLast(array, length);
};
/**
 * array.operation.includeFirst
 */


exports.deleteLast = deleteLast;

var _includeFirst = function _includeFirst(array, valueArray) {
  if (!(0, _array_common._isFirst)(array, valueArray)) {
    _insert(array, valueArray);
  }

  return array;
};

exports._includeFirst = _includeFirst;

var includeFirst = function includeFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array8 = array;
    array = _array8.array;
    valueArray = _array8.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('includeFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('includeFirst args(valueArray) is not array');
  }

  return _includeFirst(array, valueArray);
};
/**
 * array.operation.includeLast
 */


exports.includeFirst = includeFirst;

var _includeLast = function _includeLast(array, valueArray) {
  if (!(0, _array_common._isLast)(array, valueArray)) {
    _add(array, valueArray);
  }

  return array;
};

exports._includeLast = _includeLast;

var includeLast = function includeLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array9 = array;
    array = _array9.array;
    valueArray = _array9.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('includeLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('includeLast args(valueArray) is not array');
  }

  return _includeLast(array, valueArray);
};
/**
 * array.operation.includeBothEnds
 */


exports.includeLast = includeLast;

var _includeBothEnds = function _includeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (!(0, _array_common._isBothEnds)(array, valueFirstArray, valueLastArray)) {
    _insert(array, valueFirstArray);

    _add(array, valueLastArray);
  }

  return array;
};

exports._includeBothEnds = _includeBothEnds;

var includeBothEnds = function includeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array10 = array;
    array = _array10.array;
    valueFirstArray = _array10.valueFirstArray;
    var _array10$valueLastArr = _array10.valueLastArray;
    valueLastArray = _array10$valueLastArr === void 0 ? valueFirstArray : _array10$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueFirstArray = _array11.valueArray;
    var _array11$valueLastArr = _array11.valueLastArray;
    valueLastArray = _array11$valueLastArr === void 0 ? valueFirstArray : _array11$valueLastArr;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('includeBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('includeBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('includeBothEnds args(valueLastArray) is not array');
  }

  return _includeBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.excludeFirst
 */


exports.includeBothEnds = includeBothEnds;

var _excludeFirst = function _excludeFirst(array, valueArray) {
  if ((0, _array_common._isFirst)(array, valueArray)) {
    _deleteFirst(array, valueArray.length);
  }

  return array;
};

exports._excludeFirst = _excludeFirst;

var excludeFirst = function excludeFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array12 = array;
    array = _array12.array;
    valueArray = _array12.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('excludeFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('excludeFirst args(valueArray) is not array');
  }

  return _excludeFirst(array, valueArray);
};
/**
 * array.operation.excludeLast
 */


exports.excludeFirst = excludeFirst;

var _excludeLast = function _excludeLast(array, valueArray) {
  if ((0, _array_common._isLast)(array, valueArray)) {
    _deleteLast(array, valueArray.length);
  }

  return array;
};

exports._excludeLast = _excludeLast;

var excludeLast = function excludeLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueArray = _array13.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('excludeLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('excludeLast args(valueArray) is not array');
  }

  return _excludeLast(array, valueArray);
};
/**
 * array.operation.excludeBothEnds
 */


exports.excludeLast = excludeLast;

var _excludeBothEnds = function _excludeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _array_common._isBothEnds)(array, valueFirstArray, valueLastArray)) {
    deleteFirst(array, valueFirstArray.length);
    deleteLast(array, (0, _min2._min)([valueLastArray.length, array.length]));
  }

  return array;
};

exports._excludeBothEnds = _excludeBothEnds;

var excludeBothEnds = function excludeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array14 = array;
    array = _array14.array;
    valueFirstArray = _array14.valueFirstArray;
    var _array14$valueLastArr = _array14.valueLastArray;
    valueLastArray = _array14$valueLastArr === void 0 ? valueFirstArray : _array14$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array15 = array;
    array = _array15.array;
    valueFirstArray = _array15.valueArray;
    var _array15$valueLastArr = _array15.valueLastArray;
    valueLastArray = _array15$valueLastArr === void 0 ? valueFirstArray : _array15$valueLastArr;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('excludeBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('excludeBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('excludeBothEnds args(valueLastArray) is not array');
  }

  return _excludeBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.trimFirst
 */


exports.excludeBothEnds = excludeBothEnds;

var _trimFirst = function _trimFirst(array, valueArray) {
  while ((0, _array_common._some)(valueArray, function (value) {
    return (0, _array_common._isFirst)(array, [value]);
  })) {
    _deleteIndex(array, 0);
  }

  return array;
};

exports._trimFirst = _trimFirst;

var trimFirst = function trimFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array16 = array;
    array = _array16.array;
    valueArray = _array16.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('trimFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not array');
  }

  return _trimFirst(array, valueArray);
};
/**
 * array.operation.trimLast
 */


exports.trimFirst = trimFirst;

var _trimLast = function _trimLast(array, valueArray) {
  while ((0, _array_common._some)(valueArray, function (value) {
    return (0, _array_common._isLast)(array, [value]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

exports._trimLast = _trimLast;

var trimLast = function trimLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array17 = array;
    array = _array17.array;
    valueArray = _array17.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('trimLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('trimLast args(valueArray) is not array');
  }

  return _trimLast(array, valueArray);
};
/**
 * array.operation.trimBothEnds
 */


exports.trimLast = trimLast;

var _trimBothEnds = function _trimBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  while ((0, _array_common._some)(valueFirstArray, function (valueFirst) {
    return (0, _array_common._isFirst)(array, [valueFirst]);
  })) {
    _deleteIndex(array, 0);
  }

  while ((0, _array_common._some)(valueLastArray, function (valueLast) {
    return (0, _array_common._isLast)(array, [valueLast]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

exports._trimBothEnds = _trimBothEnds;

var trimBothEnds = function trimBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array18 = array;
    array = _array18.array;
    valueFirstArray = _array18.valueFirstArray;
    var _array18$valueLastArr = _array18.valueLastArray;
    valueLastArray = _array18$valueLastArr === void 0 ? valueFirstArray : _array18$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array19 = array;
    array = _array19.array;
    valueFirstArray = _array19.valueArray;
    var _array19$valueLastArr = _array19.valueLastArray;
    valueLastArray = _array19$valueLastArr === void 0 ? valueFirstArray : _array19$valueLastArr;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('trimBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not array');
  }

  return _trimBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.pushFirst
 */


exports.trimBothEnds = trimBothEnds;

var _pushFirst = function _pushFirst(array, value) {
  array.unshift(value);
  return array.length; // WSH array.unshift is return undefined
};

exports._pushFirst = _pushFirst;

var pushFirst = function pushFirst(array, value) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, value')) {
    var _array20 = array;
    array = _array20.array;
    value = _array20.value;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('pushFirst args(array) is not array');
  }

  return _pushFirst(array, value);
};
/**
 * array.operation.pushLast
 */


exports.pushFirst = pushFirst;

var _pushLast = function _pushLast(array, value) {
  return array.push(value);
};

exports._pushLast = _pushLast;

var pushLast = function pushLast(array, value) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, value')) {
    var _array21 = array;
    array = _array21.array;
    value = _array21.value;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('pushLast args(array) is not array');
  }

  return _pushLast(array, value);
};
/**
 * array.operation.remainFirst
 */


exports.pushLast = pushLast;

var _remainFirst = function _remainFirst(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteIndex(array, length, array.length - 1);
};

exports._remainFirst = _remainFirst;

var remainFirst = function remainFirst(array, length) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array22 = array;
    array = _array22.array;
    length = _array22.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('remainFirst args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('remainFirst args(length) is not integer');
  }

  if (!(0 <= length)) {
    throw new RangeError('remainFirst args(length) must be from 0 to array.length - 1');
  }

  return _remainFirst(array, length);
};
/**
 * array.operation.remainLast
 */


exports.remainFirst = remainFirst;

var _remainLast = function _remainLast(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteLength(array, 0, array.length - length);
};

exports._remainLast = _remainLast;

var remainLast = function remainLast(array, length) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array23 = array;
    array = _array23.array;
    length = _array23.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('remainLast args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('remainLast args(length) is not integer');
  }

  if (!(0 <= length)) {
    throw new RangeError('remainLast args(length) must be from 0 to array.length - 1');
  }

  return _remainLast(array, length);
};
/**
 * filter
 */


exports.remainLast = remainLast;

var _filter = function _filter(array, func) {
  for (var i = array.length - 1; 0 <= i; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (!resultFunc) {
      _deleteIndex(array, i);
    }
  }

  return array;
};

exports._filter = _filter;

var filter = function filter(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array24 = array;
    array = _array24.array;
    func = _array24.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, func);
};

exports.filter = filter;
var _default = {
  _insert: _insert,
  _add: _add,
  _deleteLength: _deleteLength,
  _deleteIndex: _deleteIndex,
  _deleteFirst: _deleteFirst,
  _deleteLast: _deleteLast,
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _includeBothEnds: _includeBothEnds,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  _excludeBothEnds: _excludeBothEnds,
  _trimFirst: _trimFirst,
  _trimLast: _trimLast,
  _trimBothEnds: _trimBothEnds,
  _pushFirst: _pushFirst,
  _pushLast: _pushLast,
  _remainFirst: _remainFirst,
  _remainLast: _remainLast,
  _filter: _filter,
  insert: insert,
  add: add,
  deleteLength: deleteLength,
  deleteIndex: deleteIndex,
  deleteFirst: deleteFirst,
  deleteLast: deleteLast,
  includeFirst: includeFirst,
  includeLast: includeLast,
  includeBothEnds: includeBothEnds,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast,
  excludeBothEnds: excludeBothEnds,
  trimFirst: trimFirst,
  trimLast: trimLast,
  trimBothEnds: trimBothEnds,
  pushFirst: pushFirst,
  pushLast: pushLast,
  remainFirst: remainFirst,
  remainLast: remainLast,
  filter: filter
};
exports["default"] = _default;

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.every = exports.all = exports._all = exports.some = exports._some = exports.findBack = exports.findLast = exports._findLast = exports.find = exports.findFirst = exports._findFirst = exports.findBackIndex = exports.findLastIndex = exports._findLastIndex = exports.findIndex = exports.findFirstIndex = exports._findFirstIndex = exports.count = exports._count = exports.filter = exports._filter = exports.multiple = exports._multiple = exports.single = exports._single = exports.mode = exports._mode = exports.median = exports._median = exports.average = exports._average = exports.sum = exports._sum = exports.from = void 0;

var _type = __webpack_require__(5);

var _number = __webpack_require__(37);

var _isObjectParameter = __webpack_require__(13);

var _clone2 = __webpack_require__(4);

var _cloneDeep2 = __webpack_require__(25);

var _unique2 = __webpack_require__(39);

var _min2 = __webpack_require__(55);

var _max2 = __webpack_require__(57);

var _map2 = __webpack_require__(59);

/**
 * from
 */
var from = function from(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};
/**
 * sum
 */


exports.from = from;

var _sum = function _sum(array) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    result += array[i];
  }

  return result;
};

exports._sum = _sum;

var sum = function sum(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('sum args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('sum args(array) element is not number');
  }

  return _sum(array);
};
/**
 * average
 */


exports.sum = sum;

var _average = function _average(array) {
  if (array.length === 0) {
    return null;
  }

  return _sum(array) / array.length;
};

exports._average = _average;

var average = function average(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('average args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('average args(array) element is not number');
  }

  return _average(array);
};
/**
 * median
 */


exports.average = average;

var _median = function _median(array) {
  if (array.length === 0) {
    return null;
  }

  var sortedArray = (0, _cloneDeep2._cloneDeep)(array);
  sortedArray.sort(function (a, b) {
    return a - b;
  });

  if ((0, _number.isEven)(sortedArray.length)) {
    // Even number length
    var centerIndex = sortedArray.length / 2;
    return (sortedArray[centerIndex - 1] + sortedArray[centerIndex]) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

exports._median = _median;

var median = function median(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('median args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('median args(array) element is not number');
  }

  return _median(array);
};
/**
 * mode
 */


exports.median = median;

var _mode = function _mode(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = (0, _unique2._unique)(array);
  var countArray = (0, _map2._map)(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });
  var maxValue = (0, _max2._max)(countArray);
  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === maxValue;
  });
};

exports._mode = _mode;

var mode = function mode(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('mode args(array) is not array');
  }

  return _mode(array);
};
/**
 * single
 */


exports.mode = mode;

var _single = function _single(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = (0, _unique2._unique)(array);
  var countArray = (0, _map2._map)(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });
  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === 1;
  });
};

exports._single = _single;

var single = function single(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('single args(array) is not array');
  }

  return _single(array);
};
/**
 * multiple
 */


exports.single = single;

var _multiple = function _multiple(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = (0, _unique2._unique)(array);
  var countArray = (0, _map2._map)(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });
  return _filter(uniqueArray, function (element, index) {
    return countArray[index] >= 2;
  });
};

exports._multiple = _multiple;

var multiple = function multiple(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('multiple args(array) is not array');
  }

  return _multiple(array);
};
/**
 * filter
 */


exports.multiple = multiple;

var _filter = function _filter(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      result.push(array[i]);
    }
  }

  return result;
};

exports._filter = _filter;

var filter = function filter(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('filter args(func) is not function');
  }

  return _filter(array, func);
};
/**
 * count
 */


exports.filter = filter;

var _count = function _count(array, func) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_count args(func) result is not boolean');
    }

    if (resultFunc) {
      result += 1;
    }
  }

  return result;
};

exports._count = _count;

var count = function count(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array2 = array;
    array = _array2.array;
    func = _array2.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('count args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('count args(func) is not function');
  }

  return _count(array, func);
};
/**
 * findFirstIndex
 */


exports.count = count;

var _findFirstIndex = function _findFirstIndex(array, func) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_findFirstIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

exports._findFirstIndex = _findFirstIndex;

var findFirstIndex = function findFirstIndex(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array3 = array;
    array = _array3.array;
    func = _array3.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findFirstIndex args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findFirstIndex args(compareFunc) is not function');
  }

  return _findFirstIndex(array, func);
};

exports.findFirstIndex = findFirstIndex;
var findIndex = findFirstIndex;
/**
 * findLastIndex
 */

exports.findIndex = findIndex;

var _findLastIndex = function _findLastIndex(array, func) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_findLastIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

exports._findLastIndex = _findLastIndex;

var findLastIndex = function findLastIndex(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array4 = array;
    array = _array4.array;
    func = _array4.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findLastIndex args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findLastIndex args(compareFunc) is not function');
  }

  return _findLastIndex(array, func);
};

exports.findLastIndex = findLastIndex;
var findBackIndex = findLastIndex;
/**
 * findFirst
 */

exports.findBackIndex = findBackIndex;

var _findFirst = function _findFirst(array, func) {
  var resultIndex = _findFirstIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

exports._findFirst = _findFirst;

var findFirst = function findFirst(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array5 = array;
    array = _array5.array;
    func = _array5.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findFirst args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findFirst args(compareFunc) is not function');
  }

  return _findFirst(array, func);
};

exports.findFirst = findFirst;
var find = findFirst;
/**
 * findLast
 */

exports.find = find;

var _findLast = function _findLast(array, func) {
  var resultIndex = _findLastIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

exports._findLast = _findLast;

var findLast = function findLast(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array6 = array;
    array = _array6.array;
    func = _array6.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findLast args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findLast args(compareFunc) is not function');
  }

  return _findLast(array, func);
};

exports.findLast = findLast;
var findBack = findLast;
/**
 * some
 */

exports.findBack = findBack;

var _some = function _some(array, func) {
  return _findFirstIndex(array, func) !== -1;
};

exports._some = _some;

var some = function some(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array7 = array;
    array = _array7.array;
    func = _array7.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('some args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('some args(compareFunc) is not function');
  }

  return _some(array, func);
};
/**
 * all:every
 */


exports.some = some;

var _all = function _all(array, func) {
  if (array.length === 0) {
    return false;
  }

  return _filter(array, func).length === array.length;
};

exports._all = _all;

var all = function all(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array8 = array;
    array = _array8.array;
    func = _array8.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('all args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('all args(compareFunc) is not function');
  }

  return _all(array, func);
};

exports.all = all;
var every = all;
/**
 * isFirst
 */

exports.every = every;

var _isFirst = function _isFirst(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    var firstValue = array[index];

    if ((0, _type.isFunction)(value)) {
      return value(firstValue);
    }

    return firstValue === value;
  });
};

exports._isFirst = _isFirst;

var isFirst = function isFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array9 = array;
    array = _array9.array;
    valueArray = _array9.valueArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('isFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isFirst(array, valueArray);
};
/**
 * isLast
 */


exports.isFirst = isFirst;

var _isLast = function _isLast(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    var lastValue = array[array.length - valueArray.length + index];

    if ((0, _type.isFunction)(value)) {
      return value(lastValue);
    }

    return lastValue === value;
  });
};

exports._isLast = _isLast;

var isLast = function isLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array10 = array;
    array = _array10.array;
    valueArray = _array10.valueArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('isLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isLast(array, valueArray);
};
/**
 * isBothEnds
 */


exports.isLast = isLast;

var _isBothEnds = function _isBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (array.length <= 1) {
    return false;
  }

  return _isFirst(array, valueFirstArray) && _isLast(array, valueLastArray);
};

exports._isBothEnds = _isBothEnds;

var isBothEnds = function isBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array11 = array;
    array = _array11.array;
    valueFirstArray = _array11.valueFirstArray;
    var _array11$valueLastArr = _array11.valueLastArray;
    valueLastArray = _array11$valueLastArr === void 0 ? valueFirstArray : _array11$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array12 = array;
    array = _array12.array;
    valueFirstArray = _array12.valueArray;
    valueLastArray = valueFirstArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('isBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('isBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('isBothEnds args(valueLastArray) is not array');
  }

  return _isBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * subIndex
 */


exports.isBothEnds = isBothEnds;

var _subIndex = function _subIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  return array.slice(indexStart, indexEnd + 1);
};

exports._subIndex = _subIndex;

var subIndex = function subIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, indexStart', 'indexEnd')) {
    var _array13 = array;
    array = _array13.array;
    indexStart = _array13.indexStart;
    var _array13$indexEnd = _array13.indexEnd;
    indexEnd = _array13$indexEnd === void 0 ? indexStart : _array13$indexEnd;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subIndex args(array) is not array');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('subIndex args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, array.length - 1)) {
    throw new RangeError('subIndex args(indexStart) must be from 0 to array.length - 1');
  }

  if (!(0, _type.isInteger)(indexEnd)) {
    throw new TypeError('subIndex args(indexEnd) is not integer');
  }

  if (!(0, _number._inRange)(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError('subIndex args(indexEnd) must be from indexStart to array.length - 1');
  }

  return _subIndex(array, indexStart, indexEnd);
};
/**
 * subLength
 */


exports.subIndex = subIndex;

var _subLength = function _subLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;
  return _subIndex(array, index, index + length - 1); // same:
  //  return array.slice(index, index + length);
};

exports._subLength = _subLength;

var subLength = function subLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, index', 'length')) {
    var _array14 = array;
    array = _array14.array;
    index = _array14.index;
    var _array14$length = _array14.length;
    length = _array14$length === void 0 ? array.length - index : _array14$length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subLength args(array) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('subLength args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, array.length - 1)) {
    throw new RangeError('subLength args(index) must be from 0 to array.length - 1');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  length = (0, _min2._min)([length, array.length - index]);

  if (!(0, _number._inRange)(length, 0, array.length - index)) {
    throw new RangeError('subLength args(length) must be from 0 to array.length - 1');
  }

  return _subLength(array, index, length);
};
/**
 * subFirst
 */


exports.subLength = subLength;

var _subFirst = function _subFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(array, 0, length);
};

exports._subFirst = _subFirst;

var subFirst = function subFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array15 = array;
    array = _array15.array;
    var _array15$length = _array15.length;
    length = _array15$length === void 0 ? 1 : _array15$length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subFirst args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to array.length');
  }

  return _subFirst(array, length);
};
/**
 * subLast
 */


exports.subFirst = subFirst;

var _subLast = function _subLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(array, array.length - length, length);
};

exports._subLast = _subLast;

var subLast = function subLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array16 = array;
    array = _array16.array;
    var _array16$length = _array16.length;
    length = _array16$length === void 0 ? 1 : _array16$length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subLast args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('subLast args(length) must be from 0 to array.length');
  }

  return _subLast(array, length);
};

exports.subLast = subLast;
var _default = {
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
  _single: _single,
  _multiple: _multiple,
  _filter: _filter,
  _count: _count,
  _findFirstIndex: _findFirstIndex,
  _findLastIndex: _findLastIndex,
  _findFirst: _findFirst,
  _findLast: _findLast,
  _some: _some,
  _all: _all,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEnds: _isBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  from: from,
  sum: sum,
  average: average,
  median: median,
  mode: mode,
  single: single,
  multiple: multiple,
  filter: filter,
  count: count,
  findFirstIndex: findFirstIndex,
  findLastIndex: findLastIndex,
  findFirst: findFirst,
  findLast: findLast,
  some: some,
  all: all,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every
};
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._unique = void 0;

var _includes = __webpack_require__(11);

var _returnValueFunction = __webpack_require__(24);

var _unique2 = __webpack_require__(40);

/**
 * uniqe
 */
var _unique = function _unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnValueFunction.__returnValueFunction) {
    if (detail === false) {
      return (0, _unique2.__unique)(array);
    }
  }

  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);

    if (!(0, _includes.__includes)(index, funcResult)) {
      index.push(funcResult);
      result.push(v);
    }
  });
  func = undefined;

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._unique = _unique;
var _default = {
  _unique: _unique
};
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__unique = void 0;

var _syntax = __webpack_require__(41);

var _includes = __webpack_require__(11);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * uniqe
 */
var __unique = function __unique(array) {
  if ((0, _syntax.canUseSet)() && array.length > 120) {
    return _toConsumableArray(new Set(array));
  } else {
    var result = [];

    for (var i = 0, l = array.length; i < l; i += 1) {
      if (!(0, _includes.__includes)(result, array[i])) {
        result.push(array[i]);
      }
    }

    return result;
  } // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120

};

exports.__unique = __unique;
var _default = {
  __unique: __unique
};
exports["default"] = _default;

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.functionValue = void 0;

var _type = __webpack_require__(5);

/**
 * function Value
 */
var functionValue = function functionValue(value) {
  if ((0, _type.isFunction)(value)) {
    return value();
  } else {
    return value;
  }
};

exports.functionValue = functionValue;
var _default = {
  functionValue: functionValue
};
exports["default"] = _default;

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._min = void 0;

var _isType = __webpack_require__(6);

var _returnValueFunction = __webpack_require__(24);

var _min2 = __webpack_require__(56);

/**
 * array.min
 */
var _min = function _min(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnValueFunction.__returnValueFunction && detail === false) {
    return (0, _min2.__min)(array);
  }

  var result = {
    index: -1,
    element: null,
    value: null
  };

  if (array.length === 0) {
    return detail ? result : result.value;
  }

  result.index = 0;
  result.element = array[0];
  result.value = Infinity;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var value = func(array[i]);

    if (!(0, _isType.isNumber)(value)) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (value < result.value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }

  return detail ? result : result.value;
};

exports._min = _min;
var _default = {
  _min: _min
};
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__min = void 0;

var _isType = __webpack_require__(6);

/**
 * array.min
 */
var __min = function __min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!(0, _isType.isNumber)(array[i])) {
      throw new TypeError('__min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

exports.__min = __min;
var _default = {
  __min: __min
};
exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._max = void 0;

var _isType = __webpack_require__(6);

var _returnValueFunction = __webpack_require__(24);

var _max2 = __webpack_require__(58);

/**
 * array.max
 */
var _max = function _max(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnValueFunction.__returnValueFunction && detail === false) {
    return (0, _max2.__max)(array);
  }

  var result = {
    index: -1,
    element: null,
    value: null
  };

  if (array.length === 0) {
    return detail ? result : result.value;
  }

  result.index = 0;
  result.element = array[0];
  result.value = -Infinity;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var value = func(array[i]);

    if (!(0, _isType.isNumber)(value)) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result.value < value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }

  return detail ? result : result.value;
};

exports._max = _max;
var _default = {
  _max: _max
};
exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__max = void 0;

var _isType = __webpack_require__(6);

/**
 * array.max
 */
var __max = function __max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!(0, _isType.isNumber)(array[i])) {
      throw new TypeError('__max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

exports.__max = __max;
var _default = {
  __max: __max
};
exports["default"] = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._map = void 0;

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

exports._map = _map;
var _default = {
  _map: _map
};
exports["default"] = _default;

/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.operation = exports.arrayToIndexValueArray = exports.every = exports.findBack = exports.find = exports.findBackIndex = exports.findIndex = exports.SortFunc = exports.arrayEntries = exports.IntegerArray = exports.NumberArray = exports.unique = exports.group = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.isBothEnds = exports.isLast = exports.isFirst = exports.all = exports.some = exports.findLast = exports.findFirst = exports.findLastIndex = exports.findFirstIndex = exports.count = exports.map = exports.filter = exports.multiple = exports.single = exports.mode = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.from = exports._SortFunc = exports._arrayEntries = exports._IntegerArray = exports._NumberArray = exports._unique = exports._group = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._isBothEnds = exports._isLast = exports._isFirst = exports._all = exports._some = exports._findLast = exports._findFirst = exports._findLastIndex = exports._findFirstIndex = exports._count = exports._map = exports._filter = exports._multiple = exports._single = exports._mode = exports._median = exports._average = exports._sum = exports._max = exports._min = void 0;

var _array_common = _interopRequireDefault(__webpack_require__(38));

var _map2 = _interopRequireDefault(__webpack_require__(59));

var _map3 = _interopRequireDefault(__webpack_require__(62));

var _min2 = _interopRequireDefault(__webpack_require__(55));

var _min3 = _interopRequireDefault(__webpack_require__(63));

var _max2 = _interopRequireDefault(__webpack_require__(57));

var _max3 = _interopRequireDefault(__webpack_require__(64));

var _NumberArray2 = _interopRequireDefault(__webpack_require__(35));

var _NumberArray3 = _interopRequireDefault(__webpack_require__(65));

var _IntegerArray2 = _interopRequireDefault(__webpack_require__(34));

var _IntegerArray3 = _interopRequireDefault(__webpack_require__(66));

var _arrayEntries2 = _interopRequireDefault(__webpack_require__(67));

var _group2 = _interopRequireDefault(__webpack_require__(68));

var _group3 = _interopRequireDefault(__webpack_require__(69));

var _unique2 = _interopRequireDefault(__webpack_require__(39));

var _unique3 = _interopRequireDefault(__webpack_require__(70));

var _SortFuncOrder = _interopRequireDefault(__webpack_require__(71));

var _SortFunc2 = _interopRequireDefault(__webpack_require__(72));

var _SortFunc3 = _interopRequireDefault(__webpack_require__(73));

var _array_operation = _interopRequireDefault(__webpack_require__(36));

var _popFirst = _interopRequireDefault(__webpack_require__(77));

var _popFirst2 = _interopRequireDefault(__webpack_require__(78));

var _popLast = _interopRequireDefault(__webpack_require__(79));

var _popLast2 = _interopRequireDefault(__webpack_require__(80));

var _popArrayFirst = _interopRequireDefault(__webpack_require__(81));

var _popArrayFirst2 = _interopRequireDefault(__webpack_require__(82));

var _popArrayLast = _interopRequireDefault(__webpack_require__(83));

var _popArrayLast2 = _interopRequireDefault(__webpack_require__(84));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_common["default"]), _map2["default"]), _map3["default"]), _min2["default"]), _min3["default"]), _max2["default"]), _max3["default"]), _NumberArray2["default"]), _NumberArray3["default"]), _IntegerArray2["default"]), _IntegerArray3["default"]), _arrayEntries2["default"]), _group2["default"]), _group3["default"]), _unique2["default"]), _unique3["default"]), _SortFuncOrder["default"]), _SortFunc2["default"]), _SortFunc3["default"]);

var arrayOperationJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_operation["default"]), _popFirst["default"]), _popFirst2["default"]), _popLast["default"]), _popLast2["default"]), _popArrayFirst["default"]), _popArrayFirst2["default"]), _popArrayLast["default"]), _popArrayLast2["default"]);

var _min = arrayJs._min,
    _max = arrayJs._max,
    _sum = arrayJs._sum,
    _average = arrayJs._average,
    _median = arrayJs._median,
    _mode = arrayJs._mode,
    _single = arrayJs._single,
    _multiple = arrayJs._multiple,
    _filter = arrayJs._filter,
    _map = arrayJs._map,
    _count = arrayJs._count,
    _findFirstIndex = arrayJs._findFirstIndex,
    _findLastIndex = arrayJs._findLastIndex,
    _findFirst = arrayJs._findFirst,
    _findLast = arrayJs._findLast,
    _some = arrayJs._some,
    _all = arrayJs._all,
    _isFirst = arrayJs._isFirst,
    _isLast = arrayJs._isLast,
    _isBothEnds = arrayJs._isBothEnds,
    _subIndex = arrayJs._subIndex,
    _subLength = arrayJs._subLength,
    _subFirst = arrayJs._subFirst,
    _subLast = arrayJs._subLast,
    _group = arrayJs._group,
    _unique = arrayJs._unique,
    _NumberArray = arrayJs._NumberArray,
    _IntegerArray = arrayJs._IntegerArray,
    _arrayEntries = arrayJs._arrayEntries,
    _SortFunc = arrayJs._SortFunc,
    from = arrayJs.from,
    min = arrayJs.min,
    max = arrayJs.max,
    sum = arrayJs.sum,
    average = arrayJs.average,
    median = arrayJs.median,
    mode = arrayJs.mode,
    single = arrayJs.single,
    multiple = arrayJs.multiple,
    filter = arrayJs.filter,
    map = arrayJs.map,
    count = arrayJs.count,
    findFirstIndex = arrayJs.findFirstIndex,
    findLastIndex = arrayJs.findLastIndex,
    findFirst = arrayJs.findFirst,
    findLast = arrayJs.findLast,
    some = arrayJs.some,
    all = arrayJs.all,
    isFirst = arrayJs.isFirst,
    isLast = arrayJs.isLast,
    isBothEnds = arrayJs.isBothEnds,
    subIndex = arrayJs.subIndex,
    subLength = arrayJs.subLength,
    subFirst = arrayJs.subFirst,
    subLast = arrayJs.subLast,
    group = arrayJs.group,
    unique = arrayJs.unique,
    NumberArray = arrayJs.NumberArray,
    IntegerArray = arrayJs.IntegerArray,
    arrayEntries = arrayJs.arrayEntries,
    SortFunc = arrayJs.SortFunc,
    findIndex = arrayJs.findIndex,
    findBackIndex = arrayJs.findBackIndex,
    find = arrayJs.find,
    findBack = arrayJs.findBack,
    every = arrayJs.every,
    arrayToIndexValueArray = arrayJs.arrayToIndexValueArray; // // Circular reference Error
// export const operation = _copyProperty(arrayOperationJs, `
//   _insert, _add,
//   _deleteLength, _deleteIndex,
//   _deleteFirst, _deleteLast,
//   _includeFirst, _includeLast, _includeBothEnds,
//   _excludeFirst, _excludeLast, _excludeBothEnds,
//   _trimFirst, _trimLast, _trimBothEnds,
//   _popFirst, _popLast,
//   _pushFirst, _pushLast,
//   _remainFirst, _remainLast,
//   _filter,
//   insert, add,
//   deleteLength, deleteIndex,
//   deleteFirst, deleteLast,
//   includeFirst, includeLast, includeBothEnds,
//   excludeFirst, excludeLast, excludeBothEnds,
//   trimFirst, trimLast, trimBothEnds,
//   popFirst, popLast,
//   pushFirst, pushLast,
//   remainFirst, remainLast,
//   filter,
// `);

exports.arrayToIndexValueArray = arrayToIndexValueArray;
exports.every = every;
exports.findBack = findBack;
exports.find = find;
exports.findBackIndex = findBackIndex;
exports.findIndex = findIndex;
exports.SortFunc = SortFunc;
exports.arrayEntries = arrayEntries;
exports.IntegerArray = IntegerArray;
exports.NumberArray = NumberArray;
exports.unique = unique;
exports.group = group;
exports.subLast = subLast;
exports.subFirst = subFirst;
exports.subLength = subLength;
exports.subIndex = subIndex;
exports.isBothEnds = isBothEnds;
exports.isLast = isLast;
exports.isFirst = isFirst;
exports.all = all;
exports.some = some;
exports.findLast = findLast;
exports.findFirst = findFirst;
exports.findLastIndex = findLastIndex;
exports.findFirstIndex = findFirstIndex;
exports.count = count;
exports.map = map;
exports.filter = filter;
exports.multiple = multiple;
exports.single = single;
exports.mode = mode;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
exports.from = from;
exports._SortFunc = _SortFunc;
exports._arrayEntries = _arrayEntries;
exports._IntegerArray = _IntegerArray;
exports._NumberArray = _NumberArray;
exports._unique = _unique;
exports._group = _group;
exports._subLast = _subLast;
exports._subFirst = _subFirst;
exports._subLength = _subLength;
exports._subIndex = _subIndex;
exports._isBothEnds = _isBothEnds;
exports._isLast = _isLast;
exports._isFirst = _isFirst;
exports._all = _all;
exports._some = _some;
exports._findLast = _findLast;
exports._findFirst = _findFirst;
exports._findLastIndex = _findLastIndex;
exports._findFirstIndex = _findFirstIndex;
exports._count = _count;
exports._map = _map;
exports._filter = _filter;
exports._multiple = _multiple;
exports._single = _single;
exports._mode = _mode;
exports._median = _median;
exports._average = _average;
exports._sum = _sum;
exports._max = _max;
exports._min = _min;
var operation = arrayOperationJs;
exports.operation = operation;
var _default = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
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
  _isBothEnds: _isBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  _group: _group,
  _unique: _unique,
  _NumberArray: _NumberArray,
  _IntegerArray: _IntegerArray,
  _arrayEntries: _arrayEntries,
  _SortFunc: _SortFunc,
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  median: median,
  mode: mode,
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
  isBothEnds: isBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  group: group,
  unique: unique,
  NumberArray: NumberArray,
  IntegerArray: IntegerArray,
  arrayEntries: arrayEntries,
  SortFunc: SortFunc,
  // Another name
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every,
  arrayToIndexValueArray: arrayToIndexValueArray,
  operation: operation
};
exports["default"] = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.map = void 0;

var _type = __webpack_require__(5);

var _map2 = __webpack_require__(59);

var _isObjectParameter = __webpack_require__(13);

/**
 * map
 */
var map = function map(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return (0, _map2._map)(array, func);
};

exports.map = map;
var _default = {
  map: map
};
exports["default"] = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.min = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _returnValueFunction = __webpack_require__(24);

var _min2 = __webpack_require__(55);

/**
 * array.min
 */
var min = function min(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnValueFunction.__returnValueFunction : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('min args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('min args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('min args(detail) is not boolean');
  }

  return (0, _min2._min)(array, func, detail);
};

exports.min = min;
var _default = {
  min: min
};
exports["default"] = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.max = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _returnValueFunction = __webpack_require__(24);

var _max2 = __webpack_require__(57);

/**
 * array.max
 */
var max = function max(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnValueFunction.__returnValueFunction : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('max args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('max args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('max args(detail) is not boolean');
  }

  return (0, _max2._max)(array, func, detail);
};

exports.max = max;
var _default = {
  max: max
};
exports["default"] = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumberArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _NumberArray2 = __webpack_require__(35);

/**
 * NumberArray
 */
var NumberArray = function NumberArray(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!(0, _type.isNumber)(start)) {
    throw new TypeError('NumberArray args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isNumber)(end)) {
    throw new TypeError('NumberArray args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isNumber)(increment)) {
    throw new TypeError('NumberArray args(increment) is not number');
  }

  return (0, _NumberArray2._NumberArray)(start, end, increment);
};

exports.NumberArray = NumberArray;
var _default = {
  NumberArray: NumberArray
};
exports["default"] = _default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IntegerArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _IntegerArray2 = __webpack_require__(34);

/**
 * IntegerArray
 */
var IntegerArray = function IntegerArray(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!(0, _type.isInteger)(start)) {
    throw new TypeError('IntegerArray args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isInteger)(end)) {
    throw new TypeError('IntegerArray args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isInteger)(increment)) {
    throw new TypeError('IntegerArray args(increment) is not number');
  }

  return (0, _IntegerArray2._IntegerArray)(start, end, increment);
};

exports.IntegerArray = IntegerArray;
var _default = {
  IntegerArray: IntegerArray
};
exports["default"] = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayToIndexValueArray = exports.arrayEntries = exports._arrayEntries = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _NumberArray2 = __webpack_require__(35);

/**
 * arrayEntries
 */
var _arrayEntries = function _arrayEntries(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

exports._arrayEntries = _arrayEntries;

var arrayEntries = function arrayEntries(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('arrayEntries args(array) is not array');
  }

  return _arrayEntries(array);
};

exports.arrayEntries = arrayEntries;
var arrayToIndexValueArray = arrayEntries;
exports.arrayToIndexValueArray = arrayToIndexValueArray;
var _default = {
  _arrayEntries: _arrayEntries,
  arrayEntries: arrayEntries,
  arrayToIndexValueArray: arrayToIndexValueArray
};
exports["default"] = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._group = void 0;

var _returnValueFunction = __webpack_require__(24);

/**
 * group
 */
var _group = function _group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);
    var i = index.indexOf(funcResult);

    if (i === -1) {
      index.push(funcResult);
      result.push([v]);
    } else {
      result[i].push(v);
    }
  });

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._group = _group;
var _default = {
  _group: _group
};
exports["default"] = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.group = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _returnValueFunction = __webpack_require__(24);

var _group2 = __webpack_require__(68);

/**
 * group
 */
var group = function group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnValueFunction.__returnValueFunction : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('group args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('group args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('group args(detail) is not boolean');
  }

  return (0, _group2._group)(array, func, detail);
};

exports.group = group;
var _default = {
  group: group
};
exports["default"] = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unique = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _includes = __webpack_require__(11);

var _returnValueFunction = __webpack_require__(24);

var _unique2 = __webpack_require__(39);

/**
 * uniqe
 */
var unique = function unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnValueFunction.__returnValueFunction : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('unique args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('unique args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('unique args(detail) is not boolean');
  }

  return (0, _unique2._unique)(array, func, detail);
};

exports.unique = unique;
var _default = {
  unique: unique
};
exports["default"] = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__SortFuncOrder = void 0;

/**
 * SortFunc.order
 */
var __SortFuncOrder = {};
exports.__SortFuncOrder = __SortFuncOrder;
__SortFuncOrder.normal = {};

__SortFuncOrder.normal.ascending = function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};

__SortFuncOrder.normal.descending = function (a, b) {
  return -1 * __SortFuncOrder.normal.ascending(a, b);
};

__SortFuncOrder.dictionaryUpperCase = {};

__SortFuncOrder.dictionaryUpperCase.ascending = function (a, b) {
  var al = a.toLowerCase();
  var bl = b.toLowerCase();
  return al < bl ? -1 : al > bl ? 1 : a < b ? -1 : a > b ? 1 : 0;
};

__SortFuncOrder.dictionaryUpperCase.descending = function (a, b) {
  return -1 * __SortFuncOrder.dictionaryUpperCase.ascending(a, b);
};

__SortFuncOrder.dictionaryLowerCase = {};

__SortFuncOrder.dictionaryLowerCase.ascending = function (a, b) {
  var al = a.toLowerCase();
  var bl = b.toLowerCase();
  return al < bl ? -1 : al > bl ? 1 : a < b ? 1 : a > b ? -1 : 0;
};

__SortFuncOrder.dictionaryLowerCase.descending = function (a, b) {
  return -1 * __SortFuncOrder.dictionaryLowerCase.ascending(a, b);
};

__SortFuncOrder.version = {};

__SortFuncOrder.version.ascending = function (a, b) {
  var arrayA = a.split('.');
  var arrayB = b.split('.');
  var length = Math.min(arrayA.length, arrayB.length);

  for (var i = 0; i < length; i += 1) {
    var numberA = parseInt(arrayA[i], 10);
    var numberB = parseInt(arrayB[i], 10);

    if (numberA < numberB) {
      return -1;
    }

    if (numberA > numberB) {
      return 1;
    }

    var valueA = arrayA[i];
    var valueB = arrayB[i];
    var lowerA = valueA.toLowerCase();
    var lowerB = valueB.toLowerCase();

    if (lowerA < lowerB) {
      return -1;
    }

    if (lowerA > lowerB) {
      return 1;
    }

    if (valueA < valueB) {
      return 1;
    }

    if (valueA > valueB) {
      return -1;
    } // lowerCase < upperCase

  }

  if (arrayA.length < arrayB.length) {
    return -1;
  }

  if (arrayA.length > arrayB.length) {
    return 1;
  }

  return 0;
};

__SortFuncOrder.version.descending = function (a, b) {
  return -1 * __SortFuncOrder.version.ascending(a, b);
};

var _default = {
  __SortFuncOrder: __SortFuncOrder
};
exports["default"] = _default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._SortFunc = void 0;

var _map2 = __webpack_require__(59);

var _returnValueFunction = __webpack_require__(24);

var _SortFuncOrder = __webpack_require__(71);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * SortFunc
 */
var _SortFunc = function _SortFunc(orderSettingArray) {
  var sortFuncArray = (0, _map2._map)(orderSettingArray, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        orderFunc = _ref2[0],
        _ref2$ = _ref2[1],
        valueFunc = _ref2$ === void 0 ? _returnValueFunction.__returnValueFunction : _ref2$;

    return function (a, b) {
      return orderFunc(valueFunc(a), valueFunc(b));
    };
  });
  return function (a, b) {
    for (var i = 0, l = sortFuncArray.length; i < l; i += 1) {
      var result = sortFuncArray[i](a, b);

      if (result !== 0) {
        return result;
      }
    }

    return 0;
  };
};

exports._SortFunc = _SortFunc;
_SortFunc.order = _SortFuncOrder.__SortFuncOrder;
var _default = {
  _SortFunc: _SortFunc
};
exports["default"] = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SortFunc = void 0;

var _isType = __webpack_require__(6);

var _allMatchAll2 = __webpack_require__(74);

var _SortFunc2 = __webpack_require__(72);

var SortFunc = function SortFunc(orderSettingArray) {
  if (!(0, _isType.isArray)(orderSettingArray)) {
    throw new TypeError('SortFunc args(orderSettingArray) is not array');
  }

  if (!(0, _allMatchAll2._allMatchAll)(orderSettingArray, [_isType.isArray, function (element) {
    return (0, _isType.isFunction)(element[0]) && (0, _isType.isFunction)(element[1]);
  }])) {
    throw new TypeError('SortFunc args(orderSettingArray) element[0|1] is not function ');
  }

  return (0, _SortFunc2._SortFunc)(orderSettingArray);
};

exports.SortFunc = SortFunc;
SortFunc.order = _SortFunc2._SortFunc.order;
var _default = {
  SortFunc: SortFunc
};
exports["default"] = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchAll = exports._allMatchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _matchAll2 = __webpack_require__(75);

/**
 * allMatchAll
 */
var _allMatchAll = function _allMatchAll(valueArray, compareArray) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _matchAll2._matchAll)(value, compareArray);
  });
};

exports._allMatchAll = _allMatchAll;

var allMatchAll = function allMatchAll(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatchAll args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('allMatchAll args(compareArray) is not array');
  }

  return _allMatchAll(valueArray, compareArray);
};

exports.allMatchAll = allMatchAll;
var _default = {
  _allMatchAll: _allMatchAll,
  allMatchAll: allMatchAll
};
exports["default"] = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAll = exports._matchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _match2 = __webpack_require__(76);

/**
 * matchAll
 */
var _matchAll = function _matchAll(value, compareArray) {
  return (0, _array_common._all)(compareArray, function (compare) {
    return (0, _match2._match)(value, compare);
  });
};

exports._matchAll = _matchAll;

var matchAll = function matchAll(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
};

exports.matchAll = matchAll;
var _default = {
  _matchAll: _matchAll,
  matchAll: matchAll
};
exports["default"] = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = exports._match = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * match
 */
var _match = function _match(value, compare) {
  if ((0, _type.isString)(value)) {
    var result;

    if ((0, _type.isRegExp)(compare)) {
      result = value.match(compare) !== null;
    } else if ((0, _type.isFunction)(compare)) {
      result = compare(value);

      if (!(0, _type.isBoolean)(result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      result = value === compare;
    }

    return result;
  } else {
    var _result;

    if ((0, _type.isFunction)(compare)) {
      _result = compare(value);

      if (!(0, _type.isBoolean)(_result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      _result = value === compare;
    }

    return _result;
  }
};

exports._match = _match;

var match = function match(value, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  return _match(value, compare);
};

exports.match = match;
var _default = {
  _match: _match,
  match: match
};
exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popFirst = void 0;

/**
 * array.operation.popFirst
 */
var _popFirst = function _popFirst(array) {
  return array.shift();
};

exports._popFirst = _popFirst;
var _default = {
  _popFirst: _popFirst
};
exports["default"] = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popFirst = void 0;

var _isType = __webpack_require__(6);

var _popFirst2 = __webpack_require__(77);

/**
 * array.operation.popFirst
 */
var popFirst = function popFirst(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popFirst args(array) is not array');
  }

  return (0, _popFirst2._popFirst)(array);
};

exports.popFirst = popFirst;
var _default = {
  popFirst: popFirst
};
exports["default"] = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popLast = void 0;

/**
 * array.operation.popLast
 */
var _popLast = function _popLast(array) {
  return array.pop();
};

exports._popLast = _popLast;
var _default = {
  _popLast: _popLast
};
exports["default"] = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popLast = void 0;

var _isType = __webpack_require__(6);

var _popLast2 = __webpack_require__(79);

/**
 * array.operation.popLast
 */
var popLast = function popLast(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popLast args(array) is not array');
  }

  return (0, _popLast2._popLast)(array);
};

exports.popLast = popLast;
var _default = {
  popLast: popLast
};
exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popArrayFirst = void 0;

/**
 * array.operation.popArrayFirst
 */
var _popArrayFirst = function _popArrayFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.splice(0, length);
};

exports._popArrayFirst = _popArrayFirst;
var _default = {
  _popArrayFirst: _popArrayFirst
};
exports["default"] = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popArrayFirst = void 0;

var _isType = __webpack_require__(6);

var _number = __webpack_require__(37);

var _isObjectParameter = __webpack_require__(13);

var _popArrayFirst2 = __webpack_require__(81);

/**
 * array.operation.popArrayFirst
 */
var popArrayFirst = function popArrayFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'length')) {
    var _array = array;
    array = _array.array;
    var _array$length = _array.length;
    length = _array$length === void 0 ? 1 : _array$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popArrayFirst args(array) is not array');
  }

  if (!(0, _isType.isInteger)(length)) {
    throw new TypeError('popArrayFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 1, array.length)) {
    throw new RangeError('popArrayFirst args(length) must be from 0 to array.length');
  }

  return (0, _popArrayFirst2._popArrayFirst)(array, length);
};

exports.popArrayFirst = popArrayFirst;
var _default = {
  popArrayFirst: popArrayFirst
};
exports["default"] = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popArrayLast = void 0;

/**
 * array.operation.popArrayLast
 */
var _popArrayLast = function _popArrayLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.splice(array.length - length, length);
};

exports._popArrayLast = _popArrayLast;
var _default = {
  _popArrayLast: _popArrayLast
};
exports["default"] = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popArrayLast = void 0;

var _isType = __webpack_require__(6);

var _number = __webpack_require__(37);

var _isObjectParameter = __webpack_require__(13);

var _popArrayLast2 = __webpack_require__(83);

/**
 * array.operation.popArrayLast
 */
var popArrayLast = function popArrayLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'length')) {
    var _array = array;
    array = _array.array;
    var _array$length = _array.length;
    length = _array$length === void 0 ? 1 : _array$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popArrayLast args(array) is not array');
  }

  if (!(0, _isType.isInteger)(length)) {
    throw new TypeError('popArrayLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 1, array.length)) {
    throw new RangeError('popArrayLast args(length) must be from 0 to array.length');
  }

  return (0, _popArrayLast2._popArrayLast)(array, length);
};

exports.popArrayLast = popArrayLast;
var _default = {
  popArrayLast: popArrayLast
};
exports["default"] = _default;

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.or = exports._or = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

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

exports._or = _or;

var or = function or(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('or args(compareArray) is not array');
  }

  return _or(value, compareArray);
};

exports.or = or;
var _default = {
  _or: _or,
  or: or
};
exports["default"] = _default;

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clone = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(28);

var _isObjectParameter = __webpack_require__(13);

var _clone2 = __webpack_require__(4);

var _cloneFunc = __webpack_require__(27);

/**
 * clone
 */
var clone = function clone(source, cloneFuncArray) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!((0, _type.isUndefined)(cloneFuncArray) || (0, _type.isArray)(cloneFuncArray))) {
    throw new TypeError('clone args(cloneFuncArray) is not array');
  }

  return (0, _clone2._clone)(source, cloneFuncArray);
};

exports.clone = clone;
clone.func = _cloneFunc.__cloneFunc;
var _default = {
  clone: clone
};
exports["default"] = _default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(28);

var _isObjectParameter = __webpack_require__(13);

var _cloneDeep2 = __webpack_require__(25);

var _cloneFunc = __webpack_require__(27);

var cloneDeep = function cloneDeep(source, cloneFuncArray) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? cloneDeep.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!((0, _type.isUndefined)(cloneFuncArray) || (0, _type.isArray)(cloneFuncArray))) {
    throw new TypeError('cloneDeep args(cloneFuncArray) is not array');
  }

  return (0, _cloneDeep2._cloneDeep)(source, cloneFuncArray);
};

exports.cloneDeep = cloneDeep;
cloneDeep.func = _cloneFunc.__cloneFunc;
var _default = {
  cloneDeep: cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._merge = void 0;

var _isType = __webpack_require__(6);

var _loop = __webpack_require__(33);

var _objectEntries2 = __webpack_require__(49);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * merge
 */
var _merge = function _merge(dataArray) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
  var target = arguments.length > 2 ? arguments[2] : undefined;

  if (dataArray.length === 0) {
    return target;
  }

  if ((0, _isType.isUndefined)(target)) {
    target = (0, _isType.isObjectFromNull)(dataArray[0]) ? Object.create(null) : new dataArray[0].constructor();
  }

  (0, _loop.__loop)(dataArray)(function (data) {
    (0, _loop.__loop)((0, _objectEntries2._objectEntries)(data))(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      target[key] = func(value, target[key], key, data, target);
    });
  });
  return target;
};

exports._merge = _merge;
var _default = {
  _merge: _merge
};
exports["default"] = _default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.merge = void 0;

var _isType = __webpack_require__(6);

var _isTypeArray = __webpack_require__(22);

var _isObjectParameter = __webpack_require__(13);

var _returnValueFunction = __webpack_require__(24);

var _merge2 = __webpack_require__(105);

/**
 * merge
 */
var merge = function merge(dataArray) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var target = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(dataArray, 'dataArray, func', 'target')) {
    var _dataArray = dataArray;
    dataArray = _dataArray.dataArray;
    var _dataArray$func = _dataArray.func;
    func = _dataArray$func === void 0 ? _returnValueFunction.__returnValueFunction : _dataArray$func;
    target = _dataArray.target;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func', 'target')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    target = _func.target;
  } else if ((0, _isObjectParameter.isObjectParameter)(target, 'target')) {
    var _target = target;
    target = _target.target;
  }

  if (!(0, _isType.isArray)(dataArray)) {
    throw new TypeError('merge args(dataArray) is not array');
  }

  if (!(dataArray.length === 0 || (0, _isTypeArray.isObjectLikeArray)(dataArray) || (0, _isTypeArray.isArraySeriesArray)(dataArray))) {
    throw new TypeError('merge args(dataArray) element is not [ObjectLike|ArraySeries]');
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError('merge args(func) is not function');
  }

  if (!((0, _isType.isUndefined)(target) || (0, _isType.isObjectLike)(target) || (0, _isType.isArraySeries)(target))) {
    throw new TypeError('merge args(target) is not [undefined|ObjectLike|ArraySeries]');
  }

  return (0, _merge2._merge)(dataArray, func, target);
};

exports.merge = merge;
var _default = {
  merge: merge
};
exports["default"] = _default;

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports.equal = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = exports.allMatchAll = exports.indexOfMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.allMatchSome = exports.indexOfMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.allMatch = exports.indexOfMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports._equalDeep = exports._equal = exports._includesAll = exports._includesSome = exports._includes = exports._someMatchAll = exports._allMatchAll = exports._indexOfMatchAll = exports._matchAllValue = exports._matchAll = exports._someMatchSome = exports._allMatchSome = exports._indexOfMatchSome = exports._matchSomeValue = exports._matchSome = exports._someMatch = exports._allMatch = exports._indexOfMatch = exports._initialValue = exports._matchValue = exports._match = exports._or = void 0;

var _or2 = _interopRequireDefault(__webpack_require__(89));

var _match2 = _interopRequireDefault(__webpack_require__(76));

var _matchValue2 = _interopRequireDefault(__webpack_require__(132));

var _initialValue2 = _interopRequireDefault(__webpack_require__(133));

var _indexOfMatch2 = _interopRequireDefault(__webpack_require__(136));

var _allMatch2 = _interopRequireDefault(__webpack_require__(137));

var _someMatch2 = _interopRequireDefault(__webpack_require__(138));

var _matchSome2 = _interopRequireDefault(__webpack_require__(135));

var _matchSomeValue2 = _interopRequireDefault(__webpack_require__(134));

var _indexOfMatchSome2 = _interopRequireDefault(__webpack_require__(139));

var _allMatchSome2 = _interopRequireDefault(__webpack_require__(140));

var _someMatchSome2 = _interopRequireDefault(__webpack_require__(141));

var _matchAll2 = _interopRequireDefault(__webpack_require__(75));

var _matchAllValue2 = _interopRequireDefault(__webpack_require__(142));

var _indexOfMatchAll2 = _interopRequireDefault(__webpack_require__(143));

var _allMatchAll2 = _interopRequireDefault(__webpack_require__(74));

var _someMatchAll2 = _interopRequireDefault(__webpack_require__(144));

var _includes2 = _interopRequireDefault(__webpack_require__(145));

var _includes_common = _interopRequireDefault(__webpack_require__(146));

var _equal2 = _interopRequireDefault(__webpack_require__(147));

var _equalDeep2 = _interopRequireDefault(__webpack_require__(148));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compareJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _or2["default"]), _match2["default"]), _matchValue2["default"]), _initialValue2["default"]), _indexOfMatch2["default"]), _allMatch2["default"]), _someMatch2["default"]), _matchSome2["default"]), _matchSomeValue2["default"]), _indexOfMatchSome2["default"]), _allMatchSome2["default"]), _someMatchSome2["default"]), _matchAll2["default"]), _matchAllValue2["default"]), _indexOfMatchAll2["default"]), _allMatchAll2["default"]), _someMatchAll2["default"]), _includes2["default"]), _includes_common["default"]), _equal2["default"]), _equalDeep2["default"]);

var _or = compareJs._or,
    _match = compareJs._match,
    _matchValue = compareJs._matchValue,
    _initialValue = compareJs._initialValue,
    _indexOfMatch = compareJs._indexOfMatch,
    _allMatch = compareJs._allMatch,
    _someMatch = compareJs._someMatch,
    _matchSome = compareJs._matchSome,
    _matchSomeValue = compareJs._matchSomeValue,
    _indexOfMatchSome = compareJs._indexOfMatchSome,
    _allMatchSome = compareJs._allMatchSome,
    _someMatchSome = compareJs._someMatchSome,
    _matchAll = compareJs._matchAll,
    _matchAllValue = compareJs._matchAllValue,
    _indexOfMatchAll = compareJs._indexOfMatchAll,
    _allMatchAll = compareJs._allMatchAll,
    _someMatchAll = compareJs._someMatchAll,
    _includes = compareJs._includes,
    _includesSome = compareJs._includesSome,
    _includesAll = compareJs._includesAll,
    _equal = compareJs._equal,
    _equalDeep = compareJs._equalDeep;
exports._equalDeep = _equalDeep;
exports._equal = _equal;
exports._includesAll = _includesAll;
exports._includesSome = _includesSome;
exports._includes = _includes;
exports._someMatchAll = _someMatchAll;
exports._allMatchAll = _allMatchAll;
exports._indexOfMatchAll = _indexOfMatchAll;
exports._matchAllValue = _matchAllValue;
exports._matchAll = _matchAll;
exports._someMatchSome = _someMatchSome;
exports._allMatchSome = _allMatchSome;
exports._indexOfMatchSome = _indexOfMatchSome;
exports._matchSomeValue = _matchSomeValue;
exports._matchSome = _matchSome;
exports._someMatch = _someMatch;
exports._allMatch = _allMatch;
exports._indexOfMatch = _indexOfMatch;
exports._initialValue = _initialValue;
exports._matchValue = _matchValue;
exports._match = _match;
exports._or = _or;
var or = compareJs.or,
    match = compareJs.match,
    matchValue = compareJs.matchValue,
    initialValue = compareJs.initialValue,
    indexOfMatch = compareJs.indexOfMatch,
    allMatch = compareJs.allMatch,
    someMatch = compareJs.someMatch,
    matchSome = compareJs.matchSome,
    matchSomeValue = compareJs.matchSomeValue,
    indexOfMatchSome = compareJs.indexOfMatchSome,
    allMatchSome = compareJs.allMatchSome,
    someMatchSome = compareJs.someMatchSome,
    matchAll = compareJs.matchAll,
    matchAllValue = compareJs.matchAllValue,
    indexOfMatchAll = compareJs.indexOfMatchAll,
    allMatchAll = compareJs.allMatchAll,
    someMatchAll = compareJs.someMatchAll,
    includes = compareJs.includes,
    includesSome = compareJs.includesSome,
    includesAll = compareJs.includesAll,
    equal = compareJs.equal,
    equalDeep = compareJs.equalDeep;
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports.includes = includes;
exports.someMatchAll = someMatchAll;
exports.allMatchAll = allMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports.matchAllValue = matchAllValue;
exports.matchAll = matchAll;
exports.someMatchSome = someMatchSome;
exports.allMatchSome = allMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports.matchSomeValue = matchSomeValue;
exports.matchSome = matchSome;
exports.someMatch = someMatch;
exports.allMatch = allMatch;
exports.indexOfMatch = indexOfMatch;
exports.initialValue = initialValue;
exports.matchValue = matchValue;
exports.match = match;
exports.or = or;
var _default = {
  _or: _or,
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _indexOfMatch: _indexOfMatch,
  _allMatch: _allMatch,
  _someMatch: _someMatch,
  _matchSome: _matchSome,
  _matchSomeValue: _matchSomeValue,
  _indexOfMatchSome: _indexOfMatchSome,
  _allMatchSome: _allMatchSome,
  _someMatchSome: _someMatchSome,
  _matchAll: _matchAll,
  _matchAllValue: _matchAllValue,
  _indexOfMatchAll: _indexOfMatchAll,
  _allMatchAll: _allMatchAll,
  _someMatchAll: _someMatchAll,
  _includes: _includes,
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  _equal: _equal,
  _equalDeep: _equalDeep,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  indexOfMatch: indexOfMatch,
  allMatch: allMatch,
  someMatch: someMatch,
  matchSome: matchSome,
  matchSomeValue: matchSomeValue,
  indexOfMatchSome: indexOfMatchSome,
  allMatchSome: allMatchSome,
  someMatchSome: someMatchSome,
  matchAll: matchAll,
  matchAllValue: matchAllValue,
  indexOfMatchAll: indexOfMatchAll,
  allMatchAll: allMatchAll,
  someMatchAll: someMatchAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll,
  equal: equal,
  equalDeep: equalDeep
};
exports["default"] = _default;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchValue = exports._matchValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _match3 = __webpack_require__(76);

/**
 * matchValue
 */
var _matchValue = function _matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _match3._match)(value, compare)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchValue = _matchValue;

var matchValue = function matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare, match', 'unmatch')) {
    var _compare = compare;
    compare = _compare.compare;
    match = _compare.match;
    var _compare$unmatch = _compare.unmatch;
    unmatch = _compare$unmatch === void 0 ? value : _compare$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match2 = match;
    match = _match2.match;
    var _match2$unmatch = _match2.unmatch;
    unmatch = _match2$unmatch === void 0 ? value : _match2$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  return _matchValue(value, compare, match, unmatch);
};

exports.matchValue = matchValue;
var _default = {
  _matchValue: _matchValue,
  matchValue: matchValue
};
exports["default"] = _default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialValue = exports._initialValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _matchSomeValue2 = __webpack_require__(134);

/**
 * initialValue
 */
var _initialValue = function _initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];
  return (0, _matchSomeValue2._matchSomeValue)(value, compareArray, match);
};

exports._initialValue = _initialValue;

var initialValue = function initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, match', 'compareArray')) {
    var _value = value;
    value = _value.value;
    match = _value.match;
    var _value$compareArray = _value.compareArray;
    compareArray = _value$compareArray === void 0 ? [undefined] : _value$compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'compareArray')) {
    var _match = match;
    match = _match.match;
    var _match$compareArray = _match.compareArray;
    compareArray = _match$compareArray === void 0 ? [undefined] : _match$compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('initialValue args(compareArray) is not array');
  }

  return _initialValue(value, match, compareArray);
};

exports.initialValue = initialValue;
var _default = {
  _initialValue: _initialValue,
  initialValue: initialValue
};
exports["default"] = _default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSomeValue = exports._matchSomeValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _matchSome2 = __webpack_require__(135);

/**
 * matchSomeValue
 */
var _matchSomeValue = function _matchSomeValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _matchSome2._matchSome)(value, compareArray)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchSomeValue = _matchSomeValue;

var matchSomeValue = function matchSomeValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray, match', 'unmatch')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
    match = _compareArray.match;
    var _compareArray$unmatch = _compareArray.unmatch;
    unmatch = _compareArray$unmatch === void 0 ? value : _compareArray$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match = match;
    match = _match.match;
    var _match$unmatch = _match.unmatch;
    unmatch = _match$unmatch === void 0 ? value : _match$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchSomeValue args(compareArray) is not array');
  }

  return _matchSomeValue(value, compareArray, match, unmatch);
};

exports.matchSomeValue = matchSomeValue;
var _default = {
  _matchSomeValue: _matchSomeValue,
  matchSomeValue: matchSomeValue
};
exports["default"] = _default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSome = exports._matchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _match2 = __webpack_require__(76);

/**
 * matchSome
 */
var _matchSome = function _matchSome(value, compareArray) {
  return (0, _array_common._some)(compareArray, function (compare) {
    return (0, _match2._match)(value, compare);
  });
};

exports._matchSome = _matchSome;

var matchSome = function matchSome(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
};

exports.matchSome = matchSome;
var _default = {
  _matchSome: _matchSome,
  matchSome: matchSome
};
exports["default"] = _default;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatch = exports._indexOfMatch = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _match2 = __webpack_require__(76);

/**
 * indexOfMatch
 */
var _indexOfMatch = function _indexOfMatch(valueArray, compare) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _match2._match)(value, compare);
  });
};

exports._indexOfMatch = _indexOfMatch;

var indexOfMatch = function indexOfMatch(valueArray, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatch args(valueArray) is not array');
  }

  return _indexOfMatch(valueArray, compare);
};

exports.indexOfMatch = indexOfMatch;
var _default = {
  _indexOfMatch: _indexOfMatch,
  indexOfMatch: indexOfMatch
};
exports["default"] = _default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatch = exports._allMatch = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _match2 = __webpack_require__(76);

/**
 * allMatch
 */
var _allMatch = function _allMatch(valueArray, compare) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _match2._match)(value, compare);
  });
};

exports._allMatch = _allMatch;

var allMatch = function allMatch(valueArray, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatch args(valueArray) is not array');
  }

  return _allMatch(valueArray, compare);
};

exports.allMatch = allMatch;
var _default = {
  _allMatch: _allMatch,
  allMatch: allMatch
};
exports["default"] = _default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatch = exports._someMatch = void 0;

var _indexOfMatch2 = __webpack_require__(136);

/**
 * someMatch
 */
var _someMatch = function _someMatch(valueArray, compare) {
  return (0, _indexOfMatch2._indexOfMatch)(valueArray, compare) !== -1;
};

exports._someMatch = _someMatch;

var someMatch = function someMatch(valueArray, compare) {
  return (0, _indexOfMatch2.indexOfMatch)(valueArray, compare) !== -1;
};

exports.someMatch = someMatch;
var _default = {
  _someMatch: _someMatch,
  someMatch: someMatch
};
exports["default"] = _default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchSome = exports._indexOfMatchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _matchSome2 = __webpack_require__(135);

/**
 * indexOfMatchSome
 */
var _indexOfMatchSome = function _indexOfMatchSome(valueArray, compareArray) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _matchSome2._matchSome)(value, compareArray);
  });
};

exports._indexOfMatchSome = _indexOfMatchSome;

var indexOfMatchSome = function indexOfMatchSome(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatchSome args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('indexOfMatchSome args(compareArray) is not array');
  }

  return _indexOfMatchSome(valueArray, compareArray);
};

exports.indexOfMatchSome = indexOfMatchSome;
var _default = {
  _indexOfMatchSome: _indexOfMatchSome,
  indexOfMatchSome: indexOfMatchSome
};
exports["default"] = _default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchSome = exports._allMatchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _matchSome2 = __webpack_require__(135);

/**
 * allMatchSome
 */
var _allMatchSome = function _allMatchSome(valueArray, compareArray) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _matchSome2._matchSome)(value, compareArray);
  });
};

exports._allMatchSome = _allMatchSome;

var allMatchSome = function allMatchSome(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatchSome args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('allMatchSome args(compareArray) is not array');
  }

  return _allMatchSome(valueArray, compareArray);
};

exports.allMatchSome = allMatchSome;
var _default = {
  _allMatchSome: _allMatchSome,
  allMatchSome: allMatchSome
};
exports["default"] = _default;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchSome = exports._someMatchSome = void 0;

var _indexOfMatchSome2 = __webpack_require__(139);

/**
 * someMatchSome
 */
var _someMatchSome = function _someMatchSome(valueArray, compareArray) {
  return (0, _indexOfMatchSome2._indexOfMatchSome)(valueArray, compareArray) !== -1;
};

exports._someMatchSome = _someMatchSome;

var someMatchSome = function someMatchSome(valueArray, compareArray) {
  return (0, _indexOfMatchSome2.indexOfMatchSome)(valueArray, compareArray) !== -1;
};

exports.someMatchSome = someMatchSome;
var _default = {
  _someMatchSome: _someMatchSome,
  someMatchSome: someMatchSome
};
exports["default"] = _default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAllValue = exports._matchAllValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _matchAll2 = __webpack_require__(75);

/**
 * matchAllValue
 */
var _matchAllValue = function _matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _matchAll2._matchAll)(value, compareArray)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchAllValue = _matchAllValue;

var matchAllValue = function matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray, match', 'unmatch')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
    match = _compareArray.match;
    var _compareArray$unmatch = _compareArray.unmatch;
    unmatch = _compareArray$unmatch === void 0 ? value : _compareArray$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match = match;
    match = _match.match;
    var _match$unmatch = _match.unmatch;
    unmatch = _match$unmatch === void 0 ? value : _match$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, match, unmatch);
};

exports.matchAllValue = matchAllValue;
var _default = {
  _matchAllValue: _matchAllValue,
  matchAllValue: matchAllValue
};
exports["default"] = _default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchAll = exports._indexOfMatchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _matchAll2 = __webpack_require__(75);

/**
 * indexOfMatchAll
 */
var _indexOfMatchAll = function _indexOfMatchAll(valueArray, compareArray) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _matchAll2._matchAll)(value, compareArray);
  });
};

exports._indexOfMatchAll = _indexOfMatchAll;

var indexOfMatchAll = function indexOfMatchAll(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatchAll args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('indexOfMatchAll args(compareArray) is not array');
  }

  return _indexOfMatchAll(valueArray, compareArray);
};

exports.indexOfMatchAll = indexOfMatchAll;
var _default = {
  _indexOfMatchAll: _indexOfMatchAll,
  indexOfMatchAll: indexOfMatchAll
};
exports["default"] = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchAll = exports._someMatchAll = void 0;

var _indexOfMatchAll2 = __webpack_require__(143);

/**
 * someMatchAll
 */
var _someMatchAll = function _someMatchAll(valueArray, compareArray) {
  return (0, _indexOfMatchAll2._indexOfMatchAll)(valueArray, compareArray) !== -1;
};

exports._someMatchAll = _someMatchAll;

var someMatchAll = function someMatchAll(valueArray, compareArray) {
  return (0, _indexOfMatchAll2.indexOfMatchAll)(valueArray, compareArray) !== -1;
};

exports.someMatchAll = someMatchAll;
var _default = {
  _someMatchAll: _someMatchAll,
  someMatchAll: someMatchAll
};
exports["default"] = _default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includes = exports._includes = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _match2 = __webpack_require__(76);

var _includes2 = __webpack_require__(11);

/**
 * includes
 */
var _includes = function _includes(value, compare) {
  if ((0, _type.isString)(value)) {
    if (compare === '') {
      return false;
    }

    if ((0, _type.isRegExp)(compare)) {
      return (0, _match2._match)(value, compare);
    }

    return (0, _includes2.__includes)(value, compare);
  } else if ((0, _type.isArray)(value)) {
    return (0, _includes2.__includes)(value, compare);
  }
};

exports._includes = _includes;

var includes = function includes(value, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  if ((0, _type.isString)(value)) {
    if (!((0, _type.isString)(compare) || (0, _type.isRegExp)(compare))) {
      throw new TypeError('includes args(compare) is not [string|RegExp]');
    }
  } else if ((0, _type.isArray)(value)) {//
  } else {
    throw new TypeError('includes args(value) is not [string|array]');
  }

  return _includes(value, compare);
};

exports.includes = includes;
var _default = {
  _includes: _includes,
  includes: includes
};
exports["default"] = _default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includesAll = exports._includesAll = exports.includesSome = exports._includesSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(38);

var _match2 = __webpack_require__(76);

var _includes2 = __webpack_require__(145);

/**
 * includesSome
 */
var _includesSome = function _includesSome(value, compareArray) {
  return (0, _array_common._some)(compareArray, function (compare) {
    return (0, _includes2.includes)(value, compare);
  });
};

exports._includesSome = _includesSome;

var includesSome = function includesSome(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('includesSome args(compareArray) is not array');
  }

  return _includesSome(value, compareArray);
};
/**
 * includesAll
 */


exports.includesSome = includesSome;

var _includesAll = function _includesAll(value, compareArray) {
  return (0, _array_common._all)(compareArray, function (compare) {
    return (0, _includes2.includes)(value, compare);
  });
};

exports._includesAll = _includesAll;

var includesAll = function includesAll(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

exports.includesAll = includesAll;
var _default = {
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includesSome: includesSome,
  includesAll: includesAll
};
exports["default"] = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equal = exports._equal = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(28);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * equal
 */
var _equal = function _equal(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equal.func.defaultArray;

  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = equalFuncArray.length; i < l; i += 1) {
      var result = equalFuncArray[i](value1, value2);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equal(value1, value2);
};

exports._equal = _equal;

var equal = function equal(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equal.func.defaultArray;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFuncArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFuncArray = _value.equalFuncArray;
    equalFuncArray = _value$equalFuncArray === void 0 ? equal.func.defaultArray : _value$equalFuncArray;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFuncArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFuncArra = _value2.equalFuncArray;
    equalFuncArray = _value2$equalFuncArra === void 0 ? equal.func.defaultArray : _value2$equalFuncArra;
  } else if ((0, _object.isObjectParameter)(equalFuncArray, 'equalFuncArray')) {
    var _equalFuncArray = equalFuncArray;
    equalFuncArray = _equalFuncArray.equalFuncArray;
  }

  if (!(0, _type.isFunctionArray)(equalFuncArray)) {
    throw new TypeError('equal args(equalFuncArray) is not function array');
  }

  return _equal(value1, value2, equalFuncArray);
};
/**
 * equal.func
 */


exports.equal = equal;
equal.func = {};

equal.func.value = function (value1, value2) {
  if ((0, _type.isNaNStrict)(value1) && (0, _type.isNaNStrict)(value2)) {
    return true;
  }

  return value1 === value2;
}; // function is no recursive call


equal.func["function"] = function (value1, value2) {
  if (!(0, _type.isFunctionAll)(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equal.func.object = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isObjectAll)(value1, value2)) {
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

equal.func.arraySeries = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isArraySeriesAll)(value1, value2)) {
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

equal.func.date = function (value1, value2) {
  if (!(0, _type.isDateAll)(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equal.func.regExp = function (value1, value2) {
  if (!(0, _type.isRegExpAll)(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equal.func.map = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isMapAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);
  var value1Entries = [];
  value1.forEach(function (value, key) {
    value1Entries.push([key, value]);
  });

  for (var _i = 0, _value1Entries = value1Entries; _i < _value1Entries.length; _i++) {
    var _value1Entries$_i = _slicedToArray(_value1Entries[_i], 2),
        key = _value1Entries$_i[0],
        value = _value1Entries$_i[1];

    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  } // IE11 no support map.keys map.entries


  return true;
};

equal.func.weakMap = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isWeakMapAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);
  var value1Entries = [];
  value1.forEach(function (value, key) {
    value1Entries.push([key, value]);
  });

  for (var _i2 = 0, _value1Entries2 = value1Entries; _i2 < _value1Entries2.length; _i2++) {
    var _value1Entries2$_i = _slicedToArray(_value1Entries2[_i2], 2),
        key = _value1Entries2$_i[0],
        value = _value1Entries2$_i[1];

    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  } // IE11 no support weakmap.keys weakmap.entries


  return true;
};

equal.func.set = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isSetAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);
  var value1Entries = [];
  value1.forEach(function (value, key) {
    value1Entries.push([key, value]);
  });
  var value2Entries = [];
  value2.forEach(function (value, key) {
    value2Entries.push([key, value]);
  });

  for (var _i3 = 0, _value1Entries3 = value1Entries; _i3 < _value1Entries3.length; _i3++) {
    var _value1Entries3$_i = _slicedToArray(_value1Entries3[_i3], 2),
        key = _value1Entries3$_i[0],
        v1item = _value1Entries3$_i[1];

    var result = false;

    var _iterator = _createForOfIteratorHelper(value2Entries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            _key = _step$value[0],
            v2item = _step$value[1];

        if (__equalDeep(v1item, v2item) === true) {
          result = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (result === false) {
      return false;
    }
  } // IE11 no support set.keys set.entries


  return true;
};

equal.func.weakSet = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isWeakSetAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator2 = _createForOfIteratorHelper(value1),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var v1item = _step2.value;
      var result = false;

      var _iterator3 = _createForOfIteratorHelper(value2),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var v2item = _step3.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (result === false) {
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

equal.func.defaultArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.map, equal.func.weakMap, equal.func.set, equal.func.weakSet, equal.func.arraySeries, equal.func.object, equal.func.value];
var _default = {
  _equal: _equal,
  equal: equal
};
exports["default"] = _default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(28);

var _equal = __webpack_require__(147);

/**
 * equalDeep
 */
var _equalDeep = function _equalDeep(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equal.equal.func.defaultArray;
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

    for (var i = 0, l = equalFuncArray.length; i < l; i += 1) {
      var result = equalFuncArray[i](value1, value2, function (v1, v2) {
        CircularReferenceBuffer.v1Array.push(v1);
        CircularReferenceBuffer.v2Array.push(v2);
      }, __equalDeep);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equalDeep(value1, value2);
};

exports._equalDeep = _equalDeep;

var equalDeep = function equalDeep(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equal.equal.func.defaultArray;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFuncArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFuncArray = _value.equalFuncArray;
    equalFuncArray = _value$equalFuncArray === void 0 ? _equal.equal.func.defaultArray : _value$equalFuncArray;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFuncArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFuncArra = _value2.equalFuncArray;
    equalFuncArray = _value2$equalFuncArra === void 0 ? _equal.equal.func.defaultArray : _value2$equalFuncArra;
  } else if ((0, _object.isObjectParameter)(equalFuncArray, 'equalFuncArray')) {
    var _equalFuncArray = equalFuncArray;
    equalFuncArray = _equalFuncArray.equalFuncArray;
  }

  return _equalDeep(value1, value2, equalFuncArray);
};

exports.equalDeep = equalDeep;
var _default = {
  _equalDeep: _equalDeep,
  equalDeep: equalDeep
};
exports["default"] = _default;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports._stringToIntegerDefault = exports.stringToInteger = exports._stringToInteger = exports.stringToNumberDefault = exports._stringToNumberDefault = exports.stringToNumber = exports._stringToNumber = exports.valueToString = exports.numberToString = exports._numberToString = void 0;

var _type = __webpack_require__(5);

var _matchValue2 = __webpack_require__(132);

var _initialValue2 = __webpack_require__(133);

var _string = __webpack_require__(109);

var _isObjectParameter = __webpack_require__(13);

var _number = __webpack_require__(37);

/**
 * numberToString
 */
var _numberToString = function _numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return value.toString(radix);
};

exports._numberToString = _numberToString;

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value = value;
    value = _value.value;
    var _value$radix = _value.radix;
    radix = _value$radix === void 0 ? 10 : _value$radix;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  return _numberToString(value, radix);
};
/**
 * valueToString
 */


exports.numberToString = numberToString;

var valueToString = function valueToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value2 = value;
    value = _value2.value;
    var _value2$radix = _value2.radix;
    radix = _value2$radix === void 0 ? 10 : _value2$radix;
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  if (!(0, _type.isNumber)(value)) {
    return String(value);
  }

  return _numberToString(value, radix);
};
/**
 * stringToNumber
 */


exports.valueToString = valueToString;

var _stringToNumberBase = function _stringToNumberBase(value, defaultValueFunc) {
  if (value === '') {
    return defaultValueFunc();
  }

  if (!(0, _string._matchFormat)('float_more', value)) {
    return defaultValueFunc();
  }

  var result = Number(value);

  if (!(0, _type.isNumber)(result)) {
    return defaultValueFunc();
  }

  return result;
};

var _stringToNumber = function _stringToNumber(value) {
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToNumber args(value) is not changeing number');
  });
};

exports._stringToNumber = _stringToNumber;

var stringToNumber = function stringToNumber(value) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value')) {
    var _value3 = value;
    value = _value3.value;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(value);
};

exports.stringToNumber = stringToNumber;

var _stringToNumberDefault = function _stringToNumberDefault(value, defaultValue) {
  return _stringToNumberBase(value, function () {
    return defaultValue;
  });
};

exports._stringToNumberDefault = _stringToNumberDefault;

var stringToNumberDefault = function stringToNumberDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'defaultValue')) {
    var _value4 = value;
    value = _value4.value;
    defaultValue = _value4.defaultValue;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToNumberDefault args(value) is not string');
  }

  return _stringToNumberDefault(value, defaultValue);
};
/**
 * stringToInteger
 */


exports.stringToNumberDefault = stringToNumberDefault;

var _stringToIntegerBase = function _stringToIntegerBase(value, defaultValueFunc) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (value === '') {
    return defaultValueFunc();
  }

  if (!(0, _string._matchFormat)(String(radix) + '_base_number', value)) {
    return defaultValueFunc();
  }

  var result = parseInt(value, radix);

  if (!(0, _type.isInteger)(result)) {
    return defaultValueFunc();
  }

  return result;
};

var _stringToInteger = function _stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return _stringToIntegerBase(value, function () {
    throw new RangeError('stringToInteger args(value) is not changeing integer');
  }, radix);
};

exports._stringToInteger = _stringToInteger;

var stringToInteger = function stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value5 = value;
    value = _value5.value;
    var _value5$radix = _value5.radix;
    radix = _value5$radix === void 0 ? 10 : _value5$radix;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(value, radix);
};

exports.stringToInteger = stringToInteger;

var _stringToIntegerDefault = function _stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return _stringToIntegerBase(value, function () {
    return defaultValue;
  }, radix);
};

exports._stringToIntegerDefault = _stringToIntegerDefault;

var stringToIntegerDefault = function stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'defaultValue, radix')) {
    var _value6 = value;
    value = _value6.value;
    defaultValue = _value6.defaultValue;
    var _value6$radix = _value6.radix;
    radix = _value6$radix === void 0 ? 10 : _value6$radix;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToIntegerDefault(value, defaultValue, radix);
};
/**
 * valueToNumber
 */


exports.stringToIntegerDefault = stringToIntegerDefault;

var valueToNumber = function valueToNumber(value) {
  if ((0, _type.isNull)(value)) {
    return NaN;
  }

  if ((0, _type.isArray)(value)) {
    return NaN;
  }

  if (!(0, _type.isString)(value)) {
    return Number(value);
  }

  return stringToNumberDefault(value, NaN);
};

exports.valueToNumber = valueToNumber;

var valueToNumberDefault = function valueToNumberDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  } else if ((0, _isObjectParameter.isObjectParameter)(defaultValue, 'defaultValue')) {
    var _defaultValue = defaultValue;
    defaultValue = _defaultValue.defaultValue;
  }

  if ((0, _type.isNaNStrict)(value)) {
    return value;
  }

  var result = valueToNumber(value);

  if ((0, _type.isNaNStrict)(result)) {
    return defaultValue;
  }

  return result;
};
/**
 * valueToInteger
 */


exports.valueToNumberDefault = valueToNumberDefault;

var valueToInteger = function valueToInteger(value) {
  var result = valueToNumber(value);

  if ((0, _type.isNaNStrict)(result)) {
    return NaN;
  }

  return (0, _number._round)(result);
};

exports.valueToInteger = valueToInteger;

var valueToIntegerDefault = function valueToIntegerDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, defaultValue')) {
    var _value8 = value;
    value = _value8.value;
    defaultValue = _value8.defaultValue;
  } else if ((0, _isObjectParameter.isObjectParameter)(defaultValue, 'defaultValue')) {
    var _defaultValue2 = defaultValue;
    defaultValue = _defaultValue2.defaultValue;
  }

  if ((0, _type.isNaNStrict)(value)) {
    return value;
  }

  var result = valueToInteger(value);

  if ((0, _type.isNaNStrict)(result)) {
    return defaultValue;
  }

  return result;
};

exports.valueToIntegerDefault = valueToIntegerDefault;
var _default = {
  _numberToString: _numberToString,
  _stringToNumber: _stringToNumber,
  _stringToNumberDefault: _stringToNumberDefault,
  _stringToInteger: _stringToInteger,
  _stringToIntegerDefault: _stringToIntegerDefault,
  numberToString: numberToString,
  valueToString: valueToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  valueToNumber: valueToNumber,
  valueToNumberDefault: valueToNumberDefault,
  valueToInteger: valueToInteger,
  valueToIntegerDefault: valueToIntegerDefault
};
exports["default"] = _default;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = void 0;

var _convert = __webpack_require__(149);

var numToString = _convert.numberToString;
exports.numToString = numToString;
var valToString = _convert.valueToString;
exports.valToString = valToString;
var strToNumber = _convert.stringToNumber;
exports.strToNumber = strToNumber;
var strToNumberDef = _convert.stringToNumberDefault;
exports.strToNumberDef = strToNumberDef;
var strToInteger = _convert.stringToInteger;
exports.strToInteger = strToInteger;
var strToIntegerDef = _convert.stringToIntegerDefault;
exports.strToIntegerDef = strToIntegerDef;
var valToNumber = _convert.valueToNumber;
exports.valToNumber = valToNumber;
var valToNumberDef = _convert.valueToNumberDefault;
exports.valToNumberDef = valToNumberDef;
var valToInteger = _convert.valueToInteger;
exports.valToInteger = valToInteger;
var valToIntegerDef = _convert.valueToIntegerDefault;
exports.valToIntegerDef = valToIntegerDef;
var numToStr = _convert.numberToString;
exports.numToStr = numToStr;
var valToStr = _convert.valueToString;
exports.valToStr = valToStr;
var strToNum = _convert.stringToNumber;
exports.strToNum = strToNum;
var strToNumDef = _convert.stringToNumberDefault;
exports.strToNumDef = strToNumDef;
var strToInt = _convert.stringToInteger;
exports.strToInt = strToInt;
var strToIntDef = _convert.stringToIntegerDefault;
exports.strToIntDef = strToIntDef;
var valToNum = _convert.valueToNumber;
exports.valToNum = valToNum;
var valToNumDef = _convert.valueToNumberDefault;
exports.valToNumDef = valToNumDef;
var valToInt = _convert.valueToInteger;
exports.valToInt = valToInt;
var valToIntDef = _convert.valueToIntegerDefault;
exports.valToIntDef = valToIntDef;
var _default = {
  numToString: numToString,
  valToString: valToString,
  strToNumber: strToNumber,
  strToNumberDef: strToNumberDef,
  strToInteger: strToInteger,
  strToIntegerDef: strToIntegerDef,
  valToNumber: valToNumber,
  valToNumberDef: valToNumberDef,
  valToInteger: valToInteger,
  valToIntegerDef: valToIntegerDef,
  numToStr: numToStr,
  valToStr: valToStr,
  valToNum: valToNum,
  valToNumDef: valToNumDef,
  valToInt: valToInt,
  valToIntDef: valToIntDef,
  strToNum: strToNum,
  strToNumDef: strToNumDef,
  strToInt: strToInt,
  strToIntDef: strToIntDef
};
exports["default"] = _default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Today = void 0;

var _Today = _interopRequireDefault(__webpack_require__(152));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Today = _Today["default"].Today;
exports.Today = Today;
var _default = {
  Today: Today
};
exports["default"] = _default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Today = void 0;

var Today = function Today() {
  return new Date();
};

exports.Today = Today;
var _default = {
  Today: Today
};
exports["default"] = _default;

/***/ })
]]);