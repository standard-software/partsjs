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