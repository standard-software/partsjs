import { __monthNames } from '../date/__monthNames.js';
import { __includes } from '../compare/__includes.js';
import { _subLength } from '../string/string_common.js';
import { _textsToMinutes } from './_textsToMinutes.js';

let flagTimezone = false;

const datetimeInfo = {
  timezoneMin: 0,
  year: null,
  month: null,
  date: null,
  hours: null,
  minutes: null,
  seconds: null,
  milliseconds: null,
};

const setTimezone     = (date, value) => {
  const [s, h, m] = [
    _subLength(value, 0, 1), _subLength(value, 1, 2), _subLength(value, 4, 2),
  ];
  // console.log(_textsToMinutes([s, h, m]));
  flagTimezone = true;
  datetimeInfo.timezoneMin = _textsToMinutes([s, h, m]);
  // timezone = 540
};
const setYear4        = (date, value) => {
  date.setFullYear(Number(value));
};
const setYear2        = (date, value) => {
  const plusValue = Math.floor((new Date()).getFullYear() / 100) * 100;
  date.setFullYear(Number(value) + plusValue);
};
const _setMonth        = (date, value) => {
  date.setMonth(value);
  if (date.getMonth() !== value) {
    date.setMonth(value);
  }
};
const setMonth        = (date, value) => {
  _setMonth(date, Number(value) - 1);
};
const setMonthEnglishChar3 = (date, value) => {
  _setMonth(date, __monthNames.EnglishChar3().indexOf(value));
};
const setMonthEnglishChar4 = (date, value) => {
  _setMonth(date, __monthNames.EnglishChar4().indexOf(value));
};
const setMonthEnglishLong = (date, value) => {
  _setMonth(date, __monthNames.EnglishLong().indexOf(value));
};
const setDate         = (date, value) => { date.setDate(Number(value)); };
const setHours        = (date, value) => { date.setHours(Number(value)); };

let flagPM = false;
const setAMPM         = (date, value) => {
  // console.log({ date, value, flagPM, if: value.toLowerCase().includes('p') });
  if (__includes(value.toLowerCase(), 'p')) {
    flagPM = true;
  } else {
    flagPM = false;
  }
};
const setHours12      = (date, value) => {
  // console.log({ date, value, flagPM });
  if (flagPM) {
    date.setHours(Number(value) + 12);
  } else {
    date.setHours(Number(value));
  }
};
const setMinutes      = (date, value) => { date.setMinutes(Number(value)); };
const setSec          = (date, value) => { date.setSeconds(Number(value)); };
const setMsec         = (date, value) => { date.setMilliseconds(Number(value)); };
const setMsecX10      = (date, value) => { date.setMilliseconds(Number(value) * 10); };
const setMsecX100     = (date, value) => { date.setMilliseconds(Number(value) * 100); };

export const __stringToDateRule = {};

__stringToDateRule.ruleColumnIndex = {
  format: 0,
  priority: 2,
  function: 3,
  value: 4,
};

__stringToDateRule.initialize = (date) => {
  flagPM = false;
  flagTimezone = false;
  // datetimeInfo.timezoneMin = date.getTimezoneOffset();
  // datetimeInfo.year = date.getFullYear();
  // datetimeInfo.month = date.getMonth();
  // datetimeInfo.date = date.getDate();
  // datetimeInfo.hours = date.getHours();
  // datetimeInfo.minutes = date.getMinutes();
  // datetimeInfo.seconds = date.getSeconds();
  // datetimeInfo.milliseconds = date.getMilliseconds();

};

__stringToDateRule.finalize = (date) => {
  // date.setFullYear(yearValue, monthValue, dateValue);
  // date.setHours(hoursValue, minutesValue, secondsValue, millisecondsValue);
};

__stringToDateRule.default = [
  ['YYYY',  '(\\d{4})',     1, setYear4],
  ['YY',    '(\\d{2})',     1, setYear2],
  ['MM',    '(\\d{2})',     2, setMonth],
  ['M',     '(\\d{1,2})',   2, setMonth],
  ['DD',    '(\\d{2})',     3, setDate],
  ['D',     '(\\d{1,2})',   3, setDate],
  ['HH',    '(\\d{2})',     5, setHours],
  ['H',     '(\\d{1,2})',   5, setHours],
  ['hh',    '(\\d{2})',     5, setHours12],
  ['h',     '(\\d{1,2})',   5, setHours12],
  ['mm',    '(\\d{2})',     6, setMinutes],
  ['m',     '(\\d{1,2})',   6, setMinutes],
  ['ss',    '(\\d{2})',     7, setSec],
  ['s',     '(\\d{1,2})',   7, setSec],
  ['SSS',   '(\\d{3})',     8, setMsec],
  ['SS',    '(\\d{2})',     8, setMsecX10],
  ['S',     '(\\d{1})',     8, setMsecX100],
  ['aa',    '(am|pm)',      4, setAMPM],
  ['AA',    '(AM|PM)',      4, setAMPM],
  ['a',     '(a|p)',        4, setAMPM],
  ['A',     '(A|P)',        4, setAMPM],
  ['Z',     '([+|-]\\d{2}:\\d{2})',        0, setTimezone],
  ['ddd',   '([a-zA-Z]{3})',  -1, () => {}],
  ['dddd',  '',   -1, () => {}],
  ['MMM',   `(${__monthNames.EnglishChar3().join('|')})`,   2, setMonthEnglishChar3],
  ['MMMM',  `(${__monthNames.EnglishChar4().join('|')})`,   2, setMonthEnglishChar4],
  ['MMMMM', `(${__monthNames.EnglishLong().join('|')})`,    2, setMonthEnglishLong],
];

__stringToDateRule.momentLike = [

];

