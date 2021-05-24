const setYear4        = (date, value) => date.setFullYear(Number(value));
const setYear2        = (date, value) => {
  const plusValue = Math.floor((new Date()).getFullYear() / 100) * 100;
  date.setFullYear(Number(value) + plusValue);
};
const setMonth        = (date, value) => date.setMonth(Number(value) - 1);
const setDate         = (date, value) => date.setDate(Number(value));
const setHours        = (date, value) => date.setHours(Number(value));
const setMinutes      = (date, value) => date.setMinutes(Number(value));
const setSeconds      = (date, value) => date.setSeconds(Number(value));
const setMilliseconds = (date, value) => date.setMilliseconds(Number(value));

export const __stringToDateRule = {};

__stringToDateRule.ruleColumnIndex = {
  format: 0,
  priority: 2,
  function: 3,
  value: 4,
};

__stringToDateRule.default = [
  ['YYYY',  '(\\d{4})',     1, setYear4],
  ['YY',    '(\\d{2})',     1, setYear2],
  ['MM',    '(\\d{2})',     2, setMonth],
  ['M',     '(\\d{1,2})',   2, setMonth],
  ['DD',    '(\\d{2})',     3, setDate],
  ['D',     '(\\d{1,2})',   3, setDate],
  ['HH',    '(\\d{2})',     4, setHours],
  ['H',     '(\\d{1,2})',   4, setHours],
  ['mm',    '(\\d{2})',     5, setMinutes],
  ['m',     '(\\d{1,2})',   5, setMinutes],
  ['ss',    '(\\d{2})',     6, setSeconds],
  ['s',     '(\\d{1,2})',   6, setSeconds],
  ['SSS',   '(\\d{3})',     7, setMilliseconds],
  ['SS',    '(\\d{2})',     7, setMilliseconds],
  ['S',     '(\\d{1})',     7, setMilliseconds],
  ['aa',    '',   -1, () => {}],
  ['AA',    '',   -1, () => {}],
  ['a',     '',   -1, () => {}],
  ['A',     '',   -1, () => {}],
  ['ddd',   '',   -1, () => {}],
  ['dddd',  '',   -1, () => {}],
  ['MMM',   '',   -1, () => {}],
  ['MMMM',  '',   -1, () => {}],
  ['MMMMM', '',   -1, () => {}],
];

__stringToDateRule.momentLike = [

];

