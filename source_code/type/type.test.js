const test_execute_type = (parts) => {

  const {
    checkEqual
  } = parts.test;

  const {

    isUndefined,isNull,isNaNStrict,
    isBoolean,isNumber,isInteger,isString,
    isFunction,isObject,isObjectType,
    isArray,isDate,isRegExp,
    isException,

    isNotUndefined,isNotNull,isNotNaNStrict,
    isNotBoolean,isNotNumber,isNotInteger,isNotString,
    isNotFunction,isNotObject,isNotObjectType,
    isNotArray,isNotDate,isNotRegExp,
    isNotException,

    isUndefinedArray,isNullArray,isNaNStrictArray,
    isBooleanArray,isNumberArray,isIntegerArray,isStringArray,
    isFunctionArray,isObjectArray,isObjectTypeArray,
    isArrayArray,isDateArray,isRegExpArray,
    isExceptionArray,

    isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,
    isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,
    isNotFunctionArray,isNotObjectArray,isNotObjectTypeArray,
    isNotArrayArray,isNotDateArray,isNotRegExpArray,
    isNotExceptionArray,

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

    checkEqual('undefined', typeof undefined);
    checkEqual('object',    typeof null); // bad specification
    checkEqual('boolean',   typeof true);
    checkEqual('boolean',   typeof false);
    checkEqual('object',    typeof new Boolean);
    checkEqual('number',    typeof 1);
    checkEqual('number',    typeof NaN);
    checkEqual('number',    typeof Infinity);
    checkEqual('object',    typeof new Number(1));
    checkEqual('object',    typeof new Number(NaN));
    checkEqual('object',    typeof new Number(Infinity));
    checkEqual('object',    typeof new Number(null));
    checkEqual('object',    typeof new Number(undefined));
    checkEqual('string',    typeof '');
    checkEqual('string',    typeof '1');
    checkEqual('object',    typeof new String(''));
    checkEqual('object',    typeof new String('1'));
    checkEqual('object',    typeof new String(null));
    checkEqual('object',    typeof new String(undefined));
    function testFunc() {}
    checkEqual('function',  typeof testFunc);
    checkEqual('function',  typeof function() {});
    checkEqual('function',  typeof (() => {}));
    checkEqual('object',    typeof {});
    checkEqual('object',    typeof new Object());
    checkEqual('object',    typeof []);
    checkEqual('object',    typeof new Array());
    checkEqual('object',    typeof /^a/);
    checkEqual('object',    typeof new RegExp('^a'));
    checkEqual('object',    typeof Math);

    if (parts.platform.wsh) {
      return;
    }
    checkEqual('object',    typeof new Int8Array());
    checkEqual('object',    typeof new Uint8Array());
    checkEqual('object',    typeof new Uint8ClampedArray());
    checkEqual('object',    typeof new Int16Array());
    checkEqual('object',    typeof new Uint16Array());
    checkEqual('object',    typeof new Int32Array());
    checkEqual('object',    typeof new Uint32Array());
    checkEqual('object',    typeof new Float32Array());
    checkEqual('object',    typeof new Float64Array());

    checkEqual('symbol',    typeof Symbol());
    checkEqual('object',    typeof new Map());
    checkEqual('object',    typeof new WeakMap());
    checkEqual('object',    typeof new Set());
    checkEqual('object',    typeof new WeakSet());

    checkEqual('object',    typeof new ArrayBuffer(8));
    checkEqual('object',    typeof new SharedArrayBuffer(8));
    checkEqual('object',    typeof Atomics);
    checkEqual('object',    typeof new DataView(new ArrayBuffer(16)));
    checkEqual('object',    typeof JSON);

    checkEqual('function',  typeof Promise);
    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }
    checkEqual('object',    typeof gen());
    var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
    checkEqual('function',  typeof new GeneratorFunction());
    var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
    checkEqual('function',  typeof new AsyncFunction());

    checkEqual('object',    typeof Reflect);
    checkEqual('object',    typeof new Proxy({}, {}));
    checkEqual('object',    typeof Intl);
    checkEqual('object',    typeof WebAssembly);

  }

  const test_objectToStringCheck = () => {
    const objectToString = value => Object.prototype.toString.call(value);

      checkEqual('[object Undefined]',  objectToString(undefined));
      checkEqual('[object Null]',       objectToString(null));
      checkEqual('[object Boolean]',    objectToString(true));
      checkEqual('[object Boolean]',    objectToString(false));
      checkEqual('[object Boolean]',    objectToString(new Boolean));
      checkEqual('[object Number]',     objectToString(1));
      checkEqual('[object Number]',     objectToString(NaN));
      checkEqual('[object Number]',     objectToString(Infinity));
      checkEqual('[object Number]',     objectToString(new Number(1)));
      checkEqual('[object Number]',     objectToString(new Number(NaN)));
      checkEqual('[object Number]',     objectToString(new Number(Infinity)));
      checkEqual('[object Number]',     objectToString(new Number(null)));
      checkEqual('[object Number]',     objectToString(new Number(undefined)));
      checkEqual('[object String]',     objectToString(''));
      checkEqual('[object String]',     objectToString('1'));
      checkEqual('[object String]',     objectToString(new String('')));
      checkEqual('[object String]',     objectToString(new String('1')));
      checkEqual('[object String]',     objectToString(new String(null)));
      checkEqual('[object String]',     objectToString(new String(undefined)));
      function testFunc() {}
      checkEqual('[object Function]',   objectToString(testFunc));
      checkEqual('[object Function]',   objectToString(function() {}));
      checkEqual('[object Function]',   objectToString((() => {})));
      checkEqual('[object Object]',     objectToString({}));
      checkEqual('[object Object]',     objectToString(new Object()));
      checkEqual('[object Array]',      objectToString([]));
      checkEqual('[object Array]',      objectToString(new Array()));
      checkEqual('[object RegExp]',     objectToString(/^a/));
      checkEqual('[object RegExp]',     objectToString(new RegExp('^a')));
      checkEqual('[object Math]',       objectToString(Math));

      if (parts.platform.wsh) {
        return;
      }
      checkEqual('[object Int8Array]',          objectToString(new Int8Array()));
      checkEqual('[object Uint8Array]',         objectToString(new Uint8Array()));
      checkEqual('[object Uint8ClampedArray]',  objectToString(new Uint8ClampedArray()));
      checkEqual('[object Int16Array]',         objectToString(new Int16Array()));
      checkEqual('[object Uint16Array]',        objectToString(new Uint16Array()));
      checkEqual('[object Int32Array]',         objectToString(new Int32Array()));
      checkEqual('[object Uint32Array]',        objectToString(new Uint32Array()));
      checkEqual('[object Float32Array]',       objectToString(new Float32Array()));
      checkEqual('[object Float64Array]',       objectToString(new Float64Array()));

      checkEqual('[object Symbol]',             objectToString(Symbol()));
      checkEqual('[object Map]',                objectToString(new Map()));
      checkEqual('[object WeakMap]',            objectToString(new WeakMap()));
      checkEqual('[object Set]',                objectToString(new Set()));
      checkEqual('[object WeakSet]',            objectToString(new WeakSet()));

      checkEqual('[object ArrayBuffer]',        objectToString(new ArrayBuffer(8)));
      checkEqual('[object SharedArrayBuffer]',  objectToString(new SharedArrayBuffer(8)));
      checkEqual('[object Atomics]',            objectToString(Atomics));
      checkEqual('[object DataView]',           objectToString(new DataView(new ArrayBuffer(16))));
      checkEqual('[object JSON]',               objectToString(JSON));

      checkEqual('[object Function]',           objectToString(Promise));
      function* gen() {
        yield 1;
        yield 2;
        yield 3;
      }
      checkEqual('[object Generator]',          objectToString(gen()));
      var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
      checkEqual('[object GeneratorFunction]',  objectToString(new GeneratorFunction()));
      var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
      checkEqual('[object AsyncFunction]',      objectToString(new AsyncFunction()));

      checkEqual('[object Object]',             objectToString(Reflect));
      checkEqual('[object Object]',             objectToString(new Proxy({}, {})));
      checkEqual('[object Object]',             objectToString(Intl));
      checkEqual('[object WebAssembly]',        objectToString(WebAssembly));
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

    checkEqual(true, isBooleanArray([true, true]));
    checkEqual(true, isBooleanArray([true, true, true]));
    checkEqual(true, isBooleanArray([true, false, true]));
    checkEqual(false, isBooleanArray([true, 1, true]));

    checkEqual(true, isBoolean(new Boolean()));
    checkEqual(true, isBoolean(new Boolean('1')));
    checkEqual(true, isBoolean(new Boolean('a')));
    checkEqual(true, isBoolean(new Boolean('true')));
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
    checkEqual(1,   Number(new Number('1')));
    checkEqual(1.1, Number(new Number('1.1')));

    checkEqual(true, isNumber(new Number()));
    checkEqual(true, isNumber(new Number('')));
    checkEqual(true, isNumber(new Number('1')));
    checkEqual(true, isNumber(new Number('1.1')));
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

    checkEqual(true,  isInteger(new Number()));
    checkEqual(true,  isInteger(new Number('')));
    checkEqual(true,  isInteger(new Number('1')));
    checkEqual(false, isInteger(new Number('1.1')));

    checkEqual(true,  isInteger(new Number(1)));
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
    checkEqual('1',   String(new String('1')));
    checkEqual('1.1', String(new String('1.1')));

    checkEqual(true, isString(new String()));
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
  test_objectToStringCheck();
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