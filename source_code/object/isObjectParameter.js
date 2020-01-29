const {
 isUndefined,isNull,isNaNStrict,
 isBoolean,isNumber,isInteger,isString,
 isFunction,isObject,isArray,isDate,isRegExp,
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
  propertyArray,
  defaultPropertyArray = [],
) => {

  if (!isObject(object)) {
    return false;
  }

  const filterArray = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      if ((array[i] === '')
      || (isUndefined(array[i]))) {
        continue;
      }
      if (!isString(array[i])) {
        throw new TypeError(
          'isObjectParameter args(propertyArray|defaultPropertyArray)' +
          ' element is not string',
        );
      }
      result.push(array[i]);
    }
    return result;
  };

  if (isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }
  propertyArray = filterArray(propertyArray);

  if (isString(defaultPropertyArray)) {
    defaultPropertyArray =
      _replaceAll(defaultPropertyArray, ' ', '').split(',');
  }
  defaultPropertyArray = filterArray(defaultPropertyArray);

  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      if (!(
        (propertyArray.indexOf(property) !== -1)
        || (defaultPropertyArray.indexOf(property) !== -1)
      )) {
        return false;
      }
    }
  }

  for (let i = 0; i < propertyArray.length; i += 1) {
    if (!object.hasOwnProperty(propertyArray[i])) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isObjectParameter,
};
