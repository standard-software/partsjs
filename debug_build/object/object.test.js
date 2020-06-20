"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_object = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_object', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$object = parts.object,
        copyProperty = _parts$object.copyProperty,
        inProperty = _parts$object.inProperty,
        propertyCount = _parts$object.propertyCount,
        getProperty = _parts$object.getProperty,
        setProperty = _parts$object.setProperty,
        isEmptyObjectAll = _parts$object.isEmptyObjectAll,
        isObjectParameter = _parts$object.isObjectParameter,
        objectToKeyValueArray = _parts$object.objectToKeyValueArray;

    var test_copyProperty = function test_copyProperty() {
      it('test_copyProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2',
          c: '3'
        };
        var destObject = {};
        copyProperty(sourceObject, 'a', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,b', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(true, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,c,', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(true, 'c' in destObject); // Object Named Parameter

        var destObject = {};
        copyProperty({
          fromObject: sourceObject,
          propertyArray: 'a',
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject); // exception

        checkEqual(false, isThrown(function () {
          copyProperty({}, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty(1, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 1, {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 'a', 1);
        }));
      });
    };

    var test_inProperty = function test_inProperty() {
      it('test_inProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,')); // Object Named Parameter

        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPathArray: 'b,a'
        }));
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPathArray: 'd'
        })); // exception

        checkEqual(false, isThrown(function () {
          inProperty({}, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty(1, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, 1);
        }));
        checkEqual(false, isThrown(function () {
          inProperty({}, ['a']);
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, [1]);
        }));
        var sourceObject = {
          a: '1',
          b: undefined
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        var sourceObject = {
          a: '1'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(false, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));

        function First() {
          this.a = '1';
          this.b = '2';
        }

        function Second() {
          this.c = '3';
        }

        First.prototype = new Second();
        Second.prototype.d = '4';
        var sourceObject = new First();
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        testCounter();
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,'));
        checkEqual(true, inProperty(sourceObject, 'a', false));
        checkEqual(true, inProperty(sourceObject, 'b', false));
        checkEqual(true, inProperty(sourceObject, 'c', false));
        checkEqual(true, inProperty(sourceObject, 'd', false));
        checkEqual(true, inProperty(sourceObject, 'a,b', false));
        checkEqual(true, inProperty(sourceObject, 'b,c', false));
        checkEqual(true, inProperty(sourceObject, 'a,c', false));
        checkEqual(true, inProperty(sourceObject, 'b,a', false));
        checkEqual(true, inProperty(sourceObject, 'a,d', false));
        checkEqual(true, inProperty(sourceObject, 'a,b,', false));
        checkEqual(true, inProperty(sourceObject, 'b,c,', false));
        checkEqual(true, inProperty(sourceObject, 'a,c,', false));
        checkEqual(true, inProperty(sourceObject, 'b,a,', false));
        checkEqual(true, inProperty(sourceObject, 'a,d,', false));
        var sourceObject = {
          a: '1',
          b: '2',
          c: {
            d: {
              e: 'E'
            }
          }
        };
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c.d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c.d.e'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.f'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d..e'));
        checkEqual(false, inProperty(sourceObject, 'a,b,.d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(true, inProperty(sourceObject, 'a,b,c.d.e,'));
      });
    };

    var test_propertyCount = function test_propertyCount() {
      it('test_propertyCount', function () {
        checkEqual(3, propertyCount({
          a: '1',
          b: '2',
          c: '3'
        }));
        checkEqual(0, propertyCount({})); // exception

        checkEqual(false, isThrown(function () {
          propertyCount({});
        }));
        checkEqual(false, isThrown(function () {
          propertyCount([]);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount(10);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount('abc');
        }));
      });
    };

    var test_getProperty = function test_getProperty() {
      it('test_getProperty', function () {
        var testObj1 = {
          a: {
            b: {
              c: false
            }
          }
        };
        checkEqual(false, getProperty(testObj1, 'a').b.c);
        checkEqual(false, getProperty(testObj1, 'a.b').c);
        checkEqual(false, getProperty(testObj1, 'a.b.c'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.d'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.b'));
        checkEqual(undefined, getProperty(testObj1, ''));
        checkEqual(undefined, getProperty(testObj1, '.'));
        checkEqual(undefined, getProperty(testObj1, '..'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.'));
        checkEqual(undefined, getProperty(testObj1, 'a.'));
        checkEqual(undefined, getProperty(testObj1, '.a'));
        checkEqual(undefined, getProperty(testObj1, 'a.c'));
        checkEqual(undefined, getProperty(testObj1, 'b'));
        checkEqual(undefined, getProperty(testObj1, 'b.c'));
      });
    };

    var test_setProperty = function test_setProperty() {
      it('test_setProperty', function () {
        var testObj1 = {};
        setProperty(testObj1, 'a.b', true);
        checkEqual(true, testObj1.a.b);
        setProperty(testObj1, 'a', true);
        checkEqual(true, testObj1.a);
        setProperty(testObj1, 'a.b.c', true);
        checkEqual(true, testObj1.a.b.c);
        setProperty(testObj1, 'a.c', true);
        checkEqual(true, testObj1.a.c);
        setProperty(testObj1, 'b', true);
        checkEqual(true, testObj1.b);
        setProperty(testObj1, 'b.c', true);
        checkEqual(true, testObj1.b.c);
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, 'a.', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '.a', true);
        }));
        checkEqual(false, isThrown(function () {
          return setProperty(testObj1, 'a', true);
        }));
        var testObj1 = {
          a: ['abc', {
            b: 'b'
          }]
        };
        checkEqual('abc', testObj1.a[0]);
        setProperty(testObj1, 'a.0', 'def');
        checkEqual('def', testObj1.a[0]);
        checkEqual('b', testObj1.a[1].b);
        setProperty(testObj1, 'a.1.b', 'c');
        checkEqual('c', testObj1.a[1].b);
      });
    };

    var test_isObjectParameter = function test_isObjectParameter() {
      it('test_isObjectParameter', function () {
        var testFunction01 = function testFunction01(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a = a;
            a = _a.a;
            b = _a.b;
            var _a$c = _a.c;
            c = _a$c === void 0 ? '' : _a$c;
            var _a$d = _a.d;
            d = _a$d === void 0 ? '' : _a$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction01('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction01('A', 'B', 'C'));
        checkEqual('AB', testFunction01('A', 'B'));
        checkEqual('ABCD', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction01({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction01({
          a: 'A',
          b: 'B'
        }));

        var testFunction02 = function testFunction02(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a2 = a;
            a = _a2.a;
            b = _a2.b;
            var _a2$c = _a2.c;
            c = _a2$c === void 0 ? '' : _a2$c;
            var _a2$d = _a2.d;
            d = _a2$d === void 0 ? '' : _a2$d;
          } else if (isObjectParameter(b, 'b', 'c, d')) {
            var _b = b;
            b = _b.b;
            var _b$c = _b.c;
            c = _b$c === void 0 ? '' : _b$c;
            var _b$d = _b.d;
            d = _b$d === void 0 ? '' : _b$d;
          } else if (isObjectParameter(c, '', 'c, d', 1)) {
            var _c = c;
            var _c$c = _c.c;
            c = _c$c === void 0 ? '' : _c$c;
            var _c$d = _c.d;
            d = _c$d === void 0 ? '' : _c$d;
          } else if (isObjectParameter(d, '', 'd', 1)) {
            var _d = d;
            var _d$d = _d.d;
            d = _d$d === void 0 ? '' : _d$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction02('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction02('A', 'B', 'C'));
        checkEqual('AB', testFunction02('A', 'B')); // object parameter a

        checkEqual('ABCD', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02({
          a: 'A',
          b: 'B'
        })); // object parameter b

        checkEqual('ABCD', testFunction02('A', {
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', {
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', {
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02('A', {
          b: 'B'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', 'B', {
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', 'B', {
          d: 'D'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', 'C', {
          d: 'D'
        })); // miss patern

        checkEqual('[object Object]undefined', testFunction02({
          a: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D',
          e: 'E'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {}));
        checkEqual('A[object Object]', testFunction02('A', {
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          a: 'A',
          b: 'B'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {}));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          a: 'A'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          b: 'B'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          e: 'D'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          c: 'C'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          e: 'E'
        }));
      });
    };

    var test_ObjectEntries_standard = function test_ObjectEntries_standard() {
      it('test_ObjectEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var array1 = [['a', '1'], ['b', '2'], ['c', '3']];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, Object.entries(object1));
      });
    };

    var test_objectToKeyValueArray = function test_objectToKeyValueArray() {
      it('test_objectToKeyValueArray', function () {
        var array1 = [['a', '1'], ['b', '2'], ['c', '3']];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, objectToKeyValueArray(object1)); // only object type

        checkEqual(true, isThrown(function () {
          return objectToKeyValueArray(array1);
        })); // object parameter

        checkEqual(array1, objectToKeyValueArray({
          object: object1
        }));
      });
    };

    test_copyProperty();
    test_inProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();
    test_isObjectParameter();
    test_ObjectEntries_standard();
    test_objectToKeyValueArray();
  });
};

exports.test_execute_object = test_execute_object;
var _default = {
  test_execute_object: test_execute_object
};
exports["default"] = _default;