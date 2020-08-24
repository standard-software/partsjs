import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

/**
 * canUseMap
 */
let _canUseMapFlag;

export const canUseMap = () => {
  if (isUndefined(_canUseMapFlag)) {
    try {
      new Map();
      _canUseMapFlag = true;
    } catch (e) {
      _canUseMapFlag = false;
    }
  }
  return _canUseMapFlag;
};

canUseMap.reset = () => {
  _canUseMapFlag = undefined;
};

/**
 * canUseWeakMap
 */
let _canUseWeakMapFlag;

export const canUseWeakMap = () => {
  if (isUndefined(_canUseWeakMapFlag)) {
    try {
      new WeakMap();
      _canUseWeakMapFlag = true;
    } catch (e) {
      _canUseWeakMapFlag = false;
    }
  }
  return _canUseWeakMapFlag;
};

canUseWeakMap.reset = () => {
  _canUseWeakMapFlag = undefined;
};

export default {
  canUseMap, canUseWeakMap,
};
