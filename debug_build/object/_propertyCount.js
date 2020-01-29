"use strict";

/**
 * propertyCount
 */
var _propertyCount = function _propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var result = 0;

  if (hasOwn) {
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
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

module.exports = {
  _propertyCount: _propertyCount
};