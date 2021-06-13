"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._stringToDateUTC = void 0;

var _stringToDateRule2 = require("./__stringToDateRule.js");

var _stringToDate2 = require("./_stringToDate.js");

var _Year2 = require("./_Year.js");

var _stringToDateUTC = function _stringToDateUTC(str, format) {
  var sourceDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _Year2._Year)('this');
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _stringToDateRule.Default();
  return (0, _stringToDate2._stringToDate)(str, format, null, sourceDate, rule);
};

exports._stringToDateUTC = _stringToDateUTC;
_stringToDateUTC.rule = _stringToDate2._stringToDate.rule;
var _default = {
  _stringToDateUTC: _stringToDateUTC
};
exports["default"] = _default;