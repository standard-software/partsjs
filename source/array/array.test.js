/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
export const test_execute_array = (parts) => {
  const { describe, it, expect } = parts.test;
  describe('test_execute_array', () => {

    const {
      checkEqual, checkCompare,
      isThrown, isThrownException,
      testCounter,
    } = parts.test;

    const {
      isLowerCase, isUpperCase,

      array,
    } = parts;

    const {
      NumberArray, IntegerArray,
      isFirst, isLast, isBothEnds,
      subIndex, subLength,
      subFirst, subLast,
      arrayEntries,
      SortFunc,
    } = parts.array;

    const {
      insert, add,
      deleteLength, deleteIndex,
      deleteFirst, deleteLast,
      includeFirst, includeLast, includeBothEnds,
      excludeFirst, excludeLast, excludeBothEnds,
      trimFirst, trimLast, trimBothEnds,
      popFirst, popLast,
      pushFirst, pushLast,
      remainFirst, remainLast,
    } = parts.array.operation;

    const {
      isEven, isOdd,
    } = parts.number;

    const {
      equal,
    } = parts.compare;

    const {
      isUndefined, isNull,
    } = parts.type;

    const test_array_NumberArray = () => {
      it('test_array_NumberArray', () => {
        checkEqual([0,1,2],       NumberArray(3));
        checkEqual([1,2,3],       NumberArray(1,3));
        checkEqual([0,3,6,9],     NumberArray(0,10, 3));
        checkEqual([0,3,6,9],     NumberArray(0,11, 3));
        checkEqual([0,3,6,9,12],  NumberArray(0,12, 3));
        checkEqual([5,7,9],       NumberArray(5,10, 2));
        checkEqual([-3,-2,-1,0],  NumberArray(-3,0));
        checkEqual([-5,-3,-1],    NumberArray(-5, 0, 2));
        checkEqual([-5,-3,-1],    NumberArray(-5,-1, 2));
        checkEqual([-5,-3],       NumberArray(-5,-2, 2));

        checkEqual([0, 0.1, 0.2, 0.30000000000000004,0.4], NumberArray(0,0.4, 0.1));
        checkEqual(true,  isThrown(() => NumberArray(0,10, 0)));
        checkEqual(true,  isThrown(() => NumberArray(0,10, -0.1)));

        checkEqual([3,2,1],       NumberArray(3,1));
        checkEqual([10,7,4,1],    NumberArray(10,0, -3));
        checkEqual([10,7,4,1],    NumberArray(10,1, -3));
        checkEqual([10,7,4],      NumberArray(10,2, -3));
        checkEqual([10,8,6],      NumberArray(10,5, -2));
        checkEqual([0,-1,-2,-3],  NumberArray(0,-3));
        checkEqual([0,-2,-4],     NumberArray(0,-5, -2));
        checkEqual([0,-2,-4],     NumberArray(0,-4, -2));
        checkEqual([0,-2],        NumberArray(0,-3, -2));

        checkEqual([0.3,0.19999999999999998,0.09999999999999998], NumberArray(0.3,0, -0.1));
        checkEqual(true,  isThrown(() => NumberArray(0.3,0, 0)));
        checkEqual(true,  isThrown(() => NumberArray(0.3,0, 0.1)));

        // object parameter
        checkEqual([0,1,2],       NumberArray({ count: 3 }));
        checkEqual([1,2,3],       NumberArray({ start: 1, end: 3 }));
        checkEqual([0,3,6,9],     NumberArray({ start: 0, end: 10, increment: 3 }));
        checkEqual([7,8,9,10],    NumberArray(7, { end: 10 }));
        checkEqual([7,9],         NumberArray(7, { end: 10, increment: 2 }));
        checkEqual([7,9],         NumberArray(7, 10, { increment: 2 }));

        checkEqual(true,  isThrown(() => NumberArray({ count: 3, start: 0 })));
        checkEqual(true,  isThrown(() => NumberArray({ end: 10 })));
        checkEqual(true,  isThrown(() => NumberArray(5, { start: 0, end: 10, increment: 3 })));
        checkEqual(true,  isThrown(() => NumberArray(5, { increment: 3 })));
        checkEqual(true,  isThrown(() => NumberArray(5, 10, {})));

      });
    };

    const test_array_IntegerArray = () => {
      it('test_array_IntegerArray', () => {
        checkEqual([0,1,2],       IntegerArray(3));
        checkEqual([1,2,3],       IntegerArray(1,3));
        checkEqual([0,3,6,9],     IntegerArray(0,10, 3));
        checkEqual([0,3,6,9],     IntegerArray(0,11, 3));
        checkEqual([0,3,6,9,12],  IntegerArray(0,12, 3));
        checkEqual([5,7,9],       IntegerArray(5,10, 2));
        checkEqual([-3,-2,-1,0],  IntegerArray(-3,0));
        checkEqual([-5,-3,-1],    IntegerArray(-5, 0, 2));
        checkEqual([-5,-3,-1],    IntegerArray(-5,-1, 2));
        checkEqual([-5,-3],       IntegerArray(-5,-2, 2));

        checkEqual(true,  isThrown(() => IntegerArray(0,0.2, 0.1)));
        checkEqual(true,  isThrown(() => IntegerArray(0,10, 0)));
        checkEqual(true,  isThrown(() => IntegerArray(0,10, -0.1)));

        checkEqual([3,2,1],       IntegerArray(3,1));
        checkEqual([10,7,4,1],    IntegerArray(10,0, -3));
        checkEqual([10,7,4,1],    IntegerArray(10,1, -3));
        checkEqual([10,7,4],      IntegerArray(10,2, -3));
        checkEqual([10,8,6],      IntegerArray(10,5, -2));
        checkEqual([0,-1,-2,-3],  IntegerArray(0,-3));
        checkEqual([0,-2,-4],     IntegerArray(0,-5, -2));
        checkEqual([0,-2,-4],     IntegerArray(0,-4, -2));
        checkEqual([0,-2],        IntegerArray(0,-3, -2));

        checkEqual(true,  isThrown(() => IntegerArray(0.2,0, -0.1)));
        checkEqual(true,  isThrown(() => IntegerArray(0.3,0, 0)));
        checkEqual(true,  isThrown(() => IntegerArray(0.3,0, 0.1)));

        // object parameter
        checkEqual([0,1,2],       IntegerArray({ count: 3 }));
        checkEqual([1,2,3],       IntegerArray({ start: 1, end: 3 }));
        checkEqual([0,3,6,9],     IntegerArray({ start: 0, end: 10, increment: 3 }));
        checkEqual([7,8,9,10],    IntegerArray(7, { end: 10 }));
        checkEqual([7,9],         IntegerArray(7, { end: 10, increment: 2 }));
        checkEqual([7,9],         IntegerArray(7, 10, { increment: 2 }));

        checkEqual(true,  isThrown(() => IntegerArray({ count: 3, start: 0 })));
        checkEqual(true,  isThrown(() => IntegerArray({ end: 10 })));
        checkEqual(true,  isThrown(() => IntegerArray(5, { start: 0, end: 10, increment: 3 })));
        checkEqual(true,  isThrown(() => IntegerArray(5, { increment: 3 })));
        checkEqual(true,  isThrown(() => IntegerArray(5, 10, {})));

      });
    };

    const test_array_from = () => {
      it('test_array_from', () => {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }
        checkEqual([10, 20], test(10, 20));
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

        // func
        checkEqual(-5, array.min([5, 4, 3,], v => -1 * v));
        checkEqual(1, array.min([
          { num: 1},
          { num: 2},
          { num: 3},
        ], v =>v.num));
        checkEqual({ index: 0, element: { num: 1 }, value: 1 } , array.min([
          { num: 1},
          { num: 2},
          { num: 3},
        ], v =>v.num, true));

        // func exception
        checkEqual(true, isThrown(() => {
          array.min([
            { num: 1},
            { num: '2'},
            { num: 3},
          ], v =>v.num, true);
        }));

        // object parameter
        checkEqual(3, array.min({
          array: [5, 4, 3,],
        }));
        checkEqual(-5, array.min({
          array: [5, 4, 3,],
          func: v => -1 * v
        }));
        checkEqual(1, array.min({
          array: [
            { num: 1},
            { num: 2},
            { num: 3},
          ],
          func: v =>v.num
        }));
        checkEqual({ index: 0, element: { num: 1 }, value: 1 }, array.min({
          array: [
            { num: 1},
            { num: 2},
            { num: 3},
          ],
          func: v =>v.num,
          detail: true,
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

        // func
        checkEqual(-3, array.max([5, 4, 3,], v => -1 * v));
        checkEqual(3, array.max([
          { num: 1},
          { num: 2},
          { num: 3},
        ], v =>v.num));
        checkEqual({ index: 2, element: { num: 3 }, value: 3 } , array.max([
          { num: 1},
          { num: 2},
          { num: 3},
        ], v =>v.num, true));

        // func exception
        checkEqual(true, isThrown(() => {
          array.max([
            { num: 1},
            { num: '2'},
            { num: 3},
          ], v =>v.num, true);
        }));

        // object parameter
        checkEqual(5, array.max({
          array: [5, 4, 3,],
        }));
        checkEqual(-3, array.max({
          array: [5, 4, 3,],
          func: v => -1 * v
        }));
        checkEqual(3, array.max({
          array: [
            { num: 1},
            { num: 2},
            { num: 3},
          ],
          func: v =>v.num
        }));
        checkEqual({ index: 2, element: { num: 3 }, value: 3 }, array.max({
          array: [
            { num: 1},
            { num: 2},
            { num: 3},
          ],
          func: v =>v.num,
          detail: true,
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
        checkEqual(null, array.median([]));
        checkEqual(71, array.median([70, 72, 80, 52, 52, 100]));
        checkEqual(10, array.median([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    const test_mode = () => {
      it('test_mode', () => {
        checkEqual([],        array.mode([]));
        checkEqual([70],      array.mode([70]));
        checkEqual([70, 52],  array.mode([70, 70, 80, 52, 52, 100]));
        checkEqual([52],      array.mode([70, 70, 80, 52, 52, 52, 100]));
        checkEqual([9, 10],   array.mode([9, 9, 10, 10, 10, 9, 6]));
      });
    };

    const test_unique = () => {
      it('test_unique', () => {
        checkEqual([1, 2, 3, 4, 0],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
        checkEqual([1, 2, 3, 4, 0],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], v => v)
        );
        checkEqual([1, 2],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0],
            v => parts.isEven(v)
          )
        );
        checkEqual([1, 2],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0],
            v => parts.isEven(v), true
          ).result
        );
        checkEqual([false, true],
          array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0],
            v => parts.isEven(v), true
          ).index
        );
        checkEqual(
          { result: [
            { x: 1, y: 1 },
            { x: undefined, y: 4 },
            { x: 2, y: 2 },
          ], index: [1, undefined, 2]
          },
          array.unique([
            { x: 1, y: 1 },
            { x: undefined, y: 4 },
            { x: 2, y: 2 },
            { x: 1, y: 3 },
            { y: 5 },
          ], v => v.x, true)
        );
      });

      // Object Named Parameter
      checkEqual([1, 2, 3, 4, 0],
        array.unique({ array: [1, 2, 3, 4, 4, 4, 3, 2, 0] })
      );
      checkEqual([1, 2],
        array.unique(
          {
            array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
            func: v => parts.isEven(v)
          }
        )
      );
      checkEqual([1, 2],
        array.unique(
          [1, 2, 3, 4, 4, 4, 3, 2, 0],
          {
            func: v => parts.isEven(v)
          }
        )
      );
      checkEqual({ result: [1, 2], index: [false, true] },
        array.unique(
          {
            array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
            func: v => parts.isEven(v),
            detail: true
          })
      );
      checkEqual({ result: [1, 2], index: [false, true] },
        array.unique(
          [1, 2, 3, 4, 4, 4, 3, 2, 0],
          {
            func: v => parts.isEven(v),
            detail: true
          })
      );
      checkEqual({ result: [1, 2], index: [false, true] },
        array.unique(
          [1, 2, 3, 4, 4, 4, 3, 2, 0],
          v => parts.isEven(v),
          {
            detail: true
          })
      );
    };

    const test_single = () => {
      it('test_single', () => {
        checkEqual([1, 0],
          array.single([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_multiple = () => {
      it('test_multiple', () => {
        checkEqual([2, 3, 4],
          array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
      });
    };

    const test_group = () => {
      it('test_group', () => {
        checkEqual([[1], [2, 2], [3, 3], [4, 4, 4], [0]],
          array.group([1, 2, 3, 4, 4, 4, 3, 2, 0])
        );
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          array.group([1, 2, 3, 4, 4, 4, 3, 2, 0],
            v => parts.isEven(v)
          )
        );
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        },
        array.group([1, 2, 3, 4, 4, 4, 3, 2, 0],
          v => parts.isEven(v), true
        )
        );

        // Object Named Parameter
        checkEqual([[1], [2, 2], [3, 3], [4, 4, 4], [0]],
          array.group({ array: [1, 2, 3, 4, 4, 4, 3, 2, 0] })
        );
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          array.group({ array: [1, 2, 3, 4, 4, 4, 3, 2, 0], func: v => parts.isEven(v) })
        );
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], { func: v => parts.isEven(v) })
        );
        checkEqual({ result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]], index: [false, true] },
          array.group({ array: [1, 2, 3, 4, 4, 4, 3, 2, 0], func: v => parts.isEven(v), detail: true })
        );
        checkEqual({ result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]], index: [false, true] },
          array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], { func: v => parts.isEven(v), detail: true })
        );
        checkEqual({ result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]], index: [false, true] },
          array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], v => parts.isEven(v), { detail: true })
        );
        checkEqual({ result: [[1], [2, 2], [3, 3], [4, 4, 4], [0]], index: [1, 2, 3, 4, 0] },
          array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], { detail: true })
        );
      });
    };

    const test_filter = () => {
      it('test_filter', () => {
        checkEqual([0, 2, 4],
          array.filter([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkEqual([0, 2, 4],
          array.filter([0, 1, 2, 3, 4, 5], isEven)
        );
        checkEqual([1, 3, 5],
          array.filter([0, 1, 2, 3, 4, 5], isOdd)
        );

        // Object Named Parameter
        checkEqual([0, 2, 4],
          array.filter({
            array: [0, 1, 2, 3, 4, 5],
            func: (value) => isEven(value)
          })
        );
      });
    };

    const test_map = () => {
      it('test_map', () => {
        checkEqual([true, false, true, false, true, false],
          array.map([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkEqual([true, false, true, false, true, false],
          array.map([0, 1, 2, 3, 4, 5], isEven)
        );
        checkEqual([false, true, false, true, false, true],
          array.map([0, 1, 2, 3, 4, 5], isOdd)
        );
        checkEqual([0, 2, 4, 6, 8, 10],
          array.map([0, 1, 2, 3, 4, 5], value => value * 2)
        );

        // Object Named Parameter
        checkEqual([true, false, true, false, true, false],
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
        checkEqual(true,  isFirst([1, 2, 3], [1]));
        checkEqual(true,  isFirst([1, 2, 3], [1, 2]));
        checkEqual(false, isFirst([1, 2, 3], [1, 3]));
        checkEqual(false, isFirst([1, 2, 3], [2]));
        checkEqual(true,  isFirst(['A', 'B', 'C'], ['A']));
        checkEqual(true,  isFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['a']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['B']));

        checkEqual(true,  isFirst([undefined, 1, 2], [isUndefined]));
        checkEqual(true,  isFirst([undefined, 1, 2], [undefined]));
        checkEqual(false, isFirst([undefined, 1, 2], [isNull]));
        checkEqual(false, isFirst([undefined, 1, 2], [null]));
        checkEqual(false, isFirst([null, 1, 2], [isUndefined]));
        checkEqual(false, isFirst([null, 1, 2], [undefined]));
        checkEqual(true,  isFirst([null, 1, 2], [isNull]));
        checkEqual(true,  isFirst([null, 1, 2], [null]));

        checkEqual(true,  isFirst([undefined, 1, 2], [isUndefined, 1]));
        checkEqual(true,  isFirst([undefined, 1, 2], [undefined, 1]));
        checkEqual(false, isFirst([undefined, 1, 2], [isNull, 1]));
        checkEqual(false, isFirst([undefined, 1, 2], [null, 1]));
        checkEqual(false, isFirst([null, 1, 2], [isUndefined, 1]));
        checkEqual(false, isFirst([null, 1, 2], [undefined, 1]));
        checkEqual(true,  isFirst([null, 1, 2], [isNull, 1]));
        checkEqual(true,  isFirst([null, 1, 2], [null, 1]));

        // Object Named Parameter
        checkEqual(true,
          isFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['A'],
          })
        );
        checkEqual(false,
          isFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['a'],
          })
        );
        checkEqual(true,
          isFirst(
            ['A', 'B', 'C'],
            {
              valueArray: ['A'],
            }
          )
        );
      });
    };

    const test_isLast = () => {
      it('test_isLast', () => {
        checkEqual(true,  isLast([1, 2, 3], [3]));
        checkEqual(true,  isLast([1, 2, 3], [2, 3]));
        checkEqual(false, isLast([1, 2, 3], [1, 3]));
        checkEqual(false, isLast([1, 2, 3], [2]));
        checkEqual(true,  isLast(['A', 'B', 'C'], ['C']));
        checkEqual(true,  isLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['c']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['B']));

        checkEqual(false, isLast([1], [2, 3]));

        checkEqual(true,  isLast([0, 1, undefined], [isUndefined]));
        checkEqual(true,  isLast([0, 1, undefined], [undefined]));
        checkEqual(false, isLast([0, 1, undefined], [isNull]));
        checkEqual(false, isLast([0, 1, undefined], [null]));
        checkEqual(false, isLast([0, 1, null], [isUndefined]));
        checkEqual(false, isLast([0, 1, null], [undefined]));
        checkEqual(true,  isLast([0, 1, null], [isNull]));
        checkEqual(true,  isLast([0, 1, null], [null]));

        checkEqual(true,  isLast([0, 1, undefined], [1, isUndefined]));
        checkEqual(true,  isLast([0, 1, undefined], [1, undefined]));
        checkEqual(false, isLast([0, 1, undefined], [1, isNull]));
        checkEqual(false, isLast([0, 1, undefined], [1, null]));
        checkEqual(false, isLast([0, 1, null], [1, isUndefined]));
        checkEqual(false, isLast([0, 1, null], [1, undefined]));
        checkEqual(true,  isLast([0, 1, null], [1, isNull]));
        checkEqual(true,  isLast([0, 1, null], [1, null]));

        // Object Named Parameter
        checkEqual(true,
          isLast({
            array: ['A', 'B', 'C'],
            valueArray: ['C'],
          })
        );
        checkEqual(false,
          isLast({
            array: ['A', 'B', 'C'],
            valueArray: ['c'],
          })
        );
        checkEqual(true,
          isLast(
            ['A', 'B', 'C'],
            {
              valueArray: ['C'],
            }
          )
        );
      });
    };

    const test_isBothEnds = () => {
      it('test_isBothEnds', () => {
        checkEqual(true,  isBothEnds([1, 2, 1], [1]));
        checkEqual(false, isBothEnds([1, 2, 1], [2]));
        checkEqual(true,  isBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(true,  isBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['B']));
        checkEqual(true,  isBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));

        checkEqual(false, isBothEnds(['A', 'B', 'A', 'D'], ['A']));
        checkEqual(true,  isBothEnds(['A', 'B', 'A', 'D'], ['A'], ['D']));

        checkEqual(true,  isBothEnds(['{', 'A', 'B', '}'], ['{'], ['}']));
        checkEqual(true,  isBothEnds(['{', '{', '}', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['A', '{', 'B', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['}'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['{']));

        checkEqual(false, isBothEnds([1], [1]));
        checkEqual(true,  isBothEnds([1, 1], [1]));

        // Object Named Parameter
        checkEqual(true,
          isBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['A'],
          })
        );
        checkEqual(false,
          isBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['a'],
          })
        );
        checkEqual(true,
          isBothEnds({
            array: ['A', 'B', 'A'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(false,
          isBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(true,
          isBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
            valueLastArray: ['D']
          })
        );
      });
    };

    const test_array_subIndex = () => {
      it('test_array_subIndex', () => {
        var array1 = [0,1,2,3,4];

        checkEqual(true,  isThrown(() => subIndex(array1, -2)));
        checkEqual(true,  isThrown(() => subIndex(array1, -1)));
        checkEqual([0],   subIndex(array1, 0));
        checkEqual([1],   subIndex(array1, 1));
        checkEqual([2],   subIndex(array1, 2));
        checkEqual([3],   subIndex(array1, 3));
        checkEqual([4],   subIndex(array1, 4));
        checkEqual(true,  isThrown(() => subIndex(array1, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1, 6)));

        checkEqual(true,  isThrown(() => subIndex(array1, -2, 0)));
        checkEqual(true,  isThrown(() => subIndex(array1, -1, 0)));
        checkEqual([0],   subIndex(array1, 0, 0));
        checkEqual(true,  isThrown(() => subIndex(array1, 1, 0)));
        checkEqual(true,  isThrown(() => subIndex(array1, 2, 0)));
        checkEqual(true,  isThrown(() => subIndex(array1, 3, 0)));
        checkEqual(true,  isThrown(() => subIndex(array1, 4, 0)));
        checkEqual(true,  isThrown(() => subIndex(array1, 5, 0)));
        checkEqual(true,  isThrown(() => subIndex(array1, 6, 0)));

        checkEqual(true,  isThrown(() => subIndex(array1, -2, 3)));
        checkEqual(true,  isThrown(() => subIndex(array1, -1, 3)));
        checkEqual([0,1,2,3], subIndex(array1, 0, 3));
        checkEqual([1,2,3],   subIndex(array1, 1, 3));
        checkEqual([2,3],     subIndex(array1, 2, 3));
        checkEqual([3],       subIndex(array1, 3, 3));
        checkEqual(true,  isThrown(() => subIndex(array1,  4, 3)));
        checkEqual(true,  isThrown(() => subIndex(array1,  5, 3)));
        checkEqual(true,  isThrown(() => subIndex(array1,  6, 3)));

        checkEqual(true,  isThrown(() => subIndex(array1, -2, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1, -1, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  0, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  1, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  2, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  3, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  4, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  5, 5)));
        checkEqual(true,  isThrown(() => subIndex(array1,  6, 5)));

        checkEqual(true,  isThrown(() => subIndex(array1, -2, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1, -1, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  0, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  1, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  2, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  3, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  4, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  5, 6)));
        checkEqual(true,  isThrown(() => subIndex(array1,  6, 6)));

        // Object Named Parameter
        checkEqual(['A', 'B'],
          subIndex({
            array: ['A', 'B', 'A'],
            indexStart: 0,
            indexEnd: 1,
          })
        );
      });
    };

    const test_array_subLength = () => {
      it('test_array_subLength', () => {
        var array1 = [0,1,2,3,4];

        checkEqual(true,  isThrown(() => subLength(array1, -2)));
        checkEqual(true,  isThrown(() => subLength(array1, -1)));
        checkEqual([0,1,2,3,4],  subLength(array1, 0));
        checkEqual([1,2,3,4],    subLength(array1, 1));
        checkEqual([2,3,4],      subLength(array1, 2));
        checkEqual([3,4],        subLength(array1, 3));
        checkEqual([4],          subLength(array1, 4));
        checkEqual(true,  isThrown(() => subLength(array1, 5)));
        checkEqual(true,  isThrown(() => subLength(array1, 6)));

        checkEqual(true,  isThrown(() => subLength(array1, -2, 0)));
        checkEqual(true,  isThrown(() => subLength(array1, -1, 0)));
        checkEqual([],           subLength(array1, 0, 0));
        checkEqual([],           subLength(array1, 1, 0));
        checkEqual([],           subLength(array1, 2, 0));
        checkEqual([],           subLength(array1, 3, 0));
        checkEqual([],           subLength(array1, 4, 0));
        checkEqual(true,  isThrown(() => subLength(array1, 5, 0)));
        checkEqual(true,  isThrown(() => subLength(array1, 6, 0)));

        checkEqual(true,  isThrown(() => subLength(array1, -2, 3)));
        checkEqual(true,  isThrown(() => subLength(array1, -1, 3)));
        checkEqual([0,1,2],      subLength(array1, 0, 3));
        checkEqual([1,2,3],      subLength(array1, 1, 3));
        checkEqual([2,3,4],      subLength(array1, 2, 3));
        checkEqual([3,4],        subLength(array1, 3, 3));
        checkEqual([4],          subLength(array1, 4, 3));
        checkEqual(true,  isThrown(() => subLength(array1, 5, 3)));
        checkEqual(true,  isThrown(() => subLength(array1, 6, 3)));

        checkEqual(true,  isThrown(() => subLength(array1, -2, 5)));
        checkEqual(true,  isThrown(() => subLength(array1, -1, 5)));
        checkEqual([0,1,2,3,4],  subLength(array1, 0, 5));
        checkEqual([1,2,3,4],    subLength(array1, 1, 5));
        checkEqual([2,3,4],      subLength(array1, 2, 5));
        checkEqual([3,4],        subLength(array1, 3, 5));
        checkEqual([4],          subLength(array1, 4, 5));
        checkEqual(true,  isThrown(() => subLength(array1, 5, 5)));
        checkEqual(true,  isThrown(() => subLength(array1, 6, 5)));

        checkEqual(true,  isThrown(() => subLength(array1, -2, 6)));
        checkEqual(true,  isThrown(() => subLength(array1, -1, 6)));
        checkEqual([0,1,2,3,4],  subLength(array1, 0, 6));
        checkEqual([1,2,3,4],    subLength(array1, 1, 6));
        checkEqual([2,3,4],      subLength(array1, 2, 6));
        checkEqual([3,4],        subLength(array1, 3, 6));
        checkEqual([4],          subLength(array1, 4, 6));
        checkEqual(true,  isThrown(() => subLength(array1, 5, 6)));
        checkEqual(true,  isThrown(() => subLength(array1, 6, 6)));

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

    const test_array_subFirst = () => {
      it('test_array_subFirst', () => {
        var array1 = [0,1,2,3,4];
        checkEqual(true,  isThrown(() => subFirst(array1, -2)));
        checkEqual(true,  isThrown(() => subFirst(array1, -1)));
        checkEqual([],           subFirst(array1, 0));
        checkEqual([0],          subFirst(array1, 1));
        checkEqual([0,1],        subFirst(array1, 2));
        checkEqual([0,1,2],      subFirst(array1, 3));
        checkEqual([0,1,2,3],    subFirst(array1, 4));
        checkEqual([0,1,2,3,4],  subFirst(array1, 5));
        checkEqual(true,  isThrown(() => subFirst(array1,  6)));

        // Object Named Parameter
        checkEqual(['A', 'B'],
          subFirst({
            array: ['A', 'B', 'A'],
            length: 2,
          })
        );
      });
    };

    const test_array_subLast = () => {
      it('test_array_subLast', () => {
        var array1 = [0,1,2,3,4];
        checkEqual(true,  isThrown(() => subLast(array1, -2)));
        checkEqual(true,  isThrown(() => subLast(array1, -1)));
        checkEqual([],           subLast(array1, 0));
        checkEqual([4],          subLast(array1, 1));
        checkEqual([3,4],        subLast(array1, 2));
        checkEqual([2,3,4],      subLast(array1, 3));
        checkEqual([1,2,3,4],    subLast(array1, 4));
        checkEqual([0,1,2,3,4],  subLast(array1, 5));
        checkEqual(true,  isThrown(() => subLast(array1,  6)));

        // Object Named Parameter
        checkEqual(['B', 'A'],
          subLast({
            array: ['A', 'B', 'A'],
            length: 2,
          })
        );
      });
    };

    const test_operation_insert = () => {
      it('test_operation_insert', () => {
        checkEqual([1, 2, 3],
          insert([1, 2, 3], [])
        );
        checkEqual([0, 1, 2, 3],
          insert([1, 2, 3], [0])
        );
        checkEqual([0, 1, 2, 3],
          insert([1, 2, 3], [0], 0)
        );
        checkEqual([1, 0, 2, 3],
          insert([1, 2, 3], [0], 1)
        );
        checkEqual([1, 2, 0, 3],
          insert([1, 2, 3], [0], 2)
        );
        checkEqual([1, 2, 3, 0],
          insert([1, 2, 3], [0], 3)
        );
        checkEqual([-1, 0, 1, 2, 3],
          insert([1, 2, 3], [-1, 0])
        );
        checkEqual([1, -1, 0, 2, 3],
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
        checkEqual([1, 2, 3, 0],
          insert({
            array: [1, 2, 3],
            valueArray: [0],
            index: 3
          })
        );
      });
    };

    const test_operation_add = () => {
      it('test_operation_add', () => {
        checkEqual([1, 2, 3],
          add([1, 2, 3], [])
        );
        checkEqual([1, 2, 3, 0],
          add([1, 2, 3], [0])
        );
        checkEqual([0, 1, 2, 3],
          add([1, 2, 3], [0], -1)
        );
        checkEqual([1, 0, 2, 3],
          add([1, 2, 3], [0], 0)
        );
        checkEqual([1, 2, 0, 3],
          add([1, 2, 3], [0], 1)
        );
        checkEqual([1, 2, 3, 0],
          add([1, 2, 3], [0], 2)
        );
        checkEqual([1, 2, 3, -1, 0],
          add([1, 2, 3], [-1, 0])
        );
        checkEqual([1, 2, -1, 0, 3],
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
        checkEqual([1, 2, 3, 0],
          add({
            array: [1, 2, 3],
            valueArray: [0],
            index: 2
          })
        );
      });
    };


    const test_operation_deleteIndex = () => {
      it('test_operation_deleteIndex', () => {
        var array1 = [0,1,2,3,4];
        checkEqual([0,1,3,4],    deleteIndex(array1, 2));
        checkEqual([0,1,3,4],    array1);

        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -2)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -1)));
        checkEqual([1,2,3,4],    deleteIndex([0,1,2,3,4], 0));
        checkEqual([0,2,3,4],    deleteIndex([0,1,2,3,4], 1));
        checkEqual([0,1,3,4],    deleteIndex([0,1,2,3,4], 2));
        checkEqual([0,1,2,4],    deleteIndex([0,1,2,3,4], 3));
        checkEqual([0,1,2,3],    deleteIndex([0,1,2,3,4], 4));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 6)));

        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -2, 0)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -1, 0)));
        checkEqual([1,2,3,4],    deleteIndex([0,1,2,3,4], 0, 0));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 1, 0)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 2, 0)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 3, 0)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 4, 0)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 5, 0)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], 6, 0)));

        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -2, 3)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -1, 3)));
        checkEqual([4],          deleteIndex([0,1,2,3,4], 0, 3));
        checkEqual([0,4],        deleteIndex([0,1,2,3,4], 1, 3));
        checkEqual([0,1,4],      deleteIndex([0,1,2,3,4], 2, 3));
        checkEqual([0,1,2,4],    deleteIndex([0,1,2,3,4], 3, 3));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  4, 3)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  5, 3)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  6, 3)));

        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -2, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -1, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  0, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  1, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  2, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  3, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  4, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  5, 5)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  6, 5)));

        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -2, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4], -1, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  0, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  1, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  2, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  3, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  4, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  5, 6)));
        checkEqual(true,  isThrown(() => deleteIndex([0,1,2,3,4],  6, 6)));

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
        checkEqual([0, 2, 3],
          deleteIndex({
            array: [0, 1, 2, 3],
            index: 1,
          })
        );
        checkEqual([0, 2, 3],
          deleteIndex({
            array: [0, 1, 2, 3],
            indexStart: 1,
          })
        );
        checkEqual([0, 3],
          deleteIndex({
            array: [0, 1, 2, 3],
            indexStart: 1,
            indexEnd: 2,
          })
        );
      });
    };

    const test_operation_deleteLength = () => {
      it('test_operation_deleteLength', () => {

        var array1 = [0,1,2,3,4];
        checkEqual([0,1],        deleteLength(array1, 2));
        checkEqual([0,1],        array1);

        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -2)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -1)));
        checkEqual([],           deleteLength([0,1,2,3,4], 0));
        checkEqual([0],          deleteLength([0,1,2,3,4], 1));
        checkEqual([0,1],        deleteLength([0,1,2,3,4], 2));
        checkEqual([0,1,2],      deleteLength([0,1,2,3,4], 3));
        checkEqual([0,1,2,3],    deleteLength([0,1,2,3,4], 4));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], 5)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], 6)));

        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -2, 0)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -1, 0)));
        checkEqual([0,1,2,3,4],  deleteLength([0,1,2,3,4], 0, 0));
        checkEqual([0,1,2,3,4],  deleteLength([0,1,2,3,4], 1, 0));
        checkEqual([0,1,2,3,4],  deleteLength([0,1,2,3,4], 2, 0));
        checkEqual([0,1,2,3,4],  deleteLength([0,1,2,3,4], 3, 0));
        checkEqual([0,1,2,3,4],  deleteLength([0,1,2,3,4], 4, 0));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], 5, 0)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], 6, 0)));

        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -2, 3)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -1, 3)));
        checkEqual([3,4],        deleteLength([0,1,2,3,4], 0, 3));
        checkEqual([0,4],        deleteLength([0,1,2,3,4], 1, 3));
        checkEqual([0,1],        deleteLength([0,1,2,3,4], 2, 3));
        checkEqual([0,1,2],      deleteLength([0,1,2,3,4], 3, 3));
        checkEqual([0,1,2,3],    deleteLength([0,1,2,3,4], 4, 3));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4],  5, 3)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4],  6, 3)));

        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -2, 5)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -1, 5)));
        checkEqual([],           deleteLength([0,1,2,3,4], 0, 5));
        checkEqual([0],          deleteLength([0,1,2,3,4], 1, 5));
        checkEqual([0,1],        deleteLength([0,1,2,3,4], 2, 5));
        checkEqual([0,1,2],      deleteLength([0,1,2,3,4], 3, 5));
        checkEqual([0,1,2,3],    deleteLength([0,1,2,3,4], 4, 5));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4],  5, 5)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4],  6, 5)));

        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -2, 6)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4], -1, 6)));
        checkEqual([],           deleteLength([0,1,2,3,4], 0, 6));
        checkEqual([0],          deleteLength([0,1,2,3,4], 1, 6));
        checkEqual([0,1],        deleteLength([0,1,2,3,4], 2, 6));
        checkEqual([0,1,2],      deleteLength([0,1,2,3,4], 3, 6));
        checkEqual([0,1,2,3],    deleteLength([0,1,2,3,4], 4, 6));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4],  5, 6)));
        checkEqual(true,  isThrown(() => deleteLength([0,1,2,3,4],  6, 6)));

        testCounter();
        // exception
        checkEqual(true, isThrownException(() => {
          deleteLength([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 2);
        }));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 3);
        }));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(() => {
          deleteLength([1, 2, 3], 0, 4);
        }));
        checkEqual(true, isThrownException(() => {
          deleteLength([1, 2, 3], -1, 2);
        }, 'RangeError'));

        // Object Named Parameter
        checkEqual([0, 3],
          deleteLength({
            array: [0, 1, 2, 3],
            index: 1,
            length: 2,
          })
        );
        checkEqual([0, 3],
          deleteLength(
            [0, 1, 2, 3],
            {
              index: 1,
              length: 2,
            }
          )
        );
        checkEqual([0, 3],
          deleteLength(
            [0, 1, 2, 3],
            1,
            {
              length: 2,
            }
          )
        );
        checkEqual([0, 1],
          deleteLength({
            array: [0, 1, 2, 3],
            index: 2,
          }
          )
        );
        checkEqual([0, 1],
          deleteLength(
            [0, 1, 2, 3],
            {
              index: 2,
            }
          )
        );
      });
    };

    const test_operation_deleteFirst = () => {
      it('test_operation_deleteFirst', () => {

        var array1 = [0,1,2,3,4];
        checkEqual([2,3,4],      deleteFirst(array1, 2));
        checkEqual([2,3,4],      array1);

        checkEqual(true,  isThrown(() => deleteFirst([0,1,2,3,4], -2)));
        checkEqual(true,  isThrown(() => deleteFirst([0,1,2,3,4], -1)));
        checkEqual([0,1,2,3,4], deleteFirst([0,1,2,3,4], 0));
        checkEqual([1,2,3,4],   deleteFirst([0,1,2,3,4], 1));
        checkEqual([2,3,4],     deleteFirst([0,1,2,3,4], 2));
        checkEqual([3,4],       deleteFirst([0,1,2,3,4], 3));
        checkEqual([4],         deleteFirst([0,1,2,3,4], 4));
        checkEqual([],          deleteFirst([0,1,2,3,4], 5));
        checkEqual([1,2,3,4],   deleteFirst([0,1,2,3,4]));
        checkEqual(true,  isThrown(() => deleteFirst([0,1,2,3,4],  6)));

        // exception
        checkEqual(true,  isThrownException(() => {
          deleteFirst([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true,  isThrownException(() => {
          deleteFirst([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteFirst([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteFirst([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteFirst([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteFirst([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          deleteFirst([1, 2, 3], -1);
        }, 'RangeError'));

        // Object Named Parameter
        checkEqual([1, 2, 3],
          deleteFirst({ array: [0, 1, 2, 3], length: 1 })
        );
        checkEqual([1, 2, 3],
          deleteFirst([0, 1, 2, 3], { length: 1 })
        );
      });
    };

    const test_operation_deleteLast = () => {
      it('test_operation_deleteLast', () => {

        var array1 = [0,1,2,3,4];
        checkEqual([0,1,2],      deleteLast(array1, 2));
        checkEqual([0,1,2],      array1);

        checkEqual(true,  isThrown(() => deleteLast([0,1,2,3,4], -2)));
        checkEqual(true,  isThrown(() => deleteLast([0,1,2,3,4], -1)));
        checkEqual([0,1,2,3,4], deleteLast([0,1,2,3,4], 0));
        checkEqual([0,1,2,3],   deleteLast([0,1,2,3,4], 1));
        checkEqual([0,1,2],     deleteLast([0,1,2,3,4], 2));
        checkEqual([0,1],       deleteLast([0,1,2,3,4], 3));
        checkEqual([0],         deleteLast([0,1,2,3,4], 4));
        checkEqual([],          deleteLast([0,1,2,3,4], 5));
        checkEqual([0,1,2,3],   deleteLast([0,1,2,3,4]));
        checkEqual(true,  isThrown(() => deleteLast([0,1,2,3,4],  6)));

        // exception
        checkEqual(true,  isThrownException(() => {
          deleteLast([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true,  isThrownException(() => {
          deleteLast([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteLast([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteLast([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteLast([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(() => {
          deleteLast([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(() => {
          deleteLast([1, 2, 3], -1);
        }, 'RangeError'));

        // Object Named Parameter
        checkEqual([0, 1, 2],
          deleteLast({ array: [0, 1, 2, 3], length: 1 })
        );
        checkEqual([0, 1, 2],
          deleteLast([0, 1, 2, 3], { length: 1 })
        );
      });
    };

    const test_operation_includeFirst = () => {
      it('test_operation_includeFirst', () => {
        checkEqual([1, 2, 3],
          includeFirst([1, 2, 3], [1])
        );
        checkEqual([2, 1, 2, 3],
          includeFirst([1, 2, 3], [2])
        );
        checkEqual([1, 2, 3],
          includeFirst([1, 2, 3], [1, 2])
        );
        checkEqual([2, 1, 1, 2, 3],
          includeFirst([1, 2, 3], [2, 1])
        );

        checkEqual(['A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], ['A'])
        );
        checkEqual(['a', 'A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], ['a'])
        );
        checkEqual(['B', 'A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], ['B'])
        );
        checkEqual(['A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], ['A', 'B'])
        );
        checkEqual(['a', 'B', 'A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], ['a', 'B'])
        );
        checkEqual(['B', 'A', 'A', 'B', 'C'],
          includeFirst(['A', 'B', 'C'], ['B', 'A'])
        );

        // Object Named Parameter
        checkEqual(['A', 'B', 'C'],
          includeFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['A'],
          })
        );
        checkEqual(['a', 'A', 'B', 'C'],
          includeFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['a'],
          })
        );
      });
    };

    const test_operation_includeLast = () => {
      it('test_operation_includeLast', () => {
        checkEqual([1, 2, 3],
          includeLast([1, 2, 3], [3])
        );
        checkEqual([1, 2, 3, 2],
          includeLast([1, 2, 3], [2])
        );
        checkEqual([1, 2, 3],
          includeLast([1, 2, 3], [2, 3])
        );
        checkEqual([1, 2, 3, 3, 2],
          includeLast([1, 2, 3], [3, 2])
        );

        checkEqual(['A', 'B', 'C'],
          includeLast(['A', 'B', 'C'], ['C'])
        );
        checkEqual(['A', 'B', 'C', 'c'],
          includeLast(['A', 'B', 'C'], ['c'])
        );
        checkEqual(['A', 'B', 'C', 'B'],
          includeLast(['A', 'B', 'C'], ['B'])
        );
        checkEqual(['A', 'B', 'C'],
          includeLast(['A', 'B', 'C'], ['B', 'C'])
        );
        checkEqual(['A', 'B', 'C', 'B', 'c'],
          includeLast(['A', 'B', 'C'], ['B', 'c'])
        );
        checkEqual(['A', 'B', 'C', 'C', 'B'],
          includeLast(['A', 'B', 'C'], ['C', 'B'])
        );

        // Object Named Parameter
        checkEqual(['A', 'B', 'C'],
          includeLast({
            array: ['A', 'B', 'C'],
            valueArray: ['C'],
          })
        );
        checkEqual(['A', 'B', 'C', 'c'],
          includeLast({
            array: ['A', 'B', 'C'],
            valueArray: ['c'],
          })
        );
      });
    };

    const test_operation_includeBothEnds = () => {
      it('test_operation_includeBothEnds', () => {

        checkEqual([1, 2, 1],
          includeBothEnds([1, 2, 1], [1])
        );
        checkEqual([1, 1, 2, 3, 1],
          includeBothEnds([1, 2, 3], [1])
        );
        checkEqual([1, 2, 1, 2],
          includeBothEnds([1, 2, 1, 2], [1, 2])
        );
        checkEqual([1, 2, 1],
          includeBothEnds([1, 2, 1], [1, 2], [2, 1])
        );

        checkEqual(['A', 'B', 'A'],
          includeBothEnds(['A', 'B', 'A'], ['A'])
        );
        checkEqual(['a', 'A', 'B', 'A', 'a'],
          includeBothEnds(['A', 'B', 'A'], ['a'])
        );
        checkEqual(['A', 'A', 'B', 'C', 'A'],
          includeBothEnds(['A', 'B', 'C'], ['A'])
        );
        checkEqual(['A', 'B', 'A', 'B'],
          includeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B'])
        );

        checkEqual(['{', '}'],
          includeBothEnds(['{', '}'], ['{'], ['}'])
        );
        checkEqual(['{', 'A', '}'],
          includeBothEnds(['{', 'A', '}'], ['{'], ['}'])
        );
        checkEqual(['{', 'A', '{', '}', '}'],
          includeBothEnds(['A', '{', '}'], ['{'], ['}'])
        );

        checkEqual(['A', 'A'],
          includeBothEnds(['A', 'A'], ['A'])
        );
        checkEqual(['A', 'A', 'A'],
          includeBothEnds(['A'], ['A'])
        );
        checkEqual(['A', '', 'A'],
          includeBothEnds([''], ['A'])
        );
        checkEqual(['A', 'A'],
          includeBothEnds([], ['A'])
        );

        // exception
        checkEqual(true, isThrownException(() => {
          includeBothEnds(0, 1);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(['A', 'B', 'A'],
          includeBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['A'],
          })
        );
        checkEqual(['a', 'A', 'B', 'A', 'a'],
          includeBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['a'],
          })
        );
        checkEqual(['A', 'B', 'A'],
          includeBothEnds({
            array: ['A', 'B', 'A'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(['A', 'A', 'B', 'A', 'D', 'A'],
          includeBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(['A', 'B', 'A', 'D'],
          includeBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
            valueLastArray: ['D']
          })
        );
      });
    };

    const test_operation_excludeFirst = () => {
      it('test_operation_excludeFirst', () => {
        checkEqual([2, 3],
          excludeFirst([1, 2, 3], [1])
        );
        checkEqual([1, 2, 3],
          excludeFirst([1, 2, 3], [2])
        );
        checkEqual([3],
          excludeFirst([1, 2, 3], [1, 2])
        );
        checkEqual([1, 2, 3],
          excludeFirst([1, 2, 3], [2, 1])
        );

        checkEqual(['B', 'C'],
          excludeFirst(['A', 'B', 'C'], ['A'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst(['A', 'B', 'C'], ['a'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst(['A', 'B', 'C'], ['B'])
        );
        checkEqual(['C'],
          excludeFirst(['A', 'B', 'C'], ['A', 'B'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst(['A', 'B', 'C'], ['a', 'B'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst(['A', 'B', 'C'], ['B', 'A'])
        );

        // Object Named Parameter
        checkEqual(['B', 'C'],
          excludeFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['A'],
          })
        );
        checkEqual(['A', 'B', 'C'],
          excludeFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['a'],
          })
        );
      });
    };

    const test_operation_excludeLast = () => {
      it('test_operation_excludeLast', () => {
        checkEqual([1, 2],
          excludeLast([1, 2, 3], [3])
        );
        checkEqual([1, 2, 3],
          excludeLast([1, 2, 3], [2])
        );
        checkEqual([1],
          excludeLast([1, 2, 3], [2, 3])
        );
        checkEqual([1, 2, 3],
          excludeLast([1, 2, 3], [3, 2])
        );

        checkEqual(['A', 'B'],
          excludeLast(['A', 'B', 'C'], ['C'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast(['A', 'B', 'C'], ['c'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast(['A', 'B', 'C'], ['B'])
        );
        checkEqual(['A'],
          excludeLast(['A', 'B', 'C'], ['B', 'C'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast(['A', 'B', 'C'], ['B', 'c'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast(['A', 'B', 'C'], ['C', 'B'])
        );

        // Object Named Parameter
        checkEqual(['A', 'B'],
          excludeLast({
            array: ['A', 'B', 'C'],
            valueArray: ['C'],
          })
        );
        checkEqual(['A', 'B', 'C'],
          excludeLast({
            array: ['A', 'B', 'C'],
            valueArray: ['c'],
          })
        );
      });
    };

    const test_operation_excludeBothEnds = () => {
      it('test_operation_excludeBothEnds', () => {

        checkEqual([2],
          excludeBothEnds([1, 2, 1], [1])
        );
        checkEqual([1, 2, 3],
          excludeBothEnds([1, 2, 3], [1])
        );
        checkEqual([],
          excludeBothEnds([1, 2, 1, 2], [1, 2])
        );
        checkEqual([],
          excludeBothEnds(
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4],
            [5]
          )
        );
        checkEqual([1, 2, 3, 4, 5],
          excludeBothEnds(
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4],
            [3, 5]
          )
        );
        checkEqual([],
          excludeBothEnds(
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4],
            [3, 4, 5]
          )
        );
        checkEqual([],
          excludeBothEnds([1, 2, 1], [1, 2], [2, 1])
        );

        checkEqual(['B'],
          excludeBothEnds(['A', 'B', 'A'], ['A'])
        );
        checkEqual(['A', 'B', 'A'],
          excludeBothEnds(['A', 'B', 'A'], ['a'])
        );
        checkEqual(['A', 'B', 'C'],
          excludeBothEnds(['A', 'B', 'C'], ['A'])
        );
        checkEqual([],
          excludeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B'])
        );
        checkEqual([],
          excludeBothEnds(['A', 'B', 'A'], ['A', 'B'], ['B', 'A'])
        );

        checkEqual([],
          excludeBothEnds(['{', '}'], ['{'], ['}'])
        );
        checkEqual(['A'],
          excludeBothEnds(['{', 'A', '}'], ['{'], ['}'])
        );
        checkEqual(['A', '{', '}'],
          excludeBothEnds(['A', '{', '}'], ['{'], ['}'])
        );

        checkEqual([],
          excludeBothEnds(['A', 'A'], ['A'])
        );
        checkEqual(['A'],
          excludeBothEnds(['A'], ['A'])
        );
        checkEqual([''],
          excludeBothEnds([''], ['A'])
        );
        checkEqual([],
          excludeBothEnds([], ['A'])
        );

        // exception
        checkEqual(true, isThrownException(() => {
          excludeBothEnds(0, 1);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(['B'],
          excludeBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['A'],
          })
        );
        checkEqual(['A', 'B', 'A'],
          excludeBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['a'],
          })
        );
        checkEqual(['B'],
          excludeBothEnds({
            array: ['A', 'B', 'A'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(['A', 'B', 'A', 'D'],
          excludeBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(['B', 'A'],
          excludeBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
            valueLastArray: ['D']
          })
        );
      });
    };

    const test_operation_trimFirst = () => {
      it('test_operation_trimFirst', () => {
        checkEqual([2, 3],
          trimFirst([1, 2, 3], [1])
        );
        checkEqual([2, 3],
          trimFirst([1, 1, 1, 2, 3], [1])
        );
        checkEqual([],
          trimFirst([1, 1, 1, 1, 1], [1])
        );
        checkEqual([1, 2, 3],
          trimFirst([1, 2, 3], [2])
        );

        checkEqual([2, 1, 2, 3],
          trimFirst([1, 2, 1, 2, 3], [1])
        );
        checkEqual([3],
          trimFirst([1, 2, 1, 2, 3], [1, 2])
        );
        checkEqual([3],
          trimFirst([1, 2, 1, 2, 3], [2, 1])
        );

        checkEqual(['B', 'C'],
          trimFirst(['A', 'B', 'C'], ['A'])
        );
        checkEqual(['A', 'B', 'C'],
          trimFirst(['A', 'B', 'C'], ['a'])
        );
        checkEqual(['A', 'B', 'C'],
          trimFirst(['A', 'B', 'C'], ['B'])
        );

        checkEqual(['B', 'A', 'B', 'C'],
          trimFirst(['A', 'B', 'A', 'B', 'C'], ['A'])
        );
        checkEqual(['C'],
          trimFirst(['A', 'B', 'A', 'B', 'C'], ['A', 'B'])
        );
        checkEqual(['C'],
          trimFirst(['A', 'B', 'A', 'B', 'C'], ['B', 'A'])
        );

        // Object Named Parameter
        checkEqual(['B', 'C'],
          trimFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['A'],
          })
        );
        checkEqual(['A', 'B', 'C'],
          trimFirst({
            array: ['A', 'B', 'C'],
            valueArray: ['a'],
          })
        );
      });
    };

    const test_operation_trimLast = () => {
      it('test_operation_trimLast', () => {
        checkEqual([1, 2],
          trimLast([1, 2, 3], [3])
        );
        checkEqual([1, 2],
          trimLast([1, 2, 3, 3, 3], [3])
        );
        checkEqual([],
          trimLast([3, 3, 3, 3, 3], [3])
        );
        checkEqual([1, 2, 3],
          trimLast([1, 2, 3], [2])
        );

        checkEqual([1, 2, 3, 2],
          trimLast([1, 2, 3, 2, 3], [3])
        );
        checkEqual([1],
          trimLast([1, 2, 3, 2, 3], [2, 3])
        );
        checkEqual([1],
          trimLast([1, 2, 3, 2, 3], [3, 2])
        );

        checkEqual(['A', 'B'],
          trimLast(['A', 'B', 'C'], ['C'])
        );
        checkEqual(['A', 'B', 'C'],
          trimLast(['A', 'B', 'C'], ['c'])
        );
        checkEqual(['A', 'B', 'C'],
          trimLast(['A', 'B', 'C'], ['B'])
        );

        checkEqual(['A', 'B', 'C', 'B'],
          trimLast(['A', 'B', 'C', 'B', 'C'], ['C'])
        );
        checkEqual(['A'],
          trimLast(['A', 'B', 'C', 'B', 'C'], ['B', 'C'])
        );
        checkEqual(['A'],
          trimLast(['A', 'B', 'C', 'B', 'C'], ['C', 'B'])
        );

        // Object Named Parameter
        checkEqual(['A', 'B'],
          trimLast({
            array: ['A', 'B', 'C'],
            valueArray: ['C'],
          })
        );
        checkEqual(['A', 'B', 'C'],
          trimLast({
            array: ['A', 'B', 'C'],
            valueArray: ['c'],
          })
        );
      });
    };

    const test_operation_trimBothEnds = () => {
      it('test_operation_trimBothEnds', () => {

        checkEqual([2],
          trimBothEnds([1, 2, 1], [1])
        );
        checkEqual([2],
          trimBothEnds([1, 1, 2, 1, 1, 1], [1])
        );
        checkEqual([],
          trimBothEnds([1, 1, 1], [1])
        );
        checkEqual([2, 3],
          trimBothEnds([1, 2, 3], [1])
        );

        checkEqual([2, 3, 1, 2],
          trimBothEnds([1, 2, 3, 1, 2], [1])
        );
        checkEqual([1, 2, 3, 1],
          trimBothEnds([1, 2, 3, 1, 2], [2])
        );
        checkEqual([3],
          trimBothEnds([1, 2, 3, 1, 2], [1, 2])
        );
        checkEqual([3],
          trimBothEnds([1, 2, 3, 1, 2], [2, 1])
        );

        checkEqual(['B'],
          trimBothEnds(['A', 'B', 'A'], ['A'])
        );
        checkEqual(['A', 'B', 'A'],
          trimBothEnds(['A', 'B', 'A'], ['a'])
        );
        checkEqual(['B', 'C'],
          trimBothEnds(['A', 'B', 'C'], ['A'])
        );

        checkEqual(['B', 'C', 'A', 'B'],
          trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A'])
        );
        checkEqual(['A', 'B', 'C', 'A'],
          trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B'])
        );
        checkEqual(['C'],
          trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A', 'B'])
        );
        checkEqual(['C'],
          trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B', 'A'])
        );

        checkEqual([],
          trimBothEnds(['{', '}'], ['{'], ['}'])
        );
        checkEqual([],
          trimBothEnds(['{', '{', '{', '}', '}', '}'], ['{'], ['}'])
        );
        checkEqual([],
          trimBothEnds(['{', '{', '{', '}'], ['{'], ['}'])
        );
        checkEqual(['A'],
          trimBothEnds(['{', 'A', '}'], ['{'], ['}'])
        );
        checkEqual(['A', '{'],
          trimBothEnds(['A', '{', '}'], ['{'], ['}'])
        );

        checkEqual([],
          trimBothEnds(['A', 'A'], ['A'])
        );
        checkEqual([],
          trimBothEnds(['A'], ['A'])
        );
        checkEqual([''],
          trimBothEnds([''], ['A'])
        );
        checkEqual([],
          trimBothEnds([], ['A'])
        );

        // exception
        checkEqual(true, isThrownException(() => {
          trimBothEnds(0, 1);
        }, 'TypeError'));

        // Object Named Parameter
        checkEqual(['B'],
          trimBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['A'],
          })
        );
        checkEqual(['A', 'B', 'A'],
          trimBothEnds({
            array: ['A', 'B', 'A'],
            valueArray: ['a'],
          })
        );
        checkEqual(['B'],
          trimBothEnds({
            array: ['A', 'B', 'A'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(['B', 'A', 'D'],
          trimBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
          })
        );
        checkEqual(['B', 'A'],
          trimBothEnds({
            array: ['A', 'B', 'A', 'D'],
            valueFirstArray: ['A'],
            valueLastArray: ['D']
          })
        );
      });
    };

    const test_operation_popFirst = () => {
      it('test_operation_popFirst', () => {
        var array1 = [1, 2, 3];
        checkEqual(1, popFirst(array1));
        checkEqual([2, 3], array1);

        var array1 = ['A', 'B', 'C'];
        checkEqual('A', popFirst(array1));
        checkEqual(['B', 'C'], array1);
      });
    };

    const test_operation_popLast = () => {
      it('test_operation_popLast', () => {
        var array1 = [1, 2, 3];
        checkEqual(3, popLast(array1));
        checkEqual([1, 2], array1);

        var array1 = ['A', 'B', 'C'];
        checkEqual('C', popLast(array1));
        checkEqual(['A', 'B'], array1);
      });
    };

    const test_operation_pushFirst = () => {
      it('test_operation_pushFirst', () => {
        var array1 = [1, 2, 3];
        checkEqual(4, pushFirst(array1, 0));
        checkEqual([0, 1, 2, 3], array1);
        checkEqual(5, pushFirst(array1, 0));
        checkEqual([0, 0, 1, 2, 3], array1);

        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushFirst(array1, 'D'));
        checkEqual(['D', 'A', 'B', 'C'], array1);
        checkEqual(5, pushFirst(array1, 'D'));
        checkEqual(['D', 'D', 'A', 'B', 'C'], array1);
      });
    };

    const test_operation_pushLast = () => {
      it('test_operation_pushLast', () => {
        var array1 = [1, 2, 3];
        checkEqual(4, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4], array1);
        checkEqual(5, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4, 4], array1);

        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D'], array1);
        checkEqual(5, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D', 'D'], array1);
      });
    };

    const test_operation_remainFirst = () => {
      it('test_operation_remainFirst', () => {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 4));
        checkEqual([1, 2, 3], array1);

        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 3));
        checkEqual([1, 2, 3], array1);

        var array1 = [1, 2, 3];
        checkEqual([1, 2], remainFirst(array1, 2));
        checkEqual([1, 2], array1);

        var array1 = [1, 2, 3];
        checkEqual([1], remainFirst(array1, 1));
        checkEqual([1], array1);

        var array1 = [1, 2, 3];
        checkEqual([], remainFirst(array1, 0));
        checkEqual([], array1);

        // Object Named Parameter
        checkEqual(['A', 'B'],
          remainFirst({
            array: ['A', 'B', 'A'],
            length: 2,
          })
        );

      });
    };

    const test_operation_remainLast = () => {
      it('test_operation_remainLast', () => {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 4));
        checkEqual([1, 2, 3], array1);

        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 3));
        checkEqual([1, 2, 3], array1);

        var array1 = [1, 2, 3];
        checkEqual([2, 3], remainLast(array1, 2));
        checkEqual([2, 3], array1);

        var array1 = [1, 2, 3];
        checkEqual([3], remainLast(array1, 1));
        checkEqual([3], array1);

        var array1 = [1, 2, 3];
        checkEqual([], remainLast(array1, 0));
        checkEqual([], array1);

        // Object Named Parameter
        checkEqual(['B', 'A'],
          remainLast({
            array: ['A', 'B', 'A'],
            length: 2,
          })
        );
      });
    };

    const test_operation_filter = () => {
      it('test_operation_filter', () => {
        checkEqual([0, 2, 4],
          array.operation.filter([0, 1, 2, 3, 4, 5], (value) => isEven(value))
        );
        checkEqual([0, 2, 4],
          array.operation.filter([0, 1, 2, 3, 4, 5], isEven)
        );
        checkEqual([1, 3, 5],
          array.operation.filter([0, 1, 2, 3, 4, 5], isOdd)
        );

        // Object Named Parameter
        checkEqual([0, 2, 4],
          array.operation.filter({
            array: [0, 1, 2, 3, 4, 5],
            func: (value) => isEven(value)
          })
        );
      });
    };

    const test_operation_sort = () => {
      it('test_operation_sort', () => {

        checkEqual([0, 1, 2],
          array.operation.sort([1, 2, 0])
        );
        checkEqual([2, 1, 0],
          array.operation.sort([1, 2, 0], 'descending')
        );
        checkEqual(['', 'A', 'AA', 'Aa', 'a', 'aA', 'aa'],
          array.operation.sort(
            ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''],
            'ascending'
          )
        );
        checkEqual(['', 'a', 'A', 'Aa', 'aa', 'aA', 'AA'],
          array.operation.sort(
            ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''],
            'ascending',
            v => v.length
          )
        );

        // object named parameter
        checkEqual([0, 1, 2],
          array.operation.sort(
            { array: [1, 2, 0] }
          )
        );
        checkEqual([2, 1, 0],
          array.operation.sort(
            {
              array: [1, 2, 0],
              order: 'descending'
            }
          )
        );
        checkEqual(['', 'a', 'A', 'Aa', 'aa', 'aA', 'AA'],
          array.operation.sort(
            {
              array: ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''],
              order: 'ascending',
              func: v => v.length
            }
          )
        );

        // exception
        checkEqual(false, isThrownException(() => {
          array.operation.sort([0, 1]);
        }, 'TypeError'));
        checkEqual(false, isThrownException(() => {
          array.operation.sort([0, 1], 'ascending');
        }, 'TypeError'));
        checkEqual(false, isThrownException(() => {
          array.operation.sort([0, 1], 'descending');
        }, 'TypeError'));

        checkEqual(true, isThrownException(() => {
          array.operation.sort([0, 1], 'desc');
        }, 'TypeError'));
        checkEqual(true, isThrownException(() => {
          array.operation.sort([0, 1], 'ascending', null);
        }, 'TypeError'));

      });
    };

    const test_operation_sortNumber = () => {
      it('test_operation_sortNumber', () => {
        checkEqual([0, 1, 2, 3, 4, 5],
          array.operation.sortNumberAscending([3,4,1,2,5,0])
        );
        checkEqual([5, 4, 3, 2, 1, 0],
          array.operation.sortNumberDescending([3,4,1,2,5,0])
        );

        // exception
        checkEqual(true, isThrownException(() => {
          array.operation.sortNumberAscending(1);
        }, 'TypeError'));

        checkEqual(false, isThrownException(() => {
          array.operation.sortNumberAscending([0, 1, 2]);
        }, 'TypeError'));

        checkEqual(true, isThrownException(() => {
          array.operation.sortNumberAscending([0, '1', 2]);
        }, 'TypeError'));

      });
    };

    const test_operation_sortLength = () => {
      it('test_operation_sortLength', () => {
        checkEqual(['a', 'aa', 'aaa'],
          array.operation.sortLengthAscending(['aaa', 'a', 'aa'])
        );
        checkEqual(['aaa', 'aa', 'a'],
          array.operation.sortLengthDescending(['aaa', 'a', 'aa'])
        );
        checkCompare(parts.compare.equalDeep,
          ['a', [0, 1], 'aaa'],
          array.operation.sortLengthAscending(['aaa', 'a', [0, 1]])
        );
        checkCompare(parts.compare.equalDeep,
          ['aaa', [0, 1], 'a'],
          array.operation.sortLengthDescending(['aaa', 'a', [0, 1]])
        );

        // exception
        checkEqual(true, isThrownException(() => {
          array.operation.sortLengthAscending(1);
        }, 'TypeError'));

        checkEqual(false, isThrownException(() => {
          array.operation.sortLengthAscending(['a', 'aa']);
        }, 'TypeError'));

        checkEqual(true, isThrownException(() => {
          array.operation.sortLengthAscending([0, 'aa']);
        }, 'TypeError'));

        checkEqual(false, isThrownException(() => {
          array.operation.sortLengthAscending([[0], [1, 2]]);
        }, 'TypeError'));

        checkEqual(true, isThrownException(() => {
          array.operation.sortLengthAscending([0, [1, 2]]);
        }, 'TypeError'));

      });
    };

    const test_operation_sortDictionary = () => {
      it('test_operation_sortDictionary', () => {
        checkEqual(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB', 'B', 'b'],
          array.operation.sortDictionaryAscending(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            array.operation.sortDictionary.casePriority.ignoreCase
          )
        );
        checkEqual(['B', 'b', 'aB', 'ab', 'Ab', 'AB', 'aa', 'Aa', 'AA', 'aA', 'a', 'A'],
          array.operation.sortDictionaryDescending(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            array.operation.sortDictionary.casePriority.ignoreCase
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          array.operation.sortDictionaryAscending(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            array.operation.sortDictionary.casePriority.upperCase
          )
        );
        checkEqual(['B', 'b', 'AB', 'Ab', 'aB', 'ab', 'AA', 'Aa', 'aA', 'aa', 'A', 'a'],
          array.operation.sortDictionaryDescending(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            array.operation.sortDictionary.casePriority.upperCase
          )
        );
        checkEqual(['a', 'A', 'aa', 'aA', 'Aa', 'AA', 'ab', 'aB', 'Ab', 'AB', 'b', 'B'],
          array.operation.sortDictionaryAscending(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            array.operation.sortDictionary.casePriority.lowerCase
          )
        );
        checkEqual(['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'],
          array.operation.sortDictionaryDescending(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            array.operation.sortDictionary.casePriority.lowerCase
          )
        );

        // exception
        checkEqual(true, isThrownException(() => {
          array.operation.sortDictionaryAscending(1);
        }, 'TypeError'));

        checkEqual(false, isThrownException(() => {
          array.operation.sortDictionaryAscending(['a', 'aa']);
        }, 'TypeError'));

        checkEqual(true, isThrownException(() => {
          array.operation.sortDictionaryAscending([0, 'aa']);
        }, 'TypeError'));

        // object named parameter
        const { sortDictionary } = array.operation;
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            order: sortDictionary.order.ascending,
            casePriority: sortDictionary.casePriority.upperCase,
            func: sortDictionary.targetFunc.returnValueErrorNotIsString,
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            order: sortDictionary.order.ascending,
            casePriority: sortDictionary.casePriority.upperCase,
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            order: sortDictionary.order.ascending,
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB']
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            casePriority: sortDictionary.casePriority.upperCase,
            func: sortDictionary.targetFunc.returnValueErrorNotIsString,
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            func: sortDictionary.targetFunc.returnValueErrorNotIsString,
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary({
            array: ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            casePriority: sortDictionary.casePriority.upperCase,
          })
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            {
              order: sortDictionary.order.ascending,
              casePriority: sortDictionary.casePriority.upperCase,
              func: sortDictionary.targetFunc.returnValueErrorNotIsString,
            }
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            sortDictionary.order.ascending,
            {
              casePriority: sortDictionary.casePriority.upperCase,
              func: sortDictionary.targetFunc.returnValueErrorNotIsString,
            }
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            sortDictionary.order.ascending,
            sortDictionary.casePriority.upperCase,
            {
              func: sortDictionary.targetFunc.returnValueErrorNotIsString,
            }
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            sortDictionary.order.ascending,
            {
              casePriority: sortDictionary.casePriority.upperCase,
            }
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            {
              order: sortDictionary.order.ascending,
              casePriority: sortDictionary.casePriority.upperCase,
            }
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            {
              order: sortDictionary.order.ascending,
              func: sortDictionary.targetFunc.returnValueErrorNotIsString,
            }
          )
        );
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortDictionary(
            ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'],
            {
              casePriority: sortDictionary.casePriority.upperCase,
              func: sortDictionary.targetFunc.returnValueErrorNotIsString,
            }
          )
        );

      });
    };

    const test_SortFunc = () => {
      it('test_SortFunc', () => {

        const userList = [
          { name: 'c', age: 20 },
          { name: 'b', age: 20 },
          { name: 'a', age: 20 },
          { name: 'c', age: 21 },
        ];

        var sortedUserList = [...userList]
          .sort(SortFunc([
            [SortFunc.order.normal.ascending, v => v.name],
            [SortFunc.order.normal.descending, v => v.age],
          ]));
        checkEqual(['a', 'b', 'c', 'c'], sortedUserList.map(v => v.name));
        checkEqual([20, 20, 21, 20], sortedUserList.map(v => v.age));

        var sortedUserList = [...userList]
          .sort(SortFunc([
            [SortFunc.order.normal.descending, v => v.name],
            [SortFunc.order.normal.ascending, v => v.age],
          ]));
        checkEqual(['c', 'c', 'b', 'a'], sortedUserList.map(v => v.name));
        checkEqual([20, 21, 20, 20], sortedUserList.map(v => v.age));

        checkEqual(false, isThrown(() => {
          SortFunc([
            [SortFunc.order.normal.descending, v => v.name],
            [SortFunc.order.normal.ascending, v => v.age],
          ]);
        }));
        checkEqual(false, isThrown(() => {
          SortFunc([
            [SortFunc.order.normal.descending, v => v.name, true],
            [SortFunc.order.normal.ascending, v => v.age],
          ]);
        }));
        checkEqual(true, isThrown(() => {
          SortFunc([
            [SortFunc.order.normal.descending],
            [SortFunc.order.normal.ascending, v => v.age],
          ]);
        }));

      });
    };

    const test_SortFunc_Dictionary = () => {
      it('test_SortFunc_Dictionary', () => {

        const unsortedList = [
          'a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'
        ];

        var sortedList = [...unsortedList]
          .sort(SortFunc.order.dictionaryUpperCase.ascending);
        checkEqual(
          ['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortedList,
        );
        var sortedList = [...unsortedList]
          .sort(SortFunc.order.dictionaryUpperCase.descending, v => v);
        checkEqual(
          ['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'],
          sortedList,
        );

        var sortedList = [...unsortedList]
          .sort(SortFunc([
            [SortFunc.order.dictionaryUpperCase.ascending, v => v],
          ]));
        checkEqual(
          ['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'],
          sortedList,
        );
        var sortedList = [...unsortedList]
          .sort(SortFunc([
            [SortFunc.order.dictionaryUpperCase.descending, v => v],
          ]));
        checkEqual(
          ['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'],
          sortedList,
        );
        var sortedList = [...unsortedList]
          .sort(SortFunc([
            [SortFunc.order.dictionaryLowerCase.ascending, v => v],
          ]));
        checkEqual(
          ['a', 'A', 'aa', 'aA', 'Aa', 'AA', 'ab', 'aB', 'Ab', 'AB', 'b', 'B'],
          sortedList,
        );
        var sortedList = [...unsortedList]
          .sort(SortFunc([
            [SortFunc.order.dictionaryLowerCase.descending, v => v],
          ]));
        checkEqual(
          ['B', 'b', 'AB', 'Ab', 'aB', 'ab', 'AA', 'Aa', 'aA', 'aa', 'A', 'a'],
          sortedList,
        );

      });
    };

    const test_SortFunc_Version = () => {
      it('test_SortFunc_Version', () => {

        const versions = [
          '5.0.0.',
          '1.3.0.9',
          '0.2.0',
          '3.1.2',
          '0.1.6',
          '5.0.0',
          '3.3.3.3',
          '3.3.3.3.3',
          '3.10',
          '0.2.0',
          '0.2.0a',
          '0.2.0aa',
          '0.2.0AA',
          '0.2.0Aa',
          '0.2.0aA',
          '0.2.0c',
          '0.2.0b',
          '0.2.0A',
          '0.2.0C',
          '0.2.0B',
          '0.2.0.a',
          '0.2.0.c',
          '0.2.0.b',
          '0.2.0.A',
          '0.2.0.C',
          '0.2.0.B',
          '5.0.0.',
          '5.0.0.0',
        ];

        const outputVersions = [
          '5.0.0.0',
          '5.0.0.',
          '5.0.0.',
          '5.0.0',
          '3.10',
          '3.3.3.3.3',
          '3.3.3.3',
          '3.1.2',
          '1.3.0.9',
          '0.2.0C',
          '0.2.0c',
          '0.2.0B',
          '0.2.0b',
          '0.2.0AA',
          '0.2.0Aa',
          '0.2.0aA',
          '0.2.0aa',
          '0.2.0A',
          '0.2.0a',
          '0.2.0.C',
          '0.2.0.c',
          '0.2.0.B',
          '0.2.0.b',
          '0.2.0.A',
          '0.2.0.a',
          '0.2.0',
          '0.2.0',
          '0.1.6',
        ];

        var sortedVersions = [
          ...versions,
        ].sort(SortFunc.order.version.descending);
        checkEqual(outputVersions, sortedVersions);
        var sortedVersions = [
          ...versions,
        ].sort(SortFunc.order.version.ascending);
        checkEqual([...outputVersions].reverse(), sortedVersions);

        var sortedVersions = [
          ...versions,
        ].sort(SortFunc([
          [SortFunc.order.version.descending, v => v],
        ]));
        checkEqual(outputVersions, sortedVersions);
        var sortedVersions = [
          ...versions,
        ].sort(SortFunc([
          [SortFunc.order.version.ascending, v => v],
        ]));
        checkEqual([...outputVersions].reverse(), sortedVersions);

        const items = [
          {
            name: 'a',
            version: {
              major: '1',
              minor: '1',
              build: '1',
              revision: '1',
            }
          },
          {
            name: 'b',
            version: {
              major: '1',
              minor: '10',
              build: '1',
              revision: '1',
            }
          },
          {
            name: 'c',
            version: {
              major: '1',
              minor: '2',
              build: '1',
              revision: '1',
            }
          },
          {
            name: 'd',
            version: {
              major: '1',
              minor: '1',
              build: '1',
              revision: '1b',
            }
          },
          {
            name: 'e',
            version: {
              major: '1',
              minor: '1',
              build: '1',
              revision: '1a',
            }
          },
        ];

        var sortedItems = [
          ...items,
        ].sort(SortFunc([
          [SortFunc.order.version.ascending, i => {
            const { major, minor, build, revision } = i.version;
            return major + minor + build + revision;
          }],
        ]));
        checkEqual(['a', 'e', 'd', 'c', 'b'], sortedItems.map(i => i.name));

        var sortedItems = [
          ...items,
        ].sort(SortFunc([
          [SortFunc.order.version.descending, i => {
            const { major, minor, build, revision } = i.version;
            return major + minor + build + revision;
          }],
        ]));
        checkEqual(['b', 'c', 'd', 'e', 'a'], sortedItems.map(i => i.name));

      });
    };

    const test_ArrayEntries_standard = () => {
      it('test_ArrayEntries_standard', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        const arrayEntries = (array) => {
          const result = [];
          for (const [i, v] of array.entries()) {
            result.push([i,v]);
          }
          return result;
        };

        checkEqual(
          [[0, 'a'], [1, 'b'], [2, 'c']],
          arrayEntries(['a', 'b', 'c'])
        );
      });
    };

    const test_arrayEntries = () => {
      it('test_arrayToIndexValueArray', () => {

        checkEqual(
          [[0, 'a'], [1, 'b'], [2, 'c']],
          arrayEntries(['a', 'b', 'c'])
        );

        // only array type
        checkEqual(true, isThrown(() => arrayEntries({})));

      });
    };

    test_array_NumberArray();
    test_array_IntegerArray();

    test_array_from();

    test_min();
    test_max();

    test_sum();
    test_average();
    test_median();
    test_mode();

    test_unique();
    test_single();
    test_multiple();
    test_group();

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
    test_isBothEnds();

    test_array_subIndex();
    test_array_subLength();
    test_array_subFirst();
    test_array_subLast();

    test_operation_insert();
    test_operation_add();

    test_operation_deleteLength();
    test_operation_deleteIndex();
    test_operation_deleteFirst();
    test_operation_deleteLast();

    test_operation_includeFirst();
    test_operation_includeLast();
    test_operation_includeBothEnds();
    test_operation_excludeFirst();
    test_operation_excludeLast();
    test_operation_excludeBothEnds();

    test_operation_trimFirst();
    test_operation_trimLast();
    test_operation_trimBothEnds();

    test_operation_popFirst();
    test_operation_popLast();
    test_operation_pushFirst();
    test_operation_pushLast();

    test_operation_remainFirst();
    test_operation_remainLast();

    test_operation_filter();

    test_operation_sort();
    test_operation_sortNumber();
    test_operation_sortLength();
    test_operation_sortDictionary();

    test_SortFunc();
    test_SortFunc_Dictionary();
    test_SortFunc_Version();

    test_ArrayEntries_standard();
    test_arrayEntries();
  });
};

export default {
  test_execute_array,
};
