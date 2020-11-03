import { _hasOwn } from '../object/_hasOwn.js';

/**
 * objectEntries
 */
export const _objectEntries = (object) => {
  const result = [];
  for (const key in object) {
    if (_hasOwn(object, key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
};

export default { _objectEntries };
