import { isNumber } from '../type/isType.js';
import { __returnFirstArgFunc } from '../common/__returnFirstArgFunc.js';
import { __max } from '../array/__max.js';

/**
 * array.max
 */
export const _max = (
  array, func = __returnFirstArgFunc, detail = false,
) => {
  if (func === __returnFirstArgFunc && detail === false) {
    return __max(array);
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
  result.value = -Infinity;
  for (let i = 0, l = array.length; i < l; i += 1) {
    const value = func(array[i]);
    if (!isNumber(value)) {
      throw new TypeError(
        '_max args(array) element is not number',
      );
    }
    if (result.value < value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }
  return detail ? result : result.value;
};

export default {
  _max,
};
