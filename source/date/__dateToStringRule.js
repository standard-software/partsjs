import { isNull } from '../type/type.js';
import { _paddingFirst } from '../string/_paddingFirst.js';
import { _subFirst, _subLast, _trimFirst } from '../string/string_common.js';
import { _dayOfWeekEnglishShort } from './_dayOfWeekEnglishShort.js';
import { _dayOfWeekEnglishLong } from './_dayOfWeekEnglishLong.js';
import { _nameOfMonthEnglishChar3 } from './_nameOfMonthEnglishChar3.js';
import { _nameOfMonthEnglishChar4 } from './_nameOfMonthEnglishChar4.js';
import { _nameOfMonthEnglishLong } from './_nameOfMonthEnglishLong.js';
import { _minutesToTexts } from './_minutesToTexts.js';

export const __dateToStringRule = {};

const cloneDate = (date) => new Date(date.getTime());
const setDateOffsetMin = (date, offsetMin) => {
  const result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  // console.log({ date, offsetMin, result });
  return result;
};

const year4 = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return date.getUTCFullYear().toString();
  } else {
    return setDateOffsetMin(date, timezoneOffsetMin).getUTCFullYear().toString();
  }
};

const year2 = (date, timezoneOffsetMin) => {
  return _subLast(year4(date, timezoneOffsetMin), 2);
};

const month1 = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return (date.getUTCMonth() + 1).toString();
  } else {
    return (setDateOffsetMin(date, timezoneOffsetMin).getUTCMonth() + 1).toString();
  }
};

const month2 = (date, timezoneOffsetMin) => {
  return _paddingFirst(month1(date, timezoneOffsetMin), 2, '0');
};

const date1 = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return (date.getUTCMonth()).toString();
  } else {
    return (setDateOffsetMin(date, timezoneOffsetMin).getUTCDate()).toString();
  }
};

const date2 = (date, timezoneOffsetMin) => {
  return _paddingFirst(date1(date, timezoneOffsetMin), 2, '0');
};

const hour12_1 = (date, timezoneOffsetMin) => {
  // 0-11
  if (isNull(timezoneOffsetMin)) {
    return (date.getUTCHours() % 12).toString();
  } else {
    return (setDateOffsetMin(date, timezoneOffsetMin).getUTCHours() % 12).toString();
  }
};

const hour12_2 = (date, timezoneOffsetMin) => {
  // 00-11
  return _paddingFirst(hour12_1(date, timezoneOffsetMin), 2, '0');
};

const hour24_1 = (date, timezoneOffsetMin) => {
  // 0-23
  if (isNull(timezoneOffsetMin)) {
    return (date.getUTCHours()).toString();
  } else {
    return (setDateOffsetMin(date, timezoneOffsetMin).getUTCHours()).toString();
  }
};

const hour24_2 = (date, timezoneOffsetMin) => {
  // 00-23
  return _paddingFirst(hour24_1(date, timezoneOffsetMin), 2, '0');
};

const minute1 = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return (date.getUTCMinutes()).toString();
  } else {
    return setDateOffsetMin(date, timezoneOffsetMin).getUTCMinutes().toString();
  }
};

const minute2 = (date, timezoneOffsetMin) => {
  return _paddingFirst(minute1(date, timezoneOffsetMin), 2, '0');
};

const second1 = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return (date.getUTCSeconds()).toString();
  } else {
    return setDateOffsetMin(date, timezoneOffsetMin).getUTCSeconds().toString();
  }
};

const second2 = (date, timezoneOffsetMin) => {
  return _paddingFirst(second1(date, timezoneOffsetMin), 2, '0');
};

const millisecond3 = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return _paddingFirst(
      date.getUTCMilliseconds().toString(),
      3, '0',
    );
  } else {
    return _paddingFirst(
      setDateOffsetMin(date, timezoneOffsetMin).getUTCMilliseconds().toString(),
      3, '0',
    );
  }
};

const millisecond2 = (date, timezoneOffsetMin) => {
  return _subFirst(
    millisecond3(date, timezoneOffsetMin),
    2,
  );
};

const millisecond1 = (date, timezoneOffsetMin) => {
  return _subFirst(
    millisecond3(date, timezoneOffsetMin),
    1,
  );
};

const am_pm = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return date.getUTCHours() < 12 ? 'am' : 'pm';
  } else {
    return date.getHours() < 12 ? 'am' : 'pm';
  }
};

const AM_PM = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return date.getUTCHours() < 12 ? 'AM' : 'PM';
  } else {
    return date.getHours() < 12 ? 'AM' : 'PM';
  }
};

const a_p = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return date.getUTCHours() < 12 ? 'a' : 'p';
  } else {
    return date.getHours() < 12 ? 'a' : 'p';
  }
};

const A_P = (date, timezoneOffsetMin) => {
  if (isNull(timezoneOffsetMin)) {
    return date.getUTCHours() < 12 ? 'A' : 'P';
  } else {
    return date.getHours() < 12 ? 'A' : 'P';
  }
};

const timezoneHHMM = (date) => {
  const [sign, hour, min] = _minutesToTexts(-1 * date.getTimezoneOffset());
  return sign + hour + min;
};

const timezoneHH_MM = (date) => {
  const [sign, hour, min] = _minutesToTexts(-1 * date.getTimezoneOffset());
  return sign + hour + ':' + min;
};

__dateToStringRule.year4 = year4;
__dateToStringRule.year2 = year2;
__dateToStringRule.month2 = month2;
__dateToStringRule.month1 = month1;
__dateToStringRule.date2 = date2;
__dateToStringRule.date1 = date1;
__dateToStringRule.hour12_2 = hour12_2;
__dateToStringRule.hour12_1 = hour12_1;
__dateToStringRule.hour24_2 = hour24_2;
__dateToStringRule.hour24_1 = hour24_1;
__dateToStringRule.minute2 = minute2;
__dateToStringRule.minute1 = minute1;
__dateToStringRule.second2 = second2;
__dateToStringRule.second1 = second1;
__dateToStringRule.millisecond3 = millisecond3;
__dateToStringRule.millisecond2 = millisecond2;
__dateToStringRule.millisecond1 = millisecond1;
__dateToStringRule.am_pm = am_pm;
__dateToStringRule.AM_PM = AM_PM;
__dateToStringRule.a_p = a_p;
__dateToStringRule.A_P = A_P;

const _DefaultRule = {
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
  MMM:  _nameOfMonthEnglishChar3,
  MMMM: _nameOfMonthEnglishChar4,
  MMMMM:_nameOfMonthEnglishLong,
  Z:    timezoneHH_MM,
  ZZ:   timezoneHHMM,
};

const _MomentLikeRule = {
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
  a:    am_pm,
  A:    AM_PM,
  ddd:  _dayOfWeekEnglishShort,
  dddd: _dayOfWeekEnglishLong,
  MMM:  _nameOfMonthEnglishChar3,
  MMMM: _nameOfMonthEnglishLong,
  Z:    timezoneHH_MM,
  ZZ:   timezoneHHMM,
};

__dateToStringRule.Default = () => _DefaultRule;
__dateToStringRule.MomentLike = () => _MomentLikeRule;

export default { __dateToStringRule };

