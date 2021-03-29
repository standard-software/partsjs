/**
 * roundUp
 */
export const _roundUp = (value, digit = 0) => {
  const plusFlag = 0 <= value;
  const powResult = Math.pow(10, digit);
  if (plusFlag) {
    return Math.ceil(value * powResult) / powResult;
  } else {
    return -1 * Math.ceil(-1 * value * powResult) / powResult;
  }
};

export default { _roundUp };
