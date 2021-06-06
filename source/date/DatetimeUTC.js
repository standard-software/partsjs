/* eslint-disable max-len */
import { isInteger, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _inRange } from '../number/number.js';
import { _Datetime } from './_Datetime.js';

/**
 * Datetime
 */
export const DatetimeUTC = function(
  year = 1970, month = 1, day = 1,
  hour = 0, minute = 0, second = 0, millisecond = 0,
) {
  if (isObjectParameter(year, '', 'year, month, day, hour, minute, second, millisecond', 1)) {
    ({
      year = 1970, month = 1, day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
    } = year);
  } else if (isObjectParameter(month, '', 'month, day, hour, minute, second, millisecond', 1)) {
    ({
      month = 1, day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
    } = month);
  } else if (isObjectParameter(day, '', 'day, hour, minute, second, millisecond', 1)) {
    ({
      day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
    } = day);
  } else if (isObjectParameter(hour, '', 'hour, minute, second, millisecond', 1)) {
    ({
      hour = 0, minute = 0, second = 0, millisecond = 0,
    } = hour);
  } else if (isObjectParameter(minute, '', 'minute, second, millisecond', 1)) {
    ({
      minute = 0, second = 0, millisecond = 0,
    } = minute);
  } else if (isObjectParameter(second, '', 'second, millisecond', 1)) {
    ({
      second = 0, millisecond = 0,
    } = second);
  } else if (isObjectParameter(millisecond, '', 'millisecond', 1)) {
    ({
      millisecond = 0,
    } = millisecond);
  }

  if (!isInteger(year)) {
    throw new TypeError(
      `Datetime args(year:${year}) is not integer`,
    );
  }
  if (!isInteger(month)) {
    throw new TypeError(
      `Datetime args(month:${month}) is not integer`,
    );
  }
  if (!isInteger(day)) {
    throw new TypeError(
      `Datetime args(day:${day}) is not integer`,
    );
  }
  if (!isInteger(hour)) {
    throw new TypeError(
      `Datetime args(hour:${hour}) is not integer`,
    );
  }
  if (!isInteger(minute)) {
    throw new TypeError(
      `Datetime args(minute:${minute}) is not integer`,
    );
  }
  if (!isInteger(second)) {
    throw new TypeError(
      `Datetime args(second:${second}) is not integer`,
    );
  }
  if (!isInteger(millisecond)) {
    throw new TypeError(
      `Datetime args(millisecond:${millisecond}) is not integer`,
    );
  }

  return _DatetimeUTC(
    year, month, day,
    hour, minute, second, millisecond,
  );
};

export default { DatetimeUTC };
