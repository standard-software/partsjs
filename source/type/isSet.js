import {
  _objectToStringCheck, objectToString,
} from '../type/isType.js';

export const isSet = _objectToStringCheck('Set');
export const isWeakSet = _objectToStringCheck('WeakSet');

export const isNotSet   = value => !isSet(value);
export const isNotWeakSet   = value => !isWeakSet(value);

export default {
  isSet, isNotSet,
  isWeakSet, isNotWeakSet,
}

