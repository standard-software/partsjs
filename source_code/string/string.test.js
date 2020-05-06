const test_execute_string = (parts) => {
  const { describe, it } = parts.test;
  describe('test_execute_string', () => {

    const {
      checkEqual,
      isThrown,
      isThrownException,
      testCounter,
    } = parts.test;

    const {
      matchFormat, replaceAll,
      indexOfFirst, indexOfLast,
    } = parts.string;

    const test_matchFormat = () => {
      it('test_matchFormat', () => {
        checkEqual(true,  matchFormat('number', '123'));
        checkEqual(false, matchFormat('number', '12a'));
        checkEqual(false, matchFormat('number', '-123'));
        checkEqual(true,  matchFormat('integer', '-123'));

        checkEqual(true,  matchFormat('date_y/m/d', '2019/11/05'));
        checkEqual(true,  matchFormat('date_y/m/d', '2019/9/5'));
        checkEqual(true,  matchFormat('date_y/m/d', '19/1/1'));
        checkEqual(true,  matchFormat('date_y/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '9//1'));
        checkEqual(false, matchFormat('date_y/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-9-9'));

        checkEqual(true,  matchFormat('date_yyyy/m/d', '2019/11/05'));
        checkEqual(true,  matchFormat('date_yyyy/m/d', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-9-9'));

        checkEqual(true,  matchFormat('date_yyyy/mm/dd', '2019/11/05'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-9-9'));

        checkEqual(true,  matchFormat('date_y-m-d', '2019-11-05'));
        checkEqual(true,  matchFormat('date_y-m-d', '2019-9-5'));
        checkEqual(true,  matchFormat('date_y-m-d', '19-1-1'));
        checkEqual(true,  matchFormat('date_y-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '9--1'));
        checkEqual(false, matchFormat('date_y-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/9/9'));

        checkEqual(true,  matchFormat('date_yyyy-m-d', '2019-11-05'));
        checkEqual(true,  matchFormat('date_yyyy-m-d', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/9/9'));

        checkEqual(true,  matchFormat('date_yyyy-mm-dd', '2019-11-05'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9'));


        // Object Named Parameter
        checkEqual(false, matchFormat({
          formatName: 'number',
          value: '-123',
        }));
        checkEqual(true,  matchFormat({
          formatName: 'integer',
          value: '-123',
        }));

        // Exception
        checkEqual(false, isThrownException(() => {
          matchFormat('integer', 'abc');
        }, (new TypeError).name), 'test matchFormat exception');
        checkEqual(true, isThrownException(() => {
          matchFormat(null, 'abc');
        }, (new TypeError).name), 'test matchFormat exception');
        checkEqual(true, isThrownException(() => {
          matchFormat('integer', 123);
        }, (new TypeError).name), 'test matchFormat exception');
        checkEqual(true, isThrownException(() => {
          matchFormat('aaa', 'abc');
        }, (new RangeError).name), 'test matchFormat exception');
      });
    };

    const test_replaceAll = () => {
      it('test_replaceAll', () => {
        checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
        checkEqual('abcabc', replaceAll('abab', 'ab', 'abc'));

        // Object Named Parameter
        checkEqual('abcabc',  replaceAll({
          str:    'abab',
          before: 'ab',
          after:  'abc',
        }));

        // exception
        checkEqual(false, isThrown(() => { replaceAll('1212', '12', '123'); }));
        checkEqual(true,  isThrown(() => { replaceAll( 1212,  '12', '123'); }));
        checkEqual(true,  isThrown(() => { replaceAll('1212',  12,  '123'); }));
        checkEqual(true,  isThrown(() => { replaceAll('1212', '12',  123 ); }));

      });
    };

    const test_indexOf_standard = () => {
      it('test_indexOf_standard', () => {
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual( 0,  'a'.indexOf('a'));
        checkEqual( 0,  'a'.indexOf(''));   // strange
        checkEqual(-1,  ''.indexOf('a'));
        checkEqual( 0,  ''.indexOf(''));    // strange

        checkEqual( 0, 'abc'.indexOf('a'));
        checkEqual( 1, 'abc'.indexOf('b'));
        checkEqual( 2, 'abc'.indexOf('c'));
        checkEqual(-1, 'abc'.indexOf('d'));
        checkEqual( 0, 'abc'.indexOf(''));      // strange
        checkEqual( 0, 'abcabc'.indexOf('a'));
        checkEqual( 1, 'abcabc'.indexOf('b'));
        checkEqual( 2, 'abcabc'.indexOf('c'));
        checkEqual(-1, 'abcabc'.indexOf('d'));
        checkEqual( 0, 'abcabc'.indexOf(''));   // strange

        // startIndex
        checkEqual( 0, 'abcabc'.indexOf('a', -1));  // ?
        checkEqual( 0, 'abcabc'.indexOf('a', 0));
        checkEqual( 3, 'abcabc'.indexOf('a', 1));
        checkEqual( 3, 'abcabc'.indexOf('a', 2));
        checkEqual( 3, 'abcabc'.indexOf('a', 3));
        checkEqual(-1, 'abcabc'.indexOf('a', 4));
        checkEqual(-1, 'abcabc'.indexOf('a', 5));
        checkEqual(-1, 'abcabc'.indexOf('a', 6));   // ?
        checkEqual( 1, 'abcabc'.indexOf('b', -1));  // ?
        checkEqual( 1, 'abcabc'.indexOf('b', 0));
        checkEqual( 1, 'abcabc'.indexOf('b', 1));
        checkEqual( 4, 'abcabc'.indexOf('b', 2));
        checkEqual( 4, 'abcabc'.indexOf('b', 3));
        checkEqual( 4, 'abcabc'.indexOf('b', 4));
        checkEqual(-1, 'abcabc'.indexOf('b', 5));
        checkEqual(-1, 'abcabc'.indexOf('b', 6));   // ?
        checkEqual( 2, 'abcabc'.indexOf('c', -1));  // ?
        checkEqual( 2, 'abcabc'.indexOf('c', 0));
        checkEqual( 2, 'abcabc'.indexOf('c', 1));
        checkEqual( 2, 'abcabc'.indexOf('c', 2));
        checkEqual( 5, 'abcabc'.indexOf('c', 3));
        checkEqual( 5, 'abcabc'.indexOf('c', 4));
        checkEqual( 5, 'abcabc'.indexOf('c', 5));
        checkEqual(-1, 'abcabc'.indexOf('c', 6));   // ?
      });
    };

    const test_indexOfFirst = () => {
      it('test_indexOfFirst', () => {
        checkEqual(0,   indexOfFirst('a', 'a'));
        checkEqual(-1,  indexOfFirst('a', ''));   // not strange
        checkEqual(-1,  indexOfFirst('',  'a'));
        checkEqual(-1,   indexOfFirst('',  ''));  // not strange

        checkEqual( 0, indexOfFirst('abc', 'a'));
        checkEqual( 1, indexOfFirst('abc', 'b'));
        checkEqual( 2, indexOfFirst('abc', 'c'));
        checkEqual(-1, indexOfFirst('abc', 'd'));
        checkEqual(-1, indexOfFirst('abc', ''));      // not strange
        checkEqual( 0, indexOfFirst('abcabc', 'a'));
        checkEqual( 1, indexOfFirst('abcabc', 'b'));
        checkEqual( 2, indexOfFirst('abcabc', 'c'));
        checkEqual(-1, indexOfFirst('abcabc', 'd'));
        checkEqual(-1, indexOfFirst('abcabc', ''));   // not strange

        // startIndex
        checkEqual(true,  isThrown(() => indexOfFirst('abcabc', 'a', -1)));
        checkEqual( 0, indexOfFirst('abcabc', 'a', 0));
        checkEqual( 3, indexOfFirst('abcabc', 'a', 1));
        checkEqual( 3, indexOfFirst('abcabc', 'a', 2));
        checkEqual( 3, indexOfFirst('abcabc', 'a', 3));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 5));
        checkEqual(true,  isThrown(() => indexOfFirst('abcabc', 'a',  6)));
        checkEqual(true,  isThrown(() => indexOfFirst('abcabc', 'b',  -1)));
        checkEqual( 1, indexOfFirst('abcabc', 'b', 0));
        checkEqual( 1, indexOfFirst('abcabc', 'b', 1));
        checkEqual( 4, indexOfFirst('abcabc', 'b', 2));
        checkEqual( 4, indexOfFirst('abcabc', 'b', 3));
        checkEqual( 4, indexOfFirst('abcabc', 'b', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'b', 5));
        checkEqual(true,  isThrown(() => indexOfFirst('abcabc', 'b',  6)));
        checkEqual(true,  isThrown(() => indexOfFirst('abcabc', 'c',  -1)));
        checkEqual( 2, indexOfFirst('abcabc', 'c', 0));
        checkEqual( 2, indexOfFirst('abcabc', 'c', 1));
        checkEqual( 2, indexOfFirst('abcabc', 'c', 2));
        checkEqual( 5, indexOfFirst('abcabc', 'c', 3));
        checkEqual( 5, indexOfFirst('abcabc', 'c', 4));
        checkEqual( 5, indexOfFirst('abcabc', 'c', 5));
        checkEqual(true,  isThrown(() => indexOfFirst('abcabc', 'c',  6)));

      });
    };

    const test_lastIndexOf_standard = () => {
      it('test_lastIndexOf_standard', () => {
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual( 0,  'a'.lastIndexOf('a'));
        checkEqual( 1,  'a'.lastIndexOf(''));   // strange
        checkEqual(-1,  ''.lastIndexOf('a'));
        checkEqual( 0,  ''.lastIndexOf(''));    // strange

        checkEqual( 0, 'abc'.lastIndexOf('a'));
        checkEqual( 1, 'abc'.lastIndexOf('b'));
        checkEqual( 2, 'abc'.lastIndexOf('c'));
        checkEqual(-1, 'abc'.lastIndexOf('d'));
        checkEqual( 3, 'abc'.lastIndexOf(''));      // strange
        checkEqual( 3, 'abcabc'.lastIndexOf('a'));
        checkEqual( 4, 'abcabc'.lastIndexOf('b'));
        checkEqual( 5, 'abcabc'.lastIndexOf('c'));
        checkEqual(-1, 'abcabc'.lastIndexOf('d'));
        checkEqual( 6, 'abcabc'.lastIndexOf(''));   // strange

        // startIndex
        checkEqual( 0, 'abcabc'.lastIndexOf('a', -1));  // ??
        checkEqual( 0, 'abcabc'.lastIndexOf('a', 0));
        checkEqual( 0, 'abcabc'.lastIndexOf('a', 1));
        checkEqual( 0, 'abcabc'.lastIndexOf('a', 2));
        checkEqual( 3, 'abcabc'.lastIndexOf('a', 3));
        checkEqual( 3, 'abcabc'.lastIndexOf('a', 4));
        checkEqual( 3, 'abcabc'.lastIndexOf('a', 5));
        checkEqual( 3, 'abcabc'.lastIndexOf('a', 6));   // ?
        checkEqual(-1, 'abcabc'.lastIndexOf('b', -1));  // ?
        checkEqual(-1, 'abcabc'.lastIndexOf('b', 0));
        checkEqual( 1, 'abcabc'.lastIndexOf('b', 1));
        checkEqual( 1, 'abcabc'.lastIndexOf('b', 2));
        checkEqual( 1, 'abcabc'.lastIndexOf('b', 3));
        checkEqual( 4, 'abcabc'.lastIndexOf('b', 4));
        checkEqual( 4, 'abcabc'.lastIndexOf('b', 5));
        checkEqual( 4, 'abcabc'.lastIndexOf('b', 6));   // ?
        checkEqual(-1, 'abcabc'.lastIndexOf('c', -1));  // ?
        checkEqual(-1, 'abcabc'.lastIndexOf('c', 0));
        checkEqual(-1, 'abcabc'.lastIndexOf('c', 1));
        checkEqual( 2, 'abcabc'.lastIndexOf('c', 2));
        checkEqual( 2, 'abcabc'.lastIndexOf('c', 3));
        checkEqual( 2, 'abcabc'.lastIndexOf('c', 4));
        checkEqual( 5, 'abcabc'.lastIndexOf('c', 5));
        checkEqual( 5, 'abcabc'.lastIndexOf('c', 6));   // ?
      });
    };

    const test_indexOfLast = () => {
      it('test_indexOfLast', () => {
        checkEqual(0,   indexOfLast('a', 'a'));
        checkEqual(-1,  indexOfLast('a', ''));  // not strange
        checkEqual(-1,  indexOfLast('',  'a'));
        checkEqual(-1,  indexOfLast('',  ''));  // not strange

        checkEqual( 0, indexOfLast('abc', 'a'));
        checkEqual( 1, indexOfLast('abc', 'b'));
        checkEqual( 2, indexOfLast('abc', 'c'));
        checkEqual(-1, indexOfLast('abc', 'd'));
        checkEqual(-1, indexOfLast('abc', ''));     // not strange
        checkEqual( 3, indexOfLast('abcabc', 'a'));
        checkEqual( 4, indexOfLast('abcabc', 'b'));
        checkEqual( 5, indexOfLast('abcabc', 'c'));
        checkEqual(-1, indexOfLast('abcabc', 'd'));
        checkEqual(-1, indexOfLast('abcabc', ''));  // not strange

        // startIndex
        checkEqual(true,  isThrown(() => indexOfLast('abcabc', 'a', -1)));
        checkEqual( 0, indexOfLast('abcabc', 'a', 0));
        checkEqual( 0, indexOfLast('abcabc', 'a', 1));
        checkEqual( 0, indexOfLast('abcabc', 'a', 2));
        checkEqual( 3, indexOfLast('abcabc', 'a', 3));
        checkEqual( 3, indexOfLast('abcabc', 'a', 4));
        checkEqual( 3, indexOfLast('abcabc', 'a', 5));
        checkEqual(true,  isThrown(() => indexOfLast('abcabc', 'a',  6)));
        checkEqual(true,  isThrown(() => indexOfLast('abcabc', 'b',  -1)));
        checkEqual(-1, indexOfLast('abcabc', 'b', 0));
        checkEqual( 1, indexOfLast('abcabc', 'b', 1));
        checkEqual( 1, indexOfLast('abcabc', 'b', 2));
        checkEqual( 1, indexOfLast('abcabc', 'b', 3));
        checkEqual( 4, indexOfLast('abcabc', 'b', 4));
        checkEqual( 4, indexOfLast('abcabc', 'b', 5));
        checkEqual(true,  isThrown(() => indexOfLast('abcabc', 'b',  6)));
        checkEqual(true,  isThrown(() => indexOfLast('abcabc', 'c',  -1)));
        checkEqual(-1, indexOfLast('abcabc', 'c', 0));
        checkEqual(-1, indexOfLast('abcabc', 'c', 1));
        checkEqual( 2, indexOfLast('abcabc', 'c', 2));
        checkEqual( 2, indexOfLast('abcabc', 'c', 3));
        checkEqual( 2, indexOfLast('abcabc', 'c', 4));
        checkEqual( 5, indexOfLast('abcabc', 'c', 5));
        checkEqual(true,  isThrown(() => indexOfLast('abcabc', 'c',  6)));

      });
    };

    test_matchFormat();
    test_replaceAll();

    test_indexOf_standard();
    test_indexOfFirst();
    test_lastIndexOf_standard();
    test_indexOfLast();

  });
};

module.exports = {
  test_execute_string,
};
