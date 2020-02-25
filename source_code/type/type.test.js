/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable no-new-wrappers */
/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_type = (parts) => {
  const { checkEqual, describe, it, test } = parts.test;
  describe('test_execute_type', () => {

    const {

      isUndefinedAll, isNullAll, isNaNStrictAll,
      isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
      isFunctionAll, isObjectAll, isObjectTypeAll,
      isArrayAll, isArrayTypeAll,
      isDateAll, isRegExpAll,
      isExceptionAll,
      isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,
      isEmptyObjectAll, isEmptyArrayAll,
      isSymbolAll,
      isMapAll, isWeakMapAll,
      isSetAll, isWeakSetAll,

      isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
      isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
      isNotFunctionAll, isNotObjectAll, isNotObjectTypeAll,
      isNotArrayAll, isNotArrayTypeAll,
      isNotDateAll, isNotRegExpAll,
      isNotExceptionAll,
      isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,
      isNotEmptyObjectAll, isNotEmptyArrayAll,
      isNotSymbolAll,
      isNotMapAll, isNotWeakMapAll,
      isNotSetAll, isNotWeakSetAll,
    } = parts.type;

    const {
      allMatchSome,
    } = parts.compare;

    const {
      objectToString,
    } = parts;


    const test_checkType = () => {
      it('test_checkType', () => {

        const checkType = function(
          typeofName,
          objectStringName,
          value,
        ) {
          checkEqual(typeofName, typeof value);
          checkEqual(objectStringName, objectToString(value));
        };

        if (parts.platform.isWindowsScriptHost()) {
          checkType('undefined', '[object Object]',     undefined);
          checkType('object',    '[object Object]',     null);
        } else {
          checkType('undefined', '[object Undefined]',  undefined);
          checkType('object',    '[object Null]',       null); // bad specification
        }
        checkType('boolean',   '[object Boolean]',    true);
        checkType('boolean',   '[object Boolean]',    false);
        checkType('object',    '[object Boolean]',    new Boolean);
        checkType('number',    '[object Number]',     1);
        checkType('number',    '[object Number]',     NaN);
        checkType('number',    '[object Number]',     Infinity);
        checkType('object',    '[object Number]',     new Number(1));
        checkType('object',    '[object Number]',     new Number(NaN));
        checkType('object',    '[object Number]',     new Number(Infinity));
        checkType('object',    '[object Number]',     new Number(null));
        checkType('object',    '[object Number]',     new Number(undefined));
        checkType('string',    '[object String]',     '');
        checkType('string',    '[object String]',     '1');
        checkType('object',    '[object String]',     new String(''));
        checkType('object',    '[object String]',     new String('1'));
        checkType('object',    '[object String]',     new String(null));
        checkType('object',    '[object String]',     new String(undefined));
        function testFunc() {}
        checkType('function',  '[object Function]',   testFunc);
        checkType('function',  '[object Function]',   function() {});
        checkType('function',  '[object Function]',   (() => {}));
        checkType('object',    '[object Object]',     {});
        checkType('object',    '[object Object]',     new Object());
        checkType('object',    '[object Array]',      []);
        checkType('object',    '[object Array]',      new Array());
        checkType('object',    '[object RegExp]',     /^a/);
        checkType('object',    '[object RegExp]',     new RegExp('^a'));
        checkType('object',    '[object Math]',       Math);

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        checkType('object',    '[object Int8Array]',          new Int8Array());
        checkType('object',    '[object Uint8Array]',         new Uint8Array());
        checkType('object',    '[object Uint8ClampedArray]',  new Uint8ClampedArray());
        checkType('object',    '[object Int16Array]',         new Int16Array());
        checkType('object',    '[object Uint16Array]',        new Uint16Array());
        checkType('object',    '[object Int32Array]',         new Int32Array());
        checkType('object',    '[object Uint32Array]',        new Uint32Array());
        checkType('object',    '[object Float32Array]',       new Float32Array());
        checkType('object',    '[object Float64Array]',       new Float64Array());

        if (parts.platform.isInternetExplorer()) {
          checkType('object',    '[object Object]',                new Map());
          checkType('object',    '[object Object]',            new WeakMap());
          checkType('object',    '[object Object]',                new Set());
        } else {
          checkType('object',    '[object Map]',                new Map());
          checkType('object',    '[object WeakMap]',            new WeakMap());
          checkType('object',    '[object Set]',                new Set());
          checkType('object',    '[object WeakSet]',            new WeakSet());
          checkType('symbol',    '[object Symbol]',             Symbol());
        }

        checkType('object',    '[object ArrayBuffer]',        new ArrayBuffer(8));
        if (parts.platform.isChrome()
        || parts.platform.isSafari()
        || parts.platform.isOpera()) {
          checkType('object',    '[object SharedArrayBuffer]',  new SharedArrayBuffer(8));
          checkType('object',    '[object Atomics]',            Atomics);
        }

        if (parts.platform.isInternetExplorer()) {
          checkType('object',    '[object Object]',             new DataView(new ArrayBuffer(16)));
        } else {
          checkType('object',    '[object DataView]',           new DataView(new ArrayBuffer(16)));
        }
        checkType('object',    '[object JSON]',               JSON);

        if (!parts.platform.isInternetExplorer()) {
          checkType('function',  '[object Function]',           Promise);
        }

        // ------
        // function* Generator() { yield 1; yield 2; yield 3; }
        // var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
        // var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
        // // eslint-disable-next-line new-cap
        // checkType('object',    '[object Generator]',          Generator());
        // checkType('function',  '[object GeneratorFunction]',  new GeneratorFunction());
        // checkType('function',  '[object AsyncFunction]',      new AsyncFunction());
        // ------
        // Even if you combine the above settings,
        // comment out because it does not work well in any environment
        // ------
        //  npm install @babel/polyfill --save-dev
        //  webpack.config.js
        //    entry: ['@babel/polyfill', './src/index.js']
        //  babel.config.js
        //    const presets =  [ ['@babel/preset-env', { 'targets': { 'node': true } }] ];
        // ------

        if (!parts.platform.isInternetExplorer()) {
          checkType('object',    '[object Object]',             Reflect);
          checkType('object',    '[object Object]',             new Proxy({}, {}));
          checkType('object',    '[object WebAssembly]',        WebAssembly);
        }
        checkType('object',    '[object Object]',             Intl);
      });
    };

    const test_isUndefinedAll = function() {
      it('test_isUndefinedAll', () => {

        const isUndefinedArray = (array) => {
          return allMatchSome(array, [undefined]);
        };
        const isNotUndefinedArray = (array) => {
          return allMatchSome(array, [isNotUndefinedAll]);
        };

        var u1;
        var n1 = null;
        var v1 = 1;

        checkEqual(true, isUndefinedAll(u1));
        checkEqual(false, isUndefinedAll(n1));
        checkEqual(false, isUndefinedAll(v1));
        checkEqual(true, isUndefinedArray([u1]));
        checkEqual(false, isUndefinedArray([n1]));
        checkEqual(false, isUndefinedArray([v1]));

        checkEqual(true, isUndefinedAll(u1, u1));
        checkEqual(false, isUndefinedAll(u1, n1));
        checkEqual(false, isUndefinedAll(u1, v1));
        checkEqual(true, isUndefinedArray([u1, u1]));
        checkEqual(false, isUndefinedArray([u1, n1]));
        checkEqual(false, isUndefinedArray([u1, v1]));

        checkEqual(false, isNotUndefinedAll(u1));
        checkEqual(true, isNotUndefinedAll(n1));
        checkEqual(true, isNotUndefinedAll(v1));
        checkEqual(false, isNotUndefinedArray([u1]));
        checkEqual(true, isNotUndefinedArray([n1]));
        checkEqual(true, isNotUndefinedArray([v1]));

        checkEqual(false, isNotUndefinedAll(u1, u1));
        checkEqual(false, isNotUndefinedAll(u1, n1));
        checkEqual(true, isNotUndefinedAll(n1, n1));
        checkEqual(false, isNotUndefinedAll(n1, u1));
        checkEqual(true, isNotUndefinedAll(v1, v1));
        checkEqual(true, isNotUndefinedAll(v1, n1));
        checkEqual(false, isNotUndefinedAll(v1, u1));
        checkEqual(false, isNotUndefinedArray([u1, u1]));
        checkEqual(false, isNotUndefinedArray([u1, n1]));
        checkEqual(true, isNotUndefinedArray([n1, n1]));
        checkEqual(false, isNotUndefinedArray([n1, u1]));
        checkEqual(true, isNotUndefinedArray([v1, v1]));
        checkEqual(true, isNotUndefinedArray([v1, n1]));
        checkEqual(false, isNotUndefinedArray([v1, u1]));

        // 配列の中身ではなく配列自体を判定する
        // 配列はundefinedではない
        checkEqual(false, isUndefinedAll([v1, v1]));
        checkEqual(false, isUndefinedAll([u1, u1]));
        checkEqual(true, isNotUndefinedAll([v1, v1]));
        checkEqual(true, isNotUndefinedAll([u1, u1]));
      });
    };

    const test_isNull = function() {
      it('test_isNull', () => {

        const isNullArray = (array) => {
          return allMatchSome(array, [null]);
        };
        const isNotNullArray = (array) => {
          return allMatchSome(array, [isNotNullAll]);
        };

        var u1;
        var n1 = null;
        var v1 = 1;

        checkEqual(false, isNullAll(u1));
        checkEqual(true, isNullAll(n1));
        checkEqual(false, isNullAll(v1));
        checkEqual(false, isNullArray([u1]));
        checkEqual(true, isNullArray([n1]));
        checkEqual(false, isNullArray([v1]));

        checkEqual(true, isNullAll(n1, n1));
        checkEqual(false, isNullAll(n1, u1));
        checkEqual(false, isNullAll(n1, v1));
        checkEqual(true, isNullArray([n1, n1]));
        checkEqual(false, isNullArray([n1, u1]));
        checkEqual(false, isNullArray([n1, v1]));

        checkEqual(true, isNotNullAll(u1));
        checkEqual(false, isNotNullAll(n1));
        checkEqual(true, isNotNullAll(v1));
        checkEqual(true, isNotNullArray([u1]));
        checkEqual(false, isNotNullArray([n1]));
        checkEqual(true, isNotNullArray([v1]));

        checkEqual(true, isNotNullAll(u1, u1));
        checkEqual(false, isNotNullAll(u1, n1));
        checkEqual(false, isNotNullAll(n1, n1));
        checkEqual(false, isNotNullAll(n1, u1));
        checkEqual(true, isNotNullAll(v1, v1));
        checkEqual(false, isNotNullAll(v1, n1));
        checkEqual(true, isNotNullAll(v1, u1));
        checkEqual(true, isNotNullArray([u1, u1]));
        checkEqual(false, isNotNullArray([u1, n1]));
        checkEqual(false, isNotNullArray([n1, n1]));
        checkEqual(false, isNotNullArray([n1, u1]));
        checkEqual(true, isNotNullArray([v1, v1]));
        checkEqual(false, isNotNullArray([v1, n1]));
        checkEqual(true, isNotNullArray([v1, u1]));
      });
    };

    const test_isBoolean = function() {
      it('test_isBoolean', () => {

        const isBooleanArray = (array) => {
          return allMatchSome(array, [isBooleanAll]);
        };
        const isNotBooleanArray = (array) => {
          return allMatchSome(array, [isNotBooleanAll]);
        };

        checkEqual(true, isBooleanAll(true));
        checkEqual(true, isBooleanAll(false));
        checkEqual(false, isBooleanAll(undefined));
        checkEqual(false, isBooleanAll(null));
        checkEqual(false, isBooleanAll(''));
        checkEqual(false, isBooleanAll('true'));
        checkEqual(false, isBooleanAll('false'));
        checkEqual(false, isBooleanAll(123));
        checkEqual(false, isBooleanAll(0));
        checkEqual(false, isBooleanAll(-1));

        checkEqual(true, isBooleanAll(true, true));
        checkEqual(true, isBooleanAll(true, true, true));
        checkEqual(true, isBooleanAll(true, false, true));
        checkEqual(false, isBooleanAll(true, 1, true));

        checkEqual(false, isBooleanAll([true, true]));

        checkEqual(true,  isBooleanArray([true, true]));
        checkEqual(true,  isBooleanArray([true, true, true]));
        checkEqual(true,  isBooleanArray([true, false, true]));
        checkEqual(false, isBooleanArray([true, 1, true]));

        checkEqual(false, isBooleanAll(new Boolean()));
        checkEqual(false, isBooleanAll(new Boolean('1')));
        checkEqual(false, isBooleanAll(new Boolean('a')));
        checkEqual(false, isBooleanAll(new Boolean('true')));
        checkEqual(true,  isBooleanObjectAll(new Boolean()), 'test isBooleanObjectAll');
        checkEqual(true,  isBooleanObjectAll(new Boolean('1')));
        checkEqual(true,  isBooleanObjectAll(new Boolean('a')));
        checkEqual(true,  isBooleanObjectAll(new Boolean('true')));
      });
    };

    const test_isNumber = function() {
      it('test_isNumber', () => {

        const isNumberArray = (array) => {
          return allMatchSome(array, [isNumberAll]);
        };
        const isNotNumberArray = (array) => {
          return allMatchSome(array, [isNotNumberAll]);
        };

        checkEqual(true, isNumberAll(123));
        checkEqual(true, isNumberAll(0));
        checkEqual(true, isNumberAll(-1));
        checkEqual(true, isNumberAll(123.4));
        checkEqual(true, isNumberAll(123.0));
        checkEqual(false, isNumberAll(true));
        checkEqual(false, isNumberAll(false));
        checkEqual(false, isNumberAll(null));
        checkEqual(false, isNumberAll(undefined));
        checkEqual(false, isNumberAll(Infinity));  // InfinityもNumberとして許可しないことにする
        checkEqual(false, isNumberAll(NaN));
        checkEqual(false, isNumberAll(''));
        checkEqual(false, isNumberAll('ABC'));
        checkEqual(false, isNumberAll('ABC10'));
        checkEqual(false, isNumberAll('10ABC'));
        checkEqual(false, isNumberAll('0ABC'));
        checkEqual(false, isNumberAll('0'));
        checkEqual(false, isNumberAll('5'));
        checkEqual(false, isNumberAll('-5'));
        checkEqual(false, isNumberAll('100'));
        checkEqual(false, isNumberAll('-100'));
        checkEqual(false, isNumberAll([]));
        checkEqual(false, isNumberAll({}));

        checkEqual(false, isNotNumberAll(123));
        checkEqual(false, isNotNumberAll(0));
        checkEqual(true, isNotNumberAll(true));
        checkEqual(true, isNotNumberAll(null));
        checkEqual(true, isNotNumberAll(undefined));
        checkEqual(true, isNotNumberAll(Infinity));
        checkEqual(true, isNotNumberAll(NaN));
        checkEqual(true, isNotNumberAll(''));

        checkEqual(true, isNumberAll(1, 2));
        checkEqual(true, isNumberAll(3, 4, 5));
        checkEqual(true, isNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNumberAll(1, 2, true));

        checkEqual(false, isNotNumberAll(1, 2));
        checkEqual(false, isNotNumberAll(3, 4, 5));
        checkEqual(false, isNotNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNotNumberAll(1, 2, true));
        checkEqual(true, isNotNumberAll(false, true));
        checkEqual(true, isNotNumberAll('a', 'b'));

        checkEqual(false, isNumberAll([1, 2]));

        checkEqual(true, isNumberArray([1, 2]));
        checkEqual(true, isNumberArray([3, 4, 5]));
        checkEqual(true, isNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNumberArray([1, 2, true]));

        checkEqual(false, isNotNumberArray([1, 2]));
        checkEqual(false, isNotNumberArray([3, 4, 5]));
        checkEqual(false, isNotNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNotNumberArray([1, 2, true]));
        checkEqual(true, isNotNumberArray([false, true]));
        checkEqual(true, isNotNumberArray(['a', 'b']));

        checkEqual(0,   Number(new Number()));
        checkEqual(0,   Number(new Number('')));
        checkEqual(0,   Number(new Number(' ')));
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN,   Number(new Number('　')));
        } else {
          checkEqual(0,   Number(new Number('　')));
        }
        checkEqual(1,   Number(new Number('1')));
        checkEqual(1.1, Number(new Number('1.1')));
        checkEqual(NaN,       Number(new Number(NaN)));
        checkEqual(Infinity,  Number(new Number(Infinity)));
        checkEqual(NaN,       Number(new Number(undefined)));
        checkEqual(0,         Number(new Number(null)));

        checkEqual(false, isNumberAll(new Number()));
        checkEqual(false, isNumberAll(new Number('')));
        checkEqual(false, isNumberAll(new Number('1')));
        checkEqual(false, isNumberAll(new Number('1.1')));
        checkEqual(true,  isNumberObjectAll(new Number()));
        checkEqual(true,  isNumberObjectAll(new Number('')));
        checkEqual(true,  isNumberObjectAll(new Number('1')));
        checkEqual(true,  isNumberObjectAll(new Number('1.1')));
      });
    };

    const test_isInteger = function() {
      it('test_isInteger', () => {

        const isIntegerArray = (array) => {
          return allMatchSome(array, [isIntegerAll]);
        };
        const isNotIntegerArray = (array) => {
          return allMatchSome(array, [isNotIntegerAll]);
        };

        checkEqual(true, isIntegerAll(123));
        checkEqual(true, isIntegerAll(0));
        checkEqual(true, isIntegerAll(-1));
        checkEqual(false, isIntegerAll(123.4));
        checkEqual(true, isIntegerAll(123.0));
        // .0の場合は整数か小数かは判断できない

        checkEqual(false, isIntegerAll(true));
        checkEqual(false, isIntegerAll(false));
        checkEqual(false, isIntegerAll(null));
        checkEqual(false, isIntegerAll(undefined));
        checkEqual(false, isIntegerAll(''));
        checkEqual(false, isIntegerAll('ABC'));
        checkEqual(false, isIntegerAll('0'));
        checkEqual(false, isIntegerAll('5'));
        checkEqual(false, isIntegerAll('-5'));
        checkEqual(false, isIntegerAll('100'));
        checkEqual(false, isIntegerAll('-100'));
        checkEqual(false, isIntegerAll([]));
        checkEqual(false, isIntegerAll({}));

        checkEqual(true, isIntegerAll(1, 2));
        checkEqual(true, isIntegerAll(3, 4, 5));
        checkEqual(true, isIntegerAll(10, 20, 30));
        checkEqual(false, isIntegerAll(1, 2, 3.5));

        checkEqual(false, isNotIntegerAll(1, 2));
        checkEqual(false, isNotIntegerAll(3, 4, 5));
        checkEqual(false, isNotIntegerAll(10, 20, 30));
        checkEqual(false, isNotIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2.1, 3.5));
        checkEqual(true,  isNotIntegerAll(1.1, 2.2, 3.5));

        checkEqual(false, isIntegerArray([]), '?');
        checkEqual(true,  isIntegerArray([1]));
        checkEqual(true,  isIntegerArray([1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(true,  isIntegerArray([1, 2, 0]));
        checkEqual(false, isIntegerArray([1, 2, NaN]));
        checkEqual(false, isIntegerArray([1, 2, null]));
        checkEqual(false, isIntegerArray(['a', 'b', 1]));
        checkEqual(false, isIntegerArray(['a', 'b', 1.1]));
        checkEqual(false, isIntegerArray(['a', 'b', 'c']));

        checkEqual(false, isNotIntegerArray([]));
        checkEqual(false, isNotIntegerArray([1]));
        checkEqual(false, isNotIntegerArray([1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2.2, 3]));
        checkEqual(true,  isNotIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(false, isNotIntegerArray([1, 2, 0]));
        checkEqual(false, isNotIntegerArray([1, 2, NaN]));
        checkEqual(false, isNotIntegerArray([1, 2, null]));
        checkEqual(false, isNotIntegerArray(['a', 'b', 1]));
        checkEqual(true,  isNotIntegerArray(['a', 'b', 1.1]));
        checkEqual(true,  isNotIntegerArray(['a', 'b', 'c']));

        checkEqual(false, isIntegerAll(new Number()));
        checkEqual(false, isIntegerAll(new Number('')));
        checkEqual(false, isIntegerAll(new Number('1')));
        checkEqual(false, isIntegerAll(new Number('1.1')));

        checkEqual(false, isIntegerAll(new Number(1)));
      });
    };

    const test_isString = function() {
      it('test_isString', () => {

        const isStringArray = (array) => {
          return allMatchSome(array, [isStringAll]);
        };
        const isNotStringArray = (array) => {
          return allMatchSome(array, [isNotStringAll]);
        };

        checkEqual(true, isStringAll(''));
        checkEqual(true, isStringAll('a'));
        checkEqual(true, isStringAll('a', 'b', 'c'));
        checkEqual(true, isStringAll('a', 'b', ''));
        checkEqual(false, isStringAll('a', 'b', 0));
        checkEqual(false, isStringAll('a', 'b', 1));
        checkEqual(false, isStringAll('a', 'b', null));
        checkEqual(false, isStringAll('a', 'b', undefined));

        checkEqual(false, isStringArray([]));
        checkEqual(true, isStringArray(['']));
        checkEqual(true, isStringArray(['a']));
        checkEqual(true, isStringArray(['a', 'b', 'c']));
        checkEqual(true, isStringArray(['a', 'b', '']));
        checkEqual(false, isStringArray(['a', 'b', 0]));
        checkEqual(false, isStringArray(['a', 'b', 1]));
        checkEqual(false, isStringArray(['a', 'b', null]));
        checkEqual(false, isStringArray(['a', 'b', undefined]));

        checkEqual('',    String(new String()));
        checkEqual('',    String(new String('')));
        checkEqual(' ',   String(new String(' ')));
        checkEqual('　',   String(new String('　')));
        checkEqual('1',   String(new String('1')));
        checkEqual('1.1', String(new String('1.1')));
        checkEqual('1',   String(new String(1)));
        checkEqual('1.1', String(new String(1.1)));
        checkEqual('NaN',       String(new String(NaN)));
        checkEqual('Infinity',  String(new String(Infinity)));
        checkEqual('undefined', String(new String(undefined)));
        checkEqual('null',      String(new String(null)));

        checkEqual(false, isStringAll(new String()));
        checkEqual(false, isStringAll(new String(undefined)));
        checkEqual(false, isStringAll(new String(null)));
        checkEqual(false, isStringAll(new String('')));
        checkEqual(false, isStringAll(new String('1')));
        checkEqual(false, isStringAll(new String(1)));
        checkEqual(true,  isStringObjectAll(new String()));
        checkEqual(true,  isStringObjectAll(new String(undefined)));
        checkEqual(true,  isStringObjectAll(new String(null)));
        checkEqual(true,  isStringObjectAll(new String('')));
        checkEqual(true,  isStringObjectAll(new String('1')));
        checkEqual(true,  isStringObjectAll(new String(1)));
      });
    };

    const test_isFunction = function() {
      it('test_isFunction', () => {

        const isFunctionArray = (array) => {
          return allMatchSome(array, [isFunctionAll]);
        };
        const isNotFunctionArray = (array) => {
          return allMatchSome(array, [isNotFunctionAll]);
        };

        checkEqual(true, isFunctionAll(function() { }));
        checkEqual(false, isFunctionAll({}));

        checkEqual(true, isFunctionAll(function() { }, test_isFunction));
        checkEqual(false, isFunctionAll({}, test_isFunction));

        checkEqual(true, isFunctionArray(
          [function() { }, test_isFunction]));
        checkEqual(false, isFunctionArray(
          [{}, test_isFunction]));
      });
    };

    const test_isObject = function() {
      it('test_isObject', () => {

        const isObjectArray = (array) => {
          return allMatchSome(array, [isObjectAll]);
        };
        const isNotObjectArray = (array) => {
          return allMatchSome(array, [isNotObjectAll]);
        };

        checkEqual(false, isObjectAll(null));
        checkEqual(false, isObjectAll(undefined));
        checkEqual(false, isObjectAll(undefined));
        checkEqual(false, isObjectAll('a'));
        checkEqual(false, isObjectAll(1));
        checkEqual(false, isObjectAll(true));

        checkEqual(true,  isObjectAll({}));
        checkEqual(true,  isObjectAll({ a: 0 }));
        checkEqual(true,  isObjectAll({ a: 0, b: 1 }));

        checkEqual(false, isObjectAll([]));
        checkEqual(false, isObjectAll(function() { }));
        checkEqual(false, isObjectAll(() => {}));
        checkEqual(false, isObjectAll(new Error()));
        checkEqual(false, isObjectAll(new Date()));
        checkEqual(false, isObjectAll(new RegExp()));

        checkEqual(false, isObjectAll(new String()));
        checkEqual(false, isObjectAll(new Number()));
        checkEqual(false, isObjectAll(new Boolean()));
        checkEqual(true,  isObjectAll(new Object()));
        checkEqual(false, isObjectAll(new Array()));
        checkEqual(false, isObjectAll(new Function()));

        checkEqual(true,  isObjectAll({ a: 0, b: 1 }, { c: 0, d: 1 }));

        checkEqual(true,  isObjectArray([{}, { a: 0, b: 1 }]));
        checkEqual(false, isObjectArray([[], { a: 0, b: 1 }]));
        checkEqual(false, isObjectArray([[{}], { a: 0, b: 1 }]));

        const TestObject = function() {
          this.a = 'a';
        };
        var testObject1 = new TestObject();
        checkEqual(true,  isObjectAll(testObject1));
      });
    };

    const test_isObjectType = function() {
      it('test_isObjectType', () => {

        const isObjectTypeArray = (array) => {
          return allMatchSome(array, [isObjectTypeAll]);
        };
        const isNotObjectTypeArray = (array) => {
          return allMatchSome(array, [isNotObjectTypeAll]);
        };

        checkEqual(false, isObjectTypeAll(null));
        checkEqual(false, isObjectTypeAll(undefined));
        checkEqual(false, isObjectTypeAll('a'));
        checkEqual(false, isObjectTypeAll(1));
        checkEqual(false, isObjectTypeAll(true));

        checkEqual(true,  isObjectTypeAll({}));
        checkEqual(true,  isObjectTypeAll({ a: 0 }));
        checkEqual(true,  isObjectTypeAll({ a: 0, b: 1 }));

        checkEqual(true,  isObjectTypeAll([]));
        checkEqual(true,  isObjectTypeAll(function() { }));
        checkEqual(true,  isObjectTypeAll(() => {}));
        checkEqual(true,  isObjectTypeAll(new Error()));
        checkEqual(true,  isObjectTypeAll(new Date()));
        checkEqual(true,  isObjectTypeAll(new RegExp()));

        checkEqual(true,  isObjectTypeAll(new String()));
        checkEqual(true,  isObjectTypeAll(new Number()));
        checkEqual(true,  isObjectTypeAll(new Boolean()));
        checkEqual(true,  isObjectTypeAll(new Object()));
        checkEqual(true,  isObjectTypeAll(new Array()));
        checkEqual(true,  isObjectTypeAll(new Function()));

        checkEqual(true,  isObjectTypeAll({ a: 0, b: 1 }, { c: 0, d: 1 }));

        checkEqual(true,  isObjectTypeArray([{}, { a: 0, b: 1 }]));
        checkEqual(true,  isObjectTypeArray([[], { a: 0, b: 1 }]));
        checkEqual(true,  isObjectTypeArray([[{}], { a: 0, b: 1 }]));

        const TestObject = function() {
          this.a = 'a';
        };
        var testObject1 = new TestObject();
        checkEqual(true,  isObjectTypeAll(testObject1));
      });
    };

    const test_isArray = function() {
      it('test_isArray', () => {

        const isArrayArray = (array) => {
          return allMatchSome(array, [isArrayAll]);
        };
        const isNotArrayArray = (array) => {
          return allMatchSome(array, [isNotArrayAll]);
        };

        checkEqual(true,  isArrayAll([123]));
        checkEqual(true,  isArrayAll([]));
        checkEqual(true,  isArrayAll([1, 2, 3]));
        checkEqual(false, isArrayAll(123));
        checkEqual(false, isArrayAll('1,2,3'));

        checkEqual(true,  isArrayAll([1], [2]));
        checkEqual(true,  isArrayAll([3], [4], [5]));
        checkEqual(true,  isArrayAll([10, 20], [30]));
        checkEqual(false, isArrayAll([1, 2], 3));

        checkEqual(true,  isNotArrayAll(1, 2));
        checkEqual(false, isNotArrayAll([3], [4], 5));
        checkEqual(true,  isNotArrayAll(10, 20, 30));
        checkEqual(false, isNotArrayAll(10, 20, [30]));


        checkEqual(true,  isArrayArray([[1], [2]]));
        checkEqual(true,  isArrayArray([[3], [4], [5]]));
        checkEqual(true,  isArrayArray([[10, 20], [30]]));
        checkEqual(false, isArrayArray([[1, 2], 3]));

        checkEqual(true,  isNotArrayArray([1, 2]));
        checkEqual(false, isNotArrayArray([[3], [4], 5]));
        checkEqual(true,  isNotArrayArray([10, 20, 30]));
        checkEqual(false, isNotArrayArray([10, 20, [30]]));
      });
    };

    const test_isArrayType = function() {
      it('test_isArrayType', () => {

        checkEqual(true,  Array.isArray([]));
        checkEqual(true,  Array.isArray([123]));
        checkEqual(true,  Array.isArray([1, 2, 3]));
        checkEqual(true,  Array.isArray(new Array()));
        checkEqual(true,  Array.isArray(new Array(1, 2, 3)));
        checkEqual(true,  Array.isArray(new Array()));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, Array.isArray(new Int8Array()));
          checkEqual(false, Array.isArray(new Uint8Array()));
          checkEqual(false, Array.isArray(new Uint8ClampedArray()));
          checkEqual(false, Array.isArray(new Int16Array()));
          checkEqual(false, Array.isArray(new Uint16Array()));
          checkEqual(false, Array.isArray(new Int32Array()));
          checkEqual(false, Array.isArray(new Uint32Array()));
          checkEqual(false, Array.isArray(new Float32Array()));
          checkEqual(false, Array.isArray(new Float64Array()));
        }

        checkEqual(true,  isArrayAll([]));
        checkEqual(true,  isArrayAll([123]));
        checkEqual(true,  isArrayAll([1, 2, 3]));
        checkEqual(true,  isArrayAll(new Array()));
        checkEqual(true,  isArrayAll(new Array(1, 2, 3)));
        checkEqual(true,  isArrayAll(new Array()));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isArrayAll(new Int8Array()));
          checkEqual(false, isArrayAll(new Uint8Array()));
          checkEqual(false, isArrayAll(new Uint8ClampedArray()));
          checkEqual(false, isArrayAll(new Int16Array()));
          checkEqual(false, isArrayAll(new Uint16Array()));
          checkEqual(false, isArrayAll(new Int32Array()));
          checkEqual(false, isArrayAll(new Uint32Array()));
          checkEqual(false, isArrayAll(new Float32Array()));
          checkEqual(false, isArrayAll(new Float64Array()));
        }

        checkEqual(true,  isArrayTypeAll([]));
        checkEqual(true,  isArrayTypeAll([123]));
        checkEqual(true,  isArrayTypeAll([1, 2, 3]));
        checkEqual(true,  isArrayTypeAll(new Array()));
        checkEqual(true,  isArrayTypeAll(new Array(1, 2, 3)));
        checkEqual(true,  isArrayTypeAll(new Array()));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true,  isArrayTypeAll(new Int8Array()));
          checkEqual(true,  isArrayTypeAll(new Uint8Array()));
          checkEqual(true,  isArrayTypeAll(new Uint8ClampedArray()));
          checkEqual(true,  isArrayTypeAll(new Int16Array()));
          checkEqual(true,  isArrayTypeAll(new Uint16Array()));
          checkEqual(true,  isArrayTypeAll(new Int32Array()));
          checkEqual(true,  isArrayTypeAll(new Uint32Array()));
          checkEqual(true,  isArrayTypeAll(new Float32Array()));
          checkEqual(true,  isArrayTypeAll(new Float64Array()));
        }
      });
    };

    const test_isDate = function() {
      it('test_isDate', () => {

        checkEqual(true, isDateAll(new Date(2017, 1, 1)));
        checkEqual(true, isDateAll(new Date('2017/01')));
        checkEqual(true, isDateAll(new Date(2017, 1)));
        checkEqual(true, isDateAll(new Date(2017, 1)));
      });
    };

    const test_isExcection = function() {
      it('test_isExcection', () => {

        checkEqual(true,  isExceptionAll({ name: '', message: '' }));
        checkEqual(false, isExceptionAll({ name: '' }));
        checkEqual(false, isExceptionAll({ message: '' }));

        checkEqual(true,  isExceptionAll(new Error()));
        checkEqual(true,  isExceptionAll(new TypeError()));
        checkEqual(true,  isExceptionAll(new SyntaxError()));
        checkEqual(true,  isExceptionAll(new ReferenceError()));

        const UserException = function(message) {
          this.message = message;
          this.name = 'UserException';
        };
        checkEqual(true, isExceptionAll(new UserException('message')));
      });
    };

    const test_isEmptyObject = () =>{
      it('test_isEmptyObject', () => {
        checkEqual(true,  isEmptyObjectAll({}));
        checkEqual(false, isEmptyObjectAll({a:1}));
        checkEqual(false, isEmptyObjectAll(null));
        checkEqual(false, isEmptyObjectAll(undefined));
        checkEqual(false, isEmptyObjectAll(123));
        checkEqual(false, isEmptyObjectAll('abc'));
        checkEqual(false, isEmptyObjectAll([]));
        checkEqual(false, isEmptyObjectAll([123]));
      });
    };
    const test_isEmptyArray = () =>{
      it('test_isEmptyArray', () => {
        checkEqual(false, isEmptyArrayAll({}));
        checkEqual(false, isEmptyArrayAll({a:1}));
        checkEqual(false, isEmptyArrayAll(null));
        checkEqual(false, isEmptyArrayAll(undefined));
        checkEqual(false, isEmptyArrayAll(123));
        checkEqual(false, isEmptyArrayAll('abc'));
        checkEqual(true,  isEmptyArrayAll([]));
        checkEqual(false, isEmptyArrayAll([123]));
      });
    };

    const test_isSymbol = function() {
      it('test_isSymbol', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        checkEqual(false, isSymbolAll(1));
        checkEqual(true, isSymbolAll(Symbol()));
      });
    };

    const test_isMap = function() {
      it('test_isMap', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          checkEqual(false, isMapAll({}));
          checkEqual(false, isWeakMapAll({}));
          checkEqual(false, isMapAll(new Map()));
          checkEqual(false, isWeakMapAll(new Map()));
          checkEqual(false, isMapAll(new WeakMap()));
          checkEqual(false, isWeakMapAll(new WeakMap()));

          checkEqual(true,  isObjectAll({}));
          checkEqual(true,  isObjectAll(new Map()));
          checkEqual(true,  isObjectAll(new WeakMap()));
        } else {
          checkEqual(false, isMapAll({}));
          checkEqual(false, isWeakMapAll({}));
          checkEqual(true,  isMapAll(new Map()));
          checkEqual(false, isWeakMapAll(new Map()));
          checkEqual(false, isMapAll(new WeakMap()));
          checkEqual(true,  isWeakMapAll(new WeakMap()));

          checkEqual(true,  isObjectAll({}));
          checkEqual(false, isObjectAll(new Map()));
          checkEqual(false, isObjectAll(new WeakMap()));
        }
      });
    };

    const test_isSet = function() {
      it('test_isSet', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          checkEqual(false, isSetAll({}));
          checkEqual(false,  isSetAll(new Set()));
          checkEqual(false, isWeakSetAll(new Set()));
        } else {
          checkEqual(false, isSetAll({}));
          checkEqual(false, isWeakSetAll({}));
          checkEqual(true,  isSetAll(new Set()));
          checkEqual(false, isWeakSetAll(new Set()));
          checkEqual(false, isSetAll(new WeakSet()));
          checkEqual(true,  isWeakSetAll(new WeakSet()));
        }

      });
    };

    test_checkType();
    test_isUndefinedAll();
    test_isNull();
    test_isBoolean();
    test_isNumber();
    test_isInteger();
    test_isString();
    test_isFunction();
    test_isObject();
    test_isObjectType();
    test_isArray();
    test_isArrayType();
    test_isDate();
    test_isExcection();
    test_isEmptyObject();
    test_isEmptyArray();
    test_isSymbol();
    test_isMap();
    test_isSet();
  });
};

module.exports = {
  test_execute_type,
};
