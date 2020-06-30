import {
  objectToString,
} from '../type/isType.js';

export const isSet = (value) => {
  return objectToString(value) === '[object Set]';
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

