export const test_execute_date = (parts) => {
  const {
    describe,
    it,
    checkEqual,
    isThrown,
    isThrownException,
    testCounter,
  } = parts.test;

  const {
    Today,
  } = parts.date;

  describe('test_execute_date', () => {

    const test_Today = () => {
      it('test_Today', () => {
        checkEqual((new Date()).toString(), Today().toString());
      });
    };

    test_Today();

  });
};

export default {
  test_execute_date,
};
