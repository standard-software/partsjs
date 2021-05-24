/**
 * stringToDate
 */
import { __includes } from '../compare/__includes.js';
import { _objectKeys } from '../object/objectKeys.js';
import { _SortFunc } from '../array/_SortFunc.js';
import { __loop } from '../syntax/__loop.js';
import { _replaceAllArray } from '../string/_replaceAllArray.js';
import { isOdd } from '../number/number.js';
import { _includeCount } from '../string/_includeCount.js';
import { INVALID_DATE } from './INVALID_DATE.js';
import { _dateToString } from './_dateToString.js';

export const _stringToDate = (str, format) => {

  const setYear4    = (date, value) => date.setFullYear(parseInt(value));
  const setYear2    = (date, value) => {
    const plusValue = Math.floor((new Date()).getFullYear() / 100) * 100;
    date.setFullYear(parseInt(value) + plusValue);
  };
  const setMonth    = (date, value) => date.setMonth(parseInt(value) - 1);
  const setDate     = (date, value) => date.setDate(parseInt(value));
  const setHours    = (date, value) => date.setHours(parseInt(value));
  const setMinutes  = (date, value) => date.setMinutes(parseInt(value));
  const setSeconds  = (date, value) => date.setSeconds(parseInt(value));

  const replaceTable = [
    ['YYYY',  '(\\d{4})',    1, setYear4],
    ['YY',    '(\\d{2})',    1, setYear2],
    ['MM',    '(\\d{2})',    2, setMonth],
    ['M',     '(\\d{1,2})',  2, setMonth],
    ['DD',    '(\\d{2})',    3, setDate],
    ['D',     '(\\d{1,2})',  3, setDate],
    ['HH',    '(\\d{2})',    4, setHours],
    ['H',     '(\\d{1,2})',  4, setHours],
    ['mm',    '(\\d{2})',    5, setMinutes],
    ['m',     '(\\d{1,2})',  5, setMinutes],
    ['ss',    '(\\d{2})',    6, setSeconds],
    ['s',     '(\\d{1,2})',  6, setSeconds],
    ['ddd',   '',   -1, () => {}],
  ];

  const replaceTextSortFunc = (a, b) => b[0].length - a[0].length;
  const setDatePrioritySortFunc = (a, b) => a[2] - b[2];

  const table = [...replaceTable];
  table.sort(replaceTextSortFunc);
  const replaceResult = _replaceAllArray(
    format,
    table.map(([text, reg]) => [text, reg]),
    true,
  );
  const replaceInfoItems = replaceResult.replaceInfo.map(e => table[e.searchIndex]);

  const matchResult = str.match(new RegExp(`${replaceResult.result}`));
  // console.log('4', { replaceResult, matchResult });
  if (!Array.isArray(matchResult)) {
    return INVALID_DATE;
  }
  const [match, ...valueItems] = matchResult;

  // console.log('3', replaceInfoItems.length, valueItems.length);
  if (replaceInfoItems.length !== valueItems.length) {
    return INVALID_DATE;
  }
  replaceInfoItems.forEach((e, i) => {
    e.push(Number(valueItems[i]));
  });
  replaceInfoItems.sort(setDatePrioritySortFunc);
  // console.log('2', replaceInfoItems);

  const now = new Date();
  const result = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  for (const replaceInfoItem of replaceInfoItems) {
    const setDateFunc = replaceInfoItem[3];
    const setValue = replaceInfoItem[4];
    setDateFunc(result, setValue);
  }

  // console.log('1', result.toString(), result, format, _dateToString(result, format));
  if (_dateToString(result, format) === str) {
    return result;
  } else {
    return INVALID_DATE;
  }
};

export default { _stringToDate };
