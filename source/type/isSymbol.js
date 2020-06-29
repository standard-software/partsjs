import {
  _objectToStringCheck, objectToString,
} from '../type/isType.js';

export const isSymbol = (value) => typeof value === 'symbol';

export const isNotSymbol   = value => !isSymbol(value);

export default {
  isSymbol, isNotSymbol,
}

