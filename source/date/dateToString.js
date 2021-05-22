import { isDate, isString, isObject, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dateToString } from './_dateToString.js';

export const dateToString = (
  date,
  format,
  rule = _dateToString.func.DefaultObject(),
  isLocal = true,
) => {
  if (isObjectParameter(date, 'date, format', 'rule, isLocal')) {
    ({
      date, format, rule = _dateToString.func.DefaultObject(),
      isLocal = true,
    } = date);
  } else if (isObjectParameter(format, 'format', 'rule, isLocal')) {
    ({ format, rule = _dateToString.func.DefaultObject(),
      isLocal = true,
    } = format);
  } else if (isObjectParameter(rule, 'rule', 'isLocal')) {
    ({ rule } = rule);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
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
  if (!isObject(rule)) {
    throw new TypeError(
      `dateToString args(rule:${rule}) is not object`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `dateToString args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _dateToString(
    date, format, rule, isLocal,
  );
};

dateToString.func = _dateToString.func;

export default { dateToString };
