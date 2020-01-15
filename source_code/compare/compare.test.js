/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_compare = (parts) => {
  const { describe, it } = parts.test;
  describe(test_execute_compare.name, () => {

    const {
      isUndefined, isNull, isNaNStrict,
      isBoolean, isNumber, isInteger, isString,
      isFunction, isObject, isObjectType,
      isArray, isDate, isRegExp,
      isException,
    } = parts.type;

    const {
      checkEqual,
      isThrown,
      isThrownException,
    } = parts.test;

    const {
      equal, equalDeep,
      equalFunction,
      or,
      matchValue, initialValue,
      matchSome, matchSomeValue,
      allMatchSome, someMatchSome, indexOfMatchSome,
      matchAll, matchAllValue,
      allMatchAll, someMatchAll, indexOfMatchAll,
    } = parts.compare;

    const {
      isEmptyObject,
    } = parts.object;

    const test_equal = () => {
      it(test_equal.name, () => {
        // Primitive value
        checkEqual(true,  equal(  1,   1));
        checkEqual(true,  equal('1', '1'));
        checkEqual(false, equal('1',   1));
        checkEqual(true,  equal(null, null));
        checkEqual(true,  equal(undefined, undefined));
        checkEqual(true,  equal(undefined));
        checkEqual(false, equal(null, undefined));
        checkEqual(false, equal(null));

        // args.length
        checkEqual(true,  equal(1, 1, 2));
        checkEqual(false, equal(1, 2, 3));

        // named argument
        checkEqual(true,  equal({value1:  1, value2:  1}));
        checkEqual(true,  equal({value1:'1', value2:'1'}));
        checkEqual(false, equal({value1:'1', value2:  1}));
      });

    };

    const test_equal_object = () => {
      it(test_equal_object.name, () => {
        // object
        checkEqual(true,
          equal( { },   { }),
        );
        checkEqual(false,
          equal( { a: {} },   { a: {} }),
        );
        checkEqual(true,
          equal( { a: '1', b: '2' },   { a: '1', b: '2' }),
          'test_equal object 1');
        checkEqual(false,
          equal( { a: '2', b: '2' },   { a: '1', b: '2' }),
          'test_equal object 2');

        checkEqual(false,
          equal( { a: '1', b: '2', c: {} },   { a: '1', b: '2', c: {} }),
          'test_equal object 3');
        checkEqual(false,
          equal( { a: '1', b: '2', c: [] },   { a: '1', b: '2', c: [] }),
          'test_equal object 4');
      });
    };

    const test_equal_array = () => {
      it(test_equal_array.name, () => {
        checkEqual(true,  equal( [],   []));
        checkEqual(false, equal( [[]],   [[]])    );

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
      it(test_equal_date.name, () => {
        // date
        checkEqual(true,
          equal( new Date('2019/11/02'),  new Date('2019/11/02')),
          'test_equal date');
        // date in object
        checkEqual(false,
          equal( { date: new Date('2019/11/02') },  { date: new Date('2019/11/02') } ),
          'test_equal date');
        // date in array
        checkEqual(false,
          equal( [new Date('2019/11/02')],  [new Date('2019/11/02')] ),
          'test_equal date');

        // date ignore
        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalRegExp);

        // date
        checkEqual(false,
          equal( new Date('2019/11/02'),  new Date('2019/11/02')),
          'test_equal date');
        // date in object
        checkEqual(false,
          equal( { date: new Date('2019/11/02') },  { date: new Date('2019/11/02') } ),
          'test_equal date');
        // date in array
        checkEqual(false,
          equal( [new Date('2019/11/02')],  [new Date('2019/11/02')] ),
          'test_equal date');

        equal.reset();
      });
    };

    const test_equal_regexp = () => {
      it(test_equal_regexp.name, () => {
        // regexp
        checkEqual(true,
          equal( new RegExp(/^a/),  new RegExp(/^a/) ),
          'test_equal regexp');
        // regexp in object
        checkEqual(false,
          equal( { reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) } ),
          'test_equal regexp');
        // regexp in array
        checkEqual(false,
          equal( [new RegExp(/^a/)],  [new RegExp(/^a/)] ),
          'test_equal regexp');

        // regexp ignore
        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalDate);

        // regexp
        checkEqual(false,
          equal( new RegExp(/^a/),  new RegExp(/^a/) ),
          'test_equal regexp');
        // regexp in object
        checkEqual(false,
          equal( { reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) } ),
          'test_equal regexp');
        // regexp in array
        checkEqual(false,
          equal( [new RegExp(/^a/)],  [new RegExp(/^a/)] ),
          'test_equal regexp');

        equal.reset();
      });
    };

    const test_equal_map = () => {
      it(test_equal_map.name, () => {
        if (parts.platform.wsh) {
          return;
        }

        // Map
        var map1 = new Map();
        map1.set('a', 1); map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1); map2.set('b', 2);
        checkEqual(true,
          equal( map1,  map2 ),
          'test_equal Map');
        // Map in object
        checkEqual(false,
          equal( { map: map1 }, { map: map2 } ),
          'test_equal Map');
        // Map in array
        checkEqual(false,
          equal( [map1],  [map2] ),
          'test_equal Map');

        // ignore Map
        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalRegExp);
        equal.add(equalFunction.equalDate);

        checkEqual(false,
          equal( map1,  map2 ),
          'test_equal map');
        // Map in object
        checkEqual(false,
          equal( { map: map1 }, { map: map2 } ),
          'test_equal Map');
        // Map in array
        checkEqual(false,
          equal( [map1],  [map2] ),
          'test_equal Map');

        equal.reset();
      });

    };

    const test_equal_set = () => {
      it(test_equal_set.name, () => {
        if (parts.platform.wsh) {
          return;
        }

        // Set
        var set1 = new Set();
        set1.add('a'); set1.add('b');
        var set2 = new Set();
        set2.add('a'); set2.add('b');
        checkEqual(true,
          equal( set1,  set2 ),
          'test_equal Set');
        // Set in object
        checkEqual(false,
          equal( { set: set1 }, { set: set2 } ),
          'test_equal Set');
        // Set in array
        checkEqual(false,
          equal( [set1],  [set2] ),
          'test_equal Set');

        // ignore Set
        equal.clear();
        equal.add(equalFunction.equalValue);
        equal.add(equalFunction.equalObject);
        equal.add(equalFunction.equalArrayType);
        equal.add(equalFunction.equalFunction);
        equal.add(equalFunction.equalRegExp);
        equal.add(equalFunction.equalDate);

        checkEqual(false,
          equal( set1,  set2 ),
          'test_equal map');
        // Set in object
        checkEqual(false,
          equal( { set: set1 }, { set: set2 } ),
          'test_equal Set');
        // Set in array
        checkEqual(false,
          equal( [set1],  [set2] ),
          'test_equal Set');

        equal.reset();
      });

    };

    const test_equalDeep = () => {
      it(test_equalDeep.name, () => {
        // Primitive value
        checkEqual(true,  equalDeep(  1,   1), 'test_equalDeep 1');
        checkEqual(true,  equalDeep('1', '1'));
        checkEqual(false, equalDeep('1',   1));
        checkEqual(true,  equalDeep(null, null));
        checkEqual(true,  equalDeep(undefined, undefined));
        checkEqual(true,  equalDeep(undefined));
        checkEqual(false, equalDeep(null, undefined));
        checkEqual(false, equalDeep(null));

        // args.length
        checkEqual(true,  equalDeep(1, 1, 2));
        checkEqual(false, equalDeep(1, 2, 3));

        // named argument
        checkEqual(true,  equalDeep({value1:  1, value2:  1}));
        checkEqual(true,  equalDeep({value1:'1', value2:'1'}));
        checkEqual(false, equalDeep({value1:'1', value2:  1}));
      });

    };

    const test_equalDeep_object = () => {
      it(test_equalDeep_object.name, () => {
        // object
        checkEqual(true,
          equalDeep( { },   { }),
        );
        checkEqual(true,
          equalDeep( { a: {} },   { a: {} }),
        );
        checkEqual(true,
          equalDeep( { a: '1', b: '2' },   { a: '1', b: '2' }),
          'test_equalDeep object 1');
        checkEqual(false,
          equalDeep( { a: '2', b: '2' },   { a: '1', b: '2' }),
          'test_equalDeep object 2');

        checkEqual(true,
          equalDeep( { a: '1', b: '2', c: {} },   { a: '1', b: '2', c: {} }),
          'test_equalDeep object 3');
        checkEqual(true,
          equalDeep( { a: '1', b: '2', c: [] },   { a: '1', b: '2', c: [] }),
          'test_equalDeep object 4');

        checkEqual(false,
          equalDeep( { a: '1', b: '2', c: {} },   { a: '1', b: '2', c: {}, d: '' }),
          'test_equalDeep object 5');
        checkEqual(false,
          equalDeep( { a: '1', b: '2', c: [] },   { a: '1', b: '2', c: [], d: '' }),
          'test_equalDeep object 6');

      });

    };

    const test_equalDeep_object_array_mix = () => {
      it(test_equalDeep_object_array_mix.name, () => {

        // equal false array object
        var testValue1 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        var testValue2 = [1, 2, 3, { a: 1, b: 2, c: 3 }];
        checkEqual(false, equal(testValue1, testValue2));
        // equalDeep true array object
        checkEqual(true,  equalDeep(testValue1, testValue2));

        // equal false object array
        var testValue1 = { a: 1, b: 2, c: 3, d: [1, 2, 3]};
        var testValue2 = { a: 1, b: 2, c: 3, d: [1, 2, 3]};
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
        var testValue1 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3]};
        var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3]};
        checkEqual(false, equal(testValue1, testValue2));
        // equalDeep true object array object
        checkEqual(true,  equalDeep(testValue1, testValue2));

      });

    };

    const test_equalDeep_object_CircularReference = () => {
      it(test_equalDeep_object_CircularReference.name, () => {
        // CircularReference
        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object1;
        object2.obj = object2;
        checkEqual(true,
          equalDeep( object1,  object2 ),
          'test_equalDeep CircularReference 1');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object1;
        object2.obj = object1;
        checkEqual(true,
          equalDeep( object1,  object2 ),
          'test_equalDeep CircularReference 2');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object2;
        object2.obj = object1;
        checkEqual(true,
          equalDeep( object1,  object2 ),
          'test_equalDeep CircularReference 3');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        object1.obj = object2;
        object2.obj = object2;
        checkEqual(true,
          equalDeep( object1,  object2 ),
          'test_equalDeep CircularReference 4');

        var object1 = { a: '1', b: '2', c: {} };
        var object2 = { a: '1', b: '2', c: {} };
        var object3 = { a: '1', b: '2', c: {} };
        object1.obj = object2;
        object2.obj = object3;
        checkEqual(false,
          equalDeep( object1,  object2 ),
          'test_equalDeep CircularReference 5');
      });

    };

    const test_equalDeep_array = () => {
      it(test_equalDeep_array.name, () => {
        checkEqual(true,  equalDeep( [1, 2, {}],   [1, 2, {}]));
        checkEqual(true,  equalDeep( [1, 2, [3]],   [1, 2, [3]]));

        checkEqual(true,  equalDeep( [],   []));
        checkEqual(true,  equalDeep( [[]],   [[]])    );

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
      it(test_equalDeep_array_CircularReference.name, () => {
        // CircularReference
        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array1);
        array2.push(array2);
        checkEqual(true,
          equalDeep( array1,  array2 ),
          'test_equalDeep array CircularReference 1');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array1);
        array2.push(array1);
        checkEqual(true,
          equalDeep( array1,  array2 ),
          'test_equalDeep array CircularReference 2');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array2);
        array2.push(array1);
        checkEqual(true,
          equalDeep( array1,  array2 ),
          'test_equalDeep array CircularReference 3');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array2);
        array2.push(array2);
        checkEqual(true,
          equalDeep( array1,  array2 ),
          'test_equalDeep array CircularReference 4');

        var array1 = [{ a: '1', b: '2' }, 1, 2];
        var array2 = [{ a: '1', b: '2' }, 1, 2];
        var array3 = [{ a: '1', b: '2' }, 1, 2];
        array1.push(array2);
        array2.push(array3);
        checkEqual(false,
          equalDeep( array1,  array2 ),
          'test_equalDeep array CircularReference 5');
      });

    };

    const test_equalDeep_date = () => {
      it(test_equalDeep_date.name, () => {
        // date
        checkEqual(true,
          equalDeep( new Date('2019/11/02'),  new Date('2019/11/02')),
          'test_equalDeep date');
        // date in object
        checkEqual(true,
          equalDeep( { date: new Date('2019/11/02') },  { date: new Date('2019/11/02') } ),
          'test_equalDeep date');
        // date in array
        checkEqual(true,
          equalDeep( [new Date('2019/11/02')],  [new Date('2019/11/02')] ),
          'test_equalDeep date');

        // date ignore
        equalDeep.clear();
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalRegExp);

        // date
        checkEqual(false,
          equalDeep( new Date('2019/11/02'),  new Date('2019/11/02')),
          'test_equalDeep date');
        // date in object
        checkEqual(false,
          equalDeep( { date: new Date('2019/11/02') },  { date: new Date('2019/11/02') } ),
          'test_equalDeep date in object');
        // date in array
        checkEqual(false,
          equalDeep( [new Date('2019/11/02')],  [new Date('2019/11/02')] ),
          'test_equalDeep date');

        equalDeep.reset();

      });

    };

    const test_equalDeep_regexp = () => {
      it(test_equalDeep_regexp.name, () => {
        // regexp
        checkEqual(true,
          equalDeep( new RegExp(/^a/),  new RegExp(/^a/) ),
          'test_equal regexp');
        // regexp in object
        checkEqual(true,
          equalDeep( { reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) } ),
          'test_equal regexp');
        // regexp in array
        checkEqual(true,
          equalDeep( [new RegExp(/^a/)],  [new RegExp(/^a/)] ),
          'test_equal regexp');

        // regexp ignore
        equalDeep.clear();
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalDate);

        // regexp
        checkEqual(false,
          equalDeep( new RegExp(/^a/),  new RegExp(/^a/) ),
          'test_equal regexp');
        // regexp in object
        checkEqual(false,
          equalDeep( { reg: new RegExp(/^a/) }, { reg: new RegExp(/^a/) } ),
          'test_equal regexp');
        // regexp in array
        checkEqual(false,
          equalDeep( [new RegExp(/^a/)],  [new RegExp(/^a/)] ),
          'test_equal regexp');

        equalDeep.reset();

      });

    };

    const test_equalDeep_map = () => {
      it(test_equalDeep_map.name, () => {

        if (parts.platform.wsh) {
          return;
        }

        // Map
        var map1 = new Map();
        map1.set('a', 1); map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1); map2.set('b', 2);
        checkEqual(true,
          equalDeep( map1,  map2 ),
          'test_equal Map');
        // Map in object
        checkEqual(true,
          equalDeep( { map: map1 }, { map: map2 } ),
          'test_equal Map');
        // Map in array
        checkEqual(true,
          equalDeep( [map1],  [map2] ),
          'test_equal Map');

        // ignore Map
        equalDeep.clear();
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalRegExp);
        equalDeep.add(equalFunction.equalDate);

        checkEqual(false,
          equalDeep( map1,  map2 ),
          'test_equal map');
        // Map in object
        checkEqual(false,
          equalDeep( { map: map1 }, { map: map2 } ),
          'test_equal Map');
        // Map in array
        checkEqual(false,
          equalDeep( [map1],  [map2] ),
          'test_equal Map');

        equalDeep.reset();
      });

    };

    const test_equalDeep_map_object_array = () => {
      it(test_equalDeep_map_object_array.name, () => {
        if (parts.platform.wsh) {
          return;
        }

        // Map Object Array
        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        checkEqual(true,
          equalDeep( map1,  map2 ),
          'test_equal Map object array');
        // Map in object
        checkEqual(true,
          equalDeep( { map: map1 }, { map: map2 } ),
          'test_equal Map object array');
        // Map in array
        checkEqual(true,
          equalDeep( [map1],  [map2] ),
          'test_equal Map object array');

        // more map add object
        var map1 = new Map();
        map1.set('a', { a: 1, b: 2, c: { c1: 10 } });
        map1.set('b', { c: 3, b: 4 });
        var map2 = new Map();
        map2.set('a', { a: 1, b: 2, c: { c1: 10 } });
        map2.set('b', { c: 3, b: 4 });
        checkEqual(true,
          equalDeep( { map: map1 }, { map: map2 } ),
          'test_equal Map set object');

        // more map set object
        var map1 = new Map();
        map1.set('a', { a: 1, b: 2, c: { c1: 10 } });
        map1.set('b', { c: 3, b: 4 });
        var map2 = new Map();
        map2.set('a', { a: 1, b: 2, c: { c1: 10 }, d: '' });
        map2.set('b', { c: 3, b: 4 });
        checkEqual(false,
          equalDeep( { map: map1 }, { map: map2 } ),
          'test_equal Map set object');

      });

    };

    const test_equalDeep_map_CircularReference = () => {
      it(test_equalDeep_map_CircularReference.name, () => {
        if (parts.platform.wsh) {
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
          equalDeep( map1,  map2 ),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map1);
        checkEqual(true,
          equalDeep( map1,  map2 ),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map2);
        checkEqual(true,
          equalDeep( map1,  map2 ),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map1);
        checkEqual(true,
          equalDeep( map1,  map2 ),
        );

        var map1 = new Map();
        map1.set('a', { a: '1' }); map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', { a: '1' }); map2.set('b', ['b']);
        var map3 = new Map();
        map3.set('a', { a: '1' }); map3.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map3);
        checkEqual(false,
          equalDeep( map1,  map2 ),
        );
      });

    };

    const test_equalDeep_set = () => {
      it(test_equalDeep_set.name, () => {

        if (parts.platform.wsh) {
          return;
        }
        // Set
        var set1 = new Set();
        set1.add('a'); set1.add('b');
        var set2 = new Set();
        set2.add('a'); set2.add('b');
        checkEqual(true,
          equalDeep( set1,  set2 ),
          'test_equal Set1');
        // Set in object
        checkEqual(true,
          equalDeep( { set: set1 }, { set: set2 } ),
          'test_equal Set2');
        // Set in array
        checkEqual(true,
          equalDeep( [set1],  [set2] ),
          'test_equal Set3');

        // ignore Set
        equalDeep.clear();
        equalDeep.add(equalFunction.equalObject);
        equalDeep.add(equalFunction.equalArrayType);
        equalDeep.add(equalFunction.equalFunction);
        equalDeep.add(equalFunction.equalRegExp);
        equalDeep.add(equalFunction.equalDate);

        checkEqual(false,
          equalDeep( set1,  set2 ),
          'test_equal map');
        // Set in object
        checkEqual(false,
          equalDeep( { set: set1 }, { set: set2 } ),
          'test_equal Set');
        // Set in array
        checkEqual(false,
          equalDeep( [set1],  [set2] ),
          'test_equal Set');

        equalDeep.reset();
      });

    };

    const test_equalDeep_set_object_array = () => {
      it(test_equalDeep_set_object_array.name, () => {
        if (parts.platform.wsh) {
          return;
        }

        // Set Object Array
        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        checkEqual(true,
          equalDeep( set1,  set2 ),
          'test_equal Set object array');
        // Set in object
        checkEqual(true,
          equalDeep( { map: set1 }, { map: set2 } ),
          'test_equal Set object array');
        // Set in array
        checkEqual(true,
          equalDeep( [set1],  [set2] ),
          'test_equal Set object array');

        // more set add object object
        var set1 = new Set();
        set1.add({ a: 1, b: 2, c: { c1: 10 } });
        set1.add({ c: 3, b: 4 });
        var set2 = new Set();
        set2.add({ a: 1, b: 2, c: { c1: 10 } });
        set2.add({ c: 3, b: 4 });
        checkEqual(true,
          equalDeep( { set: set1 }, { set: set2 } ),
          'test_equal Set add object');

        // more set add object object
        var set1 = new Set();
        set1.add({ a: 1, b: 2, c: { c1: 10 } });
        set1.add({ c: 3, b: 4 });
        var set2 = new Set();
        set2.add({ a: 1, b: 2, c: { c1: 10 }, d: '' });
        set2.add({ c: 3, b: 4 });
        checkEqual(false,
          equalDeep( { set: set1 }, { set: set2 } ),
          'test_equal Set add object');

      });

    };

    const test_equalDeep_set_CircularReference = () => {
      it(test_equalDeep_set_CircularReference.name, () => {
        if (parts.platform.wsh) {
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
          equalDeep( { set: set1 }, { set: set2 } ),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set1);
        set2.add(set1);
        checkEqual(true,
          equalDeep( { set: set1 }, { set: set2 } ),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set2);
        set2.add(set2);
        checkEqual(true,
          equalDeep( { set: set1 }, { set: set2 } ),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        set1.add(set2);
        set2.add(set1);
        checkEqual(true,
          equalDeep( { set: set1 }, { set: set2 } ),
        );

        var set1 = new Set();
        set1.add({ a: '1' }); set1.add(['b']);
        var set2 = new Set();
        set2.add({ a: '1' }); set2.add(['b']);
        var set3 = new Set();
        set3.add({ a: '1' }); set3.add(['b']);
        set1.add(set2);
        set2.add(set3);
        checkEqual(false,
          equalDeep( { set: set1 }, { set: set2 } ),
        );

      });

    };

    const test_or = () => {
      it(test_or.name, () => {
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

        checkEqual(true,  or({value: 1, compareArray: [1, 2]}));
        checkEqual(false, or({value: 0, compareArray: [1, 2]}));

        // exception
        checkEqual(false, isThrown(
          () => { or({value: 1, compareArray: [1, 2]}); },
        ));
        checkEqual(true, isThrown(
          () => { or({value: 1, array: [1, 2]}); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
        'or args(compareArray) is not array'
          ),
        ));
        checkEqual(true, isThrown(
          () => { or({value1: 1, compareArray: [1, 2]}); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
        'or args(compareArray) is not array'
          ),
        ));
        checkEqual(false, isThrown(
          () => { or({value1: 1, compareArray: [1, 2]}, []); },
          (e) => (e.name === (new TypeError).name) && (
            e.message ===
        'or args(compareArray) is not array'
          ),
        ));
      });
    };

    const test_matchValue = () => {
      it(test_matchValue.name, () => {
        // almost test_match done
        checkEqual('123',       matchValue('123', null, 999));
        checkEqual(undefined,   matchValue(undefined, null, 999));
        checkEqual(999,         matchValue(null, null, 999));

        checkEqual('123', matchValue({
          value: '123',
          compare: undefined,
          valueWhenMatched: 999,
        }));
        checkEqual(999, matchValue({
          value: undefined,
          compare: undefined,
          valueWhenMatched: 999,
        }));
        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          valueWhenMatched: 999,
        }));

        checkEqual('test', String(matchValue({}, isEmptyObject, 'test')));
        checkEqual('[object Object]', String(matchValue({a:1}, isEmptyObject, 'test')));
      });
    };

    const test_initialValue = () => {
      it(test_initialValue.name, () => {
        // almost test_match done
        checkEqual('123', initialValue('123', 999));
        checkEqual(999,  initialValue(undefined, 999));
        checkEqual(null,  initialValue(null, 999));

        checkEqual('123', initialValue({
          value: '123', valueWhenMatched: 999,
        }));
        checkEqual(999, initialValue({
          value: undefined, valueWhenMatched: 999,
        }));
        checkEqual(null, initialValue({
          value: null, valueWhenMatched: 999,
        }));

        checkEqual('[object Object]', String(initialValue({}, 'test')));
        checkEqual('null',            String(initialValue(null, {})));
        checkEqual('[object Object]', String(initialValue(undefined, {})));
      });
    };

    const test_matchSome = () => {
      it(test_matchSome.name, () => {
        // normal args string
        checkEqual(false, matchSome('abc', ['123', '456', '789']), 'test_match 1');
        checkEqual(true,  matchSome('abc', ['123', '456', 'abc']), 'test_match 2');
        checkEqual(false, matchSome('abc', ['123', '456', /^b/]), 'test_match 3');
        checkEqual(true,  matchSome('abc', ['123', '456', /^a/]), 'test_match 4');
        checkEqual(false, matchSome('abc', []), 'test_match 5');
        checkEqual(false, matchSome('123', [null, undefined, 123, 'abc']), 'test_match 6');
        checkEqual(true,  matchSome('abc', [(value) => value.startsWith('a')]), 'test_match 7');
        checkEqual(false, matchSome('abc', [(value) => value.startsWith('b')]), 'test_match 8');

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
          value: 'abc', compareArray: [(value) => value.startsWith('a')],
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 'abc', compareArray: [(value) => value.startsWith('b')],
        }), 'test_match param 8');

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
      it(test_matchSomeValue.name, () => {
        // almost test_match done
        checkEqual(999, matchSomeValue(99, [99], 999));
        checkEqual(98,  matchSomeValue(98, [99], 999));

        checkEqual(999, matchSomeValue({
          value: 99, compareArray: [99], valueWhenMatched: 999,
        }));
        checkEqual(98, matchSomeValue({
          value: 98, compareArray: [99], valueWhenMatched: 999,
        }));
      });
    };

    const test_allMatchSome = () =>{
      it(test_allMatchSome.name, () => {
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

        checkEqual(false, isThrown(() => {
          allMatchSome([10], [value => value > 15]);
        }));
        checkEqual(true, isThrown(() => {
          allMatchSome(10, [value => value > 15]);
        }));
      });

    };

    const test_someMatchSome = () =>{
      it(test_someMatchSome.name, () => {
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

        checkEqual(false, isThrown(() => {
          someMatchSome([10], [value => value > 15]);
        }));
        checkEqual(true, isThrown(() => {
          someMatchSome(10, [value => value > 15]);
        }));
      });

    };

    const test_indexOfMatchSome = () =>{
      it(test_indexOfMatchSome.name, () => {
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
      });

    };

    const test_matchAll = () => {
      it(test_matchAll.name, () => {
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
          value: 'abc', compareArray: [
            'abc',
          ],
        }));
        checkEqual(false, matchAll({
          value: 'abc', compareArray: [
            'abc', '',
          ],
        }));
        checkEqual(true, matchAll({
          value: 'abc', compareArray: [
            /^a/, /.*b.*/, /c$/,
          ],
        }));

        // Object Named Parameter number
        checkEqual(true, matchAll({
          value: 100, compareArray: [
            10*10,
          ],
        }));
        checkEqual(false, matchAll({
          value: 100, compareArray: [
            100, 101,
          ],
        }));
        checkEqual(true, matchAll({
          value: 100, compareArray: [
            value => value >= 100,
            value => value <= 110,
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
      it(test_matchAllValue.name, () => {
        // almost test_match done
        checkEqual(999, matchAllValue(99, [99], 999));
        checkEqual(98,  matchAllValue(98, [99], 999));
        checkEqual(999,  matchAllValue(100, [
          value => value >= 100, value => value <= 110,
        ], 999));
        checkEqual(999,  matchAllValue(110, [
          value => value >= 100, value => value <= 110,
        ], 999));
        checkEqual(111, matchAllValue(111, [
          value => value >= 100, value => value <= 110,
        ], 999));

        checkEqual(999, matchAllValue({
          value: 100, compareArray: [
            value => value >= 100, value => value <= 110,
          ], valueWhenMatched: 999,
        }));
        checkEqual(999, matchAllValue({
          value: 110, compareArray: [
            value => value >= 100, value => value <= 110,
          ], valueWhenMatched: 999,
        }));
        checkEqual(111, matchAllValue({
          value: 111, compareArray: [
            value => value >= 100, value => value <= 110,
          ], valueWhenMatched: 999,
        }));
      });
    };

    const test_allMatchAll = () =>{
      it(test_allMatchAll.name, () => {
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
          allMatchAll([100, 105, 110], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
        checkEqual(false,
          allMatchAll([100, 105, 111], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
      });
    };

    const test_someMatchAll = () =>{
      it(test_someMatchAll.name, () => {
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
          someMatchAll([105], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
        checkEqual(false,
          someMatchAll([111, 115, 120], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
        checkEqual(true,
          someMatchAll([111, 110, 120], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
      });
    };

    const test_indexOfMatchAll = () =>{
      it(test_indexOfMatchAll.name, () => {
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
            value => value >= 100,
            value => value <= 110,
          ]),
        );
        checkEqual(-1,
          indexOfMatchAll([111, 115, 120], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
        checkEqual(1,
          indexOfMatchAll([111, 110, 120], [
            value => value >= 100,
            value => value <= 110,
          ]),
        );
      });
    };

    test_equal();
    test_equal_object();
    test_equal_array();
    test_equal_date();
    test_equal_regexp();
    test_equal_map();
    test_equal_set();

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
    test_matchValue();
    test_initialValue();

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


  });
};

module.exports = {
  test_execute_compare,
};
