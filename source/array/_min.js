import { isNumber } from '../type/isType.js';
import { returnValueFunction } from '../common/returnValueFunction.js';
import { __min } from '../array/__min.js';

/**
 * array.min
 */
export const _min = (
  array, func = returnValueFunction, detail = false,
) => {
  if (func === returnValueFunction && detail === false) {
    return __min(array);
  }

  const result = {
    index: -1,
    element: null,
    value: null,
  };
  if (array.length === 0) {
    return detail ? result : result.value;
  }
  result.index = 0;
  result.element = array[0];
  result.value = Infinity;
  for (let i = 0, l = array.length; i < l; i += 1) {
    const value = func(array[i]);
    if (!isNumber(value)) {
      throw new TypeError(
        '_min args(array) element is not number',
      );
    }
    if (value < result.value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }
  return detail ? result : result.value;
};

export default {
  _min,
};
