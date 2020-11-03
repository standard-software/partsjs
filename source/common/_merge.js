import { isUndefined, isObjectFromNull } from '../type/isType.js';
import { __loop } from '../syntax/__loop.js';
import { _objectEntries } from '../object/_objectEntries.js';

/**
 * merge
 */
export const _merge = (dataArray, func = v => v, target) => {
  if (dataArray.length === 0) {
    return target;
  }

  if (isUndefined(target)) {
    target =
      isObjectFromNull(dataArray[0])
        ? Object.create(null)
        : new dataArray[0].constructor();
  }
  __loop(dataArray)((data) => {
    __loop(_objectEntries(data))(([key, value]) => {
      target[key] = func(value, target[key], key, data, target);
    });
  });
  return target;
};

export default {
  _merge,
};
