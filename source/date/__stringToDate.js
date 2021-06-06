/**
 * stringToDate
 */
import { __includes } from '../compare/__includes.js';
import { _objectKeys } from '../object/objectKeys.js';
import { _SortFunc } from '../array/_SortFunc.js';
import { __loop } from '../syntax/__loop.js';
import { _replaceAllArray } from '../string/_replaceAllArray.js';
import { _includeCount } from '../string/_includeCount.js';
import { __stringToDateRule } from './__stringToDateRule.js';
import { InvalidDate } from './InvalidDate.js';
import { _dateToString } from './_dateToString.js';
import { _escapeRegExp } from '../string/_escapeRegExp.js';
import { _ThisYear } from './_ThisYear.js';

export const __stringToDate = (
  str, format,
  timezoneOffset = (new Date()).getTimezoneOffset(),
  sourceDate = _ThisYear(true),
  rule = __stringToDateRule.Default(),
) => {
  __stringToDateRule.initialize(sourceDate, timezoneOffset);

  const keys = _objectKeys(rule);
  keys.sort(
    _SortFunc([
      [_SortFunc.order.normal.descending, v => v.length],
    ]),
  );
  const escapeRegExpFormat = _escapeRegExp(format);
  const replaceResult = _replaceAllArray(
    escapeRegExpFormat,
    keys.map(key => [key, rule[key].reg]),
    true,
  );
  const replaceInfoItems = replaceResult.replaceInfo.map(e => rule[keys[e.searchIndex]]);

  const matchResult = str.match(new RegExp(`${replaceResult.result}`));
  if (!Array.isArray(matchResult)) {
    return InvalidDate();
  }
  const [match, ...valueItems] = matchResult;

  if (replaceInfoItems.length !== valueItems.length) {
    return InvalidDate();
  }
  replaceInfoItems.forEach((item, i) => {
    item.value = valueItems[i];
  });

  const result = new Date(sourceDate.getTime());
  for (const infoItem of replaceInfoItems) {
    infoItem.func(infoItem.value);
  }
  const { timezoneOffset: timezoneOffsetMin } = __stringToDateRule.finalize(result);

  if (_dateToString(
    result, format, timezoneOffsetMin, rule.toStringRule,
  ) === str) {
    return result;
  } else {
    return InvalidDate();
  }

};

__stringToDate.rule = __stringToDateRule;

export default { __stringToDate };
