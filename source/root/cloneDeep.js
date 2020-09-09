import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike,
  isArray, isArraySeries,
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
  clone,
} from '../root/clone.js';

/**
 * cloneDeep
 */
export const _cloneDeep = (
  source,
  cloneFuncArray = clone.func.defaultArray,
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
    for (let i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      const result = cloneFuncArray[i](
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
  cloneFuncArray = clone.func.defaultArray,
) => {
  if (isObjectParameter(source, 'source', 'cloneFuncArray')) {
    ({ source, cloneFuncArray = clone.func.defaultArray } = source);
  } else if (isObjectParameter(cloneFuncArray, 'cloneFuncArray')) {
    ({ cloneFuncArray } = cloneFuncArray);
  }

  if (!isArray(cloneFuncArray)) {
    throw new TypeError(
      'cloneDeep args(cloneFuncArray) is not array',
    );
  }

  return _cloneDeep(source, cloneFuncArray);
};

export default {
  _cloneDeep,
  cloneDeep,
};

