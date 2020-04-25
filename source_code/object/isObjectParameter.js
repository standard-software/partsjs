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
  optionalProps = '',
  optionalMinCount = 0,
) => {

  if (!isObject(object)) {
    return false;
  }
  if (!isString(props)) {
    return false;
  }
  if (!isString(optionalProps)) {
    return false;
  }

  props = _replaceAll(props, ' ', '').split(',');
  // last element === '' delete
  if (props[props.length - 1]  === '') {
    props.splice(props.length - 1, 1);
  }

  optionalProps = _replaceAll(optionalProps, ' ', '').split(',');
  if (optionalProps[optionalProps.length - 1]  === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  let propMatchCount = 0;
  let optionalPropMatchCount = 0;
  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      if (props.includes(property)) {
        propMatchCount += 1;
      } else if (optionalProps.includes(property)) {
        optionalPropMatchCount += 1;
      } else {
        return false;
      }
    }
  }
  if (propMatchCount !== props.length) {
    return false;
  }
  if (optionalPropMatchCount < optionalMinCount) {
    return false;
  }

  return true;
};

module.exports = {
  isObjectParameter,
};
