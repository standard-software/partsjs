/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_object = (parts) => {
  const { describe, it } = parts.test;
  describe('test_execute_object', () => {

    const {
      checkEqual,
      isThrown,
    } = parts.test;

    const {
      copyProperty, inProperty,
      propertyCount,
      getProperty, setProperty,
      isEmptyObjectAll,
      isObjectParameter,
      objectEntries,
    } = parts.object;

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
          propertyArray: 'a',
          toObject: destObject,
        });
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

        checkEqual(false, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(false, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,'));

        // Object Named Parameter
        checkEqual(true,
          inProperty({
            object: sourceObject,
            propertyPathArray: 'b,a',
          }),
        );
        checkEqual(false,
          inProperty({
            object: sourceObject,
            propertyPathArray: 'd',
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

        checkEqual(true,  inProperty(sourceObject, 'a' ));
        checkEqual(true,  inProperty(sourceObject, 'b' ));
        checkEqual(false, inProperty(sourceObject, 'c' ));
        checkEqual(false, inProperty(sourceObject, 'd' ));

        checkEqual(true,  inProperty(sourceObject, 'a,b' ));
        checkEqual(false, inProperty(sourceObject, 'b,c' ));
        checkEqual(false, inProperty(sourceObject, 'a,c' ));
        checkEqual(true,  inProperty(sourceObject, 'b,a' ));
        checkEqual(false, inProperty(sourceObject, 'a,d' ));

        checkEqual(false, inProperty(sourceObject, 'a,b,' ));
        checkEqual(false, inProperty(sourceObject, 'b,c,' ));
        checkEqual(false, inProperty(sourceObject, 'a,c,' ));
        checkEqual(false, inProperty(sourceObject, 'b,a,' ));
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

        checkEqual(false,  inProperty(sourceObject, 'a,b,', false));
        checkEqual(false,  inProperty(sourceObject, 'b,c,', false));
        checkEqual(false,  inProperty(sourceObject, 'a,c,', false));
        checkEqual(false,  inProperty(sourceObject, 'b,a,', false));
        checkEqual(false,  inProperty(sourceObject, 'a,d,', false));

        var sourceObject = {
          a: '1', b: '2', c: { d: { e: 'E' } },
        };
        checkEqual(true,  inProperty(sourceObject, 'a'));
        checkEqual(true,  inProperty(sourceObject, 'a,b'));
        checkEqual(true,  inProperty(sourceObject, 'a,b,c'));
        checkEqual(true,  inProperty(sourceObject, 'a,b,c.d'));
        checkEqual(true,  inProperty(sourceObject, 'a,b,c.d.e'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.f'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d..e'));
        checkEqual(false, inProperty(sourceObject, 'a,b,.d'));
        checkEqual(false, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'a,b,c.d.e,'));

      });
    };

    const test_propertyCount = () => {
      it('test_propertyCount', () => {
        checkEqual(3, propertyCount({
          a: '1', b: '2', c: '3',
        }));
        checkEqual(0, propertyCount({}));

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
        checkEqual(undefined, getProperty(testObj1, '.'       ) );
        checkEqual(undefined, getProperty(testObj1, '..'      ) );
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.'  ) );
        checkEqual(undefined, getProperty(testObj1, 'a.'      ) );
        checkEqual(undefined, getProperty(testObj1, '.a'      ) );
        checkEqual(undefined, getProperty(testObj1, 'a.c'     ) );
        checkEqual(undefined, getProperty(testObj1, 'b'       ) );
        checkEqual(undefined, getProperty(testObj1, 'b.c'     ) );
      });
    };

    const test_setProperty = () => {
      it('test_setProperty', () => {

        var testObj1 = {};
        setProperty(testObj1, 'a.b',    true);
        checkEqual(true, testObj1.a.b);
        setProperty(testObj1, 'a',      true);
        checkEqual(true, testObj1.a);
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
        checkEqual(true,  isThrown(() => setProperty(testObj1, '.a', true)));
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

        checkEqual([['a', '1'], ['b', '2'], ['c', '3']], Object.entries({a:'1', b:'2', c:'3'}));

      });
    };

    const test_objectEntries = () => {
      it('test_objectEntries', () => {

        checkEqual([['a', '1'], ['b', '2'], ['c', '3']], objectEntries({a:'1', b:'2', c:'3'}));

      });
    };

    test_copyProperty();
    test_inProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();

    test_isObjectParameter();

    test_ObjectEntries_standard();
    test_objectEntries();

  });
};

module.exports = {
  test_execute_object,
};
