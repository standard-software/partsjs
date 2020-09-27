import {
  numberToString,
  valueToString,
  stringToNumber, stringToNumberDefault,
  stringToInteger, stringToIntegerDefault,
  valueToNumber, valueToNumberDefault,
  valueToInteger, valueToIntegerDefault,
} from '../convert/convert.js';

export const numToString      = numberToString;
export const valToString      = valueToString;
export const strToNumber      = stringToNumber;
export const strToNumberDef   = stringToNumberDefault;
export const strToInteger     = stringToInteger;
export const strToIntegerDef  = stringToIntegerDefault;

export const valToNumber      = valueToNumber;
export const valToNumberDef   = valueToNumberDefault;
export const valToInteger     = valueToInteger;
export const valToIntegerDef  = valueToIntegerDefault;

export const numToStr         = numberToString;
export const valToStr         = valueToString;
export const strToNum         = stringToNumber;
export const strToNumDef      = stringToNumberDefault;
export const strToInt         = stringToInteger;
export const strToIntDef      = stringToIntegerDefault;

export const valToNum         = valueToNumber;
export const valToNumDef      = valueToNumberDefault;
export const valToInt         = valueToInteger;
export const valToIntDef      = valueToIntegerDefault;

export default {
  numToString,
  valToString,
  strToNumber, strToNumberDef,
  strToInteger, strToIntegerDef,
  valToNumber, valToNumberDef,
  valToInteger, valToIntegerDef,

  numToStr,
  valToStr,
  valToNum, valToNumDef,
  valToInt, valToIntDef,

  strToNum, strToNumDef,
  strToInt, strToIntDef,
};

