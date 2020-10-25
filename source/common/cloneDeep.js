import { isArray } from '../type/type.js';
import { _copyProperty } from '../object/object.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { clone } from '../common/clone.js';
import { _cloneDeep } from '../common/_cloneDeep.js';

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

export default { cloneDeep };

