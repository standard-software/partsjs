import { isDate, isString, isObject } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { __detetimeToStringFunc } from '../date/__detetimeToStringFunc.js';
import { _datetimeToString } from './_datetimeToString.js';

export const datetimeToString = (
  date, format, rule = __detetimeToStringFunc.DefaultObject(),
) => {
  if (isObjectParameter(date, 'date, format', 'rule')) {
    ({ date, format, rule = __detetimeToStringFunc.DefaultObject() } = date);
  } else if (isObjectParameter(format, 'format', 'rule')) {
    ({ format, rule = __detetimeToStringFunc.DefaultObject() } = format);
  } else if (isObjectParameter(rule, 'rule')) {
    ({ rule } = rule);
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

  return _datetimeToString(
    date, format, rule,
  );
};

export default { datetimeToString };
