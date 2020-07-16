import array_common from './array_common.js';
import NumberArray from './NumberArray.js';
import IntegerArray from './IntegerArray.js';
import arrayToIndexValueArray from './arrayToIndexValueArray.js';
import group from './group.js';
import array_operation from './array_operation.js';
import array_operation_sort from './array_operation_sort.js';

export default {
  ...array_common,
  ...NumberArray,
  ...IntegerArray,
  ...arrayToIndexValueArray,
  ...group,
  operation: {
    ...array_operation,
    ...array_operation_sort,
  },
};

export * from './array_common.js';
export * from './NumberArray.js';
export * from './IntegerArray.js';
export * from './arrayToIndexValueArray.js';
export * from './group.js';
export const operation = {
  ...array_operation,
  ...array_operation_sort,
};
