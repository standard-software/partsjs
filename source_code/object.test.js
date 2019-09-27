const test_execute_object = (parts) => {

  const {
    checkEqual,
    isThrown,
  } = parts.test;

  const {
    copyProperty, inProperty,
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
      a: '1', b: '2', c: '3'
    }
    checkEqual(true , inProperty(sourceObject, 'a'));
    checkEqual(true , inProperty(sourceObject, 'b'));
    checkEqual(true , inProperty(sourceObject, 'c'));
    checkEqual(false, inProperty(sourceObject, 'd'));

    checkEqual(true,  inProperty(sourceObject, 'a,b'));
    checkEqual(true,  inProperty(sourceObject, 'b,c'));
    checkEqual(true,  inProperty(sourceObject, 'a,c'));
    checkEqual(true,  inProperty(sourceObject, 'c,a'));
    checkEqual(false, inProperty(sourceObject, 'a,d'));

    checkEqual(true,  inProperty(sourceObject, 'a,b,'));
    checkEqual(true,  inProperty(sourceObject, 'b,c,'));
    checkEqual(true,  inProperty(sourceObject, 'a,c,'));
    checkEqual(true,  inProperty(sourceObject, 'c,a,'));
    checkEqual(false, inProperty(sourceObject, 'a,d,'));

    // parameter args
    checkEqual(true,
      inProperty({
        object: sourceObject,
        propertyArray: 'c,a,',
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

    checkEqual(true, isThrown(() => {
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


  };

  console.log('  test object.js start.');
  test_copyProperty();
  test_inProperty();
  console.log('  test object.js finish.');
}

module.exports = {
  test_execute_object,
};