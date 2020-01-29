const {
  _isError,
} = require('../type/isType.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

/**
 * _isException
 * description:
 *  _isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
const _isException = (value) => {
  if (isObjectParameter(value, 'name,message')) {
    return true;
  } else if (_isError(value)) {
    return true;
  }
  return false;
};

const _isNotException   = value => !_isException(value);

module.exports = {
  _isException,
  _isNotException,
};

