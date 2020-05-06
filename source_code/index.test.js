const test_execute_index = (parts) => {

  console.log(`parts.js version: ${parts.VERSION}`);
  console.log(`platform: ${parts.platform.name()}`);
  if (parts.platform.isWebBrowser()) {
    console.log(`  web browser: ${parts.platform.browserName()}`);
    console.log(`  User Agent: ${window.navigator.userAgent}`);
  }
  if (parts.platform.buildMode !== '') {
    console.log(`  buildMode: ${parts.platform.buildMode}`);
  }
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

        const countArray = parts.platform.isWindowsScriptHost()
          ? [248, 13, 3, 140, 8, 11, 23, 29, 7, 7, 12, 33]
          : [248, 13, 3, 140, 8, 11, 23, 29, 7, 7, 12, 33];
        checkEqual(countArray.shift(),  propertyCount(parts));
        checkEqual(countArray.shift(),  propertyCount(parts.platform));
        checkEqual(countArray.shift(),  propertyCount(parts.root));
        checkEqual(countArray.shift(),  propertyCount(parts.type));
        checkEqual(countArray.shift(),  propertyCount(parts.syntax));
        checkEqual(countArray.shift(),  propertyCount(parts.test));
        checkEqual(countArray.shift(),  propertyCount(parts.compare));
        checkEqual(countArray.shift(),  propertyCount(parts.convert));
        checkEqual(countArray.shift(),  propertyCount(parts.number));
        checkEqual(countArray.shift(),  propertyCount(parts.string));
        checkEqual(countArray.shift(),  propertyCount(parts.object));
        checkEqual(countArray.shift(),  propertyCount(parts.array));
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
