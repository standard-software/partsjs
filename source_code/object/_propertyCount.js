/**
 * propertyCount
 */
const _propertyCount = (
  object,
  hasOwn = true,
) => {
  let result = 0;
  if (hasOwn) {
    for (const property in object) {
      if (object.hasOwnProperty(property)) {
        result += 1;
      }
    }
  } else {
    for (const property in object) {
      result += 1;
    }
  }
  return result;
};

module.exports = {
  _propertyCount,
};
