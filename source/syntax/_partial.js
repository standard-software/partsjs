
export const _partial = (func, applyArgs) => {
  return (...args) => {
    const applyArray = [...applyArgs];
    for (const arg of args) {
      const emptyIndex = applyArray.indexOf(_partial.empty);
      if (emptyIndex !== -1) {
        applyArray[emptyIndex] = arg;
      } else {
        applyArray.push(arg);
      }
    }
    return func(...applyArray.map(e => e === _partial.empty ? undefined : e));
  };
};

_partial.empty = {};

export default { _partial };
