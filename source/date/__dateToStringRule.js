import { isNull } from '../type/type.js';
import { _paddingFirst } from '../string/_paddingFirst.js';
import { _subFirst, _subLast, _trimFirst } from '../string/string_common.js';
import { _dayOfWeek } from './_dayOfWeek.js';
import { _nameOfMonth } from './_nameOfMonth.js';
import { _minutesToTexts } from './_minutesToTexts.js';

const rule = {};

const cloneDate = (date) => new Date(date.getTime());
const setDateOffsetMin = (date, offsetMin) => {
  const result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

const year4 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCFullYear().toString();
};

const year2 = (date, timezoneOffset) => {
  return _subLast(year4(date, timezoneOffset), 2);
};

const month1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCMonth() + 1).toString();
};

const month2 = (date, timezoneOffset) => {
  return _paddingFirst(month1(date, timezoneOffset), 2, '0');
};

const date1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCDate()).toString();
};

const date2 = (date, timezoneOffset) => {
  return _paddingFirst(date1(date, timezoneOffset), 2, '0');
};

const hour12_1 = (date, timezoneOffset) => {
  // 0-11
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCHours() % 12).toString();
};

const hour12_2 = (date, timezoneOffset) => {
  // 00-11
  return _paddingFirst(hour12_1(date, timezoneOffset), 2, '0');
};

const hour24_1 = (date, timezoneOffset) => {
  // 0-23
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return (setDateOffsetMin(date, timezoneOffset).getUTCHours()).toString();
};

const hour24_2 = (date, timezoneOffset) => {
  // 00-23
  return _paddingFirst(hour24_1(date, timezoneOffset), 2, '0');
};

const minute1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCMinutes().toString();
};

const minute2 = (date, timezoneOffset) => {
  return _paddingFirst(minute1(date, timezoneOffset), 2, '0');
};

const second1 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCSeconds().toString();
};

const second2 = (date, timezoneOffset) => {
  return _paddingFirst(second1(date, timezoneOffset), 2, '0');
};

const millisecond3 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _paddingFirst(
    setDateOffsetMin(date, timezoneOffset).getUTCMilliseconds().toString(),
    3, '0',
  );
};

const millisecond2 = (date, timezoneOffset) => {
  return _subFirst(
    millisecond3(date, timezoneOffset),
    2,
  );
};

const millisecond1 = (date, timezoneOffset) => {
  return _subFirst(
    millisecond3(date, timezoneOffset),
    1,
  );
};

const am_pm = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'am' : 'pm';
};

const AM_PM = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'AM' : 'PM';
};

const a_p = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'a' : 'p';
};

const A_P = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return setDateOffsetMin(date, timezoneOffset).getUTCHours() < 12 ? 'A' : 'P';
};

const dayOfWeekEnglishShort = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _dayOfWeek.names.EnglishShort()[
    setDateOffsetMin(date, timezoneOffset).getUTCDay()
  ];
};

const dayOfWeekEnglishLong = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _dayOfWeek.names.EnglishLong()[
    setDateOffsetMin(date, timezoneOffset).getUTCDay()
  ];
};

const nameOfMonthEnglishChar3 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _nameOfMonth.names.EnglishChar3()[
    setDateOffsetMin(date, timezoneOffset).getUTCMonth()
  ];
};

const nameOfMonthEnglishChar4 = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _nameOfMonth.names.EnglishChar4()[
    setDateOffsetMin(date, timezoneOffset).getUTCMonth()
  ];
};

const nameOfMonthEnglishLong = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    timezoneOffset = 0;
  }
  return _nameOfMonth.names.EnglishLong()[
    setDateOffsetMin(date, timezoneOffset).getUTCMonth()
  ];
};

const timezoneHHMM = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    return 'Z';
  }
  const [sign, hour, min] = _minutesToTexts(-1 * timezoneOffset);
  return sign + hour + min;
};

const timezoneHH_MM = (date, timezoneOffset) => {
  if (isNull(timezoneOffset)) {
    return 'Z';
  }
  const [sign, hour, min] = _minutesToTexts(-1 * timezoneOffset);
  return sign + hour + ':' + min;
};

export const __dateToStringRule = {
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
};

const r = __dateToStringRule;

const defaultRule = {
  ['YYYY']:   { func: r.year4 },
  ['YY']:     { func: r.year2 },
  ['MM']:     { func: r.month2 },
  ['M']:      { func: r.month1 },
  ['DD']:     { func: r.date2 },
  ['D']:      { func: r.date1 },
  ['hh']:     { func: r.hour12_2 },
  ['h']:      { func: r.hour12_1 },
  ['HH']:     { func: r.hour24_2 },
  ['H']:      { func: r.hour24_1 },
  ['mm']:     { func: r.minute2 },
  ['m']:      { func: r.minute1 },
  ['ss']:     { func: r.second2 },
  ['s']:      { func: r.second1 },
  ['SSS']:    { func: r.millisecond3 },
  ['SS']:     { func: r.millisecond2 },
  ['S']:      { func: r.millisecond1 },
  ['aa']:     { func: r.am_pm },
  ['AA']:     { func: r.AM_PM },
  ['a']:      { func: r.a_p },
  ['A']:      { func: r.A_P },
  ['ddd']:    { func: r.dayOfWeekEnglishShort },
  ['dddd']:   { func: r.dayOfWeekEnglishLong },
  ['MMM']:    { func: r.nameOfMonthEnglishChar3 },
  ['MMMM']:   { func: r.nameOfMonthEnglishChar4 },
  ['MMMMM']:  { func: r.nameOfMonthEnglishLong },
  ['Z']:      { func: r.timezoneHH_MM },
  ['ZZ']:     { func: r.timezoneHHMM },
};

const momentLikeRule = {
  ['YYYY']:   { func: r.year4 },
  ['YY']:     { func: r.year2 },
  ['MM']:     { func: r.month2 },
  ['M']:      { func: r.month1 },
  ['DD']:     { func: r.date2 },
  ['D']:      { func: r.date1 },
  ['hh']:     { func: r.hour12_2 },
  ['h']:      { func: r.hour12_1 },
  ['HH']:     { func: r.hour24_2 },
  ['H']:      { func: r.hour24_1 },
  ['mm']:     { func: r.minute2 },
  ['m']:      { func: r.minute1 },
  ['ss']:     { func: r.second2 },
  ['s']:      { func: r.second1 },
  ['SSS']:    { func: r.millisecond3 },
  ['SS']:     { func: r.millisecond2 },
  ['S']:      { func: r.millisecond1 },
  ['a']:      { func: r.am_pm },
  ['A']:      { func: r.AM_PM },
  ['ddd']:    { func: r.dayOfWeekEnglishShort },
  ['dddd']:   { func: r.dayOfWeekEnglishLong },
  ['MMM']:    { func: r.nameOfMonthEnglishChar3 },
  ['MMMM']:   { func: r.nameOfMonthEnglishLong },
  ['Z']:      { func: r.timezoneHH_MM },
  ['ZZ']:     { func: r.timezoneHHMM },
};

__dateToStringRule.Default = () => defaultRule;
__dateToStringRule.MomentLike = () => momentLikeRule;

export default { __dateToStringRule };

