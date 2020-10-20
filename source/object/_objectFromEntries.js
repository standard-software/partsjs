/**
 * objectFromEntries
 */
export const _objectFromEntries = (entries) => {
  const result = {};
  for (let i = 0, l = entries.length; i < l; i += 1) {
    const [key, value] = entries[i];
    result[key] = value;
  }
  return result;
};

export default {
  _objectFromEntries,
};
