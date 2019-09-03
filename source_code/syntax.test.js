const test_execute_syntax = (parts) => {

  const {
    checkEqual
  } = parts.test;

  const {
    isUndefined, isNull,
    isBoolean, isNumber, isInteger, isString,
    isFunction, isObject, isArray, isDate,
    isRegExp, isException,

    isNotUndefined, isNotNull,
    isNotBoolean, isNotNumber,isNotInteger, isNotString,
    isNotFunction, isNotObject, isNotArray, isNotDate,
    isNotRegExp, isNotException,

    isUndefinedArray, isNullArray,
    isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
    isFunctionArray, isObjectArray, isArrayArray, isDateArray,
    isRegExpArray, isExceptionArray,

    isNotUndefinedArray, isNotNullArray,
    isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
    isNotFunctionArray, isNotObjectArray, isNotArrayArray, isNotDateArray,
    isNotRegExpArray, isNotExceptionArray,

  } = parts.type;

  const {
    guard,
  } = parts.syntax;

  const test_guard = function () {
    var guardFunc = function() { return [
      isInteger(value1), [isInteger(value2), 'testmessage']
    ]; };
    {
      // no guard
      var result1 = false; var value1 = 1; var value2 = 2;
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(false, result1, 'test_guard 1');
      checkEqual('', guard.message());

      // guard
      {
        var result1 = false; var value1 = '1'; var value2 = 2;
        if (guard(guardFunc)) { result1 = true; }
        checkEqual(true, result1, 'test_guard 2');
        checkEqual('', guard.message());

        var result1 = false; var value1 = 1; var value2 = '2';
        if (guard(guardFunc)) { result1 = true; }
        checkEqual(true, result1, 'test_guard 3');
        checkEqual('testmessage', guard.message());
      }

      // guard no run
      guard.off();
      {
        var result1 = false; var value1 = '1'; var value2 = 2;
        if (guard(guardFunc)) { result1 = true; }
        checkEqual(false, result1, 'test_guard 4');
        checkEqual('', guard.message());

        var result1 = false; var value1 = 1; var value2 = '2';
        if (guard(guardFunc)) { result1 = true; }
        checkEqual(false, result1, 'test_guard 5');
        checkEqual('', guard.message());
      }
      guard.on();
    }

    var guardFunc = function() { return [
      isInteger(value1), isArray(value2), 1 <= value2.length
    ]; };
    {
      var result1 = false; var value1 = 1; var value2 = [1];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(false, result1, 'test_guard 6');

      var result1 = false; var value1 = 1; var value2 = [];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 7');

      var result1 = false; var value1 = [1]; var value2 = [1];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 8');
    }

    var guardFunc = function() { return [
      isArray(value1),
      [1 <= value1.length],
      [value1[0] === 1, 'value1[0]error'],
      function() { return isArray(value2); },
      [function() { return 2 <= value2.length; }],
      [function() { return value2[0] === 1; }, 'value2[0]error'],
    ]; };
    {
      var result1 = false; var value1 = [1]; var value2 = [1, 2];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(false, result1, 'test_guard 9');
      checkEqual('', guard.message());

      var result1 = false; var value1 = 1; var value2 = [1, 2];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 10');
      checkEqual('', guard.message());

      var result1 = false; var value1 = []; var value2 = [1, 2];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 11');
      checkEqual('', guard.message());

      var result1 = false; var value1 = [2]; var value2 = [1, 2];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 12');
      checkEqual('value1[0]error', guard.message());

      var result1 = false; var value1 = [1]; var value2 = '[1,2]';
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 13');
      checkEqual('', guard.message());

      var result1 = false; var value1 = [1]; var value2 = [1];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 14');
      checkEqual('', guard.message());

      var result1 = false; var value1 = [1]; var value2 = [2, 2];
      if (guard(guardFunc)) { result1 = true; }
      checkEqual(true, result1, 'test_guard 15');
      checkEqual('value2[0]error', guard.message());
    }
  };

  console.log('test syntax start.');
  test_guard();
  console.log('test syntax finish.');
}

module.exports = {
  test_execute_syntax,
};