"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.split = exports._split = exports.tagOuterLast = exports._tagOuterLast = exports.tagInnerLast = exports._tagInnerLast = exports.tagOuterFirst = exports._tagOuterFirst = exports.tagInnerFirst = exports._tagInnerFirst = exports.subLastDelimLast = exports._subLastDelimLast = exports.subLastDelimFirst = exports._subLastDelimFirst = exports.subFirstDelimLast = exports._subFirstDelimLast = exports.subFirstDelimFirst = exports._subFirstDelimFirst = exports.matchFormat = exports._matchFormat = exports.replaceAll = exports._replaceAll = exports.add = exports.insert = exports.deleteLast = exports.deleteFirst = exports.deleteLength = exports.deleteIndex = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.trimBothEnds = exports.trimLast = exports.trimFirst = exports.excludeBothEnds = exports.excludeLast = exports.excludeFirst = exports.includeBothEnds = exports.includeLast = exports.includeFirst = exports.isBothEnds = exports.isLast = exports.isFirst = exports.indexOfLast = exports.indexOfFirst = exports.isUpperCase = exports.isLowerCase = exports.repeat = exports._add = exports._insert = exports._deleteLast = exports._deleteFirst = exports._deleteLength = exports._deleteIndex = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._trimBothEnds = exports._trimLast = exports._trimFirst = exports._excludeBothEnds = exports._excludeLast = exports._excludeFirst = exports._includeBothEnds = exports._includeLast = exports._includeFirst = exports._isBothEnds = exports._isLast = exports._isFirst = exports._indexOfLast = exports._indexOfFirst = exports._isUpperCase = exports._isLowerCase = exports._repeat = void 0;

var _string_common = _interopRequireDefault(require("./string_common.js"));

var _replaceAll2 = _interopRequireDefault(require("./_replaceAll.js"));

var _replaceAll3 = _interopRequireDefault(require("./replaceAll.js"));

var _matchFormat2 = _interopRequireDefault(require("./matchFormat.js"));

var _subFirstDelimFirst2 = _interopRequireDefault(require("./subFirstDelimFirst.js"));

var _subFirstDelimLast2 = _interopRequireDefault(require("./subFirstDelimLast.js"));

var _subLastDelimFirst2 = _interopRequireDefault(require("./subLastDelimFirst.js"));

var _subLastDelimLast2 = _interopRequireDefault(require("./subLastDelimLast.js"));

var _tagInnerFirst2 = _interopRequireDefault(require("./tagInnerFirst.js"));

var _tagOuterFirst2 = _interopRequireDefault(require("./tagOuterFirst.js"));

var _tagInnerLast2 = _interopRequireDefault(require("./tagInnerLast.js"));

var _tagOuterLast2 = _interopRequireDefault(require("./tagOuterLast.js"));

