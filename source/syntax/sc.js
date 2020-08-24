/**
 * sc (second call)
 */
export const sc = (
  argsFirst,
  func,
  ...argsRest
) => {
  return func(argsFirst, ...argsRest);
};

export default {
  sc,
};
