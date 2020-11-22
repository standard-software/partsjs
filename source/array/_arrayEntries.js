/**
 * arrayEntries
 */
export const _arrayEntries = (array) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }
  return result;
};

export default {
  _arrayEntries,
};
