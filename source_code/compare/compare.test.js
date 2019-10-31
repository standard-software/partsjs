const test_execute_compare = (parts) => {

  const {
    isUndefined,isNull,isNaNStrict,
    isBoolean,isNumber,isInteger,isString,
    isFunction,isObject,isObjectType,
    isArray,isDate,isRegExp,
    isException,
  } = parts.type;

  const {
    checkEqual,
    isThrown,
    isThrownException,
  } = parts.test;

  const {
    equal,or,
    match,matchValue,initialValue,
    isEmpty,
    matchAll, matchSome, matchSomeIndex,
  } = parts.compare;

  const test_equal = () => {
    // normal args
    checkEqual(true,  equal(  1,   1));
    checkEqual(true,  equal('1', '1'));
    checkEqual(false, equal('1',   1));

    // args.length
    checkEqual(true,  equal(1, 1, 2));
    checkEqual(false, equal(1, 2, 3));
    checkEqual(true,  equal(null, null));
    checkEqual(true,  equal(undefined, undefined));
    checkEqual(true,  equal(undefined));

    // named argument
    checkEqual(true,  equal({value1:  1, value2:  1}));
    checkEqual(true,  equal({value1:'1', value2:'1'}));
    checkEqual(false, equal({value1:'1', value2:  1}));

  }

  const test_or = () => {
    var value;
    checkEqual(false, or(value, []));
    checkEqual(false, or(value, [null]));
    checkEqual(false, or(value, [null, null]));
    checkEqual(false, or(value, [null, 0]));
    checkEqual(false, or(value, [0, '']));
    checkEqual(true, or(value, [undefined]));
    checkEqual(true, or(value, [undefined, null]));
    checkEqual(true, or(value, [null, undefined]));
    checkEqual(true, or(value, [undefined, undefined]));
    checkEqual(true, or(value, [undefined, 0]));
    value = null;
    checkEqual(false, or(value, []));
    checkEqual(false, or(value, [undefined]));
    checkEqual(false, or(value, [undefined, undefined]));
    checkEqual(false, or(value, [undefined, 0]));
    checkEqual(false, or(value, [0, '']));
    checkEqual(true, or(value, [null]));
    checkEqual(true, or(value, [null, undefined]));
    checkEqual(true, or(value, [undefined, null]));
    checkEqual(true, or(value, [null, null]));
    checkEqual(true, or(value, [null, 0]));
    value = 1;
    checkEqual(true, or(value, [1]));
    checkEqual(true, or(value, [1, 2]));
    checkEqual(true, or(value, [1, 2, 3]));
    checkEqual(false, or(value, [2]));
    checkEqual(false, or(value, [2, 3]));

    // exception
    checkEqual(true, isThrown(
      () => { or(123, 456) },
      (e) => (e.name === (new TypeError).name) && (
        e.message ===
          'or args(compareArray) is not array'
      )
    ));

    checkEqual(true,  or({value: 1, compareArray: [1, 2]}))
    checkEqual(false, or({value: 0, compareArray: [1, 2]}))

    // exception
    checkEqual(false, isThrown(
      () => { or({value: 1, compareArray: [1, 2]}) }
    ));
    checkEqual(true, isThrown(
      () => { or({value: 1, array: [1, 2]}) },
      (e) => (e.name === (new TypeError).name) && (
        e.message ===
        'or args(compareArray) is not array'
      )
    ));
    checkEqual(true, isThrown(
      () => { or({value1: 1, compareArray: [1, 2]}) },
      (e) => (e.name === (new TypeError).name) && (
        e.message ===
        'or args(compareArray) is not array'
      )
    ));
    checkEqual(false, isThrown(
      () => { or({value1: 1, compareArray: [1, 2]}, []) },
      (e) => (e.name === (new TypeError).name) && (
        e.message ===
        'or args(compareArray) is not array'
      )
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

    checkEqual(true,  match(1,  [null, undefined, 1, '1']));
    checkEqual(false, match(1,  [null, undefined, 2, '1']));
    checkEqual(true,  match('1',[null, undefined, 1, '1']));
    checkEqual(false, match('1',[null, undefined, 1, '2']));

    checkEqual(true,  match(null,      [null, undefined, 0]));
    checkEqual(true,  match(undefined, [null, undefined, 0]));
    checkEqual(true,  match(0,         [null, undefined, 0]));
    checkEqual(false, match(null,      [undefined, 0]));
    checkEqual(false, match(undefined, [null, 0]));
    checkEqual(false, match(0,         [null, undefined]));

    // exception
    checkEqual(true, isThrownException(
      () => { match('123', 'abc'); },
      (new TypeError).name
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
      value: 'abc', compareArray: ['123', '456', /^a/]
    }), 'test_match param 4');
    checkEqual(false,  match({
      value: 'abc', compareArray: []
    }), 'test_match param 5');
    checkEqual(false, match({
      value: '123', compareArray: [null, undefined, 123, 'abc']
    }), 'test_match param 6');
    checkEqual(true,  match({
      value: 'abc', compareArray: [(value) => value.startsWith('a')]
    }), 'test_match param 7');
    checkEqual(false, match({
      value: 'abc', compareArray: [(value) => value.startsWith('b')]
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
      value: 123, compareArray: [123, '456', /^1/]
    }), 'test_match param number 4');
    checkEqual(false,  match({
      value: 123, compareArray: []
    }), 'test_match param number 5');
    checkEqual(true,  match({
      value: 123, compareArray: [null, undefined, 123, 'abc']
    }), 'test_match param number 6');
    checkEqual(true,  match({
      value: 100, compareArray: [(value) => 100 <= value]
    }), 'test_match param 7');
    checkEqual(false, match({
      value: 99,  compareArray: [(value) => 100 <= value]
    }), 'test_match param 8');

    // exception
    checkEqual(false, isThrown(
      () => {
        match({
          value: '123', compareArray: ['123']
        });
      }
    ), 'test_match thrown 1');
    checkEqual(false, isThrown(
      () => {
        match({
          value: '123', compareArray: []
        });
      }
    ), 'test_match thrown 2');
    checkEqual(false, isThrown(
      () => {
        match({
          value: '123', compareArray: [123]
        });
      }
    ), 'test_match thrown 3');
    checkEqual(true, isThrown(
      () => {
        match({
          value: '123', compareArray: 123
        });
      },
      (e) => {
        return (e.name === (new TypeError).name) && (
        e.message ===
          'match args(compareArray) is not array'
        )
      }
    ), 'test_match thrown 4');
    checkEqual(true, isThrown(
      () => {
        match({
          value1: '123', compareArray: [123]
        });
      }
    ), 'test_match thrown 5');
    checkEqual(false, isThrown(
      () => {
        match({
          value1: '123', compareArray: [123]
        }, []);
      }
    ), 'test_match thrown 5');

    checkEqual(false, match(
      {
        value1: '123', compareArray: [123]
      },
      []
    ));
    checkEqual(true, match(
      {
        value1: '123', compareArray: [123]
      },
      [() => true]
    ));
    checkEqual(false, match(
      {
        value1: '123', compareArray: [123]
      },
      [() => false]
    ));
    checkEqual(true, match(
      {
        value1: '123', compareArray: [123]
      },
      [(value) => isObject(value)]
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
  }

  const test_matchAll = () =>{
    checkEqual(true,
      matchAll([10, 20, 30], [value => value > 5])
    );
    checkEqual(false,
      matchAll([10, 20, 30], [value => value > 15])
    );
    checkEqual(true,
      matchAll([null, undefined], [null, undefined])
    );
    checkEqual(false,
      matchAll([null, undefined], [null])
    );
    checkEqual(true,
      matchAll([null, undefined], [isNull, isUndefined])
    );
    checkEqual(false,
      matchAll([null, undefined], [isNull])
    );
    checkEqual(false,
      matchAll([null, undefined, NaN], [null, undefined])
    );
    checkEqual(false,
      matchAll([null, undefined, NaN], [null, undefined, NaN])
    );
    checkEqual(true,
      matchAll([null, undefined, NaN], [null, undefined, isNaNStrict])
    );

    checkEqual(false, isThrown(() => {
      matchAll([10], [value => value > 15])
    }));
    checkEqual(true, isThrown(() => {
      matchAll(10, [value => value > 15])
    }));
  }

  const test_matchSome = () =>{
    checkEqual(true,
      matchSome([10, 20, 30], [value => value > 5])
    , 'test_matchSome');
    checkEqual(true,
      matchSome([10, 20, 30], [value => value > 25])
    );
    checkEqual(false,
      matchSome([10, 20, 30], [value => value > 35])
    );
    checkEqual(true,
      matchSome([null, undefined], [null, undefined])
    );
    checkEqual(true,
      matchSome([null, undefined], [null])
    );
    checkEqual(true,
      matchSome([null, undefined], [isNull, isUndefined])
    );
    checkEqual(true,
      matchSome([null, undefined], [isNull])
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [null, undefined])
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [null, undefined, NaN])
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [null, undefined, isNaNStrict])
    );
    checkEqual(false,
      matchSome([null, undefined, NaN], [NaN])
    );
    checkEqual(true,
      matchSome([null, undefined, NaN], [isNaNStrict])
    );

    checkEqual(false, isThrown(() => {
      matchSome([10], [value => value > 15])
    }));
    checkEqual(true, isThrown(() => {
      matchSome(10, [value => value > 15])
    }));
  }

  const test_matchSomeIndex = () =>{
    checkEqual(0,
      matchSomeIndex([10, 20, 30], [value => value > 5])
    , 'test_matchSomeIndex');
    checkEqual(2,
      matchSomeIndex([10, 20, 30], [value => value > 25])
    );
    checkEqual(-1,
      matchSomeIndex([10, 20, 30], [value => value > 35])
    );
    checkEqual(0,
      matchSomeIndex([null, undefined], [null, undefined])
    );
    checkEqual(1,
      matchSomeIndex([null, undefined], [undefined])
    );
    checkEqual(0,
      matchSomeIndex([null, undefined], [isNull, isUndefined])
    );
    checkEqual(1,
      matchSomeIndex([null, undefined], [isUndefined])
    );
    checkEqual(0,
      matchSomeIndex([null, undefined, NaN], [null, undefined])
    );
    checkEqual(0,
      matchSomeIndex([null, undefined, NaN], [null, undefined, NaN])
    );
    checkEqual(0,
      matchSomeIndex([null, undefined, NaN], [null, undefined, isNaNStrict])
    );
    checkEqual(-1,
      matchSomeIndex([null, undefined, NaN], [NaN])
    );
    checkEqual(2,
      matchSomeIndex([null, undefined, NaN], [isNaNStrict])
    );

    checkEqual(false, isThrown(() => {
      matchSomeIndex([10], [value => value > 15])
    }));
    checkEqual(true, isThrown(() => {
      matchSomeIndex(10, [value => value > 15])
    }));
  }

  console.log('  test compare.js');
  test_equal();
  test_or();
  test_match();
  test_matchValue();
  test_initialValue();
  test_isEmpty();

  test_matchAll();
  test_matchSome();
  test_matchSomeIndex();

}

module.exports = {
  test_execute_compare,
};