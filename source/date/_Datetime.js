import { isNull, isUndefined } from '../type/type.js';

/**
 * Datetime
 */
export const _Datetime = function(
  year = 1970, month = 1, date = 1,
  hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
  timezoneOffset,
) {
  const self = new Date(0);

  if (isUndefined(timezoneOffset)) {
    self.setFullYear(year, month - 1, date);
    self.setHours(hours, minutes, seconds, milliseconds);
  } else if (isNull(timezoneOffset)) {
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hours, minutes, seconds, milliseconds);
  } else {
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hours, minutes, seconds, milliseconds);
    self.setMinutes(self.getMinutes() + timezoneOffset);
  }

  return self;
};

export default { _Datetime };
