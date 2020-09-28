/**
 * array.max
 */
export const _max = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (result < array[i]) {
      result = array[i];
    }
  }
  return result;
};

export default {
  _max,
};
