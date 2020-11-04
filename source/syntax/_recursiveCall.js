import { isObject, isArray, isUndefined } from '../type/isType.js';
import { __loop } from '../syntax/__loop.js';
import { _objectEntries } from '../object/_objectEntries.js';

export const _recursiveCall = (source, callFunc, runFunc) => {
  const recursiveCall_ = (source, level) => {
    if (isObject(source)) {
      __loop(_objectEntries(source))(([key, value]) => {
        runFunc(value, key, level);
        const result = callFunc(value, key);
        if (!isUndefined(result)) {
          recursiveCall_(result, level + 1);
        }
      });
    } else if (isArray(source)) {
      __loop(source)((value, index) => {
        runFunc(value, index, level);
        const result = callFunc(value, index);
        if (!isUndefined(result)) {
          recursiveCall_(result, level + 1);
        }
      });
    }
  };
  recursiveCall_(source, 0);
};

export default { _recursiveCall };
