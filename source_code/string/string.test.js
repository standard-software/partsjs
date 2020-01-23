/* eslint-disable comma-spacing */
/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_string = (parts) => {
  const { describe, it } = parts.test;
  describe('test_execute_string', () => {

    const {
      checkEqual,
      isThrown,
      isThrownException,
    } = parts.test;

    const {
      matchFormat, includes, replaceAll,
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
        checkEqual(true,  isThrown(() => { replaceAll( 1212 , '12', '123'); }));
        checkEqual(true,  isThrown(() => { replaceAll('1212',  12 , '123'); }));
        checkEqual(true,  isThrown(() => { replaceAll('1212', '12',  123 ); }));

      });
    };

    test_matchFormat();
    test_replaceAll();
  });
};

module.exports = {
  test_execute_string,
};
