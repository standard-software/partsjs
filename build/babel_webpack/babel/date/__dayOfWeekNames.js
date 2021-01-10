"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__dayOfWeekNames = void 0;

/**
 * dayOfWeek.names
 */
var __dayOfWeekNames = {};
exports.__dayOfWeekNames = __dayOfWeekNames;

__dayOfWeekNames.EnglishShort = function () {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};

__dayOfWeekNames.EnglishLong = function () {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};

__dayOfWeekNames.JapaneseShort = function () {
  return ['日', '月', '火', '水', '木', '金', '土'];
};

__dayOfWeekNames.JapaneseLong = function () {
  return ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
};

var _default = {
  __dayOfWeekNames: __dayOfWeekNames
};
exports["default"] = _default;