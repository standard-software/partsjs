import { isNumber, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _roundDown } from '../number/_roundDown.js';

/**
 * roundDown
 */
export const roundDown = (value, digit = 0) => {
  if (isObjectParameter(value, 'value', 'digit')) {
    ({ value, digit = 0 } = value);
  } else if (isObjectParameter(digit, 'digit')) {
    ({ digit } = digit);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'roundDown args(value) is not number',
    );
  }
  if (!isInteger(digit)) {
    throw new TypeError(
      'roundDown args(digit) is not integer',
    );
  }

  return _roundDown(value, digit);
};

export default { roundDown };
