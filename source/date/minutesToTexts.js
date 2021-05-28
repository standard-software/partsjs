import { isInteger } from '../type/type.js';
import { _minutesToTexts } from './_minutesToTexts.js';

/**
 * minutesToTexts
 */
export const minutesToTexts = (minutes) => {

  if (!isInteger(minutes)) {
    throw new TypeError(
      'minutesToTexts args(minutes) is not integer',
    );
  }

  return _minutesToTexts(minutes);
};

export default { minutesToTexts };
