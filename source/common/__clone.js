import { isObject, isArray } from '../type/isType.js';
import { __returnValueFunction } from '../common/__returnValueFunction.js';

/**
 * clone
 */
export const __clone = (
  source, deep,
) => {
  const __clone_ = (value, recursiveFunc) => {
    if (isObject(value)) {
      const cloneValue = {};
      for (const key in value) {
        cloneValue[key] = recursiveFunc(value[key], recursiveFunc);
      }
      return cloneValue;
    } else if (isArray(value)) {
      const cloneValue = Array(value.length);
      for (let i = 0, l = value.length; i < l; i += 1) {
        cloneValue[i] = recursiveFunc(value[i], recursiveFunc);
      }
      return cloneValue;
    }
    return value;
  };
  if (deep) {
    return __clone_(source, __clone_);
  }
  return __clone_(source, __returnValueFunction);
};

export default { __clone };
