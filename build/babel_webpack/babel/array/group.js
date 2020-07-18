"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.group = exports._group = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * group
 */
var _group = function _group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
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

var group = function group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? function (v) {
      return v;
    } : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? function (v) {
      return v;
    } : _func$func;
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

  return _group(array, func, detail);
};

exports.group = group;
var _default = {
  _group: _group,
  group: group
};
exports["default"] = _default;