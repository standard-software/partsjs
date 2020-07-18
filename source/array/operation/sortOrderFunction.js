/**
 * sortOrderFunction
 */
export const sortOrderFunction = {};

sortOrderFunction.number = {
  ascending: (a, b) => (a - b),
  descending: (a, b) => (b - a),
};

sortOrderFunction.length = {
  ascending: (a, b) => (a.length - b.length),
  descending: (a, b) => (b.length - a.length),
};

sortOrderFunction.dictionary = {
  ascending: (a, b) => (
    a > b ? 1
    : a < b ? -1
    : 0
  ),
  descending: (a, b) => (
    a > b ? -1
    : a < b ? 1
    : 0
  ),
};

export default {
  sortOrderFunction,
};
