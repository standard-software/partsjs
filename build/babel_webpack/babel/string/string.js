"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.escapeRegExp = exports.paddingLast = exports.paddingFirst = exports.splitDotItems = exports.splitCommaItems = exports.split = exports.tagOuterLast = exports.tagInnerLast = exports.tagOuterFirst = exports.tagInnerFirst = exports.subLastDelimLast = exports.subLastDelimFirst = exports.subFirstDelimLast = exports.subFirstDelimFirst = exports.matchFormat = exports.replaceAllArray = exports.replaceAllRepeat = exports.replaceAll = exports.add = exports.insert = exports.deleteLast = exports.deleteFirst = exports.deleteLength = exports.deleteIndex = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.trimBothEnds = exports.trimLast = exports.trimFirst = exports.excludeBothEnds = exports.excludeLast = exports.excludeFirst = exports.includeBothEnds = exports.includeLast = exports.includeFirst = exports.isBothEnds = exports.isLast = exports.isFirst = exports.includeCount = exports.indexOfAnyLast = exports.indexOfAnyFirst = exports.indexOfLast = exports.indexOfFirst = exports.isUpperCase = exports.isLowerCase = exports.repeat = exports._escapeRegExp = exports._paddingLast = exports._paddingFirst = exports._splitDotItems = exports._splitCommaItems = exports._split = exports._tagOuterLast = exports._tagInnerLast = exports._tagOuterFirst = exports._tagInnerFirst = exports._subLastDelimLast = exports._subLastDelimFirst = exports._subFirstDelimLast = exports._subFirstDelimFirst = exports._matchFormat = exports._replaceAllArray = exports._replaceAllRepeat = exports._replaceAll = exports._add = exports._insert = exports._deleteLast = exports._deleteFirst = exports._deleteLength = exports._deleteIndex = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._trimBothEnds = exports._trimLast = exports._trimFirst = exports._excludeBothEnds = exports._excludeLast = exports._excludeFirst = exports._includeBothEnds = exports._includeLast = exports._includeFirst = exports._isBothEnds = exports._isLast = exports._isFirst = exports._includeCount = exports._indexOfAnyLast = exports._indexOfAnyFirst = exports._indexOfLast = exports._indexOfFirst = exports._isUpperCase = exports._isLowerCase = exports._repeat = void 0;

var _string_common = _interopRequireDefault(require("./string_common.js"));

var _indexOfFirst2 = _interopRequireDefault(require("./_indexOfFirst.js"));

var _indexOfFirst3 = _interopRequireDefault(require("./indexOfFirst.js"));

var _indexOfLast2 = _interopRequireDefault(require("./_indexOfLast.js"));

var _indexOfLast3 = _interopRequireDefault(require("./indexOfLast.js"));

var _indexOfAnyFirst2 = _interopRequireDefault(require("./_indexOfAnyFirst.js"));

var _indexOfAnyFirst3 = _interopRequireDefault(require("./indexOfAnyFirst.js"));

var _indexOfAnyLast2 = _interopRequireDefault(require("./_indexOfAnyLast.js"));

var _indexOfAnyLast3 = _interopRequireDefault(require("./indexOfAnyLast.js"));

var _includeCount2 = _interopRequireDefault(require("./_includeCount.js"));

var _includeCount3 = _interopRequireDefault(require("./includeCount.js"));

var _replaceAll2 = _interopRequireDefault(require("./_replaceAll.js"));

var _replaceAll3 = _interopRequireDefault(require("./replaceAll.js"));

var _replaceAllRepeat2 = _interopRequireDefault(require("./_replaceAllRepeat.js"));

var _replaceAllRepeat3 = _interopRequireDefault(require("./replaceAllRepeat.js"));

var _replaceAllArray2 = _interopRequireDefault(require("./_replaceAllArray.js"));

var _replaceAllArray3 = _interopRequireDefault(require("./replaceAllArray.js"));

var _matchFormat2 = _interopRequireDefault(require("./matchFormat.js"));

var _subFirstDelimFirst2 = _interopRequireDefault(require("./subFirstDelimFirst.js"));

var _subFirstDelimLast2 = _interopRequireDefault(require("./subFirstDelimLast.js"));

var _subLastDelimFirst2 = _interopRequireDefault(require("./subLastDelimFirst.js"));

var _subLastDelimLast2 = _interopRequireDefault(require("./subLastDelimLast.js"));

var _tagInnerFirst2 = _interopRequireDefault(require("./tagInnerFirst.js"));

