"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dayOfWeekEnglishShort = void 0;

var _dayOfWeek2 = require("../date/_dayOfWeek.js");

var _dayOfWeekEnglishShort = function _dayOfWeekEnglishShort(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, _dayOfWeek2._dayOfWeek.names.EnglishShort());
};

exports._dayOfWeekEnglishShort = _dayOfWeekEnglishShort;
var _default = {
  _dayOfWeekEnglishShort: _dayOfWeekEnglishShort
};
exports["default"] = _default;