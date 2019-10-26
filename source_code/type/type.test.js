const test_execute_type = (parts) => {

  const {
    checkEqual
  } = parts.test;

  const {

    isUndefined, isNull, isNaNStrict,
    isBoolean, isNumber, isInteger, isString,
    isFunction, isObject, isObjectType,
    isArray, isDate, isRegExp,
    isException,
    isBooleanObject, isNumberObject, isStringObject,

    isNotUndefined, isNotNull, isNotNaNStrict,
    isNotBoolean, isNotNumber, isNotInteger, isNotString,
    isNotFunction, isNotObject, isNotObjectType,
    isNotArray, isNotDate, isNotRegExp,
    isNotException,
    isNotBooleanObject, isNotNumberObject, isNotStringObject,

    isUndefinedArray, isNullArray, isNaNStrictArray,
    isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
    isFunctionArray, isObjectArray, isObjectTypeArray,
    isArrayArray, isDateArray, isRegExpArray,
    isExceptionArray,
    isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,

    isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
    isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
    isNotFunctionArray, isNotObjectArray, isNotObjectTypeArray,
    isNotArrayArray, isNotDateArray, isNotRegExpArray,
    isNotExceptionArray,
    isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,

  } = parts.type;

  const {
    _typeofCheck, _objectToStringCheck,
  } = require('../type/_isType.js')

  const test_checkType = () => {
    const objectToString = value => Object.prototype.toString.call(value);
    const checkType = (
      typeofName,
      objectStringName,
      value,
    ) => {
      checkEqual(typeofName, typeof value);
      checkEqual(objectStringName, objectToString(value));
    }

    checkType('undefined', '[object Undefined]',  undefined);
    checkType('object',    '[object Null]',       null); // bad specification
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

    if (parts.platform.wsh) {
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

    checkType('symbol',    '[object Symbol]',             Symbol());
    checkType('object',    '[object Map]',                new Map());
    checkType('object',    '[object WeakMap]',            new WeakMap());
    checkType('object',    '[object Set]',                new Set());
    checkType('object',    '[object WeakSet]',            new WeakSet());

    checkType('object',    '[object ArrayBuffer]',        new ArrayBuffer(8));
    checkType('object',    '[object SharedArrayBuffer]',  new SharedArrayBuffer(8));
    checkType('object',    '[object Atomics]',            Atomics);
    checkType('object',    '[object DataView]',           new DataView(new ArrayBuffer(16)));
    checkType('object',    '[object JSON]',               JSON);

    checkType('function',  '[object Function]',           Promise);

    function* Generator() { yield 1; yield 2; yield 3; }
    var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
    var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
    checkType('object',    '[object Generator]',          Generator());
    checkType('function',  '[object GeneratorFunction]',  new GeneratorFunction());
    checkType('function',  '[object AsyncFunction]',      new AsyncFunction());

    checkType('object',    '[object Object]',             Reflect);
    checkType('object',    '[object Object]',             new Proxy({}, {}));
    checkType('object',    '[object Object]',             Intl);
    checkType('object',    '[object WebAssembly]',        WebAssembly);

  }

  const test_isUndefined = function () {
    var u1;
    var n1 = null;
    var v1 = 1;

    checkEqual(true, isUndefined(u1));
    checkEqual(false, isUndefined(n1));
    checkEqual(false, isUndefined(v1));
    checkEqual(true, isUndefinedArray([u1]));
    checkEqual(false, isUndefinedArray([n1]));
    checkEqual(false, isUndefinedArray([v1]));

    checkEqual(true, isUndefined(u1, u1));
    checkEqual(false, isUndefined(u1, n1));
    checkEqual(false, isUndefined(u1, v1));
    checkEqual(true, isUndefinedArray([u1, u1]));
    checkEqual(false, isUndefinedArray([u1, n1]));
    checkEqual(false, isUndefinedArray([u1, v1]));

    checkEqual(false, isNotUndefined(u1));
    checkEqual(true, isNotUndefined(n1));
    checkEqual(true, isNotUndefined(v1));
    checkEqual(false, isNotUndefinedArray([u1]));
    checkEqual(true, isNotUndefinedArray([n1]));
    checkEqual(true, isNotUndefinedArray([v1]));

    checkEqual(false, isNotUndefined(u1, u1));
    checkEqual(false, isNotUndefined(u1, n1));
    checkEqual(true, isNotUndefined(n1, n1));
    checkEqual(false, isNotUndefined(n1, u1));
    checkEqual(true, isNotUndefined(v1, v1));
    checkEqual(true, isNotUndefined(v1, n1));
    checkEqual(false, isNotUndefined(v1, u1));
    checkEqual(false, isNotUndefinedArray([u1, u1]));
    checkEqual(false, isNotUndefinedArray([u1, n1]));
    checkEqual(true, isNotUndefinedArray([n1, n1]));
    checkEqual(false, isNotUndefinedArray([n1, u1]));
    checkEqual(true, isNotUndefinedArray([v1, v1]));
    checkEqual(true, isNotUndefinedArray([v1, n1]));
    checkEqual(false, isNotUndefinedArray([v1, u1]));

    //配列の中身ではなく配列自体を判定する
    //配列はundefinedではない
    checkEqual(false, isUndefined([v1, v1]));
    checkEqual(false, isUndefined([u1, u1]));
    checkEqual(true, isNotUndefined([v1, v1]));
    checkEqual(true, isNotUndefined([u1, u1]));
  };

  const test_isNull = function () {
    var u1;
    var n1 = null;
    var v1 = 1;

    checkEqual(false, isNull(u1));
    checkEqual(true, isNull(n1));
    checkEqual(false, isNull(v1));
    checkEqual(false, isNullArray([u1]));
    checkEqual(true, isNullArray([n1]));
    checkEqual(false, isNullArray([v1]));

    checkEqual(true, isNull(n1, n1));
    checkEqual(false, isNull(n1, u1));
    checkEqual(false, isNull(n1, v1));
    checkEqual(true, isNullArray([n1, n1]));
    checkEqual(false, isNullArray([n1, u1]));
    checkEqual(false, isNullArray([n1, v1]));

    checkEqual(true, isNotNull(u1));
    checkEqual(false, isNotNull(n1));
    checkEqual(true, isNotNull(v1));
    checkEqual(true, isNotNullArray([u1]));
    checkEqual(false, isNotNullArray([n1]));
    checkEqual(true, isNotNullArray([v1]));

    checkEqual(true, isNotNull(u1, u1));
    checkEqual(false, isNotNull(u1, n1));
    checkEqual(false, isNotNull(n1, n1));
    checkEqual(false, isNotNull(n1, u1));
    checkEqual(true, isNotNull(v1, v1));
    checkEqual(false, isNotNull(v1, n1));
    checkEqual(true, isNotNull(v1, u1));
    checkEqual(true, isNotNullArray([u1, u1]));
    checkEqual(false, isNotNullArray([u1, n1]));
    checkEqual(false, isNotNullArray([n1, n1]));
    checkEqual(false, isNotNullArray([n1, u1]));
    checkEqual(true, isNotNullArray([v1, v1]));
    checkEqual(false, isNotNullArray([v1, n1]));
    checkEqual(true, isNotNullArray([v1, u1]));
  };

  const test_isBoolean = function () {
    checkEqual(true, isBoolean(true));
    checkEqual(true, isBoolean(false));
    checkEqual(false, isBoolean(undefined));
    checkEqual(false, isBoolean(null));
    checkEqual(false, isBoolean(''));
    checkEqual(false, isBoolean('true'));
    checkEqual(false, isBoolean('false'));
    checkEqual(false, isBoolean(123));
    checkEqual(false, isBoolean(0));
    checkEqual(false, isBoolean(-1));

    checkEqual(true, isBoolean(true, true));
    checkEqual(true, isBoolean(true, true, true));
    checkEqual(true, isBoolean(true, false, true));
    checkEqual(false, isBoolean(true, 1, true));

    checkEqual(false, isBoolean([true, true]));

    checkEqual(true,  isBooleanArray([true, true]));
    checkEqual(true,  isBooleanArray([true, true, true]));
    checkEqual(true,  isBooleanArray([true, false, true]));
    checkEqual(false, isBooleanArray([true, 1, true]));

    checkEqual(false, isBoolean(new Boolean()));
    checkEqual(false, isBoolean(new Boolean('1')));
    checkEqual(false, isBoolean(new Boolean('a')));
    checkEqual(false, isBoolean(new Boolean('true')));
    checkEqual(true,  isBooleanObject(new Boolean()), 'test isBooleanObject');
    checkEqual(true,  isBooleanObject(new Boolean('1')));
    checkEqual(true,  isBooleanObject(new Boolean('a')));
    checkEqual(true,  isBooleanObject(new Boolean('true')));
  };

  const test_isNumber = function () {
    checkEqual(true, isNumber(123));
    checkEqual(true, isNumber(0));
    checkEqual(true, isNumber(-1));
    checkEqual(true, isNumber(123.4));
    checkEqual(true, isNumber(123.0));
    checkEqual(false, isNumber(true));
    checkEqual(false, isNumber(false));
    checkEqual(false, isNumber(null));
    checkEqual(false, isNumber(undefined));
    checkEqual(false, isNumber(Infinity));  //InfinityもNumberとして許可しないことにする
    checkEqual(false, isNumber(NaN));
    checkEqual(false, isNumber(''));
    checkEqual(false, isNumber('ABC'));
    checkEqual(false, isNumber('ABC10'));
    checkEqual(false, isNumber('10ABC'));
    checkEqual(false, isNumber('0ABC'));
    checkEqual(false, isNumber('0'));
    checkEqual(false, isNumber('5'));
    checkEqual(false, isNumber('-5'));
    checkEqual(false, isNumber('100'));
    checkEqual(false, isNumber('-100'));
    checkEqual(false, isNumber([]));
    checkEqual(false, isNumber({}));

    checkEqual(false, isNotNumber(123));
    checkEqual(false, isNotNumber(0));
    checkEqual(true, isNotNumber(true));
    checkEqual(true, isNotNumber(null));
    checkEqual(true, isNotNumber(undefined));
    checkEqual(true, isNotNumber(Infinity));
    checkEqual(true, isNotNumber(NaN));
    checkEqual(true, isNotNumber(''));

    checkEqual(true, isNumber(1, 2));
    checkEqual(true, isNumber(3, 4, 5));
    checkEqual(true, isNumber(10.5, 20.5, 30.5));
    checkEqual(false, isNumber(1, 2, true));

    checkEqual(false, isNotNumber(1, 2));
    checkEqual(false, isNotNumber(3, 4, 5));
    checkEqual(false, isNotNumber(10.5, 20.5, 30.5));
    checkEqual(false, isNotNumber(1, 2, true));
    checkEqual(true, isNotNumber(false, true));
    checkEqual(true, isNotNumber('a', 'b'));

    checkEqual(false, isNumber([1, 2]));

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
    checkEqual(0,   Number(new Number('　')));
    checkEqual(1,   Number(new Number('1')));
    checkEqual(1.1, Number(new Number('1.1')));
    checkEqual(NaN,       Number(new Number(NaN)));
    checkEqual(Infinity,  Number(new Number(Infinity)));
    checkEqual(NaN,       Number(new Number(undefined)));
    checkEqual(0,         Number(new Number(null)));

    checkEqual(false, isNumber(new Number()));
    checkEqual(false, isNumber(new Number('')));
    checkEqual(false, isNumber(new Number('1')));
    checkEqual(false, isNumber(new Number('1.1')));
    checkEqual(true,  isNumberObject(new Number()));
    checkEqual(true,  isNumberObject(new Number('')));
    checkEqual(true,  isNumberObject(new Number('1')));
    checkEqual(true,  isNumberObject(new Number('1.1')));
  };

  const test_isInteger = function () {
    checkEqual(true, isInteger(123));
    checkEqual(true, isInteger(0));
    checkEqual(true, isInteger(-1));
    checkEqual(false, isInteger(123.4));
    checkEqual(true, isInteger(123.0));
    //.0の場合は整数か小数かは判断できない

    checkEqual(false, isInteger(true));
    checkEqual(false, isInteger(false));
    checkEqual(false, isInteger(null));
    checkEqual(false, isInteger(undefined));
    checkEqual(false, isInteger(''));
    checkEqual(false, isInteger('ABC'));
    checkEqual(false, isInteger('0'));
    checkEqual(false, isInteger('5'));
    checkEqual(false, isInteger('-5'));
    checkEqual(false, isInteger('100'));
    checkEqual(false, isInteger('-100'));
    checkEqual(false, isInteger([]));
    checkEqual(false, isInteger({}));

    checkEqual(true, isInteger(1, 2));
    checkEqual(true, isInteger(3, 4, 5));
    checkEqual(true, isInteger(10, 20, 30));
    checkEqual(false, isInteger(1, 2, 3.5));

    checkEqual(false, isNotInteger(1, 2));
    checkEqual(false, isNotInteger(3, 4, 5));
    checkEqual(false, isNotInteger(10, 20, 30));
    checkEqual(false, isNotInteger(1, 2, 3.5));
    checkEqual(false, isNotInteger(1, 2.1, 3.5));
    checkEqual(true,  isNotInteger(1.1, 2.2, 3.5));

    checkEqual(false, isIntegerArray([]));
    checkEqual(true,  isIntegerArray([1]));
    checkEqual(true,  isIntegerArray([1, 2, 3]));
    checkEqual(true,  isIntegerArray([1, 2, 0]));
    checkEqual(false, isIntegerArray([1, 2, NaN]));
    checkEqual(false, isIntegerArray([1, 2, null]));
    checkEqual(false, isIntegerArray(['a', 'b', 1]));

    checkEqual(false, isInteger(new Number()));
    checkEqual(false, isInteger(new Number('')));
    checkEqual(false, isInteger(new Number('1')));
    checkEqual(false, isInteger(new Number('1.1')));

    checkEqual(false, isInteger(new Number(1)));
  };

  const test_isString = function () {
    checkEqual(true, isString(''));
    checkEqual(true, isString('a'));
    checkEqual(true, isString('a', 'b', 'c'));
    checkEqual(true, isString('a', 'b', ''));
    checkEqual(false, isString('a', 'b', 0));
    checkEqual(false, isString('a', 'b', 1));
    checkEqual(false, isString('a', 'b', null));
    checkEqual(false, isString('a', 'b', undefined));

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

    checkEqual(false, isString(new String()));
    checkEqual(false, isString(new String(undefined)));
    checkEqual(false, isString(new String(null)));
    checkEqual(false, isString(new String('')));
    checkEqual(false, isString(new String('1')));
    checkEqual(false, isString(new String(1)));
    checkEqual(true,  isStringObject(new String()));
    checkEqual(true,  isStringObject(new String(undefined)));
    checkEqual(true,  isStringObject(new String(null)));
    checkEqual(true,  isStringObject(new String('')));
    checkEqual(true,  isStringObject(new String('1')));
    checkEqual(true,  isStringObject(new String(1)));
  };

  const test_isFunction = function () {

    checkEqual(true, isFunction(function () { }));
    checkEqual(false, isFunction({}));

    checkEqual(true, isFunction(function () { }, test_isFunction));
    checkEqual(false, isFunction({}, test_isFunction));

    checkEqual(true, isFunctionArray(
      [function () { }, test_isFunction]));
    checkEqual(false, isFunctionArray(
      [{}, test_isFunction]));

  };

  const test_isObject = function () {
    checkEqual(false, isObject(null));
    checkEqual(false, isObject(undefined));
    checkEqual(false, isObject(undefined));
    checkEqual(false, isObject('a'));
    checkEqual(false, isObject(1));
    checkEqual(false, isObject(true));

    checkEqual(true,  isObject({}));
    checkEqual(true,  isObject({ a: 0 }));
    checkEqual(true,  isObject({ a: 0, b: 1 }));

    checkEqual(false, isObject([]));
    checkEqual(false, isObject(function () { }));
    checkEqual(false, isObject(() => {}));
    checkEqual(false, isObject(new Error()));
    checkEqual(false, isObject(new Date()));
    checkEqual(false, isObject(new RegExp()));

    checkEqual(false, isObject(new String()));
    checkEqual(false, isObject(new Number()));
    checkEqual(false, isObject(new Boolean()));
    checkEqual(true,  isObject(new Object()));
    checkEqual(false, isObject(new Array()));
    checkEqual(false, isObject(new Function()));

    checkEqual(true,  isObject({ a: 0, b: 1 }, { c: 0, d: 1 }));

    checkEqual(true,  isObjectArray([{}, { a: 0, b: 1 }]));
    checkEqual(false, isObjectArray([[], { a: 0, b: 1 }]));
    checkEqual(false, isObjectArray([[{}], { a: 0, b: 1 }]));

    const TestObject = function() {
      this.a = 'a';
    }
    var testObject1 = new TestObject();
    checkEqual(true,  isObject(testObject1));
  };

  const test_isObjectType = function () {
    checkEqual(false, isObjectType(null));
    checkEqual(false, isObjectType(undefined));
    checkEqual(false, isObjectType('a'));
    checkEqual(false, isObjectType(1));
    checkEqual(false, isObjectType(true));

    checkEqual(true,  isObjectType({}));
    checkEqual(true,  isObjectType({ a: 0 }));
    checkEqual(true,  isObjectType({ a: 0, b: 1 }));

    checkEqual(true,  isObjectType([]));
    checkEqual(true,  isObjectType(function () { }));
    checkEqual(true,  isObjectType(() => {}));
    checkEqual(true,  isObjectType(new Error()));
    checkEqual(true,  isObjectType(new Date()));
    checkEqual(true,  isObjectType(new RegExp()));

    checkEqual(true,  isObjectType(new String()));
    checkEqual(true,  isObjectType(new Number()));
    checkEqual(true,  isObjectType(new Boolean()));
    checkEqual(true,  isObjectType(new Object()));
    checkEqual(true,  isObjectType(new Array()));
    checkEqual(true,  isObjectType(new Function()));

    checkEqual(true,  isObjectType({ a: 0, b: 1 }, { c: 0, d: 1 }));

    checkEqual(true,  isObjectTypeArray([{}, { a: 0, b: 1 }]));
    checkEqual(true,  isObjectTypeArray([[], { a: 0, b: 1 }]));
    checkEqual(true,  isObjectTypeArray([[{}], { a: 0, b: 1 }]));

    const TestObject = function() {
      this.a = 'a';
    }
    var testObject1 = new TestObject();
    checkEqual(true,  isObjectType(testObject1));
  };

  const test_isArray = function () {
    checkEqual(true, isArray([123]));
    checkEqual(true, isArray([]));
    checkEqual(true, isArray([1, 2, 3]));
    checkEqual(false, isArray(123));
    checkEqual(false, isArray('1,2,3'));

    checkEqual(true, isArray([1], [2]));
    checkEqual(true, isArray([3], [4], [5]));
    checkEqual(true, isArray([10, 20], [30]));
    checkEqual(false, isArray([1, 2], 3));

    checkEqual(true, isNotArray(1, 2));
    checkEqual(false, isNotArray([3], [4], 5));
    checkEqual(true, isNotArray(10, 20, 30));
    checkEqual(false, isNotArray(10, 20, [30]));


    checkEqual(true, isArrayArray([[1], [2]]));
    checkEqual(true, isArrayArray([[3], [4], [5]]));
    checkEqual(true, isArrayArray([[10, 20], [30]]));
    checkEqual(false, isArrayArray([[1, 2], 3]));

    checkEqual(true, isNotArrayArray([1, 2]));
    checkEqual(false, isNotArrayArray([[3], [4], 5]));
    checkEqual(true, isNotArrayArray([10, 20, 30]));
    checkEqual(false, isNotArrayArray([10, 20, [30]]));
  };

  const test_isDate = function () {
    checkEqual(true, isDate(new Date(2017, 1, 1)));
    checkEqual(true, isDate(new Date('2017/01')));
    checkEqual(true, isDate(new Date(2017, 1)));
    checkEqual(true, isDate(new Date(2017, 1)));
  };

  const test_isExcection = function () {
    checkEqual(true, isException({ name: '', message: '' }));
    checkEqual(false, isException({ name: '' }));
    checkEqual(false, isException({ message: '' }));

    checkEqual(true, isException(new Error()));
    checkEqual(true, isException(new TypeError()));
    checkEqual(true, isException(new SyntaxError()));
    checkEqual(true, isException(new ReferenceError()));

    const UserException = function(message) {
      this.message = message;
      this.name = 'UserException';
    }
    checkEqual(true, isException(new UserException('message')));
  };

  console.log('  test type.js');
  test_checkType();
  test_isUndefined();
  test_isNull();
  test_isBoolean();
  test_isNumber();
  test_isInteger();
  test_isString();
  test_isFunction();
  test_isObject();
  test_isObjectType();
  test_isArray();
  test_isDate();
  test_isExcection();
}

module.exports = {
  test_execute_type,
};