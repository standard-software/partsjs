"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__dateToStringRule = void 0;

var _type = require("../type/type.js");

var _paddingFirst2 = require("../string/_paddingFirst.js");

var _string_common = require("../string/string_common.js");

var _dayOfWeek2 = require("./_dayOfWeek.js");

var _nameOfMonth2 = require("./_nameOfMonth.js");

var _minutesToTexts6 = require("./_minutesToTexts.js");

var _defaultRule, _momentLikeRule;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var rule = {};

var cloneDate = function cloneDate(date) {
  return new Date(date.getTime());
};

var setDateOffsetMin = function setDateOffsetMin(date, offsetMin) {
  var result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

var year4 = function year4(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCFullYear().toString();
};

var year2 = function year2(date, timezoneOffset) {
  return (0, _string_common._subLast)(year4(date, timezoneOffset), 2);
};

var month1 = function month1(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return (setDateOffsetMin(date, timezoneOffset).getUTCMonth() + 1).toString();
};

var month2 = function month2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(month1(date, timezoneOffset), 2, '0');
};

var date1 = function date1(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCDate().toString();
};

var date2 = function date2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(date1(date, timezoneOffset), 2, '0');
};

var hour12_1 = function hour12_1(date, timezoneOffset) {
  // 0-11
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return (setDateOffsetMin(date, timezoneOffset).getUTCHours() % 12).toString();
};

var hour12_2 = function hour12_2(date, timezoneOffset) {
  // 00-11
  return (0, _paddingFirst2._paddingFirst)(hour12_1(date, timezoneOffset), 2, '0');
};

var hour24_1 = function hour24_1(date, timezoneOffset) {
  // 0-23
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCHours().toString();
};

var hour24_2 = function hour24_2(date, timezoneOffset) {
  // 00-23
  return (0, _paddingFirst2._paddingFirst)(hour24_1(date, timezoneOffset), 2, '0');
};

var minute1 = function minute1(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCMinutes().toString();
};

var minute2 = function minute2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(minute1(date, timezoneOffset), 2, '0');
};

var second1 = function second1(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCSeconds().toString();
};

var second2 = function second2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(second1(date, timezoneOffset), 2, '0');
};

var millisecond3 = function millisecond3(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return (0, _paddingFirst2._paddingFirst)(setDateOffsetMin(date, timezoneOffset).getUTCMilliseconds().toString(), 3, '0');
};

var millisecond2 = function millisecond2(date, timezoneOffset) {
  return (0, _string_common._subFirst)(millisecond3(date, timezoneOffset), 2);
};

var millisecond1 = function millisecond1(date, timezoneOffset) {
  return (0, _string_common._subFirst)(millisecond3(date, timezoneOffset), 1);
};

var am_pm = function am_pm(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'am' : 'pm';
};

var AM_PM = function AM_PM(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'AM' : 'PM';
};

var a_p = function a_p(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'a' : 'p';
};

var A_P = function A_P(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'A' : 'P';
};

var dayOfWeekEnglishShort = function dayOfWeekEnglishShort(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return _dayOfWeek2._dayOfWeek.names.EnglishShort()[setDateOffsetMin(date, timezoneOffset).getUTCDay()];
};

var dayOfWeekEnglishLong = function dayOfWeekEnglishLong(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return _dayOfWeek2._dayOfWeek.names.EnglishLong()[setDateOffsetMin(date, timezoneOffset).getUTCDay()];
};

var nameOfMonthEnglishChar3 = function nameOfMonthEnglishChar3(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return _nameOfMonth2._nameOfMonth.names.EnglishChar3()[setDateOffsetMin(date, timezoneOffset).getUTCMonth()];
};

var nameOfMonthEnglishChar4 = function nameOfMonthEnglishChar4(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return _nameOfMonth2._nameOfMonth.names.EnglishChar4()[setDateOffsetMin(date, timezoneOffset).getUTCMonth()];
};

var nameOfMonthEnglishLong = function nameOfMonthEnglishLong(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    timezoneOffset = 0;
  }

  return _nameOfMonth2._nameOfMonth.names.EnglishLong()[setDateOffsetMin(date, timezoneOffset).getUTCMonth()];
};

var timezoneHHMM = function timezoneHHMM(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    return 'Z';
  }

  var _minutesToTexts2 = (0, _minutesToTexts6._minutesToTexts)(-1 * timezoneOffset),
      _minutesToTexts3 = _slicedToArray(_minutesToTexts2, 3),
      sign = _minutesToTexts3[0],
      hour = _minutesToTexts3[1],
      min = _minutesToTexts3[2];

  return sign + hour + min;
};

var timezoneHH_MM = function timezoneHH_MM(date, timezoneOffset) {
  if ((0, _type.isNull)(timezoneOffset)) {
    return 'Z';
  }

  var _minutesToTexts4 = (0, _minutesToTexts6._minutesToTexts)(-1 * timezoneOffset),
      _minutesToTexts5 = _slicedToArray(_minutesToTexts4, 3),
      sign = _minutesToTexts5[0],
      hour = _minutesToTexts5[1],
      min = _minutesToTexts5[2];

  return sign + hour + ':' + min;
};

