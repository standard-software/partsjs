export const test_execute_other = (parts) => {
  const { checkEqual, describe, it, test } = parts.test;
  describe('test_execute_other', () => {

    const test_split = () => {
      it('test_split', () => {

        checkEqual(3,   'a,b,c'.split(',').length);
        checkEqual(4,   'a,b,c,'.split(',').length);
        checkEqual('a', 'a,b,c,'.split(',')[0]);
        checkEqual('',  'a,b,c,'.split(',')[3]);

      });
    };

    test_split();
  });
};

export default {
  test_execute_other,
};
