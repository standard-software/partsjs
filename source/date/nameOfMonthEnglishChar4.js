import { isDate, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _nameOfMonth } from '../date/_nameOfMonth.js';

export const nameOfMonthEnglishChar4 = (date, isLocal = true) => {
  if (isObjectParameter(date, 'date', 'isLocal')) {
    ({ date, isLocal = true } = date);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `nameOfMonthEnglishChar4 args(date:${date}) is not date`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `nameOfMonthEnglishChar4 args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _nameOfMonth(date, isLocal, _nameOfMonth.names.EnglishChar4());
};

export default { nameOfMonthEnglishChar4 };
