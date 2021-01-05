/* eslint-disable max-len */
import { isInteger, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _inRange } from '../number/number.js';
import { _DateTime } from './_DateTime.js';

/**
 * DateTime
 */
export const DateTime = function(
  year = 1970, month = 1, day = 1,
  hour = 0, minute = 0, second = 0, millisecond = 0,
  isLocal = true,
) {
  if (isObjectParameter(year, '', 'year, month, day, hour, minute, second, millisecond, isLocal', 1)) {
    ({
      year = 1970, month = 1, day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
      isLocal = true,
    } = year);
  } else if (isObjectParameter(month, '', 'month, day, hour, minute, second, millisecond, isLocal', 1)) {
    ({
      month = 1, day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
      isLocal = true,
    } = month);
  } else if (isObjectParameter(day, '', 'day, hour, minute, second, millisecond, isLocal', 1)) {
    ({
      day = 1,
      hour = 0, minute = 0, second = 0, millisecond = 0,
      isLocal = true,
    } = day);
  } else if (isObjectParameter(hour, '', 'hour, minute, second, millisecond, isLocal', 1)) {
    ({
      hour = 0, minute = 0, second = 0, millisecond = 0,
      isLocal = true,
    } = hour);
  } else if (isObjectParameter(minute, '', 'minute, second, millisecond, isLocal', 1)) {
    ({
      minute = 0, second = 0, millisecond = 0,
      isLocal = true,
    } = minute);
  } else if (isObjectParameter(second, '', 'second, millisecond, isLocal', 1)) {
    ({
      second = 0, millisecond = 0,
      isLocal = true,
    } = second);
  } else if (isObjectParameter(millisecond, '', 'millisecond, isLocal', 1)) {
    ({
      millisecond = 0,
      isLocal = true,
    } = millisecond);
  } else if (isObjectParameter(isLocal, '', 'isLocal', 1)) {
    ({
      isLocal = true,
    } = isLocal);
  }

  if (!isInteger(year)) {
    throw new TypeError(
      `DateTime args(year:${year}) is not integer`,
    );
  }
  if (!isInteger(month)) {
    throw new TypeError(
      `DateTime args(month:${month}) is not integer`,
    );
  }
  if (!isInteger(day)) {
    throw new TypeError(
      `DateTime args(day:${day}) is not integer`,
    );
  }
  if (!isInteger(hour)) {
    throw new TypeError(
      `DateTime args(hour:${hour}) is not integer`,
    );
  }
  if (!isInteger(minute)) {
    throw new TypeError(
      `DateTime args(minute:${minute}) is not integer`,
    );
  }
  if (!isInteger(second)) {
    throw new TypeError(
      `DateTime args(second:${second}) is not integer`,
    );
  }
  if (!isInteger(millisecond)) {
    throw new TypeError(
      `DateTime args(millisecond:${millisecond}) is not integer`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `DateTime args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _DateTime(
    year, month, day,
    hour, minute, second, millisecond,
    isLocal,
  );
};

export default { DateTime };
