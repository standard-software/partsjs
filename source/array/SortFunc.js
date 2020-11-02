import { isArray, isFunction } from '../type/isType.js';
import { _allMatchAll } from '../compare/allMatchAll.js';
import { _SortFunc} from '../array/_SortFunc.js';

export const SortFunc = (orderSettingArray) => {

  if (!isArray(orderSettingArray)) {
    throw new TypeError(
      'SortFunc args(orderSettingArray) is not array',
    );
  }
  if (!_allMatchAll(orderSettingArray, [
    isArray,
    element => {
      return isFunction(element[0]) && isFunction(element[1]);
    },
  ])) {
    throw new TypeError(
      'SortFunc args(orderSettingArray) element[0|1] is not function ',
    );
  }

  return _SortFunc(orderSettingArray);
};

SortFunc.order = _SortFunc.order;

export default { SortFunc };
