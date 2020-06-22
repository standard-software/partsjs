import {
  _typeofCheck, _objectToStringCheck, objectToString,
} from '../type/isType.js';

export const isSymbol = _typeofCheck('symbol');

export const isNotSymbol   = value => !isSymbol(value);

export default {
  isSymbol, isNotSymbol,
}

