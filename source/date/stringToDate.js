import { isDate, isString, isObject, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _ThisYear } from './_ThisYear.js';
import { __stringToDateRule } from './__stringToDateRule.js';
import { _stringToDate } from './_stringToDate.js';

export const stringToDate = (
  str, format,
  timezoneOffset = (new Date()).getTimezoneOffset(),
  sourceDate = _ThisYear(true),
  rule = __stringToDateRule.Default(),
) => {
  if (isObjectParameter(str, 'str, format', 'timezoneOffset, sourceDate, rule')) {
    ({
      str, format,
      timezoneOffset = (new Date()).getTimezoneOffset(),
      sourceDate = _ThisYear(),
      rule = __stringToDateRule.Default(),
    } = str);
  } else if (isObjectParameter(format, 'format', 'timezoneOffset, sourceDate, rule')) {
    ({
      format,
      timezoneOffset = (new Date()).getTimezoneOffset(),
      sourceDate = _ThisYear(),
      rule = __stringToDateRule.Default(),
    } = format);
  } else if (isObjectParameter(timezoneOffset, 'timezoneOffset', 'sourceDate, rule')) {
    ({
      timezoneOffset,
      sourceDate = _ThisYear(),
      rule = _dateToString.func.Default(),
    } = timezoneOffset);
  } else if (isObjectParameter(sourceDate, 'sourceDate', 'rule')) {
    ({
      sourceDate,
      rule = __stringToDateRule.Default(),
    } = rule);
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

  return _stringToDate(str, format, timezoneOffset, sourceDate);
};

export default { stringToDate };
