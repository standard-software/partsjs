import { __includes } from '../compare/__includes.js';
import { typeName } from '../type/typeName.js';

export const isPrimitiveType = (value) => {
  const name = typeName(value);
  if (__includes([
    'Undefined',
    'Null',
    'Boolean',
    'Number',
    'NaN',
    'Infinity',
    'String',
    'Symbol',
  ], name)) {
    return true;
  }
  return false;
};

export default { isPrimitiveType };