var _split2 = _interopRequireDefault(require("./split.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _repeat = _string_common["default"]._repeat,
    _isLowerCase = _string_common["default"]._isLowerCase,
    _isUpperCase = _string_common["default"]._isUpperCase,
    _indexOfFirst = _string_common["default"]._indexOfFirst,
    _indexOfLast = _string_common["default"]._indexOfLast,
    _isFirst = _string_common["default"]._isFirst,
    _isLast = _string_common["default"]._isLast,
    _isBothEnds = _string_common["default"]._isBothEnds,
    _includeFirst = _string_common["default"]._includeFirst,
    _includeLast = _string_common["default"]._includeLast,
    _includeBothEnds = _string_common["default"]._includeBothEnds,
    _excludeFirst = _string_common["default"]._excludeFirst,
    _excludeLast = _string_common["default"]._excludeLast,
    _excludeBothEnds = _string_common["default"]._excludeBothEnds,
    _trimFirst = _string_common["default"]._trimFirst,
    _trimLast = _string_common["default"]._trimLast,
    _trimBothEnds = _string_common["default"]._trimBothEnds,
    _subIndex = _string_common["default"]._subIndex,
    _subLength = _string_common["default"]._subLength,
    _subFirst = _string_common["default"]._subFirst,
    _subLast = _string_common["default"]._subLast,
    _deleteIndex = _string_common["default"]._deleteIndex,
    _deleteLength = _string_common["default"]._deleteLength,
    _deleteFirst = _string_common["default"]._deleteFirst,
    _deleteLast = _string_common["default"]._deleteLast,
    _insert = _string_common["default"]._insert,
    _add = _string_common["default"]._add,
    repeat = _string_common["default"].repeat,
    isLowerCase = _string_common["default"].isLowerCase,
    isUpperCase = _string_common["default"].isUpperCase,
    indexOfFirst = _string_common["default"].indexOfFirst,
    indexOfLast = _string_common["default"].indexOfLast,
    isFirst = _string_common["default"].isFirst,
    isLast = _string_common["default"].isLast,
    isBothEnds = _string_common["default"].isBothEnds,
    includeFirst = _string_common["default"].includeFirst,
    includeLast = _string_common["default"].includeLast,
    includeBothEnds = _string_common["default"].includeBothEnds,
    excludeFirst = _string_common["default"].excludeFirst,
    excludeLast = _string_common["default"].excludeLast,
    excludeBothEnds = _string_common["default"].excludeBothEnds,
    trimFirst = _string_common["default"].trimFirst,
    trimLast = _string_common["default"].trimLast,
    trimBothEnds = _string_common["default"].trimBothEnds,
    subIndex = _string_common["default"].subIndex,
    subLength = _string_common["default"].subLength,
    subFirst = _string_common["default"].subFirst,
    subLast = _string_common["default"].subLast,
    deleteIndex = _string_common["default"].deleteIndex,
    deleteLength = _string_common["default"].deleteLength,
    deleteFirst = _string_common["default"].deleteFirst,
    deleteLast = _string_common["default"].deleteLast,
    insert = _string_common["default"].insert,
    add = _string_common["default"].add;
exports.add = add;
exports.insert = insert;
exports.deleteLast = deleteLast;
exports.deleteFirst = deleteFirst;
exports.deleteLength = deleteLength;
exports.deleteIndex = deleteIndex;
exports.subLast = subLast;
exports.subFirst = subFirst;
exports.subLength = subLength;
exports.subIndex = subIndex;
exports.trimBothEnds = trimBothEnds;
exports.trimLast = trimLast;
exports.trimFirst = trimFirst;
exports.excludeBothEnds = excludeBothEnds;
exports.excludeLast = excludeLast;
exports.excludeFirst = excludeFirst;
exports.includeBothEnds = includeBothEnds;
exports.includeLast = includeLast;
exports.includeFirst = includeFirst;
exports.isBothEnds = isBothEnds;
exports.isLast = isLast;
exports.isFirst = isFirst;
exports.indexOfLast = indexOfLast;
exports.indexOfFirst = indexOfFirst;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.repeat = repeat;
exports._add = _add;
exports._insert = _insert;
exports._deleteLast = _deleteLast;
exports._deleteFirst = _deleteFirst;
exports._deleteLength = _deleteLength;
exports._deleteIndex = _deleteIndex;
exports._subLast = _subLast;
exports._subFirst = _subFirst;
exports._subLength = _subLength;
exports._subIndex = _subIndex;
exports._trimBothEnds = _trimBothEnds;
exports._trimLast = _trimLast;
exports._trimFirst = _trimFirst;
exports._excludeBothEnds = _excludeBothEnds;
exports._excludeLast = _excludeLast;
exports._excludeFirst = _excludeFirst;
exports._includeBothEnds = _includeBothEnds;
exports._includeLast = _includeLast;
exports._includeFirst = _includeFirst;
exports._isBothEnds = _isBothEnds;
exports._isLast = _isLast;
exports._isFirst = _isFirst;
exports._indexOfLast = _indexOfLast;
exports._indexOfFirst = _indexOfFirst;
exports._isUpperCase = _isUpperCase;
exports._isLowerCase = _isLowerCase;
exports._repeat = _repeat;
var _replaceAll = _replaceAll2["default"]._replaceAll;
exports._replaceAll = _replaceAll;
var replaceAll = _replaceAll3["default"].replaceAll;
exports.replaceAll = replaceAll;
var _matchFormat = _matchFormat2["default"]._matchFormat,
    matchFormat = _matchFormat2["default"].matchFormat;
exports.matchFormat = matchFormat;
exports._matchFormat = _matchFormat;
var _subFirstDelimFirst = _subFirstDelimFirst2["default"]._subFirstDelimFirst,
    subFirstDelimFirst = _subFirstDelimFirst2["default"].subFirstDelimFirst;
exports.subFirstDelimFirst = subFirstDelimFirst;
exports._subFirstDelimFirst = _subFirstDelimFirst;
var _subFirstDelimLast = _subFirstDelimLast2["default"]._subFirstDelimLast,
    subFirstDelimLast = _subFirstDelimLast2["default"].subFirstDelimLast;
exports.subFirstDelimLast = subFirstDelimLast;
exports._subFirstDelimLast = _subFirstDelimLast;
var _subLastDelimFirst = _subLastDelimFirst2["default"]._subLastDelimFirst,
    subLastDelimFirst = _subLastDelimFirst2["default"].subLastDelimFirst;
exports.subLastDelimFirst = subLastDelimFirst;
exports._subLastDelimFirst = _subLastDelimFirst;
var _subLastDelimLast = _subLastDelimLast2["default"]._subLastDelimLast,
    subLastDelimLast = _subLastDelimLast2["default"].subLastDelimLast;
exports.subLastDelimLast = subLastDelimLast;
exports._subLastDelimLast = _subLastDelimLast;
var _tagInnerFirst = _tagInnerFirst2["default"]._tagInnerFirst,
    tagInnerFirst = _tagInnerFirst2["default"].tagInnerFirst;
exports.tagInnerFirst = tagInnerFirst;
exports._tagInnerFirst = _tagInnerFirst;
var _tagOuterFirst = _tagOuterFirst2["default"]._tagOuterFirst,
    tagOuterFirst = _tagOuterFirst2["default"].tagOuterFirst;
exports.tagOuterFirst = tagOuterFirst;
exports._tagOuterFirst = _tagOuterFirst;
var _tagInnerLast = _tagInnerLast2["default"]._tagInnerLast,
    tagInnerLast = _tagInnerLast2["default"].tagInnerLast;
exports.tagInnerLast = tagInnerLast;
exports._tagInnerLast = _tagInnerLast;
var _tagOuterLast = _tagOuterLast2["default"]._tagOuterLast,
    tagOuterLast = _tagOuterLast2["default"].tagOuterLast;
exports.tagOuterLast = tagOuterLast;
exports._tagOuterLast = _tagOuterLast;
var _split = _split2["default"]._split,
    split = _split2["default"].split;
exports.split = split;
exports._split = _split;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _string_common["default"]), _replaceAll2["default"]), _replaceAll3["default"]), _matchFormat2["default"]), _subFirstDelimFirst2["default"]), _subFirstDelimLast2["default"]), _subLastDelimFirst2["default"]), _subLastDelimLast2["default"]), _tagInnerFirst2["default"]), _tagOuterFirst2["default"]), _tagInnerLast2["default"]), _tagOuterLast2["default"]), _split2["default"]);

exports["default"] = _default;