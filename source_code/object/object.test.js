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
      isEmptyObject,
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

        // // エラー
        // // var path = '';      setProperty(testObj1, path, true); console.log(path, testObj1);
        // // var path = 'a.';    setProperty(testObj1, path, true); console.log(path, testObj1);
        // // var path = '.a';    setProperty(testObj1, path, true); console.log(path, testObj1);

        var testObj1 = { a: ['abc', { b: 'b' }] };
        checkEqual('abc', testObj1.a[0]);
        setProperty(testObj1, 'a.0', 'def');
        checkEqual('def', testObj1.a[0]);

        checkEqual('b', testObj1.a[1].b);
        setProperty(testObj1, 'a.1.b', 'c');
        checkEqual('c', testObj1.a[1].b);

      });
    };


    const test_isEmptyObject = () =>{
      it('test_isEmptyObject', () => {
        checkEqual(true,  isEmptyObject({}));
        checkEqual(false, isEmptyObject({a:1}));
      });

    };

    test_copyProperty();
    test_inProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();
    test_isEmptyObject();

  });
};

module.exports = {
  test_execute_object,
};
