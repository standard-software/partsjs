/* eslint-disable max-len */
import { isInteger, isUndefined } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _inRange } from '../number/number.js';
import { _Datetime } from './_Datetime.js';

/**
 * Datetime
 */
export const Datetime = function(
  year = 1970, month = 1, day = 1,
  hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
  timezoneOffset,
) {
  if (isObjectParameter(year, '', 'year, month, day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    ({
      year = 1970, month = 1, day = 1,
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
      timezoneOffset,
    } = year);
  } else if (isObjectParameter(month, '', 'month, day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    ({
      month = 1, day = 1,
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
      timezoneOffset,
    } = month);
  } else if (isObjectParameter(day, '', 'day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    ({
      day = 1,
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
      timezoneOffset,
    } = day);
  } else if (isObjectParameter(hours, '', 'hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    ({
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
      timezoneOffset,
    } = hours);
  } else if (isObjectParameter(minutes, '', 'minutes, seconds, milliseconds, timezoneOffset', 1)) {
    ({
      minutes = 0, seconds = 0, milliseconds = 0,
      timezoneOffset,
    } = minutes);
  } else if (isObjectParameter(seconds, '', 'seconds, milliseconds, timezoneOffset', 1)) {
    ({
      seconds = 0, milliseconds = 0,
      timezoneOffset,
    } = seconds);
  } else if (isObjectParameter(milliseconds, '', 'milliseconds, timezoneOffset', 1)) {
    ({
      milliseconds = 0,
      timezoneOffset,
    } = milliseconds);
  } else if (isObjectParameter(timezoneOffset, '', 'timezoneOffset', 1)) {
    ({
      timezoneOffset,
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
  if (!isInteger(hours)) {
    throw new TypeError(
      `Datetime args(hours:${hours}) is not integer`,
    );
  }
  if (!isInteger(minutes)) {
    throw new TypeError(
      `Datetime args(minutes:${minutes}) is not integer`,
    );
  }
  if (!isInteger(seconds)) {
    throw new TypeError(
      `Datetime args(seconds:${seconds}) is not integer`,
    );
  }
  if (!isInteger(milliseconds)) {
    throw new TypeError(
      `Datetime args(milliseconds:${milliseconds}) is not integer`,
    );
  }
  if (!isUndefined(timezoneOffset) && !isInteger(timezoneOffset)) {
    throw new TypeError(
      `Datetime args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }

  return _Datetime(
    year, month, day,
    hours, minutes, seconds, milliseconds,
    timezoneOffset,
  );
};

export default { Datetime };
