import { isObject, isArray } from '../type/isType.js';

/**
 * cloneDeep
 */
export const __cloneDeep = (
  source,
) => {
  const __cloneDeep_ = (value) => {
    if (isObject(value)) {
      const cloneValue = {};
      for (const key in value) {
        cloneValue[key] = __cloneDeep_(value[key]);
      }
      return cloneValue;
    } else if (isArray(value)) {
      const cloneValue = Array(value.length);
      for (let i = 0, l = value.length; i < l; i += 1) {
        cloneValue[i] = __cloneDeep_(value[i]);
      }
      return cloneValue;
    }
    return value;
  };
  return __cloneDeep_(source);
};

export default { __cloneDeep };
