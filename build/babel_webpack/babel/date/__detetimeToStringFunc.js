"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__detetimeToStringFunc = void 0;

var _paddingFirst2 = require("../string/_paddingFirst.js");

var _string_common = require("../string/string_common.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __detetimeToStringFunc = {};
exports.__detetimeToStringFunc = __detetimeToStringFunc;

__detetimeToStringFunc.YYYY = function (date) {
  return date.getFullYear().toString();
};

__detetimeToStringFunc.YY = function (date) {
  return (0, _string_common._subLast)(date.getFullYear().toString(), 2);
};

__detetimeToStringFunc.MM = function (date) {
  return (0, _paddingFirst2._paddingFirst)((date.getMonth() + 1).toString(), 2, '0');
};

__detetimeToStringFunc.M = function (date) {
  return (date.getMonth() + 1).toString();
};

__detetimeToStringFunc.DD = function (date) {
  return (0, _paddingFirst2._paddingFirst)(date.getDate().toString(), 2, '0');
};

__detetimeToStringFunc.D = function (date) {
  return date.getDate().toString();
};

__detetimeToStringFunc.hh = function (date) {
  // 00-12
  return (0, _paddingFirst2._paddingFirst)((date.getHours() % 12).toString(), 2, '0');
};

__detetimeToStringFunc.h = function (date) {
  // 0-12
  return (date.getHours() % 12).toString();
};

__detetimeToStringFunc.HH = function (date) {
  // 00-23
  return (0, _paddingFirst2._paddingFirst)(date.getHours().toString(), 2, '0');
};

__detetimeToStringFunc.H = function (date) {
  // 0-23
  return date.getHours().toString();
};

__detetimeToStringFunc.mm = function (date) {
  return (0, _paddingFirst2._paddingFirst)(date.getMinutes().toString(), 2, '0');
};

__detetimeToStringFunc.m = function (date) {
  return date.getMinutes().toString();
};

__detetimeToStringFunc.ss = function (date) {
  return (0, _paddingFirst2._paddingFirst)(date.getSeconds().toString(), 2, '0');
};

__detetimeToStringFunc.s = function (date) {
  return date.getSeconds().toString();
};

__detetimeToStringFunc.SSS = function (date) {
  return (0, _paddingFirst2._paddingFirst)(date.getMilliseconds().toString(), 3, '0');
};

__detetimeToStringFunc.SS = function (date) {
  return (0, _string_common._subFirst)(__detetimeToStringFunc.SSS(date), 2);
};

__detetimeToStringFunc.S = function (date) {
  return (0, _string_common._subFirst)(__detetimeToStringFunc.SSS(date), 1);
};

__detetimeToStringFunc.aa = function (date) {
  return date.getHours() < 12 ? 'am' : 'pm';
};

__detetimeToStringFunc.AA = function (date) {
  return date.getHours() < 12 ? 'AM' : 'PM';
};

__detetimeToStringFunc.a = function (date) {
  return date.getHours() < 12 ? 'a' : 'p';
};

__detetimeToStringFunc.A = function (date) {
  return date.getHours() < 12 ? 'A' : 'P';
};

var _Z = function _Z(date) {
  var minutes = -1 * date.getTimezoneOffset();
  var offsetHourStr = (0, _paddingFirst2._paddingFirst)(String(Math.floor(minutes / 60)), 2, '0');
  offsetHourStr = 0 < minutes ? '+' + offsetHourStr : offsetHourStr;
  var offsetMinStr = (0, _paddingFirst2._paddingFirst)(String(minutes % 60), 2, '0');
  return {
    offsetHourStr: offsetHourStr,
    offsetMinStr: offsetMinStr
  };
};

__detetimeToStringFunc.ZZ = function (date) {
  var _Z2 = _Z(date),
      offsetHourStr = _Z2.offsetHourStr,
      offsetMinStr = _Z2.offsetMinStr;

  return offsetHourStr + offsetMinStr;
};

__detetimeToStringFunc.Z = function (date) {
  var _Z3 = _Z(date),
      offsetHourStr = _Z3.offsetHourStr,
      offsetMinStr = _Z3.offsetMinStr;

  return offsetHourStr + ':' + offsetMinStr;
};

__detetimeToStringFunc.DDD = function (date) {
  return dayOfWeekEnglishShort(date);
};

__detetimeToStringFunc.DDDD = function (date) {
  return dayOfWeekEnglishLong(date);
};

__detetimeToStringFunc.MMM = function (date) {
  return nameOfMonthEnglish3Char(date);
};

__detetimeToStringFunc.MMMM = function (date) {
  return nameOfMonthEnglish4Char(date);
};

__detetimeToStringFunc.MMMMM = function (date) {
  return nameOfMonthEnglishLong(date);
};

var _DefaultObject = _objectSpread({}, __detetimeToStringFunc);

__detetimeToStringFunc.DefaultObject = function () {
  return _DefaultObject;
};

var dayOfWeek = function dayOfWeek(date, dayOfWeekNames) {
  // c.assert(t.isDate(date));
  // if (t.isNullOrUndefined(dayOfWeekNames)) {
  //   return date.getDay();
  // }
  // c.assert(t.isArray(dayOfWeekNames));
  // c.assert(dayOfWeekNames.length === 7);
  return dayOfWeekNames[date.getDay()];
};

var dayOfWeekEnglishShort = function dayOfWeekEnglishShort(date) {
  return dayOfWeek(date, dayOfWeekNamesEnglishShort());
};

var dayOfWeekEnglishLong = function dayOfWeekEnglishLong(date) {
  return dayOfWeek(date, dayOfWeekNamesEnglishLong());
};

var dayOfWeekNamesEnglishShort = function dayOfWeekNamesEnglishShort() {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};

var dayOfWeekNamesEnglishLong = function dayOfWeekNamesEnglishLong() {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};

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