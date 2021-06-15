import { isNull, isUndefined } from '../type/type.js';
import { _paddingFirst } from '../string/_paddingFirst.js';
import { _subFirst, _subLast, _trimFirst } from '../string/string_common.js';
import { _dayOfWeek } from './_dayOfWeek.js';
import { _nameOfMonth } from './_nameOfMonth.js';
import { _minutesToTexts } from './_minutesToTexts.js';
import { __cloneDate } from '../common/__cloneDate.js';

const rule = {};

const cloneDate = (date) => new Date(date.getTime());
const setDateOffsetMin = (date, offsetMin) => {
  const result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

const year4 = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getFullYear();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCFullYear();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCFullYear();
  }
  return result.toString();
};

const year2 = (date, timezoneOffset) => {
  return _subLast(year4(date, timezoneOffset), 2);
};

const month = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getMonth();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCMonth();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCMonth();
  }
  return result;
};

const month1 = (date, timezoneOffset) => {
  return (month(date, timezoneOffset) + 1).toString();
};

const month2 = (date, timezoneOffset) => {
  return _paddingFirst(month1(date, timezoneOffset), 2, '0');
};

const date1 = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getDate();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCDate();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCDate();
  }
  return result.toString();
};

const date2 = (date, timezoneOffset) => {
  return _paddingFirst(date1(date, timezoneOffset), 2, '0');
};

const hours = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getHours();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCHours();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCHours();
  }
  return result;
};
const hour12_1 = (date, timezoneOffset) => {
  // 0-11
  return (hours(date, timezoneOffset) % 12).toString();
};

const hour12_2 = (date, timezoneOffset) => {
  // 00-11
  return _paddingFirst(hour12_1(date, timezoneOffset), 2, '0');
};

const hour24_1 = (date, timezoneOffset) => {
  // 0-23
  return hours(date, timezoneOffset).toString();
};

const hour24_2 = (date, timezoneOffset) => {
  // 00-23
  return _paddingFirst(hour24_1(date, timezoneOffset), 2, '0');
};

const minutes1 = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getMinutes();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCMinutes();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCMinutes();
  }
  return result.toString();
};

const minutes2 = (date, timezoneOffset) => {
  return _paddingFirst(minutes1(date, timezoneOffset), 2, '0');
};

const seconds1 = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getSeconds();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCSeconds();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCSeconds();
  }
  return result.toString();
};

const seconds2 = (date, timezoneOffset) => {
  return _paddingFirst(seconds1(date, timezoneOffset), 2, '0');
};

const milliseconds3 = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getMilliseconds();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCMilliseconds();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCMilliseconds();
  }
  return _paddingFirst(
    result.toString(),
    3, '0',
  );
};

const milliseconds2 = (date, timezoneOffset) => {
  return _subFirst(
    milliseconds3(date, timezoneOffset),
    2,
  );
};

const milliseconds1 = (date, timezoneOffset) => {
  return _subFirst(
    milliseconds3(date, timezoneOffset),
    1,
  );
};

const am_pm = (date, timezoneOffset) => {
  return hours(date, timezoneOffset) < 12 ? 'am' : 'pm';
};

const AM_PM = (date, timezoneOffset) => {
  return am_pm(date, timezoneOffset).toUpperCase();
};

const a_p = (date, timezoneOffset) => {
  switch (am_pm(date, timezoneOffset)) {
  case 'am':
    return 'a';
  case 'pm':
    return 'p';
  default:
    throw new Error('a_p');
  }
};

const A_P = (date, timezoneOffset) => {
  return a_p(date, timezoneOffset).toUpperCase();
};

const dayOfWeek = (date, timezoneOffset) => {
  let result;
  if (isUndefined(timezoneOffset)) {
    result = date.getDay();
  } else if (isNull(timezoneOffset)) {
    result = date.getUTCDay();
  } else {
    const d = __cloneDate(date);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    result = d.getUTCDay();
  }
  return result;
};

const dayOfWeekEnglishShort = (date, timezoneOffset) => {
  return _dayOfWeek.names.EnglishShort()[dayOfWeek(date, timezoneOffset)];
};

const dayOfWeekEnglishLong = (date, timezoneOffset) => {
  return _dayOfWeek.names.EnglishLong()[dayOfWeek(date, timezoneOffset)];
};

const nameOfMonthEnglishChar3 = (date, timezoneOffset) => {
  return _nameOfMonth.names.EnglishChar3()[
    month(date, timezoneOffset)
  ];
};

const nameOfMonthEnglishChar4 = (date, timezoneOffset) => {
  return _nameOfMonth.names.EnglishChar4()[
    month(date, timezoneOffset)
  ];
};

const nameOfMonthEnglishLong = (date, timezoneOffset) => {
  return _nameOfMonth.names.EnglishLong()[
    month(date, timezoneOffset)
  ];
};

const timezoneHHMM = (date, timezoneOffset) => {
  if (isUndefined(timezoneOffset)) {
    timezoneOffset = date.getTimezoneOffset();
  } else if (isNull(timezoneOffset)) {
    return 'Z';
  }
  const [sign, hour, min] = _minutesToTexts(-1 * timezoneOffset);
  return sign + hour + min;
};

const timezoneHH_MM = (date, timezoneOffset) => {
  if (isUndefined(timezoneOffset)) {
    timezoneOffset = date.getTimezoneOffset();
  } else if (isNull(timezoneOffset)) {
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
  minutes2,
  minutes1,
  seconds2,
  seconds1,
  milliseconds3,
  milliseconds2,
  milliseconds1,
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
  ['HH']:     { func: r.hour24_2 },
  ['H']:      { func: r.hour24_1 },
  ['hh']:     { func: r.hour12_2 },
  ['h']:      { func: r.hour12_1 },
  ['mm']:     { func: r.minutes2 },
  ['m']:      { func: r.minutes1 },
  ['ss']:     { func: r.seconds2 },
  ['s']:      { func: r.seconds1 },
  ['SSS']:    { func: r.milliseconds3 },
  ['SS']:     { func: r.milliseconds2 },
  ['S']:      { func: r.milliseconds1 },
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
  ['HH']:     { func: r.hour24_2 },
  ['H']:      { func: r.hour24_1 },
  ['hh']:     { func: r.hour12_2 },
  ['h']:      { func: r.hour12_1 },
  ['mm']:     { func: r.minutes2 },
  ['m']:      { func: r.minutes1 },
  ['ss']:     { func: r.seconds2 },
  ['s']:      { func: r.seconds1 },
  ['SSS']:    { func: r.milliseconds3 },
  ['SS']:     { func: r.milliseconds2 },
  ['S']:      { func: r.milliseconds1 },
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

