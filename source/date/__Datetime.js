import { isNull } from '../type/type.js';

/**
 * Datetime
 */
export const __Datetime = function(
  year = 1970, month = 1, date = 1,
  hour = 0, minute = 0, second = 0, millisecond = 0,
  timezoneOffset = (new Date()).getTimezoneOffset(),
) {
  const self = new Date(0);

  self.setUTCFullYear(year, month - 1, date);
  self.setUTCHours(hour, minute, second, millisecond);
  if (!isNull(timezoneOffset)) {
    self.setMinutes(self.getMinutes() + timezoneOffset);
  }

  return self;
};

export default { __Datetime };
