import { isString, isInteger, isDate } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _MonthUTC } from './_MonthUTC.js';

/**
 * Month
 */
export const MonthUTC = (
  value,
  sourceDate = (new Date()),
) => {
  if (isObjectParameter(value, 'value', 'sourceDate')) {
    ({
      value,
      sourceDate = (new Date()),
    } = value);
  } else if (isObjectParameter(sourceDate, 'sourceDate', '')) {
    ({
      sourceDate = (new Date()),
    } = sourceDate);
  }

  if (isString(value)) {
    if (!['this', 'last', 'next'].includes(value.toLowerCase())) {
      throw new TypeError(
        `MonthUTC args(value:${value}) is not this | last | next`,
      );
    }
  } else if (!isInteger(value)) {
    throw new TypeError(
      `MonthUTC args(value:${value}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `MonthUTC args(sourceDate:${sourceDate}) is not date`,
    );
  }

  return _MonthUTC(value, sourceDate);
};

export default { MonthUTC };
