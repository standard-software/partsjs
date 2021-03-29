/**
 * roundDown
 */
export const _roundDown = (value, digit = 0) => {
  const plusFlag = 0 <= value;
  const powResult = Math.pow(10, digit);
  if (plusFlag) {
    return Math.floor(value * powResult) / powResult;
  } else {
    return -1 * Math.floor(-1 * value * powResult) / powResult;
  }
};

export default { _roundDown };
