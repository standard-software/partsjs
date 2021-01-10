import { isDate, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const dayOfWeekJapaneseShort = (date, isLocal = true) => {
  if (isObjectParameter(date, 'date', 'isLocal')) {
    ({ date, isLocal = true } = date);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `dayOfWeekJapaneseShort args(date:${date}) is not date`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `dayOfWeekJapaneseShort args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _dayOfWeek(date, isLocal, _dayOfWeek.names.JapaneseShort());
};

export default { dayOfWeekJapaneseShort };
