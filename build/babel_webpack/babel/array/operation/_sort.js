"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._sort = void 0;

var _type = require("../../type/type.js");

var _syntax = require("../../syntax/syntax.js");

var _Enum2 = require("../../syntax/_Enum.js");

/**
 * array.operation.sort
 */
var _sort = function _sort(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _sort.order.ascending;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _sort.targetFunc.returnValue;
  var orderFunc = (0, _syntax.switch_)(order)([[_sort.order.ascending, function () {
    return _sort.orderFunc.ascending;
  }], [_sort.order.descending, function () {
    return _sort.orderFunc.descending;
  }], [function () {
    throw new TypeError('_sort args(order) is not ["ascending"|"descending"]');
  }]]);
  array.sort(function (a, b) {
    return orderFunc(func(a), func(b));
  });
  return array;
};

exports._sort = _sort;
_sort.orderFunc = {
  ascending: function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  },
  descending: function descending(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  }
};
_sort.order = (0, _Enum2._Enum)(['ascending', 'descending']);
_sort.targetFunc = {
  returnValue: function returnValue(v) {
    return v;
  },
  returnValueErrorNotIsNumber: function returnValueErrorNotIsNumber(v) {
    if (!(0, _type.isNumber)(v)) {
      throw new TypeError('sortNumber args(array) element is not number');
    }

    return v;
  },
  returnValueErrorNotIsString: function returnValueErrorNotIsString(v) {
    if (!(0, _type.isString)(v)) {
      throw new TypeError('sortDictionary args(array) element is not string');
    }

    return v;
  },
  returnLength: function returnLength(v) {
    return v.length;
  },
  returnLengthErrorNotHasLength: function returnLengthErrorNotHasLength(v) {
    if (!((0, _type.isString)(v) || 'length' in v)) {
      throw new TypeError('sortLength args(array) element must have length property');
    }

    return v.length;
  }
};
var _default = {
  _sort: _sort
};
exports["default"] = _default;