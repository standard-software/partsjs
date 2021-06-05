import { isDate, isString, isObject, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _ThisYear } from './_ThisYear.js';
import { __stringToDateRule } from './__stringToDateRule.js';
import { _stringToDateUTC } from './_stringToDateUTC.js';

export const stringToDate = (
  str, format,
  sourceDate = _ThisYear(true),
  rule = __stringToDateRule.Default(),
) => {
  if (isObjectParameter(str, 'str, format', 'sourceDate, rule')) {
    ({
      str, format,
      timezoneOffset = (new Date()).getTimezoneOffset(),
      sourceDate = _ThisYear(),
      rule = __stringToDateRule.Default(),
    } = str);
  } else if (isObjectParameter(format, 'format', 'sourceDate, rule')) {
    ({
      format,
      timezoneOffset = (new Date()).getTimezoneOffset(),
      sourceDate = _ThisYear(),
      rule = __stringToDateRule.Default(),
    } = format);
  } else if (isObjectParameter(sourceDate, '', 'sourceDate, rule', 1)) {
    ({
      sourceDate = _ThisYear(),
      rule = __stringToDateRule.Default(),
    } = sourceDate);
  } else if (isObjectParameter(rule, 'rule')) {
    ({ rule } = rule);
  }

  if (!isString(str)) {
    throw new TypeError(
      `stringToDate args(str:${str}) is not string`,
    );
  }
  if (!isString(format)) {
    throw new TypeError(
      `stringToDate args(format:${format}) is not string`,
    );
  }
  if (!isInteger(timezoneOffset)) {
    throw new TypeError(
      `stringToDate args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `stringToDate args(sourceDate:${sourceDate}) is not date`,
    );
  }
  if (!isObject(rule)) {
    throw new TypeError(
      `stringToDate args(rule:${rule}) is not object`,
    );
  }

  return _stringToDateUTC(str, format, sourceDate, rule);
};

stringToDate.rule = _stringToDateUTC.rule;

export default { stringToDate };
