/**
 * round
 */
export const _round = (value, digit = 0) => {
  const plusFlag = 0 <= value;
  const powResult = Math.pow(10, digit);
  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

export default { _round };
