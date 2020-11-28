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
  const count = [];
  array.forEach(v => {
    const funcResult = func(v);
    const indexResult = index.indexOf(funcResult);
    if (indexResult === -1) {
      index.push(funcResult);
      result.push(v);
      count.push(1);
    } else {
      count[indexResult] += 1;
    }
  });
  func = undefined;
  if (detail) {
    return { index, result, count };
  }
  return result;
};

export default {
  _unique,
};
