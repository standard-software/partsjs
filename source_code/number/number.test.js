const test_execute_number = (parts) => {

  const {
    checkEqual,
    isThrown,
  } = parts.test;

  const {
    isMultiples,isEven,isOdd,
    round,nearEqual,
  } = parts.number;

  const test_isMultiples = () => {
    checkEqual(true,  isMultiples(10, 2));
    checkEqual(true,  isMultiples(10, 5));
    checkEqual(false, isMultiples(10, 3));
    checkEqual(false, isMultiples( 9, 2));
    checkEqual(false, isMultiples( 9, 5));
    checkEqual(true,  isMultiples( 9, 3));

    // parameter args
    checkEqual(true,  isMultiples({
      number: 10,
      radix: 2
    }));
    checkEqual(false,  isMultiples({
      number: 9,
      radix: 2
    }));

    // exception
    checkEqual(false, isThrown(() => {
      isMultiples(10, 2);
    }));
    checkEqual(true, isThrown(() => {
      isMultiples(10.1, 2);
    }));
    checkEqual(true, isThrown(() => {
      isMultiples(10, 2.2);
    }));
  };

  const test_round = () => {
    checkEqual(5,    round(5));
    checkEqual(5,    round(5.4));
    checkEqual(6,    round(5.5));
    checkEqual(5,    round(5,    0));
    checkEqual(5,    round(5.4,  0));
    checkEqual(6,    round(5.5,  0));
    checkEqual(5.4,  round(5.44, 1));
    checkEqual(5.5,  round(5.45, 1));
    checkEqual(5.5,  round(5.54, 1));
    checkEqual(5.6,  round(5.55, 1));
    checkEqual(5.04, round(5.044, 2));
    checkEqual(5.05, round(5.045, 2));
    checkEqual(5.05, round(5.054, 2));
    checkEqual(5.06, round(5.055, 2));
    checkEqual(540,  round(544, -1));
    checkEqual(550,  round(545, -1));
    checkEqual(550,  round(554, -1));
    checkEqual(560,  round(555, -1));
    checkEqual(5400, round(5440, -2));
    checkEqual(5500, round(5450, -2));
    checkEqual(5500, round(5540, -2));
    checkEqual(5600, round(5550, -2));

    checkEqual(-5,    round(-5));
    checkEqual(-5,    round(-5.4));
    checkEqual(-6,    round(-5.5));
    checkEqual(-5,    round(-5,    0));
    checkEqual(-5,    round(-5.4,  0));
    checkEqual(-6,    round(-5.5,  0));
    checkEqual(-5.4,  round(-5.44, 1));
    checkEqual(-5.5,  round(-5.45, 1));
    checkEqual(-5.5,  round(-5.54, 1));
    checkEqual(-5.6,  round(-5.55, 1));
    checkEqual(-5.04, round(-5.044, 2));
    checkEqual(-5.05, round(-5.045, 2));
    checkEqual(-5.05, round(-5.054, 2));
    checkEqual(-5.06, round(-5.055, 2));
    checkEqual(-540,  round(-544, -1));
    checkEqual(-550,  round(-545, -1));
    checkEqual(-550,  round(-554, -1));
    checkEqual(-560,  round(-555, -1));
    checkEqual(-5400, round(-5440, -2));
    checkEqual(-5500, round(-5450, -2));
    checkEqual(-5500, round(-5540, -2));
    checkEqual(-5600, round(-5550, -2));

    // parameter args
    checkEqual(6, round({
      value: 5.5,
    }));
    checkEqual(5.06, round({
      value: 5.055,
      digit: 2
    }));
    checkEqual(5600, round({
      value: 5550,
      digit: -2
    }));

    // exception
    checkEqual(false, isThrown(() => {
      round(5.5, 2);
    }));
    checkEqual(true, isThrown(() => {
      round(5.5, 2.2);
    }));
  };

  const test_nearEqual = () => {

    checkEqual(true,  nearEqual(0.049999,   0.050011,     0.001));
    checkEqual(true,  nearEqual(0.050,      0.051,        0.001));
    checkEqual(true,  nearEqual(0.050,      0.0509,       0.001));
    checkEqual(true,  nearEqual(0.050,      0.0510,       0.001));
    checkEqual(false, nearEqual(0.050,      0.051000001,  0.001));
    checkEqual(true,  nearEqual(0.050011,   0.049999,     0.001));
    checkEqual(true,  nearEqual(0.051,      0.050,        0.001));
    checkEqual(true,  nearEqual(0.0509,     0.050,        0.001));
    checkEqual(true,  nearEqual(0.0510,     0.050,        0.001));
    checkEqual(false, nearEqual(0.051000001,0.050,        0.001));

    // parameter args
    checkEqual(false, nearEqual({
      value1: 0.050,
      value2: 0.051000001,
      diff:  0.001
    }));
    checkEqual(true,  nearEqual({
      value1: 0.050011,
      value2: 0.049999,
      diff:  0.001
    }));

    // exception
    checkEqual(false, isThrown(() => { nearEqual(0.50, 0.51, 0.001)}));
    checkEqual(true,  isThrown(() => { nearEqual('0.50', 0.51, 0.001)}));
    checkEqual(true,  isThrown(() => { nearEqual(0.50, '0.51', 0.001)}));
    checkEqual(true,  isThrown(() => { nearEqual(0.50, 0.51, '0.001')}));
    checkEqual(true,  isThrown(() => { nearEqual(0.50, 0.51, -0.001)}));
  };

  console.log('  test number.js start.');
  test_isMultiples();
  test_round();
  test_nearEqual();
  console.log('  test number.js finish.');
}

module.exports = {
  test_execute_number,
};