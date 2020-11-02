import { _map } from '../array/_map.js';
import { __returnValueFunction } from '../common/__returnValueFunction.js';
import { __SortFuncOrder } from '../array/__SortFuncOrder.js';

/**
 * SortFunc
 */
export const _SortFunc = (orderSettingArray) => {
  const sortFuncArray = orderSettingArray.map(
    ([orderFunc, valueFunc = __returnValueFunction]) => {
      return (a, b) => orderFunc(valueFunc(a), valueFunc(b));
    },
  );
  return (a, b) => {
    for (let i = 0, l = sortFuncArray.length; i < l; i += 1) {
      const result = sortFuncArray[i](a, b);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  };
};

_SortFunc.order = __SortFuncOrder;

export default { _SortFunc };
