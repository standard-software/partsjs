"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_index = void 0;

var _commonTest = require("./common/common.test.js");

var _typeTest = require("./type/type.test.js");

var _syntaxTest = require("./syntax/syntax.test.js");

var _testTest = require("./test/test.test.js");

var _compareTest = require("./compare/compare.test.js");

var _convertTest = require("./convert/convert.test.js");

var _numberTest = require("./number/number.test.js");

var _stringTest = require("./string/string.test.js");

var _objectTest = require("./object/object.test.js");

var _arrayTest = require("./array/array.test.js");

var _dateTest = require("./date/date.test.js");

var _consoleHookTest = require("./consoleHook/consoleHook.test.js");

var _otherTest = require("./other/other.test.js");

var test_execute_index = function test_execute_index(parts) {
  console.log("parts.js version: ".concat(parts.VERSION));
  console.log("platform: ".concat(parts.platform.name()));

  if (parts.platform.isWebBrowser()) {
    console.log("  web browser: ".concat(parts.platform.browserName()));
    console.log("  User Agent: ".concat(window.navigator.userAgent));
  }

  console.log("  buildMode: ".concat(parts.platform.buildMode));
  console.log("  startName: ".concat(parts.platform.startName));
  console.log('test start');

  var test_execute_nameSpace = function test_execute_nameSpace(parts) {
    var _parts$test = parts.test,
        describe = _parts$test.describe,
        it = _parts$test.it,
        checkEqual = _parts$test.checkEqual;
    describe('test_execute_nameSpace', function () {
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      it('test_execute_nameSpace 1', function () {
        var propertyCountForParts = function propertyCountForParts(parts) {
          var result = propertyCount(parts);

          if (parts.inProperty(parts, 'default')) {
            result -= 1;
          }

          if (parts.inProperty(parts, 'parts')) {
            result -= 1;
          }

          if (parts.platform.isWindowsScriptHost()) {
            if (parts.inProperty(parts, '__esModule')) {
              result -= 1;
            } // __esModule is "in" found but "for..in" or "Object.keys" not found
            // and WSH found

          }

          return result;
        };

        var countArray = [389, 19, 7, 259, 13, 11, 44, 35, 15, 90, 40, 68, 44, 1];
        checkEqual(countArray.shift(), propertyCountForParts(parts));
        checkEqual(countArray.shift(), propertyCount(parts.platform));
        checkEqual(countArray.shift(), propertyCount(parts.common));
        checkEqual(countArray.shift(), propertyCount(parts.type));
        checkEqual(countArray.shift(), propertyCount(parts.syntax));
        checkEqual(countArray.shift(), propertyCount(parts.test));
        checkEqual(countArray.shift(), propertyCount(parts.compare));
        checkEqual(countArray.shift(), propertyCount(parts.convert));
        checkEqual(countArray.shift(), propertyCount(parts.number));
        checkEqual(countArray.shift(), propertyCount(parts.string));
        checkEqual(countArray.shift(), propertyCount(parts.object));
        checkEqual(countArray.shift(), propertyCount(parts.array));
        checkEqual(countArray.shift(), propertyCount(parts.array.operation));
        checkEqual(countArray.shift(), propertyCount(parts.date));
        checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'number,string,object,array,date'));
      });
      it('test_execute_nameSpace 2', function () {
        checkEqual(true, inProperty(parts, 'isUndefinedAll,isNotNullAll,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'matchSome,matchSomeValue,initialValue,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + 'common'));
        checkEqual(false, inProperty(parts, 'abc,' + ''));
      });
    });
  };

  var test_execute_SelfReference = function test_execute_SelfReference(parts) {
    var _parts$test2 = parts.test,
        describe = _parts$test2.describe,
        it = _parts$test2.it,
        checkEqual = _parts$test2.checkEqual;
    describe('test_execute_SelfReference', function () {
      it('test_parts_SelfReference', function () {
        if (parts.isUndefined(parts.parts)) {
          return;
        }

        checkEqual(parts.VERSION, parts.parts.VERSION);

        if (parts.isModule(parts)) {
          return;
        }

        var parts1 = parts.cloneDeep(parts);
        delete parts1.parts;

        if (!parts.isUndefined(parts1["default"])) {
          delete parts1["default"];
        }

        if (!parts.isUndefined(parts1.__esModule)) {
          delete parts1.__esModule;
        }

        var parts2 = parts.cloneDeep(parts.parts);

        if (!parts2.isUndefined(parts2.parts)) {
          delete parts2.parts;
        }

        if (!parts.isUndefined(parts2["default"])) {
          delete parts2["default"];
        }

        if (!parts.isUndefined(parts2.__esModule)) {
          delete parts2.__esModule;
        }

        checkEqual(true, parts.equalDeep(parts1, parts2));
      });
    });
  };

  var describe = parts.test.describe;
  describe('test_execute_index', function () {
    (0, _commonTest.test_execute_common)(parts);
    (0, _typeTest.test_execute_type)(parts);
    (0, _syntaxTest.test_execute_syntax)(parts);
    (0, _testTest.test_execute_test)(parts);
    (0, _compareTest.test_execute_compare)(parts);
    (0, _convertTest.test_execute_convert)(parts);
    (0, _numberTest.test_execute_number)(parts);
    (0, _stringTest.test_execute_string)(parts);
    (0, _objectTest.test_execute_object)(parts);
    (0, _arrayTest.test_execute_array)(parts);
    (0, _dateTest.test_execute_date)(parts);
    (0, _otherTest.test_execute_other)(parts);
    test_execute_nameSpace(parts);
    test_execute_SelfReference(parts);
    console.log('test finish');
  });
};

exports.test_execute_index = test_execute_index;
var _default = {
  test_execute_index: test_execute_index
};
exports["default"] = _default;