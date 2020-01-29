const {
 isError,
} = require('../type/isType.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

/**
 *isException
 * description:
 * isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
const isException = (value) => {
  if (isObjectParameter(value, 'name,message')) {
    return true;
  } else if (isError(value)) {
    return true;
  }
  return false;
};

const isNotException   = value => !isException(value);

module.exports = {
 isException,
 isNotException,
};

