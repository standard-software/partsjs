import { isNull, isString, isUndefined } from '../type/isType.js';
import { __cloneDate } from '../common/__cloneDate.js';

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

  const s = sourceDate;
  let self;
  if (isUndefined(timezoneOffset)) {
    self = new Date(s.getFullYear(), s.getMonth() + value, 1, 0, 0, 0, 0);
  } else if (isNull(timezoneOffset)) {
    self = new Date(Date.UTC(
      s.getUTCFullYear(), s.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
  } else {
    const _s = __cloneDate(s);
    _s.setUTCMinutes(_s.getUTCMinutes() - timezoneOffset);
    self = new Date(Date.UTC(
      _s.getUTCFullYear(), _s.getUTCMonth() + value, 1, 0, 0, 0, 0,
    ));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }
  return self;
};

export default { _Month };
