import { isString, isInteger, isDate } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _DayUTC } from './_DayUTC.js';
import { __includes } from '../compare/__includes.js';

/**
 * Day
 */
export const DayUTC = (
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
    if (!__includes([
      'this', 'last', 'next', 'today', 'yesterday', 'tomorrow',
    ], value.toLowerCase())) {
      throw new TypeError(
        `DayUTC args(value:${value}) is not this | last | next`,
      );
    }
  } else if (!isInteger(value)) {
    throw new TypeError(
      `DayUTC args(value:${value}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `DayUTC args(sourceDate:${sourceDate}) is not date`,
    );
  }

  return _DayUTC(value, sourceDate);
};

export default { DayUTC };
