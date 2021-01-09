import { isDate, isBoolean } from '../type/isType.js';
import { isStringArray } from '../type/isTypeArray.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const dayOfWeek = (
  date,
  isLocal = true,
  dayOfWeekNames = _dayOfWeek.names.EnglishShort(),
) => {
  if (isObjectParameter(date, 'date', 'isLocal, dayOfWeekNames')) {
    ({
      date,
      dayOfWeekNames = _dayOfWeek.names.EnglishShort(),
      isLocal = true,
    } = date);
  } else if (isObjectParameter(isLocal, '', 'dayOfWeekNames, isLocal', 1)) {
    ({
      isLocal = true,
      dayOfWeekNames = _dayOfWeek.names.EnglishShort(),
    } = isLocal);
  } else if (isObjectParameter(dayOfWeekNames, 'dayOfWeekNames')) {
    ({ dayOfWeekNames } = dayOfWeekNames);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `dayOfWeek args(date:${date}) is not date`,
    );
  }
  if (!(isStringArray(dayOfWeekNames) && dayOfWeekNames.length === 7)) {
    throw new TypeError(
      `dayOfWeek args(dayOfWeekNames:${dayOfWeekNames})`
      + ` is not stringArray.length is 7`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `dayOfWeek args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _dayOfWeek(date, isLocal, dayOfWeekNames);
};

dayOfWeek.names = _dayOfWeek.names;

export default { dayOfWeek };
