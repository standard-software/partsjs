import { isString } from '../type/type.js';
import { _escapeRegExp } from './_escapeRegExp.js';

/**
 * escapeRegExp
 */
export const escapeRegExp = (str) => {

  if (!isString(str)) {
    throw new TypeError(
      'escapeRegExp args(str) is not string',
    );
  }

  return _escapeRegExp(str);
};

export default { escapeRegExp };
