import { isUndefined, isObject, isArray } from '../type/isType.js';
import { __loop } from '../syntax/__loop.js';
import { _recursive } from '../syntax/_recursive.js';
import { _getProperty } from '../object/_getProperty.js';
import { _setProperty } from '../object/_setProperty.js';

/**
 * merge
 */
export const _merge = (
  source = {}, targetArray, func = (_, v) => v,
) => {
  __loop(targetArray)((target, targetIndex) => {
    _recursive(target,
      (targetValue, key, level, path) => {
        const propPath = path + '.' + key;
        const sourceValue = _getProperty(source, propPath);
        if (isObject(targetValue)) {
          if (!isObject(sourceValue)) {
            _setProperty(source, propPath, {});
          }
          return targetValue;
        } else if (isArray(targetValue)) {
          if (!isArray(sourceValue)) {
            _setProperty(source, propPath, []);
          }
          return targetValue;
        } else {
          if (isUndefined(sourceValue)) {
            _setProperty(source, propPath, targetValue);
          } else if (isUndefined(targetValue)) {
            // no set value
          } else {
            const setValue = func(
              sourceValue, targetValue, key, level, path,
              source, targetIndex, targetArray,
            );
            _setProperty(source, propPath, setValue);
          }
        }
      },
    );
  });
  return source;
};

export default {
  _merge,
};
