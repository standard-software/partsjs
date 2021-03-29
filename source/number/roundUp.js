import { isNumber, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _roundUp } from '../number/_roundUp.js';

/**
 * roundUp
 */
export const roundUp = (value, digit = 0) => {
  if (isObjectParameter(value, 'value', 'digit')) {
    ({ value, digit = 0 } = value);
  } else if (isObjectParameter(digit, 'digit')) {
    ({ digit } = digit);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'roundUp args(value) is not number',
    );
  }
  if (!isInteger(digit)) {
    throw new TypeError(
      'roundUp args(digit) is not integer',
    );
  }

  return _roundUp(value, digit);
};

export default { roundUp };
