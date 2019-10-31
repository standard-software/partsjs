const test_execute_array = (parts) => {

  const {
    checkEqual,
    isThrown,isThrownException,
  } = parts.test;

  const {
    array,
  } = parts;

  const test_array_equal = () => {
    checkEqual(true,  array.equal([], []));
    checkEqual(true,  array.equal([1], [1]));
    checkEqual(false, array.equal([1], [2]));
    checkEqual(true,  array.equal([1,2], [1,2]));
    checkEqual(false, array.equal([1,2], [2,2]));
    checkEqual(true,  array.equal([1,2,3], [1,2,3]));
    checkEqual(true,  array.equal([[1,2],3], [[1,2],3]));
    checkEqual(true,  array.equal([[1,2,3]], [[1,2,3]]));
    checkEqual(true,  array.equal([1,[2,3]], [1,[2,3]]));
    checkEqual(false, array.equal([[1,2],3], [1,[2,3]]));
    checkEqual(false, array.equal([[1,2,3]], [1,2,3]));
    checkEqual(true,  array.equal([[1,[2],3]], [[1,[2],3]]));
    checkEqual(false, array.equal([[1,[2],3]], [[1,[3],3]]));

    checkEqual(true,  array.equal(['a'], ['a']));
    checkEqual(false, array.equal(['a'], ['b']));
    checkEqual(true,  array.equal(['a','b'], ['a','b']));
    checkEqual(false,  array.equal(['a','a'], ['a','b']));
    checkEqual(true,  array.equal(['a','b',], ['a','b',]));
    checkEqual(true,  array.equal([['a','b'],'c'], [['a','b'],'c']));
    checkEqual(false, array.equal([['a','b'],'c'], ['a',['b','c']]));
    checkEqual(true,  array.equal([['a',['b'],'c']], [['a',['b'],'c']]));
    checkEqual(false, array.equal([['a',['b'],'c']], [['a',['a'],'c']]));

    checkEqual(true,  array.equal([undefined], [undefined]));
    checkEqual(false, array.equal([undefined], [null]));
    checkEqual(true,  array.equal([undefined,null], [undefined,null]));
    checkEqual(false,  array.equal([undefined,undefined], [undefined,null]));
    checkEqual(true,  array.equal([undefined,null,], [undefined,null,]));
    checkEqual(true,  array.equal([[undefined,null],undefined], [[undefined,null],undefined]));
    checkEqual(false, array.equal([[undefined,null],undefined], [undefined,[null,undefined]]));
    checkEqual(true,  array.equal([[undefined,[null],undefined]], [[undefined,[null],undefined]]));
    checkEqual(false, array.equal([[undefined,[null],undefined]], [[undefined,['a'],undefined]]));

    // parameter Args
    checkEqual(true,  array.equal({
      value1:   [1,[2,3],4],
      value2:   [1,[2,3],4],
    }));
    checkEqual(false,  array.equal({
      value1:   [1,[2,3],4],
      value2:   [1,[2,3],5],
    }));

    // exception
    checkEqual(false, isThrown(() => {
      array.equal([1,2,3], [4,5,6]);
    }));
    checkEqual(true, isThrownException(() => {
      array.equal([1,2,3], 456);
    }, (new TypeError).name));
    checkEqual(true, isThrownException(() => {
      array.equal(123, [4,5,6]);
    }, (new TypeError).name));
  };

  const test_min = () => {
    checkEqual(5, array.min([5, 10, 15, 20]));
    checkEqual(1, array.min([5, 4, 3, 2, 1]));
    checkEqual(3, array.min([5, 4, 3,]));

    // exception
    checkEqual(false, isThrown(() => {
      array.min([1,2,3]);
    }));
    checkEqual(false, isThrown(() => {
      array.min([1,2,3,]);
    }));
    checkEqual(true, isThrown(() => {
      array.min('1,2,3');
    }));
    checkEqual(true, isThrown(() => {
      array.min([1,,3]);
    }));
    checkEqual(false, isThrown(() => {
      array.min([,1,2,3]);
    }));
    checkEqual(true, isThrown(() => {
      array.min([1,,3,]);
    }));
  }

  const test_max = () => {
    checkEqual(20, array.max([5, 10, 15, 20]));
    checkEqual(5, array.max([5, 4, 3, 2, 1]));
    checkEqual(3, array.max([1, 2, 3,]));

    // exception
    checkEqual(false, isThrown(() => {
      array.max([1,2,3]);
    }));
    checkEqual(false, isThrown(() => {
      array.max([1,2,3,]);
    }));
    checkEqual(true, isThrown(() => {
      array.max('1,2,3');
    }));
    checkEqual(true, isThrown(() => {
      array.max([1,,3]);
    }));
    checkEqual(false, isThrown(() => {
      array.max([,1,2,3]);
    }));
    checkEqual(true, isThrown(() => {
      array.max([1,,3,]);
    }));
  }

  console.log('  test array.js');
  test_array_equal();
  test_min();
  test_max();
}

module.exports = {
  test_execute_array,
};