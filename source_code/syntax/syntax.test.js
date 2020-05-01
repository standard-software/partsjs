/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_syntax = (parts) => {
  const { checkEqual, describe, it, test } = parts.test;
  describe('test_execute_syntax', () => {

    const {
      checkEqual,
      isThrown,
      isThrownValue,
      isThrownException,
      isNotThrown,
    } = parts.test;

    const {
      isUndefinedAll, isNullAll,
      isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
      isFunctionAll, isObjectAll, isArrayAll, isDateAll,
      isRegExpAll, isExceptionAll,

      isNotUndefinedAll, isNotNullAll,
      isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
      isNotFunctionAll, isNotObjectAll, isNotArrayAll, isNotDateAll,
      isNotRegExpAll, isNotExceptionAll,

    } = parts.type;

    const {
      guard,
      sc,
      if_,
      switch_,
      canUseMap,
      canUseSet,
    } = parts.syntax;

    const {
      equal,
      or,
    } = parts.compare;

    const test_guard = function() {
      it('test_guard', () => {

        var guardFunc = () => [
          isIntegerAll(value1), [isIntegerAll(value2), 'testmessage'],
        ];
        {
          // no guard
          {
            var result1 = false; var value1 = 1; var value2 = 2;
            if (guard(guardFunc)) { result1 = true; }
            checkEqual(false, result1, 'no guard');
            checkEqual('', guard.message());
          }

          // guard
          {
            var result1 = false; var value1 = '1'; var value2 = 2;
            if (guard(guardFunc)) { result1 = true; }
            checkEqual(true, result1, 'guard 1');
            checkEqual('', guard.message());

            var result1 = false; var value1 = 1; var value2 = '2';
            if (guard(guardFunc)) { result1 = true; }
            checkEqual(true, result1, 'guard 2');
            checkEqual('testmessage', guard.message());
          }

          // guard no run
          guard.off();
          {
            var result1 = false; var value1 = '1'; var value2 = 2;
            if (guard(guardFunc)) { result1 = true; }
            checkEqual(false, result1, 'guard off 1');
            checkEqual('', guard.message());

            var result1 = false; var value1 = 1; var value2 = '2';
            if (guard(guardFunc)) { result1 = true; }
            checkEqual(false, result1, 'guard off 2');
            checkEqual('', guard.message());
          }
          guard.on();
        }

        // guard array length
        var guardFunc = () => [
          isIntegerAll(value1),
          isArrayAll(value2),
          1 <= value2.length,
        ];
        {
          var result1 = false; var value1 = 1; var value2 = [1];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(false, result1, 'guard array length 1');

          var result1 = false; var value1 = 1; var value2 = [];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array length 2');

          var result1 = false; var value1 = [1]; var value2 = [1];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array length 3');
        }

        // guard array value etc
        var guardFunc = () => [
          isArrayAll(value1),
          [1 <= value1.length],
          [value1[0] === 1, 'value1[0]error'],
          function() { return isArrayAll(value2); },
          [function() { return 2 <= value2.length; }],
          [function() { return value2[0] === 1; }, 'value2[0]error'],
        ];
        {
          var result1 = false; var value1 = [1]; var value2 = [1, 2];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(false, result1, 'guard array value etc 1');
          checkEqual('', guard.message());

          var result1 = false; var value1 = 1; var value2 = [1, 2];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array value etc 2');
          checkEqual('', guard.message());

          var result1 = false; var value1 = []; var value2 = [1, 2];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array value etc 3');
          checkEqual('', guard.message());

          var result1 = false; var value1 = [2]; var value2 = [1, 2];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array value etc 4');
          checkEqual('value1[0]error', guard.message());

          var result1 = false; var value1 = [1]; var value2 = '[1,2]';
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array value etc 5');
          checkEqual('', guard.message());

          var result1 = false; var value1 = [1]; var value2 = [1];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array value etc 6');
          checkEqual('', guard.message());

          var result1 = false; var value1 = [1]; var value2 = [2, 2];
          if (guard(guardFunc)) { result1 = true; }
          checkEqual(true, result1, 'guard array value etc 7');
          checkEqual('value2[0]error', guard.message());
        }

        // gurad exception args1
        {
          checkEqual(true, isNotThrown(
            () => guard(() => []),
          ));
          checkEqual(true, isThrownException(
            () => guard(123),
            (new TypeError).name,
          ));
          checkEqual(true, isThrown(
            () => guard(123),
          ));
          checkEqual(true, isThrown(
            () => guard(123),
            (e) => {
              return e.message ===
            'guard args(guardFunc) is not function';
            },
          ), 'gurad exception args1 4');
        }
        // (new SyntaxError).name
        // environment
        //  normal: 'SyntaxError'
        //  wsh:    'Error'

        // gurad exception args1 result
        {
          checkEqual(true, isThrownException(
            () => guard(() => 123),
            (new TypeError).name,
          ));
          checkEqual(true, isThrown(
            () => guard(() => 123),
          ));
          checkEqual(true, isThrown(
            () => guard(() => 123),
            (e) => e.message ===
          'guard args(guardFunc result) is not array',
          ));
        }

        // gurad exception args1 function result array
        var value1 = 1; var value2 = 2;

        var guardFunc = () => [
          isIntegerAll(value1),
          [isIntegerAll(value2), 'testmessage'],
        ];
        checkEqual(true, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception args1 function result array 1');

        var guardFunc = () => [
          isIntegerAll(value1),
          [isIntegerAll(value2)],
        ];
        checkEqual(true, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception args1 function result array 2');

        var guardFunc = () => [
          isIntegerAll(value1),
          [],
        ];
        checkEqual(false, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception args1 function result array 3');
        checkEqual(true, isThrown(
          () => guard(guardFunc),
          (e) => e.message ===
        'guard args(guardFunc resultArray element) is not array.length >= 1',
        ), 'gurad exception args1 function result array 3-2');

        var guardFunc = () => [
          [isIntegerAll(value2), 'testmessage'],
          isIntegerAll(value1),
        ];
        checkEqual(true, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception args1 function result array 4');

        var guardFunc = () => [
          [isIntegerAll(value2)],
          isIntegerAll(value1),
        ];
        checkEqual(true, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception args1 function result array 5');

        var guardFunc = () => [
          [],
          isIntegerAll(value1),
        ];
        checkEqual(false, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception args1 function result array 6');
        checkEqual(true, isThrown(
          () => guard(guardFunc),
          (e) => e.message ===
        'guard args(guardFunc resultArray element) is not array.length >= 1',
        ), 'gurad exception args1 function result array 6-2');

        // gurad exception function result array function result

        var guardFunc = () => [
          () => true,
          [() => true],
        ];
        checkEqual(true, isNotThrown(
          () => guard(guardFunc),
        ), 'gurad exception function result array function result 1');

        var guardFunc = () => [
          () => 123,
          [() => true],
        ];
        checkEqual(true, isThrown(
          () => guard(guardFunc),
          (e) => e.message ===
        'guard args(guardFunc resultArray element value) is not boolean',
        ), 'gurad exception function result array function result 2');

        var guardFunc = () => [
          () => true,
          [() => 123],
        ];
        checkEqual(true, isThrown(
          () => guard(guardFunc),
          (e) => e.message ===
        'guard args(guardFunc resultArray element value) is not boolean',
        ), 'gurad exception function result array function result 3');

        // gurad exception args2
        var guardFunc = () => [
          () => false,
          [() => true],
        ];
        checkEqual(true, isNotThrown(
          () => guard(guardFunc, () => {}),
        ), 'gurad exception args2(runFunc) 1');

        checkEqual(false, isNotThrown(
          () => guard(guardFunc, 'test'),
        ), 'gurad exception args2(runFunc) 2');

      });
    };

    const test_sc = () => {
      it('test_sc', () => {
        checkEqual(true, sc(1, equal, 1));
        checkEqual(false, sc(1, equal, 2));
        checkEqual(true, sc('1', equal, '1'));
        checkEqual(false, sc(1, equal, '1'));
        checkEqual(false, sc('1', equal, 1));

        checkEqual(true, sc(1, or, [1, 2]));
        checkEqual(false, sc(0, or, [1, 2]));
      });
    };

    const test_if_ = function() {
      it('test_if_', () => {

        // { then: value, else: value }
        checkEqual('THEN',
          if_(true)({
            then: 'THEN',
            else: 'ELSE',
          }),
        );
        checkEqual('ELSE',
          if_(false)({
            then: 'THEN',
            else: 'ELSE',
          }),
        );
        checkEqual('THEN',
          if_(true)({
            then: 'THEN',
          }),
        );
        checkEqual(undefined,
          if_(false)({
            then: 'ELSE',
          }),
        );
        checkEqual(undefined,
          if_(true)({
            else: 'ELSE',
          }),
        );
        checkEqual('ELSE',
          if_(false)({
            else: 'ELSE',
          }),
        );

        // { then: function, else: function }
        checkEqual('THEN',
          if_(true)({
            then: () => 'THEN',
            else: () => 'ELSE',
          }),
        );
        checkEqual('ELSE',
          if_(false)({
            then: () => 'THEN',
            else: () => 'ELSE',
          }),
        );
        checkEqual('THEN',
          if_(true)({
            then: () => 'THEN',
          }),
        );
        checkEqual(undefined,
          if_(false)({
            then: () => 'THEN',
          }),
        );
        checkEqual(undefined,
          if_(true)({
            else: () => 'ELSE',
          }),
        );
        checkEqual('ELSE',
          if_(false)({
            else: () => 'ELSE',
          }),
        );

        // (value, value)
        checkEqual('THEN',
          if_(true)('THEN', 'ELSE'),
        );
        checkEqual('ELSE',
          if_(false)('THEN', 'ELSE'),
        );
        checkEqual('THEN',
          if_(true)('THEN'),
        );
        checkEqual(undefined,
          if_(false)('THEN'),
        );
        checkEqual(undefined,
          if_(true)(undefined, 'ELSE'),
        );
        checkEqual('ELSE',
          if_(false)(undefined, 'ELSE'),
        );

        // (function, function)
        checkEqual('THEN',
          if_(true)(() => 'THEN', () => 'ELSE'),
        );
        checkEqual('ELSE',
          if_(false)(() => 'THEN', () => 'ELSE'),
        );
        checkEqual('THEN',
          if_(true)(() => 'THEN'),
        );
        checkEqual(undefined,
          if_(false)(() => 'THEN'),
        );
        checkEqual(undefined,
          if_(true)(undefined, () => 'ELSE'),
        );
        checkEqual('ELSE',
          if_(false)(undefined, () => 'ELSE'),
        );

        // .then(value).else(value)
        checkEqual('THEN',
          if_(true).then('THEN').else('ELSE'),
        );
        checkEqual('ELSE',
          if_(false).then('THEN').else('ELSE'),
        );
        checkEqual('THEN',
          if_(true).then('THEN').else(),
        );
        checkEqual(undefined,
          if_(false).then('THEN').else(),
        );
        checkEqual(undefined,
          if_(true).then().else('ELSE'),
        );
        checkEqual('ELSE',
          if_(false).then().else('ELSE'),
        );

        // .then(function).else(function)
        checkEqual('THEN',
          if_(true).then(() => 'THEN').else(() => 'ELSE'),
        );
        checkEqual('ELSE',
          if_(false).then(() => 'THEN').else(() => 'ELSE'),
        );
        checkEqual('THEN',
          if_(true).then(() => 'THEN').else(),
        );
        checkEqual(undefined,
          if_(false).then(() => 'THEN').else(),
        );
        checkEqual(undefined,
          if_(true).then().else(() => 'ELSE'),
        );
        checkEqual('ELSE',
          if_(false).then().else(() => 'ELSE'),
        );

        // .else(value).then(value)
        checkEqual('THEN',
          if_(true).else('ELSE').then('THEN'),
        );
        checkEqual('ELSE',
          if_(false).else('ELSE').then('THEN'),
        );
        checkEqual('THEN',
          if_(true).else().then('THEN'),
        );
        checkEqual(undefined,
          if_(false).else().then('THEN'),
        );
        checkEqual(undefined,
          if_(true).else('ELSE').then(),
        );
        checkEqual('ELSE',
          if_(false).else('ELSE').then(),
        );

        // .else(function).then(function)
        checkEqual('THEN',
          if_(true).else(() => 'ELSE').then(() => 'THEN'),
        );
        checkEqual('ELSE',
          if_(false).else(() => 'ELSE').then(() => 'THEN'),
        );
        checkEqual('THEN',
          if_(true).else().then(() => 'THEN'),
        );
        checkEqual(undefined,
          if_(false).else().then(() => 'THEN'),
        );
        checkEqual(undefined,
          if_(true).else(() => 'ELSE').then(),
        );
        checkEqual('ELSE',
          if_(false).else(() => 'ELSE').then(),
        );

      });
    };

    const test_switch_ = function() {
      it('test_switch_', () => {
        var switchResultValue1 = [
          [1, 'number 1'],
          ['1', 'string 1'],
        ];
        checkEqual('number 1', switch_(1)(switchResultValue1));
        checkEqual('string 1', switch_('1')(switchResultValue1));
        checkEqual(undefined, switch_(2)(switchResultValue1));

        var switchResultValue2 = [
          [1, 'number 1'],
          ['1', 'string 1'],
          ['default'],
        ];
        checkEqual('number 1', switch_(1)(switchResultValue2));
        checkEqual('string 1', switch_('1')(switchResultValue2));
        checkEqual('default', switch_(2)(switchResultValue2));

        var switchResultValue3 = [
          [1, 'number 1'],
          ['1', 'string 1'],
          [],
        ];
        checkEqual('number 1', switch_(1)(switchResultValue3));
        checkEqual('string 1', switch_('1')(switchResultValue3));
        checkEqual(undefined, switch_(2)(switchResultValue3));

        // Error
        var switchResultValue4 = [
          [1, '1'],
          'default',
        ];
        checkEqual(true, isThrownException(
          function() { switch_(1)(switchResultValue4); },
          (new TypeError).name,
        ));
        checkEqual(true, isThrownException(
          function() { switch_(2)(switchResultValue4); },
          (new TypeError).name,
        ));

        var switchResultFunc1 = [
          [1, function() { return 'number 1'; }],
          ['1', function() { return 'string 1'; }],
        ];
        checkEqual('number 1', switch_(1)(switchResultFunc1));
        checkEqual('string 1', switch_('1')(switchResultFunc1));
        checkEqual(undefined, switch_(2)(switchResultFunc1));

        var switchResultFunc2 = [
          [1, function() { return 'number 1'; }],
          ['1', function() { return 'string 1'; }],
          [function() { return 'default'; }],
        ];
        checkEqual('number 1', switch_(1)(switchResultFunc2));
        checkEqual('string 1', switch_('1')(switchResultFunc2));
        checkEqual('default', switch_(2)(switchResultFunc2));

        var switchResultFunc3 = [
          [1, 'number 1'],
          ['1', 'string 1'],
          [function() { }],
        ];
        checkEqual('number 1', switch_(1)(switchResultFunc3));
        checkEqual('string 1', switch_('1')(switchResultFunc3));
        checkEqual(undefined, switch_(2)(switchResultFunc3));
      });
    };

    const test_canUseMap = function() {
      it('test_canUseMap', () => {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseMap());
        } else {
          checkEqual(true,  canUseMap());
        }
      });
    };

    const test_canUseSet = function() {
      it('test_canUseSet', () => {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseSet());
        } else {
          checkEqual(true,  canUseSet());
        }
      });
    };

    test_guard();
    test_sc();
    test_if_();
    test_switch_();
    test_canUseMap();
    test_canUseSet();
  });
};

module.exports = {
  test_execute_syntax,
};
