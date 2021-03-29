import number_commonJs from './number_common.js';
import _roundJs from './_round.js';
import roundJs from './round.js';

const numberJs = {
  ...number_commonJs,
  ..._roundJs,
  ...roundJs,
};

export const {
  _isMultiples,
  _nearEqual,
  _inRange, _keepMinMax,
  _randomInt,
  _round,
} = numberJs;

export const {
  isMultiples, isEven, isOdd,
  nearEqual,
  inRange, keepMinMax,
  randomInt,
  round, roundUp, roundDown,

  makeInRange,
} = numberJs;

export default {
  _isMultiples,
  _nearEqual,
  _inRange, _keepMinMax,
  _randomInt,
  _round,

  isMultiples, isEven, isOdd,
  nearEqual,
  inRange, keepMinMax,
  randomInt,
  round,

  makeInRange,
};

