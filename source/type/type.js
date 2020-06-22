import isTypeArray from './isTypeArray.js';
import isTypeAll from './isTypeAll.js';
import isSet from './isSet.js';
import isMap from './isMap.js';
import isSymbol from './isSymbol.js';
import isException from './isException.js';
import isType from './isType.js';
export default {
  ...isType,
  ...isException,
  ...isSymbol,
  ...isMap,
  ...isSet,
  ...isTypeAll,
  ...isTypeArray,
}

export * from './isType.js'
export * from './isException.js'
export * from './isSymbol.js'
export * from './isMap.js'
export * from './isSet.js'
export * from './isTypeAll.js'
export * from './isTypeArray.js'