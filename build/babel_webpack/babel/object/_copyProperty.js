"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._copyProperty = void 0;

var _type = require("../type/type.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _splitDotItems2 = require("../string/splitDotItems.js");

var _includes = require("../compare/__includes.js");

var _string_common = require("../string/string_common.js");

/**
 * copyProperty
 */
var _copyProperty = function _copyProperty(fromObject, propertyNames) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _type.isString)(propertyNames)) {
    propertyNames = (0, _splitCommaItems2._splitCommaItems)(propertyNames);
  } else {
    if ((0, _includes.__includes)(propertyNames, '')) {
      throw new Error('_copyProperty args(propertyNames) element is not empty string');
    }
  }

  for (var i = 0; i < propertyNames.length; i += 1) {
    toObject[propertyNames[i]] = fromObject[propertyNames[i]];
  }

  return toObject;
};

exports._copyProperty = _copyProperty;
var _default = {
  _copyProperty: _copyProperty
};
exports["default"] = _default;