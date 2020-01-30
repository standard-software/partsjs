const {
  _typeofCheck, _objectToStringCheck, objectToString,
} = require('../type/isType.js');

const isSymbol = _typeofCheck('symbol');

const isNotSymbol   = value => !isSymbol(value);

module.exports = {
  isSymbol, isNotSymbol,
};

