"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._YearUTC = void 0;

var _Year2 = require("./_Year.js");

/**
 * Year
 */
var _YearUTC = function _YearUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _Year2._Year)(value, sourceDate, null);
};

exports._YearUTC = _YearUTC;
var _default = {
  _YearUTC: _YearUTC
};
exports["default"] = _default;