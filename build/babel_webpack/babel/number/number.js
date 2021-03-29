"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.makeInRange = exports.roundDown = exports.roundUp = exports.round = exports.randomInt = exports.keepMinMax = exports.inRange = exports.nearEqual = exports.isOdd = exports.isEven = exports.isMultiples = exports._roundDown = exports._roundUp = exports._round = exports._randomInt = exports._keepMinMax = exports._inRange = exports._nearEqual = exports._isMultiples = void 0;

var _number_common = _interopRequireDefault(require("./number_common.js"));

var _round2 = _interopRequireDefault(require("./_round.js"));

var _round3 = _interopRequireDefault(require("./round.js"));

var _roundUp2 = _interopRequireDefault(require("./_roundUp.js"));

var _roundUp3 = _interopRequireDefault(require("./roundUp.js"));

var _roundDown2 = _interopRequireDefault(require("./_roundDown.js"));

var _roundDown3 = _interopRequireDefault(require("./roundDown.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var numberJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _number_common["default"]), _round2["default"]), _round3["default"]), _roundUp2["default"]), _roundUp3["default"]), _roundDown2["default"]), _roundDown3["default"]);

var _isMultiples = numberJs._isMultiples,
    _nearEqual = numberJs._nearEqual,
    _inRange = numberJs._inRange,
    _keepMinMax = numberJs._keepMinMax,
    _randomInt = numberJs._randomInt,
    _round = numberJs._round,
    _roundUp = numberJs._roundUp,
    _roundDown = numberJs._roundDown;
exports._roundDown = _roundDown;
exports._roundUp = _roundUp;
exports._round = _round;
exports._randomInt = _randomInt;
exports._keepMinMax = _keepMinMax;
exports._inRange = _inRange;
exports._nearEqual = _nearEqual;
exports._isMultiples = _isMultiples;
var isMultiples = numberJs.isMultiples,
    isEven = numberJs.isEven,
    isOdd = numberJs.isOdd,
    nearEqual = numberJs.nearEqual,
    inRange = numberJs.inRange,
    keepMinMax = numberJs.keepMinMax,
    randomInt = numberJs.randomInt,
    round = numberJs.round,
    roundUp = numberJs.roundUp,
    roundDown = numberJs.roundDown,
    makeInRange = numberJs.makeInRange;
exports.makeInRange = makeInRange;
exports.roundDown = roundDown;
exports.roundUp = roundUp;
exports.round = round;
exports.randomInt = randomInt;
exports.keepMinMax = keepMinMax;
exports.inRange = inRange;
exports.nearEqual = nearEqual;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isMultiples = isMultiples;
var _default = {
  _isMultiples: _isMultiples,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _keepMinMax: _keepMinMax,
  _randomInt: _randomInt,
  _round: _round,
  _roundUp: _roundUp,
  _roundDown: _roundDown,
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  nearEqual: nearEqual,
  inRange: inRange,
  keepMinMax: keepMinMax,
  randomInt: randomInt,
  round: round,
  roundUp: roundUp,
  roundDown: roundDown,
  makeInRange: makeInRange
};
exports["default"] = _default;