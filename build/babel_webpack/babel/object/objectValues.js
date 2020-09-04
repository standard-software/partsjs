"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToValueArray = exports.objectValues = exports._objectValues = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _hasOwn2 = require("../object/_hasOwn.js");

/**
 * objectValues
 */
var _objectValues = function _objectValues(object) {
  var result = [];

  for (var key in object) {
    if ((0, _hasOwn2._hasOwn)(object, key)) {
      result.push(object[key]);
    }
  }

  return result;
};

exports._objectValues = _objectValues;

var objectValues = function objectValues(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('objectValues args(object) is not object');
  }

  return _objectValues(object);
};

exports.objectValues = objectValues;
var objectToValueArray = objectValues;
exports.objectToValueArray = objectToValueArray;
var _default = {
  _objectValues: _objectValues,
  objectValues: objectValues,
  objectToValueArray: objectToValueArray
};
exports["default"] = _default;