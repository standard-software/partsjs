/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
const test_execute_array = (parts) => {

  const {
    checkEqual,
    isThrown, isThrownException,
  } = parts.test;

  const {
    array,
  } = parts;

  const test_array_from = () => {
    function test() {
      // eslint-disable-next-line prefer-rest-params
      return array.from(arguments);
    }
    checkEqual(true, parts.equal([10, 20], test(10, 20)));
  };

  const test_min = () => {
    checkEqual(5, array.min([5, 10, 15, 20]));
    checkEqual(1, array.min([5, 4, 3, 2, 1]));
    checkEqual(3, array.min([5, 4, 3,]));

    // exception
    checkEqual(false, isThrown(() => {
      array.min([1, 2, 3]);
    }));
    checkEqual(false, isThrown(() => {
      array.min([1, 2, 3,]);
    }));
    checkEqual(true, isThrown(() => {
      array.min('1,2,3');
    }));
    checkEqual(true, isThrown(() => {
      array.min([1,, 3]);
    }));
    checkEqual(true, isThrown(() => {
      array.min([, 1, 2, 3]);
    }));
    checkEqual(true, isThrown(() => {
      array.min([1,, 3,]);
    }));
  };

  const test_max = () => {
    checkEqual(20, array.max([5, 10, 15, 20]));
    checkEqual(5, array.max([5, 4, 3, 2, 1]));
    checkEqual(3, array.max([1, 2, 3,]));

    // exception
    checkEqual(false, isThrown(() => {
      array.max([1, 2, 3]);
    }));
    checkEqual(false, isThrown(() => {
      array.max([1, 2, 3,]);
    }));
    checkEqual(true, isThrown(() => {
      array.max('1,2,3');
    }));
    checkEqual(true, isThrown(() => {
      array.max([1,, 3]);
    }));
    checkEqual(true, isThrown(() => {
      array.max([, 1, 2, 3]);
    }));
    checkEqual(true, isThrown(() => {
      array.max([1,, 3,]);
    }));
  };

  const test_average = () => {
    checkEqual(71, array.average([52, 52, 70, 72, 80, 100]));
    checkEqual(22, array.average([6, 9, 9, 10, 10, 10, 100]));
  };

  const test_midian = () => {
    checkEqual(71, array.midian([52, 52, 70, 72, 80, 100]));
    checkEqual(10, array.midian([6, 9, 9, 10, 10, 10, 100]));
  };

  console.log('  test array.js');
  // test_array_equal();

  test_array_from();

  test_min();
  test_max();

  // test_sum();
  test_average();
  test_midian();

};

module.exports = {
  test_execute_array,
};
