/**
 * SortFunc.order
 */
export const __SortFuncOrder = {};

__SortFuncOrder.normal = {};
__SortFuncOrder.normal.ascending = (a, b) => (
  a < b ? -1
  : a > b ? 1
  : 0
);
__SortFuncOrder.normal.descending = (a, b) => (
  -1 * __SortFuncOrder.normal.ascending(a, b)
);

__SortFuncOrder.dictionaryUpperCase = {};
__SortFuncOrder.dictionaryUpperCase.ascending = (a, b) => {
  const al = a.toLowerCase();
  const bl = b.toLowerCase();
  return (
    al < bl ? -1
    : al > bl ? 1
    : a < b ? -1
    : a > b ? 1
    : 0
  );
};
__SortFuncOrder.dictionaryUpperCase.descending = (a, b) => (
  -1 * __SortFuncOrder.dictionaryUpperCase.ascending(a, b)
);

__SortFuncOrder.dictionaryLowerCase = {};
__SortFuncOrder.dictionaryLowerCase.ascending = (a, b) => {
  const al = a.toLowerCase();
  const bl = b.toLowerCase();
  return (
    al < bl ? -1
    : al > bl ? 1
    : a < b ? 1
    : a > b ? -1
    : 0
  );
};
__SortFuncOrder.dictionaryLowerCase.descending = (a, b) => (
  -1 * __SortFuncOrder.dictionaryLowerCase.ascending(a, b)
);

__SortFuncOrder.version = {};
__SortFuncOrder.version.ascending = (a, b) => {
  const arrayA = a.split('.');
  const arrayB = b.split('.');
  const length = Math.min(arrayA.length, arrayB.length);
  for (let i = 0; i < length; i += 1) {
    const numberA = parseInt(arrayA[i], 10);
    const numberB = parseInt(arrayB[i], 10);
    if (numberA < numberB) { return -1; }
    if (numberA > numberB) { return 1; }
    const valueA = arrayA[i];
    const valueB = arrayB[i];
    const lowerA = valueA.toLowerCase();
    const lowerB = valueB.toLowerCase();
    if (lowerA < lowerB) { return -1; }
    if (lowerA > lowerB) { return 1; }
    if (valueA < valueB) { return 1; }
    if (valueA > valueB) { return -1; }
    // lowerCase < upperCase
  }
  if (arrayA.length < arrayB.length) { return -1; }
  if (arrayA.length > arrayB.length) { return 1; }
  return 0;
};
__SortFuncOrder.version.descending = (a, b) => (
  -1 * __SortFuncOrder.version.ascending(a, b)
);

export default { __SortFuncOrder };
