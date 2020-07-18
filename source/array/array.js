import array_common from './array_common.js';
import NumberArray from './NumberArray.js';
import IntegerArray from './IntegerArray.js';
import arrayToIndexValueArray from './arrayToIndexValueArray.js';
import group from './group.js';
import unique from './unique.js';
import array_operation from './array_operation.js';
import sort from './operation/sort.js';

export default {
  ...array_common,
  ...NumberArray,
  ...IntegerArray,
  ...arrayToIndexValueArray,
  ...group,
  ...unique,
  operation: {
    ...array_operation,
    ...sort,
  },
};

export * from './array_common.js';
export * from './NumberArray.js';
export * from './IntegerArray.js';
export * from './arrayToIndexValueArray.js';
export * from './group.js';
export * from './unique.js';
export const operation = {
  ...array_operation,
  ...sort,
};
