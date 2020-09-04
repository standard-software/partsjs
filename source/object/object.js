import object_common_js from './object_common.js';
import isObjectParameter_js from './isObjectParameter.js';
import inProperty_js from './inProperty.js';
import objectEntries_js from './objectEntries.js';
import objectKeys_js from './objectKeys.js';
import objectValues_js from './objectValues.js';
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
  _objectEntries,
  objectEntries,
  objectToKeyValueArray,
} = objectEntries_js;

export const {
  _objectKeys,
  objectKeys,
  objectToKeyArray,
} = objectKeys_js;

export const {
  _objectValues,
  objectValues,
  objectToValueArray,
} = objectValues_js;

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
  ...objectEntries_js,
  ...objectKeys_js,
  ...objectValues_js,
  ...getProperty_js,
  ..._hasOwn_js,
  ...hasOwn_js,
  ...has_js,
  ..._propertyCount_js,
  ...propertyCount_js,
};
