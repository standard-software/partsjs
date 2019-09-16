const test_execute_string = (parts) => {

  const {
    checkEqual,
    isThrown,
    isThrownException,
  } = parts.test;

  const {
    matchFormat,
    includes,
  } = parts.string;

  const test_matchFormat = () => {
    checkEqual(true,  matchFormat('number', '123'));
    checkEqual(false, matchFormat('number', '12a'));
    checkEqual(false, matchFormat('number', '-123'));
    checkEqual(true,  matchFormat('integer', '-123'));

    // Parameter Args
    checkEqual(false, matchFormat({
      formatName: 'number',
      value: '-123'
    }));
    checkEqual(true,  matchFormat({
      formatName: 'integer',
      value: '-123'
    }));

    // Exception
    checkEqual(true, isThrownException(() => {
      matchFormat(null, 'abc');
    }, (new TypeError).name), 'test matchFormat exception');
    checkEqual(false, isThrownException(() => {
      matchFormat('integer', 'abc');
    }, (new TypeError).name), 'test matchFormat exception');
    checkEqual(true, isThrownException(() => {
      matchFormat('integer', 123);
    }, (new TypeError).name), 'test matchFormat exception');

  };

  const test_includes = () => {
    checkEqual(true, includes('abcdef', ['ab']));
    checkEqual(true, includes('abcdef', ['cd']));
    checkEqual(false, includes('abcdef', ['ac']));

    // Parameter Args
    checkEqual(true, includes({
      value: 'abcdef',
      compareArray: ['cd']
    }));
    checkEqual(false, includes({
      value: 'abcdef',
      compareArray: ['ac']
    }));
  };

  console.log('  test string.js start.');
  test_matchFormat();
  test_includes();
  console.log('  test string.js finish.');
}

module.exports = {
  test_execute_string,
};