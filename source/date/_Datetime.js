import { isNull, isUndefined } from '../type/type.js';

/**
 * Datetime
 */
export const _Datetime = function(
  year = 1970, month = 1, date = 1,
  hour = 0, minute = 0, second = 0, millisecond = 0,
  timezoneOffset,
) {
  const self = new Date(0);

  if (isUndefined(timezoneOffset)) {
    self.setFullYear(year, month - 1, date);
    self.setHours(hour, minute, second, millisecond);
  } else if (isNull(timezoneOffset)) {
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hour, minute, second, millisecond);
  } else {
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hour, minute, second, millisecond);
    self.setMinutes(self.getMinutes() + timezoneOffset);
  }

  return self;
};

export default { _Datetime };
