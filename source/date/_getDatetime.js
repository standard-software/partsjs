import { isUndefined, isNull } from '../type/type.js';
import { __cloneDate } from '../common/__cloneDate.js';
import { _roundDown } from '../number/_roundDown.js';

export const _getDatetime = (
  date,
  timezoneOffset,
) => {
  const timezoneOffsetSeconds = (timezoneOffset * 60 - _roundDown(timezoneOffset) * 60);
  const _date = __cloneDate(date);
  if (isUndefined(timezoneOffset)) {
    return {
      year:         _date.getFullYear(),
      month:        _date.getMonth() + 1,
      date:         _date.getDate(),
      hours:        _date.getHours(),
      minutes:      _date.getMinutes(),
      seconds:      _date.getSeconds(),
      milliseconds: _date.getMilliseconds(),
    };
  } else if (isNull(timezoneOffset)) {
    return {
      year:         _date.getUTCFullYear(),
      month:        _date.getUTCMonth() + 1,
      date:         _date.getUTCDate(),
      hours:        _date.getUTCHours(),
      minutes:      _date.getUTCMinutes(),
      seconds:      _date.getUTCSeconds(),
      milliseconds: _date.getUTCMilliseconds(),
    };
  } else {
    _date.setUTCMinutes(
      _date.getUTCMinutes() - timezoneOffset,
    );
    _date.setUTCSeconds(
      _date.getUTCSeconds() - timezoneOffsetSeconds,
    );
    return {
      year:         _date.getUTCFullYear(),
      month:        _date.getUTCMonth() + 1,
      date:         _date.getUTCDate(),
      hours:        _date.getUTCHours(),
      minutes:      _date.getUTCMinutes(),
      seconds:      _date.getUTCSeconds(),
      milliseconds: _date.getUTCMilliseconds(),
    };
  }
};
