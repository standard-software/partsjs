/**
 * array.operation.popArrayLast
 */
export const _popArrayLast = (array, length = 1) => {
  return array.splice(array.length - length, length);
};

export default { _popArrayLast };
