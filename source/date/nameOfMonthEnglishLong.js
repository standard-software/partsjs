import { isDate, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _nameOfMonth } from '../date/_nameOfMonth.js';

export const nameOfMonthEnglishLong = (date, isLocal = true) => {
  if (isObjectParameter(date, 'date', 'isLocal')) {
    ({ date, isLocal = true } = date);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `nameOfMonthEnglishLong args(date:${date}) is not date`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `nameOfMonthEnglishLong args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _nameOfMonth(date, isLocal, _nameOfMonth.names.EnglishLong());
};

export default { nameOfMonthEnglishLong };
