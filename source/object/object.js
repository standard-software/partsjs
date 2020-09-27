import object_common_js from './object_common.js';
import isObjectParameter_js from './isObjectParameter.js';
import inProperty_js from './inProperty.js';
import fixProperty_js from './fixProperty.js';
import objectEntries_js from './objectEntries.js';
import objectKeys_js from './objectKeys.js';
import objectValues_js from './objectValues.js';
import getProperty_js from './getProperty.js';
import _hasOwn_js from './_hasOwn.js';
import hasOwn_js from './hasOwn.js';
import has_js from './has.js';
import _propertyCount_js from './_propertyCount.js';
import propertyCount_js from './propertyCount.js';
import propertyList_js from './propertyList.js';

const objectJs = {
  ...object_common_js,
  ...isObjectParameter_js,
  ...inProperty_js,
  ...fixProperty_js,
  ...objectEntries_js,
  ...objectKeys_js,
  ...objectValues_js,
  ...getProperty_js,
  ..._hasOwn_js,
  ...hasOwn_js,
  ...has_js,
  ..._propertyCount_js,
  ...propertyCount_js,
  ...propertyList_js,
};

export const {
  _isObjectParameter,
  _copyProperty,
  _getProperty,
  _setProperty,
  _inProperty,
  _fixProperty,
  _propertyCount,
  _propertyList,
  _objectEntries,
  _objectKeys,
  _objectValues,
  _hasOwn,
  _hasPrototype,
  _has,

  isObjectParameter,
  copyProperty,
  getProperty,
  setProperty,
  inProperty,
  fixProperty,
  propertyCount,
  propertyList,
  objectEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectToKeyArray,
  objectToValueArray,

  // Short name
  copyProp,
  getProp,
  setProp,
  inProp,
  fixProp,
  propCount,
} = objectJs;

export default {
  _isObjectParameter,

  _copyProperty,
  _getProperty,
  _setProperty,
  _inProperty,
  _fixProperty,
  _propertyCount,
  _propertyList,
  _objectEntries,
  _objectKeys,
  _objectValues,
  _hasOwn,
  _hasPrototype,
  _has,

  isObjectParameter,

  copyProperty,
  getProperty,
  setProperty,
  inProperty,
  fixProperty,
  propertyCount,
  propertyList,
  objectEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectToKeyArray,
  objectToValueArray,

  // Short name
  copyProp,
  getProp,
  setProp,
  inProp,
  fixProp,
  propCount,
};
