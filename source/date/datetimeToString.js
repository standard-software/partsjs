import { isDate, isString, isObject, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { __detetimeToStringFunc } from '../date/__detetimeToStringFunc.js';
import { _datetimeToString } from './_datetimeToString.js';

export const datetimeToString = (
  date,
  format,
  rule = __detetimeToStringFunc.DefaultObject(),
  isLocal = true,
) => {
  if (isObjectParameter(date, 'date, format', 'rule, isLocal')) {
    ({
      date, format, rule = __detetimeToStringFunc.DefaultObject(),
      isLocal = true,
    } = date);
  } else if (isObjectParameter(format, 'format', 'rule, isLocal')) {
    ({ format, rule = __detetimeToStringFunc.DefaultObject(),
      isLocal = true,
    } = format);
  } else if (isObjectParameter(rule, 'rule', 'isLocal')) {
    ({ rule } = rule);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `datetimeToString args(date:${date}) is not date`,
    );
  }
  if (!isString(format)) {
    throw new TypeError(
      `datetimeToString args(format:${format}) is not string`,
    );
  }
  if (!isObject(rule)) {
    throw new TypeError(
      `datetimeToString args(rule:${rule}) is not object`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `datetimeToString args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _datetimeToString(
    date, format, rule, isLocal,
  );
};

export default { datetimeToString };
