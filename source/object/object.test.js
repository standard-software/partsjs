/* eslint-disable max-len */
/* eslint-disable no-var */
export const test_execute_object = (parts) => {
  const { describe, it, testCounter } = parts.test;
  describe('test_execute_object', () => {

    const {
      checkEqual,
      isThrown,
    } = parts.test;

    const {
      copyProperty, inProperty, fixProperty,
      propertyCount,
      getProperty, setProperty,
      isEmptyObjectAll,
      isObjectParameter,
      objectEntries,
      objectFromEntries,
      objectKeys, objectValues,
      has, hasOwn, hasPrototype,
      propertyList,
    } = parts.object;

    const test_has = () => {
      it('test_has', () => {
        const object1 = {
          a: '1',
        };
        checkEqual(true,  has(object1,          'a'));
        checkEqual(true,  has(object1,          'a', true));
        checkEqual(true,  hasOwn(object1,       'a'));
        checkEqual(false, hasPrototype(object1, 'a'));

        checkEqual(false, has(object1,          'b'));
        checkEqual(false, has(object1,          'b', true));
        checkEqual(false, hasOwn(object1,       'b'));
        checkEqual(false, hasPrototype(object1, 'b'));

        checkEqual(true,  has(object1,          'constructor'));
        checkEqual(false, has(object1,          'constructor', true));
        checkEqual(false, hasOwn(object1,       'constructor'));
        checkEqual(true,  hasPrototype(object1, 'constructor'));

        // object parameter
        checkEqual(true,  has(
          { object: object1, propertyName: 'constructor' }),
        );
        checkEqual(false,  has(
          { object: object1, propertyName: 'constructor', hasOwn: true }),
        );
        checkEqual(true,  has(
          object1, { propertyName: 'constructor' }),
        );
        checkEqual(false,  has(
          object1, { propertyName: 'constructor', hasOwn: true }),
        );
        checkEqual(true,  has(
          object1, 'constructor', { hasOwn: false }),
        );
        checkEqual(false,  has(
          object1, 'constructor', { hasOwn: true }),
        );

        checkEqual(false, hasOwn(
          { object: object1, propertyName: 'constructor' }),
        );
        checkEqual(false, hasOwn(
          object1, { propertyName: 'constructor' }),
        );
        checkEqual(true,  hasPrototype(
          { object: object1, propertyName: 'constructor' }),
        );
        checkEqual(true,  hasPrototype(
          object1, { propertyName: 'constructor' }),
        );

      });
    };

    const test_copyProperty = () => {
      it('test_copyProperty', () => {

        var sourceObject = {
          a: '1', b: '2', c: '3',
        };
        var destObject = {};
        copyProperty(sourceObject, 'a', destObject);
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);

        var destObject = {};
        copyProperty(sourceObject, 'a,b', destObject);
        checkEqual(true,  'a' in destObject);
        checkEqual(true,  'b' in destObject);
        checkEqual(false, 'c' in destObject);

        var destObject = {};
        copyProperty(sourceObject, 'a,c,', destObject);
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(true,  'c' in destObject);

        // Object Named Parameter
        var destObject = {};
        copyProperty({
          fromObject: sourceObject,
          propertyNames: 'a',
          toObject: destObject,
        });
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(
          sourceObject,
          {
            propertyNames: 'a',
            toObject: destObject,
          },
        );
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(
          sourceObject,
          'a',
          {
            toObject: destObject,
          },
        );
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);

        var destObject = copyProperty({
          fromObject: sourceObject,
          propertyNames: 'a',
        });
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = copyProperty(
          sourceObject,
          {
            propertyNames: 'a',
          },
        );
        checkEqual(true,  'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);

        // exception
        checkEqual(false, isThrown(() => {
          copyProperty({}, 'a', {});
        }));

        checkEqual(true, isThrown(() => {
          copyProperty(1, 'a', {});
        }));

        checkEqual(true, isThrown(() => {
          copyProperty({}, 1, {});
        }));

        checkEqual(true, isThrown(() => {
          copyProperty({}, 'a', 1);
        }));

      });
    };

    const test_inProperty = () => {
      it('test_inProperty', () => {

        var sourceObject = {
          a: '1', b: '2',
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true,  inProperty(sourceObject, 'a'));
        checkEqual(true,  inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));

        checkEqual(true,  inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true,  inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));

        checkEqual(true,  inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true,  inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,'));

        // other object function
        checkEqual(false, inProperty(test_inProperty, 'constructor'));
        checkEqual(true,  inProperty(test_inProperty, 'constructor', false));

        // other object Module
        if (parts.isModule(parts)) {
          checkEqual(true,  inProperty(parts, 'VERSION'));
          checkEqual(true,  inProperty(parts, 'VERSION', false));
        }

        // array
        checkEqual(true,  inProperty(sourceObject, ['a']));
        checkEqual(true,  inProperty(sourceObject, ['a', 'b']));
        checkEqual(false, inProperty(sourceObject, ['a', 'b', 'c']));

        // Object Named Parameter
        checkEqual(true,
          inProperty({
            object: sourceObject,
            propertyPaths: 'b,a',
          }),
        );
        checkEqual(false,
          inProperty({
            object: sourceObject,
            propertyPaths: 'd',
          }),
        );
        checkEqual(true,
          inProperty({
            object: sourceObject,
            propertyPaths: ['b', 'a'],
          }),
        );
        checkEqual(false,
          inProperty({
            object: sourceObject,
            propertyPaths: ['d'],
          }),
        );

        // exception
        checkEqual(false, isThrown(() => {
          inProperty({}, 'a');
        }));

        checkEqual(true, isThrown(() => {
          inProperty(1, 'a');
        }));

        checkEqual(true, isThrown(() => {
          inProperty({}, 1);
        }));

        checkEqual(false, isThrown(() => {
          inProperty({}, ['a']);
        }));

        checkEqual(true, isThrown(() => {
          inProperty({}, [1]);
        }));

        // property exist value undefined
        var sourceObject = {
          a: '1', b: undefined,
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true,  inProperty(sourceObject, 'a'));
        checkEqual(true,  inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));

        var sourceObject = {
          a: '1',
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true,  inProperty(sourceObject, 'a'));
        checkEqual(false, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));

        // hasOwn
        function First() {
          this.a = '1';
          this.b = '2';
        }
        function Second() {
          this.c = '3';
        }
        First.prototype = new Second();
        Second.prototype.d = '4';

        var sourceObject = new First();

        checkEqual('1', sourceObject.a);
        checkEqual('2', sourceObject.b);
        checkEqual('3', sourceObject.c);
        checkEqual('4', sourceObject.d);

        checkEqual(false, inProperty(sourceObject, '' ));
        checkEqual(true,  inProperty(sourceObject, 'a' ));
        checkEqual(true,  inProperty(sourceObject, 'b' ));
        checkEqual(false, inProperty(sourceObject, 'c' ));
        checkEqual(false, inProperty(sourceObject, 'd' ));

        checkEqual(true,  inProperty(sourceObject, 'a,b' ));
        checkEqual(false, inProperty(sourceObject, 'b,c' ));
        checkEqual(false, inProperty(sourceObject, 'a,c' ));
        checkEqual(true,  inProperty(sourceObject, 'b,a' ));
        checkEqual(false, inProperty(sourceObject, 'a,d' ));

        testCounter();
        checkEqual(true,  inProperty(sourceObject, 'a,b,' ));
        checkEqual(false, inProperty(sourceObject, 'b,c,' ));
        checkEqual(false, inProperty(sourceObject, 'a,c,' ));
        checkEqual(true,  inProperty(sourceObject, 'b,a,' ));
        checkEqual(false, inProperty(sourceObject, 'a,d,' ));

        checkEqual(true,  inProperty(sourceObject, 'a', false));
        checkEqual(true,  inProperty(sourceObject, 'b', false));
        checkEqual(true,  inProperty(sourceObject, 'c', false));
        checkEqual(true,  inProperty(sourceObject, 'd', false));

        checkEqual(true,  inProperty(sourceObject, 'a,b', false));
        checkEqual(true,  inProperty(sourceObject, 'b,c', false));
        checkEqual(true,  inProperty(sourceObject, 'a,c', false));
        checkEqual(true,  inProperty(sourceObject, 'b,a', false));
        checkEqual(true,  inProperty(sourceObject, 'a,d', false));

        checkEqual(true,  inProperty(sourceObject, 'a,b,', false));
        checkEqual(true,  inProperty(sourceObject, 'b,c,', false));
        checkEqual(true,  inProperty(sourceObject, 'a,c,', false));
        checkEqual(true,  inProperty(sourceObject, 'b,a,', false));
        checkEqual(true,  inProperty(sourceObject, 'a,d,', false));

        // property path
        var sourceObject2 = {
          a: '1', b: '2', c: { d: { e: 'E' } },
        };
        checkEqual(true,  inProperty(sourceObject2, 'a'));
        checkEqual(true,  inProperty(sourceObject2, 'a,b'));
        checkEqual(true,  inProperty(sourceObject2, 'a,b,c'));
        checkEqual(true,  inProperty(sourceObject2, 'a,b,c.d'));
        checkEqual(true,  inProperty(sourceObject2, 'a,b,c.d.e'));
        checkEqual(false, inProperty(sourceObject2, 'a,b,c.d.f'));
        checkEqual(true, isThrown(() => inProperty(sourceObject2, 'a,b,c.d.')));
        checkEqual(true, isThrown(() => inProperty(sourceObject2, 'a,b,c.d..e')));
        checkEqual(false, inProperty(sourceObject2, 'a,b,.d'));
        checkEqual(true,  inProperty(sourceObject2, 'a,b,'));
        checkEqual(true,  inProperty(sourceObject2, 'a,b,c.d.e,'));

        // object parameter
        testCounter();
        checkEqual(false,
          inProperty(
            { object: sourceObject, propertyPaths: 'b,c' },
          ),
        );
        checkEqual(true,
          inProperty(
            { object: sourceObject, propertyPaths: 'b,c', hasOwn: false },
          ),
        );
        checkEqual(true,
          inProperty(
            sourceObject, { propertyPaths: 'b,c', hasOwn: false },
          ),
        );
        checkEqual(true,
          inProperty(
            sourceObject, 'b,c', { hasOwn: false },
          ),
        );

      });
    };

    const test_fixProperty = () => {
      it('test_fixProperty', () => {

        var sourceObject = {
          a: '1', b: '2',
        };
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'd'));

        checkEqual(true,  fixProperty(sourceObject, 'a,b'));
        checkEqual(false, fixProperty(sourceObject, 'b,c'));
        checkEqual(false, fixProperty(sourceObject, 'a,c'));
        checkEqual(true,  fixProperty(sourceObject, 'b,a'));
        checkEqual(false, fixProperty(sourceObject, 'a,d'));

        checkEqual(true,  fixProperty(sourceObject, 'a,b,'));
        checkEqual(false, fixProperty(sourceObject, 'b,c,'));
        checkEqual(false, fixProperty(sourceObject, 'a,c,'));
        checkEqual(true,  fixProperty(sourceObject, 'b,a,'));
        checkEqual(false, fixProperty(sourceObject, 'a,d,'));

        // other object function
        checkEqual(false, fixProperty(test_fixProperty, 'constructor'));

        // array
        checkEqual(false,  fixProperty(sourceObject, ['a']));
        checkEqual(true,  fixProperty(sourceObject, ['a', 'b']));
        checkEqual(false, fixProperty(sourceObject, ['a', 'b', 'c']));

        // Object Named Parameter
        checkEqual(true,
          fixProperty({
            object: sourceObject,
            propertyNames: 'b,a',
          }),
        );
        checkEqual(false,
          fixProperty({
            object: sourceObject,
            propertyNames: 'd',
          }),
        );
        checkEqual(true,
          fixProperty({
            object: sourceObject,
            propertyNames: ['b', 'a'],
          }),
        );
        checkEqual(false,
          fixProperty({
            object: sourceObject,
            propertyNames: ['d'],
          }),
        );

        // exception
        checkEqual(false, isThrown(() => {
          fixProperty({}, 'a');
        }));

        checkEqual(true, isThrown(() => {
          fixProperty(1, 'a');
        }));

        checkEqual(true, isThrown(() => {
          fixProperty({}, 1);
        }));

        checkEqual(false, isThrown(() => {
          fixProperty({}, ['a']);
        }));

        checkEqual(true, isThrown(() => {
          fixProperty({}, [1]);
        }));

        // property exist value undefined
        var sourceObject = {
          a: '1', b: undefined,
        };
        testCounter();
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(true,  fixProperty(sourceObject, 'a,b'));

        var sourceObject = {
          a: '1',
        };
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(true,  fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'a,b'));

        // hasOwn
        function First() {
          this.a = '1';
          this.b = '2';
        }
        function Second() {
          this.c = '3';
        }
        First.prototype = new Second();
        Second.prototype.d = '4';

        var sourceObject = new First();

        testCounter();
        checkEqual('1', sourceObject.a);
        checkEqual('2', sourceObject.b);
        checkEqual('3', sourceObject.c);
        checkEqual('4', sourceObject.d);

        checkEqual(false, fixProperty(sourceObject, '' ));
        checkEqual(false, fixProperty(sourceObject, 'a' ));
        checkEqual(false, fixProperty(sourceObject, 'b' ));
        checkEqual(false, fixProperty(sourceObject, 'c' ));
        checkEqual(false, fixProperty(sourceObject, 'd' ));

        checkEqual(true,  fixProperty(sourceObject, 'a,b' ));
        checkEqual(false, fixProperty(sourceObject, 'b,c' ));
        checkEqual(false, fixProperty(sourceObject, 'a,c' ));
        checkEqual(true,  fixProperty(sourceObject, 'b,a' ));
        checkEqual(false, fixProperty(sourceObject, 'a,d' ));

        testCounter();
        checkEqual(true,  fixProperty(sourceObject, 'a,b,' ));
        checkEqual(false, fixProperty(sourceObject, 'b,c,' ));
        checkEqual(false, fixProperty(sourceObject, 'a,c,' ));
        checkEqual(true,  fixProperty(sourceObject, 'b,a,' ));
        checkEqual(false, fixProperty(sourceObject, 'a,d,' ));

        // property path
        var sourceObject2 = {
          a: '1', b: '2', c: { d: { e: 'E' } },
        };
        checkEqual(false, fixProperty(sourceObject2, 'a'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b'));
        checkEqual(true,  fixProperty(sourceObject2, 'a,b,c'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.e'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.f'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d..e'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,.d'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,'));
        checkEqual(true,  fixProperty(sourceObject2, 'a,b,c,'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.e,'));

        // object parameter
        testCounter();
        checkEqual(false,
          fixProperty(
            { object: sourceObject, propertyNames: 'b,c' },
          ),
        );
        checkEqual(true,
          fixProperty(
            { object: sourceObject, propertyNames: 'a,b' },
          ),
        );
        checkEqual(true,
          fixProperty(
            sourceObject, { propertyNames: 'a,b,' },
          ),
        );

      });
    };

    const test_propertyCount = () => {
      it('test_propertyCount', () => {

        const object1 = { a: 1, b: 2, c: 3 };
        function Object2() {
          this.d = 'red';
        }
        Object2.prototype = object1;
        const object2  = new Object2();

        checkEqual(3, propertyCount(object1));
        checkEqual(3, propertyCount(object1, false));
        checkEqual(1, propertyCount(object2));
        checkEqual(4, propertyCount(object2, false));
        checkEqual(0, propertyCount({}));
        checkEqual(0, propertyCount({}, false));

        // other object function
        checkEqual(0, propertyCount(test_propertyCount));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(0, propertyCount(test_propertyCount, false));
        } else {
          checkEqual(1, propertyCount(test_propertyCount, false));
        }

        // other object Module
        if (parts.isModule(parts)) {
          checkEqual(true,  0 !== propertyCount(parts));
          checkEqual(true,  0 !== propertyCount(parts, false));
        }

        // exception
        checkEqual(false, isThrown(() => {
          propertyCount({});
        }));
        checkEqual(false, isThrown(() => {
          propertyCount([]);
        }));
        checkEqual(true, isThrown(() => {
          propertyCount(10);
        }));
        checkEqual(true, isThrown(() => {
          propertyCount('abc');
        }));

        // object parameter
        checkEqual(1,  propertyCount(
          { object: object2 }),
        );
        checkEqual(4,  propertyCount(
          { object: object2, hasOwn: false }),
        );
        checkEqual(4,  propertyCount(
          object2, { hasOwn: false }),
        );
      });
    };

    const test_getProperty = () => {
      it('test_getProperty', () => {

        const testObj1 = {
          a: {
            b: {
              c: false,
            },
          },
        };

        checkEqual(false,     getProperty(testObj1, 'a'       ).b.c );
        checkEqual(false,     getProperty(testObj1, 'a.b'     ).c );
        checkEqual(false,     getProperty(testObj1, 'a.b.c'   ) );
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.d' ) );
        checkEqual(undefined, getProperty(testObj1, 'a.b.b'   ) );
        checkEqual(undefined, getProperty(testObj1, ''        ) );
        checkEqual(true, isThrown(() => getProperty(testObj1, '.'       )));
        checkEqual(true, isThrown(() => getProperty(testObj1, '..'       )));
        checkEqual(true, isThrown(() => getProperty(testObj1, 'a.b.c.'       )));
        checkEqual(true, isThrown(() => getProperty(testObj1, 'a.'       )));
        checkEqual(false,     getProperty(testObj1, '.a'      ).b.c );
        checkEqual(undefined, getProperty(testObj1, 'a.c'     ) );
        checkEqual(undefined, getProperty(testObj1, 'b'       ) );
        checkEqual(undefined, getProperty(testObj1, 'b.c'     ) );

        const testObj2 = {
          a: {
            b: {
              c: undefined,
            },
          },
        };
        checkEqual(undefined, getProperty(testObj2, 'a'       ).b.c );
        checkEqual(undefined, getProperty(testObj2, 'a.b'     ).c );
        checkEqual(undefined, getProperty(testObj2, 'a.b.c'   ) );
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d' ) );
        checkEqual(undefined, getProperty(testObj2, 'a.b.b'   ) );
        checkEqual(undefined, getProperty(testObj2, ''        ) );
        checkEqual(true, isThrown(() => getProperty(testObj2, '.'       )));
        checkEqual(true, isThrown(() => getProperty(testObj2, '..'       )));
        checkEqual(true, isThrown(() => getProperty(testObj2, 'a.b.c.'       )));
        checkEqual(true, isThrown(() => getProperty(testObj2, 'a.'       )));
        checkEqual(undefined, getProperty(testObj2, '.a'      ).b.c );
        checkEqual(undefined, getProperty(testObj2, 'a.c'     ) );
        checkEqual(undefined, getProperty(testObj2, 'b'       ) );
        checkEqual(undefined, getProperty(testObj2, 'b.c'     ) );

        /* eslint-disable comma-spacing */
        checkEqual(undefined, getProperty(testObj2, 'a'       ,true, false).b.c );
        checkEqual(undefined, getProperty(testObj2, 'a.b'     ,true, false).c );
        checkEqual(undefined, getProperty(testObj2, 'a.b.c'   ,true, false) );
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d' ,true, false) );
        checkEqual(undefined, getProperty(testObj2, 'a.b.b'   ,true, false) );

        checkEqual({ b: { c: undefined} }, getProperty(testObj2, 'a'       ,true, true).value );
        checkEqual(undefined, getProperty(testObj2, 'a.b'     ,true, true).value.c );
        checkEqual(undefined, getProperty(testObj2, 'a.b.c'   ,true, true).value );
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d' ,true, true).value );
        checkEqual(undefined, getProperty(testObj2, 'a.b.b'   ,true, true).value );

        testCounter();
        checkEqual(true,  getProperty(testObj2, 'a'       ,true, true).exist );
        checkEqual(true,  getProperty(testObj2, 'a.b'     ,true, true).exist );
        checkEqual(true,  getProperty(testObj2, 'a.b.c'   ,true, true).exist );
        checkEqual(false, getProperty(testObj2, 'a.b.c.d' ,true, true).exist );
        checkEqual(false, getProperty(testObj2, 'a.b.b'   ,true, true).exist );
        /* eslint-enable comma-spacing */

        // object parameter
        const object1 = {
          a: {
            b: {
              c: false,
            },
          },
        };
        function Object2() {
          this.d = true;
        }
        Object2.prototype = object1;
        const object2  = new Object2();

        checkEqual(undefined,
          getProperty(
            { object: object2, propertyPath: 'a.b.c', hasOwn: true },
          ),
        );
        checkEqual(false,
          getProperty(
            { object: object2, propertyPath: 'a.b.c', hasOwn: false },
          ),
        );
        checkEqual(false,
          getProperty(
            object2, { propertyPath: 'a.b.c', hasOwn: false },
          ),
        );
        checkEqual(false,
          getProperty(
            object2, 'a.b.c', { hasOwn: false },
          ),
        );

        checkEqual({ exist: false },
          getProperty({
            object: object2, propertyPath: 'a.b.c', hasOwn: true, detail: true,
          }),
        );
        checkEqual({ exist: true, value: false },
          getProperty({
            object: object2, propertyPath: 'a.b.c', hasOwn: false, detail: true,
          }),
        );
        checkEqual({ exist: true, value: false },
          getProperty(
            object2, { propertyPath: 'a.b.c', hasOwn: false, detail: true },
          ),
        );
        checkEqual({ exist: true, value: false },
          getProperty(
            object2, 'a.b.c', { hasOwn: false, detail: true },
          ),
        );
        checkEqual({ exist: true, value: false },
          getProperty(
            object2, 'a.b.c', false, { detail: true },
          ),
        );

        checkEqual({ exist: false },
          getProperty({
            object: object2, propertyPath: 'a.b.c', detail: true,
          }),
        );
        checkEqual({ exist: false },
          getProperty(
            object2, { propertyPath: 'a.b.c', detail: true },
          ),
        );
        checkEqual({ exist: false },
          getProperty(
            object2, 'a.b.c', { detail: true },
          ),
        );
      });
    };

    const test_setProperty = () => {
      it('test_setProperty', () => {

        var testObj1 = {};
        setProperty(testObj1, 'a.b',    true);
        checkEqual(true, testObj1.a.b);
        setProperty(testObj1, 'a',      true);
        checkEqual(true, testObj1.a);
        setProperty(testObj1, '.a',     'A');
        checkEqual('A', testObj1.a);
        setProperty(testObj1, 'a.b.c',  true);
        checkEqual(true, testObj1.a.b.c);
        setProperty(testObj1, 'a.c',    true);
        checkEqual(true, testObj1.a.c);
        setProperty(testObj1, 'b',      true);
        checkEqual(true, testObj1.b);
        setProperty(testObj1, 'b.c',    true);
        checkEqual(true, testObj1.b.c);

        checkEqual(true,  isThrown(() => setProperty(testObj1, '', true)));
        checkEqual(true,  isThrown(() => setProperty(testObj1, 'a.', true)));
        checkEqual(false, isThrown(() => setProperty(testObj1, '.a', true)));
        checkEqual(false, isThrown(() => setProperty(testObj1, 'a', true)));

        var testObj1 = { a: ['abc', { b: 'b' }] };
        checkEqual('abc', testObj1.a[0]);
        setProperty(testObj1, 'a.0', 'def');
        checkEqual('def', testObj1.a[0]);

        checkEqual('b', testObj1.a[1].b);
        setProperty(testObj1, 'a.1.b', 'c');
        checkEqual('c', testObj1.a[1].b);

      });
    };

    const test_isObjectParameter = () => {
      it('test_isObjectParameter', () => {

        const testFunction01 = (a, b, c='', d='') => {
          if (isObjectParameter(a, 'a, b', 'c, d')) {
            ({ a, b, c='', d='' } = a);
          }
          return a + b + c + d;
        };

        checkEqual('ABCD',  testFunction01('A', 'B', 'C', 'D'));
        checkEqual('ABC',   testFunction01('A', 'B', 'C'));
        checkEqual('AB',    testFunction01('A', 'B'));

        checkEqual('ABCD',  testFunction01({a:'A', b:'B', c:'C', d:'D'}));
        checkEqual('ABC',   testFunction01({a:'A', b:'B', c:'C'}));
        checkEqual('ABD',   testFunction01({a:'A', b:'B', d:'D'}));
        checkEqual('AB',    testFunction01({a:'A', b:'B'}));

        const testFunction02 = (a, b, c='', d='') => {
          if (isObjectParameter(a, 'a, b', 'c, d')) {
            ({ a, b, c='', d='' } = a);
          } else if (isObjectParameter(b, 'b', 'c, d')) {
            ({ b, c='', d='' } = b);
          } else if (isObjectParameter(c, '', 'c, d', 1)) {
            ({ c='', d='' } = c);
          } else if (isObjectParameter(d, '', 'd', 1)) {
            ({ d='' } = d);
          }
          return a + b + c + d;
        };

        checkEqual('ABCD',  testFunction02('A', 'B', 'C', 'D'));
        checkEqual('ABC',   testFunction02('A', 'B', 'C'));
        checkEqual('AB',    testFunction02('A', 'B'));

        // object parameter a
        checkEqual('ABCD',  testFunction02({a:'A', b:'B', c:'C', d:'D'}));
        checkEqual('ABC',   testFunction02({a:'A', b:'B', c:'C'}));
        checkEqual('ABD',   testFunction02({a:'A', b:'B', d:'D'}));
        checkEqual('AB',    testFunction02({a:'A', b:'B'}));

        // object parameter b
        checkEqual('ABCD',  testFunction02('A', {b:'B', c:'C', d:'D'}));
        checkEqual('ABC',   testFunction02('A', {b:'B', c:'C'}));
        checkEqual('ABD',   testFunction02('A', {b:'B', d:'D'}));
        checkEqual('AB',    testFunction02('A', {b:'B'}));

        // object parameter c
        checkEqual('ABCD',  testFunction02('A', 'B', { c:'C', d:'D'}));
        checkEqual('ABC',   testFunction02('A', 'B', { c:'C'}));
        checkEqual('ABD',   testFunction02('A', 'B', { d:'D'}));

        // object parameter c
        checkEqual('ABCD',  testFunction02('A', 'B', 'C', { d:'D'}));

        // miss patern
        checkEqual('[object Object]undefined',    testFunction02({a:'A'}));
        checkEqual('[object Object]undefined',    testFunction02({b:'A'}));
        checkEqual('[object Object]undefined',    testFunction02({a:'A', c:'C'}));
        checkEqual('[object Object]undefined',    testFunction02({a:'A', d:'D'}));
        checkEqual('[object Object]undefined',    testFunction02({b:'B', c:'C'}));
        checkEqual('[object Object]undefined',    testFunction02({b:'B', d:'D'}));
        checkEqual('[object Object]undefined',    testFunction02({a:'A', b:'B', c:'C', d:'D', e:'E'}));
        checkEqual('[object Object]undefined',    testFunction02({a:'A', b:'B', e:'E'}));

        checkEqual('A[object Object]',    testFunction02('A', {}));
        checkEqual('A[object Object]',    testFunction02('A', {b:'B', e:'E'}));
        checkEqual('A[object Object]',    testFunction02('A', {a:'A', b:'B'}));
        checkEqual('A[object Object]',    testFunction02('A', {c:'C', d:'D'}));

        checkEqual('AB[object Object]',   testFunction02('A', 'B', {}));
        checkEqual('AB[object Object]',   testFunction02('A', 'B', {a:'A'}));
        checkEqual('AB[object Object]',   testFunction02('A', 'B', {b:'B'}));
        checkEqual('AB[object Object]',   testFunction02('A', 'B', {e:'D'}));

        checkEqual('ABC[object Object]',  testFunction02('A', 'B', 'C', {c:'C'}));
        checkEqual('ABC[object Object]',  testFunction02('A', 'B', 'C', {e:'E'}));
      });
    };

    const test_ObjectEntries_standard = () => {
      it('test_ObjectEntries_standard', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(
          [['a', '1'], ['b', '2'], ['c', '3']],
          Object.entries({a:'1', b:'2', c:'3'}),
        );

        checkEqual(
          [['0', 'a'], ['1', 'b'], ['2', 'c']],
          Object.entries(['a', 'b', 'c']),
        );
      });
    };

    const test_objectEntries = () => {
      it('test_objectEntries', () => {

        checkEqual(
          [['a', '1'], ['b', '2'], ['c', '3']],
          objectEntries({a:'1', b:'2', c:'3'}),
        );

        // array ok
        checkEqual(
          [['0', 'a'], ['1', 'b'], ['2', 'c']],
          objectEntries(['a', 'b', 'c']),
        );

        // exception
        checkEqual(true, isThrown(() => objectEntries('ABC')));

      });
    };

    const test_objectFromEntries = () => {
      it('test_objectFromEntries', () => {

        checkEqual(
          {a:'1', b:'2', c:'3'},
          objectFromEntries([['a', '1'], ['b', '2'], ['c', '3']]),
        );
        checkEqual(
          {},
          objectFromEntries([]),
        );

        checkEqual(
          { '0': 'a', '1': 'b', '2': 'c' },
          objectFromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']]),
        );

        // exception
        checkEqual(true,  isThrown(() => objectFromEntries('ABC')));
        checkEqual(false, isThrown(() => objectFromEntries([])));
        checkEqual(false, isThrown(() => objectFromEntries([['a', 1]])));
        checkEqual(true,  isThrown(() => objectFromEntries([['a', 1], []])));
        checkEqual(true,  isThrown(() => objectFromEntries([['a', 1], ['b']])));
        checkEqual(false, isThrown(() => objectFromEntries([['a', 1], ['b', 2]])));
        checkEqual(true,  isThrown(() => objectFromEntries([['a', 1], ['b', 2, 3]])));

      });
    };

    const test_objectKeys = () => {
      it('test_objectKeys', () => {

        const array1 = ['a', 'b', 'c'];
        const object1 = {a:'1', b:'2', c:'3'};
        checkEqual(array1, objectKeys(object1));

        // only object type
        checkEqual(true, isThrown(() => objectKeys(array1)));

        // object parameter
        checkEqual(array1, objectKeys({ object: object1 }));

      });
    };

    const test_objectValues = () => {
      it('test_objectValues', () => {

        const array1 = ['1', '2', '3'];
        const object1 = {a:'1', b:'2', c:'3'};
        checkEqual(array1, objectValues(object1));

        // only object type
        checkEqual(true, isThrown(() => objectValues(array1)));

        // object parameter
        checkEqual(array1, objectValues({ object: object1 }));

      });
    };

    const test_propertyList = () => {
      it('test_propertyList', () => {

        // checkEqual('a\n b\n c', parts.string.trimBothEnds('\n a\n b\n c\n  ', ['\n', ' ']));
        // checkEqual('a\nb\nc', 'a\n b\n c'.split('\n').map(v => parts.string.trimFirst(v, [' '])).join('\n'));

        const object1 = {a:'A', b: { b1: 'B1', b2: 'B2' }, c: { c1: { c11: 'C11' }, c2: 'C2' }, d: 'D' };
        const testPattern = parts.string.trimBothEnds(`
          .a:[object String]:string
          .b.b1:[object String]:string
          .b.b2:[object String]:string
          .c.c1.c11:[object String]:string
          .c.c2:[object String]:string
          .d:[object String]:string
        `, ['\n', ' ']);
        // checkEqual(6, testPattern.split('\n').length);
        checkEqual(
          parts.array.map(testPattern.split('\n'),
            v => parts.string.trimFirst(v, [' ']),
          ).join('\n') + '\n',
          propertyList(object1),
        );
        checkEqual(false, parts.isModule(object1));
      });
    };

    test_has();

    test_copyProperty();
    test_inProperty();
    test_fixProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();

    test_isObjectParameter();

    test_ObjectEntries_standard();
    test_objectEntries();
    test_objectFromEntries();
    test_objectKeys();
    test_objectValues();

    test_propertyList();

  });
};

export default {
  test_execute_object,
};
