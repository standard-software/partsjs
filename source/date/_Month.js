import { isNull, isString, isUndefined } from '../type/isType.js';

/**
 * Month
 */
const cloneDate = (date) => new Date(date.getTime());
const setDateOffsetMin = (date, offsetMin) => {
  const result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

export const _Month = (
  value,
  sourceDate = (new Date()),
  timezoneOffset,
) => {
  if (isString(value)) {
    value = value.toLowerCase();
    if (value === 'this') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    }
  }

  const s = sourceDate;
  let self;
  if (isNull(timezoneOffset)) {
    self = new Date(Date.UTC(
      s.getUTCFullYear(), s.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
  } else if (isUndefined(timezoneOffset)) {
    self = new Date(s.getFullYear(), s.getMonth() + value, 1, 0, 0, 0, 0);
  } else {
    const _s = setDateOffsetMin(s, timezoneOffset);
    self = new Date(Date.UTC(
      _s.getUTCFullYear(), _s.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }
  return self;
};

export default { _Month };
