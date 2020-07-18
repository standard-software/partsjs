"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortOrderFunction = void 0;

/**
 * sortOrderFunction
 */
var sortOrderFunction = {};
exports.sortOrderFunction = sortOrderFunction;
sortOrderFunction.number = {
  ascending: function ascending(a, b) {
    return a - b;
  },
  descending: function descending(a, b) {
    return b - a;
  }
};
sortOrderFunction.length = {
  ascending: function ascending(a, b) {
    return a.length - b.length;
  },
  descending: function descending(a, b) {
    return b.length - a.length;
  }
};
sortOrderFunction.dictionary = {
  ascending: function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  },
  descending: function descending(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  }
};
var _default = {
  sortOrderFunction: sortOrderFunction
};
exports["default"] = _default;