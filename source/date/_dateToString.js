/**
 * dateToString
 */
import { __includes } from '../compare/__includes.js';
import { _objectKeys } from '../object/objectKeys.js';
import { _SortFunc } from '../array/_SortFunc.js';
import { __loop } from '../syntax/__loop.js';
import { _replaceAllArray } from '../string/_replaceAllArray.js';
import { isOdd } from '../number/number.js';
import { _includeCount } from '../string/_includeCount.js';
import { __dateToStringRule } from './__dateToStringRule.js';
import { _map } from '../array/_map.js';

export const _dateToString = (
  date, format, timezoneOffset,
  rule = __dateToStringRule.Default(),
) => {
  const existSingleQuote = __includes(format, "'");
  const existDoubleQuote = __includes(format, '"');
  if (existSingleQuote && existDoubleQuote) {
    throw new Error(
      `__dateToString args(format:${format}) exists both singleQuote and doubleQuote`,
    );
  }

  const keys = _objectKeys(rule);
  keys.sort(
    _SortFunc([
      [_SortFunc.order.normal.descending, v => v.length],
    ]),
  );

  const replaceArray = _map(keys,
    key => [key, rule[key].func(date, timezoneOffset)],
  );

  let quoteChar;
  if ((existSingleQuote === false) && (existDoubleQuote === false)) {
    return _replaceAllArray(format, replaceArray);
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }
  if (isOdd(_includeCount(format, quoteChar))) {
    throw new Error(
      `__dateToString args(format:${format}) exists odd Quotes`,
    );
  }

  const formatStrs = format.split(quoteChar);
  for (let i = 0, l = formatStrs.length; i < l; i += 2) {
    formatStrs[i] = _replaceAllArray(formatStrs[i], replaceArray);
  }
  return formatStrs.join('');
};

_dateToString.rule = __dateToStringRule;

export default { _dateToString };
