const test_execute_number = (parts) => {

  const {
    checkEqual,
    isThrown,
  } = parts.test;

  const {
    isMultiples,isEven,isOdd,
  } = parts.number;

  const test_isMultiples = () => {
    checkEqual(true,  isMultiples(10, 2));
    checkEqual(true,  isMultiples(10, 5));
    checkEqual(false, isMultiples(10, 3));
    checkEqual(false, isMultiples( 9, 2));
    checkEqual(false, isMultiples( 9, 5));
    checkEqual(true,  isMultiples( 9, 3));
  };

  console.log('  test number.js start.');
  test_isMultiples();
  console.log('  test number.js finish.');
}

module.exports = {
  test_execute_number,
};