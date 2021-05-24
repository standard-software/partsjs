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
import { __stringToDateRule } from './__stringToDateRule.js';
import { INVALID_DATE } from './INVALID_DATE.js';
import { _dateToString } from './_dateToString.js';

export const _stringToDate = (
  str, format, formatRule = __stringToDateRule.default,
) => {
  const col = __stringToDateRule.ruleColumnIndex;

  const replaceTextSortFunc = (a, b) => b[col.format].length - a[col.format].length;
  const setDatePrioritySortFunc = (a, b) => a[col.priority] - b[col.priority];

  const table = [...formatRule];
  table.sort(replaceTextSortFunc);
  const replaceResult = _replaceAllArray(
    format,
    table.map(([text, reg]) => [text, reg]),
    true,
  );
  const replaceInfoItems = replaceResult.replaceInfo.map(e => [...table[e.searchIndex]]);

  const matchResult = str.match(new RegExp(`${replaceResult.result}`));
  if (!Array.isArray(matchResult)) {
    return INVALID_DATE;
  }
  const [match, ...valueItems] = matchResult;

  if (replaceInfoItems.length !== valueItems.length) {
    return INVALID_DATE;
  }
  replaceInfoItems.forEach((e, i) => {
    e.push(valueItems[i]);
  });
  replaceInfoItems.sort(setDatePrioritySortFunc);

  const now = new Date();
  const result = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  for (const replaceInfoItem of replaceInfoItems) {
    const setDateFunc = replaceInfoItem[col.function];
    const setValue = replaceInfoItem[col.value];
    setDateFunc(result, setValue);
  }

  if (_dateToString(result, format) === str) {
    return result;
  } else {
    return INVALID_DATE;
  }
};

export default { _stringToDate };
