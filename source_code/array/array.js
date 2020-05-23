module.exports = {
  ...require('./array_common.js'),
  ...require('./NumberArray.js'),
  ...require('./IntegerArray.js'),
  ...require('./arrayToIndexValueArray.js'),
  operation: {
    ...require('./array_operation.js'),
    ...require('./array_operation_sort.js'),
  },
};
