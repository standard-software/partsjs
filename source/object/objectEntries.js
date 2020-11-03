import { isObjectLike } from '../type/isType.js';
import { _hasOwn } from '../object/_hasOwn.js';
import { _objectEntries } from '../object/_objectEntries.js';

/**
 * objectEntries
 */
export const objectEntries = (object) => {
  if (!isObjectLike(object)) {
    throw new TypeError(
      'objectEntries args(object) is not object',
    );
  }

  return _objectEntries(object);
};

export const objectToKeyValueArray = objectEntries;

export default {
  objectEntries,
  objectToKeyValueArray,
};
