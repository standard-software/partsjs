"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dayOfWeekEnglishLong = void 0;

var _dayOfWeek2 = require("../date/_dayOfWeek.js");

var _dayOfWeekEnglishLong = function _dayOfWeekEnglishLong(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, _dayOfWeek2._dayOfWeek.names.EnglishLong());
};

exports._dayOfWeekEnglishLong = _dayOfWeekEnglishLong;
var _default = {
  _dayOfWeekEnglishLong: _dayOfWeekEnglishLong
};
exports["default"] = _default;