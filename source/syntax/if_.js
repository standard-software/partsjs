import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  functionValue,
} from './functionValue.js';

/**
 * if_
 */
export const if_ = (condition) => {
  if (!isBoolean(condition)) {
    throw new TypeError(
      'if_ args(condition) is not boolean',
    );
  }

  const returnFunc = (then_, else_) => {
    if (isObjectParameter(then_, '', 'then, else', 1)) {
      ({ then: then_, else: else_ } = then_);
    }
    return condition
      ? functionValue(then_)
      : functionValue(else_);
  };

  if (condition) {
    returnFunc.then = (value) => {
      return {
        else: () => functionValue(value),
      };
    };
    returnFunc.else = () => {
      return {
        then: (value) => functionValue(value),
      };
    };
  } else {
    returnFunc.then = () => {
      return {
        else: (value) => functionValue(value),
      };
    };
    returnFunc.else = (value) => {
      return {
        then: () => functionValue(value),
      };
    };
  }

  return returnFunc;
};

export default {
  if_,
};
