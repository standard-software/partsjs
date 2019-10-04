const test_execute_index = (parts) => {

  const { test_execute_type     } = require('./type/type.test.js');
  const { test_execute_syntax   } = require('./syntax/syntax.test.js');
  const { test_execute_test     } = require('./test/test.test.js');
  const { test_execute_compare  } = require('./compare/compare.test.js');
  const { test_execute_convert  } = require('./convert/convert.test.js');
  const { test_execute_number   } = require('./number/number.test.js');
  const { test_execute_string   } = require('./string/string.test.js');
  const { test_execute_object   } = require('./object/object.test.js');
  const { test_execute_consoleHook  } = require('./consoleHook/consoleHook.test.js');

  const test_execute_nameSpace = (parts) => {
    const {
      checkEqual
    } = parts.test;

    const {
      copyProperty,propertyCount,inProperty,
    } = parts.object;

    checkEqual(122, propertyCount(parts));
    checkEqual(74,  propertyCount(parts.type));
    checkEqual(5,   propertyCount(parts.test));
    checkEqual(6,   propertyCount(parts.compare));
    checkEqual(9,   propertyCount(parts.convert));
    checkEqual(6,   propertyCount(parts.number));
    checkEqual(2,   propertyCount(parts.string));
    checkEqual(6,   propertyCount(parts.object));
    checkEqual(true,
      inProperty(
        parts,
        'type,syntax,test,compare,convert,string,object,consoleHook'
      )
    );

    checkEqual(true,
      inProperty(
        parts,
        'isUndefined,isNotNull,isBooleanArray,isNotNumberArray,' +
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
        'iscludes,' +
        ''
      )
    );
  }

  console.log('test start. ' + parts.VERSION);
  test_execute_type(parts);
  test_execute_syntax(parts);
  test_execute_test(parts);
  test_execute_compare(parts);
  test_execute_convert(parts);
  test_execute_number(parts);
  test_execute_string(parts);
  test_execute_object(parts);
  test_execute_consoleHook(parts);
  test_execute_nameSpace(parts);
  console.log('test finish.');
}

module.exports = {
  test_execute_index,
};