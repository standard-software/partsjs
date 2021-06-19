import { isDate } from '../type/type.js';
import { _isObjectParameter } from '../object/isObjectParameter.js';
import { _getTimezoneOffset } from './_getTimezoneOffset.js';

export const getTimezoneOffset = (
  date,
) => {
  if (_isObjectParameter(date, 'date')) {
    ({ date } = date);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `getTimezoneOffset args(date:${date}) is not date`,
    );
  }

  return _getTimezoneOffset(date);
};
