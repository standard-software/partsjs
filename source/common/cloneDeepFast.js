import {
  isObject, isArray,
} from '../type/isType.js';

/**
 * cloneDeepFast
 */
const cloneDeepFast = (
  source,
) => {
  const __cloneDeepFast = (value) => {
    let cloneValue;
    if (isObject(value)) {
      cloneValue = {};
      for (const key in value) {
        cloneValue[key] = __cloneDeepFast(value[key]);
      }
      return cloneValue;
    } else if (isArray(value)) {
      cloneValue = Array(value.length);
      for (let i = 0, l = value.length; i < l; i += 1) {
        cloneValue[i] = __cloneDeepFast(value[i]);
      }
      return cloneValue;
    }
    return value;
  };
  return __cloneDeepFast(source);
};

export default { cloneDeepFast };
