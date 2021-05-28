import { isStringArray } from '../type/type.js';
import { _textsToMinutes } from './_textsToMinutes.js';

/**
 * textsToMinutes
 */
export const textsToMinutes = (texts) => {

  if (!isStringArray(texts)) {
    throw new TypeError(
      'textsToMinutes args(texts) is not array',
    );
  }
  if (texts.length !== 3) {
    throw new TypeError(
      'textsToMinutes args(texts) is array.length !== 0',
    );
  }

  return _textsToMinutes(texts);
};

export default { textsToMinutes };
