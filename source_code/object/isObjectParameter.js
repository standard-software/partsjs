const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/isType.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

const {
  _propertyCount,
} = require('../object/_propertyCount.js');

/**
 * isObjectParameter
 */
const isObjectParameter = (
  object,
  props,
  defaultProps = '',
) => {

  if (!isObject(object)) {
    return false;
  }
  if (!isString(props)) {
    return false;
  }
  if (!isString(defaultProps)) {
    return false;
  }

  props = _replaceAll(props, ' ', '').split(',');

  defaultProps = _replaceAll(defaultProps, ' ', '').split(',');

  let propMatchCount = 0;
  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      if (props.includes(property)) {
        propMatchCount += 1;
      } else if (defaultProps.includes(property)) {
      } else {
        return false;
      }
    }
  }
  if (propMatchCount !== props.length) {
    return false;
  }

  return true;
};

module.exports = {
  isObjectParameter,
};
