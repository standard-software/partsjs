import {
  objectToString,
  isObjectLike,
} from '../type/isType.js';

import {
  canUseMap,
} from '../syntax/syntax_common.js';

export const isMap = (value) => {
  if (!isObjectLike(value)) {
    return false;
  }
  if (!canUseMap()) {
    return false;
  }
  return value.constructor === Map;

  // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object Map]'
  // already return false;
};

export const isWeakMap = (value) => {
  if (!isObjectLike(value)) {
    return false;
  }
  if (!canUseMap()) {
    return false;
  }
  return value.constructor === WeakMap;

  // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object WeakMap]'
  // already return false;
};

export const isNotMap   = value => !isMap(value);
export const isNotWeakMap   = value => !isWeakMap(value);

export default {
  isMap, isNotMap,
  isWeakMap, isNotWeakMap,
};

