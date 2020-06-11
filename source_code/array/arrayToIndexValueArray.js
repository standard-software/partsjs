const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _NumberArray,
} = require('../array/NumberArray.js');

/**
 * arrayToIndexValueArray
 */
const _arrayToIndexValueArray = (array) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }
  return result;
};

const arrayToIndexValueArray = (array) => {
  if (isObjectParameter(array, 'array')) {
    ({ array } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'arrayToIndexValueArray args(array) is not array',
    );
  }

  return _arrayToIndexValueArray(array);
};

const arrayEntries = arrayToIndexValueArray;

module.exports = {
  _arrayToIndexValueArray,
  arrayToIndexValueArray,

  arrayEntries,
};
