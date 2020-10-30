import { isUndefined } from '../type/type.js';
import { __cloneDeep } from '../common/__cloneDeep.js';
import { __cloneFunc } from '../common/__cloneFunc.js';

/**
 * cloneDeep
 */
export const _cloneDeep = (
  source,
  cloneFuncArray = __cloneFunc.defaultArray,
) => {
  if (isUndefined(cloneFuncArray)) {
    return __cloneDeep(source);
  }

  const CircularReferenceBuffer = {
    source: [],
    clone: [],
  };
  const _cloneDeep_ = (value) => {
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
        _cloneDeep_,
      );
      if (!isUndefined(result)) {
        return result;
      }
    }
    return value;
  };
  return _cloneDeep_(source);
};

_cloneDeep.func = __cloneFunc;

export default {
  _cloneDeep,
};

