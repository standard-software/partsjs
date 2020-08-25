"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseWeakSet = exports.canUseSet = void 0;

var _type = require("../type/type.js");

/**
 * canUseSet
 */
var _canUseSetFlag;

var canUseSet = function canUseSet() {
  if ((0, _type.isUndefined)(_canUseSetFlag)) {
    try {
      new Set();
      _canUseSetFlag = true;
    } catch (e) {
      _canUseSetFlag = false;
    }
  }

  return _canUseSetFlag;
};

exports.canUseSet = canUseSet;

canUseSet.reset = function () {
  _canUseSetFlag = undefined;
};
/**
 * canUseWeakSet
 */


var _canUseWeakSetFlag;

var canUseWeakSet = function canUseWeakSet() {
  if ((0, _type.isUndefined)(_canUseWeakSetFlag)) {
    try {
      new WeakSet();
      _canUseWeakSetFlag = true;
    } catch (e) {
      _canUseWeakSetFlag = false;
    }
  }

  return _canUseWeakSetFlag;
};

exports.canUseWeakSet = canUseWeakSet;

canUseWeakSet.reset = function () {
  _canUseWeakSetFlag = undefined;
};

var _default = {
  canUseSet: canUseSet,
  canUseWeakSet: canUseWeakSet
};
exports["default"] = _default;