"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortDictionaryDescending = exports.sortDictionaryAscending = exports.sortLengthDescending = exports.sortLengthAscending = exports.sortNumberDescending = exports.sortNumberAscending = exports.sortDictionary = exports._sortDictionary = exports.sortLength = exports._sortLength = exports.sortNumber = exports._sortNumber = exports.sort = exports._sort = void 0;

var _type = require("../../type/type.js");

var _syntax = require("../../syntax/syntax.js");

var _or2 = require("../../compare/or.js");

var _isObjectParameter = require("../../object/isObjectParameter.js");

var _objectValues2 = require("../../object/objectValues.js");

var _Enum2 = require("../../syntax/Enum.js");

/**
 * array.operation.sort
 */
var _sort = function _sort(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sort.order.ascending;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sort.targetFunc.returnValue;
  var orderFunc = (0, _syntax.switch_)(order)([[sort.order.ascending, function () {
    return sort.orderFunc.ascending;
  }], [sort.order.descending, function () {
    return sort.orderFunc.descending;
  }], [function () {
    throw new TypeError('_sort args(order) is not ["ascending"|"descending"]');
  }]]);
  array.sort(function (a, b) {
    return orderFunc(func(a), func(b));
  });
  return array;
};

exports._sort = _sort;

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

  return _sort(array, order, func);
};

exports.sort = sort;
sort.orderFunc = {
  ascending: function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  },
  descending: function descending(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  }
};
sort.order = (0, _Enum2._Enum)(['ascending', 'descending']);
sort.targetFunc = {
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

    return v.toLowerCase();
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

var _sortNumber = function _sortNumber(array, order) {
  return _sort(array, order);
};

exports._sortNumber = _sortNumber;

var sortNumber = function sortNumber(array, order) {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsNumber);
};

exports.sortNumber = sortNumber;

var _sortLength = function _sortLength(array, order) {
  return sort(array, order, sort.targetFunc.returnLength);
};

exports._sortLength = _sortLength;

var sortLength = function sortLength(array, order) {
  return sort(array, order, sort.targetFunc.returnLengthErrorNotHasLength);
};

exports.sortLength = sortLength;

var _sortDictionary = function _sortDictionary(array, order) {
  return sort(array, order);
};

exports._sortDictionary = _sortDictionary;

var sortDictionary = function sortDictionary(array, order) {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsString);
};

exports.sortDictionary = sortDictionary;

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

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  return sortDictionary(array, sort.order.ascending);
};

exports.sortDictionaryAscending = sortDictionaryAscending;

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  return sortDictionary(array, sort.order.descending);
};

exports.sortDictionaryDescending = sortDictionaryDescending;
var _default = {
  _sort: _sort,
  _sortNumber: _sortNumber,
  _sortLength: _sortLength,
  _sortDictionary: _sortDictionary,
  sort: sort,
  sortNumber: sortNumber,
  sortLength: sortLength,
  sortDictionary: sortDictionary,
  sortNumberAscending: sortNumberAscending,
  sortNumberDescending: sortNumberDescending,
  sortLengthAscending: sortLengthAscending,
  sortLengthDescending: sortLengthDescending,
  sortDictionaryAscending: sortDictionaryAscending,
  sortDictionaryDescending: sortDictionaryDescending
};
exports["default"] = _default;