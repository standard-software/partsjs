import {
  _objectToStringCheck, objectToString,
} from '../type/isType.js';

export const isMap = _objectToStringCheck('Map');
export const isWeakMap = _objectToStringCheck('WeakMap');

export const isNotMap   = value => !isMap(value);
export const isNotWeakMap   = value => !isWeakMap(value);

export default {
  isMap, isNotMap,
  isWeakMap, isNotWeakMap,
};

