"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dayOfWeekJapaneseShort = void 0;

var _dayOfWeek2 = require("../date/_dayOfWeek.js");

var _dayOfWeekJapaneseShort = function _dayOfWeekJapaneseShort(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, _dayOfWeek2._dayOfWeek.names.JapaneseShort());
};

exports._dayOfWeekJapaneseShort = _dayOfWeekJapaneseShort;
var _default = {
  _dayOfWeekJapaneseShort: _dayOfWeekJapaneseShort
};
exports["default"] = _default;