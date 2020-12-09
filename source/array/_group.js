/**
 * group
 */
import { __returnFirstArgFunc } from '../common/__returnFirstArgFunc.js';

export const _group = (array, func = __returnFirstArgFunc, detail = false) => {
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
