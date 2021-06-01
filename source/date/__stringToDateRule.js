import { isNull } from '../type/type.js';
import { __monthNames } from '../date/__monthNames.js';
import { __dayOfWeekNames } from '../date/__dayOfWeekNames.js';
import { __includes } from '../compare/__includes.js';
import { _subLength } from '../string/string_common.js';
import { _textsToMinutes } from './_textsToMinutes.js';

let flagPM = false;

const datetimeInfo = {
  timezoneOffset: null,
  year: null,
  month: null,
  date: null,
  hours: null,
  minutes: null,
  seconds: null,
  milliseconds: null,
};

const setTimezoneHH_MM     = (UTCText) => (value) => {
  if (value === UTCText) {
    datetimeInfo.timezoneOffset = null;
  } else {
    const [s, h, m] = [
      _subLength(value, 0, 1), _subLength(value, 1, 2), _subLength(value, 4, 2),
    ];
    datetimeInfo.timezoneOffset = -1 * _textsToMinutes([s, h, m]);
  }
};
const setTimezoneHHMM     = (UTCText) => (value) => {
  if (value === UTCText) {
    datetimeInfo.timezoneOffset = null;
  } else {
    const [s, h, m] = [
      _subLength(value, 0, 1), _subLength(value, 1, 2), _subLength(value, 3, 2),
    ];
    datetimeInfo.timezoneOffset = -1 * _textsToMinutes([s, h, m]);
  }
};

const setYear4        = (value) => {
  datetimeInfo.year = Number(value);
};
const setYear2        = (value) => {
  const plusValue = Math.floor(datetimeInfo.year / 100) * 100;
  datetimeInfo.year = Number(value) + plusValue;
};

const setMonth = (value) => {
  datetimeInfo.month = Number(value) - 1;
};
const setMonthEnglishChar3 = (value) => {
  datetimeInfo.month = __monthNames.EnglishChar3().indexOf(value);
};
const setMonthEnglishChar4 = (value) => {
  datetimeInfo.month = __monthNames.EnglishChar4().indexOf(value);
};
const setMonthEnglishLong = (value) => {
  datetimeInfo.month = __monthNames.EnglishLong().indexOf(value);
};

const setDate = (value) => {
  datetimeInfo.date = Number(value);
};

const setHours = (value) => {
  datetimeInfo.hours = Number(value);
};

const setAMPM = (value) => {
  if (__includes(value.toLowerCase(), 'p')) {
    flagPM = true;
  }
};

const setHours12      = (value) => {
  datetimeInfo.hours = Number(value);
};

const setMinutes = (value) => {
  datetimeInfo.minutes = Number(value);
};

const setSec = (value) => {
  datetimeInfo.seconds = Number(value);
};

const setMsec = (value) => {
  datetimeInfo.milliseconds = Number(value);
};
const setMsecX10 = (value) => {
  datetimeInfo.milliseconds = Number(value) * 10;
};
const setMsecX100 = (value) => {
  datetimeInfo.milliseconds = Number(value) * 100;
};

export const __stringToDateRule = {
  setYear4,
  setYear2,
  setMonth,
  setDate,
  setHours,
  setHours12,
  setMinutes,
  setSec,
  setMsec,
  setMsecX10,
  setMsecX100,
  setAMPM,
  setMonthEnglishChar3,
  setMonthEnglishChar4,
  setMonthEnglishLong,
  setTimezoneHH_MM,
  setTimezoneHHMM,
};

__stringToDateRule.initialize = (dateSource) => {
  flagPM = false;
  datetimeInfo.year = dateSource.getFullYear();
  datetimeInfo.month = dateSource.getMonth();
  datetimeInfo.date = dateSource.getDate();
  datetimeInfo.hours = dateSource.getHours();
  datetimeInfo.minutes = dateSource.getMinutes();
  datetimeInfo.seconds = dateSource.getSeconds();
  datetimeInfo.milliseconds = dateSource.getMilliseconds();
  datetimeInfo.timezoneOffset = dateSource.getTimezoneOffset();
};

__stringToDateRule.finalize = (dateSource) => {
  const {
    year, month, date,
    hours, minutes, seconds, milliseconds,
    timezoneOffset,
  } = datetimeInfo;

  dateSource.setUTCFullYear(year, month, date);
  dateSource.setUTCHours(
    flagPM === true ? hours + 12 : hours,
    minutes, seconds, milliseconds,
  );
  if (!isNull(datetimeInfo.timezoneOffset)) {
    dateSource.setMinutes(dateSource.getMinutes() + datetimeInfo.timezoneOffset);
  }
  return { timezoneOffset };
};

const r = __stringToDateRule;

const regDayOfWeekEnglishShort  = `(${__dayOfWeekNames.EnglishShort().join('|')})`;
const regDayOfWeekEnglishLong   = `(${__dayOfWeekNames.EnglishLong().join('|')})`;
const regMonthNameEnglishChar3  = `(${__monthNames.EnglishChar3().join('|')})`;
const regMonthNameEnglishChar4  = `(${__monthNames.EnglishChar4().join('|')})`;
const regMonthNameEnglishLong   = `(${__monthNames.EnglishLong().join('|')})`;

