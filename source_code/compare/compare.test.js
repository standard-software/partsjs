/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_compare = (parts) => {

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
    match, matchValue, initialValue,
    isEmpty,
    matchAll, matchSome, matchSomeIndex,
  } = parts.compare;

  const test_equal = () => {
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
  };

  const test_equal_object = () => {
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

  };

  const test_equal_array = () => {
    // array
    checkEqual(true,
      equal( [],   []),
    );
    checkEqual(false,
      equal( [[]],   [[]]),
    );
    checkEqual(true,
      equal( [1, 2],   [1, 2]),
      'test_equal array 1');
    checkEqual(false,
      equal( [2, 2],   [1, 2]),
      'test_equal array 2');

    checkEqual(false,
      equal( [1, 2, {}],   [1, 2, {}]),
      'test_equal array 3');
    checkEqual(false,
      equal( [1, 2, [3]],   [1, 2, [3]]),
      'test_equal array 4');

  };

  const test_equal_date = () => {
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

  };

  const test_equal_regexp = () => {
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
  };

  const test_equal_map = () => {
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
  };

  const test_equal_set = () => {
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
  };

  const test_equalDeep = () => {
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
  };

  const test_equalDeep_object = () => {
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

  };

  const test_equalDeep_object_array_mix = () => {

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
    checkEqual(true, equalDeep(testValue1, testValue2));

    // equal false array object array
    var testValue1 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
    var testValue2 = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }];
    checkEqual(false, equal(testValue1, testValue2));
    // equalDeep true array object array
    checkEqual(true, equalDeep(testValue1, testValue2));

    // equal false object array object
    var testValue1 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3]};
    var testValue2 = { a: 1, b: 2, c: 3, d: [{ e: 4, f: 5, g: 6 }, 2, 3]};
    checkEqual(false, equal(testValue1, testValue2));
    // equalDeep true object array object
    checkEqual(true, equalDeep(testValue1, testValue2));

  };

  const test_equalDeep_object_CircularReference = () => {
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
  };

  const test_equalDeep_array = () => {
    // array
    checkEqual(true,  equalDeep( [],   []));
    checkEqual(true,  equalDeep( [[]],   [[]]));
    checkEqual(true,  equalDeep( [1, 2],   [1, 2]));
    checkEqual(false, equalDeep( [2, 2],   [1, 2]));

    checkEqual(true,  equalDeep( [1, 2, {}],   [1, 2, {}]));
    checkEqual(true,  equalDeep( [1, 2, [3]],   [1, 2, [3]]));
  };

  const test_equalDeep_array_CircularReference = () => {
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
  };

  const test_equalDeep_date = () => {
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

  };

  const test_equalDeep_regexp = () => {
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

  };

  const test_equalDeep_map = () => {

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
  };

  const test_equalDeep_map_object_array = () => {
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

  };

  const test_equalDeep_map_CircularReference = () => {
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
  };

  const test_equalDeep_set = () => {

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
  };

  const test_equalDeep_set_object_array = () => {
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

  };

  const test_equalDeep_set_CircularReference = () => {
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

  };

  const test_or = () => {
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
  };

  const test_match = () => {
    // normal args string
    checkEqual(false, match('abc', ['123', '456', '789']), 'test_match 1');
    checkEqual(true,  match('abc', ['123', '456', 'abc']), 'test_match 2');
    checkEqual(false, match('abc', ['123', '456', /^b/]), 'test_match 3');
    checkEqual(true,  match('abc', ['123', '456', /^a/]), 'test_match 4');
    checkEqual(false, match('abc', []), 'test_match 5');
    checkEqual(false, match('123', [null, undefined, 123, 'abc']), 'test_match 6');
    checkEqual(true,  match('abc', [(value) => value.startsWith('a')]), 'test_match 7');
    checkEqual(false, match('abc', [(value) => value.startsWith('b')]), 'test_match 8');

    // normal args number
    checkEqual(false, match(123, ['123', '456', '789']), 'test_match number 1');
    checkEqual(true,  match(123, [123, 456, 'abc']), 'test_match number 2');
    checkEqual(false, match(123, ['123', '456', /^1/]), 'test_match number 3');
    checkEqual(true,  match(123, [123, '456', /^1/]), 'test_match number 4');
    checkEqual(false, match(123, []), 'test_match number 5');
    checkEqual(true,  match(123, [null, undefined, 123, 'abc']), 'test_match number 6');
    checkEqual(true,  match(100, [(value) => 100 <= value]), 'test_match 7');
    checkEqual(false, match(99,  [(value) => 100 <= value]), 'test_match 8');

    checkEqual(true, match(null,      [null, undefined, 123, 'abc']), 'test_match 1');
    checkEqual(true, match(undefined, [null, undefined, 123, 'abc']), 'test_match 2');
    checkEqual(true, match(123,       [null, undefined, 123, 'abc']), 'test_match 3');
    checkEqual(true, match('abc',     [null, undefined, 123, 'abc']), 'test_match 4');

    checkEqual(true,  match(1,    [null, undefined, 1, '1']));
    checkEqual(false, match(1,    [null, undefined, 2, '1']));
    checkEqual(true,  match('1',  [null, undefined, 1, '1']));
    checkEqual(false, match('1',  [null, undefined, 1, '2']));

    checkEqual(true,  match(null,      [null, undefined, 0]));
    checkEqual(true,  match(undefined, [null, undefined, 0]));
    checkEqual(true,  match(0,         [null, undefined, 0]));
    checkEqual(false, match(null,      [undefined, 0]));
    checkEqual(false, match(undefined, [null, 0]));
    checkEqual(false, match(0,         [null, undefined]));

    // exception
    checkEqual(true, isThrownException(
      () => { match('123', 'abc'); },
      (new TypeError).name,
    ));

    // parameter args string
    checkEqual(false, match({
      value: 'abc', compareArray: ['123', '456', '789'],
    }), 'test_match param 1');
    checkEqual(true,  match({
      value: 'abc', compareArray: ['123', '456', 'abc'],
    }), 'test_match param 2');
    checkEqual(false,  match({
      value: 'abc', compareArray: ['123', '456', /^b/],
    }), 'test_match param 3');
    checkEqual(true,  match({
      value: 'abc', compareArray: ['123', '456', /^a/],
    }), 'test_match param 4');
    checkEqual(false,  match({
      value: 'abc', compareArray: [],
    }), 'test_match param 5');
    checkEqual(false, match({
      value: '123', compareArray: [null, undefined, 123, 'abc'],
    }), 'test_match param 6');
    checkEqual(true,  match({
      value: 'abc', compareArray: [(value) => value.startsWith('a')],
    }), 'test_match param 7');
    checkEqual(false, match({
      value: 'abc', compareArray: [(value) => value.startsWith('b')],
    }), 'test_match param 8');

    // parameter args number
    checkEqual(false, match({
      value: 123, compareArray: ['123', '456', '789'],
    }), 'test_match param number 1');
    checkEqual(true,  match({
      value: 123, compareArray: [123, 456, 'abc'],
    }), 'test_match param number 2');
    checkEqual(false,  match({
      value: 123, compareArray: ['123', '456', /^1/],
    }), 'test_match param number 3');
    checkEqual(true,  match({
      value: 123, compareArray: [123, '456', /^1/],
    }), 'test_match param number 4');
    checkEqual(false,  match({
      value: 123, compareArray: [],
    }), 'test_match param number 5');
    checkEqual(true,  match({
      value: 123, compareArray: [null, undefined, 123, 'abc'],
    }), 'test_match param number 6');
    checkEqual(true,  match({
      value: 100, compareArray: [(value) => 100 <= value],
    }), 'test_match param 7');
    checkEqual(false, match({
      value: 99,  compareArray: [(value) => 100 <= value],
    }), 'test_match param 8');

    // exception
    checkEqual(false, isThrown(
      () => {
        match({
          value: '123', compareArray: ['123'],
        });
      },
    ), 'test_match thrown 1');
    checkEqual(false, isThrown(
      () => {
        match({
          value: '123', compareArray: [],
        });
      },
    ), 'test_match thrown 2');
    checkEqual(false, isThrown(
      () => {
        match({
          value: '123', compareArray: [123],
        });
      },
    ), 'test_match thrown 3');
    checkEqual(true, isThrown(
      () => {
        match({
          value: '123', compareArray: 123,
        });
      },
      (e) => {
        return (e.name === (new TypeError).name) && (
          e.message ===
          'match args(compareArray) is not array'
        );
      },
    ), 'test_match thrown 4');
    checkEqual(true, isThrown(
      () => {
        match({
          value1: '123', compareArray: [123],
        });
      },
    ), 'test_match thrown 5');
    checkEqual(false, isThrown(
      () => {
        match({
          value1: '123', compareArray: [123],
        }, []);
      },
    ), 'test_match thrown 5');

    checkEqual(false, match(
      {
        value1: '123', compareArray: [123],
      },
      [],
    ));
    checkEqual(true, match(
      {
        value1: '123', compareArray: [123],
      },
      [() => true],
    ));
    checkEqual(false, match(
      {
        value1: '123', compareArray: [123],
      },
      [() => false],
    ));
    checkEqual(true, match(
      {
        value1: '123', compareArray: [123],
      },
      [(value) => isObject(value)],
    ));

  };

  const test_matchValue = () => {
    // almost test_match done
    checkEqual(999, matchValue(99, [99], 999));
    checkEqual(98,  matchValue(98, [99], 999));

    checkEqual(999, matchValue({
      value: 99, compareArray: [99], inMatchValue: 999,
    }));
    checkEqual(98, matchValue({
      value: 98, compareArray: [99], inMatchValue: 999,
    }));
  };

  const test_initialValue = () => {
    // almost test_match done
    checkEqual('123', initialValue('123', 999));
    checkEqual(999,  initialValue(undefined, 999));
    checkEqual(null,  initialValue(null, 999));

    checkEqual('123', initialValue({ value: '123', inMatchValue: 999 }));
    checkEqual(999, initialValue({ value: undefined, inMatchValue: 999 }));
    checkEqual(null, initialValue({ value: null, inMatchValue: 999 }));

    checkEqual('[object Object]', String(initialValue({}, 'test')));
    checkEqual('null',            String(initialValue(null, {})));
    checkEqual('[object Object]', String(initialValue(undefined, {})));
  };

  const test_isEmpty = () =>{
    checkEqual(true,  isEmpty());
    checkEqual(true,  isEmpty(undefined));
    checkEqual(true,  isEmpty(null));
    checkEqual(true,  isEmpty(''));
    checkEqual(true,  isEmpty([]));
    checkEqual(true,  isEmpty({}));

    checkEqual(false, isEmpty(1));
    checkEqual(false, isEmpty('0'));
    checkEqual(false, isEmpty([1]));
    checkEqual(false, isEmpty({a:1}));
  };

  const test_matchAll = () =>{
    checkEqual(true,
      matchAll([10, 20, 30], [value => value > 5]),
    );
    checkEqual(false,
      matchAll([10, 20, 30], [value => value > 15]),
    );
    checkEqual(true,
      matchAll([null, undefined], [null, undefined]),
    );
    checkEqual(false,
      matchAll([null, undefined], [null]),
    );
    checkEqual(true,
      matchAll([null, undefined], [isNull, isUndefined]),
    );
    checkEqual(false,
      matchAll([null, undefined], [isNull]),
    );
    checkEqual(false,
      matchAll([null, undefined, NaN], [null, undefined]),
    );
    checkEqual(false,
      matchAll([null, undefined, NaN], [null, undefined, NaN]),
    );
    checkEqual(true,
      matchAll([null, undefined, NaN], [null, undefined, isNaNStrict]),
    );

    checkEqual(false, isThrown(() => {
      matchAll([10], [value => value > 15]);
    }));
    checkEqual(true, isThrown(() => {
      matchAll(10, [value => value > 15]);
    }));
  };

  const test_matchSome = () =>{
    checkEqual(true,
      matchSome([10, 20, 30], [value => value > 5])
      , 'test_matchSome');
    checkEqual(true,
      matchSome([10, 20, 30], [value => value > 25]),
    );
    checkEqual(false,
      matchSome([10, 20, 30], [value => value > 35]),
    );
    checkEqual(true,
      matchSome([null, undefined], [null, undefined]),
    );
    checkEqual(true,
      matchSome([null, undefined], [null]),
    );
    checkEqual(true,
      matchSome([null, undefined], [isNull, isUndefined]),
    );
    checkEqual(true,
      matchSome([null, undefined], [isNull]),
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [null, undefined]),
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [null, undefined, NaN]),
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [null, undefined, isNaNStrict]),
    );
    checkEqual(false,
      matchSome([null, undefined, NaN], [NaN]),
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [isNaNStrict]),
    );

    checkEqual(false, isThrown(() => {
      matchSome([10], [value => value > 15]);
    }));
    checkEqual(true, isThrown(() => {
      matchSome(10, [value => value > 15]);
    }));
  };

  const test_matchSomeIndex = () =>{
    checkEqual(0,
      matchSomeIndex([10, 20, 30], [value => value > 5])
      , 'test_matchSomeIndex');
    checkEqual(2,
      matchSomeIndex([10, 20, 30], [value => value > 25]),
    );
    checkEqual(-1,
      matchSomeIndex([10, 20, 30], [value => value > 35]),
    );
    checkEqual(0,
      matchSomeIndex([null, undefined], [null, undefined]),
    );
    checkEqual(1,
      matchSomeIndex([null, undefined], [undefined]),
    );
    checkEqual(0,
      matchSomeIndex([null, undefined], [isNull, isUndefined]),
    );
    checkEqual(1,
      matchSomeIndex([null, undefined], [isUndefined]),
    );
    checkEqual(0,
      matchSomeIndex([null, undefined, NaN], [null, undefined]),
    );
    checkEqual(0,
      matchSomeIndex([null, undefined, NaN], [null, undefined, NaN]),
    );
    checkEqual(0,
      matchSomeIndex([null, undefined, NaN], [null, undefined, isNaNStrict]),
    );
    checkEqual(-1,
      matchSomeIndex([null, undefined, NaN], [NaN]),
    );
    checkEqual(2,
      matchSomeIndex([null, undefined, NaN], [isNaNStrict]),
    );

    checkEqual(false, isThrown(() => {
      matchSomeIndex([10], [value => value > 15]);
    }));
    checkEqual(true, isThrown(() => {
      matchSomeIndex(10, [value => value > 15]);
    }));
  };

  console.log('  test compare.js');
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
  test_match();
  test_matchValue();
  test_initialValue();
  test_isEmpty();

  test_matchAll();
  test_matchSome();
  test_matchSomeIndex();

};

module.exports = {
  test_execute_compare,
};
