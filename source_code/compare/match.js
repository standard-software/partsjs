const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _some, _all,
  _findFirstIndex,
} = require('../array/array_common.js');

/**
 * match
 */
const _match = (value, compare) => {
  if (isString(value)) {
    let result;
    if (isRegExp(compare)) {
      result = value.match(compare) !== null;
    } else if (isFunction(compare)) {
      result = compare(value);
      if (!isBoolean(result)) {
        throw new TypeError(
          '_match args(compareArray element function result) is not boolean',
        );
      }
    } else {
      result = value === compare;
    }
    return result;
  } else {
    let result;
    if (isFunction(compare)) {
      result = compare(value);
      if (!isBoolean(result)) {
        throw new TypeError(
          '_match args(compareArray element function result) is not boolean',
        );
      }
    } else {
      result = value === compare;
    }
    return result;
  }
};

const match = (
  value,
  compare,
) => {
  if (isObjectParameter(value, 'value, compare')) {
    ({ value, compare } = value);
  }

  return _match(value, compare);
};

/**
 * matchValue
 */
const _matchValue = (
  value,
  compare,
  valueWhenMatched,
) => {
  if (_match(value, compare)) {
    return valueWhenMatched;
  }
  return value;
};

const matchValue = (
  value,
  compare,
  valueWhenMatched,
) => {
  if (isObjectParameter(value, 'value, compare, valueWhenMatched')) {
    ({ value, compare, valueWhenMatched } = value);
  }

  return _matchValue(
    value,
    compare,
    valueWhenMatched,
  );
};

/**
 * initialValue
 */
const _initialValue = (
  value,
  valueWhenMatched,
) => {
  return _matchValue(value, isUndefined, valueWhenMatched);
};

const initialValue = (
  value,
  valueWhenMatched,
) => {
  if (isObjectParameter(value, 'value, valueWhenMatched')) {
    ({ value, valueWhenMatched } = value);
  }

  return _initialValue(
    value,
    valueWhenMatched,
  );
};

/**
 * matchSome
 */
const _matchSome = (value, compareArray) => {
  return _some(compareArray, compare => {
    return _match(value, compare);
  });
};

const matchSome = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchSome args(compareArray) is not array',
    );
  }

  return _matchSome(value, compareArray);
};

/**
 * allMatchSome
 */
const _allMatchSome = (
  valueArray,
  compareArray,
) => {
  return _all(valueArray, value => {
    return _matchSome(value, compareArray);
  });
};

const allMatchSome = (
  valueArray,
  compareArray,
) => {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'allMatchSome args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'allMatchSome args(compareArray) is not array',
    );
  }

  return _allMatchSome(valueArray, compareArray);
};


/**
 * indexOfMatchSome
 */
const _indexOfMatchSome = (
  valueArray,
  compareArray,
) => {
  return _findFirstIndex(valueArray, value => {
    return _matchSome(value, compareArray);
  });
};

const indexOfMatchSome = (
  valueArray,
  compareArray,
) => {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'indexOfMatchSome args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'indexOfMatchSome args(compareArray) is not array',
    );
  }

  return _indexOfMatchSome(valueArray, compareArray);
};

/**
 * someMatchSome
 */
const _someMatchSome = (
  valueArray,
  compareArray,
) => {
  return _indexOfMatchSome(
    valueArray,
    compareArray,
  ) !== -1;
};

const someMatchSome = (
  valueArray,
  compareArray,
) => {
  return indexOfMatchSome(
    valueArray,
    compareArray,
  ) !== -1;
};

/**
 * matchSomeValue
 */
const _matchSomeValue = (
  value,
  compareArray,
  valueWhenMatched,
) => {
  if (_matchSome(value, compareArray)) {
    return valueWhenMatched;
  }
  return value;
};

const matchSomeValue = (
  value,
  compareArray,
  valueWhenMatched,
) => {
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    ({ value, compareArray, valueWhenMatched } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchSomeValue args(compareArray) is not array',
    );
  }

  return _matchSomeValue(
    value,
    compareArray,
    valueWhenMatched,
  );
};

/**
 * matchAll
 */
const _matchAll = (value, compareArray) => {
  return _all(compareArray, compare => {
    return _match(value, compare);
  });
};

const matchAll = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchAll args(compareArray) is not array',
    );
  }

  return _matchAll(value, compareArray);
};

/**
 * allMatchAll
 */
const _allMatchAll = (
  valueArray,
  compareArray,
) => {
  return _all(valueArray, value => {
    return _matchAll(value, compareArray);
  });
};

const allMatchAll = (
  valueArray,
  compareArray,
) => {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'allMatchAll args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'allMatchAll args(compareArray) is not array',
    );
  }

  return _allMatchAll(valueArray, compareArray);
};


/**
 * indexOfMatchAll
 */
const _indexOfMatchAll = (
  valueArray,
  compareArray,
) => {
  return _findFirstIndex(valueArray, value => {
    return _matchAll(value, compareArray);
  });
};

const indexOfMatchAll = (
  valueArray,
  compareArray,
) => {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'indexOfMatchAll args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'indexOfMatchAll args(compareArray) is not array',
    );
  }

  return _indexOfMatchAll(valueArray, compareArray);
};

/**
 * someMatchAll
 */
const _someMatchAll = (
  valueArray,
  compareArray,
) => {
  return _indexOfMatchAll(
    valueArray,
    compareArray,
  ) !== -1;
};

const someMatchAll = (
  valueArray,
  compareArray,
) => {
  return indexOfMatchAll(
    valueArray,
    compareArray,
  ) !== -1;
};

/**
 * matchAllValue
 */
const _matchAllValue = (
  value,
  compareArray,
  valueWhenMatched,
) => {
  if (_matchAll(value, compareArray)) {
    return valueWhenMatched;
  }
  return value;
};

const matchAllValue = (
  value,
  compareArray,
  valueWhenMatched,
) => {
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    ({ value, compareArray, valueWhenMatched } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchAllValue args(compareArray) is not array',
    );
  }

  return _matchAllValue(
    value,
    compareArray,
    valueWhenMatched,
  );
};

module.exports = {
  _match, _matchValue, _initialValue,
  _matchSome, _matchSomeValue,
  _allMatchSome, _indexOfMatchSome, _someMatchSome,
  _matchAll, _matchAllValue,
  _allMatchAll, _indexOfMatchAll, _someMatchAll,

  match, matchValue, initialValue,
  matchSome, matchSomeValue,
  allMatchSome, indexOfMatchSome, someMatchSome,
  matchAll, matchAllValue,
  allMatchAll, indexOfMatchAll, someMatchAll,

};
