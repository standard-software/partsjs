"use strict";

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe(test_execute_object.name, function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$object = parts.object,
        copyProperty = _parts$object.copyProperty,
        inProperty = _parts$object.inProperty,
        propertyCount = _parts$object.propertyCount,
        getProperty = _parts$object.getProperty,
        setProperty = _parts$object.setProperty;

    var test_copyProperty = function test_copyProperty() {
      describe(test_copyProperty.name, function () {
        it(test_copyProperty.name, function () {
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
          checkEqual(true, 'c' in destObject); // parameter args

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
      });
    };

    var test_inProperty = function test_inProperty() {
      describe(test_inProperty.name, function () {
        it(test_inProperty.name, function () {
          var sourceObject = {
            a: '1',
            b: '2'
          };
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
          checkEqual(false, inProperty(sourceObject, 'a,d,')); // parameter args

          checkEqual(true, inProperty({
            object: sourceObject,
            propertyArray: 'b,a,'
          }));
          checkEqual(false, inProperty({
            object: sourceObject,
            propertyArray: 'd'
          })); // exception

          checkEqual(false, isThrown(function () {
            inProperty({}, 'a');
          }));
          checkEqual(false, isThrown(function () {
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
        });
      });
    };

    var test_propertyCount = function test_propertyCount() {
      describe(test_propertyCount.name, function () {
        it(test_propertyCount.name, function () {
          checkEqual(3, propertyCount({
            a: '1',
            b: '2',
            c: '3'
          }));
          checkEqual(0, propertyCount({})); // exception

          checkEqual(false, isThrown(function () {
            propertyCount({});
          }));
          checkEqual(true, isThrown(function () {
            propertyCount([]);
          }));
        });
      });
    };

    var test_getProperty = function test_getProperty() {
      describe(test_getProperty.name, function () {
        it(test_getProperty.name, function () {
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
          checkEqual(undefined, getProperty(testObj1, 'a.'));
          checkEqual(undefined, getProperty(testObj1, '.a'));
          checkEqual(undefined, getProperty(testObj1, 'a.c'));
          checkEqual(undefined, getProperty(testObj1, 'b'));
          checkEqual(undefined, getProperty(testObj1, 'b.c'));
        });
      });
    };

    var test_setProperty = function test_setProperty() {
      describe(test_setProperty.name, function () {
        it(test_setProperty.name, function () {
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
          checkEqual(true, testObj1.b.c); // // エラー
          // // var path = '';      setProperty(testObj1, path, true); console.log(path, testObj1);
          // // var path = 'a.';    setProperty(testObj1, path, true); console.log(path, testObj1);
          // // var path = '.a';    setProperty(testObj1, path, true); console.log(path, testObj1);

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
      });
    };

    console.log('  test object.js');
    test_copyProperty();
    test_inProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();
  });
};

module.exports = {
  test_execute_object: test_execute_object
};