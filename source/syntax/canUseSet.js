import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

/**
 * canUseSet
 */
let _canUseSetFlag;

export const canUseSet = () => {
  if (isUndefined(_canUseSetFlag)) {
    try {
      new Set();
      _canUseSetFlag = true;
    } catch (e) {
      _canUseSetFlag = false;
    }
  }
  return _canUseSetFlag;
};

canUseSet.reset = () => {
  _canUseSetFlag = undefined;
};

/**
 * canUseWeakSet
 */
let _canUseWeakSetFlag;

export const canUseWeakSet = () => {
  if (isUndefined(_canUseWeakSetFlag)) {
    try {
      new WeakSet();
      _canUseWeakSetFlag = true;
    } catch (e) {
      _canUseWeakSetFlag = false;
    }
  }
  return _canUseWeakSetFlag;
};

canUseWeakSet.reset = () => {
  _canUseWeakSetFlag = undefined;
};

export default {
  canUseSet, canUseWeakSet,
};
