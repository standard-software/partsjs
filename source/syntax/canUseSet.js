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
 * canUseSet
 */
export const canUseSet = () => {
  return 'Set' in _global;
};

/**
 * canUseWeakSet
 */
export const canUseWeakSet = () => {
  return 'WeakSet' in _global;
};

export default {
  canUseSet, canUseWeakSet,
};
