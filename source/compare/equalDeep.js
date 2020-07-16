import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,

} from '../type/type.js';

import {
  _copyProperty,
  isObjectParameter,
} from '../object/object.js';

import {
  equalFunctionArrayDefault,
} from '../compare/equalFunction.js';

/**
 * equalDeep
 */
export const _equalDeep = (
  value1, value2, equalFunctionArray = equalFunctionArrayDefault,
) => {
  const CircularReferenceBuffer = {
    v1Array: [],
    v2Array: [],
  };
  const __equalDeep = (value1, value2) => {
    const index = CircularReferenceBuffer.v1Array.indexOf(value1);
    if (index !== -1) {
      if (CircularReferenceBuffer.v2Array[index] === value2) {
        return true;
      }
      return value1 === value2;
    }
    for (let i = 0, l = equalFunctionArray.length; i < l; i += 1) {
      const result = equalFunctionArray[i](
        value1, value2,
        (v1, v2) => {
          CircularReferenceBuffer.v1Array.push(v1);
          CircularReferenceBuffer.v2Array.push(v2);
        },
        __equalDeep,
      );
      if (!isUndefined(result)) {
        return result;
      }
    }
    return false;
  };
  return __equalDeep(value1, value2);
};

export const equalDeep = (
  value1, value2, equalFunctionArray = equalFunctionArrayDefault,
) => {
  if (isObjectParameter(value1, 'value1, value2', 'equalFunctionArray')) {
    ({
      value1, value2, equalFunctionArray = equalFunctionArrayDefault,
    } = value1);
  } else if (isObjectParameter(value2, 'value2', 'equalFunctionArray')) {
    ({ value2, equalFunctionArray = equalFunctionArrayDefault } = value2);
  } else if (isObjectParameter(equalFunctionArray, 'equalFunctionArray')) {
    ({ equalFunctionArray } = equalFunctionArray);
  }

  return _equalDeep(value1, value2, equalFunctionArray);
};

export default {
  _equalDeep,
  equalDeep,
};
