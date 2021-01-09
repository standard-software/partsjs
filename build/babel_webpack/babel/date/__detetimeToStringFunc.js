"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__detetimeToStringFunc = void 0;

var _paddingFirst2 = require("../string/_paddingFirst.js");

var _string_common = require("../string/string_common.js");

var _dayOfWeekEnglishShort2 = require("../date/_dayOfWeekEnglishShort.js");

var _dayOfWeekEnglishLong2 = require("../date/_dayOfWeekEnglishLong.js");

var __detetimeToStringFunc = {};
exports.__detetimeToStringFunc = __detetimeToStringFunc;

var year4 = function year4(date, isLocal) {
  if (isLocal) {
    return date.getFullYear().toString();
  } else {
    return date.getUTCFullYear().toString();
  }
};

var year2 = function year2(date, isLocal) {
  return (0, _string_common._subLast)(year4(date, isLocal), 2);
};

var month1 = function month1(date, isLocal) {
  if (isLocal) {
    return (date.getMonth() + 1).toString();
  } else {
    return (date.getUTCMonth() + 1).toString();
  }
};

var month2 = function month2(date, isLocal) {
  return (0, _paddingFirst2._paddingFirst)(month1(date, isLocal), 2, '0');
};

var date1 = function date1(date, isLocal) {
  if (isLocal) {
    return date.getDate().toString();
  } else {
    return date.getUTCMonth().toString();
  }
};

var date2 = function date2(date, isLocal) {
  return (0, _paddingFirst2._paddingFirst)(date1(date, isLocal), 2, '0');
};

var hour12_1 = function hour12_1(date, isLocal) {
  // 0-11
  if (isLocal) {
    return (date.getHours() % 12).toString();
  } else {
    return (date.getUTCHours() % 12).toString();
  }
};

var hour12_2 = function hour12_2(date, isLocal) {
  // 00-11
  return (0, _paddingFirst2._paddingFirst)(hour12_1(date, isLocal), 2, '0');
};

var hour24_1 = function hour24_1(date, isLocal) {
  // 0-23
  if (isLocal) {
    return date.getHours().toString();
  } else {
    return date.getUTCHours().toString();
  }
};

var hour24_2 = function hour24_2(date, isLocal) {
  // 00-23
  return (0, _paddingFirst2._paddingFirst)(hour24_1(date, isLocal), 2, '0');
};

var minute1 = function minute1(date, isLocal) {
  if (isLocal) {
    return date.getMinutes().toString();
  } else {
    return date.getUTCMinutes().toString();
  }
};

var minute2 = function minute2(date, isLocal) {
  return (0, _paddingFirst2._paddingFirst)(minute1(date, isLocal), 2, '0');
};

var second1 = function second1(date, isLocal) {
  if (isLocal) {
    return date.getSeconds().toString();
  } else {
    return date.getUTCSeconds().toString();
  }
};

var second2 = function second2(date, isLocal) {
  return (0, _paddingFirst2._paddingFirst)(second1(date, isLocal), 2, '0');
};

var millisecond3 = function millisecond3(date, isLocal) {
  if (isLocal) {
    return (0, _paddingFirst2._paddingFirst)(date.getMilliseconds().toString(), 3, '0');
  } else {
    return (0, _paddingFirst2._paddingFirst)(date.getUTCMilliseconds().toString(), 3, '0');
  }
};

var millisecond2 = function millisecond2(date, isLocal) {
  return (0, _string_common._subFirst)(millisecond3(date, isLocal), 2);
};

var millisecond1 = function millisecond1(date, isLocal) {
  return (0, _string_common._subFirst)(millisecond3(date, isLocal), 1);
};

var am_pm = function am_pm(date, isLocal) {
  if (isLocal) {
    return date.getHours() < 12 ? 'am' : 'pm';
  } else {
    return date.getUTCHours() < 12 ? 'am' : 'pm';
  }
};

var AM_PM = function AM_PM(date, isLocal) {
  if (isLocal) {
    return date.getHours() < 12 ? 'AM' : 'PM';
  } else {
    return date.getUTCHours() < 12 ? 'AM' : 'PM';
  }
};

var a_p = function a_p(date, isLocal) {
  if (isLocal) {
    return date.getHours() < 12 ? 'a' : 'p';
  } else {
    return date.getUTCHours() < 12 ? 'a' : 'p';
  }
};

var A_P = function A_P(date, isLocal) {
  if (isLocal) {
    return date.getHours() < 12 ? 'A' : 'P';
  } else {
    return date.getUTCHours() < 12 ? 'A' : 'P';
  }
};

var timezone = function timezone(date) {
  var minutes = -1 * date.getTimezoneOffset();
  var offsetHourStr = (0, _paddingFirst2._paddingFirst)(String(Math.floor(minutes / 60)), 2, '0');
  offsetHourStr = 0 < minutes ? '+' + offsetHourStr : offsetHourStr;
  var offsetMinStr = (0, _paddingFirst2._paddingFirst)(String(minutes % 60), 2, '0');
  return {
    offsetHourStr: offsetHourStr,
    offsetMinStr: offsetMinStr
  };
};

var timezoneHHMM = function timezoneHHMM(date) {
  var _timezone = timezone(date),
      offsetHourStr = _timezone.offsetHourStr,
      offsetMinStr = _timezone.offsetMinStr;

  return offsetHourStr + offsetMinStr;
};