var _tagOuterFirst2 = _interopRequireDefault(require("./tagOuterFirst.js"));

var _tagInnerLast2 = _interopRequireDefault(require("./tagInnerLast.js"));

var _tagOuterLast2 = _interopRequireDefault(require("./tagOuterLast.js"));

var _split2 = _interopRequireDefault(require("./_split.js"));

var _split3 = _interopRequireDefault(require("./split.js"));

var _splitCommaItems2 = _interopRequireDefault(require("./splitCommaItems.js"));

var _splitDotItems2 = _interopRequireDefault(require("./splitDotItems.js"));

var _paddingFirst2 = _interopRequireDefault(require("./_paddingFirst.js"));

var _paddingFirst3 = _interopRequireDefault(require("./paddingFirst.js"));

var _paddingLast2 = _interopRequireDefault(require("./_paddingLast.js"));

var _paddingLast3 = _interopRequireDefault(require("./paddingLast.js"));

var _escapeRegExp2 = _interopRequireDefault(require("./_escapeRegExp.js"));

var _escapeRegExp3 = _interopRequireDefault(require("./escapeRegExp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stringJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _string_common["default"]), _indexOfFirst2["default"]), _indexOfFirst3["default"]), _indexOfLast2["default"]), _indexOfLast3["default"]), _indexOfAnyFirst2["default"]), _indexOfAnyFirst3["default"]), _indexOfAnyLast2["default"]), _indexOfAnyLast3["default"]), _includeCount2["default"]), _includeCount3["default"]), _replaceAll2["default"]), _replaceAll3["default"]), _replaceAllRepeat2["default"]), _replaceAllRepeat3["default"]), _replaceAllArray2["default"]), _replaceAllArray3["default"]), _matchFormat2["default"]), _subFirstDelimFirst2["default"]), _subFirstDelimLast2["default"]), _subLastDelimFirst2["default"]), _subLastDelimLast2["default"]), _tagInnerFirst2["default"]), _tagOuterFirst2["default"]), _tagInnerLast2["default"]), _tagOuterLast2["default"]), _split2["default"]), _split3["default"]), _splitCommaItems2["default"]), _splitDotItems2["default"]), _paddingFirst2["default"]), _paddingFirst3["default"]), _paddingLast2["default"]), _paddingLast3["default"]), _escapeRegExp2["default"]), _escapeRegExp3["default"]);

var _repeat = stringJs._repeat,
    _isLowerCase = stringJs._isLowerCase,
    _isUpperCase = stringJs._isUpperCase,
    _indexOfFirst = stringJs._indexOfFirst,
    _indexOfLast = stringJs._indexOfLast,
    _indexOfAnyFirst = stringJs._indexOfAnyFirst,
    _indexOfAnyLast = stringJs._indexOfAnyLast,
    _includeCount = stringJs._includeCount,
    _isFirst = stringJs._isFirst,
    _isLast = stringJs._isLast,
    _isBothEnds = stringJs._isBothEnds,
    _includeFirst = stringJs._includeFirst,
    _includeLast = stringJs._includeLast,
    _includeBothEnds = stringJs._includeBothEnds,
    _excludeFirst = stringJs._excludeFirst,
    _excludeLast = stringJs._excludeLast,
    _excludeBothEnds = stringJs._excludeBothEnds,
    _trimFirst = stringJs._trimFirst,
    _trimLast = stringJs._trimLast,
    _trimBothEnds = stringJs._trimBothEnds,
    _subIndex = stringJs._subIndex,
    _subLength = stringJs._subLength,
    _subFirst = stringJs._subFirst,
    _subLast = stringJs._subLast,
    _deleteIndex = stringJs._deleteIndex,
    _deleteLength = stringJs._deleteLength,
    _deleteFirst = stringJs._deleteFirst,
    _deleteLast = stringJs._deleteLast,
    _insert = stringJs._insert,
    _add = stringJs._add,
    _replaceAll = stringJs._replaceAll,
    _replaceAllRepeat = stringJs._replaceAllRepeat,
    _replaceAllArray = stringJs._replaceAllArray,
    _matchFormat = stringJs._matchFormat,
    _subFirstDelimFirst = stringJs._subFirstDelimFirst,
    _subFirstDelimLast = stringJs._subFirstDelimLast,
    _subLastDelimFirst = stringJs._subLastDelimFirst,
    _subLastDelimLast = stringJs._subLastDelimLast,
    _tagInnerFirst = stringJs._tagInnerFirst,
    _tagOuterFirst = stringJs._tagOuterFirst,
    _tagInnerLast = stringJs._tagInnerLast,
    _tagOuterLast = stringJs._tagOuterLast,
    _split = stringJs._split,
    _splitCommaItems = stringJs._splitCommaItems,
    _splitDotItems = stringJs._splitDotItems,
    _paddingFirst = stringJs._paddingFirst,
    _paddingLast = stringJs._paddingLast,
    _escapeRegExp = stringJs._escapeRegExp;
exports._escapeRegExp = _escapeRegExp;
exports._paddingLast = _paddingLast;
exports._paddingFirst = _paddingFirst;
exports._splitDotItems = _splitDotItems;
exports._splitCommaItems = _splitCommaItems;
exports._split = _split;
exports._tagOuterLast = _tagOuterLast;
exports._tagInnerLast = _tagInnerLast;
exports._tagOuterFirst = _tagOuterFirst;
exports._tagInnerFirst = _tagInnerFirst;
exports._subLastDelimLast = _subLastDelimLast;
exports._subLastDelimFirst = _subLastDelimFirst;
exports._subFirstDelimLast = _subFirstDelimLast;
exports._subFirstDelimFirst = _subFirstDelimFirst;
exports._matchFormat = _matchFormat;
exports._replaceAllArray = _replaceAllArray;
exports._replaceAllRepeat = _replaceAllRepeat;
exports._replaceAll = _replaceAll;
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
exports._includeCount = _includeCount;
exports._indexOfAnyLast = _indexOfAnyLast;
exports._indexOfAnyFirst = _indexOfAnyFirst;
exports._indexOfLast = _indexOfLast;
exports._indexOfFirst = _indexOfFirst;
exports._isUpperCase = _isUpperCase;
exports._isLowerCase = _isLowerCase;
exports._repeat = _repeat;
var repeat = stringJs.repeat,
    isLowerCase = stringJs.isLowerCase,
    isUpperCase = stringJs.isUpperCase,
    indexOfFirst = stringJs.indexOfFirst,
    indexOfLast = stringJs.indexOfLast,
    indexOfAnyFirst = stringJs.indexOfAnyFirst,
    indexOfAnyLast = stringJs.indexOfAnyLast,
    includeCount = stringJs.includeCount,
    isFirst = stringJs.isFirst,
    isLast = stringJs.isLast,
    isBothEnds = stringJs.isBothEnds,
    includeFirst = stringJs.includeFirst,
    includeLast = stringJs.includeLast,
    includeBothEnds = stringJs.includeBothEnds,
    excludeFirst = stringJs.excludeFirst,
    excludeLast = stringJs.excludeLast,
    excludeBothEnds = stringJs.excludeBothEnds,
    trimFirst = stringJs.trimFirst,
    trimLast = stringJs.trimLast,
    trimBothEnds = stringJs.trimBothEnds,
    subIndex = stringJs.subIndex,
    subLength = stringJs.subLength,
    subFirst = stringJs.subFirst,
    subLast = stringJs.subLast,
    deleteIndex = stringJs.deleteIndex,
    deleteLength = stringJs.deleteLength,
    deleteFirst = stringJs.deleteFirst,
    deleteLast = stringJs.deleteLast,
    insert = stringJs.insert,
    add = stringJs.add,
    replaceAll = stringJs.replaceAll,
    replaceAllRepeat = stringJs.replaceAllRepeat,
    replaceAllArray = stringJs.replaceAllArray,
    matchFormat = stringJs.matchFormat,
    subFirstDelimFirst = stringJs.subFirstDelimFirst,
    subFirstDelimLast = stringJs.subFirstDelimLast,
    subLastDelimFirst = stringJs.subLastDelimFirst,
    subLastDelimLast = stringJs.subLastDelimLast,
    tagInnerFirst = stringJs.tagInnerFirst,
    tagOuterFirst = stringJs.tagOuterFirst,
    tagInnerLast = stringJs.tagInnerLast,
    tagOuterLast = stringJs.tagOuterLast,
    split = stringJs.split,
    splitCommaItems = stringJs.splitCommaItems,
    splitDotItems = stringJs.splitDotItems,
    paddingFirst = stringJs.paddingFirst,
    paddingLast = stringJs.paddingLast,
    escapeRegExp = stringJs.escapeRegExp;
exports.escapeRegExp = escapeRegExp;
exports.paddingLast = paddingLast;
exports.paddingFirst = paddingFirst;
exports.splitDotItems = splitDotItems;
exports.splitCommaItems = splitCommaItems;
exports.split = split;
exports.tagOuterLast = tagOuterLast;
exports.tagInnerLast = tagInnerLast;
exports.tagOuterFirst = tagOuterFirst;
exports.tagInnerFirst = tagInnerFirst;
exports.subLastDelimLast = subLastDelimLast;
exports.subLastDelimFirst = subLastDelimFirst;
exports.subFirstDelimLast = subFirstDelimLast;
exports.subFirstDelimFirst = subFirstDelimFirst;
exports.matchFormat = matchFormat;
exports.replaceAllArray = replaceAllArray;
exports.replaceAllRepeat = replaceAllRepeat;
exports.replaceAll = replaceAll;
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
exports.includeCount = includeCount;
exports.indexOfAnyLast = indexOfAnyLast;
exports.indexOfAnyFirst = indexOfAnyFirst;
exports.indexOfLast = indexOfLast;
exports.indexOfFirst = indexOfFirst;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.repeat = repeat;
var _default = {
  _repeat: _repeat,
  _isLowerCase: _isLowerCase,
  _isUpperCase: _isUpperCase,
  _indexOfFirst: _indexOfFirst,
  _indexOfLast: _indexOfLast,
  _indexOfAnyFirst: _indexOfAnyFirst,
  _indexOfAnyLast: _indexOfAnyLast,
  _includeCount: _includeCount,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEnds: _isBothEnds,
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _includeBothEnds: _includeBothEnds,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  _excludeBothEnds: _excludeBothEnds,
  _trimFirst: _trimFirst,
  _trimLast: _trimLast,
  _trimBothEnds: _trimBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  _deleteIndex: _deleteIndex,
  _deleteLength: _deleteLength,
  _deleteFirst: _deleteFirst,
  _deleteLast: _deleteLast,
  _insert: _insert,
  _add: _add,
  _replaceAll: _replaceAll,
  _replaceAllRepeat: _replaceAllRepeat,
  _replaceAllArray: _replaceAllArray,
  _matchFormat: _matchFormat,
  _subFirstDelimFirst: _subFirstDelimFirst,
  _subFirstDelimLast: _subFirstDelimLast,
  _subLastDelimFirst: _subLastDelimFirst,
  _subLastDelimLast: _subLastDelimLast,
  _tagInnerFirst: _tagInnerFirst,
  _tagOuterFirst: _tagOuterFirst,
  _tagInnerLast: _tagInnerLast,
  _tagOuterLast: _tagOuterLast,
  _split: _split,
  _splitCommaItems: _splitCommaItems,
  _splitDotItems: _splitDotItems,
  _paddingFirst: _paddingFirst,
  _paddingLast: _paddingLast,
  _escapeRegExp: _escapeRegExp,
  repeat: repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  indexOfFirst: indexOfFirst,
  indexOfLast: indexOfLast,
  indexOfAnyFirst: indexOfAnyFirst,
  indexOfAnyLast: indexOfAnyLast,
  includeCount: includeCount,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  includeFirst: includeFirst,
  includeLast: includeLast,
  includeBothEnds: includeBothEnds,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast,
  excludeBothEnds: excludeBothEnds,
  trimFirst: trimFirst,
  trimLast: trimLast,
  trimBothEnds: trimBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  deleteIndex: deleteIndex,
  deleteLength: deleteLength,
  deleteFirst: deleteFirst,
  deleteLast: deleteLast,
  insert: insert,
  add: add,
  replaceAll: replaceAll,
  replaceAllRepeat: replaceAllRepeat,
  replaceAllArray: replaceAllArray,
  matchFormat: matchFormat,
  subFirstDelimFirst: subFirstDelimFirst,
  subFirstDelimLast: subFirstDelimLast,
  subLastDelimFirst: subLastDelimFirst,
  subLastDelimLast: subLastDelimLast,
  tagInnerFirst: tagInnerFirst,
  tagOuterFirst: tagOuterFirst,
  tagInnerLast: tagInnerLast,
  tagOuterLast: tagOuterLast,
  split: split,
  splitCommaItems: splitCommaItems,
  splitDotItems: splitDotItems,
  paddingFirst: paddingFirst,
  paddingLast: paddingLast,
  escapeRegExp: escapeRegExp
};
exports["default"] = _default;