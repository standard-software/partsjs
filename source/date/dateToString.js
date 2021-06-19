import {
  isDate, isString, isObject, isNumber, isUndefined,
} from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dateToString } from './_dateToString.js';

export const dateToString = (
  date,
  format,
  timezoneOffset,
  rule = _dateToString.rule.Default(),
) => {
  if (isObjectParameter(date, 'date, format', 'timezoneOffset, rule')) {
    ({
      date, format,
      timezoneOffset,
      rule = _dateToString.rule.Default(),
    } = date);
  } else if (isObjectParameter(format, 'format', 'timezoneOffset, rule')) {
    ({
      format,
      timezoneOffset,
      rule = _dateToString.rule.Default(),
    } = format);
  } else if (isObjectParameter(timezoneOffset, 'timezoneOffset', 'rule')) {
    ({
      timezoneOffset,
      rule = _dateToString.rule.Default(),
    } = timezoneOffset);
  } else if (isObjectParameter(rule, 'rule')) {
    ({ rule } = rule);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `dateToString args(date:${date}) is not date`,
    );
  }
  if (!isString(format)) {
    throw new TypeError(
      `dateToString args(format:${format}) is not string`,
    );
  }
  if (!isUndefined(timezoneOffset) && !isNumber(timezoneOffset)) {
    throw new TypeError(
      `dateToString args(timezoneOffset:${timezoneOffset}) is not number`,
    );
  }
  if (!isObject(rule)) {
    throw new TypeError(
      `dateToString args(rule:${rule}) is not object`,
    );
  }

  return _dateToString(
    date, format, timezoneOffset, rule,
  );
};

dateToString.rule = _dateToString.rule;

export default { dateToString };
