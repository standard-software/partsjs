/* eslint-disable max-len */
import { isInteger, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _inRange } from '../number/number.js';
import { _DatetimeUTC } from './_DatetimeUTC.js';

/**
 * Datetime
 */
export const DatetimeUTC = function(
  year = 1970, month = 1, day = 1,
  hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
) {
  if (isObjectParameter(year, '', 'year, month, day, hours, minutes, seconds, milliseconds', 1)) {
    ({
      year = 1970, month = 1, day = 1,
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
    } = year);
  } else if (isObjectParameter(month, '', 'month, day, hours, minutes, seconds, milliseconds', 1)) {
    ({
      month = 1, day = 1,
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
    } = month);
  } else if (isObjectParameter(day, '', 'day, hours, minutes, seconds, milliseconds', 1)) {
    ({
      day = 1,
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
    } = day);
  } else if (isObjectParameter(hours, '', 'hours, minutes, seconds, milliseconds', 1)) {
    ({
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
    } = hours);
  } else if (isObjectParameter(minutes, '', 'minutes, seconds, milliseconds', 1)) {
    ({
      minutes = 0, seconds = 0, milliseconds = 0,
    } = minutes);
  } else if (isObjectParameter(seconds, '', 'seconds, milliseconds', 1)) {
    ({
      seconds = 0, milliseconds = 0,
    } = seconds);
  } else if (isObjectParameter(milliseconds, '', 'milliseconds', 1)) {
    ({
      milliseconds = 0,
    } = milliseconds);
  }

  if (!isInteger(year)) {
    throw new TypeError(
      `DatetimeUTC args(year:${year}) is not integer`,
    );
  }
  if (!isInteger(month)) {
    throw new TypeError(
      `DatetimeUTC args(month:${month}) is not integer`,
    );
  }
  if (!isInteger(day)) {
    throw new TypeError(
      `DatetimeUTC args(day:${day}) is not integer`,
    );
  }
  if (!isInteger(hours)) {
    throw new TypeError(
      `DatetimeUTC args(hour:${hours}) is not integer`,
    );
  }
  if (!isInteger(minutes)) {
    throw new TypeError(
      `DatetimeUTC args(minute:${minutes}) is not integer`,
    );
  }
  if (!isInteger(seconds)) {
    throw new TypeError(
      `DatetimeUTC args(second:${seconds}) is not integer`,
    );
  }
  if (!isInteger(milliseconds)) {
    throw new TypeError(
      `DatetimeUTC args(millisecond:${milliseconds}) is not integer`,
    );
  }

  return _DatetimeUTC(
    year, month, day,
    hours, minutes, seconds, milliseconds,
  );
};

export default { DatetimeUTC };
