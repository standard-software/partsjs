const test_execute_object = (parts) => {

  const {
    checkEqual,
    isThrown,
  } = parts.test;

  const {
    copyProperty, inProperty,
    propertyCount,
  } = parts.object;

  const test_copyProperty = () => {

    var sourceObject = {
      a: '1', b: '2', c: '3'
    }
    var destObject = {};
    copyProperty(sourceObject, 'a', destObject);
    checkEqual(true , 'a' in destObject);
    checkEqual(false, 'b' in destObject);
    checkEqual(false, 'c' in destObject);

    var destObject = {};
    copyProperty(sourceObject, 'a,b', destObject);
    checkEqual(true , 'a' in destObject);
    checkEqual(true , 'b' in destObject);
    checkEqual(false, 'c' in destObject);

    var destObject = {};
    copyProperty(sourceObject, 'a,c,', destObject);
    checkEqual(true , 'a' in destObject);
    checkEqual(false, 'b' in destObject);
    checkEqual(true , 'c' in destObject);

    // parameter args
    var destObject = {};
    copyProperty({
      fromObject: sourceObject,
      propertyArray: 'a',
      toObject: destObject
    });
    checkEqual(true , 'a' in destObject);
    checkEqual(false, 'b' in destObject);
    checkEqual(false, 'c' in destObject);

    // exception
    checkEqual(false, isThrown(() => {
      copyProperty({}, 'a', {})
    }));

    checkEqual(true, isThrown(() => {
      copyProperty(1, 'a', {})
    }));

    checkEqual(true, isThrown(() => {
      copyProperty({}, 1, {})
    }));

    checkEqual(true, isThrown(() => {
      copyProperty({}, 'a', 1)
    }));

  };

  const test_inProperty = () => {

    var sourceObject = {
      a: '1', b: '2',
    }
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
    checkEqual(true, inProperty(sourceObject, 'b,a,'));
    checkEqual(false, inProperty(sourceObject, 'a,d,'));

    // parameter args
    checkEqual(true,
      inProperty({
        object: sourceObject,
        propertyArray: 'b,a,',
      })
    );
    checkEqual(false,
      inProperty({
        object: sourceObject,
        propertyArray: 'd',
      })
    );

    // exception
    checkEqual(false, isThrown(() => {
      inProperty({}, 'a')
    }));

    checkEqual(false, isThrown(() => {
      inProperty(1, 'a')
    }));

    checkEqual(true, isThrown(() => {
      inProperty({}, 1)
    }));

    checkEqual(false, isThrown(() => {
      inProperty({}, ['a'])
    }));

    checkEqual(true, isThrown(() => {
      inProperty({}, [1])
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

    checkEqual(true,  inProperty(sourceObject, 'a', ));
    checkEqual(true,  inProperty(sourceObject, 'b', ));
    checkEqual(false, inProperty(sourceObject, 'c', ));
    checkEqual(false, inProperty(sourceObject, 'd', ));

    checkEqual(true,  inProperty(sourceObject, 'a,b', ));
    checkEqual(false, inProperty(sourceObject, 'b,c', ));
    checkEqual(false, inProperty(sourceObject, 'a,c', ));
    checkEqual(true,  inProperty(sourceObject, 'b,a', ));
    checkEqual(false, inProperty(sourceObject, 'a,d', ));

    checkEqual(true,  inProperty(sourceObject, 'a,b,', ));
    checkEqual(false, inProperty(sourceObject, 'b,c,', ));
    checkEqual(false, inProperty(sourceObject, 'a,c,', ));
    checkEqual(true,  inProperty(sourceObject, 'b,a,', ));
    checkEqual(false, inProperty(sourceObject, 'a,d,', ));

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

  };

  const test_propertyCount = () => {
    checkEqual(3, propertyCount({
      a: '1', b: '2', c: '3'
    }));
    checkEqual(0, propertyCount({}));

    // exception
    checkEqual(false, isThrown(() => {
      propertyCount({})
    }));
    checkEqual(true, isThrown(() => {
      propertyCount([])
    }));

  };

  console.log('  test object.js');
  test_copyProperty();
  test_inProperty();
  test_propertyCount();
}

module.exports = {
  test_execute_object,
};