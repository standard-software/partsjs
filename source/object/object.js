import objectToKeyValueArray from './objectToKeyValueArray.js';
import inProperty from './inProperty.js';
import isObjectParameter from './isObjectParameter.js';
import object_common from './object_common.js';

import getProperty from './getProperty.js';
import has from './has.js';
export default {
  ...object_common,
  ...isObjectParameter,
  ...inProperty,
  ...objectToKeyValueArray,
  ...getProperty,
  ...has,
}

export * from './object_common.js'
export * from './isObjectParameter.js'
export * from './inProperty.js'
export * from './objectToKeyValueArray.js'
export * from './getProperty.js';