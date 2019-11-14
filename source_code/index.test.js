const test_execute_index = (parts) => {

  const { test_execute_root     } = require('./root/root.test.js');
  const { test_execute_type     } = require('./type/type.test.js');
  const { test_execute_syntax   } = require('./syntax/syntax.test.js');
  const { test_execute_test     } = require('./test/test.test.js');
  const { test_execute_compare  } = require('./compare/compare.test.js');
  const { test_execute_convert  } = require('./convert/convert.test.js');
  const { test_execute_number   } = require('./number/number.test.js');
  const { test_execute_string   } = require('./string/string.test.js');
  const { test_execute_object   } = require('./object/object.test.js');
  const { test_execute_array   } = require('./array/array.test.js');
  const { test_execute_consoleHook  } = require('./consoleHook/consoleHook.test.js');

  const test_execute_nameSpace = (parts) => {
    const {
      checkEqual
    } = parts.test;

    const {
      copyProperty, propertyCount, inProperty,
    } = parts.object;

    checkEqual(147, propertyCount(parts));
    checkEqual(64,  propertyCount(parts.type));
    checkEqual(5,   propertyCount(parts.test));
    checkEqual(14,  propertyCount(parts.compare));
    checkEqual(23,  propertyCount(parts.convert));
    checkEqual(7,   propertyCount(parts.number));
    checkEqual(3,   propertyCount(parts.string));
    checkEqual(9,   propertyCount(parts.object));
    checkEqual(3,   propertyCount(parts.array));
    checkEqual(true,
      inProperty(
        parts,
        'type,syntax,test,compare,convert,string,object,consoleHook'
      )
    );

    checkEqual(true,
      inProperty(
        parts,
        'isUndefined,isNotNull,' +
        'isFunc,isNotObj,' +
        'checkEqual,' +
        'isThrown,isThrownValue,isThrownException,isNotThrown,' +
        'assert,guard,' +
        'sc,if_,switch_,' +
        'equal,or,' +
        'match,matchValue,initialValue,' +
        'isEmpty,' +
        'numberToString,' +
        'stringToNumber,stringToInteger,' +
        'numToString,' +
        'strToNumber,strToInteger,' +
        'numToStr,' +
        'strToNum,strToInt,' +
        'matchFormat,' +
        'copyProperty,propertyCount,inProperty,' +
        'copyProp,propCount,inProp,' +
        ''
      )
    );

    checkEqual(false,
      inProperty(
        parts,
        'abc,' +
        ''
      )
    );
  }

  console.log('test start. ' + parts.VERSION);
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
}

module.exports = {
  test_execute_index,
};