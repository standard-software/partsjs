import { isArray, isFunction } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _partial } from '../syntax/_partial.js';

export const partial = (func, applyArgs) => {
  if (isObjectParameter(func, 'func, applyArgs')) {
    ({ func, applyArgs } = func);
  } else if (isObjectParameter(applyArgs, 'applyArgs')) {
    ({ applyArgs } = applyArgs);
  }

  if (!isFunction(func)) {
    throw new TypeError(
      `partial args(func:${func}) is not function`,
    );
  }
  if (!isArray(applyArgs)) {
    throw new TypeError(
      `partial args(applyArgs:${applyArgs}) is not array`,
    );
  }

  return _partial(func, applyArgs);
};

partial.empty = _partial.empty;

export default { partial };
