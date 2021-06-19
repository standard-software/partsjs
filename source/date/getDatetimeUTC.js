import { isDate } from '../type/type.js';
import { _isObjectParameter } from '../object/isObjectParameter.js';
import { _getDatetimeUTC } from './_getDatetimeUTC.js';

export const getDatetimeUTC = (
  date,
) => {
  if (_isObjectParameter(date, 'date')) {
    ({ date } = date);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `getDatetimeUTC args(date:${date}) is not date`,
    );
  }

  return _getDatetimeUTC(date, null);
};
