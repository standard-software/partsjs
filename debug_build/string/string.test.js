"use strict";

var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_string', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$string = parts.string,
        matchFormat = _parts$string.matchFormat,
        replaceAll = _parts$string.replaceAll,
        indexOfFirst = _parts$string.indexOfFirst,
        indexOfLast = _parts$string.indexOfLast,
        isFirst = _parts$string.isFirst,
        isLast = _parts$string.isLast,
        isBothEnds = _parts$string.isBothEnds,
        includeFirst = _parts$string.includeFirst,
        includeLast = _parts$string.includeLast,
        includeBothEnds = _parts$string.includeBothEnds,
        excludeFirst = _parts$string.excludeFirst,
        excludeLast = _parts$string.excludeLast,
        excludeBothEnds = _parts$string.excludeBothEnds,
        trimFirst = _parts$string.trimFirst,
        trimLast = _parts$string.trimLast,
        trimBothEnds = _parts$string.trimBothEnds,
        subIndex = _parts$string.subIndex,
        subLength = _parts$string.subLength,
        subFirst = _parts$string.subFirst,
        subLast = _parts$string.subLast,
        deleteIndex = _parts$string.deleteIndex,
        deleteLength = _parts$string.deleteLength,
        deleteFirst = _parts$string.deleteFirst,
        deleteLast = _parts$string.deleteLast,
        insert = _parts$string.insert,
        add = _parts$string.add;

    var test_matchFormat = function test_matchFormat() {
      it('test_matchFormat', function () {
        checkEqual(true, matchFormat('number', '123'));
        checkEqual(false, matchFormat('number', '12a'));
        checkEqual(false, matchFormat('number', '-123'));
        checkEqual(true, matchFormat('integer', '-123'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/9/5'));
        checkEqual(true, matchFormat('date_y/m/d', '19/1/1'));
        checkEqual(true, matchFormat('date_y/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '9//1'));
        checkEqual(false, matchFormat('date_y/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/mm/dd', '2019/11/05'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-9-9'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-9-5'));
        checkEqual(true, matchFormat('date_y-m-d', '19-1-1'));
        checkEqual(true, matchFormat('date_y-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '9--1'));
        checkEqual(false, matchFormat('date_y-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-mm-dd', '2019-11-05'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9')); // Object Named Parameter

        checkEqual(false, matchFormat({
          formatName: 'number',
          value: '-123'
        }));
        checkEqual(true, matchFormat({
          formatName: 'integer',
          value: '-123'
        })); // Exception

        checkEqual(false, isThrownException(function () {
          matchFormat('integer', 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat(null, 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('integer', 123);
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('aaa', 'abc');
        }, new RangeError().name), 'test matchFormat exception');
      });
    };

    var test_replaceAll = function test_replaceAll() {
      it('test_replaceAll', function () {
        checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
        checkEqual('abcabc', replaceAll('abab', 'ab', 'abc')); // Object Named Parameter

        checkEqual('abcabc', replaceAll({
          str: 'abab',
          before: 'ab',
          after: 'abc'
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAll('1212', '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll(1212, '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', 12, '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', '12', 123);
        }));
      });
    };

    var test_indexOf_standard = function test_indexOf_standard() {
      it('test_indexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.indexOf('a'));
        checkEqual(0, 'a'.indexOf('')); // strange

        checkEqual(-1, ''.indexOf('a'));
        checkEqual(0, ''.indexOf('')); // strange

        checkEqual(0, 'abc'.indexOf('a'));
        checkEqual(1, 'abc'.indexOf('b'));
        checkEqual(2, 'abc'.indexOf('c'));
        checkEqual(-1, 'abc'.indexOf('d'));
        checkEqual(0, 'abc'.indexOf('')); // strange

        checkEqual(0, 'abcabc'.indexOf('a'));
        checkEqual(1, 'abcabc'.indexOf('b'));
        checkEqual(2, 'abcabc'.indexOf('c'));
        checkEqual(-1, 'abcabc'.indexOf('d'));
        checkEqual(0, 'abcabc'.indexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.indexOf('a', -1)); // ?

        checkEqual(0, 'abcabc'.indexOf('a', 0));
        checkEqual(3, 'abcabc'.indexOf('a', 1));
        checkEqual(3, 'abcabc'.indexOf('a', 2));
        checkEqual(3, 'abcabc'.indexOf('a', 3));
        checkEqual(-1, 'abcabc'.indexOf('a', 4));
        checkEqual(-1, 'abcabc'.indexOf('a', 5));
        checkEqual(-1, 'abcabc'.indexOf('a', 6)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', -1)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', 0));
        checkEqual(1, 'abcabc'.indexOf('b', 1));
        checkEqual(4, 'abcabc'.indexOf('b', 2));
        checkEqual(4, 'abcabc'.indexOf('b', 3));
        checkEqual(4, 'abcabc'.indexOf('b', 4));
        checkEqual(-1, 'abcabc'.indexOf('b', 5));
        checkEqual(-1, 'abcabc'.indexOf('b', 6)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', -1)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', 0));
        checkEqual(2, 'abcabc'.indexOf('c', 1));
        checkEqual(2, 'abcabc'.indexOf('c', 2));
        checkEqual(5, 'abcabc'.indexOf('c', 3));
        checkEqual(5, 'abcabc'.indexOf('c', 4));
        checkEqual(5, 'abcabc'.indexOf('c', 5));
        checkEqual(-1, 'abcabc'.indexOf('c', 6)); // ?
      });
    };

    var test_indexOfFirst = function test_indexOfFirst() {
      it('test_indexOfFirst', function () {
        checkEqual(0, indexOfFirst('a', 'a'));
        checkEqual(-1, indexOfFirst('a', '')); // not strange

        checkEqual(-1, indexOfFirst('', 'a'));
        checkEqual(-1, indexOfFirst('', '')); // not strange

        checkEqual(0, indexOfFirst('abc', 'a'));
        checkEqual(1, indexOfFirst('abc', 'b'));
        checkEqual(2, indexOfFirst('abc', 'c'));
        checkEqual(-1, indexOfFirst('abc', 'd'));
        checkEqual(-1, indexOfFirst('abc', '')); // not strange

        checkEqual(0, indexOfFirst('abcabc', 'a'));
        checkEqual(1, indexOfFirst('abcabc', 'b'));
        checkEqual(2, indexOfFirst('abcabc', 'c'));
        checkEqual(-1, indexOfFirst('abcabc', 'd'));
        checkEqual(-1, indexOfFirst('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfFirst('abcabc', 'a', 0));
        checkEqual(3, indexOfFirst('abcabc', 'a', 1));
        checkEqual(3, indexOfFirst('abcabc', 'a', 2));
        checkEqual(3, indexOfFirst('abcabc', 'a', 3));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', -1);
        }));
        checkEqual(1, indexOfFirst('abcabc', 'b', 0));
        checkEqual(1, indexOfFirst('abcabc', 'b', 1));
        checkEqual(4, indexOfFirst('abcabc', 'b', 2));
        checkEqual(4, indexOfFirst('abcabc', 'b', 3));
        checkEqual(4, indexOfFirst('abcabc', 'b', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', -1);
        }));
        checkEqual(2, indexOfFirst('abcabc', 'c', 0));
        checkEqual(2, indexOfFirst('abcabc', 'c', 1));
        checkEqual(2, indexOfFirst('abcabc', 'c', 2));
        checkEqual(5, indexOfFirst('abcabc', 'c', 3));
        checkEqual(5, indexOfFirst('abcabc', 'c', 4));
        checkEqual(5, indexOfFirst('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', 6);
        }));
      });
    };

    var test_lastIndexOf_standard = function test_lastIndexOf_standard() {
      it('test_lastIndexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.lastIndexOf('a'));
        checkEqual(1, 'a'.lastIndexOf('')); // strange

        checkEqual(-1, ''.lastIndexOf('a'));
        checkEqual(0, ''.lastIndexOf('')); // strange

        checkEqual(0, 'abc'.lastIndexOf('a'));
        checkEqual(1, 'abc'.lastIndexOf('b'));
        checkEqual(2, 'abc'.lastIndexOf('c'));
        checkEqual(-1, 'abc'.lastIndexOf('d'));
        checkEqual(3, 'abc'.lastIndexOf('')); // strange

        checkEqual(3, 'abcabc'.lastIndexOf('a'));
        checkEqual(4, 'abcabc'.lastIndexOf('b'));
        checkEqual(5, 'abcabc'.lastIndexOf('c'));
        checkEqual(-1, 'abcabc'.lastIndexOf('d'));
        checkEqual(6, 'abcabc'.lastIndexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.lastIndexOf('a', -1)); // ??

        checkEqual(0, 'abcabc'.lastIndexOf('a', 0));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 1));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 2));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 3));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 4));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 5));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', 0));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 1));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 2));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 3));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 4));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 5));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', 0));
        checkEqual(-1, 'abcabc'.lastIndexOf('c', 1));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 2));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 3));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 4));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 5));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 6)); // ?
      });
    };

    var test_indexOfLast = function test_indexOfLast() {
      it('test_indexOfLast', function () {
        checkEqual(0, indexOfLast('a', 'a'));
        checkEqual(-1, indexOfLast('a', '')); // not strange

        checkEqual(-1, indexOfLast('', 'a'));
        checkEqual(-1, indexOfLast('', '')); // not strange

        checkEqual(0, indexOfLast('abc', 'a'));
        checkEqual(1, indexOfLast('abc', 'b'));
        checkEqual(2, indexOfLast('abc', 'c'));
        checkEqual(-1, indexOfLast('abc', 'd'));
        checkEqual(-1, indexOfLast('abc', '')); // not strange

        checkEqual(3, indexOfLast('abcabc', 'a'));
        checkEqual(4, indexOfLast('abcabc', 'b'));
        checkEqual(5, indexOfLast('abcabc', 'c'));
        checkEqual(-1, indexOfLast('abcabc', 'd'));
        checkEqual(-1, indexOfLast('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfLast('abcabc', 'a', 0));
        checkEqual(0, indexOfLast('abcabc', 'a', 1));
        checkEqual(0, indexOfLast('abcabc', 'a', 2));
        checkEqual(3, indexOfLast('abcabc', 'a', 3));
        checkEqual(3, indexOfLast('abcabc', 'a', 4));
        checkEqual(3, indexOfLast('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'b', 0));
        checkEqual(1, indexOfLast('abcabc', 'b', 1));
        checkEqual(1, indexOfLast('abcabc', 'b', 2));
        checkEqual(1, indexOfLast('abcabc', 'b', 3));
        checkEqual(4, indexOfLast('abcabc', 'b', 4));
        checkEqual(4, indexOfLast('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'c', 0));
        checkEqual(-1, indexOfLast('abcabc', 'c', 1));
        checkEqual(2, indexOfLast('abcabc', 'c', 2));
        checkEqual(2, indexOfLast('abcabc', 'c', 3));
        checkEqual(2, indexOfLast('abcabc', 'c', 4));
        checkEqual(5, indexOfLast('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', 6);
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst('123', '1'));
        checkEqual(true, isFirst('123', '12'));
        checkEqual(false, isFirst('123', '13'));
        checkEqual(false, isFirst('123', '2'));
        checkEqual(true, isFirst('ABC', 'A'));
        checkEqual(true, isFirst('ABC', 'AB'));
        checkEqual(false, isFirst('ABC', 'AC'));
        checkEqual(false, isFirst('ABC', 'a'));
        checkEqual(false, isFirst('ABC', 'B'));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast('123', '3'));
        checkEqual(true, isLast('123', '23'));
        checkEqual(false, isLast('123', '13'));
        checkEqual(false, isLast('123', '2'));
        checkEqual(true, isLast('ABC', 'C'));
        checkEqual(true, isLast('ABC', 'BC'));
        checkEqual(false, isLast('ABC', 'AC'));
        checkEqual(false, isLast('ABC', 'c'));
        checkEqual(false, isLast('ABC', 'B'));
        checkEqual(false, isLast('1', '23'));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds('121', '1'));
        checkEqual(false, isBothEnds('121', '2'));
        checkEqual(true, isBothEnds('121', '12', '21'));
        checkEqual(true, isBothEnds('ABA', 'A'));
        checkEqual(false, isBothEnds('ABA', 'a'));
        checkEqual(false, isBothEnds('ABA', 'B'));
        checkEqual(true, isBothEnds('ABAB', 'AB'));
        checkEqual(false, isBothEnds('ABAD', 'A'));
        checkEqual(true, isBothEnds('ABAD', 'A', 'D'));
        checkEqual(true, isBothEnds('{AB}', '{', '}'));
        checkEqual(true, isBothEnds('{{}}', '{', '}'));
        checkEqual(false, isBothEnds('A{B}', '{', '}'));
        checkEqual(false, isBothEnds('{AB}', '}', '}'));
        checkEqual(false, isBothEnds('{AB}', '{', '{'));
        checkEqual(false, isBothEnds('1', '1'));
        checkEqual(true, isBothEnds('11', '1')); // Object Named Parameter

        checkEqual(true, isBothEnds({
          str: 'ABA',
          search: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABA',
          search: 'a'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABA',
          searchFirst: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A',
          searchLast: 'D'
        }));
      });
    };

    var test_includeFirst = function test_includeFirst() {
      it('test_includeFirst', function () {
        checkEqual('123', includeFirst('123', '1'));
        checkEqual('123', includeFirst('123', '12'));
        checkEqual('13123', includeFirst('123', '13'));
        checkEqual('2123', includeFirst('123', '2'));
        checkEqual('ABC', includeFirst('ABC', 'A'));
        checkEqual('ABC', includeFirst('ABC', 'AB'));
        checkEqual('ACABC', includeFirst('ABC', 'AC'));
        checkEqual('aABC', includeFirst('ABC', 'a'));
        checkEqual('BABC', includeFirst('ABC', 'B'));
      });
    };

    var test_includeLast = function test_includeLast() {
      it('test_includeLast', function () {
        checkEqual('123', includeLast('123', '3'));
        checkEqual('123', includeLast('123', '23'));
        checkEqual('12313', includeLast('123', '13'));
        checkEqual('1232', includeLast('123', '2'));
        checkEqual('ABC', includeLast('ABC', 'C'));
        checkEqual('ABC', includeLast('ABC', 'BC'));
        checkEqual('ABCAC', includeLast('ABC', 'AC'));
        checkEqual('ABCc', includeLast('ABC', 'c'));
        checkEqual('ABCB', includeLast('ABC', 'B'));
      });
    };

    var test_includeBothEnds = function test_includeBothEnds() {
      it('test_includeBothEnds', function () {
        checkEqual('121', includeBothEnds('121', '1'));
        checkEqual('21212', includeBothEnds('121', '2'));
        checkEqual('121', includeBothEnds('121', '12', '21'));
        checkEqual('ABA', includeBothEnds('ABA', 'A'));
        checkEqual('aABAa', includeBothEnds('ABA', 'a'));
        checkEqual('BABAB', includeBothEnds('ABA', 'B'));
        checkEqual('ABAB', includeBothEnds('ABAB', 'AB'));
        checkEqual('AABADA', includeBothEnds('ABAD', 'A'));
        checkEqual('ABAD', includeBothEnds('ABAD', 'A', 'D'));
        checkEqual('{AB}', includeBothEnds('{AB}', '{', '}'));
        checkEqual('{{}}', includeBothEnds('{{}}', '{', '}'));
        checkEqual('{A{B}}', includeBothEnds('A{B}', '{', '}'));
        checkEqual('}{AB}}', includeBothEnds('{AB}', '}', '}'));
        checkEqual('{{AB}{', includeBothEnds('{AB}', '{', '{'));
        checkEqual('111', includeBothEnds('1', '1'));
        checkEqual('11', includeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('aABAa', includeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('AABADA', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_excludeFirst = function test_excludeFirst() {
      it('test_excludeFirst', function () {
        checkEqual('23', excludeFirst('123', '1'));
        checkEqual('3', excludeFirst('123', '12'));
        checkEqual('123', excludeFirst('123', '13'));
        checkEqual('123', excludeFirst('123', '2'));
        checkEqual('BC', excludeFirst('ABC', 'A'));
        checkEqual('C', excludeFirst('ABC', 'AB'));
        checkEqual('ABC', excludeFirst('ABC', 'AC'));
        checkEqual('ABC', excludeFirst('ABC', 'a'));
        checkEqual('ABC', excludeFirst('ABC', 'B'));
      });
    };

    var test_excludeLast = function test_excludeLast() {
      it('test_excludeLast', function () {
        checkEqual('12', excludeLast('123', '3'));
        checkEqual('1', excludeLast('123', '23'));
        checkEqual('123', excludeLast('123', '13'));
        checkEqual('123', excludeLast('123', '2'));
        checkEqual('AB', excludeLast('ABC', 'C'));
        checkEqual('A', excludeLast('ABC', 'BC'));
        checkEqual('ABC', excludeLast('ABC', 'AC'));
        checkEqual('ABC', excludeLast('ABC', 'c'));
        checkEqual('ABC', excludeLast('ABC', 'B'));
      });
    };

    var test_excludeBothEnds = function test_excludeBothEnds() {
      it('test_excludeBothEnds', function () {
        checkEqual('2', excludeBothEnds('121', '1'));
        checkEqual('121', excludeBothEnds('121', '2'));
        checkEqual('', excludeBothEnds('121', '12', '21'));
        checkEqual('B', excludeBothEnds('ABA', 'A'));
        checkEqual('ABA', excludeBothEnds('ABA', 'a'));
        checkEqual('ABA', excludeBothEnds('ABA', 'B'));
        checkEqual('', excludeBothEnds('ABAB', 'AB'));
        checkEqual('ABAD', excludeBothEnds('ABAD', 'A'));
        checkEqual('BA', excludeBothEnds('ABAD', 'A', 'D'));
        testCounter();
        checkEqual('AB', excludeBothEnds('{AB}', '{', '}'));
        checkEqual('{}', excludeBothEnds('{{}}', '{', '}'));
        checkEqual('A{B}', excludeBothEnds('A{B}', '{', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '}', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '{', '{'));
        checkEqual('1', excludeBothEnds('1', '1'));
        checkEqual('', excludeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('ABA', excludeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('BA', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_trimFirst = function test_trimFirst() {
      it('test_trimFirst', function () {
        checkEqual('23', trimFirst('123', ['1']));
        checkEqual('3', trimFirst('123', ['12']));
        checkEqual('123', trimFirst('123', ['13']));
        checkEqual('123', trimFirst('123', ['2']));
        checkEqual('BC', trimFirst('ABC', ['A']));
        checkEqual('C', trimFirst('ABC', ['AB']));
        checkEqual('ABC', trimFirst('ABC', ['AC']));
        checkEqual('ABC', trimFirst('ABC', ['a']));
        checkEqual('ABC', trimFirst('ABC', ['B']));
        checkEqual('C', trimFirst('ABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABC', ['B', 'A']));
        checkEqual('C', trimFirst('AABBC', ['A', 'B']));
        checkEqual('C', trimFirst('ABABC', ['A', 'B']));
        checkEqual('C', trimFirst('BABAC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBAC', ['A', 'B']));
        checkEqual('C', trimFirst('BAABC', ['A', 'B']));
        checkEqual('C', trimFirst('AAABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBBC', ['A', 'B']));
        checkEqual('CABC', trimFirst('CABC', ['A', 'B']));
        checkEqual('ABC', trimFirst('ABC', []));
        checkEqual('', trimFirst('ABC', ['ABC']));
        checkEqual('', trimFirst('ABC', ['A', 'B', 'C']));
        checkEqual('', trimFirst('', []));
        checkEqual('', trimFirst('', ['ABC']));
        checkEqual('', trimFirst('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimFirst('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimFirst('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimLast = function test_trimLast() {
      it('test_trimLast', function () {
        checkEqual('12', trimLast('123', ['3']));
        checkEqual('1', trimLast('123', ['23']));
        checkEqual('123', trimLast('123', ['13']));
        checkEqual('123', trimLast('123', ['2']));
        checkEqual('AB', trimLast('ABC', ['C']));
        checkEqual('A', trimLast('ABC', ['BC']));
        checkEqual('ABC', trimLast('ABC', ['AC']));
        checkEqual('ABC', trimLast('ABC', ['c']));
        checkEqual('ABC', trimLast('ABC', ['B']));
        checkEqual('C', trimLast('CAB', ['A', 'B']));
        checkEqual('C', trimLast('CAB', ['B', 'A']));
        checkEqual('C', trimLast('CAABB', ['A', 'B']));
        checkEqual('C', trimLast('CABAB', ['A', 'B']));
        checkEqual('C', trimLast('CBABA', ['A', 'B']));
        checkEqual('C', trimLast('CABBA', ['A', 'B']));
        checkEqual('C', trimLast('CBAAB', ['A', 'B']));
        checkEqual('C', trimLast('CAAAB', ['A', 'B']));
        checkEqual('C', trimLast('CABBB', ['A', 'B']));
        checkEqual('CABC', trimLast('CABC', ['A', 'B']));
        checkEqual('ABC', trimLast('ABC', []));
        checkEqual('', trimLast('ABC', ['ABC']));
        checkEqual('', trimLast('ABC', ['A', 'B', 'C']));
        checkEqual('', trimLast('', []));
        checkEqual('', trimLast('', ['ABC']));
        checkEqual('', trimLast('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimLast('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimLast('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimBothEnds = function test_trimBothEnds() {
      it('test_trimBothEnds', function () {
        checkEqual('2', trimBothEnds('121', ['1']));
        checkEqual('121', trimBothEnds('121', ['2']));
        checkEqual('1', trimBothEnds('121', ['12'], ['21']));
        checkEqual('3', trimBothEnds('123', ['12'], ['23']));
        checkEqual('B', trimBothEnds('ABA', ['A']));
        checkEqual('ABA', trimBothEnds('ABA', ['a']));
        checkEqual('ABA', trimBothEnds('ABA', ['B']));
        checkEqual('', trimBothEnds('ABAB', ['AB']));
        checkEqual('BAD', trimBothEnds('ABAD', ['A']));
        checkEqual('BA', trimBothEnds('ABAD', ['A'], ['D']));
        checkEqual('AB', trimBothEnds('{AB}', ['{'], ['}']));
        checkEqual('', trimBothEnds('{{}}', ['{'], ['}']));
        checkEqual('A{B', trimBothEnds('A{B}', ['{'], ['}']));
        checkEqual('{AB', trimBothEnds('{AB}', ['}'], ['}']));
        checkEqual('AB}', trimBothEnds('{AB}', ['{'], ['{']));
        checkEqual('232', trimBothEnds('12321', ['1']));
        checkEqual('12321', trimBothEnds('12321', ['2']));
        checkEqual('3', trimBothEnds('12321', ['2', '1']));
        checkEqual('232', trimBothEnds('12321', ['', '1']));
        checkEqual('32', trimBothEnds('12321', ['2', '1'], ['1']));
        checkEqual('321', trimBothEnds('12321', ['2', '1'], ['2']));
        checkEqual('', trimBothEnds('1', ['1']));
        checkEqual('', trimBothEnds('11', ['1'])); // Object Named Parameter

        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueArray: ['A']
        }));
        checkEqual('ABA', trimBothEnds({
          str: 'ABA',
          valueArray: ['a']
        }));
        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A'],
          valueLastArray: []
        }));
        checkEqual('AB', trimBothEnds({
          str: 'ABA',
          valueFirstArray: [],
          valueLastArray: ['A']
        }));
        checkEqual('BAD', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_substring_stardard = function test_substring_stardard() {
      it('test_substring_stardard', function () {
        checkEqual('01234', '01234'.substring(-2));
        checkEqual('01234', '01234'.substring(-1));
        checkEqual('01234', '01234'.substring(0));
        checkEqual('1234', '01234'.substring(1));
        checkEqual('234', '01234'.substring(2));
        checkEqual('34', '01234'.substring(3));
        checkEqual('4', '01234'.substring(4));
        checkEqual('', '01234'.substring(5));
        checkEqual('', '01234'.substring(6));
        checkEqual('', '01234'.substring(-2, 0));
        checkEqual('', '01234'.substring(-1, 0));
        checkEqual('', '01234'.substring(0, 0));
        checkEqual('0', '01234'.substring(1, 0));
        checkEqual('01', '01234'.substring(2, 0));
        checkEqual('012', '01234'.substring(3, 0));
        checkEqual('0123', '01234'.substring(4, 0));
        checkEqual('01234', '01234'.substring(5, 0));
        checkEqual('01234', '01234'.substring(6, 0));
        checkEqual('012', '01234'.substring(-2, 3));
        checkEqual('012', '01234'.substring(-1, 3));
        checkEqual('012', '01234'.substring(0, 3));
        checkEqual('12', '01234'.substring(1, 3));
        checkEqual('2', '01234'.substring(2, 3));
        checkEqual('', '01234'.substring(3, 3));
        checkEqual('3', '01234'.substring(4, 3));
        checkEqual('34', '01234'.substring(5, 3));
        checkEqual('34', '01234'.substring(6, 3));
        checkEqual('01234', '01234'.substring(-2, 5));
        checkEqual('01234', '01234'.substring(-1, 5));
        checkEqual('01234', '01234'.substring(0, 5));
        checkEqual('1234', '01234'.substring(1, 5));
        checkEqual('234', '01234'.substring(2, 5));
        checkEqual('34', '01234'.substring(3, 5));
        checkEqual('4', '01234'.substring(4, 5));
        checkEqual('', '01234'.substring(5, 5));
        checkEqual('', '01234'.substring(6, 5));
        checkEqual('01234', '01234'.substring(-2, 6));
        checkEqual('01234', '01234'.substring(-1, 6));
        checkEqual('01234', '01234'.substring(0, 6));
        checkEqual('1234', '01234'.substring(1, 6));
        checkEqual('234', '01234'.substring(2, 6));
        checkEqual('34', '01234'.substring(3, 6));
        checkEqual('4', '01234'.substring(4, 6));
        checkEqual('', '01234'.substring(5, 6));
        checkEqual('', '01234'.substring(6, 6));
      });
    };

    var test_substr_stardard = function test_substr_stardard() {
      it('test_substr_stardard', function () {
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2)); // ?

          checkEqual('4', '01234'.substr(-1)); // ?
        } else {
          checkEqual('01234', '01234'.substr(-2)); // ?

          checkEqual('01234', '01234'.substr(-1)); // ?
        }

        checkEqual('01234', '01234'.substr(0));
        checkEqual('1234', '01234'.substr(1));
        checkEqual('234', '01234'.substr(2));
        checkEqual('34', '01234'.substr(3));
        checkEqual('4', '01234'.substr(4));
        checkEqual('', '01234'.substr(5)); // ?

        checkEqual('', '01234'.substr(6)); // ?

        checkEqual('', '01234'.substr(-2, 0));
        checkEqual('', '01234'.substr(-1, 0));
        checkEqual('', '01234'.substr(0, 0));
        checkEqual('', '01234'.substr(1, 0));
        checkEqual('', '01234'.substr(2, 0));
        checkEqual('', '01234'.substr(3, 0));
        checkEqual('', '01234'.substr(4, 0));
        checkEqual('', '01234'.substr(5, 0));
        checkEqual('', '01234'.substr(6, 0));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 3)); // ?

          checkEqual('4', '01234'.substr(-1, 3)); // ?
        } else {
          checkEqual('012', '01234'.substr(-2, 3)); // ?

          checkEqual('012', '01234'.substr(-1, 3)); // ?
        }

        checkEqual('012', '01234'.substr(0, 3));
        checkEqual('123', '01234'.substr(1, 3));
        checkEqual('234', '01234'.substr(2, 3));
        checkEqual('34', '01234'.substr(3, 3));
        checkEqual('4', '01234'.substr(4, 3));
        checkEqual('', '01234'.substr(5, 3)); // ?

        checkEqual('', '01234'.substr(6, 3)); // ?

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 5));
          checkEqual('4', '01234'.substr(-1, 5));
        } else {
          checkEqual('01234', '01234'.substr(-2, 5));
          checkEqual('01234', '01234'.substr(-1, 5));
        }

        checkEqual('01234', '01234'.substr(0, 5));
        checkEqual('1234', '01234'.substr(1, 5));
        checkEqual('234', '01234'.substr(2, 5));
        checkEqual('34', '01234'.substr(3, 5));
        checkEqual('4', '01234'.substr(4, 5));
        checkEqual('', '01234'.substr(5, 5));
        checkEqual('', '01234'.substr(6, 5));
        testCounter();

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 6));
          checkEqual('4', '01234'.substr(-1, 6));
        } else {
          checkEqual('01234', '01234'.substr(-2, 6));
          checkEqual('01234', '01234'.substr(-1, 6));
        }

        checkEqual('01234', '01234'.substr(0, 6));
        checkEqual('1234', '01234'.substr(1, 6));
        checkEqual('234', '01234'.substr(2, 6));
        checkEqual('34', '01234'.substr(3, 6));
        checkEqual('4', '01234'.substr(4, 6));
        checkEqual('', '01234'.substr(5, 6));
        checkEqual('', '01234'.substr(6, 6));
      });
    };

    var test_subIndex = function test_subIndex() {
      it('test_subIndex', function () {
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1);
        }));
        checkEqual('0', subIndex('01234', 0));
        checkEqual('1', subIndex('01234', 1));
        checkEqual('2', subIndex('01234', 2));
        checkEqual('3', subIndex('01234', 3));
        checkEqual('4', subIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 0);
        }));
        checkEqual('0', subIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 3);
        }));
        checkEqual('0123', subIndex('01234', 0, 3));
        checkEqual('123', subIndex('01234', 1, 3));
        checkEqual('23', subIndex('01234', 2, 3));
        checkEqual('3', subIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 6);
        }));
      });
    };

    var test_subLength = function test_subLength() {
      it('test_subLength', function () {
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1);
        }));
        checkEqual('01234', subLength('01234', 0));
        checkEqual('1234', subLength('01234', 1));
        checkEqual('234', subLength('01234', 2));
        checkEqual('34', subLength('01234', 3));
        checkEqual('4', subLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 0);
        }));
        checkEqual('', subLength('01234', 0, 0));
        checkEqual('', subLength('01234', 1, 0));
        checkEqual('', subLength('01234', 2, 0));
        checkEqual('', subLength('01234', 3, 0));
        checkEqual('', subLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 3);
        }));
        checkEqual('012', subLength('01234', 0, 3));
        checkEqual('123', subLength('01234', 1, 3));
        checkEqual('234', subLength('01234', 2, 3));
        checkEqual('34', subLength('01234', 3, 3));
        checkEqual('4', subLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 5);
        }));
        checkEqual('01234', subLength('01234', 0, 5));
        checkEqual('1234', subLength('01234', 1, 5));
        checkEqual('234', subLength('01234', 2, 5));
        checkEqual('34', subLength('01234', 3, 5));
        checkEqual('4', subLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 6);
        }));
        checkEqual('01234', subLength('01234', 0, 6));
        checkEqual('1234', subLength('01234', 1, 6));
        checkEqual('234', subLength('01234', 2, 6));
        checkEqual('34', subLength('01234', 3, 6));
        checkEqual('4', subLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 6);
        }));
      });
    };

    var test_subFirst = function test_subFirst() {
      it('test_subFirst', function () {
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -1);
        }));
        checkEqual('', subFirst('01234', 0));
        checkEqual('0', subFirst('01234', 1));
        checkEqual('01', subFirst('01234', 2));
        checkEqual('012', subFirst('01234', 3));
        checkEqual('0123', subFirst('01234', 4));
        checkEqual('01234', subFirst('01234', 5));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', 6);
        }));
      });
    };

    var test_subLast = function test_subLast() {
      it('test_subLast', function () {
        checkEqual(true, isThrown(function () {
          return subLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast('01234', -1);
        }));
        checkEqual('', subLast('01234', 0));
        checkEqual('4', subLast('01234', 1));
        checkEqual('34', subLast('01234', 2));
        checkEqual('234', subLast('01234', 3));
        checkEqual('1234', subLast('01234', 4));
        checkEqual('01234', subLast('01234', 5));
        checkEqual(true, isThrown(function () {
          return subLast('01234', 6);
        }));
      });
    };

    var test_deleteIndex = function test_deleteIndex() {
      it('test_deleteIndex', function () {
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1);
        }));
        checkEqual('1234', deleteIndex('01234', 0));
        checkEqual('0234', deleteIndex('01234', 1));
        checkEqual('0134', deleteIndex('01234', 2));
        checkEqual('0124', deleteIndex('01234', 3));
        checkEqual('0123', deleteIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 0);
        }));
        checkEqual('1234', deleteIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 0);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 3);
        }));
        checkEqual('4', deleteIndex('01234', 0, 3));
        checkEqual('04', deleteIndex('01234', 1, 3));
        checkEqual('014', deleteIndex('01234', 2, 3));
        checkEqual('0124', deleteIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 6);
        }));
      });
    };

    var test_deleteLength = function test_deleteLength() {
      it('test_deleteLength', function () {
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1);
        }));
        checkEqual('', deleteLength('01234', 0));
        checkEqual('0', deleteLength('01234', 1));
        checkEqual('01', deleteLength('01234', 2));
        checkEqual('012', deleteLength('01234', 3));
        checkEqual('0123', deleteLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 0);
        }));
        checkEqual('01234', deleteLength('01234', 0, 0));
        checkEqual('01234', deleteLength('01234', 1, 0));
        checkEqual('01234', deleteLength('01234', 2, 0));
        checkEqual('01234', deleteLength('01234', 3, 0));
        checkEqual('01234', deleteLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 3);
        }));
        checkEqual('34', deleteLength('01234', 0, 3));
        checkEqual('04', deleteLength('01234', 1, 3));
        checkEqual('01', deleteLength('01234', 2, 3));
        checkEqual('012', deleteLength('01234', 3, 3));
        checkEqual('0123', deleteLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 5);
        }));
        checkEqual('', deleteLength('01234', 0, 5));
        checkEqual('0', deleteLength('01234', 1, 5));
        checkEqual('01', deleteLength('01234', 2, 5));
        checkEqual('012', deleteLength('01234', 3, 5));
        checkEqual('0123', deleteLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 6);
        }));
        checkEqual('', deleteLength('01234', 0, 6));
        checkEqual('0', deleteLength('01234', 1, 6));
        checkEqual('01', deleteLength('01234', 2, 6));
        checkEqual('012', deleteLength('01234', 3, 6));
        checkEqual('0123', deleteLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 6);
        }));
      });
    };

    var test_deleteFirst = function test_deleteFirst() {
      it('test_deleteFirst', function () {
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -1);
        }));
        checkEqual('01234', deleteFirst('01234', 0));
        checkEqual('1234', deleteFirst('01234', 1));
        checkEqual('234', deleteFirst('01234', 2));
        checkEqual('34', deleteFirst('01234', 3));
        checkEqual('4', deleteFirst('01234', 4));
        checkEqual('', deleteFirst('01234', 5));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', 6);
        }));
      });
    };

    var test_deleteLast = function test_deleteLast() {
      it('test_deleteLast', function () {
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -1);
        }));
        checkEqual('01234', deleteLast('01234', 0));
        checkEqual('0123', deleteLast('01234', 1));
        checkEqual('012', deleteLast('01234', 2));
        checkEqual('01', deleteLast('01234', 3));
        checkEqual('0', deleteLast('01234', 4));
        checkEqual('', deleteLast('01234', 5));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', 6);
        }));
      });
    };

    var test_insert = function test_insert() {
      it('test_insert', function () {
        checkEqual('A01234', insert('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', -1);
        }));
        checkEqual('A01234', insert('01234', 'A', 0));
        checkEqual('0A1234', insert('01234', 'A', 1));
        checkEqual('01A234', insert('01234', 'A', 2));
        checkEqual('012A34', insert('01234', 'A', 3));
        checkEqual('0123A4', insert('01234', 'A', 4));
        checkEqual('01234A', insert('01234', 'A', 5));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', 6);
        }));
      });
    };

    var test_add = function test_add() {
      it('test_add', function () {
        checkEqual('01234A', add('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', -2);
        }));
        checkEqual('A01234', add('01234', 'A', -1));
        checkEqual('0A1234', add('01234', 'A', 0));
        checkEqual('01A234', add('01234', 'A', 1));
        checkEqual('012A34', add('01234', 'A', 2));
        checkEqual('0123A4', add('01234', 'A', 3));
        checkEqual('01234A', add('01234', 'A', 4));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', 5);
        }));
      });
    };

    test_matchFormat();
    test_replaceAll();
    test_indexOf_standard();
    test_indexOfFirst();
    test_lastIndexOf_standard();
    test_indexOfLast();
    test_isFirst();
    test_isLast();
    test_isBothEnds();
    test_includeFirst();
    test_includeLast();
    test_includeBothEnds();
    test_excludeFirst();
    test_excludeLast();
    test_excludeBothEnds();
    test_trimFirst();
    test_trimLast();
    test_trimBothEnds();
    test_substring_stardard();
    test_substr_stardard();
    test_subIndex();
    test_subLength();
    test_subFirst();
    test_subLast();
    test_deleteIndex();
    test_deleteLength();
    test_deleteFirst();
    test_deleteLast();
    test_insert();
    test_add();
  });
};

module.exports = {
  test_execute_string: test_execute_string
};