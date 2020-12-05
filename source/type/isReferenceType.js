import { isPrimitiveType } from '../type/isPrimitiveType.js';

export const isReferenceType = (value) => {
  return !isPrimitiveType(value);
};

export default { isReferenceType };
