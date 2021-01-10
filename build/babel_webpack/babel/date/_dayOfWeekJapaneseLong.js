"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dayOfWeekJapaneseLong = void 0;

var _dayOfWeek2 = require("../date/_dayOfWeek.js");

var _dayOfWeekJapaneseLong = function _dayOfWeekJapaneseLong(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, _dayOfWeek2._dayOfWeek.names.JapaneseLong());
};

exports._dayOfWeekJapaneseLong = _dayOfWeekJapaneseLong;
var _default = {
  _dayOfWeekJapaneseLong: _dayOfWeekJapaneseLong
};
exports["default"] = _default;