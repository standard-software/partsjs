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
      isFirst, isLast, isBothEnds,
      subIndex, subLength,
      subFirst, subLast,
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

    const test_isFirst = () => {
      it('test_isFirst', () => {
        checkEqual(true,  isFirst('123', '1'));
        checkEqual(true,  isFirst('123', '12'));
        checkEqual(false, isFirst('123', '13'));
        checkEqual(false, isFirst('123', '2'));
        checkEqual(true,  isFirst('ABC', 'A'));
        checkEqual(true,  isFirst('ABC', 'AB'));
        checkEqual(false, isFirst('ABC', 'AC'));
        checkEqual(false, isFirst('ABC', 'a'));
        checkEqual(false, isFirst('ABC', 'B'));
      });
    };

    const test_isLast = () => {
      it('test_isLast', () => {
        checkEqual(true,  isLast('123', '3'));
        checkEqual(true,  isLast('123', '23'));
        checkEqual(false, isLast('123', '13'));
        checkEqual(false, isLast('123', '2'));
        checkEqual(true,  isLast('ABC', 'C'));
        checkEqual(true,  isLast('ABC', 'BC'));
        checkEqual(false, isLast('ABC', 'AC'));
        checkEqual(false, isLast('ABC', 'c'));
        checkEqual(false, isLast('ABC', 'B'));
      });
    };

    const test_isBothEnds = () => {
      it('test_isBothEnds', () => {
        checkEqual(true,  isBothEnds('121', '1'));
        checkEqual(false, isBothEnds('121', '2'));
        checkEqual(true,  isBothEnds('121', '12', '21'));
        checkEqual(true,  isBothEnds('ABA', 'A'));
        checkEqual(false, isBothEnds('ABA', 'a'));
        checkEqual(false, isBothEnds('ABA', 'B'));
        checkEqual(true,  isBothEnds('ABAB', 'AB'));

        checkEqual(false, isBothEnds('ABAD', 'A'));
        checkEqual(true,  isBothEnds('ABAD', 'A', 'D'));

        checkEqual(true,  isBothEnds('{AB}', '{', '}'));
        checkEqual(true,  isBothEnds('{{}}', '{', '}'));
        checkEqual(false, isBothEnds('A{B}', '{', '}'));
        checkEqual(false, isBothEnds('{AB}', '}', '}'));
        checkEqual(false, isBothEnds('{AB}', '{', '{'));

        checkEqual(false, isBothEnds('1', '1'));
        checkEqual(true,  isBothEnds('11', '1'));

        // Object Named Parameter
        checkEqual(true,
          isBothEnds({
            str: 'ABA',
            search: 'A',
          }),
        );
        checkEqual(false,
          isBothEnds({
            str: 'ABA',
            search: 'a',
          }),
        );
        checkEqual(true,
          isBothEnds({
            str: 'ABA',
            searchFirst: 'A',
          }),
        );
        checkEqual(false,
          isBothEnds({
            str: 'ABAD',
            searchFirst: 'A',
          }),
        );
        checkEqual(true,
          isBothEnds({
            str: 'ABAD',
            searchFirst: 'A',
            searchLast: 'D',
          }),
        );
      });
    };

    const test_substring_stardard = () => {
      it('test_substring_stardard', () => {
        checkEqual('01234', '01234'.substring(-2));
        checkEqual('01234', '01234'.substring(-1));
        checkEqual('01234', '01234'.substring( 0));
        checkEqual('1234',  '01234'.substring( 1));
        checkEqual('234',   '01234'.substring( 2));
        checkEqual('34',    '01234'.substring( 3));
        checkEqual('4',     '01234'.substring( 4));
        checkEqual('',      '01234'.substring( 5));
        checkEqual('',      '01234'.substring( 6));

        checkEqual('',      '01234'.substring(-2, 0));
        checkEqual('',      '01234'.substring(-1, 0));
        checkEqual('',      '01234'.substring( 0, 0));
        checkEqual('0',     '01234'.substring( 1, 0));
        checkEqual('01',    '01234'.substring( 2, 0));
        checkEqual('012',   '01234'.substring( 3, 0));
        checkEqual('0123',  '01234'.substring( 4, 0));
        checkEqual('01234', '01234'.substring( 5, 0));
        checkEqual('01234', '01234'.substring( 6, 0));

        checkEqual('012',   '01234'.substring(-2, 3));
        checkEqual('012',   '01234'.substring(-1, 3));
        checkEqual('012',   '01234'.substring( 0, 3));
        checkEqual('12',    '01234'.substring( 1, 3));
        checkEqual('2',     '01234'.substring( 2, 3));
        checkEqual('',      '01234'.substring( 3, 3));
        checkEqual('3',     '01234'.substring( 4, 3));
        checkEqual('34',    '01234'.substring( 5, 3));
        checkEqual('34',    '01234'.substring( 6, 3));

        checkEqual('01234', '01234'.substring(-2, 5));
        checkEqual('01234', '01234'.substring(-1, 5));
        checkEqual('01234', '01234'.substring( 0, 5));
        checkEqual('1234',  '01234'.substring( 1, 5));
        checkEqual('234',   '01234'.substring( 2, 5));
        checkEqual('34',    '01234'.substring( 3, 5));
        checkEqual('4',     '01234'.substring( 4, 5));
        checkEqual('',      '01234'.substring( 5, 5));
        checkEqual('',      '01234'.substring( 6, 5));

        checkEqual('01234', '01234'.substring(-2, 6));
        checkEqual('01234', '01234'.substring(-1, 6));
        checkEqual('01234', '01234'.substring( 0, 6));
        checkEqual('1234',  '01234'.substring( 1, 6));
        checkEqual('234',   '01234'.substring( 2, 6));
        checkEqual('34',    '01234'.substring( 3, 6));
        checkEqual('4',     '01234'.substring( 4, 6));
        checkEqual('',      '01234'.substring( 5, 6));
        checkEqual('',      '01234'.substring( 6, 6));
      });
    };

    const test_substr_stardard = () => {
      it('test_substr_stardard', () => {
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34',    '01234'.substr(-2));  // ?
          checkEqual('4',     '01234'.substr(-1));  // ?
        } else {
          checkEqual('01234', '01234'.substr(-2));  // ?
          checkEqual('01234', '01234'.substr(-1));  // ?
        }
        checkEqual('01234', '01234'.substr( 0));
        checkEqual('1234',  '01234'.substr( 1));
        checkEqual('234',   '01234'.substr( 2));
        checkEqual('34',    '01234'.substr( 3));
        checkEqual('4',     '01234'.substr( 4));
        checkEqual('',      '01234'.substr( 5));  // ?
        checkEqual('',      '01234'.substr( 6));  // ?

        checkEqual('',      '01234'.substr(-2, 0));
        checkEqual('',      '01234'.substr(-1, 0));
        checkEqual('',      '01234'.substr( 0, 0));
        checkEqual('',      '01234'.substr( 1, 0));
        checkEqual('',      '01234'.substr( 2, 0));
        checkEqual('',      '01234'.substr( 3, 0));
        checkEqual('',      '01234'.substr( 4, 0));
        checkEqual('',      '01234'.substr( 5, 0));
        checkEqual('',      '01234'.substr( 6, 0));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34',    '01234'.substr(-2, 3)); // ?
          checkEqual('4',     '01234'.substr(-1, 3)); // ?
        } else {
          checkEqual('012',   '01234'.substr(-2, 3)); // ?
          checkEqual('012',   '01234'.substr(-1, 3)); // ?
        }
        checkEqual('012',   '01234'.substr( 0, 3));
        checkEqual('123',   '01234'.substr( 1, 3));
        checkEqual('234',   '01234'.substr( 2, 3));
        checkEqual('34',    '01234'.substr( 3, 3));
        checkEqual('4',     '01234'.substr( 4, 3));
        checkEqual('',      '01234'.substr( 5, 3));  // ?
        checkEqual('',      '01234'.substr( 6, 3));  // ?

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34',    '01234'.substr(-2, 5));
          checkEqual('4',     '01234'.substr(-1, 5));
        } else {
          checkEqual('01234', '01234'.substr(-2, 5));
          checkEqual('01234', '01234'.substr(-1, 5));
        }
        checkEqual('01234', '01234'.substr( 0, 5));
        checkEqual('1234',  '01234'.substr( 1, 5));
        checkEqual('234',   '01234'.substr( 2, 5));
        checkEqual('34',    '01234'.substr( 3, 5));
        checkEqual('4',     '01234'.substr( 4, 5));
        checkEqual('',      '01234'.substr( 5, 5));
        checkEqual('',      '01234'.substr( 6, 5));

        testCounter();
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34',    '01234'.substr(-2, 6));
          checkEqual('4',     '01234'.substr(-1, 6));
        } else {
          checkEqual('01234', '01234'.substr(-2, 6));
          checkEqual('01234', '01234'.substr(-1, 6));
        }
        checkEqual('01234', '01234'.substr( 0, 6));
        checkEqual('1234',  '01234'.substr( 1, 6));
        checkEqual('234',   '01234'.substr( 2, 6));
        checkEqual('34',    '01234'.substr( 3, 6));
        checkEqual('4',     '01234'.substr( 4, 6));
        checkEqual('',      '01234'.substr( 5, 6));
        checkEqual('',      '01234'.substr( 6, 6));
      });
    };

    const test_subIndex = () => {
      it('test_subIndex', () => {
        checkEqual(true,  isThrown(() => subIndex('01234', -2)));
        checkEqual(true,  isThrown(() => subIndex('01234', -1)));
        checkEqual('0',     subIndex('01234', 0));
        checkEqual('1',     subIndex('01234', 1));
        checkEqual('2',     subIndex('01234', 2));
        checkEqual('3',     subIndex('01234', 3));
        checkEqual('4',     subIndex('01234', 4));
        checkEqual(true,  isThrown(() => subIndex('01234', 5)));
        checkEqual(true,  isThrown(() => subIndex('01234', 6)));

        testCounter();
        checkEqual(true,  isThrown(() => subIndex('01234', -2, 0)));
        checkEqual(true,  isThrown(() => subIndex('01234', -1, 0)));
        checkEqual('0',     subIndex('01234', 0, 0));
        checkEqual(true,  isThrown(() => subIndex('01234',  1, 0)));
        checkEqual(true,  isThrown(() => subIndex('01234',  2, 0)));
        checkEqual(true,  isThrown(() => subIndex('01234',  3, 0)));
        checkEqual(true,  isThrown(() => subIndex('01234',  4, 0)));
        checkEqual(true,  isThrown(() => subIndex('01234',  5, 0)));
        checkEqual(true,  isThrown(() => subIndex('01234',  6, 0)));

        checkEqual(true,  isThrown(() => subIndex('01234', -2, 3)));
        checkEqual(true,  isThrown(() => subIndex('01234', -1, 3)));
        checkEqual('0123',  subIndex('01234', 0, 3));
        checkEqual('123',   subIndex('01234', 1, 3));
        checkEqual('23',    subIndex('01234', 2, 3));
        checkEqual('3',     subIndex('01234', 3, 3));
        checkEqual(true,  isThrown(() => subIndex('01234',  4, 3)));
        checkEqual(true,  isThrown(() => subIndex('01234',  5, 3)));
        checkEqual(true,  isThrown(() => subIndex('01234',  6, 3)));

        checkEqual(true,  isThrown(() => subIndex('01234', -2, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234', -1, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  0, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  1, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  2, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  3, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  4, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  5, 5)));
        checkEqual(true,  isThrown(() => subIndex('01234',  6, 5)));

        checkEqual(true,  isThrown(() => subIndex('01234', -2, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234', -1, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  0, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  1, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  2, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  3, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  4, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  5, 6)));
        checkEqual(true,  isThrown(() => subIndex('01234',  6, 6)));
      });
    };

    const test_subLength = () => {
      it('test_subLength', () => {
        checkEqual(true,  isThrown(() => subLength('01234', -2)));
        checkEqual(true,  isThrown(() => subLength('01234', -1)));
        checkEqual('01234', subLength('01234', 0));
        checkEqual('1234',  subLength('01234', 1));
        checkEqual('234',   subLength('01234', 2));
        checkEqual('34',    subLength('01234', 3));
        checkEqual('4',     subLength('01234', 4));
        checkEqual(true,  isThrown(() => subLength('01234', 5)));
        checkEqual(true,  isThrown(() => subLength('01234', 6)));

        checkEqual(true,  isThrown(() => subLength('01234', -1, 0)));
        checkEqual(true,  isThrown(() => subLength('01234', -1, 0)));
        checkEqual('',      subLength('01234', 0, 0));
        checkEqual('',      subLength('01234', 1, 0));
        checkEqual('',      subLength('01234', 2, 0));
        checkEqual('',      subLength('01234', 3, 0));
        checkEqual('',      subLength('01234', 4, 0));
        checkEqual(true,  isThrown(() => subLength('01234',  5, 0)));
        checkEqual(true,  isThrown(() => subLength('01234',  6, 0)));

        checkEqual(true,  isThrown(() => subLength('01234', -1, 3)));
        checkEqual(true,  isThrown(() => subLength('01234', -1, 3)));
        checkEqual('012',   subLength('01234', 0, 3));
        checkEqual('123',   subLength('01234', 1, 3));
        checkEqual('234',   subLength('01234', 2, 3));
        checkEqual('34',    subLength('01234', 3, 3));
        checkEqual('4',     subLength('01234', 4, 3));
        checkEqual(true,  isThrown(() => subLength('01234',  5, 3)));
        checkEqual(true,  isThrown(() => subLength('01234',  6, 3)));

        checkEqual(true,  isThrown(() => subLength('01234', -1, 5)));
        checkEqual(true,  isThrown(() => subLength('01234', -1, 5)));
        checkEqual('01234', subLength('01234', 0, 5));
        checkEqual('1234',  subLength('01234', 1, 5));
        checkEqual('234',   subLength('01234', 2, 5));
        checkEqual('34',    subLength('01234', 3, 5));
        checkEqual('4',     subLength('01234', 4, 5));
        checkEqual(true,  isThrown(() => subLength('01234',  5, 5)));
        checkEqual(true,  isThrown(() => subLength('01234',  6, 5)));

        checkEqual(true,  isThrown(() => subLength('01234', -1, 6)));
        checkEqual(true,  isThrown(() => subLength('01234', -1, 6)));
        checkEqual('01234', subLength('01234', 0, 6));
        checkEqual('1234',  subLength('01234', 1, 6));
        checkEqual('234',   subLength('01234', 2, 6));
        checkEqual('34',    subLength('01234', 3, 6));
        checkEqual('4',     subLength('01234', 4, 6));
        checkEqual(true,  isThrown(() => subLength('01234',  5, 6)));
        checkEqual(true,  isThrown(() => subLength('01234',  6, 6)));

      });
    };

    const test_subFirst = () => {
      it('test_subFirst', () => {
        checkEqual(true,  isThrown(() => subFirst('01234', -2)));
        checkEqual(true,  isThrown(() => subFirst('01234', -1)));
        checkEqual('',      subFirst('01234', 0));
        checkEqual('0',     subFirst('01234', 1));
        checkEqual('01',    subFirst('01234', 2));
        checkEqual('012',   subFirst('01234', 3));
        checkEqual('0123',  subFirst('01234', 4));
        checkEqual('01234', subFirst('01234', 5));
        checkEqual(true,  isThrown(() => subFirst('01234', 6)));
      });
    };

    const test_subLast = () => {
      it('test_subLast', () => {
        checkEqual(true,  isThrown(() => subLast('01234', -2)));
        checkEqual(true,  isThrown(() => subLast('01234', -1)));
        checkEqual('',      subLast('01234', 0));
        checkEqual('4',     subLast('01234', 1));
        checkEqual('34',    subLast('01234', 2));
        checkEqual('234',   subLast('01234', 3));
        checkEqual('1234',  subLast('01234', 4));
        checkEqual('01234', subLast('01234', 5));
        checkEqual(true,  isThrown(() => subLast('01234', 6)));
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

    test_substring_stardard();
    test_substr_stardard();
    test_subIndex();
    test_subLength();
    test_subFirst();
    test_subLast();

  });
};

module.exports = {
  test_execute_string,
};
