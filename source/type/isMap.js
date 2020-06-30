import {
  objectToString,
} from '../type/isType.js';

export const isMap = (value) => {
  return objectToString(value) === '[object Map]';
};

export const isWeakMap = (value) => {
  return objectToString(value) === '[object WeakMap]';
};

export const isNotMap   = value => !isMap(value);
export const isNotWeakMap   = value => !isWeakMap(value);

export default {
  isMap, isNotMap,
  isWeakMap, isNotWeakMap,
};

