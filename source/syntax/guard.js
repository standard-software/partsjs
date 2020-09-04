import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  functionValue,
} from '../syntax/functionValue.js';

/**
 * guard
 */
let guard_status = true;
let guard_message;
export const guard = (guardFunc, runFunc) => {
  guard_message = '';
  if (guard_status === false) {
    return false;
  }

  if (!isFunction(guardFunc)) {
    throw new TypeError(
      'guard args(guardFunc) is not function',
    );
  }
  const result = guardFunc();
  if (!isArray(result)) {
    throw new TypeError(
      'guard args(guardFunc result) is not array',
    );
  }
  for (let i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if ((i === result.length - 1) &&isUndefined(result[i])) {
      continue;
    }
    let resultValue = undefined;
    let message = '';
    if (isArray(result[i])) {
      if (!(1 <= result[i].length)) {
        throw new TypeError(
          'guard args(guardFunc resultArray element) is not array.length >= 1',
        );
      }
      resultValue = result[i][0];
      if (2 <= result[i].length) {
        message = result[i][1];
      }
    } else {
      resultValue = result[i];
    }
    resultValue = functionValue(resultValue);
    if (!isBoolean(resultValue)) {
      throw new TypeError(
        'guard args(guardFunc resultArray element value) is not boolean',
      );
    }
    if (resultValue === false) {
      guard_message = message;
      if (!isUndefined(runFunc)) {
        if (!isFunction(runFunc)) {
          throw new TypeError(
            'guard args(runFunc) is not function',
          );
        }
        runFunc();
      }
      return true;
    }
  }
  return false;
};
guard.message = () => guard_message;

guard.status = (value) => {
  return guard_status = value;
};
guard.on = () => {
  guard_status = true;
};
guard.off = () => {
  guard_status = false;
};

export default {
  guard,
};
