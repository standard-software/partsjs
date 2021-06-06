/* eslint-disable max-len */
import { isInteger, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _inRange } from '../number/number.js';
import { _Datetime } from './_Datetime.js';

/**
 * Datetime
 */
export const Datetime = function(
  year = 1970, month = 1, day = 1,
  hour = 0, minute = 0, second = 0, millisecond = 0,
  timezoneOffset = (new Date()).getTimezoneOffset(),
) {
  if (isObjectParameter(year, '', 'year, month, day, hour, minute, second, millisecond, timezoneOffset', 1)) {
    ({
      year = 1970, month = 1, day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = year);
  } else if (isObjectParameter(month, '', 'month, day, hour, minute, second, millisecond, timezoneOffset', 1)) {
    ({
      month = 1, day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = month);
  } else if (isObjectParameter(day, '', 'day, hour, minute, second, millisecond, timezoneOffset', 1)) {
    ({
      day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = day);
  } else if (isObjectParameter(hour, '', 'hour, minute, second, millisecond, timezoneOffset', 1)) {
    ({
      hour = 0, minute = 0, second = 0, millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = hour);
  } else if (isObjectParameter(minute, '', 'minute, second, millisecond, timezoneOffset', 1)) {
    ({
      minute = 0, second = 0, millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = minute);
  } else if (isObjectParameter(second, '', 'second, millisecond, timezoneOffset', 1)) {
    ({
      second = 0, millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = second);
  } else if (isObjectParameter(millisecond, '', 'millisecond, timezoneOffset', 1)) {
    ({
      millisecond = 0,
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = millisecond);
  } else if (isObjectParameter(timezoneOffset, '', 'timezoneOffset', 1)) {
    ({
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = timezoneOffset);
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
  if (!isInteger(timezoneOffset)) {
    throw new TypeError(
      `Datetime args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }

  return _Datetime(
    year, month, day,
    hour, minute, second, millisecond,
    timezoneOffset,
  );
};

export default { Datetime };
