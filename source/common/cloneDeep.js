import { isUndefined, isArray } from '../type/type.js';
import { _copyProperty } from '../object/object.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _cloneDeep } from '../common/_cloneDeep.js';
import { __cloneFunc } from '../common/__cloneFunc.js';

export const cloneDeep = (
  source,
  cloneFuncArray,
) => {
  if (isObjectParameter(source, 'source', 'cloneFuncArray')) {
    ({ source, cloneFuncArray = cloneDeep.func.defaultArray } = source);
  } else if (isObjectParameter(cloneFuncArray, 'cloneFuncArray')) {
    ({ cloneFuncArray } = cloneFuncArray);
  }

  if (!(isUndefined(cloneFuncArray) || isArray(cloneFuncArray))) {
    throw new TypeError(
      'cloneDeep args(cloneFuncArray) is not array',
    );
  }

  return _cloneDeep(source, cloneFuncArray);
};

cloneDeep.func = __cloneFunc;

export default { cloneDeep };

