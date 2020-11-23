import { isObject, isArray, isUndefined } from '../type/isType.js';
import { __loop } from '../syntax/__loop.js';
import { _objectEntries } from '../object/_objectEntries.js';
import { _arrayEntries } from '../array/_arrayEntries.js';

export const _recursive = (source, func) => {
  let continueFlag = true;
  const _recursive_ = (value, level, path) => {
    let loopArray;
    if (isObject(value)) {
      loopArray = _objectEntries(value);
    } else if (isArray(value)) {
      loopArray = _arrayEntries(value);
    } else {
      return;
    }

    __loop(loopArray)(([key, value]) => {
      const result = func(value, key, level, path, source);
      if (result === false) {
        continueFlag = false;
        return { break: true };
      }
      _recursive_(result, level + 1, path + '.' + key);
      if (continueFlag === false) {
        return { break: true };
      }
    });

  };
  _recursive_(source, 0, '');
};

export default { _recursive };
