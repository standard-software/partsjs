"use strict";

var test_execute_root = function test_execute_root(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown;
  var clone = parts.clone,
      cloneDeep = parts.cloneDeep;

  var test_clone_object = function test_clone_object() {
    var testObject1 = {
      a: 1,
      b: 2,
      c: 3
    }; // no clone

    var object1 = testObject1;
    object1.a = 0;
    checkEqual(0, object1.a);
    checkEqual(0, testObject1.a);
    testObject1.a = 1; // clone

    var object1 = clone(testObject1);
    object1.a = 0;
    checkEqual(0, object1.a);
    checkEqual(1, testObject1.a); // no clone deep

    var testObject2 = {
      a: 4,
      b: 5,
      c: 6
    };
    var testObject3 = {
      a: 1,
      b: 2,
      c: 3,
      d: testObject2
    };
    var object1 = clone(testObject3);
    object1.a = 0;
    checkEqual(0, object1.a);
    checkEqual(1, testObject3.a);
    checkEqual(true, object1.d === testObject3.d);
    checkEqual(6, object1.d.c);
    checkEqual(6, testObject3.d.c);
    object1.d.a = 7;
    checkEqual(7, object1.d.a);
    checkEqual(7, testObject3.d.a); // exception

    checkEqual(false, isThrown(function () {
      clone({
        a: 1,
        b: 2,
        c: 3
      });
    }));
    checkEqual(true, isThrown(function () {
      clone(1);
    }));
    checkEqual(true, isThrown(function () {
      clone('a');
    }));
  };

  var test_cloneDeep_object = function test_cloneDeep_object() {
    // clone deep
    var testObject2 = {
      a: 4,
      b: 5,
      c: 6
    };
    var testObject3 = {
      a: 1,
      b: 2,
      c: 3,
      d: testObject2
    };
    var object1 = cloneDeep(testObject3);
    object1.a = 0;
    checkEqual(0, object1.a);
    checkEqual(1, testObject3.a);
    checkEqual(true, object1.d !== testObject3.d);
    checkEqual(6, object1.d.c);
    checkEqual(6, testObject3.d.c);
    object1.d.a = 7;
    checkEqual(7, object1.d.a);
    checkEqual(4, testObject3.d.a); // exception

    checkEqual(false, isThrown(function () {
      cloneDeep({
        a: 1,
        b: 2,
        c: 3
      });
    }));
    checkEqual(true, isThrown(function () {
      cloneDeep(1);
    }));
    checkEqual(true, isThrown(function () {
      cloneDeep('a');
    }));
  };

  var test_clone_array = function test_clone_array() {
    var testArray1 = [1, 2, 3]; // no clone

    var array1 = testArray1;
    array1[0] = 0;
    checkEqual(0, array1[0]);
    checkEqual(0, testArray1[0]);
    testArray1[0] = 1; // clone

    var array1 = clone(testArray1);
    array1[0] = 0;
    checkEqual(0, array1[0]);
    checkEqual(1, testArray1[0]); // no clone deep

    var testArray2 = ['a', 'b', 'c'];
    var testArray3 = [1, 2, 3, testArray2];
    var array1 = clone(testArray3);
    array1[0] = 0;
    checkEqual(0, array1[0]);
    checkEqual(1, testArray3[0]);
    checkEqual(true, array1[3] === testArray3[3]);
    array1[3][0] = 'd';
    checkEqual('d,b,c', array1[3].join(','));
    checkEqual('d,b,c', testArray3[3].join(',')); // exception

    checkEqual(false, isThrown(function () {
      clone([1, 2, 3]);
    }));
  };

  var test_cloneDeep_array = function test_cloneDeep_array() {
    // clone deep
    var testArray2 = ['a', 'b', 'c'];
    var testArray3 = [1, 2, 3, testArray2];
    var array1 = cloneDeep(testArray3);
    array1[0] = 0;
    checkEqual(0, array1[0]);
    checkEqual(1, testArray3[0]);
    checkEqual(false, array1[3] === testArray3[3]);
    array1[3][0] = 'd';
    checkEqual('d,b,c', array1[3].join(','));
    checkEqual('a,b,c', testArray3[3].join(',')); // exception

    checkEqual(false, isThrown(function () {
      cloneDeep([1, 2, 3]);
    }));
  };

  var test_cloneDeep_object_array_mix = function test_cloneDeep_object_array_mix() {
    // no clone deep array object
    var testValue1 = [1, 2, 3, {
      a: 1,
      b: 2,
      c: 3
    }];
    var value1 = clone(testValue1);
    value1[0] = 0;
    checkEqual(0, value1[0]);
    checkEqual(1, testValue1[0]);
    value1[3].a = 4;
    checkEqual(4, value1[3].a);
    checkEqual(4, testValue1[3].a); // clone deep array object

    var testValue1 = [1, 2, 3, {
      a: 1,
      b: 2,
      c: 3
    }];
    var value1 = cloneDeep(testValue1);
    value1[0] = 0;
    checkEqual(0, value1[0]);
    checkEqual(1, testValue1[0]);
    value1[3].a = 4;
    checkEqual(4, value1[3].a);
    checkEqual(1, testValue1[3].a); // no clone deep object array

    var testValue2 = {
      a: 1,
      b: 2,
      c: 3,
      d: [1, 2, 3]
    };
    var value2 = clone(testValue2);
    value2.a = 0;
    checkEqual(0, value2.a);
    checkEqual(1, testValue2.a);
    value2.d[0] = 4;
    checkEqual(4, value2.d[0]);
    checkEqual(4, testValue2.d[0]); // clone deep object array

    var testValue2 = {
      a: 1,
      b: 2,
      c: 3,
      d: [1, 2, 3]
    };
    var value2 = cloneDeep(testValue2);
    value2.a = 0;
    checkEqual(0, value2.a);
    checkEqual(1, testValue2.a);
    value2.d[0] = 4;
    checkEqual(4, value2.d[0]);
    checkEqual(1, testValue2.d[0]); // no clone deep array object array

    var testValue1 = [1, 2, 3, {
      a: 1,
      b: 2,
      c: [3, 4, 5]
    }];
    var value1 = clone(testValue1);
    value1[3].c[0] = 6;
    checkEqual(6, value1[3].c[0]);
    checkEqual(6, testValue1[3].c[0]); // clone deep array object array

    var testValue1 = [1, 2, 3, {
      a: 1,
      b: 2,
      c: [3, 4, 5]
    }];
    var value1 = cloneDeep(testValue1);
    value1[3].c[0] = 6;
    checkEqual(6, value1[3].c[0]);
    checkEqual(3, testValue1[3].c[0]); // no clone deep object array object

    var testValue2 = {
      a: 1,
      b: 2,
      c: 3,
      d: [{
        e: 4,
        f: 5,
        g: 6
      }, 2, 3]
    };
    var value2 = clone(testValue2);
    value2.d[0].e = 7;
    checkEqual(7, value2.d[0].e);
    checkEqual(7, testValue2.d[0].e); // clone deep object array object

    var testValue2 = {
      a: 1,
      b: 2,
      c: 3,
      d: [{
        e: 4,
        f: 5,
        g: 6
      }, 2, 3]
    };
    var value2 = cloneDeep(testValue2);
    value2.d[0].e = 7;
    checkEqual(7, value2.d[0].e);
    checkEqual(4, testValue2.d[0].e);
  };

  var test_cloneDeep_date = function test_cloneDeep_date() {
    // no clone
    var date1 = new Date('2019/10/11');
    checkEqual(2019, date1.getFullYear());
    checkEqual(10, date1.getMonth() + 1);
    checkEqual(11, date1.getDate());
    date1.setDate(12);
    checkEqual(2019, date1.getFullYear());
    checkEqual(10, date1.getMonth() + 1);
    checkEqual(12, date1.getDate()); // date type clone no

    var testValue1 = [1, 2, 3, date1];
    var value1 = clone(testValue1);
    value1[3].setDate(13);
    checkEqual(13, value1[3].getDate());
    checkEqual(13, testValue1[3].getDate());
    date1.setDate(12); // date type cloneDeep no

    var date1 = new Date('2019/10/11');
    cloneDeep.clearFunctions();
    var testValue1 = [1, 2, 3, date1];
    var value1 = cloneDeep(testValue1);
    value1[3].setDate(13);
    checkEqual(13, value1[3].getDate());
    checkEqual(13, testValue1[3].getDate());
    cloneDeep.pushFunction(cloneDeep.dateClone); // date type cloneDeep

    var date1 = new Date('2019/10/11');
    var testValue1 = [1, 2, 3, date1];
    var value1 = cloneDeep(testValue1);
    value1[3].setDate(13);
    checkEqual(13, value1[3].getDate());
    checkEqual(11, testValue1[3].getDate());
  };

  console.log('  test root.js');
  test_clone_object();
  test_cloneDeep_object();
  test_clone_array();
  test_cloneDeep_array();
  test_cloneDeep_object_array_mix();
  test_cloneDeep_date();
};

module.exports = {
  test_execute_root: test_execute_root
};