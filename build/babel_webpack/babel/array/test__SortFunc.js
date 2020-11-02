"use strict";

var _SortFunc2 = require("./_SortFunc.js");

// const { _SortFunc } = require('./_SortFunc.js');
// const userList = [
//   {
//     name: 'c',
//     age: 20,
//   },
//   {
//     name: 'b',
//     age: 20,
//   },
//   {
//     name: 'a',
//     age: 20,
//   },
//   {
//     name: 'c',
//     age: 21,
//   },
// ];
// const sortedUserList = [...userList]
//   .sort(_SortFunc([
//     [_SortFunc.order.normal.descending, v => v.name],
//     [_SortFunc.order.normal.ascending, v => v.age],
//   ]));
// console.log(sortedUserList);
// ---------------------
// var sortedUserList = [
//   ...['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
// ].sort(_SortFunc([
//   [_SortFunc.order.dictionaryUpperCase.ascending, v => v],
// ]));
// console.log(
//   sortedUserList.join(',')
//   ===
//   ['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'].join(','),
// );
// var sortedUserList = [
//   ...['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
// ].sort(_SortFunc([
//   [_SortFunc.order.dictionaryUpperCase.descending, v => v],
// ]));
// console.log(
//   sortedUserList.join(',')
//   ===
//   ['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'].join(','),
// );
// var sortedUserList = [
//   ...['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
// ].sort(_SortFunc([
//   [_SortFunc.order.dictionaryLowerCase.ascending, v => v],
// ]));
// console.log(
//   sortedUserList.join(',')
//   ===
//   ['a', 'A', 'aa', 'aA', 'Aa', 'AA', 'ab', 'aB', 'Ab', 'AB', 'b', 'B'].join(','),
// );
// var sortedUserList = [
//   ...['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
// ].sort(_SortFunc([
//   [_SortFunc.order.dictionaryLowerCase.descending, v => v],
// ]));
// console.log(
//   sortedUserList.join(',')
//   ===
//   ['B', 'b', 'AB', 'Ab', 'aB', 'ab', 'AA', 'Aa', 'aA', 'aa', 'A', 'a'].join(','),
// );
// ---------------------
var versions = ['5.0.0.', '1.3.0.9', '0.2.0', '3.1.2', '0.1.6', '5.0.0', '3.3.3.3', '3.3.3.3.3', '3.10', '0.2.0', '0.2.0a', '0.2.0aa', '0.2.0AA', '0.2.0Aa', '0.2.0aA', '0.2.0c', '0.2.0b', '0.2.0A', '0.2.0C', '0.2.0B', '0.2.0.a', '0.2.0.c', '0.2.0.b', '0.2.0.A', '0.2.0.C', '0.2.0.B', '5.0.0.', '5.0.0.0'];
var output = ['5.0.0.0', '5.0.0.', '5.0.0.', '5.0.0', '3.10', '3.3.3.3.3', '3.3.3.3', '3.1.2', '1.3.0.9', '0.2.0C', '0.2.0c', '0.2.0B', '0.2.0b', '0.2.0AA', '0.2.0Aa', '0.2.0aA', '0.2.0aa', '0.2.0A', '0.2.0a', '0.2.0.C', '0.2.0.c', '0.2.0.B', '0.2.0.b', '0.2.0.A', '0.2.0.a', '0.2.0', '0.2.0', '0.1.6'];
var sortedVersions = [].concat(versions).sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.version.descending, function (v) {
  return v;
}]]));
console.log(versions, sortedVersions, sortedVersions.join(',') === output.join(','));