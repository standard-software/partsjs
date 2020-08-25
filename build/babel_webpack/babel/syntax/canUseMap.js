"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseWeakMap = exports.canUseMap = void 0;

var _type = require("../type/type.js");

/**
 * canUseMap
 */
var _canUseMapFlag;

var canUseMap = function canUseMap() {
  if ((0, _type.isUndefined)(_canUseMapFlag)) {
    try {
      new Map();
      _canUseMapFlag = true;
    } catch (e) {
      _canUseMapFlag = false;
    }
  }

  return _canUseMapFlag;
};

exports.canUseMap = canUseMap;

canUseMap.reset = function () {
  _canUseMapFlag = undefined;
};
/**
 * canUseWeakMap
 */


var _canUseWeakMapFlag;

var canUseWeakMap = function canUseWeakMap() {
  if ((0, _type.isUndefined)(_canUseWeakMapFlag)) {
    try {
      new WeakMap();
      _canUseWeakMapFlag = true;
    } catch (e) {
      _canUseWeakMapFlag = false;
    }
  }

  return _canUseWeakMapFlag;
};

exports.canUseWeakMap = canUseWeakMap;

canUseWeakMap.reset = function () {
  _canUseWeakMapFlag = undefined;
};

var _default = {
  canUseMap: canUseMap,
  canUseWeakMap: canUseWeakMap
};
exports["default"] = _default;