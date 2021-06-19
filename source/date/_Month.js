import { isNull, isString, isUndefined } from '../type/isType.js';
import { __cloneDate } from '../common/__cloneDate.js';
import { _roundDown } from '../number/_roundDown.js';

/**
 * Month
 */
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

  const date = sourceDate;
  let self;
  if (isUndefined(timezoneOffset)) {
    self = new Date(date.getFullYear(), date.getMonth() + value, 1, 0, 0, 0, 0);
  } else if (isNull(timezoneOffset)) {
    self = new Date(Date.UTC(
      date.getUTCFullYear(), date.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
  } else {
    const d = __cloneDate(sourceDate);
    const timezoneOffsetSeconds = (timezoneOffset * 60 - _roundDown(timezoneOffset) * 60);
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    self = new Date(Date.UTC(
      d.getUTCFullYear(), d.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }
  return self;
};

export default { _Month };
