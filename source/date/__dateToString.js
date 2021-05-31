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

export const __dateToString = (
  date, format, formatRule = __dateToStringRule.Default(),
  isLocal = true,
) => {
  const existSingleQuote = __includes(format, "'");
  const existDoubleQuote = __includes(format, '"');
  if ((existSingleQuote) && (existDoubleQuote)) {
    throw new Error(
      `__dateToString args(format:${format}) exists both singleQuote and doubleQuote`,
    );
  }

  const timezoneOffsetMin = isLocal === true ? date.getTimezoneOffset() : null;

  const keys = _objectKeys(formatRule);
  keys.sort(
    _SortFunc([
      [_SortFunc.order.normal.descending, v => v.length],
    ]),
  );

  const replaceArray = [];
  __loop(keys)((value, index) => {
    replaceArray.push([value, formatRule[value](date, timezoneOffsetMin)]);
  });

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

__dateToString.func = __dateToStringRule;

export const _dateToString = __dateToString;

export default { _dateToString, __dateToString };
