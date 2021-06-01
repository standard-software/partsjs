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

const setTimezoneHH_MM     = (UTCText) => (date, value) => {
  if (value === UTCText) {
    datetimeInfo.timezoneOffset = null;
  } else {
    const [s, h, m] = [
      _subLength(value, 0, 1), _subLength(value, 1, 2), _subLength(value, 4, 2),
    ];
    datetimeInfo.timezoneOffset = -1 * _textsToMinutes([s, h, m]);
  }
};
const setTimezoneHHMM     = (UTCText) => (date, value) => {
  if (value === UTCText) {
    datetimeInfo.timezoneOffset = null;
  } else {
    const [s, h, m] = [
      _subLength(value, 0, 1), _subLength(value, 1, 2), _subLength(value, 3, 2),
    ];
    datetimeInfo.timezoneOffset = -1 * _textsToMinutes([s, h, m]);
  }
};

const setYear4        = (date, value) => {
  datetimeInfo.year = Number(value);
};
const setYear2        = (date, value) => {
  const plusValue = Math.floor(datetimeInfo.year / 100) * 100;
  datetimeInfo.year = Number(value) + plusValue;
};

const setMonth = (date, value) => {
  datetimeInfo.month = Number(value) - 1;
};
const setMonthEnglishChar3 = (date, value) => {
  datetimeInfo.month = __monthNames.EnglishChar3().indexOf(value);
};
const setMonthEnglishChar4 = (date, value) => {
  datetimeInfo.month = __monthNames.EnglishChar4().indexOf(value);
};
const setMonthEnglishLong = (date, value) => {
  datetimeInfo.month = __monthNames.EnglishLong().indexOf(value);
};

const setDate = (date, value) => {
  datetimeInfo.date = Number(value);
};

const setHours = (date, value) => {
  datetimeInfo.hours = Number(value);
};

const setAMPM = (date, value) => {
  // console.log({ date, value, flagPM, if: value.toLowerCase().includes('p') });
  if (__includes(value.toLowerCase(), 'p')) {
    flagPM = true;
  }
};

const setHours12      = (date, value) => {
  datetimeInfo.hours = Number(value);
};

const setMinutes = (date, value) => {
  datetimeInfo.minutes = Number(value);
};

const setSec = (date, value) => {
  datetimeInfo.seconds = Number(value);
};

const setMsec = (date, value) => {
  datetimeInfo.milliseconds = Number(value);
};
const setMsecX10 = (date, value) => {
  datetimeInfo.milliseconds = Number(value) * 10;
};
const setMsecX100 = (date, value) => {
  datetimeInfo.milliseconds = Number(value) * 100;
};

export const __stringToDateRule = {
  setYear4,
  setYear2,
  setMonth,
  setMonth,
  setDate,
  setDate,
  setHours,
  setHours,
  setHours12,
  setHours12,
  setMinutes,
  setMinutes,
  setSec,
  setSec,
  setMsec,
  setMsecX10,
  setMsecX100,
  setAMPM,
  setAMPM,
  setAMPM,
  setAMPM,
  setMonthEnglishChar3,
  setMonthEnglishChar4,
  setMonthEnglishLong,
  setTimezoneHH_MM,
  setTimezoneHHMM,
};

__stringToDateRule.ruleColumnIndex = {
  format: 0,
  function: 2,
  value: 3,
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
  // console.log({ year, month, date, hours, minutes, seconds, milliseconds });

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

const defaultRule = [
  ['YYYY',  '(\\d{4})',                                       r.setYear4],
  ['YY',    '(\\d{2})',                                       r.setYear2],
  ['MM',    '(\\d{2})',                                       r.setMonth],
  ['M',     '(\\d{1,2})',                                     r.setMonth],
  ['DD',    '(\\d{2})',                                       r.setDate],
  ['D',     '(\\d{1,2})',                                     r.setDate],
  ['HH',    '(\\d{2})',                                       r.setHours],
  ['H',     '(\\d{1,2})',                                     r.setHours],
  ['hh',    '(\\d{2})',                                       r.setHours12],
  ['h',     '(\\d{1,2})',                                     r.setHours12],
  ['mm',    '(\\d{2})',                                       r.setMinutes],
  ['m',     '(\\d{1,2})',                                     r.setMinutes],
  ['ss',    '(\\d{2})',                                       r.setSec],
  ['s',     '(\\d{1,2})',                                     r.setSec],
  ['SSS',   '(\\d{3})',                                       r.setMsec],
  ['SS',    '(\\d{2})',                                       r.setMsecX10],
  ['S',     '(\\d{1})',                                       r.setMsecX100],
  ['aa',    '(am|pm)',                                        r.setAMPM],
  ['AA',    '(AM|PM)',                                        r.setAMPM],
  ['a',     '(a|p)',                                          r.setAMPM],
  ['A',     '(A|P)',                                          r.setAMPM],
  ['ddd',   `(${__dayOfWeekNames.EnglishShort().join('|')})`, () => {}],
  ['dddd',  `(${__dayOfWeekNames.EnglishLong().join('|')})`,  () => {}],
  ['MMM',   `(${__monthNames.EnglishChar3().join('|')})`,     r.setMonthEnglishChar3],
  ['MMMM',  `(${__monthNames.EnglishChar4().join('|')})`,     r.setMonthEnglishChar4],
  ['MMMMM', `(${__monthNames.EnglishLong().join('|')})`,      r.setMonthEnglishLong],
  ['Z',     '(Z|[+|-]\\d{2}:\\d{2})',                         r.setTimezoneHH_MM('Z')],
  ['ZZ',    '(Z|[+|-]\\d{2}\\d{2})',                          r.setTimezoneHHMM('Z')],
];

const momentLikeRule = [

];

__stringToDateRule.Default = () => defaultRule;

export default { __stringToDateRule };
