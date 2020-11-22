import { isArray } from '../type/isType.js';
import { _arrayEntries } from '../array/_arrayEntries.js';

/**
 * arrayEntries
 */
export const arrayEntries = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'arrayEntries args(array) is not array',
    );
  }

  return _arrayEntries(array);
};

export const arrayToIndexValueArray = arrayEntries;

export default {
  arrayEntries,
  arrayToIndexValueArray,
};
