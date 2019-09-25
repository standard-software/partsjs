const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('./type.js');

const {
  initialValue,
} = require('./compare.js');

const _copyProperty = (fromObject, propertyString, toObject = {}) => {
  const propertyArray = propertyString.split(',');
  for (let i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '') {
      continue;
    }
    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }
  return toObject;
}

const copyProperty = (fromObject, propertyString, toObject = {}) => {
  let param;
  if (_isObject(fromObject)
  && ('fromObject' in fromObject)
  && ('propertyString' in fromObject)) {
    param = fromObject;
    param.toObject = initialValue(param.toObject, {});
  } else {
    param = { fromObject, propertyString, toObject }
  }

  if (!_isObject(param.fromObject)) {
    throw new TypeError(
      'copyProperty args(fromObject) is not object'
    );
  }
  if (!_isString(param.propertyString)) {
    throw new TypeError(
      'copyProperty args(propertyString) is not object'
    );
  }
  if (!_isObject(param.toObject)) {
    throw new TypeError(
      'copyProperty args(toObject) is not object'
    );
  }

  _copyProperty(
    param.fromObject,
    param.propertyString,
    param.toObject,
  )
}

module.exports = {
  _copyProperty, copyProperty,
};