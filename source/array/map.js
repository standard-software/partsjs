import { isFunction, isArray } from '../type/type.js';
import { _map } from './_map.js';
import { isObjectParameter } from '../object/isObjectParameter.js';

/**
 * map
 */
export const map = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'map args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'map args(productFunc) is not function',
    );
  }
  return _map(array, func);
};

export default { map };

