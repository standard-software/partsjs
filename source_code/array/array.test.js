/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
const test_execute_array = (parts) => {
  const { describe, it } = parts.test;
  describe(test_execute_array.name, () => {

    const {
      checkEqual, checkCompare,
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

    const {
      isLowerCase, isUpperCase,
    } = parts;

    const test_array_from = () => {
      it(test_array_from.name, () => {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }
        checkEqual(true, parts.equal([10, 20], test(10, 20)));
      });
    };

    const test_min = () => {
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
    };

    const test_max = () => {
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
    };

    const test_sum = () => {
      it(test_sum.name, () => {
        checkEqual(0, array.sum([]));
        checkEqual(1, array.sum([1]));
        checkEqual(0, array.sum([0]));
        checkEqual(7, array.sum([3,4]));
        checkEqual(426, array.sum([52, 52, 70, 72, 80, 100]));
        checkEqual(154, array.sum([6, 9, 9, 10, 10, 10, 100]));
      });
    };

    const test_average = () => {
      it(test_average.name, () => {
        checkEqual(null, array.average([]));
        checkEqual(1, array.average([1]));
        checkEqual(0, array.average([0]));
        checkEqual(3.5, array.average([3,4]));
        checkEqual(71, array.average([70, 72, 80, 52, 52, 100]));
        checkEqual(22, array.average([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    const test_midian = () => {
      it(test_midian.name, () => {
        checkEqual(71, array.midian([70, 72, 80, 52, 52, 100]));
        checkEqual(10, array.midian([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    const test_mode = () => {
      it(test_mode.name, () => {
        checkCompare(parts.compare.equal,
          [],
          array.mode([])
        );
        checkCompare(parts.compare.equal,
          [70],
          array.mode([70])
        );
        checkCompare(parts.compare.equal,
          [70, 52],
          array.mode([70, 70, 80, 52, 52, 100])
        );
        checkCompare(parts.compare.equal,
          [52],
          array.mode([70, 70, 80, 52, 52, 52, 100])
        );
        checkCompare(parts.compare.equal,
          [9, 10],
          array.mode([9, 9, 10, 10, 10, 9, 6])
        );
      });
    };

    const test_uniqe = () => {
      it(test_uniqe.name, () => {
        checkCompare(parts.compare.equal,
          [1, 2, 3, 4, 0],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_single = () => {
      it(test_single.name, () => {
        checkCompare(parts.compare.equal,
          [1, 0],
          array.single([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_multiple = () => {
      it(test_multiple.name, () => {
        checkCompare(parts.compare.equal,
          [2, 3, 4],
          array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_filter = () => {
      it(test_filter.name, () => {
        checkCompare(parts.compare.equal,
          [0, 2, 4],
          array.filter([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkCompare(parts.compare.equal,
          [0, 2, 4],
          array.filter([0, 1, 2, 3, 4, 5], isEven)
        );
        checkCompare(parts.compare.equal,
          [1, 3, 5],
          array.filter([0, 1, 2, 3, 4, 5], isOdd)
        );

        // Object Named Parameter
        checkCompare(parts.compare.equal,
          [0, 2, 4],
          array.filter({
            array: [0, 1, 2, 3, 4, 5],
            func: (value) => isEven(value)
          })
        );
      });
    };

    const test_map = () => {
      it(test_map.name, () => {
        checkCompare(parts.compare.equal,
          [true, false, true, false, true, false],
          array.map([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkCompare(parts.compare.equal,
          [true, false, true, false, true, false],
          array.map([0, 1, 2, 3, 4, 5], isEven)
        );
        checkCompare(parts.compare.equal,
          [false, true, false, true, false, true],
          array.map([0, 1, 2, 3, 4, 5], isOdd)
        );
        checkCompare(parts.compare.equal,
          [0, 2, 4, 6, 8, 10],
          array.map([0, 1, 2, 3, 4, 5], value => value * 2)
        );

        // Object Named Parameter
        checkCompare(parts.compare.equal,
          [true, false, true, false, true, false],
          array.map({
            array: [0, 1, 2, 3, 4, 5],
            func: (value) => isEven(value)
          })
        );
      });
    };

    const test_count = () => {
      it(test_count.name, () => {
        checkCompare(parts.compare.equal,
          3,
          array.count([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkCompare(parts.compare.equal,
          3,
          array.count([0, 1, 2, 3, 4, 5], isEven)
        );
        checkCompare(parts.compare.equal,
          3,
          array.count([0, 1, 2, 3, 4, 5], isOdd)
        );

        // Object Named Parameter
        checkCompare(parts.compare.equal,
          3,
          array.count({
            array: [0, 1, 2, 3, 4, 5],
            func: isOdd
          })
        );

      });
    };

    const test_findIndex = () => {
      it(test_findIndex.name, () => {
        checkEqual(0,
          array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'a')
        );
        checkEqual(1,
          array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'b')
        );
        checkEqual(2,
          array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'c')
        );
        checkEqual(-1,
          array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'd')
        );
        checkEqual(3,
          array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isUpperCase(value))
        );
        checkEqual(0,
          array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isLowerCase(value))
        );

        // Object Named Parameter
        checkEqual(3,
          array.findIndex({
            array: ['a', 'b', 'c', 'A', 'B', 'C'],
            func: isUpperCase,
          })
        );
      });
    };

    const test_findBackIndex = () => {
      it(test_findBackIndex.name, () => {
        checkEqual(3,
          array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'a')
        );
        checkEqual(4,
          array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'b')
        );
        checkEqual(5,
          array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'c')
        );
        checkEqual(-1,
          array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'd')
        );
        checkEqual(5,
          array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isUpperCase(value))
        );
        checkEqual(2,
          array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isLowerCase(value))
        );

        // Object Named Parameter
        checkEqual(2,
          array.findBackIndex({
            array: ['a', 'b', 'c', 'A', 'B', 'C'],
            func: isLowerCase,
          })
        );
      });
    };

    const test_find = () => {
      it(test_find.name, () => {
        checkEqual('a',
          array.find(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'a')
        );
        checkEqual('b',
          array.find(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'b')
        );
        checkEqual('c',
          array.find(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'c')
        );
        checkEqual(undefined,
          array.find(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'd')
        );
        checkEqual('A',
          array.find(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isUpperCase(value))
        );
        checkEqual('a',
          array.find(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isLowerCase(value))
        );

        // Object Named Parameter
        checkEqual('A',
          array.find({
            array: ['a', 'b', 'c', 'A', 'B', 'C'],
            func: isUpperCase,
          })
        );
      });
    };

    const test_findBack = () => {
      it(test_findBack.name, () => {
        checkEqual('A',
          array.findBack(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'a')
        );
        checkEqual('B',
          array.findBack(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'b')
        );
        checkEqual('C',
          array.findBack(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'c')
        );
        checkEqual(undefined,
          array.findBack(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'd')
        );
        checkEqual('C',
          array.findBack(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isUpperCase(value))
        );
        checkEqual('c',
          array.findBack(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isLowerCase(value))
        );

        // Object Named Parameter
        checkEqual('c',
          array.findBack({
            array: ['a', 'b', 'c', 'A', 'B', 'C'],
            func: isLowerCase,
          })
        );

      });
    };

    const test_some = () => {
      it(test_some.name, () => {
        checkEqual(true,
          array.some(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'a')
        );
        checkEqual(true,
          array.some(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'b')
        );
        checkEqual(false,
          array.some(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'd')
        );
        checkEqual(true,
          array.some(['a', 'b', 'c', 'A', 'B', 'C'],
            value => isUpperCase(value))
        );
        checkEqual(true,
          array.some(['a', 'b', 'c', 'A', 'B', 'C'],
            isLowerCase)
        );
        checkEqual(false,
          array.some(['A', 'B', 'C'],
            isLowerCase)
        );
        checkEqual(true,
          array.some(['A', 'B', 'C'],
            () => true)
        );
        checkEqual(false,
          array.some([],
            () => true)
        );

        // Object Named Parameter
        checkEqual(true,
          array.some({
            array: ['a', 'b', 'c', 'A', 'B', 'C'],
            func: isUpperCase,
          })
        );
      });
    };

    const test_all = () => {
      it(test_all.name, () => {
        checkEqual(false,
          array.all(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'a')
        );
        checkEqual(false,
          array.all(['a', 'b', 'c', 'A', 'B', 'C'],
            value => value.toLowerCase() === 'd')
        );
        checkEqual(true,
          array.all(['A', 'B', 'C'],
            value => isUpperCase(value))
        );
        checkEqual(false,
          array.all(['A', 'B', 'C'],
            isLowerCase)
        );
        checkEqual(true,
          array.all(['a', 'b', 'c'],
            isLowerCase)
        );
        checkEqual(true,
          array.all(['A', 'B', 'C'],
            () => true)
        );
        checkEqual(false,
          array.all([],
            () => true)
        );

        // Object Named Parameter
        checkEqual(true,
          array.all({
            array: ['A', 'B', 'C'],
            func: isUpperCase,
          })
        );
        checkEqual(false,
          array.all({
            array: ['A', 'B', 'c'],
            func: isUpperCase,
          })
        );
      });
    };

    const test_operation_insert = () => {
      it(test_operation_insert.name, () => {
        checkCompare(parts.compare.equal,
          [1, 2, 3],
          array.operation.insert([1, 2, 3], [])
        );
        checkCompare(parts.compare.equal,
          [0, 1, 2, 3],
          array.operation.insert([1, 2, 3], [0])
        );
        checkCompare(parts.compare.equal,
          [0, 1, 2, 3],
          array.operation.insert([1, 2, 3], [0], 0)
        );
        checkCompare(parts.compare.equal,
          [1, 0, 2, 3],
          array.operation.insert([1, 2, 3], [0], 1)
        );
        checkCompare(parts.compare.equal,
          [1, 2, 0, 3],
          array.operation.insert([1, 2, 3], [0], 2)
        );
        checkCompare(parts.compare.equal,
          [1, 2, 3, 0],
          array.operation.insert([1, 2, 3], [0], 3)
        );
        checkCompare(parts.compare.equal,
          [-1, 0, 1, 2, 3],
          array.operation.insert([1, 2, 3], [-1, 0])
        );
        checkCompare(parts.compare.equal,
          [1, -1, 0, 2, 3],
          array.operation.insert([1, 2, 3], [-1, 0], 1)
        );

        // exception
        checkEqual(true, isThrownException(() => {
          array.operation.insert([1, 2, 3], [0], -1);
        }, RangeError.name));
        checkEqual(true, isThrownException(() => {
          array.operation.insert([1, 2, 3], [0], 4);
        }, RangeError.name));
        checkEqual(true, isThrownException(() => {
          array.operation.insert([1, 2, 3], 0, 4);
        }, TypeError.name));

        // Object Named Parameter
        checkCompare(parts.compare.equal,
          [1, 2, 3, 0],
          array.operation.insert({
            array: [1, 2, 3],
            values: [0],
            index: 3
          })
        );
      });
    };

    const test_operation_add = () => {
      it(test_operation_add.name, () => {
        checkCompare(parts.compare.equal,
          [1, 2, 3],
          array.operation.add([1, 2, 3], [])
        );
        checkCompare(parts.compare.equal,
          [1, 2, 3, 0],
          array.operation.add([1, 2, 3], [0])
        );
        checkCompare(parts.compare.equal,
          [0, 1, 2, 3],
          array.operation.add([1, 2, 3], [0], -1)
        );
        checkCompare(parts.compare.equal,
          [1, 0, 2, 3],
          array.operation.add([1, 2, 3], [0], 0)
        );
        checkCompare(parts.compare.equal,
          [1, 2, 0, 3],
          array.operation.add([1, 2, 3], [0], 1)
        );
        checkCompare(parts.compare.equal,
          [1, 2, 3, 0],
          array.operation.add([1, 2, 3], [0], 2)
        );
        checkCompare(parts.compare.equal,
          [1, 2, 3, -1, 0],
          array.operation.add([1, 2, 3], [-1, 0])
        );
        checkCompare(parts.compare.equal,
          [1, 2, -1, 0, 3],
          array.operation.add([1, 2, 3], [-1, 0], 1)
        );

        // exception
        checkEqual(true, isThrownException(() => {
          array.operation.add([1, 2, 3], [0], -2);
        }, RangeError.name));
        checkEqual(true, isThrownException(() => {
          array.operation.add([1, 2, 3], [0], 3);
        }, RangeError.name));
        checkEqual(true, isThrownException(() => {
          array.operation.add([1, 2, 3], 0, 4);
        }, TypeError.name));

        // Object Named Parameter
        checkCompare(parts.compare.equal,
          [1, 2, 3, 0],
          array.operation.add({
            array: [1, 2, 3],
            values: [0],
            index: 2
          })
        );
      });
    };


    test_array_from();

    test_min();
    test_max();

    test_sum();
    test_average();
    test_midian();
    test_mode();

    test_uniqe();
    test_multiple();

    test_filter();
    test_map();
    test_count();

    test_findIndex();
    test_findBackIndex();
    test_find();
    test_findBack();

    test_some();
    test_all();

    test_operation_insert();
    test_operation_add();
  });
};

module.exports = {
  test_execute_array,
};
