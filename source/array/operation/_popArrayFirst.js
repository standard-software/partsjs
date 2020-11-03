/**
 * array.operation.popArrayFirst
 */
export const _popArrayFirst = (array, length = 1) => {
  return array.splice(0, length);
};

export default { _popArrayFirst };
