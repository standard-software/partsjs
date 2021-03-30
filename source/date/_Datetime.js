/**
 * Datetime
 */
export const _Datetime = function(
  year = 1970, month = 1, day = 1,
  hour = 0, minute = 0, second = 0, millisecond = 0,
  isLocal = true,
) {
  if (!(this instanceof _Datetime)) {
    return new _Datetime(
      year, month, day,
      hour, minute, second, millisecond,
      isLocal,
    );
  }

  const self = new Date(0);

  if (isLocal === true) {
    self.setFullYear(year);
    self.setDate(1);
    self.setMonth(month - 1);
    self.setDate(day);
    self.setHours(hour);
    self.setMinutes(minute);
    self.setSeconds(second);
    self.setMilliseconds(millisecond);
  } else {
    self.setUTCFullYear(year);
    self.setUTCDate(1);
    self.setUTCMonth(month - 1);
    self.setUTCDate(day);
    self.setUTCHours(hour);
    self.setUTCMinutes(minute);
    self.setUTCSeconds(second);
    self.setUTCMilliseconds(millisecond);
  }

  return self;
};

export default { _Datetime };
