import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  functionValue,
} from '../common/functionValue.js';

/**
 * switch_
 */
export const switch_ = (expression) => {
  return (args) => {
    if (!isArray(args)) {
      throw new TypeError('switch_() args is not array');
    }
    for (let i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if ((i === args.length - 1) &&isUndefined(args[i])) {
        continue;
      }
      if (!isArray(args[i])) {
        throw new TypeError('switch_() args is not array in array');
      }
    }
    for (let i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if ((i === args.length - 1) &&isUndefined(args[i])) {
        continue;
      }
      if (args[i].length === 0) {
        return undefined;
      }
      if (args[i].length === 1) {
        return functionValue(args[i][0]);
      }
      if (args[i][0] === expression) {
        return functionValue(args[i][1]);
      }
    }
    return undefined;
  };
};

export default {
  switch_,
};
