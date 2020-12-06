import { isObject, isArray, isFunction } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _recursive } from '../syntax/_recursive.js';

export const recursive = (source, func) => {
  if (isObjectParameter(source, 'source, func')) {
    ({ source, func } = source);
  } else if (isObjectParameter(func, 'func')) {
    ({ func } = func);
  }

  if (!(isObject(source) || isArray(source))) {
    throw new TypeError(
      'recursive args source is not [object|array]',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'recursive args func is not function',
    );
  }

  return _recursive(source, func);
};

export default { recursive };
