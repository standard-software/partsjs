import { isObject, isArray } from '../type/isType.js';
import { __returnFirstArgFunc } from '../common/__returnFirstArgFunc.js';

/**
 * clone
 */
export const __clone = (
  source,
) => {
  const __clone_ = (value) => {
    if (isObject(value)) {
      const cloneValue = {};
      for (const key in value) {
        cloneValue[key] = value[key];
      }
      return cloneValue;
    } else if (isArray(value)) {
      const cloneValue = Array(value.length);
      for (let i = 0, l = value.length; i < l; i += 1) {
        cloneValue[i] = value[i];
      }
      return cloneValue;
    }
    return value;
  };
  return __clone_(source);
};

export default { __clone };
