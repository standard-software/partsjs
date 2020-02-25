/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_root = (parts) => {
  const { checkEqual, describe, it, test } = parts.test;
  describe('test_execute_root', () => {

    const {
      clone, cloneDeep,
      cloneFunction,
    } = parts;

    const {
      _typeofCheck, _objectToStringCheck,
    } = require('../type/isType.js');

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
        var object1 = clone(testObject1);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject1.a);

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
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(11,    testDate1.getDate());

        // object array only clone
        clone.clear();
        clone.add(cloneFunction.cloneObject);
        clone.add(cloneFunction.cloneArrayType);
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(12,    testDate1.getDate());
        clone.reset();

        // object array date clone
        clone.clear();
        clone.add(cloneFunction.cloneObject);
        clone.add(cloneFunction.cloneArrayType);
        clone.add(cloneFunction.cloneDate);
        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12,    date1.getDate());
        checkEqual(11,    testDate1.getDate());
        clone.reset();
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
        var func1 = clone(testFunc1);
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
        var regexp1 = clone(testRegExp1);
        checkEqual(false,  regexp1 === testRegExp1);
        checkEqual(true,  '^a' === testRegExp1.source);
        checkEqual(true,  '^a' === regexp1.source);

        // clone no RegExpFunction
        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        var regexp1 = clone(testRegExp1);
        checkEqual(false,  regexp1 === testRegExp1, 'test_clone_regexp clone');
        checkEqual(true,  '^a' === testRegExp1.source);
        checkEqual(false, '^a' === regexp1.source);
        clone.reset();

        // clone
        const testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2);
        checkEqual(false,  regexp1 === testRegExp2);
        checkEqual(true,  '^a' === testRegExp2.source);
        checkEqual(true,  '^a' === regexp1.source);

        // clone no RegExpFunction
        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        var regexp1 = clone(testRegExp2);
        checkEqual(false,  regexp1 === testRegExp2);
        checkEqual(true,  '^a' === testRegExp2.source);
        checkEqual(false, '^a' === regexp1.source);
        clone.reset();
      });
    };

    const test_cloneDeep_object = () =>{
      it('test_cloneDeep_object', () => {
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
      });
    };

    const test_cloneDeep_array = () =>{
      it('test_cloneDeep_array', () => {
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

    const test_cloneDeep_object_array_mix = () => {
      it('test_cloneDeep_object_array_mix', () => {

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
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3]};
        var value2 = clone(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]);

        // clone deep object array
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3]};
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
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3]};
        var value2 = clone(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e);

        // clone deep object array object
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3]};
        var value2 = cloneDeep(testValue2);
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
        var value2 = clone(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // cloneDeep array date clone
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);

        // cloneDepp ignore date
        var date1 = new Date('2019/10/11');
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObject);
        cloneDeep.add(cloneFunction.cloneArrayType);
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]);

        // cloneDeep add cloneDate
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        cloneDeep.add(cloneFunction.cloneDate);
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]);
        cloneDeep.reset();

        // date1 clone same object
        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1);
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'date1 clone same object');
      });
    };

    const test_cloneDeep_regExp = () => {
      it('test_cloneDeep_regExp', () => {
        var regexp1 = new RegExp('^a');

        // clone Deep
        var regexp2 = cloneDeep(regexp1);
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.source);

        // clone Deep no RegExpFunction
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep(regexp1);
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source);
        cloneDeep.reset();

        // clone Deep in Object
        var regexp2 = cloneDeep({ value: regexp1 });
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.value.source);

        // clone Deep no RegExpFunction in Object
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep({ value: regexp1 });
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source);
        cloneDeep.reset();

        // clone Deep in Array
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2[0].source);

        // clone Deep no RegExpFunction in Array
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);
        cloneDeep.reset();


        var regexp1 = /^a/;
        // clone Deep
        var regexp2 = cloneDeep(regexp1);
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.source);

        // clone Deep no RegExpFunction
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep(regexp1);
        checkEqual(false,  regexp2 === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source);
        cloneDeep.reset();

        // clone Deep in Object
        var regexp2 = cloneDeep({ value: regexp1 });
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2.value.source);

        // clone Deep no RegExpFunction in Object
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep({ value: regexp1 });
        checkEqual(false,  regexp2.value === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source);
        cloneDeep.reset();

        // clone Deep in Array
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(true,  '^a' === regexp2[0].source);

        // clone Deep no RegExpFunction in Array
        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        var regexp2 = cloneDeep([regexp1]);
        checkEqual(false,  regexp2[0] === regexp1);
        checkEqual(true,  '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);
        cloneDeep.reset();

        // regexp1 clone same object
        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1);
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true,  value1[3] === value1[4]);
        checkEqual(true,  value2[3] === value2[4], 'regexp1 clone same object');

      });
    };


    const test_cloneDeep_function = () => {
      it('test_cloneDeep_function', () => {
        const testFunc1 = () => 'ABC';

        // no clone
        var object1 = { func: testFunc1 };
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC',  object1.func());

        // clone
        var object1 = clone({ func: testFunc1 });
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC',  object1.func());

        // clone Deep
        var object1 = cloneDeep({ func: testFunc1 });
        checkEqual(true,  object1.func === testFunc1);
        checkEqual('ABC',  object1.func());

        // no clone
        var array1 = [testFunc1];
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC',  array1[0]());

        // clone
        var array1 = clone([testFunc1]);
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC',  array1[0]());

        // clone Deep
        var array1 = cloneDeep([testFunc1]);
        checkEqual(true,  array1[0] === testFunc1);
        checkEqual('ABC',  array1[0]());
      });
    };


    const test_cloneDeep_moment = () => {
      it('test_cloneDeep_moment', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isWebBrowser()) {
          return;
        }

        const moment = require('moment');

        // moment type clone no
        var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
        var testValue1 = [1, 2, 3, moment1];
        var value1 = clone(testValue1);
        value1[3].set('year', 2018);
        checkEqual(true, value1[3] === testValue1[3]);
        checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
        checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));

        // moment object fail
        // const cloneValue = new source.constructor();

        // moment type cloneDeep
        var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
        var testValue1 = [1, 2, 3, moment1];

        // initialise
        cloneDeep.clear();

        var value1 = cloneDeep(testValue1);
        value1[3].set('year', 2018);
        checkEqual(true, value1[3] === testValue1[3]); // clone
        checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
        checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
        // but not correct

        // moment type cloneDeep moment clone function
        cloneFunction.cloneMoment = (source, bufferWrite)  => {
          if (!moment.isMoment(source)) {
            return undefined;
          }
          const cloneValue = moment(source);
          bufferWrite(source, cloneValue);
          return cloneValue;
        };
        cloneDeep.reset();
        cloneDeep.add(cloneFunction.cloneMoment);

        var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
        var testValue1 = [1, 2, 3, moment1];

        var value1 = cloneDeep(testValue1);
        value1[3].set('year', 2018);
        checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
        checkEqual('2019/10/11', testValue1[3].format('YYYY/MM/DD'));
        // correct
        cloneDeep.reset();

      });
    };

    const test_cloneDeep_symbol = () => {
      it('test_cloneDeep_symbol', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true,
          parts.isSymbolAll(symbol1),
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

        cloneFunction.cloneForceSymbol = (
          source,
          bufferWrite = () => {},
          __cloneDeep = value => value,
        ) => {
          if (!parts.isSymbolAll(source)) {
            return undefined; ;
          }
          const cloneValue = Symbol();
          bufferWrite(source, cloneValue);
          return cloneValue;
        };
        cloneDeep.add(cloneFunction.cloneForceSymbol);
        var value1 = [symbol1];
        var value2 = cloneDeep(value1);
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
        cloneDeep.reset();
      });
    };

    const test_cloneDeep_map = () => {
      it('test_cloneDeep_map', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));

        checkEqual(false, parts.isObjectAll(map1));
        checkEqual(true,  parts.isObjectTypeAll(map1));

        // initializse nothing cloneMap
        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        clone.add(cloneFunction.cloneIgnoreFunction);
        clone.add(cloneFunction.cloneRegExp);
        clone.add(cloneFunction.cloneDate);

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        cloneDeep.add(cloneFunction.cloneIgnoreFunction);
        cloneDeep.add(cloneFunction.cloneRegExp);
        cloneDeep.add(cloneFunction.cloneDate);

        var map2 = clone(map1);
        checkEqual(undefined, map2.get('key1'));  // no clone
        checkEqual(false, map1 === map2);

        var map2 = cloneDeep(map1);
        checkEqual(undefined, map2.get('key1'));  // no clone
        checkEqual(false, map1 === map2);

        clone.reset();
        cloneDeep.reset();

        var map2 = clone(map1);
        checkEqual('value1', map2.get('key1')); // clone
        checkEqual(false, map1 === map2);

        var map2 = cloneDeep(map1);
        checkEqual('value1', map2.get('key1')); // clone
        checkEqual(false, map1 === map2);

        // map object array
        var map1 = new Map();
        map1.set('a', { a: '1' });
        map1.set('b', ['b']);
        map1.set('c', { a: [1, 2, 3, { b: 'c'}] });
        map1.set('d', [1, 2, 3, { b: 'c', d: [4, 5, 6] }]);
        var map2 = cloneDeep(map1);
        checkEqual(false, map1 === map2);
        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6,   map2.get('d')[3].d[2]);

        // clone map
        var object1 = { a: '1' };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = clone(map1);
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(true,  map1.get('a') === map2.get('a'));

        // cloneDeep map
        var object1 = { a: '1' };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1);
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(false, map1.get('a') === map2.get('a'));
      });
    };

    const test_cloneDeep_set = () => {
      it('test_cloneDeep_set', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        const set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true,  set1.has('value1'));
        checkEqual(true,  set1.has('value2'));
        checkEqual(false, set1.has('value3'));

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, parts.isObjectAll(set1));
        } else {
          checkEqual(true, parts.isObjectAll(set1));
        }
        checkEqual(true,  parts.isObjectTypeAll(set1));

        // initializse nothing cloneSet
        clone.clear();
        clone.add(cloneFunction.cloneObjectType);
        clone.add(cloneFunction.cloneIgnoreFunction);
        clone.add(cloneFunction.cloneRegExp);
        clone.add(cloneFunction.cloneDate);

        cloneDeep.clear();
        cloneDeep.add(cloneFunction.cloneObjectType);
        cloneDeep.add(cloneFunction.cloneIgnoreFunction);
        cloneDeep.add(cloneFunction.cloneRegExp);
        cloneDeep.add(cloneFunction.cloneDate);

        var set2 = clone(set1);
        checkEqual(false, set2.has('value1'));  // no clone

        var set2 = cloneDeep(set1);
        checkEqual(false, set2.has('value1'));  // no clone

        clone.reset();
        cloneDeep.reset();

        if (parts.platform.isInternetExplorer()) {
          var set2 = clone(set1);
          checkEqual(false, set2.has('value1'));  // clone
          checkEqual(false, set1 === set2);

          var set2 = cloneDeep(set1);
          checkEqual(false, set2.has('value1'));  // clone
          checkEqual(false, set1 === set2);
        } else {
          var set2 = clone(set1);
          checkEqual(true, set2.has('value1'));  // clone
          checkEqual(false, set1 === set2);

          var set2 = cloneDeep(set1);
          checkEqual(true, set2.has('value1'));  // clone
          checkEqual(false, set1 === set2);
        }

      });
    };

    const test_cloneDeep_CircularReference = () => {
      it('test_cloneDeep_CircularReference', () => {
        const object1 = { b: 'test' };
        object1.a = object1;

        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b);

        const object2 = cloneDeep(object1);
        checkEqual('test', object2.b);
        checkEqual('test', object2.a.b);
        checkEqual('test', object2.a.a.b);

        checkEqual(false, object1 === object2);
        checkEqual(true,  object1.a === object1);
        checkEqual(true,  object2.a === object2);
        checkEqual(false, object2.a === object1.a);
      });
    };

    test_clone_object();
    test_clone_array();
    test_clone_date();
    test_clone_function();
    test_clone_regexp();

    test_cloneDeep_object();
    test_cloneDeep_array();
    test_cloneDeep_object_array_mix();
    test_cloneDeep_date();
    test_cloneDeep_function();
    test_cloneDeep_regExp();

    test_cloneDeep_moment();
    test_cloneDeep_symbol();
    test_cloneDeep_map();
    test_cloneDeep_set();

    test_cloneDeep_CircularReference();

  });
};

module.exports = {
  test_execute_root,
};
