"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortDictionaryDescending = exports._sortDictionaryDescending = exports.sortDictionaryAscending = exports._sortDictionaryAscending = exports.sortLengthDescending = exports._sortLengthDescending = exports.sortLengthAscending = exports._sortLengthAscending = exports.sortNumberDescending = exports._sortNumberDescending = exports.sortNumberAscending = exports._sortNumberAscending = exports.sort = exports._sort = void 0;

var _type = require("../type/type.js");

var _allMatch = require("../compare/allMatch.js");

var _allMatchSome = require("../compare/allMatchSome.js");

var _compare_common = require("../compare/compare_common.js");

/**
 * array.sort
 */
var _sort = function _sort(array, pattern, order) {
  switch (pattern) {
    case 'number':
      switch (order) {
        case 'ascending':
          return array.sort(function (a, b) {
            return a - b;
          });

        case 'descending':
          return array.sort(function (a, b) {
            return b - a;
          });
      }

      break;

    case 'length':
      switch (order) {
        case 'ascending':
          return array.sort(function (a, b) {
            return a.length - b.length;
          });

        case 'descending':
          return array.sort(function (a, b) {
            return b.length - a.length;
          });
      }

      break;

    case 'dictionary':
      switch (order) {
        case 'ascending':
          return array.sort(function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          });
        // = array.sort();

        case 'descending':
          return array.sort(function (a, b) {
            return a > b ? -1 : a < b ? 1 : 0;
          });
      }

      break;
  }
};

exports._sort = _sort;

var sort = function sort(array, pattern, order) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('sortNumberAscending args(array) is not array');
  }

  if (!(0, _compare_common._or)(order, ['ascending', 'descending'])) {
    throw new TypeError('sort args(order) is not [ascending|descending]');
  }

  switch (pattern) {
    case 'number':
      if (!(0, _allMatch.allMatch)(array, _type.isNumber)) {
        throw new TypeError('sort number args(array) element is not number');
      }

      break;

    case 'length':
      if (!(0, _allMatchSome.allMatchSome)(array, [_type.isString, function (element) {
        return 'length' in element;
      }])) {
        throw new TypeError('sort length args(array) element does not have length property');
      }

      break;

    case 'dictionary':
      if (!(0, _allMatch.allMatch)(array, _type.isString)) {
        throw new TypeError('sort dictionary args(array) element is not string');
      }

      break;

    default:
      throw new TypeError('sort args(pattern) is not [number|length|dictionary]');
  }

  return _sort(array, pattern, order);
};

exports.sort = sort;

var _sortNumberAscending = function _sortNumberAscending(array) {
  return _sort(array, 'number', 'ascending');
};

exports._sortNumberAscending = _sortNumberAscending;

var sortNumberAscending = function sortNumberAscending(array) {
  return sort(array, 'number', 'ascending');
};

exports.sortNumberAscending = sortNumberAscending;

var _sortNumberDescending = function _sortNumberDescending(array) {
  return _sort(array, 'number', 'descending');
};

exports._sortNumberDescending = _sortNumberDescending;

var sortNumberDescending = function sortNumberDescending(array) {
  return sort(array, 'number', 'descending');
};

exports.sortNumberDescending = sortNumberDescending;

var _sortLengthAscending = function _sortLengthAscending(array) {
  return _sort(array, 'length', 'ascending');
};

exports._sortLengthAscending = _sortLengthAscending;

var sortLengthAscending = function sortLengthAscending(array) {
  return sort(array, 'length', 'ascending');
};

exports.sortLengthAscending = sortLengthAscending;

var _sortLengthDescending = function _sortLengthDescending(array) {
  return _sort(array, 'length', 'descending');
};

exports._sortLengthDescending = _sortLengthDescending;

var sortLengthDescending = function sortLengthDescending(array) {
  return sort(array, 'length', 'descending');
};

exports.sortLengthDescending = sortLengthDescending;

var _sortDictionaryAscending = function _sortDictionaryAscending(array) {
  return _sort(array, 'dictionary', 'ascending');
};

exports._sortDictionaryAscending = _sortDictionaryAscending;

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  return sort(array, 'dictionary', 'ascending');
};

exports.sortDictionaryAscending = sortDictionaryAscending;

var _sortDictionaryDescending = function _sortDictionaryDescending(array) {
  return _sort(array, 'dictionary', 'descending');
};

exports._sortDictionaryDescending = _sortDictionaryDescending;

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  return sort(array, 'dictionary', 'descending');
};

exports.sortDictionaryDescending = sortDictionaryDescending;
var _default = {
  _sortNumberAscending: _sortNumberAscending,
  _sortNumberDescending: _sortNumberDescending,
  _sortLengthAscending: _sortLengthAscending,
  _sortLengthDescending: _sortLengthDescending,
  _sortDictionaryAscending: _sortDictionaryAscending,
  _sortDictionaryDescending: _sortDictionaryDescending,
  sortNumberAscending: sortNumberAscending,
  sortNumberDescending: sortNumberDescending,
  sortLengthAscending: sortLengthAscending,
  sortLengthDescending: sortLengthDescending,
  sortDictionaryAscending: sortDictionaryAscending,
  sortDictionaryDescending: sortDictionaryDescending
};
exports["default"] = _default;