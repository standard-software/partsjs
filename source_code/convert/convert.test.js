/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_convert = (parts) => {
  const { checkEqual, describe, it, test } = parts.test;
  describe('test_execute_convert', () => {
    const {
      checkEqual,
      isThrown,
      isThrownException,
    } = parts.test;

    const {
      numberToString,
      stringToNumber, stringToNumberDefault,
      stringToIntegerDefault,
      toNumber, toInteger,
    } = parts.convert;

    const test_numberToString = () => {
      it('test_numberToString', () => {

        // Positive number
        checkEqual('32',        numberToString(32));
        checkEqual('32',        numberToString(32, 10));
        checkEqual('31.5',      numberToString(31.5, 10));
        checkEqual('100000',    numberToString(32, 2));
        checkEqual('11111',     numberToString(31, 2));
        checkEqual('11111.1',   numberToString(31.5, 2));
        checkEqual('11111.01',  numberToString(31.25, 2));
        checkEqual('40',        numberToString(32, 8));
        checkEqual('37',        numberToString(31, 8));
        checkEqual('37.4',      numberToString(31.5, 8));
        checkEqual('20',        numberToString(32, 16));
        checkEqual('1f',        numberToString(31, 16));
        checkEqual('1f.8',      numberToString(31.5, 16));
        checkEqual('44',        numberToString(32, 7));
        checkEqual('43',        numberToString(31, 7));
        checkEqual('255',       numberToString(255));
        checkEqual('11',        numberToString(11));
        checkEqual('255',       numberToString(0xFF));
        checkEqual('16',        numberToString(0o20));
        checkEqual('ff',        numberToString(255, 16));
        checkEqual('b',         numberToString(11, 16));
        checkEqual('177',       numberToString(127, 8));
        checkEqual('12',        numberToString(10, 8));
        checkEqual('11',        numberToString(3, 2));
        checkEqual('1111',      numberToString(15, 2));

        // Negative number
        checkEqual('-32',       numberToString(-32));
        checkEqual('-32',       numberToString(-32, 10));
        checkEqual('-31.5',     numberToString(-31.5, 10));
        checkEqual('-100000',   numberToString(-32, 2));
        checkEqual('-11111',    numberToString(-31, 2));
        checkEqual('-11111.1',  numberToString(-31.5, 2));
        checkEqual('-11111.01', numberToString(-31.25, 2));
        checkEqual('-40',       numberToString(-32, 8));
        checkEqual('-37',       numberToString(-31, 8));
        checkEqual('-37.4',     numberToString(-31.5, 8));
        checkEqual('-20',       numberToString(-32, 16));
        checkEqual('-1f',       numberToString(-31, 16));
        checkEqual('-1f.8',     numberToString(-31.5, 16));
        checkEqual('-44',       numberToString(-32, 7));
        checkEqual('-43',       numberToString(-31, 7));
        checkEqual('-255',      numberToString(-255));
        checkEqual('-11',       numberToString(-11));
        checkEqual('-255',      numberToString(-0xFF));
        checkEqual('-16',       numberToString(-0o20));
        checkEqual('-ff',       numberToString(-255, 16));
        checkEqual('-b',        numberToString(-11, 16));
        checkEqual('-177',      numberToString(-127, 8));
        checkEqual('-12',       numberToString(-10, 8));
        checkEqual('-11',       numberToString(-3, 2));
        checkEqual('-1111',     numberToString(-15, 2));

        // Exception
        let i = 0;
        i += 1;
        checkEqual(true, isThrownException(() => {
          numberToString('123', 10);
        }, (new TypeError).name), `test numberToString exception ${i}`);
        i += 1;
        checkEqual(false, isThrownException(() => {
          numberToString(32, 2);
        }, (new TypeError).name), `test numberToString exception ${i}`);
        i += 1;
        checkEqual(true, isThrownException(() => {
          numberToString(32, 2.5);
        }, (new TypeError).name), `test numberToString exception ${i}`);
        i += 1;
        checkEqual(true, isThrownException(() => {
          numberToString(32, 1);
        }, (new RangeError).name), `test numberToString exception ${i}`);
        i += 1;
        checkEqual(false, isThrownException(() => {
          numberToString(32, 36);
        }, (new TypeError).name), `test numberToString exception ${i}`);
        i += 1;
        checkEqual(true, isThrownException(() => {
          numberToString(32, 37);
        }, (new RangeError).name), `test numberToString exception ${i}`);

        // Object Named Parameter
        checkEqual('-32', numberToString({
          value: -32,
        }));
        checkEqual('-100000', numberToString({
          value: -32,
          radix: 2,
        }));
      });
    };

    const test_stringToNumber = () => {
      it('test_stringToNumber', () => {

        // Integer
        checkEqual(123,       stringToNumberDefault('123'));
        checkEqual(123,       stringToNumberDefault('0123'));
        checkEqual(123,       stringToNumberDefault('+123'));
        checkEqual(-123,      stringToNumberDefault('-0123'));
        checkEqual(undefined, stringToNumberDefault(' 123'), '1');
        checkEqual(undefined, stringToNumberDefault('123 '), '2');
        checkEqual(undefined, stringToNumberDefault(' 123 '), '3');
        checkEqual(undefined, stringToNumberDefault('　123'), '4');
        checkEqual(undefined, stringToNumberDefault('123　'), '5');
        checkEqual(undefined, stringToNumberDefault('　123　'), '6');
        checkEqual(undefined, stringToNumberDefault('123 0'));
        checkEqual(undefined, stringToNumberDefault('0 123'));
        checkEqual(undefined, stringToNumberDefault('1 123'));
        checkEqual(undefined, stringToNumberDefault('123a'));
        checkEqual(undefined, stringToNumberDefault('a123'));

        // Decimal
        checkEqual(123.4,     stringToNumberDefault('123.4'));
        checkEqual(123.4,     stringToNumberDefault('0123.4'));
        checkEqual(123.4,     stringToNumberDefault('+123.4'));
        checkEqual(-123.4,    stringToNumberDefault('-0123.4'));
        checkEqual(undefined, stringToNumberDefault(' 123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4 '));
        checkEqual(undefined, stringToNumberDefault(' 123.4 '));
        checkEqual(undefined, stringToNumberDefault('　123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4　'));
        checkEqual(undefined, stringToNumberDefault('　123.4　'));
        checkEqual(undefined, stringToNumberDefault('123.4 0'));
        checkEqual(undefined, stringToNumberDefault('0 123.4'));
        checkEqual(undefined, stringToNumberDefault('1 123.4'));
        checkEqual(undefined, stringToNumberDefault('123 .4'));
        checkEqual(undefined, stringToNumberDefault('123. 4'));
        checkEqual(undefined, stringToNumberDefault('123.4a'));
        checkEqual(undefined, stringToNumberDefault('a123.4'));
        checkEqual(123.45,    stringToNumberDefault('123.45'));
        checkEqual(undefined, stringToNumberDefault('123.4.5'));

        // string default value
        checkEqual(undefined, stringToNumberDefault('abc'));
        checkEqual(null,      stringToNumberDefault('abc', null));
        checkEqual(NaN,       stringToNumberDefault('abc', NaN));

        // space string
        checkEqual(undefined, stringToNumberDefault(''));
        checkEqual(undefined, stringToNumberDefault(' '));
        checkEqual(undefined, stringToNumberDefault('　'));

        // exponential notation
        checkEqual(3.14,      stringToNumberDefault('3.14'));
        checkEqual(3.14,      stringToNumberDefault('314e-2'));
        checkEqual(3.14,      stringToNumberDefault('0.0314E+2'));
        checkEqual(0.14,      stringToNumberDefault('.14'));
        checkEqual('1e-17',   0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumberDefault('1e-17'));
        checkEqual(1e-17, stringToNumberDefault('1e-17'));

        // exponential notation detail
        checkEqual(1,         stringToNumberDefault('1.'));
        checkEqual(undefined, stringToNumberDefault('1.1e'));
        checkEqual(undefined, stringToNumberDefault('1.1e+'));
        checkEqual(100000,    stringToNumberDefault('1e+5'));
        checkEqual(0.00001,   stringToNumberDefault('1e-5'));
        checkEqual(undefined, stringToNumberDefault('1.e'));
        checkEqual(undefined, stringToNumberDefault('1.e+'));
        checkEqual(100000,    stringToNumberDefault('1.e+5'));

        // Numer different
        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));

        checkEqual(undefined, stringToNumberDefault('Infinity'));
        checkEqual(undefined, stringToNumberDefault('infinity'));
        checkEqual(undefined, stringToNumberDefault('inf'));
        checkEqual(undefined, stringToNumberDefault('info'));

        // Exception
        let i = 0;
        i += 1;
        checkEqual(true, isThrownException(() => {
          stringToNumberDefault(123);
        }, (new TypeError).name), `test stringToNumberDefault exception ${i}`);

        // Object Named Parameter
        checkEqual(-123, stringToNumberDefault({
          value: '-0123',
        }));
        checkEqual(null, stringToNumberDefault({
          value: 'abc',
          defaultValue: null,
        }));

      });
    };

    const test_stringToIntegerDefault = () => {
      it('test_stringToIntegerDefault', () => {

        // Integer
        checkEqual(123,       stringToIntegerDefault('123'));
        checkEqual(123,       stringToIntegerDefault('0123'));
        checkEqual(123,       stringToIntegerDefault('+123'));
        checkEqual(-123,      stringToIntegerDefault('-0123'));
        checkEqual(undefined, stringToIntegerDefault(' 123'));
        checkEqual(undefined, stringToIntegerDefault('123 '));
        checkEqual(undefined, stringToIntegerDefault(' 123 '));
        checkEqual(undefined, stringToIntegerDefault('123 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123'));
        checkEqual(undefined, stringToIntegerDefault('1 123'));
        checkEqual(undefined, stringToIntegerDefault('123a'));
        checkEqual(undefined, stringToIntegerDefault('a123'));

        // Decimal
        checkEqual(undefined, stringToIntegerDefault('123.4'));
        checkEqual(undefined, stringToIntegerDefault('0123.4'));
        checkEqual(undefined, stringToIntegerDefault('+123.4'));
        checkEqual(undefined, stringToIntegerDefault('-0123.4'));
        checkEqual(undefined, stringToIntegerDefault(' 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.4 '));
        checkEqual(undefined, stringToIntegerDefault(' 123.4 '));
        checkEqual(undefined, stringToIntegerDefault('123.4 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123.4'));
        checkEqual(undefined, stringToIntegerDefault('1 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123 .4'));
        checkEqual(undefined, stringToIntegerDefault('123. 4'));
        checkEqual(undefined, stringToIntegerDefault('123.4a'));
        checkEqual(undefined, stringToIntegerDefault('a123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.45'));
        checkEqual(undefined, stringToIntegerDefault('123.4.5'));

        // Positive number
        checkEqual(32,        stringToIntegerDefault('32'));
        checkEqual(32,        stringToIntegerDefault('32',        undefined, 10  ));
        checkEqual(undefined, stringToIntegerDefault('31.5',      undefined, 10  ));
        checkEqual(32,        stringToIntegerDefault('100000',    undefined, 2   ));
        checkEqual(31,        stringToIntegerDefault('11111',     undefined, 2   ));
        checkEqual(undefined, stringToIntegerDefault('11111.1',   undefined, 2   ));
        checkEqual(undefined, stringToIntegerDefault('11111.01',  undefined, 2   ));
        checkEqual(32,        stringToIntegerDefault('40',        undefined, 8   ));
        checkEqual(31,        stringToIntegerDefault('37',        undefined, 8   ));
        checkEqual(undefined, stringToIntegerDefault('37.4',      undefined, 8   ));
        checkEqual(32,        stringToIntegerDefault('20',        undefined, 16  ));
        checkEqual(31,        stringToIntegerDefault('1f',        undefined, 16  ));
        checkEqual(undefined, stringToIntegerDefault('1f.8',      undefined, 16  ));
        checkEqual(32,        stringToIntegerDefault('44',        undefined, 7   ));
        checkEqual(31,        stringToIntegerDefault('43',        undefined, 7   ));
        checkEqual(255,       stringToIntegerDefault('255',       undefined, 10  ));
        checkEqual(11,        stringToIntegerDefault('11',        undefined, 10  ));
        checkEqual(255,       stringToIntegerDefault('FF',        undefined, 16  ));
        checkEqual(16,        stringToIntegerDefault('20',        undefined, 8   ));
        checkEqual(255,       stringToIntegerDefault('ff',        undefined, 16  ));
        checkEqual(11,        stringToIntegerDefault('b',         undefined, 16  ));
        checkEqual(127,       stringToIntegerDefault('177',       undefined, 8   ));
        checkEqual(10,        stringToIntegerDefault('12',        undefined, 8   ));
        checkEqual(3,         stringToIntegerDefault('11',        undefined, 2   ));
        checkEqual(15,        stringToIntegerDefault('1111',      undefined, 2   ));

        // Negative number
        checkEqual(-32,       stringToIntegerDefault('-32'));
        checkEqual(-32,       stringToIntegerDefault('-32',       undefined, 10  ));
        checkEqual(undefined, stringToIntegerDefault('-31.5',     undefined, 10  ));
        checkEqual(-32,       stringToIntegerDefault('-100000',   undefined, 2   ));
        checkEqual(-31,       stringToIntegerDefault('-11111',    undefined, 2   ));
        checkEqual(undefined, stringToIntegerDefault('-11111.1',  undefined, 2   ));
        checkEqual(undefined, stringToIntegerDefault('-11111.01', undefined, 2   ));
        checkEqual(-32,       stringToIntegerDefault('-40',       undefined, 8   ));
        checkEqual(-31,       stringToIntegerDefault('-37',       undefined, 8   ));
        checkEqual(undefined, stringToIntegerDefault('-37.4',     undefined, 8   ));
        checkEqual(-32,       stringToIntegerDefault('-20',       undefined, 16  ));
        checkEqual(-31,       stringToIntegerDefault('-1f',       undefined, 16  ));
        checkEqual(undefined, stringToIntegerDefault('-1f.8',     undefined, 16  ));
        checkEqual(-32,       stringToIntegerDefault('-44',       undefined, 7   ));
        checkEqual(-31,       stringToIntegerDefault('-43',       undefined, 7   ));
        checkEqual(-255,      stringToIntegerDefault('-255',      undefined, 10  ));
        checkEqual(-11,       stringToIntegerDefault('-11',       undefined, 10  ));
        checkEqual(-255,      stringToIntegerDefault('-FF',       undefined, 16  ));
        checkEqual(-16,       stringToIntegerDefault('-20',       undefined, 8   ));
        checkEqual(-255,      stringToIntegerDefault('-ff',       undefined, 16  ));
        checkEqual(-11,       stringToIntegerDefault('-b',        undefined, 16  ));
        checkEqual(-127,      stringToIntegerDefault('-177',      undefined, 8   ));
        checkEqual(-10,       stringToIntegerDefault('-12',       undefined, 8   ));
        checkEqual(-3,        stringToIntegerDefault('-11',       undefined, 2   ));
        checkEqual(-15,       stringToIntegerDefault('-1111',     undefined, 2   ));

        // Default Value
        checkEqual(undefined, stringToIntegerDefault('abc'));
        checkEqual(null,      stringToIntegerDefault('abc', null,  10));
        checkEqual(NaN,       stringToIntegerDefault('abc', NaN,   10));

        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('Infinity'));
        checkEqual(undefined, stringToIntegerDefault('infinity'));
        checkEqual(undefined, stringToIntegerDefault('inf'));
        checkEqual(undefined, stringToIntegerDefault('info'));

        // Exception
        let i = 0;
        i += 1;
        checkEqual(true, isThrownException(() => {
          stringToIntegerDefault(123);
        }, (new TypeError).name), `test stringToIntegerDefault exception ${i}`);
        i += 1;
        checkEqual(false, isThrownException(() => {
          stringToIntegerDefault('123', undefined, 2);
        }, (new TypeError).name), `test stringToIntegerDefault exception ${i}`);
        i += 1;
        checkEqual(true, isThrownException(() => {
          stringToIntegerDefault('123', undefined, 2.5);
        }, (new TypeError).name), `test stringToIntegerDefault exception ${i}`);
        i += 1;
        checkEqual(true, isThrownException(() => {
          stringToIntegerDefault('123', undefined, 1);
        }, (new RangeError).name), `test stringToIntegerDefault exception ${i}`);
        i += 1;
        checkEqual(false, isThrownException(() => {
          stringToIntegerDefault('123', undefined, 36);
        }, (new TypeError).name), `test stringToIntegerDefault exception ${i}`);
        i += 1;
        checkEqual(true, isThrownException(() => {
          stringToIntegerDefault('123', undefined, 37);
        }, (new RangeError).name), `test stringToIntegerDefault exception ${i}`);

        // Object Named Parameter
        checkEqual(-123, stringToIntegerDefault({
          value: '-0123',
        }));
        checkEqual(null, stringToIntegerDefault({
          value: 'abc',
          defaultValue: null,
        }));
        checkEqual(undefined, stringToIntegerDefault({
          value: 'abc',
        }));
        checkEqual(-15, stringToIntegerDefault({
          value: '-1111',
          radix: 2,
        }));
      });
    };

    const test_NumerCast = () => {
      it('test_NumerCast', () => {
        // Integer
        checkEqual(123,       Number('123'));
        checkEqual(123,       Number('0123'));
        checkEqual(123,       Number('+123'));
        checkEqual(-123,      Number('-0123'));
        checkEqual(123,       Number(' 123'), '1');
        checkEqual(123,       Number('123 '), '2');
        checkEqual(123,       Number(' 123 '), '3');
        if (parts.platform.wsh) {
          checkEqual(NaN,       Number('　123'), '4');
          checkEqual(NaN,       Number('123　'), '5');
          checkEqual(NaN,       Number('　123　'), '6');
        } else {
          checkEqual(123,       Number('　123'), '4');
          checkEqual(123,       Number('123　'), '5');
          checkEqual(123,       Number('　123　'), '6');
        }
        checkEqual(NaN,       Number('123 0'));
        checkEqual(NaN,       Number('0 123'));
        checkEqual(NaN,       Number('1 123'));
        checkEqual(NaN,       Number('123a'));
        checkEqual(NaN,       Number('a123'));

        // Decimal
        checkEqual(123.4,     Number('123.4'));
        checkEqual(123.4,     Number('0123.4'));
        checkEqual(123.4,     Number('+123.4'));
        checkEqual(-123.4,    Number('-0123.4'));
        checkEqual(123.4,     Number(' 123.4'));
        checkEqual(123.4,     Number('123.4 '));
        checkEqual(123.4,     Number(' 123.4 '));
        if (parts.platform.wsh) {
          checkEqual(NaN,       Number('　123.4'));
          checkEqual(NaN,       Number('123.4　'));
          checkEqual(NaN,       Number('　123.4　'));
        } else {
          checkEqual(123.4,     Number('　123.4'));
          checkEqual(123.4,     Number('123.4　'));
          checkEqual(123.4,     Number('　123.4　'));
        }
        checkEqual(NaN,       Number('123.4 0'));
        checkEqual(NaN,       Number('0 123.4'));
        checkEqual(NaN,       Number('1 123.4'));
        checkEqual(NaN,       Number('123 .4'));
        checkEqual(NaN,       Number('123. 4'));
        checkEqual(NaN,       Number('123.4a'));
        checkEqual(NaN,       Number('a123.4'));
        checkEqual(123.45,    Number('123.45'));
        checkEqual(NaN,       Number('123.4.5'));

        // string default value
        checkEqual(NaN,       Number('abc'));

        // space string
        checkEqual(0,         Number(''));
        checkEqual(0,         Number(' '));
        if (parts.platform.wsh) {
          checkEqual(NaN,       Number('　'));
        } else {
          checkEqual(0,         Number('　'));
        }

        // exponential notation
        checkEqual(3.14,  Number(3.14));
        checkEqual(3.14,  Number('3.14'));
        checkEqual(3.14,  Number('314e-2'));
        checkEqual(3.14,  Number('0.0314E+2'));
        checkEqual(0.14,  Number('.14'));
        checkEqual(0.00000000000000001, Number('1e-17'));
        checkEqual(1e-17, Number('1e-17'));

        // exponential notation detail
        checkEqual(1,       Number('1.'));
        checkEqual(NaN,     Number('1.1e'));
        checkEqual(NaN,     Number('1.1e+'));
        checkEqual(100000,  Number('1e+5'));
        checkEqual(0.00001, Number('1e-5'));
        checkEqual(NaN,     Number('1.e'));
        checkEqual(NaN,     Number('1.e+'));
        checkEqual(100000,  Number('1.e+5'));

        // Numer different
        checkEqual(291,       Number('0x123'));
        checkEqual(NaN,       Number('+0x123'));
        checkEqual(NaN,       Number('-0x123'));
        if (parts.platform.wsh) {
          checkEqual(NaN,       Number('0o123'));
        } else {
          checkEqual(83,        Number('0o123'));
        }
        checkEqual(NaN,       Number('+0o123'));
        checkEqual(NaN,       Number('-0o123'));

        checkEqual(Infinity,  Number('Infinity'));
        checkEqual(NaN,       Number('infinity'));
        checkEqual(NaN,       Number('inf'));
        checkEqual(NaN,       Number('info'));
      });
    };

    const test_toNumber = () => {
      it('test_toNumber', () => {
        // Integer
        checkEqual(123,       toNumber('123'));
        checkEqual(123,       toNumber('0123'));
        checkEqual(123,       toNumber('+123'));
        checkEqual(-123,      toNumber('-0123'));
        checkEqual(NaN,       toNumber(' 123'), '1');
        checkEqual(NaN,       toNumber('123 '), '2');
        checkEqual(NaN,       toNumber(' 123 '), '3');
        checkEqual(NaN,       toNumber('　123'), '4');
        checkEqual(NaN,       toNumber('123　'), '5');
        checkEqual(NaN,       toNumber('　123　'), '6');
        checkEqual(NaN,       toNumber('123 0'));
        checkEqual(NaN,       toNumber('0 123'));
        checkEqual(NaN,       toNumber('1 123'));
        checkEqual(NaN,       toNumber('123a'));
        checkEqual(NaN,       toNumber('a123'));

        // Decimal
        checkEqual(123.4,     toNumber('123.4'));
        checkEqual(123.4,     toNumber('0123.4'));
        checkEqual(123.4,     toNumber('+123.4'));
        checkEqual(-123.4,    toNumber('-0123.4'));
        checkEqual(NaN,       toNumber(' 123.4'));
        checkEqual(NaN,       toNumber('123.4 '));
        checkEqual(NaN,       toNumber(' 123.4 '));
        checkEqual(NaN,       toNumber('　123.4'));
        checkEqual(NaN,       toNumber('123.4　'));
        checkEqual(NaN,       toNumber('　123.4　'));
        checkEqual(NaN,       toNumber('123.4 0'));
        checkEqual(NaN,       toNumber('0 123.4'));
        checkEqual(NaN,       toNumber('1 123.4'));
        checkEqual(NaN,       toNumber('123 .4'));
        checkEqual(NaN,       toNumber('123. 4'));
        checkEqual(NaN,       toNumber('123.4a'));
        checkEqual(NaN,       toNumber('a123.4'));
        checkEqual(123.45,    toNumber('123.45'));
        checkEqual(NaN,       toNumber('123.4.5'));

        // space string
        checkEqual(NaN,         toNumber(''));
        checkEqual(NaN,         toNumber(' '));
        checkEqual(NaN,         toNumber('　'));

        // exponential notation
        checkEqual(3.14,  toNumber(3.14));
        checkEqual(3.14,  toNumber('3.14'));
        checkEqual(3.14,  toNumber('314e-2'));
        checkEqual(3.14,  toNumber('0.0314E+2'));
        checkEqual(0.14,  toNumber('.14'));

        // exponential notation detail
        checkEqual(1,       toNumber('1.'));
        checkEqual(NaN,     toNumber('1.1e'));
        checkEqual(NaN,     toNumber('1.1e+'));
        checkEqual(100000,  toNumber('1e+5'));
        checkEqual(0.00001, toNumber('1e-5'));
        checkEqual(NaN,     toNumber('1.e'));
        checkEqual(NaN,     toNumber('1.e+'));
        checkEqual(100000,  toNumber('1.e+5'));

        // Numer different
        checkEqual(NaN,       toNumber('0x123'));
        checkEqual(NaN,       toNumber('+0x123'));
        checkEqual(NaN,       toNumber('-0x123'));
        checkEqual(NaN,       toNumber('0o123'));
        checkEqual(NaN,       toNumber('+0o123'));
        checkEqual(NaN,       toNumber('-0o123'));

        checkEqual(NaN,       toNumber('Infinity'));
        checkEqual(NaN,       toNumber('infinity'));
        checkEqual(NaN,       toNumber('inf'));
        checkEqual(NaN,       toNumber('info'));
      });
    };

    const test_toInteger = () => {
      it('test_toInteger', () => {
        // Integer
        checkEqual(123,       toInteger('123'));
        checkEqual(123,       toInteger('0123'));
        checkEqual(123,       toInteger('+123'));
        checkEqual(-123,      toInteger('-0123'));
        checkEqual(NaN,       toInteger(' 123'), '1');
        checkEqual(NaN,       toInteger('123 '), '2');
        checkEqual(NaN,       toInteger(' 123 '), '3');
        checkEqual(NaN,       toInteger('　123'), '4');
        checkEqual(NaN,       toInteger('123　'), '5');
        checkEqual(NaN,       toInteger('　123　'), '6');
        checkEqual(NaN,       toInteger('123 0'));
        checkEqual(NaN,       toInteger('0 123'));
        checkEqual(NaN,       toInteger('1 123'));
        checkEqual(NaN,       toInteger('123a'));
        checkEqual(NaN,       toInteger('a123'));

        // Decimal
        checkEqual(123,       toInteger('123.4'));
        checkEqual(123,       toInteger('0123.4'));
        checkEqual(123,       toInteger('+123.4'));
        checkEqual(-123,      toInteger('-0123.4'));
        checkEqual(NaN,       toInteger(' 123.4'));
        checkEqual(NaN,       toInteger('123.4 '));
        checkEqual(NaN,       toInteger(' 123.4 '));
        checkEqual(NaN,       toInteger('　123.4'));
        checkEqual(NaN,       toInteger('123.4　'));
        checkEqual(NaN,       toInteger('　123.4　'));
        checkEqual(NaN,       toInteger('123.4 0'));
        checkEqual(NaN,       toInteger('0 123.4'));
        checkEqual(NaN,       toInteger('1 123.4'));
        checkEqual(NaN,       toInteger('123 .4'));
        checkEqual(NaN,       toInteger('123. 4'));
        checkEqual(NaN,       toInteger('123.4a'));
        checkEqual(NaN,       toInteger('a123.4'));
        checkEqual(123,       toInteger('123.45'));
        checkEqual(NaN,       toInteger('123.4.5'));

        // space string
        checkEqual(NaN,       toInteger(''));
        checkEqual(NaN,       toInteger(' '));
        checkEqual(NaN,       toInteger('　'));

        // exponential notation
        checkEqual(3,       toInteger(3.14));
        checkEqual(3,       toInteger('3.14'));
        checkEqual(3,       toInteger('314e-2'));
        checkEqual(3,       toInteger('0.0314E+2'));
        checkEqual(0,       toInteger('.14'));

        // exponential notation detail
        checkEqual(1,       toInteger('1.'));
        checkEqual(NaN,     toInteger('1.1e'));
        checkEqual(NaN,     toInteger('1.1e+'));
        checkEqual(100000,  toInteger('1e+5'));
        checkEqual(0,       toInteger('1e-5'));
        checkEqual(NaN,     toInteger('1.e'));
        checkEqual(NaN,     toInteger('1.e+'));
        checkEqual(100000,  toInteger('1.e+5'));

        // Numer different
        checkEqual(NaN,       toInteger('0x123'));
        checkEqual(NaN,       toInteger('+0x123'));
        checkEqual(NaN,       toInteger('-0x123'));
        checkEqual(NaN,       toInteger('0o123'));
        checkEqual(NaN,       toInteger('+0o123'));
        checkEqual(NaN,       toInteger('-0o123'));

        checkEqual(NaN,       toInteger('Infinity'));
        checkEqual(NaN,       toInteger('infinity'));
        checkEqual(NaN,       toInteger('inf'));
        checkEqual(NaN,       toInteger('info'));
      });
    };

    test_numberToString();
    test_stringToNumber();
    test_stringToIntegerDefault();
    test_NumerCast();
    test_toNumber();
    test_toInteger();
  });
};

module.exports = {
  test_execute_convert,
};
