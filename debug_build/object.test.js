"use strict";

var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown;
  var copyProperty = parts.object.copyProperty;

  var test_copyProperty = function test_copyProperty() {
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
      propertyString: 'a',
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
  };

  console.log('  test object.js start.');
  test_copyProperty();
  console.log('  test object.js finish.');
};

module.exports = {
  test_execute_object: test_execute_object
};