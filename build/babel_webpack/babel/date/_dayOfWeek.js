"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dayOfWeek = void 0;

var _dayOfWeekNames = require("../date/__dayOfWeekNames.js");

var _dayOfWeek = function _dayOfWeek(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dayOfWeekNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dayOfWeekNames.__dayOfWeekNames.EnglishShort;

  if (isLocal) {
    return dayOfWeekNames[date.getDay()];
  } else {
    return dayOfWeekNames[date.getUTCDay()];
  }
};

exports._dayOfWeek = _dayOfWeek;
_dayOfWeek.names = _dayOfWeekNames.__dayOfWeekNames;
var _default = {
  _dayOfWeek: _dayOfWeek
};
exports["default"] = _default;