const test_execute_object = (parts) => {

  const {
    checkEqual,
    isThrown,
  } = parts.test;

  const {
    copyProperty
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
      propertyString: 'a',
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

  console.log('  test object.js start.');
  test_copyProperty();
  console.log('  test object.js finish.');
}

module.exports = {
  test_execute_object,
};