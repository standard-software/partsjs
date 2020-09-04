/**
 * hasOwn
 */
export const _hasOwn = (object, propertyName) => {
  return Object.prototype.hasOwnProperty.call(object, propertyName);
};

export default {
  _hasOwn,
};