var __dateToStringRule = {
  year4: year4,
  year2: year2,
  month2: month2,
  month1: month1,
  date2: date2,
  date1: date1,
  hour12_2: hour12_2,
  hour12_1: hour12_1,
  hour24_2: hour24_2,
  hour24_1: hour24_1,
  minute2: minute2,
  minute1: minute1,
  second2: second2,
  second1: second1,
  millisecond3: millisecond3,
  millisecond2: millisecond2,
  millisecond1: millisecond1,
  am_pm: am_pm,
  AM_PM: AM_PM,
  a_p: a_p,
  A_P: A_P,
  dayOfWeekEnglishShort: dayOfWeekEnglishShort,
  dayOfWeekEnglishLong: dayOfWeekEnglishLong,
  nameOfMonthEnglishChar3: nameOfMonthEnglishChar3,
  nameOfMonthEnglishChar4: nameOfMonthEnglishChar4,
  nameOfMonthEnglishLong: nameOfMonthEnglishLong,
  timezoneHH_MM: timezoneHH_MM,
  timezoneHHMM: timezoneHHMM
};
exports.__dateToStringRule = __dateToStringRule;
var r = __dateToStringRule;
var defaultRule = (_defaultRule = {}, _defineProperty(_defaultRule, 'YYYY', {
  func: r.year4
}), _defineProperty(_defaultRule, 'YY', {
  func: r.year2
}), _defineProperty(_defaultRule, 'MM', {
  func: r.month2
}), _defineProperty(_defaultRule, 'M', {
  func: r.month1
}), _defineProperty(_defaultRule, 'DD', {
  func: r.date2
}), _defineProperty(_defaultRule, 'D', {
  func: r.date1
}), _defineProperty(_defaultRule, 'HH', {
  func: r.hour24_2
}), _defineProperty(_defaultRule, 'H', {
  func: r.hour24_1
}), _defineProperty(_defaultRule, 'hh', {
  func: r.hour12_2
}), _defineProperty(_defaultRule, 'h', {
  func: r.hour12_1
}), _defineProperty(_defaultRule, 'mm', {
  func: r.minute2
}), _defineProperty(_defaultRule, 'm', {
  func: r.minute1
}), _defineProperty(_defaultRule, 'ss', {
  func: r.second2
}), _defineProperty(_defaultRule, 's', {
  func: r.second1
}), _defineProperty(_defaultRule, 'SSS', {
  func: r.millisecond3
}), _defineProperty(_defaultRule, 'SS', {
  func: r.millisecond2
}), _defineProperty(_defaultRule, 'S', {
  func: r.millisecond1
}), _defineProperty(_defaultRule, 'aa', {
  func: r.am_pm
}), _defineProperty(_defaultRule, 'AA', {
  func: r.AM_PM
}), _defineProperty(_defaultRule, 'a', {
  func: r.a_p
}), _defineProperty(_defaultRule, 'A', {
  func: r.A_P
}), _defineProperty(_defaultRule, 'ddd', {
  func: r.dayOfWeekEnglishShort
}), _defineProperty(_defaultRule, 'dddd', {
  func: r.dayOfWeekEnglishLong
}), _defineProperty(_defaultRule, 'MMM', {
  func: r.nameOfMonthEnglishChar3
}), _defineProperty(_defaultRule, 'MMMM', {
  func: r.nameOfMonthEnglishChar4
}), _defineProperty(_defaultRule, 'MMMMM', {
  func: r.nameOfMonthEnglishLong
}), _defineProperty(_defaultRule, 'Z', {
  func: r.timezoneHH_MM
}), _defineProperty(_defaultRule, 'ZZ', {
  func: r.timezoneHHMM
}), _defaultRule);
var momentLikeRule = (_momentLikeRule = {}, _defineProperty(_momentLikeRule, 'YYYY', {
  func: r.year4
}), _defineProperty(_momentLikeRule, 'YY', {
  func: r.year2
}), _defineProperty(_momentLikeRule, 'MM', {
  func: r.month2
}), _defineProperty(_momentLikeRule, 'M', {
  func: r.month1
}), _defineProperty(_momentLikeRule, 'DD', {
  func: r.date2
}), _defineProperty(_momentLikeRule, 'D', {
  func: r.date1
}), _defineProperty(_momentLikeRule, 'HH', {
  func: r.hour24_2
}), _defineProperty(_momentLikeRule, 'H', {
  func: r.hour24_1
}), _defineProperty(_momentLikeRule, 'hh', {
  func: r.hour12_2
}), _defineProperty(_momentLikeRule, 'h', {
  func: r.hour12_1
}), _defineProperty(_momentLikeRule, 'mm', {
  func: r.minute2
}), _defineProperty(_momentLikeRule, 'm', {
  func: r.minute1
}), _defineProperty(_momentLikeRule, 'ss', {
  func: r.second2
}), _defineProperty(_momentLikeRule, 's', {
  func: r.second1
}), _defineProperty(_momentLikeRule, 'SSS', {
  func: r.millisecond3
}), _defineProperty(_momentLikeRule, 'SS', {
  func: r.millisecond2
}), _defineProperty(_momentLikeRule, 'S', {
  func: r.millisecond1
}), _defineProperty(_momentLikeRule, 'a', {
  func: r.am_pm
}), _defineProperty(_momentLikeRule, 'A', {
  func: r.AM_PM
}), _defineProperty(_momentLikeRule, 'ddd', {
  func: r.dayOfWeekEnglishShort
}), _defineProperty(_momentLikeRule, 'dddd', {
  func: r.dayOfWeekEnglishLong
}), _defineProperty(_momentLikeRule, 'MMM', {
  func: r.nameOfMonthEnglishChar3
}), _defineProperty(_momentLikeRule, 'MMMM', {
  func: r.nameOfMonthEnglishLong
}), _defineProperty(_momentLikeRule, 'Z', {
  func: r.timezoneHH_MM
}), _defineProperty(_momentLikeRule, 'ZZ', {
  func: r.timezoneHHMM
}), _momentLikeRule);

__dateToStringRule.Default = function () {
  return defaultRule;
};

__dateToStringRule.MomentLike = function () {
  return momentLikeRule;
};

var _default = {
  __dateToStringRule: __dateToStringRule
};
exports["default"] = _default;