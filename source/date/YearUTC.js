import { isString, isInteger, isDate } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _YearUTC } from './_YearUTC.js';

export const YearUTC = (
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
        `YearUTC args(value:${value}) is not this | last | next`,
      );
    }
  } else if (!isInteger(value)) {
    throw new TypeError(
      `YearUTC args(value:${value}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `YearUTC args(sourceDate:${sourceDate}) is not date`,
    );
  }

  return _YearUTC(value, sourceDate);
};

export default { YearUTC };
