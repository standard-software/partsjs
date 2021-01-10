import { isDate, isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const dayOfWeekJapaneseLong = (date, isLocal = true) => {
  if (isObjectParameter(date, 'date', 'isLocal')) {
    ({ date, isLocal = true } = date);
  } else if (isObjectParameter(isLocal, 'isLocal')) {
    ({ isLocal } = isLocal);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `dayOfWeekJapaneseLong args(date:${date}) is not date`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `dayOfWeekJapaneseLong args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _dayOfWeek(date, isLocal, _dayOfWeek.names.JapaneseLong());
};

export default { dayOfWeekJapaneseLong };
