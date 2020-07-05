import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,
} from '../type/type.js';

import {
  _copyProperty,
} from '../object/object.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  cloneFunctionArrayDefault,
} from '../root/cloneFunction.js';

/**
 * cloneDeep
 */
export const _cloneDeep = (
  source,
  cloneFunctionArray = cloneFunctionArrayDefault,
) => {
  const CircularReferenceBuffer = {
    source: [],
    clone: [],
  };
  const __cloneDeep = (value) => {
    const index = CircularReferenceBuffer.source.indexOf(value);
    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }
    if (isUndefined(value)) {
      return undefined;
    }
    for (let i = 0, l = cloneFunctionArray.length; i < l; i += 1) {
      const result = cloneFunctionArray[i](
        value,
        (source, clone) => {
          CircularReferenceBuffer.source.push(source);
          CircularReferenceBuffer.clone.push(clone);
        },
        __cloneDeep,
      );
      if (!isUndefined(result)) {
        return result;
      }
    }
    return value;
  };
  return __cloneDeep(source);
};

export const cloneDeep = (
  source,
  cloneFunctionArray = cloneFunctionArrayDefault,
) => {
  if (isObjectParameter(source, 'source', 'cloneFunctionArray')) {
    ({ source, cloneFunctionArray = cloneFunctionArrayDefault } = source);
  } else if (isObjectParameter(cloneFunctionArray, 'cloneFunctionArray')) {
    ({ cloneFunctionArray } = cloneFunctionArray);
  }

  if (!isArray(cloneFunctionArray)) {
    throw new TypeError(
      'cloneDeep args(cloneFunctionArray) is not array',
    );
  }

  return _cloneDeep(source, cloneFunctionArray);
};

export default {
  _cloneDeep,
  cloneDeep,
};

