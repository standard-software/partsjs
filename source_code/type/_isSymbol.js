const {
  _typeofCheck, _objectToStringCheck, objectToString,
} = require('../type/isType.js');

const _isSymbol = _typeofCheck('symbol');

const _isNotSymbol   = value => !_isSymbol(value);

module.exports = {
  _isSymbol, _isNotSymbol,
};

