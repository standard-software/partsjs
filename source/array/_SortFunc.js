import { _map } from '../array/_map.js';
import { __returnFirstArgFunc } from '../common/__returnFirstArgFunc.js';
import { __SortFuncOrder } from '../array/__SortFuncOrder.js';

/**
 * SortFunc
 */
export const _SortFunc = (orderSettingArray) => {
  const sortFuncArray = _map(orderSettingArray,
    ([orderFunc, valueFunc = __returnFirstArgFunc]) => {
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
