import { canUseSet } from '../syntax/syntax.js';
import { __includes } from '../compare/__includes.js';

/**
 * uniqe
 */
export const __unique = (array) => {
  if (canUseSet() && array.length > 120) {
    return [...(new Set(array))];
  } else {
    const result = [];
    for (let i = 0, l = array.length; i < l; i += 1) {
      if (!__includes(result, array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }
  // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120
};

export default {
  __unique,
};
