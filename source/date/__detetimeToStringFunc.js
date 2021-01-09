import { _paddingFirst } from '../string/_paddingFirst.js';
import { _subFirst, _subLast, _trimFirst } from '../string/string_common.js';
import { _dayOfWeekEnglishShort } from '../date/_dayOfWeekEnglishShort.js';
import { _dayOfWeekEnglishLong } from '../date/_dayOfWeekEnglishLong.js';

export const __detetimeToStringFunc = {};

const year4 = (date, isLocal) => {
  if (isLocal) {
    return date.getFullYear().toString();
  } else {
    return date.getUTCFullYear().toString();
  }
};

const year2 = (date, isLocal) => {
  return _subLast(year4(date, isLocal), 2);
};

const month1 = (date, isLocal) => {
  if (isLocal) {
    return (date.getMonth() + 1).toString();
  } else {
    return (date.getUTCMonth() + 1).toString();
  }
};

const month2 = (date, isLocal) => {
  return _paddingFirst(month1(date, isLocal), 2, '0');
};

const date1 = (date, isLocal) => {
  if (isLocal) {
    return (date.getDate()).toString();
  } else {
    return (date.getUTCMonth()).toString();
  }
};

const date2 = (date, isLocal) => {
  return _paddingFirst(date1(date, isLocal), 2, '0');
};

const hour12_1 = (date, isLocal) => {
  // 0-11
  if (isLocal) {
    return (date.getHours() % 12).toString();
  } else {
    return (date.getUTCHours() % 12).toString();
  }
};

const hour12_2 = (date, isLocal) => {
  // 00-11
  return _paddingFirst(hour12_1(date, isLocal), 2, '0');
};

const hour24_1 = (date, isLocal) => {
  // 0-23
  if (isLocal) {
    return (date.getHours()).toString();
  } else {
    return (date.getUTCHours()).toString();
  }
};

const hour24_2 = (date, isLocal) => {
  // 00-23
  return _paddingFirst(hour24_1(date, isLocal), 2, '0');
};

const minute1 = (date, isLocal) => {
  if (isLocal) {
    return date.getMinutes().toString();
  } else {
    return (date.getUTCMinutes()).toString();
  }
};

const minute2 = (date, isLocal) => {
  return _paddingFirst(minute1(date, isLocal), 2, '0');
};

const second1 = (date, isLocal) => {
  if (isLocal) {
    return date.getSeconds().toString();
  } else {
    return (date.getUTCSeconds()).toString();
  }
};

const second2 = (date, isLocal) => {
  return _paddingFirst(second1(date, isLocal), 2, '0');
};

const millisecond3 = (date, isLocal) => {
  if (isLocal) {
    return _paddingFirst(date.getMilliseconds().toString(), 3, '0');
  } else {
    return _paddingFirst(date.getUTCMilliseconds().toString(), 3, '0');
  }
};

const millisecond2 = (date, isLocal) => {
  return _subFirst(
    millisecond3(date, isLocal),
    2,
  );
};

const millisecond1 = (date, isLocal) => {
  return _subFirst(
    millisecond3(date, isLocal),
    1,
  );
};

const am_pm = (date, isLocal) => {
  if (isLocal) {
    return date.getHours() < 12 ? 'am' : 'pm';
  } else {
    return date.getUTCHours() < 12 ? 'am' : 'pm';
  }
};

const AM_PM = (date, isLocal) => {
  if (isLocal) {
    return date.getHours() < 12 ? 'AM' : 'PM';
  } else {
    return date.getUTCHours() < 12 ? 'AM' : 'PM';
  }
};

const a_p = (date, isLocal) => {
  if (isLocal) {
    return date.getHours() < 12 ? 'a' : 'p';
  } else {
    return date.getUTCHours() < 12 ? 'a' : 'p';
  }
};

const A_P = (date, isLocal) => {
  if (isLocal) {
    return date.getHours() < 12 ? 'A' : 'P';
  } else {
    return date.getUTCHours() < 12 ? 'A' : 'P';
  }
};

const timezone = (date) => {
  const minutes = -1 * date.getTimezoneOffset();
  let offsetHourStr = _paddingFirst(String(Math.floor(minutes / 60)), 2, '0');
  offsetHourStr = 0 < minutes ? '+' + offsetHourStr : offsetHourStr;
  const offsetMinStr = _paddingFirst(String(minutes % 60), 2, '0');
  return { offsetHourStr, offsetMinStr };
};

const timezoneHHMM = (date) => {
  const { offsetHourStr, offsetMinStr } = timezone(date);
  return offsetHourStr + offsetMinStr;
};

const timezoneHH_MM = (date) => {
  const { offsetHourStr, offsetMinStr } = timezone(date);
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

const _DefaultObject = {
  YYYY: year4,
  YY:   year2,
  MM:   month2,
  M:    month1,
  DD:   date2,
  D:    date1,
  hh:   hour12_2,
  h:    hour12_1,
  HH:   hour24_2,
  H:    hour24_1,
  mm:   minute2,
  m:    minute1,
  ss:   second2,
  s:    second1,
  SSS:  millisecond3,
  SS:   millisecond2,
  S:    millisecond1,
  aa:   am_pm,
  AA:   AM_PM,
  a:    a_p,
  A:    A_P,
  ddd:  _dayOfWeekEnglishShort,
  dddd: _dayOfWeekEnglishLong,
  Z:    timezoneHH_MM,
  ZZ:   timezoneHHMM,
};

const _MomentLikeObject = {
  YYYY: year4,
  YY:   year2,
  MM:   month2,
  M:    month1,
  DD:   date2,
  D:    date1,
  hh:   hour12_2,
  h:    hour12_1,
  HH:   hour24_2,
  H:    hour24_1,
  mm:   minute2,
  m:    minute1,
  ss:   second2,
  s:    second1,
  SSS:  millisecond3,
  SS:   millisecond2,
  S:    millisecond1,
  a:    a_p,
  ddd:  _dayOfWeekEnglishShort,
  dddd: _dayOfWeekEnglishLong,
  Z:    timezoneHH_MM,
  ZZ:   timezoneHHMM,
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

// const _DefaultObject = { ...__detetimeToStringFunc };
__detetimeToStringFunc.DefaultObject = () => _DefaultObject;

// const dayOfWeek = (date, dayOfWeekNames) => {
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

