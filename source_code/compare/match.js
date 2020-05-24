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
 * initialValue
 */
const _initialValue = (
  value,
  valueWhenMatched,
  compareArray = [undefined],
) => {
  return _matchSomeValue(value, compareArray, valueWhenMatched);
};

const initialValue = (
  value,
  valueWhenMatched,
  compareArray = [undefined],
) => {
  if (isObjectParameter(value, 'value, valueWhenMatched', 'compareArray')) {
    ({
      value, valueWhenMatched, compareArray = [undefined],
    } = value);
  }

  return _initialValue(
    value,
    valueWhenMatched,
    compareArray,
  );
};

/**
 * allMatch
 */
const _allMatch = (
  valueArray,
  compare,
) => {
  return _all(valueArray, value => {
    return _match(value, compare);
  });
};

const allMatch = (
  valueArray,
  compare,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    ({ valueArray, compare } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'allMatch args(valueArray) is not array',
    );
  }

  return _allMatch(valueArray, compare);
};

/**
 * indexOfMatch
 */
const _indexOfMatch = (
  valueArray,
  compare,
) => {
  return _findFirstIndex(valueArray, value => {
    return _match(value, compare);
  });
};

const indexOfMatch = (
  valueArray,
  compare,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    ({ valueArray, compare } = valueArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'indexOfMatch args(valueArray) is not array',
    );
  }

  return _indexOfMatch(valueArray, compare);
};

/**
 * someMatch
 */
const _someMatch = (
  valueArray,
  compare,
) => {
  return _indexOfMatch(
    valueArray,
    compare,
  ) !== -1;
};

const someMatch = (
  valueArray,
  compare,
) => {
  return indexOfMatch(
    valueArray,
    compare,
  ) !== -1;
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
 * matchSomeValue
 */
const _matchSomeValue = (
  value,
  compareArray,
  valueWhenMatched,
) => {
  if (_matchSome(value, compareArray)) {
    if (isFunction(valueWhenMatched)) {
      return valueWhenMatched(value);
    }
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
 * matchAllValue
 */
const _matchAllValue = (
  value,
  compareArray,
  valueWhenMatched,
) => {
  if (_matchAll(value, compareArray)) {
    if (isFunction(valueWhenMatched)) {
      return valueWhenMatched(value);
    }
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

module.exports = {
  _match, _initialValue,
  _allMatch, _indexOfMatch, _someMatch,
  _matchSome, _matchSomeValue,
  _allMatchSome, _indexOfMatchSome, _someMatchSome,
  _matchAll, _matchAllValue,
  _allMatchAll, _indexOfMatchAll, _someMatchAll,

  match, initialValue,
  allMatch, indexOfMatch, someMatch,
  matchSome, matchSomeValue,
  allMatchSome, indexOfMatchSome, someMatchSome,
  matchAll, matchAllValue,
  allMatchAll, indexOfMatchAll, someMatchAll,

};
