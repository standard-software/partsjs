"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._propertyCount = void 0;

var _hasOwn2 = require("../object/_hasOwn.js");

/**
 * propertyCount
 */
var _propertyCount = function _propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var result = 0;

  if (hasOwn) {
    for (var property in object) {
      if ((0, _hasOwn2._hasOwn)(object, property)) {
        result += 1;
      }
    }
  } else {
    for (var _property in object) {
      result += 1;
    }
  }

  return result;
};

exports._propertyCount = _propertyCount;
var _default = {
  _propertyCount: _propertyCount
};
exports["default"] = _default;