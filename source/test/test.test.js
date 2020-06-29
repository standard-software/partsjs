/* eslint-disable no-throw-literal */
export const test_execute_test = (parts) => {
  const { checkEqual, describe, it, test, expect } = parts.test;
  describe('test_execute_test', () => {

    const {
      checkEqual,
      isThrown,
    } = parts.test;

    const test_isThrown = () => {
      it('test_isThrown', () => {
        checkEqual(true,  isThrown(
          function() { throw 1; },
          function(throwValue) { return throwValue === 1; }));
        checkEqual(false, isThrown(
          function() { throw 1; },
          function(throwValue) { return throwValue !== 1; }));
        checkEqual(false, isThrown(
          function() { throw 2; },
          function(throwValue) { return throwValue === 1; }));
        checkEqual(false, isThrown(
          function() { throw 1; },
          function(throwValue) { return throwValue === '1'; }));
        checkEqual(true,  isThrown(
          function() { throw '1'; },
          function(throwValue) { return throwValue === '1'; }));
        checkEqual(true,  isThrown(
          function() { throw ''; },
          function(throwValue) { return throwValue === ''; }));
        checkEqual(true,  isThrown(
          function() { throw { test: 'TEST' }; },
          function(throwValue) { return throwValue.test === 'TEST'; },
        ));
        checkEqual(false, isThrown(
          function() { throw { test: 'TEST' }; },
          function(throwValue) { return throwValue.test === 'test'; },
        ));

        checkEqual(false, isThrown(
          function() { }, function() { }));

        checkEqual(true,  isThrown(
          function() { throw 1; }));
        checkEqual(true,  isThrown(
          function() { throw '1'; }));
        checkEqual(false, isThrown(
          function() {  }));
      });
    };

    const test_expect = () => {
      it('test_expect', () => {
        expect(123).toBe(123);
        expect([1, 2, 3]).not.toBe([1, 2, 3]);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect([1, 2, 3]).not.toEqual([1, 2, 2]);
      });
    };

    test_isThrown();
    test_expect();
  });
};

export default {
  test_execute_test,
};
