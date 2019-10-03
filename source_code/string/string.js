const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _match,
} = require('../compare/compare.js');

/**
 * matchFormat
 */
const _matchFormat = (
  formatName,
  value,
) => {
  switch (formatName) {
    case 'zenkaku':
      return (value.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) ? true : false;
    case 'hiragana':
      return (value.match(/^[\u3041-\u3096]+$/)) ? true : false;
    case 'katakana':
      return (value.match(/^[\u30a1-\u30f6]+$/)) ? true : false;
    case 'alphabet-number':
      return (value.match(/^[0-9a-zA-Z]+$/)) ? true : false;
    case 'number':
      return (value.match(/^[0-9]+$/)) ? true : false;
    case 'alphabet':
      return (value.match(/^[a-zA-Z]+$/)) ? true : false;
    case 'upper_alphabet':
      return (value.match(/^[A-Z]+$/)) ? true : false;
    case 'lower_alphabet':
      return (value.match(/^[a-z]+$/)) ? true : false;
    case 'integer':
      return (value.match(/^[+|-]?[0-9]+$/)) ? true : false;
    case 'float_only':
      return (value.match(/^[-|+]?[0-9]*\.[0-9]+$/)) ? true : false;
    case 'float':
      return (value.match(/^[-|+]?[0-9]*\.[0-9]+$|^[+|-]?[0-9]+$/)) ? true : false;

    case '2_base_number': case 'binary':
      return (value.match(/^[-|+]?[01]+$/)) ? true : false;
    case '3_base_number':
      return (value.match(/^[-|+]?[0-2]+$/)) ? true : false;
    case '4_base_number':
      return (value.match(/^[-|+]?[0-3]+$/)) ? true : false;
    case '5_base_number':
      return (value.match(/^[-|+]?[0-4]+$/)) ? true : false;
    case '6_base_number':
      return (value.match(/^[-|+]?[0-5]+$/)) ? true : false;
    case '7_base_number':
      return (value.match(/^[-|+]?[0-6]+$/)) ? true : false;
    case '8_base_number': case 'octal':
      return (value.match(/^[-|+]?[0-7]+$/)) ? true : false;
    case '9_base_number':
      return (value.match(/^[-|+]?[0-8]+$/)) ? true : false;
    case '10_base_number':
      return (value.match(/^[-|+]?[0-9]+$/)) ? true : false;
    case '11_base_number':
      return (value.match(/^[-|+]?[0-9A]+$|^[-|+]?[0-9a]+$/)) ? true : false;
    case '12_base_number':
      return (value.match(/^[-|+]?[0-9AB]+$|^[-|+]?[0-9ab]+$/)) ? true : false;
    case '13_base_number':
      return (value.match(/^[-|+]?[0-9A-C]+$|^[-|+]?[0-9a-c]+$/)) ? true : false;
    case '14_base_number':
      return (value.match(/^[-|+]?[0-9A-D]+$|^[-|+]?[0-9a-d]+$/)) ? true : false;
    case '15_base_number':
      return (value.match(/^[-|+]?[0-9A-E]+$|^[-|+]?[0-9a-e]+$/)) ? true : false;
    case '16_base_number': case 'hex':
      return (value.match(/^[-|+]?[0-9A-F]+$|^[-|+]?[0-9a-f]+$/)) ? true : false;
    case 'date':
      // y/m/d
      return (value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}$/)) ? true : false;
    case 'date-minutes':
      // y/m/d h:n
      return (value.match(
        /^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}$/)) ? true : false;
    case 'date-seconds':
      // y/m/d h:n:s
      return (value.match(
        /^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}$/))
        ? true : false;
    case 'date-milliseconds':
      // y/m/d h:n:s.ms
      return (value.match(
        /^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}\.\d{1,3}$/))
        ? true : false;
    default:
      throw new RangeError(
        `matchFormat args(formatName) is not exists format. ${formatName}`
      );
  }
};

const matchFormat = (
  formatName,
  value,
) => {
  if (_isObject(formatName)
  && ('formatName' in formatName)
  && ('value' in formatName)) {
    ({ formatName, value } = formatName);
  }

  if (!_isString(formatName)) {
    throw new TypeError(
      'matchFormat args(formatName) is not string'
    );
  }
  if (!_isString(value)) {
    throw new TypeError(
      'matchFormat args(value) is not string'
    );
  }

  return _matchFormat(
    formatName,
    value
  );
};

/**
 * includes
 */
const _includes = (
  value,
  compareArray
) => {
  const compareFunctionArray =
    compareArray.map((element) => {
      if (_isRegExp(element)) {
        return element
      } else if (_isString(element)) {
        return element === ''
          ? () => false
          : value => value.includes(element)
      } else {
        throw new TypeError(
          '_includes args(compareArray element) is not [regexp|string]'
        );
      }
    });
  return _match(value, compareFunctionArray);
}

const includes = (
  value,
  compareArray
) => {
  if (_isObject(value)
  && ('value' in value)
  && ('compareArray' in value)) {
    ({ value, compareArray } = value);
  }

  if (!_isArray(compareArray)) {
    throw new TypeError(
      'includes args(compareArray) is not array'
    );
  }

  return _includes(value, compareArray);
}

module.exports = {
  _matchFormat,_includes,
  matchFormat,includes,
};