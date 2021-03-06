import { isNumber, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _round } from '../number/_round.js';

/**
 * round
 */
export const round = (value, digit = 0) => {
  if (isObjectParameter(value, 'value', 'digit')) {
    ({ value, digit = 0 } = value);
  } else if (isObjectParameter(digit, 'digit')) {
    ({ digit } = digit);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'round args(value) is not number',
    );
  }
  if (!isInteger(digit)) {
    throw new TypeError(
      'round args(digit) is not integer',
    );
  }

  return _round(value, digit);
};

export default { round };
