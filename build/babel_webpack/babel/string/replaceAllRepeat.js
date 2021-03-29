"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAllRepeat = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _includes = require("../compare/__includes.js");

var _replaceAllRepeat2 = require("../string/_replaceAllRepeat.js");

/**
 * replaceAllRepeat
 */
var replaceAllRepeat = function replaceAllRepeat(str, before, after) {
  var maxCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, before, after', 'maxCount')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
    var _str$maxCount = _str.maxCount;
    maxCount = _str$maxCount === void 0 ? 0 : _str$maxCount;
  } else if ((0, _isObjectParameter.isObjectParameter)(before, 'before, after', 'maxCount')) {
    var _before = before;
    before = _before.before;
    after = _before.after;
    var _before$maxCount = _before.maxCount;
    maxCount = _before$maxCount === void 0 ? 0 : _before$maxCount;
  } else if ((0, _isObjectParameter.isObjectParameter)(after, 'after', 'maxCount')) {
    var _after = after;
    after = _after.after;
    var _after$maxCount = _after.maxCount;
    maxCount = _after$maxCount === void 0 ? 0 : _after$maxCount;
  } else if ((0, _isObjectParameter.isObjectParameter)(maxCount, 'maxCount')) {
    var _maxCount = maxCount;
    maxCount = _maxCount.maxCount;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError("replaceAllRepeat args(str:".concat(str, ") is not string"));
  }

  if (str === '') {
    throw new TypeError('replaceAllRepeat args(str) is empty string');
  }

  if (!(0, _type.isString)(before)) {
    throw new TypeError("replaceAllRepeat args(before:".concat(before, ") is not string"));
  }

  if (before === '') {
    throw new TypeError('replaceAllRepeat args(before) is empty string');
  }

  if (!(0, _type.isString)(after)) {
    throw new TypeError("replaceAllRepeat args(after:".concat(after, ") is not string"));
  }

  if ((0, _includes.__includes)(after, before)) {
    throw new TypeError('replaceAllRepeat args(before) is includes args(after)');
  }

  if (!(0, _type.isInteger)(maxCount)) {
    throw new TypeError('replaceAllRepeat args(maxCount) is not integer');
  }

  if (!(0 <= maxCount)) {
    throw new TypeError('replaceAllRepeat args(maxCount) is not 0 <= maxCount');
  }

  return (0, _replaceAllRepeat2._replaceAllRepeat)(str, before, after, maxCount);
};

exports.replaceAllRepeat = replaceAllRepeat;
var _default = {
  replaceAllRepeat: replaceAllRepeat
};
exports["default"] = _default;