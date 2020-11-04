import { isObject, isArray, isFunction } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _recursiveCall } from '../syntax/_recursiveCall.js';

export const recursiveCall = (source, callFunc, runFunc) => {
  if (isObjectParameter(source, 'source, callFunc, runFunc')) {
    ({ source, callFunc, runFunc } = source);
  } else if (isObjectParameter(callFunc, 'callFunc, runFunc')) {
    ({ callFunc, runFunc } = callFunc);
  } else if (isObjectParameter(runFunc, 'runFunc')) {
    ({ runFunc } = runFunc);
  }

  if (!(isObject(source) || isArray(source) )) {
    throw new TypeError(
      'recursiveCall args source is not [object|array]',
    );
  }
  if (!isFunction(callFunc)) {
    throw new TypeError(
      'recursiveCall args callFunc is not function',
    );
  }
  if (!isFunction(runFunc)) {
    throw new TypeError(
      'recursiveCall args runFunc is not function',
    );
  }

  return _recursiveCall(source, callFunc, runFunc);
};

export default { recursiveCall };
