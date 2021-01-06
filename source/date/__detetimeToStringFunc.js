import { _paddingFirst } from '../string/_paddingFirst.js';
import { _subFirst, _subLast, _trimFirst } from '../string/string_common.js';

export const __detetimeToStringFunc = {};

__detetimeToStringFunc.YYYY = (date) => {
  return date.getFullYear().toString();
};

__detetimeToStringFunc.YY = (date) => {
  return _subLast(date.getFullYear().toString(), 2);
};

__detetimeToStringFunc.MM = (date) => {
  return _paddingFirst((date.getMonth() + 1).toString(), 2, '0');
};

__detetimeToStringFunc.M = (date) => {
  return (date.getMonth() + 1).toString();
};

__detetimeToStringFunc.DD = (date) => {
  return _paddingFirst(date.getDate().toString(), 2, '0');
};

__detetimeToStringFunc.D = (date) => {
  return date.getDate().toString();
};

__detetimeToStringFunc.hh = (date) => {
  // 00-12
  return _paddingFirst((date.getHours() % 12).toString(), 2, '0');
};

__detetimeToStringFunc.h = (date) => {
  // 0-12
  return (date.getHours() % 12).toString();
};

__detetimeToStringFunc.HH = (date) => {
  // 00-23
  return _paddingFirst(date.getHours().toString(), 2, '0');
};

__detetimeToStringFunc.H = (date) => {
  // 0-23
  return date.getHours().toString();
};

__detetimeToStringFunc.mm = (date) => {
  return _paddingFirst(date.getMinutes().toString(), 2, '0');
};

__detetimeToStringFunc.m = (date) => {
  return date.getMinutes().toString();
};

__detetimeToStringFunc.ss = (date) => {
  return _paddingFirst(date.getSeconds().toString(), 2, '0');
};

__detetimeToStringFunc.s = (date) => {
  return date.getSeconds().toString();
};

__detetimeToStringFunc.SSS = (date) => {
  return _paddingFirst(date.getMilliseconds().toString(), 3, '0');
};

__detetimeToStringFunc.SS = (date) => {
  return _subFirst(
    __detetimeToStringFunc.SSS(date),
    2,
  );
};

__detetimeToStringFunc.S = (date) => {
  return _subFirst(
    __detetimeToStringFunc.SSS(date),
    1,
  );
};

__detetimeToStringFunc.aa = (date) => {
  return date.getHours() < 12 ? 'am' : 'pm';
};

__detetimeToStringFunc.AA = (date) => {
  return date.getHours() < 12 ? 'AM' : 'PM';
};

__detetimeToStringFunc.a = (date) => {
  return date.getHours() < 12 ? 'a' : 'p';
};

__detetimeToStringFunc.A = (date) => {
  return date.getHours() < 12 ? 'A' : 'P';
};

const _Z = (date) => {
  const minutes = -1 * date.getTimezoneOffset();
  let offsetHourStr = _paddingFirst(String(Math.floor(minutes / 60)), 2, '0');
  offsetHourStr = 0 < minutes ? '+' + offsetHourStr : offsetHourStr;
  const offsetMinStr = _paddingFirst(String(minutes % 60), 2, '0');
  return { offsetHourStr, offsetMinStr };
};

__detetimeToStringFunc.ZZ = (date) => {
  const { offsetHourStr, offsetMinStr } = _Z(date);
  return offsetHourStr + offsetMinStr;
};

__detetimeToStringFunc.Z = (date) => {
  const { offsetHourStr, offsetMinStr } = _Z(date);
  return offsetHourStr + ':' + offsetMinStr;
};

__detetimeToStringFunc.DDD = (date) => {
  return dayOfWeekEnglishShort(date);
};

__detetimeToStringFunc.DDDD = (date) => {
  return dayOfWeekEnglishLong(date);
};

__detetimeToStringFunc.MMM = (date) => {
  return nameOfMonthEnglish3Char(date);
};

__detetimeToStringFunc.MMMM = (date) => {
  return nameOfMonthEnglish4Char(date);
};

__detetimeToStringFunc.MMMMM = (date) => {
  return nameOfMonthEnglishLong(date);
};

const _DefaultObject = { ...__detetimeToStringFunc };
__detetimeToStringFunc.DefaultObject = () => _DefaultObject;

const dayOfWeek = (date, dayOfWeekNames) => {
  // c.assert(t.isDate(date));
  // if (t.isNullOrUndefined(dayOfWeekNames)) {
  //   return date.getDay();
  // }
  // c.assert(t.isArray(dayOfWeekNames));
  // c.assert(dayOfWeekNames.length === 7);
  return dayOfWeekNames[date.getDay()];
};

const dayOfWeekEnglishShort = (date) => {
  return dayOfWeek(date, dayOfWeekNamesEnglishShort());
};

const dayOfWeekEnglishLong = (date) => {
  return dayOfWeek(date, dayOfWeekNamesEnglishLong());
};

const dayOfWeekNamesEnglishShort = () => {
  return [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
  ];
};

const dayOfWeekNamesEnglishLong = () => {
  return [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday',
  ];
};

const nameOfMonth = (date, monthNames) => {
  // c.assert(t.isDate(date));
  // c.assert(t.isArray(monthNames));
  // c.assert(monthNames.length === 12);
  return monthNames[date.getMonth()];
};

const nameOfMonthEnglish3Char = (date) => {
  return nameOfMonth(date, monthNamesEnglish3Char());
};

const nameOfMonthEnglish4Char = (date) => {
  return nameOfMonth(date, monthNamesEnglish4Char());
};

const nameOfMonthEnglishLong = (date) => {
  return nameOfMonth(date, monthNamesEnglishLong());
};

const monthNamesEnglish3Char = () => {
  return [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
};

const monthNamesEnglish4Char = () => {
  return [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June',
    'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.',
  ];
};

const monthNamesEnglishLong = () => {
  return [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
};

export default { __detetimeToStringFunc };

