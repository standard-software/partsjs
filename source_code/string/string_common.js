const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _match,
} = require('../compare/compare.js');

const {
  _inProperty,
} = require('../object/_inProperty.js');

const {
  _map,
} = require('../array/array.js');

/**
 * matchFormat
 */
const _matchFormat = (
  formatName,
  value,
) => {
  const patterns = Object.keys(_matchFormat.pattern);
  const index = patterns.indexOf(formatName);
  if (index === -1) {
    throw new RangeError(
      `_matchFormat args(formatName:${formatName}) is not exists format`,
    );
  }
  const result = _matchFormat.pattern[patterns[index]](value);
  if (!_isBoolean(result)) {
    throw new RangeError(
      `_matchFormat args(formatName:${formatName})` +
      ` function result is not boolean`,
    );
  }
  return result;
};

_matchFormat.pattern = {};

_matchFormat.clear = () => {
  _matchFormat.pattern = {};
};
_matchFormat.add = (nameArray, patternFunction) => {
  nameArray.forEach(name => {
    _matchFormat.pattern[name] = patternFunction;
  });
};
_matchFormat.reset = () => {

  _matchFormat.add(['zenkaku'],
    value => value.match(
      /^[^\x01-\x7E\xA1-\xDF]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['hiragana'],
    value => value.match(
      /^[\u3041-\u3096]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['katakana'],
    value => value.match(
      /^[\u30a1-\u30f6]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['alphabet-number'],
    value => value.match(
      /^[0-9a-zA-Z]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['number'],
    value => value.match(
      /^[0-9]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['alphabet'],
    value => value.match(
      /^[a-zA-Z]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['upper_alphabet'],
    value => value.match(
      /^[A-Z]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['lower_alphabet'],
    value => value.match(
      /^[a-z]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['integer'],
    value => value.match(
      /^[+|-]?[0-9]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['float_only'],
    value => value.match(
      /^[-|+]?[0-9]*\.[0-9]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['float_integer'],
    value => value.match(
      /^[-|+]?[0-9]*\.[0-9]+$|^[+|-]?[0-9]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['float_more'],
    value => value.match(
      // eslint-disable-next-line max-len
      /^[-|+]?[0-9]*\.[0-9]*$|^[+|-]?[0-9]+$|^[-|+]?[0-9]+\.?[0-9]*([eE][+-]?[0-9]+)?$/,
    ) ? true : false,
  );
  // float_more
  //  integer + float + exponential notation
  //  value.match(new RegExp(
  //    '^[-|+]?[0-9]*\\.[0-9]*$' +
  //    '|^[+|-]?[0-9]+$' +
  //    '|^[-|+]?[0-9]+\\.?[0-9]*([eE][+-]?[0-9]+)?$'
  //  , 'g'))) ? true : false;

  _matchFormat.add(['2_base_number', 'binary'],
    value => value.match(
      /^[-|+]?[01]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['3_base_number'],
    value => value.match(
      /^[-|+]?[0-2]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['4_base_number'],
    value => value.match(
      /^[-|+]?[0-3]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['5_base_number'],
    value => value.match(
      /^[-|+]?[0-4]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['6_base_number'],
    value => value.match(
      /^[-|+]?[0-5]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['7_base_number'],
    value => value.match(
      /^[-|+]?[0-6]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['8_base_number', 'octal'],
    value => value.match(
      /^[-|+]?[0-7]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['9_base_number'],
    value => value.match(
      /^[-|+]?[0-8]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['10_base_number'],
    value => value.match(
      /^[-|+]?[0-9]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['11_base_number'],
    value => value.match(
      /^[-|+]?[0-9A]+$|^[-|+]?[0-9a]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['12_base_number'],
    value => value.match(
      /^[-|+]?[0-9AB]+$|^[-|+]?[0-9ab]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['13_base_number'],
    value => value.match(
      /^[-|+]?[0-9A-C]+$|^[-|+]?[0-9a-c]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['14_base_number'],
    value => value.match(
      /^[-|+]?[0-9A-D]+$|^[-|+]?[0-9a-d]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['15_base_number'],
    value => value.match(
      /^[-|+]?[0-9A-E]+$|^[-|+]?[0-9a-e]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['16_base_number', 'hex'],
    value => value.match(
      /^[-|+]?[0-9A-F]+$|^[-|+]?[0-9a-f]+$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_y/m/d', 'date'],
    value => value.match(
      /^\d{1,4}\/\d{1,2}\/\d{1,2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_yyyy/m/d'],
    value => value.match(
      /^\d{4}\/\d{1,2}\/\d{1,2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_yyyy/mm/dd'],
    value => value.match(
      /^\d{4}\/\d{2}\/\d{2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_y/m/d_h:n'],
    value => value.match(
      /^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_y/m/d_h:n:s'],
    value => value.match(
      /^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_y/m/d_h:n:s.ms'],
    value => value.match(
      /^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}\.\d{1,3}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_y-m-d'],
    value => value.match(
      /^\d{1,4}-\d{1,2}-\d{1,2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_yyyy-m-d'],
    value => value.match(
      /^\d{4}-\d{1,2}-\d{1,2}$/,
    ) ? true : false,
  );
  _matchFormat.add(['date_yyyy-mm-dd'],
    value => value.match(
      /^\d{4}-\d{2}-\d{2}$/,
    ) ? true : false,
  );
};
_matchFormat.reset();

const matchFormat = (
  formatName,
  value,
) => {
  if (_inProperty(formatName, 'formatName,value')) {
    ({ formatName, value } = formatName);
  }

  if (!_isString(formatName)) {
    throw new TypeError(
      'matchFormat args(formatName) is not string',
    );
  }
  if (!_isString(value)) {
    throw new TypeError(
      'matchFormat args(value) is not string',
    );
  }

  return _matchFormat(
    formatName,
    value,
  );
};

/**
 * includes
 */
const _includes = (
  value,
  compareArray,
) => {
  const compareFunctionArray =
    _map(compareArray, (element) => {
      if (_isRegExp(element)) {
        return element;
      } else if (_isString(element)) {
        return element === ''
          ? () => false
          : value => value.indexOf(element) >= 0;
      } else {
        throw new TypeError(
          '_includes args(compareArray element) is not [regexp|string]',
        );
      }
    });
  return _match(value, compareFunctionArray);
};

const includes = (
  value,
  compareArray,
) => {
  if (_inProperty(value, 'value, compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'includes args(value) is not string',
    );
  }
  if (!_isArray(compareArray)) {
    throw new TypeError(
      'includes args(compareArray) is not array',
    );
  }

  return _includes(value, compareArray);
};

/**
 * repeat
 */
const _repeat = (
  value,
  count,
) => {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += value;
  }
  return result;
};

const repeat = (
  value,
  count,
) => {
  if (_inProperty(value, 'value, count')) {
    ({ value, count } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'repeat args(value) is not string',
    );
  }
  if (!_isInteger(count)) {
    throw new TypeError(
      'includes args(compareArray) is not array',
    );
  }

  return _repeat(value, count);
};

module.exports = {
  _matchFormat, _includes,
  _repeat,
  matchFormat, includes,
  repeat,

};
