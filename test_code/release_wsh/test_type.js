var test_execute_type = function(parts) {

  var checkEqual = parts.test.checkEqual;

  var isUndefined         = parts.type.isUndefined;
  var isNull          = parts.type.isNull;
  var isBoolean         = parts.type.isBoolean;
  var isNumber          = parts.type.isNumber;
  var isInteger         = parts.type.isInteger;
  var isString          = parts.type.isString;
  var isFunction          = parts.type.isFunction;
  var isObject          = parts.type.isObject;
  var isArray         = parts.type.isArray;
  var isDate          = parts.type.isDate;
  var isRegExp          = parts.type.isRegExp;
  var isException         = parts.type.isException;

  var isNotUndefined          = parts.type.isNotUndefined;
  var isNotNull         = parts.type.isNotNull;
  var isNotBoolean          = parts.type.isNotBoolean;
  var isNotNumber         = parts.type.isNotNumber;
  var isNotInteger          = parts.type.isNotInteger;
  var isNotString         = parts.type.isNotString;
  var isNotFunction         = parts.type.isNotFunction;
  var isNotObject         = parts.type.isNotObject;
  var isNotArray          = parts.type.isNotArray;
  var isNotDate         = parts.type.isNotDate;
  var isNotRegExp         = parts.type.isNotRegExp;
  var isNotException          = parts.type.isNotException;

  var isUndefinedArray          = parts.type.isUndefinedArray;
  var isNullArray         = parts.type.isNullArray;
  var isBooleanArray          = parts.type.isBooleanArray;
  var isNumberArray         = parts.type.isNumberArray;
  var isIntegerArray          = parts.type.isIntegerArray;
  var isStringArray         = parts.type.isStringArray;
  var isFunctionArray         = parts.type.isFunctionArray;
  var isObjectArray         = parts.type.isObjectArray;
  var isArrayArray          = parts.type.isArrayArray;
  var isDateArray         = parts.type.isDateArray;
  var isRegExpArray         = parts.type.isRegExpArray;
  var isExceptionArray          = parts.type.isExceptionArray;

  var isNotUndefinedArray         = parts.type.isNotUndefinedArray;
  var isNotNullArray          = parts.type.isNotNullArray;
  var isNotBooleanArray         = parts.type.isNotBooleanArray;
  var isNotNumberArray          = parts.type.isNotNumberArray;
  var isNotIntegerArray         = parts.type.isNotIntegerArray;
  var isNotStringArray          = parts.type.isNotStringArray;
  var isNotFunctionArray          = parts.type.isNotFunctionArray;
  var isNotObjectArray          = parts.type.isNotObjectArray;
  var isNotArrayArray         = parts.type.isNotArrayArray;
  var isNotDateArray          = parts.type.isNotDateArray;
  var isNotRegExpArray          = parts.type.isNotRegExpArray;
  var isNotExceptionArray         = parts.type.isNotExceptionArray;


  var test_isUndefined = function() {
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

  var test_isNull = function() {
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

  var test_isBoolean = function() {
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
  };

  var test_isNumber = function() {
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
  };

  var test_isInteger = function() {
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
    checkEqual(true, isNotInteger(1.1, 2.2, 3.5));

    checkEqual(false, isIntegerArray([]));
    checkEqual(true, isIntegerArray([1]));
    checkEqual(true, isIntegerArray([1, 2, 3]));
    checkEqual(true, isIntegerArray([1, 2, 0]));
    checkEqual(false, isIntegerArray([1, 2, NaN]));
    checkEqual(false, isIntegerArray([1, 2, null]));
    checkEqual(false, isIntegerArray(['a', 'b', 1]));
  };

  var test_isString = function() {
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
  };

  var test_isFunction = function() {

    checkEqual(true, isFunction(function() { }));
    checkEqual(false, isFunction({}));

    checkEqual(true, isFunction(function() { }, test_isFunction));
    checkEqual(false, isFunction({}, test_isFunction));

    checkEqual(true, isFunctionArray(
      [function() { }, test_isFunction]));
    checkEqual(false, isFunctionArray(
      [{}, test_isFunction]));

  };

  var test_isObject = function() {
    checkEqual(true, isObject({}));
    checkEqual(false, isObject([]));
    checkEqual(false, isObject(null));
    checkEqual(false, isObject(undefined));

    checkEqual(true, isObject({}));
    checkEqual(true, isObject({ a: 0 }));
    checkEqual(true, isObject({ a: 0, b: 1 }));
    checkEqual(true, isObjectArray([{}, { a: 0, b: 1 }]));
    checkEqual(false, isObjectArray([[], { a: 0, b: 1 }]));
    checkEqual(false, isObjectArray([[{}], { a: 0, b: 1 }]));

    checkEqual(true, isObject({ a: 0, b: 1 }, { c: 0, d: 1 }));

    checkEqual(false, isObject([]));
    checkEqual(false, isObject(null));
    checkEqual(false, isObject(undefined));
    checkEqual(false, isObject(function() { }));
  };

  var test_isArray = function() {
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

  var test_isDate = function() {
    checkEqual(true, isDate(new Date(2017, 1, 1)));
    checkEqual(true, isDate(new Date('2017/01')));
    checkEqual(true, isDate(new Date(2017, 1)));
    checkEqual(true, isDate(new Date(2017, 1)));
  };

  var test_isExcection = function() {
    checkEqual(true, isException({ name: '', message: '' }));
    checkEqual(false, isException({ name: '' }));
    checkEqual(false, isException({ message: '' }));

    checkEqual(true, isException(new Error()));
    checkEqual(true, isException(new TypeError()));
    checkEqual(true, isException(new SyntaxError()));
    checkEqual(true, isException(new ReferenceError()));

    var UserException = function(message) {
      this.message = message;
      this.name = 'UserException';
    }
    checkEqual(true, isException(new UserException('message')));
  };
};

module.exports = {
  test_execute_type: test_execute_type
};
