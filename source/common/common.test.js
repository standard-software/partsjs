/* eslint-disable max-len */
/* eslint-disable no-var */
export const test_execute_common = (parts) => {
  const { checkEqual, describe, it, test, testCounter } = parts.test;
  describe('test_execute_common', () => {

    const {
      clone,
      // cloneDeep,
      merge,
      isUndefined,
      isObject,
      isArray,
    } = parts;

    const {
      checkEqual, checkCompare,
      isThrown, isThrownException,
      testCounter,
    } = parts.test;

    const {
      objectEntries,
      objectFromEntries,
    } = parts.object;

    const {
      map,
    } = parts.array;

    const test_clone_object = () =>{
      it('test_clone_object', () => {

        const testObject1 = { a: 1, b: 2, c: 3 };

        // no clone
        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1;

        // clone
        var object1 = clone(testObject1, clone.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c);

        // no clone deep
        var testObject2 = { a: 4, b: 5, c: 6 };
        var testObject3 = { a: 1, b: 2, c: 3, d: testObject2 };
        var object1 = clone(testObject3, clone.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a);

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = 1;
          var object2 = clone(object1, clone.func.DefaultArray());
          object2.a = 0;
          checkEqual(1, object1.a);
          checkEqual(0, object2.a);

          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = clone(object1, clone.func.DefaultArray());
          checkEqual(true,  parts.isObjectFromNull(object1.a));
          checkEqual(true,  parts.isObjectFromNull(object1));
          checkEqual(true,  parts.isObjectFromNull(object2.a));
          testCounter();
          checkEqual(true,  parts.isObjectFromNull(object2));
          checkEqual(false, object1 === object2);
          checkEqual(true,  object1.a === object2.a);
          checkEqual(true,  object1.a.b === object2.a.b);
        }

        // module object clone no support
        if (parts.isModule(parts)) {
          const cloneParts = parts.clone(parts, clone.func.DefaultArray());
          checkEqual(true,  cloneParts === parts);
          checkEqual(true,  parts.isModule(cloneParts));
          checkEqual(false, parts.isObjectNormal(cloneParts));
          checkEqual(false, parts.isObjectFromNull(cloneParts));
        }
      });
    };


    const test_clone_array = () =>{
      it('test_clone_array', () => {
        const testArray1 = [1, 2, 3];

        // no clone
        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1;

        // clone
        var array1 = clone(testArray1, clone.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]);

        // no clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3, clone.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    const test_clone_date = () => {
      it('test_clone_date', () => {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(11,    date1.getDate());
        date1.setDate(12);
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(12,    date1.getDate());
        checkEqual(2019,  testDate1.getFullYear());
        checkEqual(10,    testDate1.getMonth() + 1);
        checkEqual(12,    testDate1.getDate());

        // date type clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, clone.func.DefaultArray());
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(11,    testDate1.getDate());

        // object array only clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, [
          clone.func.arraySeries,
          clone.func.object,
        ]);
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(12,    testDate1.getDate());

        // object array date clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, [
          clone.func.date,
          clone.func.arraySeries,
          clone.func.object,
        ]);
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(11,    testDate1.getDate());
      });
    };

    const test_clone_function = () => {
      it('test_clone_function', () => {
        const testFunc1 = () => 'ABC';

        // no clone
        var func1 = testFunc1;
        checkEqual(true,  func1 === testFunc1);
        checkEqual('ABC',  func1());

        // clone
        var func1 = clone(testFunc1, clone.func.DefaultArray());
        checkEqual(true,  func1 === testFunc1);
        checkEqual('ABC',  func1());
      });
    };

    const test_clone_regexp = () => {
      it('test_clone_regexp', () => {
        const testRegExp1 = new RegExp('^a');

        // no clone
        var regexp1 = testRegExp1;
        checkEqual(true,  regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source);

        // clone
        var regexp1 = clone(testRegExp1, clone.func.DefaultArray());
        checkEqual(false,  regexp1 === testRegExp1);
        checkEqual(true,  '^a' === testRegExp1.source);
        checkEqual(true,  '^a' === regexp1.source);

        // clone no RegExpFunction
        var regexp1 = clone(testRegExp1, [clone.func.objectLike]);
        checkEqual(false,  regexp1 === testRegExp1, 'test_clone_regexp clone');
        checkEqual(true,  '^a' === testRegExp1.source);
        checkEqual(false, '^a' === regexp1.source);

        // clone
        const testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2, clone.func.DefaultArray());
        checkEqual(false,  regexp1 === testRegExp2);
        checkEqual(true,  '^a' === testRegExp2.source);
        checkEqual(true,  '^a' === regexp1.source);

        // clone no RegExpFunction
        var regexp1 = clone(testRegExp2, [clone.func.objectLike]);
        checkEqual(false,  regexp1 === testRegExp2);
        checkEqual(true,  '^a' === testRegExp2.source);
        checkEqual(false, '^a' === regexp1.source);
      });
    };

    const test_clone_Fast_object = () =>{
      it('test_clone_Fast_object', () => {

        const testObject1 = { a: 1, b: 2, c: 3 };

        // no clone
        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1;

        // clone
        var object1 = clone(testObject1);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c);

        // no clone deep
        var testObject2 = { a: 4, b: 5, c: 6 };
        var testObject3 = { a: 1, b: 2, c: 3, d: testObject2 };
        var object1 = clone(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a);

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = 1;
          var object2 = clone(object1);
          object2.a = 0;
          checkEqual(1, object1.a);
          checkEqual(0, object2.a);

          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = clone(object1);
          checkEqual(true,  parts.isObjectFromNull(object1.a));
          checkEqual(true,  parts.isObjectFromNull(object1));
          checkEqual(true,  parts.isObjectFromNull(object2.a));
          checkEqual(true,  parts.isObjectNormal(object2));
          // clone Fast is no support Object.create(null)
          checkEqual(false, object1 === object2);
          checkEqual(true,  object1.a === object2.a);
          checkEqual(true,  object1.a.b === object2.a.b);
        }

        // module object clone no support
        if (parts.isModule(parts)) {
          const cloneParts = parts.clone(parts);
          checkEqual(true,  cloneParts === parts);
          checkEqual(true,  parts.isModule(cloneParts));
          checkEqual(false, parts.isObjectNormal(cloneParts));
          checkEqual(false, parts.isObjectFromNull(cloneParts));
        }
      });
    };


    const test_clone_Fast_array = () =>{
      it('test_clone_Fast_array', () => {
        const testArray1 = [1, 2, 3];

        // no clone
        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1;

        // clone
        var array1 = clone(testArray1);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]);

        // no clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    const test_clone_Fast_date = () => {
      it('test_clone_Fast_date', () => {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(11,    date1.getDate());
        date1.setDate(12);
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(12,    date1.getDate());
        checkEqual(2019,  testDate1.getFullYear());
        checkEqual(10,    testDate1.getMonth() + 1);
        checkEqual(12,    testDate1.getDate());

        // date type clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(12,    testDate1.getDate());
        // clone Fast is not support date clone

      });
    };

    const test_clone_Fast_function = () => {
      it('test_clone_Fast_function', () => {
        const testFunc1 = () => 'ABC';

        // no clone
        var func1 = testFunc1;
        checkEqual(true,  func1 === testFunc1);
        checkEqual('ABC',  func1());

        // clone
        var func1 = clone(testFunc1);
        checkEqual(true,  func1 === testFunc1);
        checkEqual('ABC',  func1());
      });
    };

    const test_clone_Fast_regexp = () => {
      it('test_clone_Fast_regexp', () => {
        const testRegExp1 = new RegExp('^a');

        // no clone
        var regexp1 = testRegExp1;
        checkEqual(true,  regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source);

        // clone
        var regexp1 = clone(testRegExp1);
        checkEqual(true,  regexp1 === testRegExp1);
        checkEqual(true,  '^a' === testRegExp1.source);
        checkEqual(true,  '^a' === regexp1.source);
        // clone Fast is not support RegExp clone

        // clone
        const testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2);
        checkEqual(true,  regexp1 === testRegExp2);
        checkEqual(true,  '^a' === testRegExp2.source);
        checkEqual(true,  '^a' === regexp1.source);
        // clone Fast is not support RegExp clone

      });
    };


    const test_clone_objectParameter = () => {
      it('test_clone_objectParameter', () => {

        const testObject1 = { a: 1, b: 2, c: 3 };
        // clone
        var object1 = clone({ source: testObject1 });
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c);

        // date type clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: clone.func.DefaultArray(),
        });
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(11,    testDate1.getDate());

        // object array only clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: [
            clone.func.arraySeries,
            clone.func.object,
          ],
        });
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(12,    testDate1.getDate());

        // object array date clone
        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: [
            clone.func.date,
            clone.func.arraySeries,
            clone.func.object,
          ],
        });
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(11,    testDate1.getDate());

      });
    };

    const test_cloneDeep_object = () =>{
      it('test_cloneDeep_object', () => {
        // clone deep
        var testObject2 = { a: 4, b: 5, c: 6 };
        var testObject3 = { a: 1, b: 2, c: 3, d: testObject2 };
        var object1 = cloneDeep(testObject3, cloneDeep.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a);

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = cloneDeep(object1, cloneDeep.func.DefaultArray());
          checkEqual(true,  parts.isObjectFromNull(object1.a));
          checkEqual(true,  parts.isObjectFromNull(object1));
          checkEqual(true,  parts.isObjectFromNull(object2.a));
          checkEqual(true,  parts.isObjectFromNull(object2));
          checkEqual(false, object1 === object2);
          checkEqual(false, object1.a === object2.a);
          checkEqual(true,  object1.a.b === object2.a.b);
        }
      });
    };

    const test_cloneDeep_array = () =>{
      it('test_cloneDeep_array', () => {
        // clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = cloneDeep(testArray3, cloneDeep.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(false, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    const test_cloneDeep_object_array_mix = () => {
      it('test_cloneDeep_object_array_mix', () => {

        // no clone deep array object
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        var value1 = clone(testValue1, cloneDeep.func.DefaultArray());
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a);

        // clone deep array object
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        var value1 = cloneDeep(testValue1, cloneDeep.func.DefaultArray());
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a);

        // no clone deep object array
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3] };
        var value2 = clone(testValue2, cloneDeep.func.DefaultArray());
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]);

        // clone deep object array
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3] };
        var value2 = cloneDeep(testValue2, cloneDeep.func.DefaultArray());
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]);

        // no clone deep array object array
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
        var value1 = clone(testValue1, cloneDeep.func.DefaultArray());
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]);

        // clone deep array object array
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
        var value1 = cloneDeep(testValue1, cloneDeep.func.DefaultArray());
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]);

        // no clone deep object array object
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3] };
        var value2 = clone(testValue2, cloneDeep.func.DefaultArray());
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e);

        // clone deep object array object
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3] };
        var value2 = cloneDeep(testValue2, cloneDeep.func.DefaultArray());
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);

      });
    };

    const test_cloneDeep_date = () => {
      it('test_cloneDeep_date', () => {

        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(11,    date1.getDate());
        date1.setDate(12);
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(12,    date1.getDate());

        // clone array date no clone
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1, cloneDeep.func.DefaultArray());
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // cloneDeep array date clone
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);

        // cloneDeep ignore date
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, [
          clone.func.arraySeries,
          clone.func.object,
        ]);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // cloneDeep add cloneDate
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, [
          clone.func.date,
          clone.func.arraySeries,
          clone.func.object,
        ]);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);

        // date1 clone same object
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'date1 clone same object');
      });
    };

    const test_cloneDeep_regExp = () => {
      it('test_cloneDeep_regExp', () => {
        var regexp1 = new RegExp('^a');

        // clone Deep
        var regexp2 = cloneDeep(regexp1, cloneDeep.func.DefaultArray());
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.source);

        // clone Deep no RegExpFunction
        var regexp2 = cloneDeep(regexp1, [
          clone.func.objectLike,
        ]);
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source);

        // clone Deep in Object
        var regexp2 = cloneDeep(
          { value: regexp1 },
          cloneDeep.func.DefaultArray(),
        );
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.value.source);

        // clone Deep no RegExpFunction in Object
        var regexp2 = cloneDeep({ value: regexp1 }, [
          clone.func.objectLike,
        ]);
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source);

        // clone Deep in Array
        var regexp2 = cloneDeep([regexp1], cloneDeep.func.DefaultArray());
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2[0].source);

        // clone Deep no RegExpFunction in Array
        var regexp2 = cloneDeep([regexp1], [
          clone.func.objectLike,
        ]);
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);

        var regexp1 = /^a/;
        // clone Deep
        var regexp2 = cloneDeep(regexp1, cloneDeep.func.DefaultArray());
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.source);

        // clone Deep no RegExpFunction
        var regexp2 = cloneDeep(regexp1, [
          clone.func.objectLike,
        ]);
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source);

        // clone Deep in Object
        var regexp2 = cloneDeep({ value: regexp1 },
          cloneDeep.func.DefaultArray(),
        );
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.value.source);

        // clone Deep no RegExpFunction in Object
        var regexp2 = cloneDeep({ value: regexp1 }, [
          clone.func.objectLike,
        ]);
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source);

        // clone Deep in Array
        var regexp2 = cloneDeep([regexp1], cloneDeep.func.DefaultArray());
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2[0].source);

        // clone Deep no RegExpFunction in Array
        var regexp2 = cloneDeep([regexp1], [
          clone.func.objectLike,
        ]);
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);

        // regexp1 clone same object
        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'regexp1 clone same object');

      });
    };


    const test_cloneDeep_objectParameter = () => {
      it('test_cloneDeep_objectParameter', () => {

        // clone deep
        var testObject2 = { a: 4, b: 5, c: 6 };
        var testObject3 = { a: 1, b: 2, c: 3, d: testObject2 };
        var object1 = cloneDeep(
          { source: testObject3 },
          cloneDeep.func.DefaultArray(),
        );
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a);

        // cloneDeep array date clone
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: cloneDeep.func.DefaultArray(),
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);

        // cloneDeep ignore date
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: [
            clone.func.arraySeries,
            clone.func.object,
          ],
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // cloneDeep add cloneDate
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: [
            clone.func.date,
            clone.func.arraySeries,
            clone.func.object,
          ],
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);

        // date1 clone same object
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: cloneDeep.func.DefaultArray(),
        });
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'date1 clone same object');

      });
    };

    const test_cloneDeep_function = () => {
      it('test_cloneDeep_function', () => {
        const testFunc1 = () => 'ABC';

        // no clone
        var object1 = { func: testFunc1 };
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC', object1.func());

        // clone
        var object1 = clone({ func: testFunc1 });
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC', object1.func());

        // clone Deep
        var object1 = cloneDeep({ func: testFunc1 });
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC', object1.func());

        // no clone
        var array1 = [testFunc1];
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());

        // clone
        var array1 = clone([testFunc1]);
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());

        // clone Deep
        var array1 = cloneDeep([testFunc1]);
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    };


    // const test_cloneDeep_moment = () => {
    //   it('test_cloneDeep_moment', () => {
    //     if (parts.platform.isWindowsScriptHost()) {
    //       return;
    //     }
    //     if (parts.platform.isWebBrowser()) {
    //       return;
    //     }

    //     import moment from 'moment';

    //     // moment type clone no
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     var value1 = clone(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual(true, value1[3] === testValue1[3]);
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));

    //     // moment object fail
    //     // const cloneValue = new source.constructor();

    //     // moment type cloneDeep
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];

    //     // initialise
    //     cloneDeep.clear();

    //     var value1 = cloneDeep(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual(true, value1[3] === testValue1[3]); // clone
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // but not correct

    //     // moment type cloneDeep moment clone function
    //     clone.func.moment = (source, bufferWrite)  => {
    //       if (!moment.isMoment(source)) {
    //         return undefined;
    //       }
    //       const cloneValue = moment(source);
    //       bufferWrite(source, cloneValue);
    //       return cloneValue;
    //     };
    //     cloneDeep.reset();
    //     cloneDeep.add(clone.func.moment);

    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];

    //     var value1 = cloneDeep(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2019/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // correct
    //     cloneDeep.reset();

    //   });
    // };

    const test_cloneDeep_symbol = () => {
      it('test_cloneDeep_symbol', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true,
          parts.isSymbol(symbol1),
        );

        var value1 = [symbol1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(true,
          symbol1 === value1[0],
        );
        checkEqual(true,
          value1[0] === value2[0],
        );
        checkEqual(true,
          symbol1 === value2[0],
        );

        clone.func.forceSymbol = (
          source,
          bufferWrite = () => {},
          __cloneDeep = value => value,
        ) => {
          if (!parts.isSymbol(source)) {
            return undefined; ;
          }
          const cloneValue = Symbol();
          bufferWrite(source, cloneValue);
          return cloneValue;
        };
        var value1 = [symbol1];
        var value2 = cloneDeep(value1, [
          cloneDeep.func.forceSymbol,
          ...cloneDeep.func.DefaultArray(),
        ]);
        checkEqual(true,
          symbol1 === value1[0],
        );
        checkEqual(false,
          value1[0] === value2[0],
          // cloneDeep and new symbol
        );
        checkEqual(false,
          symbol1 === value2[0],
          // cloneDeep and new symbol
        );
      });
    };

    const test_cloneDeep_map = () => {
      it('test_cloneDeep_map', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));

        checkEqual(false, parts.isObject(map1));
        checkEqual(true,  parts.isObjectLike(map1));

        var map2 = clone(map1, [
          clone.func.date,
          clone.func.regExp,
          clone.func.ignoreFunction,
          clone.func.objectLike,
        ]);
        checkEqual(undefined, map2.get('key1'));
        checkEqual(false, map1 === map2);

        var map2 = cloneDeep(map1, [
          cloneDeep.func.date,
          cloneDeep.func.regExp,
          cloneDeep.func.ignoreFunction,
          cloneDeep.func.objectLike,
        ]);
        checkEqual(undefined, map2.get('key1'));  // copy but no clone
        checkEqual(false, map1 === map2);

        var map2 = clone(map1, clone.func.DefaultArray());
        checkEqual('value1', map2.get('key1')); // clone
        checkEqual(false, map1 === map2);

        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual('value1', map2.get('key1')); // clone
        checkEqual(false, map1 === map2);

        // map object array
        var map1 = new Map();
        map1.set('a', { a: '1' });
        map1.set('b', ['b']);
        map1.set('c', { a: [1, 2, 3, { b: 'c' }] });
        map1.set('d', [1, 2, 3, { b: 'c', d: [4, 5, 6] }]);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6,   map2.get('d')[3].d[2]);

        // clone map
        var object1 = { a: '1' };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = clone(map1, clone.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1',   map1.get('a').a);
        checkEqual('1',   map2.get('a').a);
        checkEqual(true,  map1.get('a') === map2.get('a'));

        // cloneDeep map
        var object1 = { a: '1' };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1',   map1.get('a').a);
        checkEqual('1',   map2.get('a').a);
        checkEqual(false, map1.get('a') === map2.get('a'));
      });
    };

    const test_cloneDeep_set = () => {
      it('test_cloneDeep_set', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        const set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true,  set1.has('value1'));
        checkEqual(true,  set1.has('value2'));
        checkEqual(false, set1.has('value3'));

        checkEqual(false, parts.isObject(set1));
        checkEqual(true,  parts.isObjectLike(set1));

        var set2 = clone(set1, [
          clone.func.date,
          clone.func.regExp,
          clone.func.ignoreFunction,
          clone.func.objectLike,
        ]);
        checkEqual(false,  set2.has('value1'));
        checkEqual(false, set1 === set2);

        var set2 = cloneDeep(set1, [
          clone.func.date,
          clone.func.regExp,
          clone.func.ignoreFunction,
          clone.func.objectLike,
        ]);
        checkEqual(false, set2.has('value1'));  // no clone
        checkEqual(false, set1 === set2);

        var set2 = clone(set1, clone.func.DefaultArray());
        checkEqual(true,  set2.has('value1'));  // clone
        checkEqual(false, set1 === set2);

        var set2 = cloneDeep(set1, cloneDeep.func.DefaultArray());
        checkEqual(true,  set2.has('value1'));  // clone
        checkEqual(false, set1 === set2);

      });
    };

    const test_cloneDeep_CircularReference = () => {
      it('test_cloneDeep_CircularReference', () => {
        const object1 = { b: 'test' };
        object1.a = object1;

        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b);

        const object2 = cloneDeep(object1, cloneDeep.func.DefaultArray());
        checkEqual('test', object2.b);
        checkEqual('test', object2.a.b);
        checkEqual('test', object2.a.a.b);

        checkEqual(false, object1 === object2);
        checkEqual(true,  object1.a === object1);
        checkEqual(true,  object2.a === object2);
        checkEqual(false, object2.a === object1.a);
      });
    };

    const test_cloneDeep_Fast_object = () =>{
      it('test_cloneDeep_Fast_object', () => {
        // clone deep
        var testObject2 = { a: 4, b: 5, c: 6 };
        var testObject3 = { a: 1, b: 2, c: 3, d: testObject2 };
        var object1 = cloneDeep(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a);

        // object from null to object normal
        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = cloneDeep(object1);
          checkEqual(true,  parts.isObjectFromNull(object1.a));
          checkEqual(true,  parts.isObjectFromNull(object1));
          checkEqual(true,  parts.isObjectNormal(object2.a));
          checkEqual(true,  parts.isObjectNormal(object2));
          checkEqual(false, object1 === object2);
          checkEqual(false, object1.a === object2.a);
          checkEqual(true,  object1.a.b === object2.a.b);
        }
      });
    };

    const test_cloneDeep_Fast_array = () =>{
      it('test_cloneDeep_Fast_array', () => {
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
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    const test_cloneDeep_Fast_object_array_mix = () => {
      it('test_cloneDeep_Fast_object_array_mix', () => {

        // no clone deep array object
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        var value1 = clone(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a);

        // clone deep array object
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        var value1 = cloneDeep(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a);

        // no clone deep object array
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3] };
        var value2 = clone(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]);

        // clone deep object array
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3] };
        var value2 = cloneDeep(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]);

        // no clone deep array object array
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
        var value1 = clone(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]);

        // clone deep array object array
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
        var value1 = cloneDeep(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]);

        // no clone deep object array object
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3] };
        var value2 = clone(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e);

        // clone deep object array object
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3] };
        var value2 = cloneDeep(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);

      });
    };

    const test_cloneDeep_Fast_date = () => {
      it('test_cloneDeep_Fast_date', () => {

        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(11,    date1.getDate());
        date1.setDate(12);
        checkEqual(2019,  date1.getFullYear());
        checkEqual(10,    date1.getMonth() + 1);
        checkEqual(12,    date1.getDate());

        // clone array date no clone
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // cloneDeep array date no clone
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // date1 clone same object
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1);
        checkEqual(true,  value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'date1 clone same object');
      });
    };

    const test_cloneDeep_Fast_regExp = () => {
      it('test_cloneDeep_Fast_regExp', () => {
        var regexp1 = new RegExp('^a');

        // clone Deep
        var regexp2 = cloneDeep(regexp1);
        checkEqual(true,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.source);

        // clone Deep in Object
        var regexp2 = cloneDeep({ value: regexp1 });
        checkEqual(true,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.value.source);

        // clone Deep in Array
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(true,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2[0].source);

        var regexp1 = /^a/;
        // clone Deep
        var regexp2 = cloneDeep(regexp1);
        checkEqual(true,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.source);

        // clone Deep in Object
        var regexp2 = cloneDeep({ value: regexp1 });
        checkEqual(true,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.value.source);

        // clone Deep in Array
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(true,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2[0].source);

        // regexp1 clone same object
        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1);
        checkEqual(true,  value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'regexp1 clone same object');

      });
    };

    const test_cloneDeep_Fast_function = () => {
      it('test_cloneDeep_Fast_function', () => {
        const testFunc1 = () => 'ABC';

        // no clone
        var object1 = { func: testFunc1 };
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC', object1.func());

        // clone
        var object1 = clone({ func: testFunc1 });
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC', object1.func());

        // clone Deep
        var object1 = cloneDeep({ func: testFunc1 });
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC', object1.func());

        // no clone
        var array1 = [testFunc1];
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());

        // clone
        var array1 = clone([testFunc1]);
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());

        // clone Deep
        var array1 = cloneDeep([testFunc1]);
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    };

    const test_cloneDeep_Fast_symbol = () => {
      it('test_cloneDeep_Fast_symbol', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true,
          parts.isSymbol(symbol1),
        );

        var value1 = [symbol1];
        var value2 = cloneDeep(value1);
        checkEqual(true,
          symbol1 === value1[0],
        );
        checkEqual(true,
          value1[0] === value2[0],
        );
        checkEqual(true,
          symbol1 === value2[0],
        );

      });
    };

    const test_cloneDeep_Fast_map = () => {
      it('test_cloneDeep_Fast_map', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));

        checkEqual(false, parts.isObject(map1));
        checkEqual(true,  parts.isObjectLike(map1));

        var map2 = cloneDeep(map1);
        checkEqual('value1', map2.get('key1'));
        checkEqual(true,  map1 === map2);       // no clone

        // map object array
        var map1 = new Map();
        map1.set('a', { a: '1' });
        map1.set('b', ['b']);
        map1.set('c', { a: [1, 2, 3, { b: 'c' }] });
        map1.set('d', [1, 2, 3, { b: 'c', d: [4, 5, 6] }]);
        var map2 = cloneDeep(map1);
        checkEqual(true, map1 === map2);        // no clone no copy
        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6,   map2.get('d')[3].d[2]);

        // cloneDeep map
        var object1 = { a: '1' };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1);
        checkEqual(true,  map1 === map2);       // no clone no copy
        checkEqual('1',   map1.get('a').a);
        checkEqual('1',   map2.get('a').a);
        checkEqual(true,  map1.get('a') === map2.get('a'));
      });
    };

    const test_cloneDeep_Fast_set = () => {
      it('test_cloneDeep_Fast_set', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        const set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true,  set1.has('value1'));
        checkEqual(true,  set1.has('value2'));
        checkEqual(false, set1.has('value3'));

        checkEqual(false, parts.isObject(set1));
        checkEqual(true,  parts.isObjectLike(set1));

        var set2 = cloneDeep(set1);
        checkEqual(true,  set2.has('value1'));  // no copy no clone
        checkEqual(true,  set1 === set2);

      });
    };

    const test_cloneDeep_Fast_CircularReference = () => {
      it('test_cloneDeep_Fast_CircularReference', () => {
        const object1 = { b: 'test' };
        object1.a = object1;

        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b);

        // thread 'main' has overflowed its stack
        // const object2 = cloneDeep(object1);

      });
    };

    const test_merge = () => {
      it('test_merge', () => {

        // object
        const testObjectArray = [
          { key1: 100,  key2: 200,  key3: 300 },
          { key1: 100,  key2: 150,  key3: 100 },
          { key1: 100,              key3: 200, key4: 100 },
        ];
        checkEqual(
          { key1: 100, key2: 150, key3: 200, key4: 100 },
          merge(testObjectArray),
        );
        checkEqual(
          { key1: 300, key2: 350, key3: 600, key4: 100 },
          merge(
            testObjectArray,
            (v, t) => t + v,
            { key1: 0, key2: 0, key3: 0, key4: 0 },
          ),
        );
        checkEqual(
          { key1: 300, key2: 350, key3: 600, key4: 100 },
          merge(
            testObjectArray,
            (v, t) => isUndefined(t) ? v : t + v,
          ),
        );
        checkEqual(
          { key1: [3, 300], key2: [2, 350], key3: [3, 600], key4: [1, 100] },
          merge(
            testObjectArray,
            (v, t) => isUndefined(t) ? [1, v] : [t[0] + 1, t[1] + v],
          ),
        );
        checkEqual(
          { key1: 100, key2: 175, key3: 200, key4: 100 },
          objectFromEntries(map(objectEntries(merge(
            testObjectArray,
            (v, t) => isUndefined(t) ? [1, v] : [t[0] + 1, t[1] + v],
          )), ([key, value]) => [key, value[1] / value[0]])),
        );

        // array
        const testArrayArray = [
          [100, 200, 300],
          [100, 150, 100],
          [100,    , 200, 100],
        ];
        checkEqual(
          [100, 150, 200, 100],
          merge(testArrayArray),
        );
        checkEqual(
          [300, 350, 600, 100],
          merge(
            testArrayArray,
            (v, t) => t + v,
            [0, 0, 0, 0],
          ),
        );
        checkEqual(
          [300, 350, 600, 100],
          merge(
            testArrayArray,
            (v, t) => isUndefined(t) ? v : t + v,
          ),
        );
        checkEqual(
          [[3, 300], [2, 350], [3, 600], [1, 100]],
          merge(
            testArrayArray,
            (v, t) => isUndefined(t) ? [1, v] : [t[0] + 1, t[1] + v],
          ),
        );

        // object parameter
        checkEqual(
          { key1: 300, key2: 350, key3: 600, key4: 100 },
          merge(
            {
              dataArray: testObjectArray,
              func: (v, t) => t + v,
              target: { key1: 0, key2: 0, key3: 0, key4: 0 },
            },
          ),
        );
        checkEqual(
          { key1: 300, key2: 350, key3: 600, key4: 100 },
          merge(
            testObjectArray,
            {
              func: (v, t) => t + v,
              target: { key1: 0, key2: 0, key3: 0, key4: 0 },
            },
          ),
        );
        checkEqual(
          { key1: 300, key2: 350, key3: 600, key4: 100 },
          merge(
            testObjectArray,
            (v, t) => t + v,
            {
              target: { key1: 0, key2: 0, key3: 0, key4: 0 },
            },
          ),
        );

        // exception
        checkEqual({ key1: 0, key2: 0, key3: 0, key4: 0 },
          merge(
            [],
            (v, t) => isUndefined(t) ? v : t + v,
            { key1: 0, key2: 0, key3: 0, key4: 0 },
          ),
        );
        checkEqual(false, isThrown(() => {
          merge(
            [],
            (v, t) => isUndefined(t) ? v : t + v,
            { key1: 0, key2: 0, key3: 0, key4: 0 },
          );
        }));
        checkEqual(true, isThrown(() => {
          merge(
            ['123'],
            (v, t) => isUndefined(t) ? v : t + v,
            { key1: 0, key2: 0, key3: 0, key4: 0 },
          );
        }));
        checkEqual(true, isThrown(() => {
          merge(
            [],
            123,
            { key1: 0, key2: 0, key3: 0, key4: 0 },
          );
        }));
        checkEqual(true, isThrown(() => {
          merge(
            [],
            (v, t) => isUndefined(t) ? v : t + v,
            '123',
          );
        }));

      });
    };


    const { setProperty, recursive } = parts;

    const cloneDeepUseRecursive = (source) => {

      let result;
      if (isObject(source)) {
        result = {};
      } else if (isArray(source)) {
        result = [];
      } else {
        return source;
      }
      recursive(source,
        (value, key, level, path) => {
          if (isObject(value)) {
            setProperty(result, path + '.' + key, {});
            return value;
          } else if (isArray(value)) {
            setProperty(result, path + '.' + key, []);
            return value;
          } else {
            setProperty(result, path + '.' + key, value);
          }
        },
      );
      return result;
    };


    test_clone_object();
    test_clone_array();
    test_clone_date();
    test_clone_function();
    test_clone_regexp();
    test_clone_objectParameter();

    test_clone_Fast_object();
    test_clone_Fast_array();
    test_clone_Fast_date();
    test_clone_Fast_function();
    test_clone_Fast_regexp();

    let cloneDeep;
    cloneDeep = parts.common.cloneDeep;

    test_cloneDeep_object();
    test_cloneDeep_array();
    test_cloneDeep_object_array_mix();
    test_cloneDeep_date();
    test_cloneDeep_regExp();
    test_cloneDeep_objectParameter();
    test_cloneDeep_function();
    // test_cloneDeep_moment();
    test_cloneDeep_symbol();
    test_cloneDeep_map();
    test_cloneDeep_set();
    test_cloneDeep_CircularReference();

    cloneDeep = cloneDeepUseRecursive;
    test_cloneDeep_Fast_object();
    test_cloneDeep_Fast_array();
    test_cloneDeep_Fast_object_array_mix();
    test_cloneDeep_Fast_date();
    test_cloneDeep_Fast_regExp();
    test_cloneDeep_Fast_function();
    test_cloneDeep_Fast_symbol();
    test_cloneDeep_Fast_map();
    test_cloneDeep_Fast_set();
    test_cloneDeep_Fast_CircularReference();

    cloneDeep = parts.common.cloneDeep;
    test_cloneDeep_Fast_object();
    test_cloneDeep_Fast_array();
    test_cloneDeep_Fast_object_array_mix();
    test_cloneDeep_Fast_date();
    test_cloneDeep_Fast_regExp();
    test_cloneDeep_Fast_function();
    test_cloneDeep_Fast_symbol();
    test_cloneDeep_Fast_map();
    test_cloneDeep_Fast_set();
    test_cloneDeep_Fast_CircularReference();

    test_merge();

  });
};

export default {
  test_execute_common,
};
