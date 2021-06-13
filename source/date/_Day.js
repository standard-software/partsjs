import { isNull, isString } from '../type/isType.js';

/**
 * Day
 */
const cloneDate = (date) => new Date(date.getTime());
const setDateOffsetMin = (date, offsetMin) => {
  const result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

export const _Day = (
  value,
  sourceDate = (new Date()),
  timezoneOffset = (new Date()).getTimezoneOffset(),
) => {
  if (isString(value)) {
    value = value.toLowerCase();
    if (value === 'this') {
      value = 0;
    } else if (value === 'today') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'yesterday') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    } else if (value === 'tomorrow') {
      value = 1;
    }
  }

  const _s = setDateOffsetMin(sourceDate, timezoneOffset);
  const s = sourceDate;
  let self;
  if (isNull(timezoneOffset)) {
    self = new Date(Date.UTC(
      s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate() + value, 0, 0, 0, 0,
    ));
  } else {
    self = new Date(Date.UTC(
      _s.getUTCFullYear(), _s.getUTCMonth(), _s.getUTCDate() + value, 0, 0, 0, 0,
    ));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }
  return self;
};

export default { _Day };
