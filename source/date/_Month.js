import { isNull, isString } from '../type/isType.js';

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
  timezoneOffset = (new Date()).getTimezoneOffset(),
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

  const _sourceDate = setDateOffsetMin(sourceDate, timezoneOffset);
  let self;
  if (isNull(timezoneOffset)) {
    self = new Date(Date.UTC(
      sourceDate.getUTCFullYear(), sourceDate.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
  } else {
    self = new Date(Date.UTC(
      _sourceDate.getUTCFullYear(), _sourceDate.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }
  return self;
};

export default { _Month };
