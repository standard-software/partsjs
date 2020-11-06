import { isObject, isArray, isUndefined } from '../type/isType.js';
import { __loop } from '../syntax/__loop.js';
import { _objectEntries } from '../object/_objectEntries.js';

export const _recursiveCall = (source, callFunc, runFunc) => {
  const recursiveCall_ = (value, level) => {
    if (isObject(value)) {
      __loop(_objectEntries(value))(([key, value]) => {
        runFunc(value, key, level, source);
        const result = callFunc(value, key, level, source);
        if (!isUndefined(result)) {
          recursiveCall_(result, level + 1);
        }
      });
    } else if (isArray(value)) {
      __loop(value)((value, index) => {
        runFunc(value, index, level, source);
        const result = callFunc(value, index, level, source);
        if (!isUndefined(result)) {
          recursiveCall_(result, level + 1);
        }
      });
    }
  };
  recursiveCall_(source, 0);
};

export default { _recursiveCall };
