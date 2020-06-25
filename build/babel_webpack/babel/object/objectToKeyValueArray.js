"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectEntries = exports.objectToKeyValueArray = exports._objectToKeyValueArray = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * objectToKeyValueArray
 */
var _objectToKeyValueArray = function _objectToKeyValueArray(object) {
  var result = [];

  for (var key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push([key, object[key]]);
    }
  }

  return result;
};

exports._objectToKeyValueArray = _objectToKeyValueArray;

var objectToKeyValueArray = function objectToKeyValueArray(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('objectToKeyValueArray args(object) is not object');
  }

  return _objectToKeyValueArray(object);
};

exports.objectToKeyValueArray = objectToKeyValueArray;
var objectEntries = objectToKeyValueArray;
exports.objectEntries = objectEntries;
var _default = {
  _objectToKeyValueArray: _objectToKeyValueArray,
  objectToKeyValueArray: objectToKeyValueArray,
  objectEntries: objectEntries
};
exports["default"] = _default;