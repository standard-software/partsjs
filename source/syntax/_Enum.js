/**
 * Enum
 */
export const _Enum = function(values, useIndex = false) {
  const self = {};
  if (useIndex === false) {
    for (let i = 0, l = values.length; i < l; i += 1) {
      self[values[i]] = values[i];
    }
  } else {
    for (let i = 0, l = values.length; i < l; i += 1) {
      self[values[i]] = i;
    }
  }
  return self;
};

export default {
  _Enum,
};