const defaultRule = {
  ['YYYY']:   { reg: '(\\d{4})',                func: r.setYear4 },
  ['YY']:     { reg: '(\\d{2})',                func: r.setYear2 },
  ['MM']:     { reg: '(\\d{2})',                func: r.setMonth },
  ['M']:      { reg: '(\\d{1,2})',              func: r.setMonth },
  ['DD']:     { reg: '(\\d{2})',                func: r.setDate },
  ['D']:      { reg: '(\\d{1,2})',              func: r.setDate },
  ['HH']:     { reg: '(\\d{2})',                func: r.setHours },
  ['H']:      { reg: '(\\d{1,2})',              func: r.setHours },
  ['hh']:     { reg: '(\\d{2})',                func: r.setHours12 },
  ['h']:      { reg: '(\\d{1,2})',              func: r.setHours12 },
  ['mm']:     { reg: '(\\d{2})',                func: r.setMinutes },
  ['m']:      { reg: '(\\d{1,2})',              func: r.setMinutes },
  ['ss']:     { reg: '(\\d{2})',                func: r.setSec },
  ['s']:      { reg: '(\\d{1,2})',              func: r.setSec },
  ['SSS']:    { reg: '(\\d{3})',                func: r.setMsec },
  ['SS']:     { reg: '(\\d{2})',                func: r.setMsecX10 },
  ['S']:      { reg: '(\\d{1})',                func: r.setMsecX100 },
  ['aa']:     { reg: '(am|pm)',                 func: r.setAMPM },
  ['AA']:     { reg: '(AM|PM)',                 func: r.setAMPM },
  ['a']:      { reg: '(a|p)',                   func: r.setAMPM },
  ['A']:      { reg: '(A|P)',                   func: r.setAMPM },
  ['ddd']:    { reg: regDayOfWeekEnglishShort,  func: () => {} },
  ['dddd']:   { reg: regDayOfWeekEnglishLong,   func: () => {} },
  ['MMM']:    { reg: regMonthNameEnglishChar3,  func: r.setMonthEnglishChar3 },
  ['MMMM']:   { reg: regMonthNameEnglishChar4,  func: r.setMonthEnglishChar4 },
  ['MMMMM']:  { reg: regMonthNameEnglishLong,   func: r.setMonthEnglishLong },
  ['Z']:      { reg: '(Z|[+|-]\\d{2}:\\d{2})',  func: r.setTimezoneHH_MM('Z') },
  ['ZZ']:     { reg: '(Z|[+|-]\\d{2}\\d{2})',   func: r.setTimezoneHHMM('Z') },
};

const momentLikeRule = {
  ['YYYY']:   { reg: '(\\d{4})',                func: r.setYear4 },
  ['YY']:     { reg: '(\\d{2})',                func: r.setYear2 },
  ['MM']:     { reg: '(\\d{2})',                func: r.setMonth },
  ['M']:      { reg: '(\\d{1,2})',              func: r.setMonth },
  ['DD']:     { reg: '(\\d{2})',                func: r.setDate },
  ['D']:      { reg: '(\\d{1,2})',              func: r.setDate },
  ['HH']:     { reg: '(\\d{2})',                func: r.setHours },
  ['H']:      { reg: '(\\d{1,2})',              func: r.setHours },
  ['hh']:     { reg: '(\\d{2})',                func: r.setHours12 },
  ['h']:      { reg: '(\\d{1,2})',              func: r.setHours12 },
  ['mm']:     { reg: '(\\d{2})',                func: r.setMinutes },
  ['m']:      { reg: '(\\d{1,2})',              func: r.setMinutes },
  ['ss']:     { reg: '(\\d{2})',                func: r.setSec },
  ['s']:      { reg: '(\\d{1,2})',              func: r.setSec },
  ['SSS']:    { reg: '(\\d{3})',                func: r.setMsec },
  ['SS']:     { reg: '(\\d{2})',                func: r.setMsecX10 },
  ['S']:      { reg: '(\\d{1})',                func: r.setMsecX100 },
  ['a']:      { reg: '(a|p)',                   func: r.setAMPM },
  ['A']:      { reg: '(A|P)',                   func: r.setAMPM },
  ['ddd']:    { reg: regDayOfWeekEnglishShort,  func: () => {} },
  ['dddd']:   { reg: regDayOfWeekEnglishLong,   func: () => {} },
  ['MMM']:    { reg: regMonthNameEnglishChar3,  func: r.setMonthEnglishChar3 },
  ['MMMM']:   { reg: regMonthNameEnglishLong,   func: r.setMonthEnglishLong },
  ['Z']:      { reg: '(Z|[+|-]\\d{2}:\\d{2})',  func: r.setTimezoneHH_MM('Z') },
  ['ZZ']:     { reg: '(Z|[+|-]\\d{2}\\d{2})',   func: r.setTimezoneHHMM('Z') },
};

__stringToDateRule.Default = () => defaultRule;
__stringToDateRule.MomentLike = () => momentLikeRule;

export default { __stringToDateRule };
