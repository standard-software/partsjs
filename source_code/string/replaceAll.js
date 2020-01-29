const {
 isUndefined,isNull,isNaNStrict,
 isBoolean,isNumber,isInteger,isString,
 isFunction,isObject,isArray,isDate,isRegExp,
 isException,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

const replaceAll = (str, before, after) => {
  if (isObjectParameter(str, 'str, before, after')) {
    ({ str, before, after } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'replaceAll args(str) is not string',
    );
  }
  if (!isString(before)) {
    throw new TypeError(
      'replaceAll args(before) is not string',
    );
  }
  if (!isString(after)) {
    throw new TypeError(
      'replaceAll args(after) is not string',
    );
  }

  return _replaceAll(str, before, after);
};

module.exports = {
  replaceAll,
};
