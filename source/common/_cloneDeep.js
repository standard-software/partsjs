import { isUndefined } from '../type/type.js';
import { __clone } from '../common/__clone.js';
import { __cloneFunc } from '../common/__cloneFunc.js';

/**
 * cloneDeep
 */
export const _cloneDeep = (
  source,
  cloneFuncArray = __cloneFunc.defaultArray,
) => {
  if (isUndefined(cloneFuncArray)) {
    return __clone(source, true);
  }

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

_cloneDeep.func = __cloneFunc;

export default {
  _cloneDeep,
};

