/* eslint-disable max-len */
/* eslint-disable no-var */
const test_execute_number = (parts) => {
  const { describe, it } = parts.test;
  describe(test_execute_number.name, () => {

    const {
      checkEqual,
      isThrown,
    } = parts.test;

    const {
      isMultiples, isEven, isOdd,
      round, nearEqual, inRange, randomInt,
    } = parts.number;

    const test_isMultiples = () => {
      it(test_isMultiples.name, () => {
        checkEqual(true,  isMultiples(10, 2));
        checkEqual(true,  isMultiples(10, 5));
        checkEqual(false, isMultiples(10, 3));
        checkEqual(false, isMultiples( 9, 2));
        checkEqual(false, isMultiples( 9, 5));
        checkEqual(true,  isMultiples( 9, 3));

        // parameter args
        checkEqual(true,  isMultiples({
          number: 10,
          radix: 2,
        }));
        checkEqual(false,  isMultiples({
          number: 9,
          radix: 2,
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
      });
    };

    const test_Math_round = () => {
      it(test_Math_round.name, () => {
        checkEqual(5,    Math.round(5));
        checkEqual(5,    Math.round(5.4));
        checkEqual(6,    Math.round(5.5));

        checkEqual(-5,    Math.round(-5));
        checkEqual(-5,    Math.round(-5.4));
        checkEqual(-5,    Math.round(-5.5));
      });
    };

    const test_round = () => {
      it(test_round.name, () => {
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
          digit: 2,
        }));
        checkEqual(5600, round({
          value: 5550,
          digit: -2,
        }));

        // exception
        checkEqual(false, isThrown(() => {
          round(5.5, 2);
        }));
        checkEqual(true, isThrown(() => {
          round(5.5, 2.2);
        }));
      });
    };

    const test_nearEqual = () => {
      it(test_nearEqual.name, () => {

        checkEqual(true,  nearEqual(0.049999,   0.050011,     0.001));
        checkEqual(true,  nearEqual(0.050,      0.051,        0.001));
        checkEqual(true,  nearEqual(0.050,      0.0509,       0.001));
        checkEqual(true,  nearEqual(0.050,      0.0510,       0.001));
        checkEqual(false, nearEqual(0.050,      0.051000001,  0.001));
        checkEqual(true,  nearEqual(0.050011,   0.049999,     0.001));
        checkEqual(true,  nearEqual(0.051,      0.050,        0.001));
        checkEqual(true,  nearEqual(0.0509,     0.050,        0.001));
        checkEqual(true,  nearEqual(0.0510,     0.050,        0.001));
        checkEqual(false, nearEqual(0.05100001, 0.050,        0.001));

        // parameter args
        checkEqual(false, nearEqual({
          value1: 0.050,
          value2: 0.051000001,
          diff:  0.001,
        }));
        checkEqual(true,  nearEqual({
          value1: 0.050011,
          value2: 0.049999,
          diff:  0.001,
        }));

        // exception
        checkEqual(false, isThrown(() => { nearEqual( 0.50,  0.51,  0.001 ); }));
        checkEqual(true,  isThrown(() => { nearEqual('0.50', 0.51,  0.001 ); }));
        checkEqual(true,  isThrown(() => { nearEqual( 0.50, '0.51', 0.001 ); }));
        checkEqual(true,  isThrown(() => { nearEqual( 0.50,  0.51, '0.001'); }));
        checkEqual(true,  isThrown(() => { nearEqual( 0.50,  0.51, -0.001 ); }));
      });
    };

    const test_inRange = () => {
      it(test_inRange.name, () => {
        checkEqual(true,  inRange(20,     10,     30));
        checkEqual(true,  inRange(10,     10,     30));
        checkEqual(true,  inRange(30,     10,     30));
        checkEqual(false, inRange( 9,     10,     30));
        checkEqual(false, inRange(31,     10,     30));
        checkEqual(false, inRange( 9.99,  10,     30));
        checkEqual(false, inRange(30.01,  10,     30));

        // parameter args
        checkEqual(true,  inRange({
          value:  30,
          from:   10,
          to:     30,
        }));
        checkEqual(false,  inRange({
          value:  9,
          from:   10,
          to:     30,
        }));

        // exception
        checkEqual(false, isThrown(() => { inRange( 20,  10,  30  ); }));
        checkEqual(true,  isThrown(() => { inRange('20', 10,  30  ); }));
        checkEqual(true,  isThrown(() => { inRange( 20, '10', 30  ); }));
        checkEqual(true,  isThrown(() => { inRange( 20,  10, '30' ); }));
      });
    };

    const test_randomInt = () => {
      it(test_randomInt.name, () => {
        checkEqual(5,  randomInt(5, 5));
        var result = randomInt(1, 10);
        checkEqual(true, inRange(result, 1, 10));

        // parameter args
        checkEqual(10,  randomInt({
          min:  10,
          max:  10,
        }));

        // exception
        checkEqual(false, isThrown(() => { randomInt( 10,  10 ); }));
        checkEqual(true,  isThrown(() => { randomInt('10', 10 ); }));
        checkEqual(true,  isThrown(() => { randomInt( 10, '10'); }));
      });
    };

    test_isMultiples();
    test_Math_round();
    test_round();
    test_nearEqual();
    test_inRange();
    test_randomInt();
  });
};

module.exports = {
  test_execute_number,
};
