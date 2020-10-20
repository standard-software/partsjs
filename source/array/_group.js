/**
 * group
 */
import { __returnValueFunction } from '../common/__returnValueFunction.js';

export const _group = (array, func = __returnValueFunction, detail = false) => {
  const index = [];
  const result = [];
  array.forEach(v => {
    const funcResult = func(v);
    const i = index.indexOf(funcResult);
    if (i === -1) {
      index.push(funcResult);
      result.push([v]);
    } else {
      result[i].push(v);
    }
  });

  if (detail) {
    return { index, result };
  }
  return result;
};

export default {
  _group,
};
