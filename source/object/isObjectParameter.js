import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
} from '../type/isType.js';

import {
  _replaceAll,
} from '../string/_replaceAll.js';

import {
  _propertyCount,
} from '../object/_propertyCount.js';

/**
 * isObjectParameter
 */
export const isObjectParameter = (
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
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      if (props.indexOf(property) !== -1) {
        propMatchCount += 1;
      } else if (optionalProps.indexOf(property) !== -1) {
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

export default {
  isObjectParameter,
};
