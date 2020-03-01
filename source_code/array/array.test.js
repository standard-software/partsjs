/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
const test_execute_array = (parts) => {
  const { describe, it } = parts.test;
  describe('test_execute_array', () => {

    const {
      checkEqual, checkCompare,
      isThrown, isThrownException,
    } = parts.test;

    const {
      array,
    } = parts;

    const {
      isFirst, isLast, isBothEdges,
      subIndex, subLength,
    } = array;

    const {
      insert, add,
      deleteLength, deleteIndex,
      includeFirst, includeLast, includeBothEdges,
      excludeFirst, excludeLast, excludeBothEdges,
    } = array.operation;

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
      it('test_array_from', () => {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }
        checkEqual(true, parts.equal([10, 20], test(10, 20)));
      });
    };

    const test_min = () => {
      it('test_min', () => {
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
      it('test_max', () => {
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
      it('test_sum', () => {
        checkEqual(0, array.sum([]));
        checkEqual(1, array.sum([1]));
        checkEqual(0, array.sum([0]));
        checkEqual(7, array.sum([3,4]));
        checkEqual(426, array.sum([52, 52, 70, 72, 80, 100]));
        checkEqual(154, array.sum([6, 9, 9, 10, 10, 10, 100]));
      });
    };

    const test_average = () => {
      it('test_average', () => {
        checkEqual(null, array.average([]));
        checkEqual(1, array.average([1]));
        checkEqual(0, array.average([0]));
        checkEqual(3.5, array.average([3,4]));
        checkEqual(71, array.average([70, 72, 80, 52, 52, 100]));
        checkEqual(22, array.average([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    const test_median = () => {
      it('test_median', () => {
        checkEqual(71, array.median([70, 72, 80, 52, 52, 100]));
        checkEqual(10, array.median([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    const test_mode = () => {
      it('test_mode', () => {
        checkEqual(
          [],
          array.mode([])
        );
        checkEqual(
          [70],
          array.mode([70])
        );
        checkEqual(
          [70, 52],
          array.mode([70, 70, 80, 52, 52, 100])
        );
        checkEqual(
          [52],
          array.mode([70, 70, 80, 52, 52, 52, 100])
        );
        checkEqual(
          [9, 10],
          array.mode([9, 9, 10, 10, 10, 9, 6])
        );
      });
    };

    const test_uniqe = () => {
      it('test_uniqe', () => {
        checkEqual(
          [1, 2, 3, 4, 0],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_single = () => {
      it('test_single', () => {
        checkEqual(
          [1, 0],
          array.single([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_multiple = () => {
      it('test_multiple', () => {
        checkEqual(
          [2, 3, 4],
          array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_filter = () => {
      it('test_filter', () => {
        checkEqual(
          [0, 2, 4],
          array.filter([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkEqual(
          [0, 2, 4],
          array.filter([0, 1, 2, 3, 4, 5], isEven)
        );
        checkEqual(
          [1, 3, 5],
          array.filter([0, 1, 2, 3, 4, 5], isOdd)
        );

        // Object Named Parameter
        checkEqual(
          [0, 2, 4],
          array.filter({
            array: [0, 1, 2, 3, 4, 5],
            func: (value) => isEven(value)
          })
        );
      });
    };

    const test_map = () => {
      it('test_map', () => {
        checkEqual(
          [true, false, true, false, true, false],
          array.map([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkEqual(
          [true, false, true, false, true, false],
          array.map([0, 1, 2, 3, 4, 5], isEven)
        );
        checkEqual(
          [false, true, false, true, false, true],
          array.map([0, 1, 2, 3, 4, 5], isOdd)
        );
        checkEqual(
          [0, 2, 4, 6, 8, 10],
          array.map([0, 1, 2, 3, 4, 5], value => value * 2)
        );

        // Object Named Parameter
        checkEqual(
          [true, false, true, false, true, false],
          array.map({
            array: [0, 1, 2, 3, 4, 5],
            func: (value) => isEven(value)
          })
        );
      });
    };

    const test_count = () => {
      it('test_count', () => {
        checkEqual(
          3,
          array.count([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkEqual(
          3,
          array.count([0, 1, 2, 3, 4, 5], isEven)
        );
        checkEqual(
          3,
          array.count([0, 1, 2, 3, 4, 5], isOdd)
        );

        // Object Named Parameter
        checkEqual(
          3,
          array.count({
            array: [0, 1, 2, 3, 4, 5],
            func: isOdd
          })
        );

      });
    };

    const test_findIndex = () => {
      it('test_findIndex', () => {
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
      it('test_findBackIndex', () => {
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
      it('test_find', () => {
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
      it('test_findBack', () => {
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
      it('test_some', () => {
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
      it('test_all', () => {
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

    const test_isFirst = () => {
      it('test_isFirst', () => {
        checkEqual(true,  isFirst([1, 2, 3], 1));
        checkEqual(false, isFirst([1, 2, 3], 2));
        checkEqual(true,  isFirst(['A', 'B', 'C'], 'A'));
        checkEqual(false, isFirst(['A', 'B', 'C'], 'a'));
        checkEqual(false, isFirst(['A', 'B', 'C'], 'B'));

        // Object Named Parameter
        checkEqual(true,
          isFirst({
            array: ['A', 'B', 'C'],
            value: 'A',
          })
        );
        checkEqual(false,
          isFirst({
            array: ['A', 'B', 'C'],
            value: 'a',
          })
        );
      });
    };

    const test_isLast = () => {
      it('test_isLast', () => {
        checkEqual(true,  isLast([1, 2, 3], 3));
        checkEqual(false, isLast([1, 2, 3], 2));
        checkEqual(true,  isLast(['A', 'B', 'C'], 'C'));
        checkEqual(false, isLast(['A', 'B', 'C'], 'c'));
        checkEqual(false, isLast(['A', 'B', 'C'], 'B'));

        // Object Named Parameter
        checkEqual(true,
          isLast({
            array: ['A', 'B', 'C'],
            value: 'C',
          })
        );
        checkEqual(false,
          isLast({
            array: ['A', 'B', 'C'],
            value: 'c',
          })
        );
      });
    };

    const test_isBothEdges = () => {
      it('test_isBothEdges', () => {
        checkEqual(true,  isBothEdges([1, 2, 1], 1));
        checkEqual(false, isBothEdges([1, 2, 1], 2));
        checkEqual(true,  isBothEdges(['A', 'B', 'A'], 'A'));
        checkEqual(false, isBothEdges(['A', 'B', 'A'], 'a'));
        checkEqual(false, isBothEdges(['A', 'B', 'A'], 'B'));

        checkEqual(false, isBothEdges(['A', 'B', 'A', 'D'], 'A'));
        checkEqual(true,  isBothEdges(['A', 'B', 'A', 'D'], 'A', 'D'));

        checkEqual(true,  isBothEdges(['{', 'A', 'B', '}'], '{', '}'));
        checkEqual(true,  isBothEdges(['{', '{', '}', '}'], '{', '}'));
        checkEqual(false, isBothEdges(['A', '{', 'B', '}'], '{', '}'));
        checkEqual(false, isBothEdges(['{', 'A', 'B', '}'], '}', '}'));
        checkEqual(false, isBothEdges(['{', 'A', 'B', '}'], '{', '{'));

        checkEqual(false, isBothEdges([1], 1));
        checkEqual(true,  isBothEdges([1, 1], 1));

        // Object Named Parameter
        checkEqual(true,
          isBothEdges({
            array: ['A', 'B', 'A'],
            value: 'A',
          })
        );
        checkEqual(false,
          isBothEdges({
            array: ['A', 'B', 'A'],
            value: 'a',
          })
        );
        checkEqual(true,
          isBothEdges({
            array: ['A', 'B', 'A'],
            valueFirst: 'A',
          })
        );
        checkEqual(false,
          isBothEdges({
            array: ['A', 'B', 'A', 'D'],
            valueFirst: 'A',
          })
        );
        checkEqual(true,
          isBothEdges({
            array: ['A', 'B', 'A', 'D'],
            valueFirst: 'A',
            valueLast: 'D'
          })
        );
      });
    };

    const test_array_subIndex = () => {
      it('test_array_subIndex', () => {
        var array1 = [0, 1, 2];
        checkEqual([1],       subIndex(array1, 1, 1));
        checkEqual([0, 1],    subIndex(array1, 0, 1));
        checkEqual([1, 2],    subIndex(array1, 1, 2));
        checkEqual([0, 1, 2], array1);

        // Object Named Parameter
        checkEqual(['A', 'B'],
          subIndex({
            array: ['A', 'B', 'A'],
            indexFirst: 0,
            indexLast: 1,
          })
        );
      });
    };

    const test_array_subLength = () => {
      it('test_array_subLength', () => {
        var array1 = [0, 1, 2];
        checkEqual([1],       subLength(array1, 1, 1));
        checkEqual([0, 1],    subLength(array1, 0, 2));
        checkEqual([1, 2],    subLength(array1, 1, 2));
        checkEqual([0, 1, 2], array1);

        // Object Named Parameter
        checkEqual(['A', 'B'],
          subLength({
            array: ['A', 'B', 'A'],
            index:  0,
            length: 2,
          })
        );
      });
    };

    const test_operation_insert = () => {
      it('test_operation_insert', () => {
        checkEqual(
          [1, 2, 3],
          insert([1, 2, 3], [])
        );
        checkEqual(
          [0, 1, 2, 3],
          insert([1, 2, 3], [0])
        );
        checkEqual(
          [0, 1, 2, 3],
          insert([1, 2, 3], [0], 0)
        );
        checkEqual(
          [1, 0, 2, 3],
          insert([1, 2, 3], [0], 1)
        );
        checkEqual(
          [1, 2, 0, 3],
          insert([1, 2, 3], [0], 2)
        );
        checkEqual(
          [1, 2, 3, 0],
          insert([1, 2, 3], [0], 3)
        );
        checkEqual(
          [-1, 0, 1, 2, 3],
          insert([1, 2, 3], [-1, 0])
        );
        checkEqual(
          [1, -1, 0, 2, 3],
          insert([1, 2, 3], [-1, 0], 1)
        );

        // exception
        checkEqual(true, isThrownException(() => {
          insert([1, 2, 3], [0], -1);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          insert([1, 2, 3], [0], 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          insert([1, 2, 3], 0, 4);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(
          [1, 2, 3, 0],
          insert({
            array: [1, 2, 3],
            values: [0],
            index: 3
          })
        );
      });
    };

    const test_operation_add = () => {
      it('test_operation_add', () => {
        checkEqual(
          [1, 2, 3],
          add([1, 2, 3], [])
        );
        checkEqual(
          [1, 2, 3, 0],
          add([1, 2, 3], [0])
        );
        checkEqual(
          [0, 1, 2, 3],
          add([1, 2, 3], [0], -1)
        );
        checkEqual(
          [1, 0, 2, 3],
          add([1, 2, 3], [0], 0)
        );
        checkEqual(
          [1, 2, 0, 3],
          add([1, 2, 3], [0], 1)
        );
        checkEqual(
          [1, 2, 3, 0],
          add([1, 2, 3], [0], 2)
        );
        checkEqual(
          [1, 2, 3, -1, 0],
          add([1, 2, 3], [-1, 0])
        );
        checkEqual(
          [1, 2, -1, 0, 3],
          add([1, 2, 3], [-1, 0], 1)
        );

        // exception
        checkEqual(true, isThrownException(() => {
          add([1, 2, 3], [0], -2);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          add([1, 2, 3], [0], 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          add([1, 2, 3], 0, 4);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(
          [1, 2, 3, 0],
          add({
            array: [1, 2, 3],
            values: [0],
            index: 2
          })
        );
      });
    };

    const test_operation_deleteLength = () => {
      it('test_operation_deleteLength', () => {
        checkEqual(
          [1, 3],
          deleteLength([1, 2, 3], 1, 1)
        );
        checkEqual(
          [3],
          deleteLength([1, 2, 3], 0, 2)
        );
        checkEqual(
          [1],
          deleteLength([1, 2, 3], 1, 2)
        );

        // exception
        checkEqual(true, isThrownException(() => {
          deleteLength([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(true, isThrownException(() => {
          deleteLength([1, 2, 3], 1, 0);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 2);
        }));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 3);
        }));
        checkEqual(true, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          deleteLength([1, 2, 3], -1, 2);
        }, 'RangeError'));

        // Object Named Parameter
        checkEqual(
          [0, 3],
          deleteLength({
            array: [0, 1, 2, 3],
            index: 1,
            length: 2,
          })
        );
      });
    };

    const test_operation_deleteIndex = () => {
      it('test_operation_deleteIndex', () => {
        checkEqual(
          [1, 3],
          deleteIndex([1, 2, 3], 1, 1)
        );
        checkEqual(
          [3],
          deleteIndex([1, 2, 3], 0, 1)
        );
        checkEqual(
          [1],
          deleteIndex([1, 2, 3], 1, 2)
        );

        // exception
        checkEqual(true, isThrownException(() => {
          deleteIndex([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(true, isThrownException(() => {
          deleteIndex([1, 2, 3], 1, 0);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteIndex([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(() => {
          deleteIndex([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(() => {
          deleteIndex([1, 2, 3], 0, 2);
        }));
        checkEqual(true, isThrownException(() => {
          deleteIndex([1, 2, 3], 0, 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          deleteIndex([1, 2, 3], -1);
        }, 'RangeError'));

        // Object Named Parameter
        checkEqual(
          [0, 2, 3],
          deleteIndex({
            array: [0, 1, 2, 3],
            index: 1,
          })
        );
        checkEqual(
          [0, 2, 3],
          deleteIndex({
            array: [0, 1, 2, 3],
            indexFirst: 1,
          })
        );
        checkEqual(
          [0, 3],
          deleteIndex({
            array: [0, 1, 2, 3],
            indexFirst: 1,
            indexLast: 2,
          })
        );
      });
    };

    const test_operation_includeFirst = () => {
      it('test_operation_includeFirst', () => {
        checkEqual([1, 2, 3],
          includeFirst([1, 2, 3], 1)
        );
        checkEqual([2, 1, 2, 3],
          includeFirst([1, 2, 3], 2)
        );
        checkEqual(['A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], 'A')
        );
        checkEqual(['a', 'A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], 'a')
        );
        checkEqual(['B', 'A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], 'B')
        );

        // Object Named Parameter
        checkEqual(['A', 'B', 'C'],
          includeFirst({
            array: ['A', 'B', 'C'],
            value: 'A',
          })
        );
        checkEqual(['a', 'A', 'B', 'C'],
          includeFirst({
            array: ['A', 'B', 'C'],
            value: 'a',
          })
        );
      });
    };

    const test_operation_includeLast = () => {
      it('test_operation_includeLast', () => {
        checkEqual([1, 2, 3],
          includeLast([1, 2, 3], 3)
        );
        checkEqual([1, 2, 3, 2],
          includeLast([1, 2, 3], 2)
        );
        checkEqual(['A', 'B', 'C'],
          includeLast(['A', 'B', 'C'], 'C')
        );
        checkEqual(['A', 'B', 'C', 'c'],
          includeLast(['A', 'B', 'C'], 'c')
        );
        checkEqual(['A', 'B', 'C', 'B'],
          includeLast(['A', 'B', 'C'], 'B')
        );

        // Object Named Parameter
        checkEqual(['A', 'B', 'C'],
          includeLast({
            array: ['A', 'B', 'C'],
            value: 'C',
          })
        );
        checkEqual(['A', 'B', 'C', 'c'],
          includeLast({
            array: ['A', 'B', 'C'],
            value: 'c',
          })
        );
      });
    };

    const test_operation_includeBothEdges = () => {
      it('test_operation_includeBothEdges', () => {

        checkEqual([1, 2, 1],
          includeBothEdges([1, 2, 1], 1)
        );
        checkEqual([1, 1, 2, 3, 1],
          includeBothEdges([1, 2, 3], 1)
        );
        checkEqual(['A', 'B', 'A'],
          includeBothEdges(['A', 'B', 'A'], 'A')
        );
        checkEqual(['a', 'A', 'B', 'A', 'a'],
          includeBothEdges(['A', 'B', 'A'], 'a')
        );
        checkEqual(['A', 'A', 'B', 'C', 'A'],
          includeBothEdges(['A', 'B', 'C'], 'A')
        );

        checkEqual(['{', '}'],
          includeBothEdges(['{', '}'], '{', '}')
        );
        checkEqual(['{', 'A', '}'],
          includeBothEdges(['{', 'A', '}'], '{', '}')
        );
        checkEqual(['{', 'A', '{', '}', '}'],
          includeBothEdges(['A', '{', '}'], '{', '}')
        );

        checkEqual(['A', 'A'],
          includeBothEdges(['A', 'A'], 'A')
        );
        checkEqual(['A', 'A', 'A'],
          includeBothEdges(['A'], 'A')
        );
        checkEqual(['A', '', 'A'],
          includeBothEdges([''], 'A')
        );
        checkEqual(['A', 'A'],
          includeBothEdges([], 'A')
        );

        // exception
        checkEqual(true, isThrownException(() => {
          includeBothEdges(0, 1);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(['A', 'B', 'A'],
          includeBothEdges({
            array: ['A', 'B', 'A'],
            value: 'A',
          })
        );
        checkEqual(['a', 'A', 'B', 'A', 'a'],
          includeBothEdges({
            array: ['A', 'B', 'A'],
            value: 'a',
          })
        );
        checkEqual(['A', 'B', 'A'],
          includeBothEdges({
            array: ['A', 'B', 'A'],
            valueFirst: 'A',
          })
        );
        checkEqual(['A', 'A', 'B', 'A', 'D', 'A'],
          includeBothEdges({
            array: ['A', 'B', 'A', 'D'],
            valueFirst: 'A',
          })
        );
        checkEqual(['A', 'B', 'A', 'D'],
          includeBothEdges({
            array: ['A', 'B', 'A', 'D'],
            valueFirst: 'A',
            valueLast: 'D'
          })
        );
      });
    };

    const test_operation_excludeFirst = () => {
      it('test_operation_excludeFirst', () => {
        checkEqual([2, 3],
          excludeFirst([1, 2, 3], 1)
        );
        checkEqual([1, 2, 3],
          excludeFirst([1, 2, 3], 2)
        );
        checkEqual(['B', 'C'],
          excludeFirst(['A', 'B', 'C'], 'A')
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst(['A', 'B', 'C'], 'a')
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst(['A', 'B', 'C'], 'B')
        );

        // Object Named Parameter
        checkEqual(['B', 'C'],
          excludeFirst({
            array: ['A', 'B', 'C'],
            value: 'A',
          })
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst({
            array: ['A', 'B', 'C'],
            value: 'a',
          })
        );
      });
    };

    const test_operation_excludeLast = () => {
      it('test_operation_excludeLast', () => {
        checkEqual([1, 2],
          excludeLast([1, 2, 3], 3)
        );
        checkEqual([1, 2, 3],
          excludeLast([1, 2, 3], 2)
        );
        checkEqual(['A', 'B'],
          excludeLast(['A', 'B', 'C'], 'C')
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast(['A', 'B', 'C'], 'c')
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast(['A', 'B', 'C'], 'B')
        );

        // Object Named Parameter
        checkEqual(['A', 'B'],
          excludeLast({
            array: ['A', 'B', 'C'],
            value: 'C',
          })
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast({
            array: ['A', 'B', 'C'],
            value: 'c',
          })
        );
      });
    };

    const test_operation_excludeBothEdges = () => {
      it('test_operation_excludeBothEdges', () => {

        checkEqual([2],
          excludeBothEdges([1, 2, 1], 1)
        );
        checkEqual([1, 2, 3],
          excludeBothEdges([1, 2, 3], 1)
        );
        checkEqual(['B'],
          excludeBothEdges(['A', 'B', 'A'], 'A')
        );
        checkEqual(['A', 'B', 'A'],
          excludeBothEdges(['A', 'B', 'A'], 'a')
        );
        checkEqual(['A', 'B', 'C'],
          excludeBothEdges(['A', 'B', 'C'], 'A')
        );

        checkEqual([],
          excludeBothEdges(['{', '}'], '{', '}')
        );
        checkEqual(['A'],
          excludeBothEdges(['{', 'A', '}'], '{', '}')
        );
        checkEqual(['A', '{', '}'],
          excludeBothEdges(['A', '{', '}'], '{', '}')
        );

        checkEqual([],
          excludeBothEdges(['A', 'A'], 'A')
        );
        checkEqual(['A'],
          excludeBothEdges(['A'], 'A')
        );
        checkEqual([''],
          excludeBothEdges([''], 'A')
        );
        checkEqual([],
          excludeBothEdges([], 'A')
        );

        // exception
        checkEqual(true, isThrownException(() => {
          excludeBothEdges(0, 1);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(['B'],
          excludeBothEdges({
            array: ['A', 'B', 'A'],
            value: 'A',
          })
        );
        checkEqual(['A', 'B', 'A'],
          excludeBothEdges({
            array: ['A', 'B', 'A'],
            value: 'a',
          })
        );
        checkEqual(['B'],
          excludeBothEdges({
            array: ['A', 'B', 'A'],
            valueFirst: 'A',
          })
        );
        checkEqual(['A', 'B', 'A', 'D'],
          excludeBothEdges({
            array: ['A', 'B', 'A', 'D'],
            valueFirst: 'A',
          })
        );
        checkEqual(['B', 'A'],
          excludeBothEdges({
            array: ['A', 'B', 'A', 'D'],
            valueFirst: 'A',
            valueLast: 'D'
          })
        );
      });
    };
    test_array_from();

    test_min();
    test_max();

    test_sum();
    test_average();
    test_median();
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

    test_isFirst();
    test_isLast();
    test_isBothEdges();

    test_array_subIndex();
    test_array_subLength();

    test_operation_insert();
    test_operation_add();
    test_operation_deleteLength();
    test_operation_deleteIndex();

    test_operation_includeFirst();
    test_operation_includeLast();
    test_operation_includeBothEdges();
    test_operation_excludeFirst();
    test_operation_excludeLast();
    test_operation_excludeBothEdges();
  });
};

module.exports = {
  test_execute_array,
};
