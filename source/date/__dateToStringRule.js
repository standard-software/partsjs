import { isNull } from '../type/type.js';
import { _paddingFirst } from '../string/_paddingFirst.js';
import { _subFirst, _subLast, _trimFirst } from '../string/string_common.js';
import { _dayOfWeek } from './_dayOfWeek.js';
import { _nameOfMonth } from './_nameOfMonth.js';
import { _minutesToTexts } from './_minutesToTexts.js';

export const __dateToStringRule = {};

const cloneDate = (date) => new Date(date.getTime());
const setDateOffsetMin = (date, offsetMin) => {
  const result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  // console.log({ date, offsetMin, result });
  return result;
};

__dateToStringRule.year4 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCFullYear().toString();
};

__dateToStringRule.year2 = (date, timezoneOffset) => {
  return _subLast(year4(date, timezoneOffset), 2);
};

__dateToStringRule.month1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCMonth() + 1).toString();
};

__dateToStringRule.month2 = (date, timezoneOffset) => {
  return _paddingFirst(month1(date, timezoneOffset), 2, '0');
};

__dateToStringRule.date1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCDate()).toString();
};

__dateToStringRule.date2 = (date, timezoneOffset) => {
  return _paddingFirst(date1(date, timezoneOffset), 2, '0');
};

__dateToStringRule.hour12_1 = (date, timezoneOffset) => {
  // 0-11
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCHours() % 12).toString();
};

__dateToStringRule.hour12_2 = (date, timezoneOffset) => {
  // 00-11
  return _paddingFirst(hour12_1(date, timezoneOffset), 2, '0');
};

__dateToStringRule.hour24_1 = (date, timezoneOffset) => {
  // 0-23
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCHours()).toString();
};

__dateToStringRule.hour24_2 = (date, timezoneOffset) => {
  // 00-23
  return _paddingFirst(hour24_1(date, timezoneOffset), 2, '0');
};

__dateToStringRule.minute1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCMinutes().toString();
};

__dateToStringRule.minute2 = (date, timezoneOffset) => {
  return _paddingFirst(minute1(date, timezoneOffset), 2, '0');
};

__dateToStringRule.second1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCSeconds().toString();
};

__dateToStringRule.second2 = (date, timezoneOffset) => {
  return _paddingFirst(second1(date, timezoneOffset), 2, '0');
};

__dateToStringRule.millisecond3 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _paddingFirst(
    setDateOffsetMin(date, timezoneOffset).getUTCMilliseconds().toString(),
    3, '0',
  );
};

__dateToStringRule.millisecond2 = (date, timezoneOffset) => {
  return _subFirst(
    millisecond3(date, timezoneOffset),
    2,
  );
};

__dateToStringRule.millisecond1 = (date, timezoneOffset) => {
  return _subFirst(
    millisecond3(date, timezoneOffset),
    1,
  );
};

__dateToStringRule.am_pm = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'am' : 'pm';
};

__dateToStringRule.AM_PM = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'AM' : 'PM';
};

__dateToStringRule.a_p = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'a' : 'p';
};

__dateToStringRule.A_P = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'A' : 'P';
};

__dateToStringRule.dayOfWeekEnglishShort = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _dayOfWeek.names.EnglishShort()[
    setDateOffsetMin(date, timezoneOffset).getUTCDay()
  ];
};

__dateToStringRule.dayOfWeekEnglishLong = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _dayOfWeek.names.EnglishLong()[
    setDateOffsetMin(date, timezoneOffset).getUTCDay()
  ];
};

__dateToStringRule.nameOfMonthEnglishChar3 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _nameOfMonth.names.EnglishChar3()[
    setDateOffsetMin(date, timezoneOffset).getUTCMonth()
  ];
};

__dateToStringRule.nameOfMonthEnglishChar4 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _nameOfMonth.names.EnglishChar4()[
    setDateOffsetMin(date, timezoneOffset).getUTCMonth()
  ];
};

__dateToStringRule.nameOfMonthEnglishLong = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _nameOfMonth.names.EnglishLong()[
    setDateOffsetMin(date, timezoneOffset).getUTCMonth()
  ];
};

__dateToStringRule.timezoneHHMM = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    return 'Z';
  }
  const [sign, hour, min] = _minutesToTexts(-1 * timezoneOffset);
  return sign + hour + min;
};

__dateToStringRule.timezoneHH_MM = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    return 'Z';
  }
  const [sign, hour, min] = _minutesToTexts(-1 * timezoneOffset);
  return sign + hour + ':' + min;
};

const {
  year4,
  year2,
  month2,
  month1,
  date2,
  date1,
  hour12_2,
  hour12_1,
  hour24_2,
  hour24_1,
  minute2,
  minute1,
  second2,
  second1,
  millisecond3,
  millisecond2,
  millisecond1,
  am_pm,
  AM_PM,
  a_p,
  A_P,
  dayOfWeekEnglishShort,
  dayOfWeekEnglishLong,
  nameOfMonthEnglishChar3,
  nameOfMonthEnglishChar4,
  nameOfMonthEnglishLong,
  timezoneHH_MM,
  timezoneHHMM,
} = __dateToStringRule;

const _DefaultRule = {
  YYYY:   year4,
  YY:     year2,
  MM:     month2,
  M:      month1,
  DD:     date2,
  D:      date1,
  hh:     hour12_2,
  h:      hour12_1,
  HH:     hour24_2,
  H:      hour24_1,
  mm:     minute2,
  m:      minute1,
  ss:     second2,
  s:      second1,
  SSS:    millisecond3,
  SS:     millisecond2,
  S:      millisecond1,
  aa:     am_pm,
  AA:     AM_PM,
  a:      a_p,
  A:      A_P,
  ddd:    dayOfWeekEnglishShort,
  dddd:   dayOfWeekEnglishLong,
  MMM:    nameOfMonthEnglishChar3,
  MMMM:   nameOfMonthEnglishChar4,
  MMMMM:  nameOfMonthEnglishLong,
  Z:      timezoneHH_MM,
  ZZ:     timezoneHHMM,
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
  ddd:  dayOfWeekEnglishShort,
  dddd: dayOfWeekEnglishLong,
  MMM:  nameOfMonthEnglishChar3,
  MMMM: nameOfMonthEnglishLong,
  Z:    timezoneHH_MM,
  ZZ:   timezoneHHMM,
};

__dateToStringRule.Default = () => _DefaultRule;
__dateToStringRule.MomentLike = () => _MomentLikeRule;

export default { __dateToStringRule };

