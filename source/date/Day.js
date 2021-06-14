import { isString, isInteger, isDate, isUndefined } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Day } from './_Day.js';
import { __includes } from '../compare/__includes.js';

/**
 * Day
 */
export const Day = (
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
    if (!__includes([
      'this', 'last', 'next', 'today', 'yesterday', 'tomorrow',
    ], value.toLowerCase())) {
      throw new TypeError(
        `Day args(value:${value}) is not this | last | next`,
      );
    }
  } else if (!isInteger(value)) {
    throw new TypeError(
      `Day args(value:${value}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `Day args(sourceDate:${sourceDate}) is not date`,
    );
  }
  if (!isUndefined(timezoneOffset) && !isInteger(timezoneOffset)) {
    throw new TypeError(
      `Day args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }

  return _Day(value, sourceDate, timezoneOffset);
};

export default { Day };
