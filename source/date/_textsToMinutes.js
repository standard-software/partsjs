import { _stringToInteger } from '../convert/convert.js';

/**
 * textsToMinutes
 */
export const _textsToMinutes = ([sign, hourStr, minStr]) => {
  const hour  = Math.abs(_stringToInteger(hourStr));
  const min   = Math.abs(_stringToInteger(minStr));
  let result = hour * 60 + min;
  result = sign === '-' ? -1 * result : result;
  return result;
};

export default { _textsToMinutes };
