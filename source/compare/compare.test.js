/* eslint-disable max-len */
/* eslint-disable no-var */
export const test_execute_compare = (parts) => {
  const { describe, it, testCounter } = parts.test;
  describe('test_execute_compare', () => {

    const {
      isNull, isUndefined, isNaNStrict,
      isBoolean, isNumber, isInteger, isString,
      isFunction, isObject, isObjectLike,
      isArray, isDate, isRegExp,
      isException,
      isEmptyObject, isEmptyArray,

      isNotNull, isNotUndefined, isNotNaNStrict,
      isNotBoolean, isNotNumber, isNotInteger, isNotString,
      isNotFunction, isNotObject, isNotObjectType,
      isNotArray, isNotDate, isNotRegExp,
      isNotException,
      isNotEmptyObject, isNotEmptyArray,

      isUndefinedArray, isNullArray, isNaNStrictArray,
      isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
      isFunctionArray,
      isObjectArray, isObjectNormalArray, isObjectFromNullArray,
      isObjectLikeArray, isModuleArray,
      isArrayArray, isArraySeriesArray,
      isDateArray, isRegExpArray,
      isExceptionArray,
      isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
      isEmptyObjectArray, isEmptyArrayArray,
      isSymbolArray,
      isMapArray, isWeakMapArray,
      isSetArray, isWeakSetArray,
    } = parts.type;

    const {
      checkEqual,
      expect,
      isThrown,
      isThrownException,
    } = parts.test;

    const {
      equal,
      // equalDeep,
      or,
      match,
      matchValue, initialValue,
      allMatch, someMatch, indexOfMatch,
      matchSome, matchSomeValue,
      allMatchSome, someMatchSome, indexOfMatchSome,
      matchAll, matchAllValue,
      allMatchAll, someMatchAll, indexOfMatchAll,
      includes, includesSome, includesAll,
    } = parts.compare;

    const {
      isFirst,
    } = parts.string;

    const test_equal = () => {
      it('test_equal', () => {
        // Primitive value
        checkEqual(true,  equal(1,   1));
        checkEqual(false, equal(1,   2));
        checkEqual(true,  equal('1', '1'));
        checkEqual(false, equal('1',   1));
        checkEqual(true,  equal(null, null));
        checkEqual(true,  equal(undefined, undefined));
        checkEqual(true,  equal(undefined));
        checkEqual(false, equal(null, undefined));
        checkEqual(false, equal(null));

        // named argument
        checkEqual(true,  equal({ value1:  1, value2:  1 }));
        checkEqual(true,  equal({ value1:'1', value2:'1' }));
        checkEqual(false, equal({ value1:'1', value2:  1 }));
      });

    };

    const test_equal_object = () => {
      it('test_equal_object', () => {
        // object
        checkEqual(true,
          equal({ },   { }),
        );
        checkEqual(false,
          equal({ a: {} },   { a: {} }),
        );
        checkEqual(true,
          equal({ a: '1', b: '2' },   { a: '1', b: '2' }),
          'test_equal object 1');
        checkEqual(false,
          equal({ a: '2', b: '2' },   { a: '1', b: '2' }),
          'test_equal object 2');

        checkEqual(false,
          equal({ a: '1', b: '2', c: {} },   { a: '1', b: '2', c: {} }),
          'test_equal object 3');
        checkEqual(false,
          equal({ a: '1', b: '2', c: [] },   { a: '1', b: '2', c: [] }),
          'test_equal object 4');
      });
    };

    const test_equal_array = () => {
      it('test_equal_array', () => {
        checkEqual(true,  equal([],   []));
        checkEqual(false, equal([[]],   [[]]));

        checkEqual(true,  equal([1], [1]));
        checkEqual(false, equal([1], [2]));
        checkEqual(true,  equal([1, 2], [1, 2]));
        checkEqual(false, equal([1, 2], [2, 2]));
        checkEqual(true,  equal([1, 2, 3], [1, 2, 3]));
        checkEqual(false, equal([[1, 2], 3], [[1, 2], 3]));
        checkEqual(false, equal([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(false, equal([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2, 3]], [1, 2, 3]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [3], 3]]));

        checkEqual(true,  equal(['a'], ['a']));
        checkEqual(false, equal(['a'], ['b']));
        checkEqual(true,  equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal(['a', 'a'], ['a', 'b']));
        checkEqual(true,  equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equal([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['a'], 'c']]));

        checkEqual(true,  equal([undefined], [undefined]));
        checkEqual(false, equal([undefined], [null]));
        checkEqual(true,  equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([undefined, undefined], [undefined, null]));
        checkEqual(true,  equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equal([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, ['a'], undefined]]));

        // Object Named Parameter
        checkEqual(true,  equal({
          value1:   [1, 2, 3, 4],
          value2:   [1, 2, 3, 4],
        }));
        checkEqual(false,  equal({
          value1:   [1, 2, 3, 4],
          value2:   [1, 2, 3, 5],
        }));
      });
    };

    const test_equal_date = () => {
      it('test_equal_date', () => {
        // date
        checkEqual(true,
          equal(new Date('2019/11/02'),  new Date('2019/11/02')),
          'test_equal date');
        // date in object
        checkEqual(false,
          equal({ date: new Date('2019/11/02') },  { date: new Date('2019/11/02') }),
          'test_equal date');
        // date in array
        checkEqual(false,
          equal([new Date('2019/11/02')],  [new Date('2019/11/02')]),
          'test_equal date');

        // invalid date
        checkEqual(true,
          equal(new Date(''),  new Date('')),
          'test_equal date');
        // invalid date in object
        checkEqual(false,
          equal({ date: new Date('') },  { date: new Date('') }),
          'test_equal date');
        // invalid date in array
        checkEqual(false,
          equal([new Date('')],  [new Date('')]),
          'test_equal date');

        // date ignore
        const equalFuncArray = [
          equal.func.regExp,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];

        // date
        checkEqual(false,
          equal(new Date('2019/11/02'),  new Date('2019/11/02'), equalFuncArray),
          'test_equal date');
        // date in object
        checkEqual(false,
          equal({ date: new Date('2019/11/02') },  { date: new Date('2019/11/02') }, equalFuncArray),
          'test_equal date');
        // date in array
        checkEqual(false,
          equal([new Date('2019/11/02')],  [new Date('2019/11/02')], equalFuncArray),
          'test_equal date');
      });
    };

    const test_equal_regexp = () => {
      it('test_equal_regexp', () => {
        // regexp
        checkEqual(true,
          equal(new RegExp(/^a/),  new RegExp(/^a/)),
          'test_equal regexp');
        // regexp in object
        checkEqual(false,
          equal({ reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) }),
          'test_equal regexp');
        // regexp in array
        checkEqual(false,
          equal([new RegExp(/^a/)],  [new RegExp(/^a/)]),
          'test_equal regexp');

        // regexp ignore
        const equalFuncArray = [
          equal.func.date,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];

        // regexp
        checkEqual(false,
          equal(new RegExp(/^a/),  new RegExp(/^a/), equalFuncArray),
          'test_equal regexp');
        // regexp in object
        checkEqual(false,
          equal({ reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) }, equalFuncArray),
          'test_equal regexp');
        // regexp in array
        checkEqual(false,
          equal([new RegExp(/^a/)],  [new RegExp(/^a/)], equalFuncArray),
          'test_equal regexp');
      });
    };

    const test_equal_map = () => {
      it('test_equal_map', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // Map
        var map1 = new Map();
        map1.set('a', 1); map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1); map2.set('b', 2);
        checkEqual(true,
          equal(map1,  map2),
          'test_equal Map');
        // Map in object
        checkEqual(false,
          equal({ map: map1 }, { map: map2 }),
          'test_equal Map');
        // Map in array
        checkEqual(false,
          equal([map1],  [map2]),
          'test_equal Map');

        // ignore Map
        const equalFuncArray = [
          equal.func.date,
          equal.func.regExp,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];
        checkEqual(false, equal(map1,  map2, equalFuncArray));

        // Map in object
        checkEqual(false,
          equal({ map: map1 }, { map: map2 }),
          'test_equal Map');
        // Map in array
        checkEqual(false,
          equal([map1],  [map2]),
          'test_equal Map');
      });

    };

    const test_equal_set = () => {
      it('test_equal_set', () => {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // Set
        var set1 = new Set();
        set1.add('a'); set1.add('b');
        var set2 = new Set();
        set2.add('a'); set2.add('b');
        checkEqual(true,
          equal(set1,  set2),
          'test_equal Set');
        // Set in object
        checkEqual(false,
          equal({ set: set1 }, { set: set2 }),
          'test_equal Set');
        // Set in array
        checkEqual(false,
          equal([set1],  [set2]),
          'test_equal Set');

        // ignore Set
        const equalFuncArray = [
          equal.func.date,
          equal.func.regExp,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];
        checkEqual(false, equal(set1,  set2, equalFuncArray));

        // Set in object
        checkEqual(false,
          equal({ set: set1 }, { set: set2 }),
          'test_equal Set');
        // Set in array
        checkEqual(false,
          equal([set1],  [set2]),
          'test_equal Set');

      });

    };

    const test_equalDeep = (objectParameter = true) => {
      it('test_equalDeep', () => {
        // Primitive value
        checkEqual(true,  equalDeep(1,   1));
        checkEqual(false, equalDeep(1,   2));
        checkEqual(true,  equalDeep('1', '1'));
        checkEqual(false, equalDeep('1',   1));
        checkEqual(true,  equalDeep(null, null));
        checkEqual(true,  equalDeep(undefined, undefined));
        checkEqual(true,  equalDeep(undefined));
        checkEqual(false, equalDeep(null, undefined));
        checkEqual(false, equalDeep(null));

        if (objectParameter === false) {
          return;
        }
        // named argument
        checkEqual(true,  equalDeep({ value1:  1, value2:  1 }));
        checkEqual(true,  equalDeep({ value1:'1', value2:'1' }));
        checkEqual(false, equalDeep({ value1:'1', value2:  1 }));
      });

    };

    const test_equalDeep_object = () => {
      it('test_equalDeep_object', () => {
        // object
        checkEqual(true,
          equalDeep({ },   { }),
        );
        checkEqual(true,
          equalDeep({ a: {} },   { a: {} }),
        );
        checkEqual(true,
          equalDeep({ a: '1', b: '2' },   { a: '1', b: '2' }),
        );
        checkEqual(false,
          equalDeep({ a: '2', b: '2' },   { a: '1', b: '2' }),
        );

        checkEqual(true,
          equalDeep({ a: '1', b: '2', c: {} },   { a: '1', b: '2', c: {} }),
        );
        checkEqual(true,
          equalDeep({ a: '1', b: '2', c: [] },   { a: '1', b: '2', c: [] }),
        );

        checkEqual(false,
          equalDeep({ a: '1', b: '2', c: {} },   { a: '1', b: '2', c: {}, d: '' }),
        );
        checkEqual(false,
          equalDeep({ a: '1', b: '2', c: [] },   { a: '1', b: '2', c: [], d: '' }),
        );

        checkEqual(false,
          equalDeep({ a: '1', b: '2', c: {}, d: '' },   { a: '1', b: '2', c: {} }),
        );
        checkEqual(false,
          equalDeep({ a: '1', b: '2', c: [], d: '' },   { a: '1', b: '2', c: [] }),
        );

        checkEqual(true,
          equalDeep({ a: { b: 'B', c: 'C' } }, { a: { b: 'B', c: 'C' } }),
        );
        checkEqual(false,
          equalDeep({ a: { b: 'B', c: 'C' } }, { a: { b: 'B', c: 'c' } }),
        );
        checkEqual(false,
          equalDeep({ a: { b: 'B', c: 'C' } }, { a: { b: 'B' } }),
        );
        checkEqual(false,
          equalDeep({ a: { b: 'B' } }, { a: { b: 'B', c: 'C' } }),
        );

      });

    };

    const test_equalDeep_object_array_mix = () => {
      it('test_equalDeep_object_array_mix', () => {

        // equal false array object
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        var testValue2 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        checkEqual(false, equal(testValue1, testValue2));
        // equalDeep true array object
        checkEqual(true,  equalDeep(testValue1, testValue2));

        // equal false object array
        var testValue1 = { a: 1, b: 2, c: 3, d: [1, 2, 3] };
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3] };
        checkEqual(false, equal(testValue1, testValue2));
        // equalDeep true object array
        checkEqual(true,  equalDeep(testValue1, testValue2));

        // equal false array object array
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
        var testValue2 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
        checkEqual(false, equal(testValue1, testValue2));
        // equalDeep true array object array
        checkEqual(true,  equalDeep(testValue1, testValue2));

        // equal false object array object
        var testValue1 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3] };
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3] };
        checkEqual(false, equal(testValue1, testValue2));
        // equalDeep true object array object
        checkEqual(true,  equalDeep(testValue1, testValue2));

      });

    };

    const test_equalDeep_object_CircularReference = () => {
      it('test_equalDeep_object_CircularReference', () => {
        // CircularReference
        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object1;
        object2.obj = object2;
        checkEqual(true,
          equalDeep(object1,  object2),
          'test_equalDeep CircularReference 1');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object1;
        object2.obj = object1;
        checkEqual(true,
          equalDeep(object1,  object2),
          'test_equalDeep CircularReference 2');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object2;
        object2.obj = object1;
        checkEqual(true,
          equalDeep(object1,  object2),
          'test_equalDeep CircularReference 3');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object2;
        object2.obj = object2;
        checkEqual(true,
          equalDeep(object1,  object2),
          'test_equalDeep CircularReference 4');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        var object3 = { a: '1', b: '2', c: {} };
        object1.obj = object2;
        object2.obj = object3;
        checkEqual(false,
          equalDeep(object1,  object2),
          'test_equalDeep CircularReference 5');
      });

    };

    const test_equalDeep_array = (objectParameter = true) => {
      it('test_equalDeep_array', () => {
        checkEqual(true,  equalDeep([1, 2, {}],   [1, 2, {}]));
        checkEqual(true,  equalDeep([1, 2, [3]],   [1, 2, [3]]));

        checkEqual(true,  equalDeep([],   []));
        checkEqual(true,  equalDeep([[]],   [[]]));

        checkEqual(true,  equalDeep([1], [1]));
        checkEqual(false, equalDeep([1], [2]));
        checkEqual(true,  equalDeep([1, 2], [1, 2]));
        checkEqual(false, equalDeep([1, 2], [2, 2]));
        checkEqual(true,  equalDeep([1, 2, 3], [1, 2, 3]));
        checkEqual(true,  equalDeep([[1, 2], 3], [[1, 2], 3]));
        checkEqual(true,  equalDeep([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(true,  equalDeep([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2, 3]], [1, 2, 3]));
        checkEqual(true,  equalDeep([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equalDeep([[1, [2], 3]], [[1, [3], 3]]));

        checkEqual(true,  equalDeep(['a'], ['a']));
        checkEqual(false, equalDeep(['a'], ['b']));
        checkEqual(true,  equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(false, equalDeep(['a', 'a'], ['a', 'b']));
        checkEqual(true,  equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(true,  equalDeep([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equalDeep([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(true,  equalDeep([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equalDeep([['a', ['b'], 'c']], [['a', ['a'], 'c']]));

        checkEqual(true,  equalDeep([undefined], [undefined]));
        checkEqual(false, equalDeep([undefined], [null]));
        checkEqual(true,  equalDeep([undefined, null], [undefined, null]));
        checkEqual(false, equalDeep([undefined, undefined], [undefined, null]));
        checkEqual(true,  equalDeep([undefined, null], [undefined, null]));
        checkEqual(true,  equalDeep([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equalDeep([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(true,  equalDeep([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equalDeep([[undefined, [null], undefined]], [[undefined, ['a'], undefined]]));

        if (objectParameter === false) {
          return;
        }
        // Object Named Parameter
        checkEqual(true,  equalDeep({
          value1:   [1, 2, 3, 4],
          value2:   [1, 2, 3, 4],
        }));
        checkEqual(false,  equalDeep({
          value1:   [1, 2, 3, 4],
          value2:   [1, 2, 3, 5],
        }));

      });

    };

    const test_equalDeep_array_CircularReference = () => {
      it('test_equalDeep_array_CircularReference', () => {
        // CircularReference
        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array1);
        array2.push(array2);
        checkEqual(true,
          equalDeep(array1,  array2),
          'test_equalDeep array CircularReference 1');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array1);
        array2.push(array1);
        checkEqual(true,
          equalDeep(array1,  array2),
          'test_equalDeep array CircularReference 2');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array2);
        array2.push(array1);
        checkEqual(true,
          equalDeep(array1,  array2),
          'test_equalDeep array CircularReference 3');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array2);
        array2.push(array2);
        checkEqual(true,
          equalDeep(array1,  array2),
          'test_equalDeep array CircularReference 4');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        var array3 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array2);
        array2.push(array3);
        checkEqual(false,
          equalDeep(array1,  array2),
          'test_equalDeep array CircularReference 5');
      });

    };

    const test_equalDeep_date = () => {
      it('test_equalDeep_date', () => {
        // date
        checkEqual(true,
          equalDeep(new Date('2019/11/02'),  new Date('2019/11/02')),
          'test_equalDeep date');
        // date in object
        checkEqual(true,
          equalDeep({ date: new Date('2019/11/02') },  { date: new Date('2019/11/02') }),
          'test_equalDeep date');
        // date in array
        checkEqual(true,
          equalDeep([new Date('2019/11/02')],  [new Date('2019/11/02')]),
          'test_equalDeep date');

        // invalid date
        checkEqual(true,
          equalDeep(new Date(''),  new Date('')),
          'test_equal date');
        // invalid date in object
        checkEqual(true,
          equalDeep({ date: new Date('') },  { date: new Date('') }),
          'test_equal date');
        // invalid date in array
        checkEqual(true,
          equalDeep([new Date('')],  [new Date('')]),
          'test_equal date');


        // date ignore
        const equalFuncArray = [
          equal.func.regExp,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];

        // date
        checkEqual(false,
          equalDeep(new Date('2019/11/02'),  new Date('2019/11/02'), equalFuncArray),
          'test_equalDeep date');
        // date in object
        checkEqual(false,
          equalDeep({ date: new Date('2019/11/02') },  { date: new Date('2019/11/02') }, equalFuncArray),
          'test_equalDeep date in object');
        // date in array
        checkEqual(false,
          equalDeep([new Date('2019/11/02')],  [new Date('2019/11/02')], equalFuncArray),
          'test_equalDeep date');

      });

    };

    const test_equalDeep_regexp = () => {
      it('test_equalDeep_regexp', () => {
        // regexp
        checkEqual(true,
          equalDeep(new RegExp(/^a/),  new RegExp(/^a/)),
          'test_equal regexp');
        // regexp in object
        checkEqual(true,
          equalDeep({ reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) }),
          'test_equal regexp');
        // regexp in array
        checkEqual(true,
          equalDeep([new RegExp(/^a/)],  [new RegExp(/^a/)]),
          'test_equal regexp');

        // regexp ignore
        const equalFuncArray = [
          equal.func.value,
          equal.func.object,
          equal.func.arraySeries,
          equal.func.function,
          equal.func.date,
        ];

        // regexp
        checkEqual(false,
          equalDeep(new RegExp(/^a/),  new RegExp(/^a/), equalFuncArray),
          'test_equal regexp');
        // regexp in object
        checkEqual(false,
          equalDeep({ reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) }, equalFuncArray),
          'test_equal regexp');
        // regexp in array
        checkEqual(false,
          equalDeep([new RegExp(/^a/)],  [new RegExp(/^a/)], equalFuncArray),
          'test_equal regexp');

      });

    };

    const test_equalDeep_map = () => {
      it('test_equalDeep_map', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // Map
        var map1 = new Map();
        map1.set('a', 1); map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1); map2.set('b', 2);
        checkEqual(true,
          equalDeep(map1,  map2),
          'test_equal Map');
        // Map in object
        checkEqual(true,
          equalDeep({ map: map1 }, { map: map2 }),
          'test_equal Map');
        // Map in array
        checkEqual(true,
          equalDeep([map1],  [map2]),
          'test_equal Map');

        // ignore Map
        const equalFuncArray = [
          equal.func.date,
          equal.func.regExp,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];

        checkEqual(false,
          equalDeep(map1,  map2, equalFuncArray),
        );
        // Map in object
        checkEqual(false,
          equalDeep({ map: map1 }, { map: map2 }, equalFuncArray),
        );
        // Map in array
        checkEqual(false,
          equalDeep([map1],  [map2], equalFuncArray),
        );

      });

    };

    const test_equalDeep_map_object_array = () => {
      it('test_equalDeep_map_object_array', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // Map Object Array
        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        checkEqual(true,
          equalDeep(map1,  map2),
          'test_equal Map object array');
        // Map in object
        checkEqual(true,
          equalDeep({ map: map1 }, { map: map2 }),
          'test_equal Map object array');
        // Map in array
        checkEqual(true,
          equalDeep([map1],  [map2]),
          'test_equal Map object array');

        // more map add object
        var map1 = new Map();
        map1.set('a', { a: 1, b: 2, c: { c1: 10 } });
        map1.set('b', { c: 3, b: 4 });
        var map2 = new Map();
        map2.set('a', { a: 1, b: 2, c: { c1: 10 } });
        map2.set('b', { c: 3, b: 4 });
        checkEqual(true,
          equalDeep({ map: map1 }, { map: map2 }),
          'test_equal Map set object');

        // more map set object
        var map1 = new Map();
        map1.set('a', { a: 1, b: 2, c: { c1: 10 } });
        map1.set('b', { c: 3, b: 4 });
        var map2 = new Map();
        map2.set('a', { a: 1, b: 2, c: { c1: 10 }, d: '' });
        map2.set('b', { c: 3, b: 4 });

        checkEqual(false, equalDeep({ map: map1 }, { map: map2 }));
      });

    };

    const test_equalDeep_map_CircularReference = () => {
      it('test_equalDeep_map_CircularReference', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // CircularReference
        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map2);
        checkEqual(true,
          equalDeep(map1,  map2),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map1);
        checkEqual(true,
          equalDeep(map1,  map2),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map2);
        checkEqual(true,
          equalDeep(map1,  map2),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map1);
        checkEqual(true,
          equalDeep(map1,  map2),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        var map3 = new Map();
        map3.set('a', { a: '1' }); map3.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map3);

        checkEqual(false, equalDeep(map1,  map2));
      });

    };

    const test_equalDeep_set = () => {
      it('test_equalDeep_set', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // Set
        var set1 = new Set();
        set1.add('a'); set1.add('b');
        var set2 = new Set();
        set2.add('a'); set2.add('b');
        checkEqual(true,
          equalDeep(set1,  set2),
          'test_equal Set1');
        // Set in object
        checkEqual(true,
          equalDeep({ set: set1 }, { set: set2 }),
          'test_equal Set2');
        // Set in array
        checkEqual(true,
          equalDeep([set1],  [set2]),
          'test_equal Set3');

        // ignore Set
        const equalFuncArray = [
          equal.func.date,
          equal.func.regExp,
          equal.func.function,
          equal.func.arraySeries,
          equal.func.object,
          equal.func.value,
        ];

        checkEqual(false,
          equalDeep(set1,  set2, equalFuncArray),
        );
        // Set in object
        checkEqual(false,
          equalDeep({ set: set1 }, { set: set2 }, equalFuncArray),
        );
        // Set in array
        checkEqual(false,
          equalDeep([set1],  [set2], equalFuncArray),
        );

      });

    };

    const test_equalDeep_set_object_array = () => {
      it('test_equalDeep_set_object_array', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // Set Object Array
        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        checkEqual(true,
          equalDeep(set1,  set2),
          'test_equal Set object array');
        // Set in object
        checkEqual(true,
          equalDeep({ map: set1 }, { map: set2 }),
          'test_equal Set object array');
        // Set in array
        checkEqual(true,
          equalDeep([set1],  [set2]),
          'test_equal Set object array');

        // more set add object object
        var set1 = new Set();
        set1.add({ a: 1, b: 2, c: { c1: 10 } });
        set1.add({ c: 3, b: 4 });
        var set2 = new Set();
        set2.add({ a: 1, b: 2, c: { c1: 10 } });
        set2.add({ c: 3, b: 4 });

        checkEqual(true, equalDeep({ set: set1 }, { set: set2 }));

        // more set add object object
        var set1 = new Set();
        set1.add({ a: 1, b: 2, c: { c1: 10 } });
        set1.add({ c: 3, b: 4 });
        var set2 = new Set();
        set2.add({ a: 1, b: 2, c: { c1: 10 }, d: '' });
        set2.add({ c: 3, b: 4 });

        checkEqual(false, equalDeep({ set: set1 }, { set: set2 }));

      });

    };

    const test_equalDeep_set_CircularReference = () => {
      it('test_equalDeep_set_CircularReference', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        // CircularReference
        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set1);
        set2.add(set2);
        checkEqual(true,
          equalDeep({ set: set1 }, { set: set2 }),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set1);
        set2.add(set1);
        checkEqual(true,
          equalDeep({ set: set1 }, { set: set2 }),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set2);
        set2.add(set2);
        checkEqual(true,
          equalDeep({ set: set1 }, { set: set2 }),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set2);
        set2.add(set1);
        checkEqual(true,
          equalDeep({ set: set1 }, { set: set2 }),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        var set3 = new Set();
        set3.add({ a: '1' }); set3.add(['b']);
        set1.add(set2);
        set2.add(set3);

        checkEqual(false, equalDeep({ set: set1 }, { set: set2 }));
      });

    };

    const test_or = () => {
      it('test_or', () => {
        var value;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [null]));
        checkEqual(false, or(value, [null, null]));
        checkEqual(false, or(value, [null, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true,  or(value, [undefined]));
        checkEqual(true,  or(value, [undefined, null]));
        checkEqual(true,  or(value, [null, undefined]));
        checkEqual(true,  or(value, [undefined, undefined]));
        checkEqual(true,  or(value, [undefined, 0]));
        value = null;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [undefined]));
        checkEqual(false, or(value, [undefined, undefined]));
        checkEqual(false, or(value, [undefined, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true,  or(value, [null]));
        checkEqual(true,  or(value, [null, undefined]));
        checkEqual(true,  or(value, [undefined, null]));
        checkEqual(true,  or(value, [null, null]));
        checkEqual(true,  or(value, [null, 0]));
        value = 1;
        checkEqual(true,  or(value, [1]));
        checkEqual(true,  or(value, [1, 2]));
        checkEqual(true,  or(value, [1, 2, 3]));
        checkEqual(false, or(value, [2]));
        checkEqual(false, or(value, [2, 3]));

        // exception
        checkEqual(true, isThrown(
          () => { or(123, 456); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
          'or args(compareArray) is not array'
          ),
        ));

        checkEqual(true,  or({ value: 1, compareArray: [1, 2] }));
        checkEqual(false, or({ value: 0, compareArray: [1, 2] }));

        // exception
        checkEqual(false, isThrown(
          () => { or({ value: 1, compareArray: [1, 2] }); },
        ));
        checkEqual(true, isThrown(
          () => { or({ value: 1, array: [1, 2] }); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
        'or args(compareArray) is not array'
          ),
        ));
        checkEqual(true, isThrown(
          () => { or({ value1: 1, compareArray: [1, 2] }); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
        'or args(compareArray) is not array'
          ),
        ));
        checkEqual(false, isThrown(
          () => { or({ value1: 1, compareArray: [1, 2] }, []); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
        'or args(compareArray) is not array'
          ),
        ));
      });
    };

    const test_match = () => {
      it('test_match', () => {
        const { stringToInteger } = parts;

        checkEqual(false,   match('', null));
        checkEqual(true,    match('', ''));
        checkEqual(false,   match('123', null));
        checkEqual(false,   match('123', undefined));
        checkEqual(false,   match('123', 123));
        checkEqual(true,    match('123', '123'));
        checkEqual(false,   match(undefined, null));
        checkEqual(true,    match(undefined, undefined));
        checkEqual(true,    match(null, null));
        checkEqual(false,   match(null, undefined));

        checkEqual(true,    match('1',       isString));
        checkEqual(false,   match(1,         isString));
        checkEqual(false,   match(null,      isString));
        checkEqual(false,   match(undefined, isString));

        checkEqual(true,    match({},    isEmptyObject));
        checkEqual(false,   match({ a:1 }, isEmptyObject));

        checkEqual(true,    match('100', '100'));
        checkEqual(false,   match('200', '100'));
        checkEqual(false,   match(100,   '100'));
        checkEqual(false,   match(200,   '100'));
        checkEqual(false,   match(null,  '100'));

        checkEqual(true,    match('100',     isString));
        checkEqual(true,    match('200',     isString));
        checkEqual(false,   match(100,       isString));
        checkEqual(false,   match(200,       isString));
        checkEqual(false,   match(null,      isString));
        checkEqual(false,   match(undefined, isString));

        checkEqual(false,   match('100',     isInteger));
        checkEqual(false,   match('200',     isInteger));
        checkEqual(true,    match(100,       isInteger));
        checkEqual(true,    match(200,       isInteger));
        checkEqual(false,   match(null,      isInteger));
        checkEqual(false,   match(undefined, isInteger));

        checkEqual(false, match({
          value: '123',
          compare: undefined,
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined,
        }));
        checkEqual(false, match({
          value: null,
          compare: undefined,
        }));

        // object parameter
        checkEqual(false,
          match({ value: null,       compare: undefined }));
        checkEqual(true,
          match({ value: undefined,  compare: undefined }));
        checkEqual(false,
          match(null,      { compare: undefined }));
        checkEqual(true,
          match(undefined, { compare: undefined }));

        // checkEqual(101,
        //   matchValue({ value: null,       compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue({ value: undefined,  compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      { compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, { compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, { match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, { match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, { unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, { unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, 101));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, 201));

      });
    };

    const test_matchValue = () => {
      it('test_matchValue', () => {
        const { stringToInteger } = parts;

        checkEqual('',          matchValue('', null,       999));
        checkEqual(999,         matchValue('', '',       999));
        checkEqual('123',       matchValue('123', null,       999));
        checkEqual('123',       matchValue('123', undefined,  999));
        checkEqual('123',       matchValue('123', 123,        999));
        checkEqual(999,         matchValue('123', '123',      999));
        checkEqual(undefined,   matchValue(undefined, null,       999));
        checkEqual(999,         matchValue(undefined, undefined,  999));
        checkEqual(999,         matchValue(null, null,      999));
        checkEqual(null,        matchValue(null, undefined, 999));

        checkEqual(1,           matchValue('1',       isString, stringToInteger));
        checkEqual(1,           matchValue(1,         isString, stringToInteger));
        checkEqual(null,        matchValue(null,      isString, stringToInteger));
        checkEqual(undefined,   matchValue(undefined, isString, stringToInteger));

        checkEqual('test',      matchValue({},    isEmptyObject, 'test'));
        checkEqual({ a:1 },       matchValue({ a:1 }, isEmptyObject, 'test'));

        checkEqual('$100',      matchValue('100', '100', (v) => '$' + v));
        checkEqual('200',       matchValue('200', '100', (v) => '$' + v));
        checkEqual(100,         matchValue(100,   '100', (v) => '$' + v));
        checkEqual(200,         matchValue(200,   '100', (v) => '$' + v));
        checkEqual(null,        matchValue(null,  '100', (v) => '$' + v));

        checkEqual('$100',      matchValue('100',     isString, v => '$' + v, ''));
        checkEqual('$200',      matchValue('200',     isString, v => '$' + v, ''));
        checkEqual('',          matchValue(100,       isString, v => '$' + v, ''));
        checkEqual('',          matchValue(200,       isString, v => '$' + v, ''));
        checkEqual('',          matchValue(null,      isString, v => '$' + v, ''));
        checkEqual('',          matchValue(undefined, isString, v => '$' + v, ''));

        checkEqual('?100',        matchValue('100',     isInteger, v => '$' + v, v => '?' + v));
        checkEqual('?200',        matchValue('200',     isInteger, v => '$' + v, v => '?' + v));
        checkEqual('$100',        matchValue(100,       isInteger, v => '$' + v, v => '?' + v));
        checkEqual('$200',        matchValue(200,       isInteger, v => '$' + v, v => '?' + v));
        checkEqual('?null',       matchValue(null,      isInteger, v => '$' + v, v => '?' + v));
        checkEqual('?undefined',  matchValue(undefined, isInteger, v => '$' + v, v => '?' + v));

        checkEqual('123', matchValue({
          value: '123',
          compare: undefined,
          match: 999,
        }));
        checkEqual(999, matchValue({
          value: undefined,
          compare: undefined,
          match: 999,
        }));
        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 999,
        }));

        // object parameter
        checkEqual(null,
          matchValue({ value: null,       compare: undefined, match: 100 }));
        checkEqual(200,
          matchValue({ value: undefined,  compare: undefined, match: 200 }));
        checkEqual(null,
          matchValue(null,      { compare: undefined, match: 100 }));
        checkEqual(200,
          matchValue(undefined, { compare: undefined, match: 200 }));
        checkEqual(null,
          matchValue(null,      undefined, { match: 100 }));
        checkEqual(200,
          matchValue(undefined, undefined, { match: 200 }));
        checkEqual(null,
          matchValue(null,      undefined, 100));
        checkEqual(200,
          matchValue(undefined, undefined, 200));

        checkEqual(101,
          matchValue({ value: null,       compare: undefined, match: 100, unmatch: 101 }));
        checkEqual(200,
          matchValue({ value: undefined,  compare: undefined, match: 200, unmatch: 201 }));
        checkEqual(101,
          matchValue(null,      { compare: undefined, match: 100, unmatch: 101 }));
        checkEqual(200,
          matchValue(undefined, { compare: undefined, match: 200, unmatch: 201 }));
        checkEqual(101,
          matchValue(null,      undefined, { match: 100, unmatch: 101 }));
        checkEqual(200,
          matchValue(undefined, undefined, { match: 200, unmatch: 201 }));
        checkEqual(101,
          matchValue(null,      undefined, 100, { unmatch: 101 }));
        checkEqual(200,
          matchValue(undefined, undefined, 200, { unmatch: 201 }));
        checkEqual(101,
          matchValue(null,      undefined, 100, 101));
        checkEqual(200,
          matchValue(undefined, undefined, 200, 201));

      });
    };

    const test_initialValue = () => {
      it('test_initialValue', () => {
        // almost test_matchSome done
        checkEqual('123', initialValue('123', 999));
        checkEqual(999,   initialValue(undefined, 999));
        checkEqual(null,  initialValue(null, 999));

        checkEqual('123', initialValue({
          value: '123', match: 999,
        }));
        checkEqual(999, initialValue({
          value: undefined, match: 999,
        }));
        checkEqual(null, initialValue({
          value: null, match: 999,
        }));

        checkEqual('[object Object]', String(initialValue({}, 'test')));
        checkEqual('null',            String(initialValue(null, {})));
        checkEqual('[object Object]', String(initialValue(undefined, {})));

        // object parameter
        checkEqual(null,
          initialValue({ value: null,       match: 100 }));
        checkEqual(200,
          initialValue({ value: undefined,  match: 200 }));
        checkEqual(null,
          initialValue(null,      { match: 100 }));
        checkEqual(200,
          initialValue(undefined, { match: 200 }));
        checkEqual(null,
          initialValue(null,      100));
        checkEqual(200,
          initialValue(undefined, 200));

        checkEqual(100,
          initialValue({
            value: null,       match: 100, compareArray: [undefined, null],
          }));
        checkEqual(200,
          initialValue({
            value: undefined,  match: 200, compareArray: [undefined, null],
          }));
        checkEqual(null,
          initialValue({
            value: null,       match: 100, compareArray: [undefined],
          }));
        checkEqual(100,
          initialValue(null,      { match: 100,  compareArray: [undefined, null] }));
        checkEqual(200,
          initialValue(undefined, { match: 200,  compareArray: [undefined, null] }));
        checkEqual(null,
          initialValue(null,      { match: 100,  compareArray: [undefined] }));
        checkEqual(100,
          initialValue(null,      100, { compareArray: [undefined, null] }));
        checkEqual(200,
          initialValue(undefined, 200, { compareArray: [undefined, null] }));
        checkEqual(null,
          initialValue(null,      100, { compareArray: [undefined] }));
      });
    };


    const test_allMatch = () =>{
      it('test_allMatch', () => {
        checkEqual(true,
          allMatch([10, 20, 30], value => value > 5),
        );
        checkEqual(false,
          allMatch([10, 20, 30], value => value > 15),
        );
        checkEqual(true,
          allMatch([null, undefined], value => value == null),
        );
        checkEqual(false,
          allMatch([null, undefined], null),
        );

        checkEqual(false, isThrown(() => {
          allMatch([10], value => value > 15);
        }));
        checkEqual(true, isThrown(() => {
          allMatch(10, value => value > 15);
        }));

        // object parameter
        checkEqual(true,
          allMatch({ valueArray: [10, 20, 30], compare: value => value > 5 }));
        checkEqual(false,
          allMatch({ valueArray: [10, 20, 30], compare: value => value > 15 }));
        checkEqual(true,
          allMatch([10, 20, 30], { compare: value => value > 5 }));
        checkEqual(false,
          allMatch([10, 20, 30], { compare: value => value > 15 }));

      });

    };

    const test_someMatch = () =>{
      it('test_someMatch', () => {
        checkEqual(true,
          someMatch([10, 20, 30], value => value > 5)
          , 'test_match');
        checkEqual(true,
          someMatch([10, 20, 30], value => value > 25),
        );
        checkEqual(false,
          someMatch([10, 20, 30], value => value > 35),
        );
        checkEqual(true,
          someMatch([null, undefined], null),
        );
        checkEqual(true,
          someMatch([null, undefined], isUndefined),
        );
        checkEqual(true,
          someMatch([null, undefined], isNull),
        );
        checkEqual(true,
          someMatch([null, undefined, NaN], isNaNStrict),
        );

        // object parameter
        checkEqual(true,
          someMatch({ valueArray: [10, 20], compare: v => v > 15 }));
        checkEqual(false,
          someMatch({ valueArray: [10, 15], compare: v => v > 15 }));
        checkEqual(true,
          someMatch([10, 20], { compare: v => v > 15 }));
        checkEqual(false,
          someMatch([10, 15], { compare: v => v > 15 }));

        // exception
        checkEqual(false, isThrown(() => {
          someMatch([10], value => value > 15);
        }));
        checkEqual(true, isThrown(() => {
          someMatch(10, value => value > 15);
        }));

      });

    };

    const test_indexOfMatch = () =>{
      it('test_indexOfMatch', () => {
        checkEqual(0,
          indexOfMatch([10, 20, 30], value => value > 5),
        );
        checkEqual(2,
          indexOfMatch([10, 20, 30], value => value > 25),
        );
        checkEqual(-1,
          indexOfMatch([10, 20, 30], value => value > 35),
        );
        checkEqual(0,
          indexOfMatch([null, undefined], null),
        );
        checkEqual(1,
          indexOfMatch([null, undefined], isUndefined),
        );
        checkEqual(0,
          indexOfMatch([null, undefined], isNull),
        );
        checkEqual(2,
          indexOfMatch([null, undefined, NaN], isNaNStrict),
        );

        checkEqual(false, isThrown(() => {
          indexOfMatch([10], value => value > 15);
        }));
        checkEqual(true, isThrown(() => {
          indexOfMatch(10, value => value > 15);
        }));

        // object parameter
        checkEqual(1,
          indexOfMatch({ valueArray: [10, 20, 30], compare: value => value > 15 }));
        checkEqual(-1,
          indexOfMatch({ valueArray: [10, 20, 30], compare: value => value > 35 }));
        checkEqual(2,
          indexOfMatch([10, 20, 30], { compare: value => value > 25 }));
        checkEqual(-1,
          indexOfMatch([10, 20, 30], { compare: value => value > 35 }));

      });

    };

    const test_matchSome = () => {
      it('test_matchSome', () => {
        // normal args string
        checkEqual(false, matchSome('abc', ['123', '456', '789']), 'test_match 1');
        checkEqual(true,  matchSome('abc', ['123', '456', 'abc']), 'test_match 2');
        checkEqual(false, matchSome('abc', ['123', '456', /^b/]), 'test_match 3');
        checkEqual(true,  matchSome('abc', ['123', '456', /^a/]), 'test_match 4');
        checkEqual(false, matchSome('abc', []), 'test_match 5');
        checkEqual(false, matchSome('123', [null, undefined, 123, 'abc']), 'test_match 6');
        checkEqual(true,  matchSome('abc', [(value) => isFirst(value, 'a')]), 'test_match 7');
        checkEqual(false, matchSome('abc', [(value) => isFirst(value, 'b')]), 'test_match 8');

        // normal args number
        checkEqual(false, matchSome(123, ['123', '456', '789']), 'test_match number 1');
        checkEqual(true,  matchSome(123, [123, 456, 'abc']), 'test_match number 2');
        checkEqual(false, matchSome(123, ['123', '456', /^1/]), 'test_match number 3');
        checkEqual(true,  matchSome(123, [123, '456', /^1/]), 'test_match number 4');
        checkEqual(false, matchSome(123, []), 'test_match number 5');
        checkEqual(true,  matchSome(123, [null, undefined, 123, 'abc']), 'test_match number 6');
        checkEqual(true,  matchSome(100, [(value) => 100 <= value]), 'test_match 7');
        checkEqual(false, matchSome(99,  [(value) => 100 <= value]), 'test_match 8');

        checkEqual(true, matchSome(null,      [null, undefined, 123, 'abc']), 'test_match 1');
        checkEqual(true, matchSome(undefined, [null, undefined, 123, 'abc']), 'test_match 2');
        checkEqual(true, matchSome(123,       [null, undefined, 123, 'abc']), 'test_match 3');
        checkEqual(true, matchSome('abc',     [null, undefined, 123, 'abc']), 'test_match 4');

        checkEqual(true,  matchSome(1,    [null, undefined, 1, '1']));
        checkEqual(false, matchSome(1,    [null, undefined, 2, '1']));
        checkEqual(true,  matchSome('1',  [null, undefined, 1, '1']));
        checkEqual(false, matchSome('1',  [null, undefined, 1, '2']));

        checkEqual(true,  matchSome(null,      [null, undefined, 0]));
        checkEqual(true,  matchSome(undefined, [null, undefined, 0]));
        checkEqual(true,  matchSome(0,         [null, undefined, 0]));
        checkEqual(false, matchSome(null,      [undefined, 0]));
        checkEqual(false, matchSome(undefined, [null, 0]));
        checkEqual(false, matchSome(0,         [null, undefined]));

        checkEqual(true,  matchSome(null,       [null, undefined]));
        checkEqual(true,  matchSome(null,       [null, undefined, isEmptyArray]));
        checkEqual(true,  matchSome(null,       [null, undefined, isEmptyObject]));
        checkEqual(true,  matchSome(undefined,  [null, undefined]));
        checkEqual(true,  matchSome(undefined,  [null, undefined, isEmptyArray]));
        checkEqual(true,  matchSome(undefined,  [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome([],         [null, undefined]));
        checkEqual(true,  matchSome([],         [null, undefined, isEmptyArray]));
        checkEqual(false, matchSome([],         [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome({},         [null, undefined]));
        checkEqual(false, matchSome({},         [null, undefined, isEmptyArray]));
        checkEqual(true,  matchSome({},         [null, undefined, isEmptyObject]));

        // exception
        checkEqual(true, isThrownException(
          () => { matchSome('123', 'abc'); },
          (new TypeError).name,
        ));

        // Object Named Parameter string
        checkEqual(false, matchSome({
          value: 'abc', compareArray: ['123', '456', '789'],
        }), 'test_match param 1');
        checkEqual(true,  matchSome({
          value: 'abc', compareArray: ['123', '456', 'abc'],
        }), 'test_match param 2');
        checkEqual(false,  matchSome({
          value: 'abc', compareArray: ['123', '456', /^b/],
        }), 'test_match param 3');
        checkEqual(true,  matchSome({
          value: 'abc', compareArray: ['123', '456', /^a/],
        }), 'test_match param 4');
        checkEqual(false,  matchSome({
          value: 'abc', compareArray: [],
        }), 'test_match param 5');
        checkEqual(false, matchSome({
          value: '123', compareArray: [null, undefined, 123, 'abc'],
        }), 'test_match param 6');
        checkEqual(true,  matchSome({
          value: 'abc', compareArray: [(value) => isFirst(value, 'a')],
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 'abc', compareArray: [(value) => isFirst(value, 'b')],
        }), 'test_match param 8');

        checkEqual(false, matchSome(
          'abc', { compareArray: ['123', '456', '789'],
          }));
        checkEqual(true,  matchSome(
          'abc', { compareArray: ['123', '456', 'abc'],
          }));

        // Object Named Parameter number
        checkEqual(false, matchSome({
          value: 123, compareArray: ['123', '456', '789'],
        }), 'test_match param number 1');
        checkEqual(true,  matchSome({
          value: 123, compareArray: [123, 456, 'abc'],
        }), 'test_match param number 2');
        checkEqual(false,  matchSome({
          value: 123, compareArray: ['123', '456', /^1/],
        }), 'test_match param number 3');
        checkEqual(true,  matchSome({
          value: 123, compareArray: [123, '456', /^1/],
        }), 'test_match param number 4');
        checkEqual(false,  matchSome({
          value: 123, compareArray: [],
        }), 'test_match param number 5');
        checkEqual(true,  matchSome({
          value: 123, compareArray: [null, undefined, 123, 'abc'],
        }), 'test_match param number 6');
        checkEqual(true,  matchSome({
          value: 100, compareArray: [(value) => 100 <= value],
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 99,  compareArray: [(value) => 100 <= value],
        }), 'test_match param 8');

        checkEqual(false, matchSome(
          123, { compareArray: ['123', '456', '789'],
          }));
        checkEqual(true,  matchSome(
          123, { compareArray: [123, 456, 'abc'],
          }));

        // exception
        checkEqual(false, isThrown(
          () => {
            matchSome({
              value: '123', compareArray: ['123'],
            });
          },
        ), 'test_match thrown 1');
        checkEqual(false, isThrown(
          () => {
            matchSome({
              value: '123', compareArray: [],
            });
          },
        ), 'test_match thrown 2');
        checkEqual(false, isThrown(
          () => {
            matchSome({
              value: '123', compareArray: [123],
            });
          },
        ), 'test_match thrown 3');
        checkEqual(true, isThrown(
          () => {
            matchSome({
              value: '123', compareArray: 123,
            });
          },
          (e) => {
            return (e.name === (new TypeError).name) && (
              e.message ===
          'matchSome args(compareArray) is not array'
            );
          },
        ), 'test_match thrown 4');
        checkEqual(true, isThrown(
          () => {
            matchSome({
              value1: '123', compareArray: [123],
            });
          },
        ), 'test_match thrown 5');
        checkEqual(false, isThrown(
          () => {
            matchSome({
              value1: '123', compareArray: [123],
            }, []);
          },
        ), 'test_match thrown 5');

        checkEqual(false, matchSome(
          {
            value1: '123', compareArray: [123],
          },
          [],
        ));
        checkEqual(true, matchSome(
          {
            value1: '123', compareArray: [123],
          },
          [() => true],
        ));
        checkEqual(false, matchSome(
          {
            value1: '123', compareArray: [123],
          },
          [() => false],
        ));
        checkEqual(true, matchSome(
          {
            value1: '123', compareArray: [123],
          },
          [(value) => isObject(value)],
        ));
      });
    };

    const test_matchSomeValue = () => {
      it('test_matchSomeValue', () => {
        // almost test_matchSome done
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(98, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(97, [99, 98, 97], 999));
        checkEqual(96,  matchSomeValue(96, [99, 98, 97], 999));

        checkEqual(999, matchSomeValue({
          value: 99, compareArray: [99, 98, 97], match: 999, unmatch: 100 }));
        checkEqual(100, matchSomeValue({
          value: 96, compareArray: [99, 98, 97], match: 999, unmatch: 100 }));
        checkEqual(999, matchSomeValue(
          99, { compareArray: [99, 98, 97], match: 999, unmatch: 100 }));
        checkEqual(100, matchSomeValue(
          96, { compareArray: [99, 98, 97], match: 999, unmatch: 100 }));
        checkEqual(999, matchSomeValue(
          99, [99, 98, 97], { match: 999, unmatch: 100 }));
        checkEqual(100, matchSomeValue(
          96, [99, 98, 97], { match: 999, unmatch: 100 }));
        checkEqual(999, matchSomeValue(
          99, [99, 98, 97], 999, { unmatch: 100 }));
        checkEqual(100, matchSomeValue(
          96, [99, 98, 97], 999, { unmatch: 100 }));

        checkEqual(999, matchSomeValue({
          value: 99, compareArray: [99, 98, 97], match: 999 }));
        checkEqual(96, matchSomeValue({
          value: 96, compareArray: [99, 98, 97], match: 999 }));
        checkEqual(999, matchSomeValue(
          99, { compareArray: [99, 98, 97], match: 999 }));
        checkEqual(96, matchSomeValue(
          96, { compareArray: [99, 98, 97], match: 999 }));
        checkEqual(999, matchSomeValue(
          99, [99, 98, 97], { match: 999 }));
        checkEqual(96, matchSomeValue(
          96, [99, 98, 97], { match: 999 }));
      });
    };

    const test_allMatchSome = () =>{
      it('test_allMatchSome', () => {
        checkEqual(true,
          allMatchSome([10, 20, 30], [value => value > 5]),
        );
        checkEqual(false,
          allMatchSome([10, 20, 30], [value => value > 15]),
        );
        checkEqual(true,
          allMatchSome([null, undefined], [null, undefined]),
        );
        checkEqual(false,
          allMatchSome([null, undefined], [null]),
        );
        checkEqual(true,
          allMatchSome([null, undefined], [isNull, isUndefined]),
        );
        checkEqual(false,
          allMatchSome([null, undefined], [isNull]),
        );
        checkEqual(false,
          allMatchSome([null, undefined, NaN], [null, undefined]),
        );
        checkEqual(false,
          allMatchSome([null, undefined, NaN], [null, undefined, NaN]),
        );
        checkEqual(true,
          allMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]),
        );

        // object parameter
        checkEqual(true,
          allMatchSome({ valueArray: [10, 30, 40], compareArray: [v => v < 15, v => 25 < v] }));
        checkEqual(false,
          allMatchSome({ valueArray: [10, 20, 30], compareArray: [v => v < 15, v => 25 < v] }));
        checkEqual(true,
          allMatchSome([10, 30, 40], { compareArray: [v => v < 15, v => 25 < v] }));
        checkEqual(false,
          allMatchSome([10, 20, 30], { compareArray: [v => v < 15, v => 25 < v] }));

        // exception
        checkEqual(false, isThrown(() => {
          allMatchSome([10], [value => value > 15]);
        }));
        checkEqual(true, isThrown(() => {
          allMatchSome(10, [value => value > 15]);
        }));
      });

    };

    const test_someMatchSome = () =>{
      it('test_someMatchSome', () => {
        checkEqual(true,
          someMatchSome([10, 20, 30], [value => value > 5])
          , 'test_matchSome');
        checkEqual(true,
          someMatchSome([10, 20, 30], [value => value > 25]),
        );
        checkEqual(false,
          someMatchSome([10, 20, 30], [value => value > 35]),
        );
        checkEqual(true,
          someMatchSome([null, undefined], [null, undefined]),
        );
        checkEqual(true,
          someMatchSome([null, undefined], [null]),
        );
        checkEqual(true,
          someMatchSome([null, undefined], [isNull, isUndefined]),
        );
        checkEqual(true,
          someMatchSome([null, undefined], [isNull]),
        );
        checkEqual(true,
          someMatchSome([null, undefined, NaN], [null, undefined]),
        );
        checkEqual(true,
          someMatchSome([null, undefined, NaN], [null, undefined, NaN]),
        );
        checkEqual(true,
          someMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]),
        );
        checkEqual(false,
          someMatchSome([null, undefined, NaN], [NaN]),
        );
        checkEqual(true,
          someMatchSome([null, undefined, NaN], [isNaNStrict]),
        );

        // object parameter
        checkEqual(true,
          someMatchSome({ valueArray: [10, 20, 30], compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(false,
          someMatchSome({ valueArray: [10, 20, 25], compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(true,
          someMatchSome([10, 20, 30], { compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(false,
          someMatchSome([10, 20, 25], { compareArray: [v => v < 5, v => 25 < v] }));

        // exception
        checkEqual(false, isThrown(() => {
          someMatchSome([10], [value => value > 15]);
        }));
        checkEqual(true, isThrown(() => {
          someMatchSome(10, [value => value > 15]);
        }));
      });

    };

    const test_indexOfMatchSome = () =>{
      it('test_indexOfMatchSome', () => {
        checkEqual(0,
          indexOfMatchSome([10, 20, 30], [value => value > 5])
          , 'test_matchSomeIndex');
        checkEqual(2,
          indexOfMatchSome([10, 20, 30], [value => value > 25]),
        );
        checkEqual(-1,
          indexOfMatchSome([10, 20, 30], [value => value > 35]),
        );
        checkEqual(0,
          indexOfMatchSome([null, undefined], [null, undefined]),
        );
        checkEqual(1,
          indexOfMatchSome([null, undefined], [undefined]),
        );
        checkEqual(0,
          indexOfMatchSome([null, undefined], [isNull, isUndefined]),
        );
        checkEqual(1,
          indexOfMatchSome([null, undefined], [isUndefined]),
        );
        checkEqual(0,
          indexOfMatchSome([null, undefined, NaN], [null, undefined]),
        );
        checkEqual(0,
          indexOfMatchSome([null, undefined, NaN], [null, undefined, NaN]),
        );
        checkEqual(0,
          indexOfMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]),
        );
        checkEqual(-1,
          indexOfMatchSome([null, undefined, NaN], [NaN]),
        );
        checkEqual(2,
          indexOfMatchSome([null, undefined, NaN], [isNaNStrict]),
        );

        checkEqual(false, isThrown(() => {
          indexOfMatchSome([10], [value => value > 15]);
        }));
        checkEqual(true, isThrown(() => {
          indexOfMatchSome(10, [value => value > 15]);
        }));

        // object parameter
        checkEqual(2,
          indexOfMatchSome(
            { valueArray: [10, 20, 30], compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(0,
          indexOfMatchSome(
            { valueArray: [1, 10, 20], compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(-1,
          indexOfMatchSome(
            { valueArray: [5, 10, 20], compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(2,
          indexOfMatchSome(
            [10, 20, 30], { compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(0,
          indexOfMatchSome(
            [1, 10, 20], { compareArray: [v => v < 5, v => 25 < v] }));
        checkEqual(-1,
          indexOfMatchSome(
            [5, 10, 20], { compareArray: [v => v < 5, v => 25 < v] }));

      });

    };

    const test_matchAll = () => {
      it('test_matchAll', () => {
        // normal args string
        checkEqual(false, matchAll('abc', []));
        checkEqual(true,  matchAll('abc', ['abc']));
        checkEqual(false, matchAll('abc', ['abc', 'def']));
        checkEqual(false, matchAll('abc', ['abc', undefined]));
        checkEqual(false, matchAll('abc', ['abc', null]));
        checkEqual(false, matchAll('abc', ['abc', '']));
        checkEqual(true,  matchAll('abc', [/^a/]));
        checkEqual(true,  matchAll('abc', [/c$/]));
        checkEqual(true,  matchAll('abc', [/^a/, /c$/]));
        checkEqual(true,  matchAll('abc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, matchAll('abc', [/^a/, /^b.*/, /c$/]));
        checkEqual(true,  matchAll('aabbcc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(true,  matchAll('abc', [
          /^a/, /.*b.*/, /c$/,
          value => value.length >= 3,
          value => value.length <= 5,
        ]));
        checkEqual(true,  matchAll('aabcc', [
          /^a/, /.*b.*/, /c$/,
          value => value.length >= 3,
          value => value.length <= 5,
        ]));
        checkEqual(false, matchAll('aabbcc', [
          /^a/, /.*b.*/, /c$/,
          value => value.length >= 3,
          value => value.length <= 5,
        ]));

        // normal args number
        checkEqual(false, matchAll(100, []));
        checkEqual(true,  matchAll(100, [100]));
        checkEqual(false, matchAll(100, [100, 0]));
        checkEqual(false, matchAll(100, [100, undefined]));
        checkEqual(false, matchAll(100, [100, null]));
        checkEqual(false, matchAll(100, [100, NaN]));
        checkEqual(true,  matchAll(100, [value => value >= 100, value => value <= 110]));
        checkEqual(true,  matchAll(110, [value => value >= 100, value => value <= 110]));
        checkEqual(false, matchAll(111, [value => value >= 100, value => value <= 110]));

        checkEqual(true,  matchAll(null,  [null]));
        checkEqual(false, matchAll(null,  [null, undefined]));
        checkEqual(false, matchAll(null,  [undefined]));
        checkEqual(false, matchAll(undefined,  [null]));
        checkEqual(false, matchAll(undefined,  [null, undefined]));
        checkEqual(true,  matchAll(undefined,  [undefined]));

        // exception
        checkEqual(false, isThrownException(
          () => { matchAll('123', ['123']); },
          (new TypeError).name,
        ));
        checkEqual(true, isThrownException(
          () => { matchAll('123', '123'); },
          (new TypeError).name,
        ));
        checkEqual(false, isThrownException(
          () => { matchAll(123, [123]); },
          (new TypeError).name,
        ));
        checkEqual(true, isThrownException(
          () => { matchAll(123, 123); },
          (new TypeError).name,
        ));

        // Object Named Parameter string
        checkEqual(true, matchAll({
          value: 'abc', compareArray: ['abc'] }));
        checkEqual(false, matchAll({
          value: 'abc', compareArray: ['abc', ''] }));
        checkEqual(true, matchAll({
          value: 'abc', compareArray: [
            /^a/, /.*b.*/, /c$/,
          ],
        }));
        checkEqual(true, matchAll(
          'abc', { compareArray: ['abc'] }));
        checkEqual(false, matchAll(
          'abc', { compareArray: ['abc', ''] }));

        // Object Named Parameter number
        checkEqual(true, matchAll({
          value: 100, compareArray: [
            10 * 10,
          ],
        }));
        checkEqual(false, matchAll({
          value: 100, compareArray: [
            100, 101,
          ],
        }));
        checkEqual(true, matchAll({
          value: 100, compareArray: [
            v => 100 <= v,
            v => v <= 110,
          ],
        }));
        checkEqual(true, matchAll(
          100, { compareArray: [
            v => 100 <= v,
            v => v <= 110,
          ],
          }));
        checkEqual(false, matchAll(
          111, { compareArray: [
            v => 100 <= v,
            v => v <= 110,
          ],
          }));

        // exception
        checkEqual(false, isThrown(
          () => {
            matchAll({
              value: 'abc', compareArray: ['abc'],
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            matchAll({
              value: 'abc', compareArray: 'abc',
            });
          },
        ));
        checkEqual(false, isThrown(
          () => {
            matchAll({
              value: 100, compareArray: [
                value => value >= 100,
                value => value <= 110,
              ],
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            matchAll({
              value: 100, compareArray: [
                value => value,
                value => value <= 110,
              ],
            });
          },
        ));
      });
    };

    const test_matchAllValue = () => {
      it('test_matchAllValue', () => {
        checkEqual(999, matchAllValue(99, [99], 999));
        checkEqual(98,  matchAllValue(98, [99], 999));
        checkEqual(999,  matchAllValue(
          100, [v => 100 <= v, v => v <= 110], 999));
        checkEqual(999,  matchAllValue(
          110, [v => 100 <= v, v => v <= 110], 999));
        checkEqual(111, matchAllValue(
          111, [v => 100 <= v, v => v <= 110], 999));

        // Object Parameter
        checkEqual(999, matchAllValue({
          value: 100, compareArray: [v => 100 <= v, v => v <= 110], match: 999, unmatch: 888 }));
        checkEqual(999, matchAllValue({
          value: 110, compareArray: [v => 100 <= v, v => v <= 110], match: 999, unmatch: 888 }));
        checkEqual(888, matchAllValue({
          value: 111, compareArray: [v => 100 <= v, v => v <= 110], match: 999, unmatch: 888 }));
        checkEqual(999, matchAllValue(
          100, { compareArray: [v => 100 <= v, v => v <= 110], match: 999, unmatch: 888 }));
        checkEqual(999, matchAllValue(
          110, { compareArray: [v => 100 <= v, v => v <= 110], match: 999, unmatch: 888 }));
        checkEqual(888, matchAllValue(
          111, { compareArray: [v => 100 <= v, v => v <= 110], match: 999, unmatch: 888 }));
        checkEqual(999, matchAllValue(
          100, [v => 100 <= v, v => v <= 110], { match: 999, unmatch: 888 }));
        checkEqual(999, matchAllValue(
          110, [v => 100 <= v, v => v <= 110], { match: 999, unmatch: 888 }));
        checkEqual(888, matchAllValue(
          111, [v => 100 <= v, v => v <= 110], { match: 999, unmatch: 888 }));
        checkEqual(999, matchAllValue(
          100, [v => 100 <= v, v => v <= 110], 999, { unmatch: 888 }));
        checkEqual(999, matchAllValue(
          110, [v => 100 <= v, v => v <= 110], 999, { unmatch: 888 }));
        checkEqual(888, matchAllValue(
          111, [v => 100 <= v, v => v <= 110], 999, { unmatch: 888 }));

        checkEqual(999, matchAllValue({
          value: 100, compareArray: [v => 100 <= v, v => v <= 110], match: 999 }));
        checkEqual(999, matchAllValue({
          value: 110, compareArray: [v => 100 <= v, v => v <= 110], match: 999 }));
        checkEqual(111, matchAllValue({
          value: 111, compareArray: [v => 100 <= v, v => v <= 110], match: 999 }));
        checkEqual(999, matchAllValue(
          100, { compareArray: [v => 100 <= v, v => v <= 110], match: 999 }));
        checkEqual(999, matchAllValue(
          110, { compareArray: [v => 100 <= v, v => v <= 110], match: 999 }));
        checkEqual(111, matchAllValue(
          111, { compareArray: [v => 100 <= v, v => v <= 110], match: 999 }));
        checkEqual(999, matchAllValue(
          100, [v => 100 <= v, v => v <= 110], { match: 999 }));
        checkEqual(999, matchAllValue(
          110, [v => 100 <= v, v => v <= 110], { match: 999 }));
        checkEqual(111, matchAllValue(
          111, [v => 100 <= v, v => v <= 110], { match: 999 }));
      });
    };

    const test_allMatchAll = () =>{
      it('test_allMatchAll', () => {
        checkEqual(false,
          allMatchAll([], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(true,
          allMatchAll(['abc', 'aabc', 'aabbcc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(false,
          allMatchAll(['abc', 'aabc', 'aacc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );

        checkEqual(true,
          allMatchAll([100, 105, 110], [v => 100 <= v, v => v <= 110]));
        checkEqual(false,
          allMatchAll([100, 105, 111], [v => 100 <= v, v => v <= 110]));

        const testAllMatchAll = replaceArray =>
          allMatchAll(replaceArray, [
            isArray,
            element => element.length === 2,
            element => isStringArray(element),
          ]);
        testCounter();
        checkEqual(false, testAllMatchAll([]));
        checkEqual(false, testAllMatchAll([1, 2]));
        checkEqual(false, testAllMatchAll(['a', 'b']));
        checkEqual(true,  testAllMatchAll([['a', 'b']]));
        checkEqual(true,  testAllMatchAll([['a', 'b'], ['c', 'd']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c', 1]]));

        // object parameter
        checkEqual(true,
          allMatchAll(
            { valueArray: [100, 105, 110], compareArray: [v => 100 <= v, v => v <= 110] }));
        checkEqual(false,
          allMatchAll(
            { valueArray: [100, 105, 111], compareArray: [v => 100 <= v, v => v <= 110] }));
        checkEqual(true,
          allMatchAll(
            [100, 105, 110], { compareArray: [v => 100 <= v, v => v <= 110] }));
        checkEqual(false,
          allMatchAll(
            [100, 105, 111], { compareArray: [v => 100 <= v, v => v <= 110] }));
      });
    };

    const test_someMatchAll = () =>{
      it('test_someMatchAll', () => {
        checkEqual(false,
          someMatchAll([], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(true,
          someMatchAll(['abc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(false,
          someMatchAll(['aaa', 'bbb', 'ccc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(true,
          someMatchAll(['aaa', 'abc', 'ccc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );

        checkEqual(true,
          someMatchAll([111, 110, 120], [v => 100 <= v, v => v <= 110]));
        checkEqual(false,
          someMatchAll([111, 115, 120], [v => 100 <= v, v => v <= 110]));

        // object parameter
        checkEqual(true,
          someMatchAll({ valueArray: [111, 110, 120], compareArray: [v => 100 <= v, v => v <= 110] }));
        checkEqual(false,
          someMatchAll({ valueArray: [111, 115, 120], compareArray: [v => 100 <= v, v => v <= 110] }));
        checkEqual(true,
          someMatchAll([111, 110, 120], { compareArray: [v => 100 <= v, v => v <= 110] }));
        checkEqual(false,
          someMatchAll([111, 115, 120], { compareArray: [v => 100 <= v, v => v <= 110] }));

      });
    };

    const test_indexOfMatchAll = () =>{
      it('test_indexOfMatchAll', () => {
        checkEqual(-1,
          indexOfMatchAll([], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(0,
          indexOfMatchAll(['abc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(-1,
          indexOfMatchAll(['aaa', 'bbb', 'ccc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );
        checkEqual(1,
          indexOfMatchAll(['aaa', 'abc', 'ccc'], [
            /^a/, /.*b.*/, /c$/,
          ]),
        );

        checkEqual(0,
          indexOfMatchAll([105], [
            v => 100 <= v,
            v => v <= 110,
          ]),
        );
        checkEqual(-1,
          indexOfMatchAll([111, 115, 120], [
            v => 100 <= v,
            v => v <= 110,
          ]),
        );
        checkEqual(1,
          indexOfMatchAll([111, 110, 120], [
            v => 100 <= v,
            v => v <= 110,
          ]),
        );

        // object parameter
        checkEqual(0,
          indexOfMatchAll(
            { valueArray: [10, 20, 30], compareArray: [v => 10 <= v, v => v <= 30] }));
        checkEqual(1,
          indexOfMatchAll(
            { valueArray: [1, 10, 20], compareArray: [v => 10 <= v, v => v <= 30] }));
        checkEqual(-1,
          indexOfMatchAll(
            { valueArray: [5, 40, 50], compareArray: [v => 10 <= v, v => v <= 30] }));
        checkEqual(0,
          indexOfMatchAll(
            [10, 20, 30], { compareArray: [v => 10 <= v, v => v <= 30] }));
        checkEqual(1,
          indexOfMatchAll(
            [1, 10, 20], { compareArray: [v => 10 <= v, v => v <= 30] }));
        checkEqual(-1,
          indexOfMatchAll(
            [5, 40, 50], { compareArray: [v => 10 <= v, v => v <= 30] }));

      });
    };


    const test_includes = () => {
      it('test_includes', () => {

        if (!parts.platform.isWindowsScriptHost()
          && !parts.platform.isInternetExplorer()
          && !parts.platform.isGasRhino()
        ) {
          checkEqual(true,  'abc'.includes('a'));

          // string.includes strange empty string
          checkEqual(true,  'abc'.includes(''));

          checkEqual(false, 'abc'.includes(null));
          checkEqual(false, 'abc'.includes(undefined));
          checkEqual(false, 'abc'.includes());
        }

        checkEqual(false, includes('abc', ''));
        checkEqual(true,  includes('abc', 'a'));
        checkEqual(true,  includes('abc', 'b'));
        checkEqual(false, includes('abc', 'd'));
        checkEqual(false, includes('', ''));
        checkEqual(false, includes('', 'a'));

        checkEqual(false, includes([], null));
        checkEqual(false, includes([], undefined));
        checkEqual(false, includes([], []));
        checkEqual(true,  includes([0, 1, 2], 0));
        checkEqual(false, includes([0, 1, 2], 4));
        checkEqual(false, includes([0, 1, 2], []));

        checkEqual(false, includes({
          value: 'abc',
          compare: '',
        }));
        checkEqual(true, includes({
          value: 'abc',
          compare: 'c',
        }));
        checkEqual(false, includes({
          value: [],
          compare: null,
        }));
        checkEqual(true,  includes({
          value: [0, 1],
          compare: 0,
        }));

      });
    };

    const test_includesSome = () => {
      it('test_includesSome', () => {

        checkEqual(false, includesSome('abc', ['']));
        checkEqual(true,  includesSome('abc', ['', 'a']));
        checkEqual(false, includesSome('abc', ['', 'd']));
        checkEqual(true,  includesSome('abc', ['a']));
        checkEqual(true,  includesSome('abc', ['b']));
        checkEqual(false, includesSome('abc', ['d']));
        checkEqual(true,  includesSome('abc', ['d', 'a']));
        checkEqual(true,  includesSome('abc', ['a', 'd']));
        checkEqual(false, includesSome('abc', ['e', 'd']));

        checkEqual(false, includesSome([], [null]));
        checkEqual(false, includesSome([], [undefined]));
        checkEqual(false, includesSome([], []));
        checkEqual(false, includesSome([0, 1, 2], []));
        checkEqual(true,  includesSome([0, 1, 2], [0]));
        checkEqual(false, includesSome([0, 1, 2], [4]));
        checkEqual(true,  includesSome([0, 1, 2], [0, 4]));
        checkEqual(true,  includesSome([0, 1, 2], [0, 1]));
        checkEqual(false, includesSome([0, 1, 2], [4, 5]));

        checkEqual(false, includesSome({
          value: 'abc',
          compareArray: [''],
        }));
        checkEqual(true, includesSome({
          value: 'abc',
          compareArray: ['c'],
        }));
        checkEqual(false, includesSome({
          value: [],
          compareArray: [null],
        }));
        checkEqual(true,  includesSome({
          value: [0, 1],
          compareArray: [0],
        }));

        // exception
        checkEqual(false, isThrown(
          () => {
            includesSome('abc', ['a']);
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome('abc', 'a');
          },
        ));
        checkEqual(false, isThrownException(
          () => { includesSome('123', ['1']); },
          (new TypeError).name,
        ));
        checkEqual(true, isThrownException(
          () => { includesSome('123', [1]); },
          (new TypeError).name,
        ));

        checkEqual(false, isThrown(
          () => {
            includesSome([0, 1, 2], [0, 10]);
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome([0, 1, 2], 0);
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome(0, [0, 10]);
          },
        ));

        checkEqual(false, isThrown(
          () => {
            includesSome({
              value: 'abc', compareArray: ['a'],
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome({
              value: 'abc', compareArray: 'a',
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome({
              value: 'abc', compareArray: [1],
            });
          },
        ));

        checkEqual(false, isThrown(
          () => {
            includesSome({
              value: [0, 1, 2], compareArray: [0, 10],
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome({
              value: [0, 1, 2], compareArray: 0,
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesSome({
              value: 0, compareArray: [0, 10],
            });
          },
        ));

      });
    };

    const test_includesAll = () => {
      it('test_includesAll', () => {

        checkEqual(false, includesAll('abc', ['']));
        checkEqual(false, includesAll('abc', ['', 'a']));
        checkEqual(false, includesAll('abc', ['', 'd']));
        checkEqual(true,  includesAll('abc', ['a']));
        checkEqual(true,  includesAll('abc', ['b']));
        checkEqual(false, includesAll('abc', ['d']));
        checkEqual(false, includesAll('abc', ['d', 'a']));
        checkEqual(false, includesAll('abc', ['a', 'd']));
        checkEqual(false, includesAll('abc', ['e', 'd']));
        checkEqual(true,  includesAll('abc', ['c', 'a']));

        checkEqual(false, includesAll([], [null]));
        checkEqual(false, includesAll([], [undefined]));
        checkEqual(false, includesAll([], []));
        checkEqual(false, includesAll([0, 1, 2], []));
        checkEqual(true,  includesAll([0, 1, 2], [0]));
        checkEqual(false, includesAll([0, 1, 2], [4]));
        checkEqual(false, includesAll([0, 1, 2], [0, 4]));
        checkEqual(true,  includesAll([0, 1, 2], [0, 1]));
        checkEqual(false, includesAll([0, 1, 2], [4, 5]));

        checkEqual(false, includesAll({
          value: 'abc',
          compareArray: [''],
        }));
        checkEqual(true, includesAll({
          value: 'abc',
          compareArray: ['c'],
        }));
        checkEqual(false, includesAll({
          value: [],
          compareArray: [null],
        }));
        checkEqual(true,  includesAll({
          value: [0, 1],
          compareArray: [0],
        }));

        // exception
        checkEqual(false, isThrown(
          () => {
            includesAll('abc', ['a']);
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesAll('abc', 'a');
          },
        ));

        checkEqual(false, isThrown(
          () => {
            includesAll([0, 1, 2], [0, 10]);
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesAll([0, 1, 2], 0);
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesAll(0, [0, 10]);
          },
        ));

        checkEqual(false, isThrown(
          () => {
            includesAll({
              value: 'abc', compareArray: ['a'],
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesAll({
              value: 'abc', compareArray: 'a',
            });
          },
        ));

        checkEqual(false, isThrown(
          () => {
            includesAll({
              value: [0, 1, 2], compareArray: [0, 10],
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesAll({
              value: [0, 1, 2], compareArray: 0,
            });
          },
        ));
        checkEqual(true, isThrown(
          () => {
            includesAll({
              value: 0, compareArray: [0, 10],
            });
          },
        ));

      });
    };

    const { getProperty, recursive, typeName, isPrimitiveType } = parts;

    const equalDeepUseRecursive = (source, target) => {

      const equalType = (value1, value2) => {
        return typeName(value1) === typeName(value2);
      };

      const equalAccept = (source, target) => {
        if (isPrimitiveType(source)) {
          if (source !== target) {
            return false;
          }
          return true;
        }
        if (!equalType(source, target)) {
          return false;
        }
        if (!(isObject(source) || isArray(source))) {
          return false;
        }
        if (isObject(source)) {
          if (Object.keys(source).length !== Object.keys(target).length) {
            return false;
          }
        }
        if (isArray(source)) {
          if (source.length !== target.length) {
            return false;
          }
        }
        return;
      };

      const accept = equalAccept(source, target);
      if (accept === true) { return true; }
      if (accept === false) { return false; }

      let result = true;
      recursive(source,
        (value, key, level, path) => {
          const targetValue = getProperty(target, path + '.' + key);
          const accept = equalAccept(value, targetValue);
          if (accept === true) { return; }
          if (accept === false) {
            result = false;
            return false;
          }
          return value;
        },
      );
      return result;
    };

    test_equal();
    test_equal_object();
    test_equal_array();
    test_equal_date();
    test_equal_regexp();
    test_equal_map();
    test_equal_set();

    let equalDeep;
    equalDeep = equalDeepUseRecursive;
    test_equalDeep(false);
    test_equalDeep_object();
    test_equalDeep_array(false);
    test_equalDeep_object_array_mix();

    equalDeep = parts.compare.equalDeep;
    test_equalDeep();
    test_equalDeep_object();
    test_equalDeep_object_array_mix();
    test_equalDeep_object_CircularReference();
    test_equalDeep_array();
    test_equalDeep_array_CircularReference();
    test_equalDeep_date();
    test_equalDeep_regexp();
    test_equalDeep_map();
    test_equalDeep_map_object_array();
    test_equalDeep_map_CircularReference();
    test_equalDeep_set();
    test_equalDeep_set_object_array();
    test_equalDeep_set_CircularReference();

    test_or();

    test_match();
    test_matchValue();
    test_initialValue();
    test_allMatch();
    test_someMatch();
    test_indexOfMatch();

    test_matchSome();
    test_matchSomeValue();
    test_allMatchSome();
    test_someMatchSome();
    test_indexOfMatchSome();

    test_matchAll();
    test_matchAllValue();
    test_allMatchAll();
    test_someMatchAll();
    test_indexOfMatchAll();

    test_includes();
    test_includesSome();
    test_includesAll();

  });
};

export default {
  test_execute_compare,
};
