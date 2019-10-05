const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _inProperty,
} = require('../object/_inProperty.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

const replaceAll = (str, before, after) => {
  if (_inProperty(str, 'str,before,after')) {
    ({ str, before, after } = str);
  }

  if (!_isString(str)) {
    throw new TypeError(
      'replaceAll args(str) is not string'
    );
  }
  if (!_isString(before)) {
    throw new TypeError(
      'replaceAll args(before) is not string'
    );
  }
  if (!_isString(after)) {
    throw new TypeError(
      'replaceAll args(after) is not string'
    );
  }

  return _replaceAll(str, before, after);
}

module.exports = {
  replaceAll,
};