/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
const test_execute_array = (parts) => {
  const { describe, it } = parts.test;
  describe(test_execute_array.name, () => {

    const {
      checkEqual,
      isThrown, isThrownException,
    } = parts.test;

    const {
      array,
    } = parts;

    const {
      isEven, isOdd,
    } = parts.number;

    const {
      equal
    } = parts;

    const test_array_from = () => {
      describe(test_array_from.name, () => {
        it(test_array_from.name, () => {
          function test() {
            // eslint-disable-next-line prefer-rest-params
            return array.from(arguments);
          }
          checkEqual(true, parts.equal([10, 20], test(10, 20)));
        });
      });
    };

    const test_min = () => {
      describe(test_min.name, () => {
        it(test_min.name, () => {
          checkEqual(null, array.min([]));
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
            array.min([1,2,'3']);
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
        });
      });
    };

    const test_max = () => {
      describe(test_max.name, () => {
        it(test_max.name, () => {
          checkEqual(null, array.max([]));
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
            array.max([1,2,'3']);
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
        });
      });
    };

    const test_sum = () => {
      describe(test_sum.name, () => {
        it(test_sum.name, () => {
          checkEqual(0, array.sum([]));
          checkEqual(1, array.sum([1]));
          checkEqual(0, array.sum([0]));
          checkEqual(7, array.sum([3,4]));
          checkEqual(426, array.sum([52, 52, 70, 72, 80, 100]));
          checkEqual(154, array.sum([6, 9, 9, 10, 10, 10, 100]));
        });
      });
    };

    const test_average = () => {
      describe(test_average.name, () => {
        it(test_average.name, () => {
          checkEqual(null, array.average([]));
          checkEqual(1, array.average([1]));
          checkEqual(0, array.average([0]));
          checkEqual(3.5, array.average([3,4]));
          checkEqual(71, array.average([70, 72, 80, 52, 52, 100]));
          checkEqual(22, array.average([9, 9, 10, 10, 10, 100, 6]));
        });
      });
    };

    const test_midian = () => {
      describe(test_midian.name, () => {
        it(test_midian.name, () => {
          checkEqual(71, array.midian([70, 72, 80, 52, 52, 100]));
          checkEqual(10, array.midian([9, 9, 10, 10, 10, 100, 6]));
        });
      });
    };

    const test_mode = () => {
      describe(test_mode.name, () => {
        it(test_mode.name, () => {
          checkEqual(true,
            equal(
              [70, 52],
              array.mode([70, 70, 80, 52, 52, 100])
            )
          );
          // checkEqual(10, array.midian([9, 9, 10, 10, 10, 100, 6]));
        });
      });
    };

    const test_uniqe = () => {
      describe(test_uniqe.name, () => {
        it(test_uniqe.name, () => {
          checkEqual(true,
            equal(
              [1, 2, 0],
              array.unique([1, 2, 0, 0, 2, 2])
            )
          );
        });
      });
    };

    const test_muptiple = () => {
      describe(test_uniqe.name, () => {
        it(test_uniqe.name, () => {
          checkEqual(true,
            equal(
              [2, 0],
              array.multiple([1, 2, 0, 0, 2, 2])
            )
          );
        });
      });
    };


    const test_filter = () => {
      describe(test_filter.name, () => {
        it(test_filter.name, () => {
          checkEqual(true,
            equal(
              [0, 2, 4],
              array.filter([0, 1, 2, 3, 4, 5], (value) => isEven(value))
            )
          );
          checkEqual(true,
            equal(
              [0, 2, 4],
              array.filter([0, 1, 2, 3, 4, 5], isEven)
            )
          );
          checkEqual(true,
            equal(
              [1, 3, 5],
              array.filter([0, 1, 2, 3, 4, 5], isOdd)
            )
          );
        });
      });
    };

    console.log('  test array.js');

    test_array_from();

    test_min();
    test_max();

    test_sum();
    test_average();
    test_midian();
    test_mode();

    test_uniqe();

    test_filter();
  });
};

module.exports = {
  test_execute_array,
};
