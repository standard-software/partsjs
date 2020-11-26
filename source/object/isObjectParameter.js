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

import {
  _hasOwn,
} from '../object/_hasOwn.js';

import {
  __includes,
} from '../compare/__includes.js';

/**
 * isObjectParameter
 */
export const _isObjectParameter = (
  object,
  props,
  optionalProps = '',
  optionalMinCount = 0,
) => {
  if (!isObject(object)) {
    return false;
  }

  props = _replaceAll(props, ' ', '').split(',');
  if (props[props.length - 1]  === '') {
    props.splice(props.length - 1, 1);
  }
  // props = _splitCommaItems(props); // Circular reference Error

  optionalProps = _replaceAll(optionalProps, ' ', '').split(',');
  if (optionalProps[optionalProps.length - 1]  === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  let propMatchCount = 0;
  let optionalPropMatchCount = 0;
  for (const property in object) {
    if (_hasOwn(object, property)) {
      if (__includes(props, property)) {
        propMatchCount += 1;
      } else if (__includes(optionalProps, property)) {
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

export const isObjectParameter = (
  object,
  props,
  optionalProps = '',
  optionalMinCount = 0,
) => {

  if (!isString(props)) {
    throw new TypeError(
      'isObjectParameter args(props) is not string',
    );
  }
  if (!isString(optionalProps)) {
    throw new TypeError(
      'isObjectParameter args(optionalProps) is not string',
    );
  }
  if (!isInteger(optionalMinCount)) {
    throw new TypeError(
      'isObjectParameter args(optionalMinCount) is not integer',
    );
  }

  return _isObjectParameter(
    object, props, optionalProps, optionalMinCount,
  );
};

export default {
  _isObjectParameter,
  isObjectParameter,
};
