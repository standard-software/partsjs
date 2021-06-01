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

export const __stringToDateRule = {};

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

__stringToDateRule.default = [
  ['YYYY',  '(\\d{4})',                                       setYear4],
  ['YY',    '(\\d{2})',                                       setYear2],
  ['MM',    '(\\d{2})',                                       setMonth],
  ['M',     '(\\d{1,2})',                                     setMonth],
  ['DD',    '(\\d{2})',                                       setDate],
  ['D',     '(\\d{1,2})',                                     setDate],
  ['HH',    '(\\d{2})',                                       setHours],
  ['H',     '(\\d{1,2})',                                     setHours],
  ['hh',    '(\\d{2})',                                       setHours12],
  ['h',     '(\\d{1,2})',                                     setHours12],
  ['mm',    '(\\d{2})',                                       setMinutes],
  ['m',     '(\\d{1,2})',                                     setMinutes],
  ['ss',    '(\\d{2})',                                       setSec],
  ['s',     '(\\d{1,2})',                                     setSec],
  ['SSS',   '(\\d{3})',                                       setMsec],
  ['SS',    '(\\d{2})',                                       setMsecX10],
  ['S',     '(\\d{1})',                                       setMsecX100],
  ['aa',    '(am|pm)',                                        setAMPM],
  ['AA',    '(AM|PM)',                                        setAMPM],
  ['a',     '(a|p)',                                          setAMPM],
  ['A',     '(A|P)',                                          setAMPM],
  ['ddd',   `(${__dayOfWeekNames.EnglishShort().join('|')})`, () => {}],
  ['dddd',  `(${__dayOfWeekNames.EnglishLong().join('|')})`,  () => {}],
  ['MMM',   `(${__monthNames.EnglishChar3().join('|')})`,     setMonthEnglishChar3],
  ['MMMM',  `(${__monthNames.EnglishChar4().join('|')})`,     setMonthEnglishChar4],
  ['MMMMM', `(${__monthNames.EnglishLong().join('|')})`,      setMonthEnglishLong],
  ['Z',     '(Z|[+|-]\\d{2}:\\d{2})',                         setTimezoneHH_MM('Z')],
  ['ZZ',    '(Z|[+|-]\\d{2}\\d{2})',                          setTimezoneHHMM('Z')],
];

__stringToDateRule.momentLike = [

];

