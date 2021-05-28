/**
 * escapeRegExp
 */
export const _escapeRegExp = (str) => {
  return str.replace(/[\\^$.*+-?(){}[\]\|\/]/g, '\\$&');
};

export default { _escapeRegExp };
