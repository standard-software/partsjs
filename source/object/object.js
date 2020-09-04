import object_common_js from './object_common.js';
import isObjectParameter_js from './isObjectParameter.js';
import inProperty_js from './inProperty.js';
import objectToKeyValueArray_js from './objectToKeyValueArray.js';
import getProperty_js from './getProperty.js';
import _hasOwn_js from './_hasOwn.js';
import hasOwn_js from './hasOwn.js';
import has_js from './has.js';
import _propertyCount_js from './_propertyCount.js';
import propertyCount_js from './propertyCount.js';

export const {
  _copyProperty,
  _setProperty,

  copyProperty,
  setProperty,

  copyProp,
  setProp,
} = object_common_js;

export const {
  isObjectParameter,
} = isObjectParameter_js;

export const {
  _inProperty,

  inProperty,
  inProp,
} = inProperty_js;

export const {
  _objectToKeyValueArray,
  objectToKeyValueArray,

  objectEntries,
} = objectToKeyValueArray_js;

export const {
  _getPropertyBase,
  _getProperty,
  getProperty,
  getProp,
} = getProperty_js;

export const {
  _hasOwn,
} = _hasOwn_js;

export const {
  hasOwn,
} = hasOwn_js;

export const {
  _hasPrototype, _has,
  hasPrototype, has,
} = has_js;

export const {
  _propertyCount,
} = _propertyCount_js;

export const {
  propertyCount,
  propCount,
} = propertyCount_js;

export default {
  ...object_common_js,
  ...isObjectParameter_js,
  ...inProperty_js,
  ...objectToKeyValueArray_js,
  ...getProperty_js,
  ..._hasOwn_js,
  ...hasOwn_js,
  ...has_js,
  ..._propertyCount_js,
  ...propertyCount_js,
};
