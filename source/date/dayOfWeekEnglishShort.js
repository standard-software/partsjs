import { isDate, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const dayOfWeekEnglishShort = (date, isLocal = true) => {
  if (isObjectParameter(date, 'date', 'isLocal')) {
    ({ date, isLocal = true } = date);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `dayOfWeekEnglishShort args(date:${date}) is not date`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `dayOfWeekEnglishShort args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _dayOfWeek(date, isLocal, _dayOfWeek.names.EnglishShort());
};

export default { dayOfWeekEnglishShort };
