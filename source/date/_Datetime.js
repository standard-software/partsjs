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
    self.setFullYear(year, month - 1, day);
    self.setHours(hour, minute, second, millisecond);
  } else {
    self.setUTCFullYear(year, month - 1, day);
    self.setUTCHours(hour, minute, second, millisecond);
  }

  return self;
};

export default { _Datetime };
