import {
  isError,
} from '../type/isType.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 *isException
 * description:
 * isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
export const isException = (value) => {
  if (isObjectParameter(value, 'name,message')) {
    return true;
  } else if (isError(value)) {
    return true;
  }
  return false;
};

export const isNotException   = value => !isException(value);

export const isExcept    = isException;
export const isNotExcept   = isNotException;

export default {
  isException,
  isNotException,

  isExcept,
  isNotExcept,
}

