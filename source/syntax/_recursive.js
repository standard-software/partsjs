import { isObject, isArray, isUndefined } from '../type/isType.js';
import { __loop } from '../syntax/__loop.js';
import { _objectEntries } from '../object/_objectEntries.js';

export const _recursive = (source, func) => {
  const recursive_ = (value, level) => {
    if (isObject(value)) {
      __loop(_objectEntries(value))(([key, value]) => {
        const result = func(value, key, level, source);
        if (!(isUndefined(result) || result === false)) {
          recursive_(result, level + 1);
        }
      });
    } else if (isArray(value)) {
      __loop(value)((value, index) => {
        const result = func(value, index, level, source);
        if (!(isUndefined(result) || result === false)) {
          recursive_(result, level + 1);
        }
      });
    }
  };
  recursive_(source, 0);
};

export default { _recursive };
