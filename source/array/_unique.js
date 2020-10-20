import { __includes } from '../compare/__includes.js';
import { __returnValueFunction } from '../common/__returnValueFunction.js';
import { __unique } from '../array/__unique.js';

/**
 * uniqe
 */
export const _unique = (
  array, func = __returnValueFunction, detail = false,
) => {
  if (func === __returnValueFunction) {
    if (detail === false) {
      return __unique(array);
    }
  }

  const index = [];
  const result = [];
  array.forEach(v => {
    const funcResult = func(v);
    if (!__includes(index, funcResult)) {
      index.push(funcResult);
      result.push(v);
    }
  });
  func = undefined;
  if (detail) {
    return { index, result };
  }
  return result;
};

export default {
  _unique,
};
