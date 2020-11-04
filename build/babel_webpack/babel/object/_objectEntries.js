"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._objectEntries = void 0;

var _hasOwn2 = require("../object/_hasOwn.js");

/**
 * objectEntries
 */
var _objectEntries = function _objectEntries(object) {
  var result = [];

  for (var key in object) {
    if ((0, _hasOwn2._hasOwn)(object, key)) {
      result.push([key, object[key]]);
    }
  }

  return result;
};

exports._objectEntries = _objectEntries;
var _default = {
  _objectEntries: _objectEntries
};
exports["default"] = _default;