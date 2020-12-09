import { isUndefined, isObject, isArray } from '../type/isType.js';
import { isNotUndefinedAll } from '../type/isTypeAll.js';
import { __loop } from '../syntax/__loop.js';
import { _recursive } from '../syntax/_recursive.js';
import { _getProperty } from '../object/_getProperty.js';
import { _setProperty } from '../object/_setProperty.js';
import { __returnSecondArgFunc } from './__returnSecondArgFunc.js';

/**
 * merge
 */
export const _merge = (
  source = {}, targetArray, func,
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
          if (isUndefined(func)) {
            if (!isUndefined(targetValue)) {
              _setProperty(source, propPath, targetValue);
            }
          } else {
            const setValue = func(
              sourceValue, targetValue, key, level, path,
              source, targetIndex, targetArray,
            );
            if (!isUndefined(setValue)) {
              _setProperty(source, propPath, setValue);
            }
          }
        }
      },
    );
  });
  return source;
};

export default { _merge };
