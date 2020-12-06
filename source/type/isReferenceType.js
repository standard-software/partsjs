import { isPrimitiveType } from '../type/isPrimitiveType.js';

/**
 * isPrimitiveType
 */
export const isReferenceType = (value) => {
  return !isPrimitiveType(value);
};

export default { isReferenceType };
