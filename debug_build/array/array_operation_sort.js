"use strict";

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
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = require('../compare/allMatch.js'),
    allMatch = _require2.allMatch;

var _require3 = require('../compare/allMatchSome.js'),
    allMatchSome = _require3.allMatchSome;

var _require4 = require('../compare/compare_common.js'),
    _or = _require4._or;
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

var sort = function sort(array, pattern, order) {
  if (!isArray(array)) {
    throw new TypeError('sortNumberAscending args(array) is not array');
  }

  if (!_or(order, ['ascending', 'descending'])) {
    throw new TypeError('sort args(order) is not [ascending|descending]');
  }

  switch (pattern) {
    case 'number':
      if (!allMatch(array, isNumber)) {
        throw new TypeError('sort number args(array) element is not number');
      }

      break;

    case 'length':
      if (!allMatchSome(array, [isString, function (element) {
        return 'length' in element;
      }])) {
        throw new TypeError('sort length args(array) element does not have length property');
      }

      break;

    case 'dictionary':
      if (!allMatch(array, isString)) {
        throw new TypeError('sort dictionary args(array) element is not string');
      }

      break;

    default:
      throw new TypeError('sort args(pattern) is not [number|length|dictionary]');
  }

  return _sort(array, pattern, order);
};

var _sortNumberAscending = function _sortNumberAscending(array) {
  return _sort(array, 'number', 'ascending');
};

var sortNumberAscending = function sortNumberAscending(array) {
  return sort(array, 'number', 'ascending');
};

var _sortNumberDescending = function _sortNumberDescending(array) {
  return _sort(array, 'number', 'descending');
};

var sortNumberDescending = function sortNumberDescending(array) {
  return sort(array, 'number', 'descending');
};

var _sortLengthAscending = function _sortLengthAscending(array) {
  return _sort(array, 'length', 'ascending');
};

var sortLengthAscending = function sortLengthAscending(array) {
  return sort(array, 'length', 'ascending');
};

var _sortLengthDescending = function _sortLengthDescending(array) {
  return _sort(array, 'length', 'descending');
};

var sortLengthDescending = function sortLengthDescending(array) {
  return sort(array, 'length', 'descending');
};

var _sortDictionaryAscending = function _sortDictionaryAscending(array) {
  return _sort(array, 'dictionary', 'ascending');
};

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  return sort(array, 'dictionary', 'ascending');
};

var _sortDictionaryDescending = function _sortDictionaryDescending(array) {
  return _sort(array, 'dictionary', 'descending');
};

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  return sort(array, 'dictionary', 'descending');
};

module.exports = {
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