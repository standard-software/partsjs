import { isString, isInteger, isDate } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Year } from './_Year.js';

/**
 * Year
 */
export const Year = (
  value,
  sourceDate = (new Date()),
  timezoneOffset = (new Date()).getTimezoneOffset(),
) => {
  if (isObjectParameter(value, 'value', 'sourceDate, timezoneOffset')) {
    ({
      value,
      sourceDate = (new Date()),
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = value);
  } else if (isObjectParameter(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    ({
      sourceDate = (new Date()),
      timezoneOffset = (new Date()).getTimezoneOffset(),
    } = sourceDate);
  } else if (isObjectParameter(timezoneOffset, 'timezoneOffset', '')) {
    ({ timezoneOffset } = timezoneOffset);
  }

  if (isString(value)) {
    if (!['this', 'last', 'next'].includes(value.toLowerCase())) {
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
  if (!isInteger(timezoneOffset)) {
    throw new TypeError(
      `Year args(timezoneOffset:${timezoneOffset}) is not integer`,
    );
  }

  return _Year(value, sourceDate, timezoneOffset);
};

export default { Year };
