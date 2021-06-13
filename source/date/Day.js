import { isString, isInteger, isDate } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Day } from './_Day.js';
import { __includes } from '../compare/__includes.js';

/**
 * Day
 */
export const Day = (
  value,
  sourceDate = (new Date()),
  timezoneOffset = (new Date()).getTimezoneOffset(),
) => {
  if (isObjectParameter(value, 'value', 'sourceDate, timezoneOffset')) {
    ({
      value,
      sourceDate = (new Date()),
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = value);
  } else if (isObjectParameter(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    ({
      sourceDate = (new Date()),
      timezoneOffset = (new Date()).getTimezoneOffset(),
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
  if (!isInteger(timezoneOffset)) {
    throw new TypeError(
      `Day args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }

  return _Day(value, sourceDate, timezoneOffset);
};

export default { Day };