var timezoneHH_MM = function timezoneHH_MM(date) {
  var _timezone2 = timezone(date),
      offsetHourStr = _timezone2.offsetHourStr,
      offsetMinStr = _timezone2.offsetMinStr;

  return offsetHourStr + ':' + offsetMinStr;
};

__detetimeToStringFunc.year4 = year4;
__detetimeToStringFunc.year2 = year2;
__detetimeToStringFunc.month2 = month2;
__detetimeToStringFunc.month1 = month1;
__detetimeToStringFunc.date2 = date2;
__detetimeToStringFunc.date1 = date1;
__detetimeToStringFunc.hour12_2 = hour12_2;
__detetimeToStringFunc.hour12_1 = hour12_1;
__detetimeToStringFunc.hour24_2 = hour24_2;
__detetimeToStringFunc.hour24_1 = hour24_1;
__detetimeToStringFunc.minute2 = minute2;
__detetimeToStringFunc.minute1 = minute1;
__detetimeToStringFunc.second2 = second2;
__detetimeToStringFunc.second1 = second1;
__detetimeToStringFunc.millisecond3 = millisecond3;
__detetimeToStringFunc.millisecond2 = millisecond2;
__detetimeToStringFunc.millisecond1 = millisecond1;
__detetimeToStringFunc.am_pm = am_pm;
__detetimeToStringFunc.AM_PM = AM_PM;
__detetimeToStringFunc.a_p = a_p;
__detetimeToStringFunc.A_P = A_P;
var _DefaultObject = {
  YYYY: year4,
  YY: year2,
  MM: month2,
  M: month1,
  DD: date2,
  D: date1,
  hh: hour12_2,
  h: hour12_1,
  HH: hour24_2,
  H: hour24_1,
  mm: minute2,
  m: minute1,
  ss: second2,
  s: second1,
  SSS: millisecond3,
  SS: millisecond2,
  S: millisecond1,
  aa: am_pm,
  AA: AM_PM,
  a: a_p,
  A: A_P,
  ddd: _dayOfWeekEnglishShort2._dayOfWeekEnglishShort,
  dddd: _dayOfWeekEnglishLong2._dayOfWeekEnglishLong,
  Z: timezoneHH_MM,
  ZZ: timezoneHHMM
};
var _MomentLikeObject = {
  YYYY: year4,
  YY: year2,
  MM: month2,
  M: month1,
  DD: date2,
  D: date1,
  hh: hour12_2,
  h: hour12_1,
  HH: hour24_2,
  H: hour24_1,
  mm: minute2,
  m: minute1,
  ss: second2,
  s: second1,
  SSS: millisecond3,
  SS: millisecond2,
  S: millisecond1,
  a: a_p,
  ddd: _dayOfWeekEnglishShort2._dayOfWeekEnglishShort,
  dddd: _dayOfWeekEnglishLong2._dayOfWeekEnglishLong,
  Z: timezoneHH_MM,
  ZZ: timezoneHHMM
};

__detetimeToStringFunc.MMM = function (date) {
  return nameOfMonthEnglish3Char(date);
};

__detetimeToStringFunc.MMMM = function (date) {
  return nameOfMonthEnglish4Char(date);
};

__detetimeToStringFunc.MMMMM = function (date) {
  return nameOfMonthEnglishLong(date);
}; // const _DefaultObject = { ...__detetimeToStringFunc };


__detetimeToStringFunc.DefaultObject = function () {
  return _DefaultObject;
}; // const dayOfWeek = (date, dayOfWeekNames) => {
//   // c.assert(t.isDate(date));
//   // if (t.isNullOrUndefined(dayOfWeekNames)) {
//   //   return date.getDay();
//   // }
//   // c.assert(t.isArray(dayOfWeekNames));
//   // c.assert(dayOfWeekNames.length === 7);
//   return dayOfWeekNames[date.getDay()];
// };
// const dayOfWeekEnglishShort = (date) => {
//   return dayOfWeek(date, dayOfWeekNamesEnglishShort());
// };
// const dayOfWeekEnglishLong = (date) => {
//   return dayOfWeek(date, dayOfWeekNamesEnglishLong());
// };
// const dayOfWeekNamesEnglishShort = () => {
//   return [
//     'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
//   ];
// };
// const dayOfWeekNamesEnglishLong = () => {
//   return [
//     'Sunday', 'Monday', 'Tuesday', 'Wednesday',
//     'Thursday', 'Friday', 'Saturday',
//   ];
// };


var nameOfMonth = function nameOfMonth(date, monthNames) {
  // c.assert(t.isDate(date));
  // c.assert(t.isArray(monthNames));
  // c.assert(monthNames.length === 12);
  return monthNames[date.getMonth()];
};

var nameOfMonthEnglish3Char = function nameOfMonthEnglish3Char(date) {
  return nameOfMonth(date, monthNamesEnglish3Char());
};

var nameOfMonthEnglish4Char = function nameOfMonthEnglish4Char(date) {
  return nameOfMonth(date, monthNamesEnglish4Char());
};

var nameOfMonthEnglishLong = function nameOfMonthEnglishLong(date) {
  return nameOfMonth(date, monthNamesEnglishLong());
};

var monthNamesEnglish3Char = function monthNamesEnglish3Char() {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
};

var monthNamesEnglish4Char = function monthNamesEnglish4Char() {
  return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
};

var monthNamesEnglishLong = function monthNamesEnglishLong() {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
};

var _default = {
  __detetimeToStringFunc: __detetimeToStringFunc
};
exports["default"] = _default;