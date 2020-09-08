"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyValueArray = exports.objectEntries = exports._objectEntries = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

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

var objectEntries = function objectEntries(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObjectLike)(object)) {
    throw new TypeError('objectEntries args(object) is not object');
  }

  return _objectEntries(object);
};

exports.objectEntries = objectEntries;
var objectToKeyValueArray = objectEntries;
exports.objectToKeyValueArray = objectToKeyValueArray;
var _default = {
  _objectEntries: _objectEntries,
  objectEntries: objectEntries,
  objectToKeyValueArray: objectToKeyValueArray
};
exports["default"] = _default;