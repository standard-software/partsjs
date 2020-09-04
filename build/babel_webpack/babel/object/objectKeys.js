"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyArray = exports.objectKeys = exports._objectKeys = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _hasOwn2 = require("../object/_hasOwn.js");

/**
 * objectKeys
 */
var _objectKeys = function _objectKeys(object) {
  var result = [];

  for (var key in object) {
    if ((0, _hasOwn2._hasOwn)(object, key)) {
      result.push(key);
    }
  }

  return result;
};

exports._objectKeys = _objectKeys;

var objectKeys = function objectKeys(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('objectKeys args(object) is not object');
  }

  return _objectKeys(object);
};

exports.objectKeys = objectKeys;
var objectToKeyArray = objectKeys;
exports.objectToKeyArray = objectToKeyArray;
var _default = {
  _objectKeys: _objectKeys,
  objectKeys: objectKeys,
  objectToKeyArray: objectToKeyArray
};
exports["default"] = _default;