"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._minutesToTexts = void 0;

var _paddingFirst2 = require("../string/_paddingFirst.js");

/**
 * minutesToTexts
 */
var _minutesToTexts = function _minutesToTexts(minutes) {
  var sign = 0 <= minutes ? '+' : '-';
  var hourStr = (0, _paddingFirst2._paddingFirst)(String(Math.floor(Math.abs(minutes / 60))), 2, '0');
  var minStr = (0, _paddingFirst2._paddingFirst)(String(minutes % 60), 2, '0');
  return [sign, hourStr, minStr];
};

exports._minutesToTexts = _minutesToTexts;
var _default = {
  _minutesToTexts: _minutesToTexts
};
exports["default"] = _default;