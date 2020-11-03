import object_commonJs from './object_common.js';
import isObjectParameterJs from './isObjectParameter.js';
import inPropertyJs from './inProperty.js';
import fixPropertyJs from './fixProperty.js';
import _objectEntriesJs from './_objectEntries.js';
import objectEntriesJs from './objectEntries.js';
import _objectFromEntriesJs from './_objectFromEntries.js';
import objectFromEntriesJs from './objectFromEntries.js';
import objectKeysJs from './objectKeys.js';
import objectValuesJs from './objectValues.js';
import getPropertyJs from './getProperty.js';
import _hasOwnJs from './_hasOwn.js';
import hasOwnJs from './hasOwn.js';
import hasJs from './has.js';
import _propertyCountJs from './_propertyCount.js';
import propertyCountJs from './propertyCount.js';
import propertyListJs from './propertyList.js';

const objectJs = {
  ...object_commonJs,
  ...isObjectParameterJs,
  ...inPropertyJs,
  ...fixPropertyJs,
  ..._objectEntriesJs,
  ...objectEntriesJs,
  ..._objectFromEntriesJs,
  ...objectFromEntriesJs,
  ...objectKeysJs,
  ...objectValuesJs,
  ...getPropertyJs,
  ..._hasOwnJs,
  ...hasOwnJs,
  ...hasJs,
  ..._propertyCountJs,
  ...propertyCountJs,
  ...propertyListJs,
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
  _objectFromEntries,
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
  objectFromEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectFromKeyValueArray,
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
  _objectFromEntries,
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
  objectFromEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectFromKeyValueArray,
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
