/**
 * stringToDate
 */
import { __includes } from '../compare/__includes.js';
import { _objectKeys } from '../object/objectKeys.js';
import { _SortFunc } from '../array/_SortFunc.js';
import { __loop } from '../syntax/__loop.js';
import { _replaceAllArray } from '../string/_replaceAllArray.js';
import { _includeCount } from '../string/_includeCount.js';
import { isOdd } from '../number/number.js';
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
  const existSingleQuote = __includes(format, "'");
  const existDoubleQuote = __includes(format, '"');
  if (existSingleQuote && existDoubleQuote) {
    throw new Error(
      `__stringToDate args(format:${format}) exists both singleQuote and doubleQuote`,
    );
  }

  __stringToDateRule.initialize(sourceDate, timezoneOffset);

  const keys = _objectKeys(rule);
  keys.sort(
    _SortFunc([
      [_SortFunc.order.normal.descending, v => v.length],
    ]),
  );

  const replaceArray = keys.map(key => [key, rule[key].reg]);

  let quoteChar = '';
  let replaceResult;
  if ((existSingleQuote === false) && (existDoubleQuote === false)) {
    replaceResult = _replaceAllArray(
      _escapeRegExp(format), replaceArray, true,
    );
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }
  if (quoteChar !== '') {
    if (isOdd(_includeCount(format, quoteChar))) {
      throw new Error(
        `__dateToString args(format:${format}) exists odd Quotes`,
      );
    }
    const formatStrs = format.split(quoteChar);
    replaceResult = { result: '', replaceInfo: [] };
    for (let i = 0, l = formatStrs.length; i < l; i += 2) {
      const replaceResult1 = _replaceAllArray(
        _escapeRegExp(formatStrs[i]), replaceArray, true,
      );
      formatStrs[i] = replaceResult1.result;
      replaceResult.replaceInfo = [
        ...replaceResult.replaceInfo,
        ...replaceResult1.replaceInfo,
      ];
    }
    replaceResult.result = formatStrs.join('');
  }

  const replaceInfoItems = replaceResult.replaceInfo.map(
    e => rule[keys[e.searchIndex]],
  );

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
  const timezoneOffsetMin = __stringToDateRule.finalize(result);

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
