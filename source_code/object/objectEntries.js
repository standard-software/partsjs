const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/isType.js');

const objectEntries = (object) => {
  const result = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
};

module.exports = {
  objectEntries,
};
