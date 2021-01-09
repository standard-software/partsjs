import { isDate, isBoolean } from '../type/isType.js';
import { isStringArray } from '../type/isTypeArray.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _nameOfMonth } from '../date/_nameOfMonth.js';

export const nameOfMonth = (
  date,
  isLocal = true,
  monthNames = _nameOfMonth.names.EnglishChar3(),
) => {
  if (isObjectParameter(date, 'date', 'isLocal, monthNames')) {
    ({
      date,
      monthNames = _nameOfMonth.names.EnglishChar3(),
      isLocal = true,
    } = date);
  } else if (isObjectParameter(isLocal, '', 'monthNames, isLocal', 1)) {
    ({
      isLocal = true,
      monthNames = _nameOfMonth.names.EnglishChar3(),
    } = isLocal);
  } else if (isObjectParameter(monthNames, 'monthNames')) {
    ({ monthNames } = monthNames);
  }

  if (!isDate(date)) {
    throw new TypeError(
      `nameOfMonth args(date:${date}) is not date`,
    );
  }
  if (!(isStringArray(monthNames) && monthNames.length === 12)) {
    throw new TypeError(
      `nameOfMonth args(monthNames:${monthNames})`
      + ` is not stringArray.length is 12`,
    );
  }
  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `nameOfMonth args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _nameOfMonth(date, isLocal, monthNames);
};

nameOfMonth.names = _nameOfMonth.names;

export default { nameOfMonth };
