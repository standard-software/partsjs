import {
  objectToString,
  isObjectLike,
} from '../type/isType.js';

import {
  canUseSet,
} from '../syntax/canUseSet.js';

export const isSet = (value) => {
  if (!isObjectLike(value)) {
    return false;
  }
  if (!canUseSet()) {
    return false;
  }
  return value.constructor === Set;

  // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object Set]'
  // already return false;
};

export const isWeakSet = (value) => {
  return objectToString(value) === '[object WeakSet]';
};

export const isNotSet   = value => !isSet(value);
export const isNotWeakSet   = value => !isWeakSet(value);

export default {
  isSet, isNotSet,
  isWeakSet, isNotWeakSet,
};

