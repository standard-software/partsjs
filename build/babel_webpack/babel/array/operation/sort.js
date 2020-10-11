"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortLengthDescending = exports.sortLengthAscending = exports.sortNumberDescending = exports.sortNumberAscending = exports.sortLength = exports._sortLength = exports.sortNumber = exports._sortNumber = exports.sort = void 0;

var _type = require("../../type/type.js");

var _or2 = require("../../compare/or.js");

var _isObjectParameter = require("../../object/isObjectParameter.js");

var _objectValues2 = require("../../object/objectValues.js");

var _sort2 = require("../../array/operation/_sort.js");

/**
 * array.operation.sort
 */
var sort = function sort(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sort.order.ascending;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sort.targetFunc.returnValue;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'order, func')) {
    var _array = array;
    array = _array.array;
    var _array$order = _array.order;
    order = _array$order === void 0 ? sort.order.ascending : _array$order;
    var _array$func = _array.func;
    func = _array$func === void 0 ? sort.targetFunc.returnValue : _array$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(order, '', 'order, func')) {
    var _order = order;
    var _order$order = _order.order;
    order = _order$order === void 0 ? sort.order.ascending : _order$order;
    var _order$func = _order.func;
    func = _order$func === void 0 ? sort.targetFunc.returnValue : _order$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? sort.targetFunc.returnValue : _func$func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('sort args(array) is not array');
  }

  if (!(0, _or2._or)(order, (0, _objectValues2._objectValues)(sort.order))) {
    throw new TypeError('sort args(order) is not ["ascending"|"descending"]');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('sort args(func) is not function');
  }

  return (0, _sort2._sort)(array, order, func);
};

exports.sort = sort;
sort.orderFunc = _sort2._sort.orderFunc;
sort.order = _sort2._sort.order;
sort.targetFunc = _sort2._sort.targetFunc;

var _sortNumber = function _sortNumber(array, order) {
  return (0, _sort2._sort)(array, order);
};

exports._sortNumber = _sortNumber;

var sortNumber = function sortNumber(array, order) {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsNumber);
};

exports.sortNumber = sortNumber;

var _sortLength = function _sortLength(array, order) {
  return (0, _sort2._sort)(array, order, sort.targetFunc.returnLength);
};

exports._sortLength = _sortLength;

var sortLength = function sortLength(array, order) {
  return sort(array, order, sort.targetFunc.returnLengthErrorNotHasLength);
};

exports.sortLength = sortLength;

var sortNumberAscending = function sortNumberAscending(array) {
  return sortNumber(array, sort.order.ascending);
};

exports.sortNumberAscending = sortNumberAscending;

var sortNumberDescending = function sortNumberDescending(array) {
  return sortNumber(array, sort.order.descending);
};

exports.sortNumberDescending = sortNumberDescending;

var sortLengthAscending = function sortLengthAscending(array) {
  return sortLength(array, sort.order.ascending);
};

exports.sortLengthAscending = sortLengthAscending;

var sortLengthDescending = function sortLengthDescending(array) {
  return sortLength(array, sort.order.descending);
};

exports.sortLengthDescending = sortLengthDescending;
var _default = {
  _sortNumber: _sortNumber,
  _sortLength: _sortLength,
  sort: sort,
  sortNumber: sortNumber,
  sortLength: sortLength,
  sortNumberAscending: sortNumberAscending,
  sortNumberDescending: sortNumberDescending,
  sortLengthAscending: sortLengthAscending,
  sortLengthDescending: sortLengthDescending
};
exports["default"] = _default;