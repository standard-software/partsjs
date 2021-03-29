import { test_execute_common      } from './common/common.test.js';
import { test_execute_type        } from './type/type.test.js';
import { test_execute_syntax      } from './syntax/syntax.test.js';
import { test_execute_test        } from './test/test.test.js';
import { test_execute_compare     } from './compare/compare.test.js';
import { test_execute_convert     } from './convert/convert.test.js';
import { test_execute_number      } from './number/number.test.js';
import { test_execute_string      } from './string/string.test.js';
import { test_execute_object      } from './object/object.test.js';
import { test_execute_array       } from './array/array.test.js';
import { test_execute_date        } from './date/date.test.js';
import { test_execute_consoleHook } from './system/consoleHook/consoleHook.test.js';
import { test_execute_other       } from './other/other.test.js';

export const test_execute_index = (parts) => {

  console.log(`parts.js version: ${parts.VERSION}`);

  console.log(`platform: ${parts.platform.platformName()}`);
  if (parts.platform.isWebBrowser()) {
    console.log(`  User Agent: ${window.navigator.userAgent}`);
  }
  console.log(`  buildMode: ${parts.platform.buildMode}`);
  console.log(`  testStartFileName: ${parts.platform.testStartFileName}`);
  console.log(`test start datetime: ${(new Date()).toString()}`);

  const test_execute_nameSpace = (parts) => {
    const { describe, it, checkEqual } = parts.test;
    describe('test_execute_nameSpace', () => {

      const { propertyCount, inProperty } = parts.object;

      it('test_execute_nameSpace 1', () => {

        const propertyCountForParts = (parts) => {
          let result = propertyCount(parts);
          if (parts.inProperty(parts, 'default')) {
            result -= 1;
          }
          if (parts.inProperty(parts, 'parts')) {
            result -= 1;
          }
          if (parts.platform.isWindowsScriptHost()) {
            if (parts.inProperty(parts, '__esModule')) {
              result -= 1;
            }
            // __esModule is "in" found but "for..in" or "Object.keys" not found
            // and WSH found
          }
          return result;
        };

        checkEqual(399, propertyCountForParts(parts));
        checkEqual(17,  propertyCount(parts.platform));
        checkEqual(7,   propertyCount(parts.common));
        checkEqual(262, propertyCount(parts.type));
        checkEqual(17,  propertyCount(parts.syntax));
        checkEqual(12,  propertyCount(parts.test));
        checkEqual(44,  propertyCount(parts.compare));
        checkEqual(35,  propertyCount(parts.convert));
        checkEqual(19,  propertyCount(parts.number));
        checkEqual(94,  propertyCount(parts.string));
        checkEqual(40,  propertyCount(parts.object));
        checkEqual(68,  propertyCount(parts.array));
        checkEqual(48,  propertyCount(parts.array.operation));
        checkEqual(24,  propertyCount(parts.date));
        checkEqual(2,   propertyCount(parts.system));
        checkEqual(3,   propertyCount(parts.system.wsh));
        checkEqual(20,  propertyCount(parts.system.consoleHook));

        checkEqual(true,
          inProperty(
            parts,
            'type,syntax,test,compare,convert,' +
            'number,string,object,array,date',
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
            'common',
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

  const test_execute_SelfReference = (parts) => {
    const { describe, it, checkEqual } = parts.test;
    describe('test_execute_SelfReference', () => {
      it('test_parts_SelfReference', () => {

        if (parts.isUndefined(parts.parts)) {
          return;
        }
        checkEqual(parts.VERSION, parts.parts.VERSION);

        if (parts.isModule(parts)) {
          return;
        }

        const parts1 = parts.cloneDeep(parts);
        delete parts1.parts;
        if (!parts.isUndefined(parts1.default)) {
          delete parts1.default;
        }
        if (!parts.isUndefined(parts1.__esModule)) {
          delete parts1.__esModule;
        }
        const parts2 = parts.cloneDeep(parts.parts);
        if (!parts2.isUndefined(parts2.parts)) {
          delete parts2.parts;
        }
        if (!parts.isUndefined(parts2.default)) {
          delete parts2.default;
        }
        if (!parts.isUndefined(parts2.__esModule)) {
          delete parts2.__esModule;
        }
        checkEqual(true,  parts.equalDeep(parts1, parts2));
      });
    });
  };

  const { describe, testFrame } = parts.test;
  testFrame.outputDescribe = false;
  describe('test_execute_index', () => {

    test_execute_common(parts);
    test_execute_type(parts);
    test_execute_syntax(parts);
    test_execute_test(parts);
    test_execute_compare(parts);
    test_execute_convert(parts);
    test_execute_number(parts);
    test_execute_string(parts);
    test_execute_object(parts);
    test_execute_array(parts);
    test_execute_date(parts);
    test_execute_other(parts);
    test_execute_consoleHook(parts);
    test_execute_nameSpace(parts);
    test_execute_SelfReference(parts);

    console.log('test finish');
  });
};

export default {
  test_execute_index,
};
