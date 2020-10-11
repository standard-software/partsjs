import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _global,
} from '../common/_global.js';

/**
 * canUseMap
 */
export const canUseMap = () => {
  return 'Map' in _global;
};

/**
 * canUseWeakMap
 */
export const canUseWeakMap = () => {
  return 'WeakMap' in _global;
};

export default {
  canUseMap, canUseWeakMap,
};
