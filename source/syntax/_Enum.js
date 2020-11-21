/**
 * Enum
 */
export const _Enum = function(values, useIndex = false) {
  if (!(this instanceof _Enum)) {
    return new _Enum(values, useIndex);
  }

  if (useIndex === false) {
    for (let i = 0, l = values.length; i < l; i += 1) {
      this[values[i]] = values[i];
    }
  } else {
    for (let i = 0, l = values.length; i < l; i += 1) {
      this[values[i]] = i;
    }
  }
};

export default {
  _Enum,
};
