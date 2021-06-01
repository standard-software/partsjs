/**
 * stringToDate
 */
import { isNull } from '../type/type.js';
import { __includes } from '../compare/__includes.js';
import { _objectKeys } from '../object/objectKeys.js';
import { _SortFunc } from '../array/_SortFunc.js';
import { __loop } from '../syntax/__loop.js';
import { _replaceAllArray } from '../string/_replaceAllArray.js';
import { isOdd } from '../number/number.js';
import { _includeCount } from '../string/_includeCount.js';
import { __stringToDateRule } from './__stringToDateRule.js';
import { INVALID_DATE } from './INVALID_DATE.js';
import { _dateToString } from './_dateToString.js';
import { _escapeRegExp } from '../string/_escapeRegExp.js';
import { _ThisYear } from './_ThisYear.js';

export const _stringToDate = (
  str, format,
  sourceDate = _ThisYear(),
  formatRule = __stringToDateRule.default,
) => {
  __stringToDateRule.initialize(sourceDate);
  const col = __stringToDateRule.ruleColumnIndex;

  const replaceTextSortFunc = (a, b) => b[col.format].length - a[col.format].length;
  const setDatePrioritySortFunc = (a, b) => a[col.priority] - b[col.priority];

  const table = [...formatRule];
  table.sort(replaceTextSortFunc);
  const escapeRegExpFormat = _escapeRegExp(format);
  // console.log({ escapeRegExpFormat });
  const replaceResult = _replaceAllArray(
    escapeRegExpFormat,
    table.map(([text, reg]) => [text, reg]),
    true,
  );
  const replaceInfoItems = replaceResult.replaceInfo.map(e => [...table[e.searchIndex]]);

  const matchResult = str.match(new RegExp(`${replaceResult.result}`));
  // console.log({ escapeRegExpFormat, replaceInfoItems, replaceResult, matchResult });
  if (!Array.isArray(matchResult)) {
    return INVALID_DATE;
  }
  const [match, ...valueItems] = matchResult;

  // console.log(replaceInfoItems.length, valueItems.length);
  if (replaceInfoItems.length !== valueItems.length) {
    return INVALID_DATE;
  }
  replaceInfoItems.forEach((e, i) => {
    e.push(valueItems[i]);
  });
  replaceInfoItems.sort(setDatePrioritySortFunc);
  // console.log({ replaceInfoItems });

  const result = new Date(sourceDate.getTime());
  for (const replaceInfoItem of replaceInfoItems) {
    const setDateFunc = replaceInfoItem[col.function];
    const setValue = replaceInfoItem[col.value];
    setDateFunc(result, setValue);
    // console.log(result.toString());
  }
  const { timezoneOffset } = __stringToDateRule.finalize(result);

  // return result;
  // console.log(
  //   timezoneOffset,
  //   _dateToString(result, format),
  //   _dateToString(result, format, timezoneOffset),
  //   str,
  // );

  if (isNull(timezoneOffset)) {
    if (_dateToString(result, format) === str) {
      return result;
    } else {
      return INVALID_DATE;
    }
  } else {
    if (_dateToString(result, format, timezoneOffset) === str) {
      return result;
    } else {
      return INVALID_DATE;
    }
  }

};

export default { _stringToDate };
