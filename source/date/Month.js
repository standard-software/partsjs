import { isString, isInteger, isDate, isUndefined } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Month } from './_Month.js';
import { __includes } from '../compare/__includes.js';

/**
 * Month
 */
export const Month = (
  value,
  sourceDate = (new Date()),
  timezoneOffset,
) => {
  if (isObjectParameter(value, 'value', 'sourceDate, timezoneOffset')) {
    ({
      value,
      sourceDate = (new Date()),
      timezoneOffset,
    } = value);
  } else if (isObjectParameter(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    ({
      sourceDate = (new Date()),
      timezoneOffset,
    } = sourceDate);
  } else if (isObjectParameter(timezoneOffset, 'timezoneOffset', '')) {
    ({ timezoneOffset } = timezoneOffset);
  }

  if (isString(value)) {
    if (!__includes(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError(
        `Month args(value:${value}) is not this | last | next`,
      );
    }
  } else if (!isInteger(value)) {
    throw new TypeError(
      `Month args(value:${value}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `Month args(sourceDate:${sourceDate}) is not date`,
    );
  }
  if (!isUndefined(timezoneOffset) && !isInteger(timezoneOffset)) {
    throw new TypeError(
      `Month args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }

  return _Month(value, sourceDate, timezoneOffset);
};

export default { Month };
