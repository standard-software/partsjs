import { isDate, isString, isObject, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dateToString } from './_dateToString.js';

export const dateToString = (
  date,
  format,
  timezoneOffset = (new Date()).getTimezoneOffset(),
  rule = _dateToString.func.Default(),
) => {
  if (isObjectParameter(date, 'date, format', 'timezoneOffset, rule')) {
    ({
      date, format,
      timezoneOffset = date.getTimezoneOffset(),
      rule = _dateToString.func.Default(),
    } = date);
  } else if (isObjectParameter(format, 'format', 'timezoneOffset, rule')) {
    ({
      format,
      timezoneOffset = date.getTimezoneOffset(),
      rule = _dateToString.func.Default(),
    } = format);
  } else if (isObjectParameter(timezoneOffset, 'timezoneOffset', 'rule')) {
    ({
      timezoneOffset,
      rule = _dateToString.func.Default(),
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
  if (!isInteger(timezoneOffset)) {
    throw new TypeError(
      `dateToString args(timezoneOffset:${timezoneOffset}) is not integer`,
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

dateToString.func = _dateToString.func;

export default { dateToString };
