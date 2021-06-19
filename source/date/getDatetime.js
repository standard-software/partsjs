import { isUndefined, isNull, isDate, isNumber } from '../type/type.js';
import { _isObjectParameter } from '../object/isObjectParameter.js';
import { _getDatetime } from './_getDatetime.js';

export const getDatetime = (
  date,
  timezoneOffset,
) => {
  if (_isObjectParameter(date, 'date', 'timezoneOffset')) {
    ({ date, timezoneOffset } = date);
  } else if (_isObjectParameter(timezoneOffset, 'timezoneOffset')) {
    ({ timezoneOffset } = timezoneOffset);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `getDatetime args(date:${date}) is not date`,
    );
  }

  if (!isUndefined(timezoneOffset) && !isNumber(timezoneOffset)) {
    throw new TypeError(
      `getDatetime args(timezoneOffset:${timezoneOffset}) is not number`,
    );
  }

  return _getDatetime(date, timezoneOffset);
};
