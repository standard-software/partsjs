import { isString, isNumber, isInteger, isDate, isUndefined } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Year } from './_Year.js';
import { __includes } from '../compare/__includes.js';

/**
 * Year
 */
export const Year = (
  value,
  sourceDate = (new Date()),
  timezoneOffset,
) => {
  if (isObjectParameter(value, 'value', 'sourceDate, timezoneOffset')) {
    ({
      value,
      sourceDate = (new Date()),
      timezoneOffset,
    } = value);
  } else if (isObjectParameter(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    ({
      sourceDate = (new Date()),
      timezoneOffset,
    } = sourceDate);
  } else if (isObjectParameter(timezoneOffset, 'timezoneOffset', '')) {
    ({ timezoneOffset } = timezoneOffset);
  }

  if (isString(value)) {
    if (!__includes(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError(
        `Year args(value:${value}) is not this | last | next`,
      );
    }
  } else if (!isInteger(value)) {
    throw new TypeError(
      `Year args(value:${value}) is not integer`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `Year args(sourceDate:${sourceDate}) is not date`,
    );
  }
  if (!isUndefined(timezoneOffset) && !isNumber(timezoneOffset)) {
    throw new TypeError(
      `Year args(timezoneOffset:${timezoneOffset}) is not number`,
    );
  }

  return _Year(value, sourceDate, timezoneOffset);
};

export default { Year };
