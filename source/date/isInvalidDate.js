import { isDate, isNaNStrict } from '../type/isType.js';

/**
 * isInvalidDate
 */
export const isInvalidDate = (value) => {
  return (isDate(value) && (isNaNStrict(value.getTime())));
  // WSH
  //  value.toString() !== 'Invalid Date'
};

export default {
  isInvalidDate,
};
