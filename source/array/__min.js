import { isNumber } from '../type/isType.js';

/**
 * array.min
 */
export const __min = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError(
        '__min args(array) element is not number',
      );
    }
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;
};

export default {
  __min,
};
