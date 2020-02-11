const test_execute_index = (parts) => {

  console.log(`parts.js version: ${parts.VERSION}`);
  console.log('test start');

  const { test_execute_root         } = require('./root/root.test.js');
  const { test_execute_type         } = require('./type/type.test.js');
  const { test_execute_syntax       } = require('./syntax/syntax.test.js');
  const { test_execute_test         } = require('./test/test.test.js');
  const { test_execute_compare      } = require('./compare/compare.test.js');
  const { test_execute_convert      } = require('./convert/convert.test.js');
  const { test_execute_number       } = require('./number/number.test.js');
  const { test_execute_string       } = require('./string/string.test.js');
  const { test_execute_object       } = require('./object/object.test.js');
  const { test_execute_array        } = require('./array/array.test.js');
  const { test_execute_consoleHook  } = require('./consoleHook/consoleHook.test.js');
  const { test_execute_other        } = require('./other/other.test.js');

  const test_execute_nameSpace = (parts) => {
    const { describe, it } = parts.test;
    describe('test_execute_nameSpace', () => {

      const { checkEqual } = parts.test;
      const { propertyCount, inProperty } = parts.object;

      it('test_execute_nameSpace 1', () => {

        checkEqual(235, propertyCount(parts));
        checkEqual(140, propertyCount(parts.type));
        checkEqual(9,   propertyCount(parts.test));
        checkEqual(20,  propertyCount(parts.compare));
        checkEqual(23,  propertyCount(parts.convert));
        checkEqual(7,   propertyCount(parts.number));
        checkEqual(6,   propertyCount(parts.string));
        checkEqual(12,  propertyCount(parts.object));
        checkEqual(28,  propertyCount(parts.array));
        checkEqual(true,
          inProperty(
            parts,
            'type,syntax,test,compare,convert,' +
            'string,object,consoleHook',
          ),
        );

      });

      it('test_execute_nameSpace 2', () => {
        checkEqual(true,
          inProperty(
            parts,
            'isUndefinedAll,isNotNullAll,' +
            'isFunc,isNotObj,' +
            'isThrown,isThrownValue,isThrownException,isNotThrown,' +
            'assert,guard,' +
            'sc,if_,switch_,' +
            'equal,or,' +
            'matchSome,matchSomeValue,initialValue,' +
            'numberToString,' +
            'stringToNumber,stringToInteger,' +
            'numToString,' +
            'strToNumber,strToInteger,' +
            'numToStr,' +
            'strToNum,strToInt,' +
            'matchFormat,' +
            'copyProperty,propertyCount,inProperty,' +
            'copyProp,propCount,inProp,' +
            'root',
          ),
        );

        checkEqual(false,
          inProperty(
            parts,
            'abc,' +
      '',
          ),
        );
      });
    });
  };


  const { describe } = parts.test;
  describe('test_execute_index', () => {

    test_execute_root(parts);
    test_execute_type(parts);
    test_execute_syntax(parts);
    test_execute_test(parts);
    test_execute_compare(parts);
    test_execute_convert(parts);
    test_execute_number(parts);
    test_execute_string(parts);
    test_execute_object(parts);
    test_execute_array(parts);
    test_execute_consoleHook(parts);
    test_execute_nameSpace(parts);
    test_execute_other(parts);

  });
};

module.exports = {
  test_execute_index,
};
