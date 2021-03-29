import number_commonJs from './number_common.js';
import _roundJs from './_round.js';
import roundJs from './round.js';
import _roundUpJs from './_roundUp.js';
import roundUpJs from './roundUp.js';
import _roundDownJs from './_roundDown.js';
import roundDownJs from './roundDown.js';

const numberJs = {
  ...number_commonJs,
  ..._roundJs,
  ...roundJs,
  ..._roundUpJs,
  ...roundUpJs,
  ..._roundDownJs,
  ...roundDownJs,
};

export const {
  _isMultiples,
  _nearEqual,
  _inRange, _keepMinMax,
  _randomInt,
  _round, _roundUp, _roundDown,
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
  _round, _roundUp, _roundDown,

  isMultiples, isEven, isOdd,
  nearEqual,
  inRange, keepMinMax,
  randomInt,
  round, roundUp, roundDown,

  makeInRange,
};

