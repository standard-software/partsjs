/* eslint-disable no-throw-literal */
/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_test = (parts) => {

  const {
    checkEqual,
    isThrown,
  } = parts.test;

  const test_isThrown = () => {
    checkEqual(true, isThrown(function() { throw 1; }, function(throwValue) { return throwValue === 1; }));
    checkEqual(false, isThrown(function() { throw 1; }, function(throwValue) { return throwValue !== 1; }));
    checkEqual(false, isThrown(function() { throw 2; }, function(throwValue) { return throwValue === 1; }));
    checkEqual(false, isThrown(function() { throw 1; }, function(throwValue) { return throwValue === '1'; }));
    checkEqual(true, isThrown(function() { throw '1'; }, function(throwValue) { return throwValue === '1'; }));
    checkEqual(true, isThrown(function() { throw ''; }, function(throwValue) { return throwValue === ''; }));
    checkEqual(true, isThrown(function() { throw { test: 'TEST' }; }, function(throwValue) { return throwValue.test === 'TEST'; }));
    checkEqual(false, isThrown(function() { throw { test: 'TEST' }; }, function(throwValue) { return throwValue.test === 'test'; }));

    checkEqual(false, isThrown(function() { }, function() { }));

    checkEqual(true, isThrown(function() { throw 1; }));
    checkEqual(true, isThrown(function() { throw '1'; }));
    checkEqual(false, isThrown(function() {  }));
  };

  console.log('  test test.js');
  test_isThrown();
};

module.exports = {
  test_execute_test,
};
