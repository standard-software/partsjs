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
  rule = __stringToDateRule.Default(),
) => {
  __stringToDateRule.initialize(sourceDate);

  const keys = _objectKeys(rule);
  keys.sort(
    _SortFunc([
      [_SortFunc.order.normal.descending, v => v.length],
    ]),
  );
  const escapeRegExpFormat = _escapeRegExp(format);
  // console.log({ escapeRegExpFormat });
  const replaceResult = _replaceAllArray(
    escapeRegExpFormat,
    keys.map(key => [key, rule[key].reg]),
    true,
  );
  // console.log({ replaceResult });
  const replaceInfoItems = replaceResult.replaceInfo.map(e => rule[keys[e.searchIndex]]);

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
  replaceInfoItems.forEach((item, i) => {
    item.value = valueItems[i];
  });
  // console.log({ replaceInfoItems });

  const result = new Date(sourceDate.getTime());
  for (const infoItem of replaceInfoItems) {
    infoItem.func(infoItem.value);
    // console.log(result.toString());
  }
  const { timezoneOffset } = __stringToDateRule.finalize(result);

  // return result;

  // console.log(
  //   timezoneOffset,
  //   _dateToString(result, format, timezoneOffset),
  //   str,
  // );

  if (_dateToString(result, format, timezoneOffset) === str) {
    return result;
  } else {
    return INVALID_DATE;
  }

};

export default { _stringToDate };
