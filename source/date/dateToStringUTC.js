import { isDate, isString, isObject, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dateToStringUTC } from './_dateToStringUTC.js';

export const dateToStringUTC = (
  date,
  format,
  rule = _dateToStringUTC.func.Default(),
) => {
  if (isObjectParameter(date, 'date, format', 'rule')) {
    ({
      date, format, rule = _dateToString.func.Default(),
    } = date);
  } else if (isObjectParameter(format, 'format', 'rule')) {
    ({ format, rule = _dateToString.func.Default(),
    } = format);
  } else if (isObjectParameter(rule, 'rule', '')) {
    ({ rule } = rule);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `dateToStringUTC args(date:${date}) is not date`,
    );
  }
  if (!isString(format)) {
    throw new TypeError(
      `dateToStringUTC args(format:${format}) is not string`,
    );
  }
  if (!isObject(rule)) {
    throw new TypeError(
      `dateToStringUTC args(rule:${rule}) is not object`,
    );
  }

  return _dateToStringUTC(
    date, format, rule,
  );
};

dateToStringUTC.func = _dateToStringUTC.func;

export default { dateToStringUTC };
