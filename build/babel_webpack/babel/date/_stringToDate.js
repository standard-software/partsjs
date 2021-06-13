"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._stringToDate = void 0;

var _stringToDateRule2 = require("./__stringToDateRule.js");

var _stringToDate2 = require("./__stringToDate.js");

var _Year2 = require("./_Year.js");

var _stringToDate = function _stringToDate(str, format) {
  var timezoneOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTimezoneOffset();
  var sourceDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _Year2._Year)('this');
  var rule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _stringToDateRule.Default();
  return (0, _stringToDate2.__stringToDate)(str, format, timezoneOffset, sourceDate, rule);
};

exports._stringToDate = _stringToDate;
_stringToDate.rule = _stringToDate2.__stringToDate.rule;
var _default = {
  _stringToDate: _stringToDate
};
exports["default"] = _default;