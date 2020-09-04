/* eslint-disable max-len */
/* eslint-disable no-var */
export const test_execute_syntax = (parts) => {
  const { checkEqual, describe, it, test, expect } = parts.test;
  describe('test_execute_syntax', () => {

    const {
      isThrown,
      isThrownValue,
      isThrownException,
      isNotThrown,
    } = parts.test;

    const {
      isUndefined, isNull,
      isBoolean, isNumber, isInteger, isString,
      isFunction, isObject, isArray, isDate,
      isRegExp, isException,

      isUndefinedAll, isNullAll,
      isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
      isFunctionAll, isObjectAll, isArrayAll, isDateAll,
      isRegExpAll, isExceptionAll,

    } = parts.type;

    const {
      assert,
      guard,
      sc,
      if_,
      switch_,
      canUseMap, canUseWeakMap,
      canUseSet, canUseWeakSet,
      Enum,
    } = parts.syntax;

    const {
      equal,
      or,
    } = parts.compare;

    const test_assert = () => {
      it('test_assert', () => {
        checkEqual(false, isThrown(() => {
          assert(true);
        }));
        checkEqual(false, isThrown(() => {
          assert(true, 'test');
        }));
        checkEqual(true, isThrown(() => {
          assert(false);
        }));
        checkEqual(true, isThrown(() => {
          assert(false, 'test');
        }));
        checkEqual(true, isThrown(() => {
          assert(false);
        }, (e) => {
          // console.log(e);
          return (
            e.name === 'Error'
            && e.message === 'assert error value:false'
          );
        }));
        checkEqual(true, isThrown(() => {
          assert(false, 'test');
        }, (e) => {
          // console.log(e);
          return (
            e.name === 'Error'
            && e.message === 'assert error value:false message:test'
          );
        }));

        // object parameter
        checkEqual(false, isThrown(() => {
          assert({ value: true });
        }));
        checkEqual(false, isThrown(() => {
          assert({ value: true, message: 'test' });
        }));
        checkEqual(true, isThrown(() => {
          assert({ value: false });
        }));
        checkEqual(true, isThrown(() => {
          assert({ value: false, message: 'test' });
        }));
        checkEqual(true, isThrown(() => {
          assert({ value: false });
        }, (e) => {
          // console.log(e);
          return (
            e.name === 'Error'
            && e.message === 'assert error value:false'
          );
        }));
        checkEqual(true, isThrown(() => {
          assert({ value: false, message: 'test' });
        }, (e) => {
          // console.log(e);
          return (
            e.name === 'Error'
            && e.message === 'assert error value:false message:test'
          );
        }));

        // exception TypeError
        checkEqual(true, isThrown(() => {
          assert(0);
        }, (e) => {
          // console.log(e);
          return (
            e.name === (new TypeError).name
            && e.message === 'assert args(value) is not boolean. value:0'
          );
        }));
        checkEqual(true, isThrown(() => {
          assert(0, 'abc');
        }, (e) => {
          // console.log(e);
          return (
            e.name === (new TypeError).name
            && e.message === 'assert args(value) is not boolean. value:0 message:abc'
          );
        }));

        checkEqual(true, isThrown(() => {
          assert(false, 100);
        }, (e) => {
          // console.log(e);
          return (
            e.name === (new TypeError).name
            && e.message === 'assert args(message) is not string. value:false message:100'
          );
        }));
      });
    };

    const test_guard = () => {
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

    const test_if_ = () => {
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

    const test_switch_ = () => {
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

    const test_loop = () => {
      it('test_loop', () => {

        let outputConsoleText = '';
        const console_log = (...args) => {
          for (const arg of args) {
            if (isArray(arg)) {
              let argsText = '';
              for (const element of arg) {
                if (isArray(element)) {
                  argsText += `[${element}],`;
                } else {
                  argsText += `${element},`;
                }
              }
              argsText = parts.string.deleteLast(argsText, 1);
              outputConsoleText += `[${argsText}] `;
            } else {
              outputConsoleText += `${arg} `;
            }
          }
          outputConsoleText += '\n';
        };

        outputConsoleText = '';
        {
          // 3 times loop
          parts.loop(3)((
            e, i, array, first, last,
          ) => {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual(
          '0 0 [0,1,2] true false \n' +
          '1 1 [0,1,2] false false \n' +
          '2 2 [0,1,2] false true \n' +
        '');

        outputConsoleText = '';
        {
          // 1 to 3 loop
          parts.loop(1, 3)((
            e, i, array, first, last,
          ) => {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual(
          '1 0 [1,2,3] true false \n' +
          '2 1 [1,2,3] false false \n' +
          '3 2 [1,2,3] false true \n' +
        '');

        outputConsoleText = '';
        {
          // 1 times loop : first last flag
          parts.loop(1)((
            e, i, array, first, last,
          ) => {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual(
          '0 0 [0] true true \n' +
        '');

        outputConsoleText = '';
        {
          // 1 to 10 step 2 loop and continue and break
          parts.loop(1, 10, 2)((e, i, array, first, last) => {
            if (i === 1) {
              return;
            }
            console_log(e, i, array, first, last);
            if (i === 3) {
              return { break: true };
            }
          });
        }
        expect(outputConsoleText).toEqual(
          '1 0 [1,3,5,7,9] true false \n' +
          '5 2 [1,3,5,7,9] false false \n' +
          '7 3 [1,3,5,7,9] false false \n' +
        '');

        outputConsoleText = '';
        {
          // double loop
          parts.loop(3)((
            e, j, array, first, last,
          ) => {
            parts.loop(3)((
              e, i, array, first, last,
            ) => {
              console_log(e, i, array, first, last, j);
            });
          });
        }
        expect(outputConsoleText).toEqual(
          '0 0 [0,1,2] true false 0 \n' +
          '1 1 [0,1,2] false false 0 \n' +
          '2 2 [0,1,2] false true 0 \n' +
          '0 0 [0,1,2] true false 1 \n' +
          '1 1 [0,1,2] false false 1 \n' +
          '2 2 [0,1,2] false true 1 \n' +
          '0 0 [0,1,2] true false 2 \n' +
          '1 1 [0,1,2] false false 2 \n' +
          '2 2 [0,1,2] false true 2 \n' +
        '');

        outputConsoleText = '';
        {
          // Break from a double loop
          parts.loop(3)((
            e, j, array, first, last,
          ) => {
            const loopResult = parts.loop(3)((
              e, i, array, first, last,
            ) => {
              console_log(e, i, array, first, last, j);
              if (i === 0) {
                console_log('continue');
                return;
              }
              if (i === 1) {
                console_log('break');
                return { break: true, parentLoopCounter: j };
              }
            });
            if (loopResult.break === true) {
              console_log('return break');
              if (loopResult.parentLoopCounter === 1) {
                console_log('break the double loop');
                return { break: true };
              } else {
                console_log('continue the double loop');
              }
            }
          });
        }
        expect(outputConsoleText).toEqual(
          '0 0 [0,1,2] true false 0 \n' +
          'continue \n' +
          '1 1 [0,1,2] false false 0 \n' +
          'break \n' +
          'return break \n' +
          'continue the double loop \n' +
          '0 0 [0,1,2] true false 1 \n' +
          'continue \n' +
          '1 1 [0,1,2] false false 1 \n' +
          'break \n' +
          'return break \n' +
          'break the double loop \n' +
        '');

        outputConsoleText = '';
        {
          // loop array
          parts.loop(['A', 'B', 'C'])((
            e, i, array, first, last,
          ) => {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual(
          'A 0 [A,B,C] true false \n' +
          'B 1 [A,B,C] false false \n' +
          'C 2 [A,B,C] false true \n' +
        '');

        outputConsoleText = '';
        {
          // loop object
          parts.loop({a: 'A', b: 'B', c: 'C'})((
            e, i, array, first, last,
          ) => {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual(
          '[a,A] 0 [[a,A],[b,B],[c,C]] true false \n' +
          '[b,B] 1 [[a,A],[b,B],[c,C]] false false \n' +
          '[c,C] 2 [[a,A],[b,B],[c,C]] false true \n' +
        '');

      });
    };

    const test_canUseMap = () => {
      it('test_canUseMap', () => {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseMap());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseMap());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true,  canUseMap());
        } else {
          checkEqual(true,  canUseMap());
        }
      });
    };

    const test_canUseWeakMap = () => {
      it('test_canUseWeakMap', () => {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseWeakMap());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseWeakMap());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true,  canUseWeakMap());
        } else {
          checkEqual(true,  canUseWeakMap());
        }
      });
    };

    const test_canUseSet = () => {
      it('test_canUseSet', () => {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseSet());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseSet());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true,  canUseSet());
        } else {
          checkEqual(true,  canUseSet());
        }
      });
    };

    const test_canUseWeakSet = () => {
      it('test_canUseWeakSet', () => {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseWeakSet());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseWeakSet());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(false, canUseWeakSet());
        } else {
          checkEqual(true,  canUseWeakSet());
        }
      });
    };

    const test_Enum = () => {
      it('test_Enum', () => {
        checkEqual({a: 'a', b: 'b', c: 'c'}, Enum(['a', 'b', 'c']));
        checkEqual({a: 0, b: 1, c: 2}, Enum(['a', 'b', 'c'], true));
        checkEqual({a: 2, b: 1, c: 0}, Enum(['c', 'b', 'a'], true));

        // object parameter
        checkEqual({a: 'a', b: 'b', c: 'c'},
          Enum({ values: ['a', 'b', 'c'] }),
        );
        checkEqual({a: 0, b: 1, c: 2},
          Enum({ values: ['a', 'b', 'c'], useIndex: true }),
        );
        checkEqual({a: 0, b: 1, c: 2},
          Enum(['a', 'b', 'c'], { useIndex: true }),
        );

        checkEqual({a: 'a', b: 'b', c: 'c'}, new Enum(['a', 'b', 'c']));
        checkEqual({a: 0, b: 1, c: 2}, new Enum(['a', 'b', 'c'], true));
        checkEqual({a: 'a', b: 'b', c: 'c'},
          new Enum({ values: ['a', 'b', 'c'] }),
        );
        checkEqual({a: 0, b: 1, c: 2},
          new Enum({ values: ['a', 'b', 'c'], useIndex: true }),
        );
        checkEqual({a: 0, b: 1, c: 2},
          new Enum(['a', 'b', 'c'], { useIndex: true }),
        );

        // exception TypeError
        checkEqual(false, isThrown(() => {
          Enum(['a', 'b', 'c']);
        }));
        checkEqual(true, isThrown(() => {
          Enum([0, 'b', 'c']);
        }));
      });
    };

    test_assert();
    test_guard();
    test_sc();
    test_if_();
    test_switch_();
    test_loop();

    test_canUseMap();
    test_canUseWeakMap();
    test_canUseSet();
    test_canUseWeakSet();

    test_Enum();
  });
};

export default {
  test_execute_syntax,
};
