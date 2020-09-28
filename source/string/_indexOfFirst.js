/**
 * indexOfFirst
 */
export const _indexOfFirst = (str, search, indexStart) => {
  if (search === '') {
    return -1;
  }
  return str.indexOf(search, indexStart);
};

export default {
  _indexOfFirst,
};
