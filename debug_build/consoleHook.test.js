"use strict";

var test_execute_consoleHook = function test_execute_consoleHook(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown;
  var consoleHook = parts.consoleHook;

  var test_consoleHook = function test_consoleHook(methodName) {
    var consoleOutput = '';

    var consoleHook_hook = function consoleHook_hook() {
      consoleHook._hook(methodName, function (args) {
        consoleOutput += args + ';';
      });
    };

    var consoleMethod = console.log;

    var testConsoleMethod = function testConsoleMethod() {
      console[methodName]('debug1');
      console[methodName]('debug2');
      console[methodName]('release1');
      console[methodName]('release2');
    };

    consoleOutput = '';
    consoleHook_hook();
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;debug2;release1;release2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['debug1'], [], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['debug'], [], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;debug2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['debug1', 'release1'], [], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;release1;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, [/debug?/], [], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;debug2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, [/debug?/], ['debug1'], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, [], ['release1'], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;debug2;release2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, [], [/debug?/], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('release1;release2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['debug1', 'debug2'], ['debug1'], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug2;', consoleOutput);

    var testConsoleMethod = function testConsoleMethod() {
      console[methodName]('debug1', 'a', 'messageA');
      console[methodName]('debug2', 'b', 'messageB');
      console[methodName]('release1', 'a', 'messageC');
      console[methodName]('release2', 'b', 'messageD');
    };

    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['debug', ' a '], [], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug1;debug2;release1;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['debug'], [' a '], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('debug2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, [' b '], ['messageB'], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('release2;', consoleOutput);
    consoleOutput = '';
    consoleHook_hook();
    consoleHook.accept(methodName, ['messageD'], [], console[methodName]);
    testConsoleMethod();

    consoleHook._unHook(methodName);

    checkEqual('release2;', consoleOutput);

    consoleHook._hook(methodName, consoleMethod);
  };

  console.log('  test consoleHook.js start.');
  test_consoleHook('log');
  test_consoleHook('info');
  test_consoleHook('warn');
  test_consoleHook('error');
  test_consoleHook('debug');
  console.log('  test consoleHook.js finish.');
};

module.exports = {
  test_execute_consoleHook: test_execute_consoleHook
};