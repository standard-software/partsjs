"use strict";

var test_execute_index = function test_execute_index(parts) {
  console.log("parts.js version: ".concat(parts.VERSION));
  console.log("platform: ".concat(parts.platform.name()));

  if (parts.platform.isWebBrowser()) {
    console.log("  web browser: ".concat(parts.platform.browserName()));
    console.log("  User Agent: ".concat(window.navigator.userAgent));
  }

  if (parts.platform.buildMode !== '') {
    console.log("  buildMode: ".concat(parts.platform.buildMode));
  }

  console.log('test start');

  var _require = require('./root/root.test.js'),
      test_execute_root = _require.test_execute_root;

  var _require2 = require('./type/type.test.js'),
      test_execute_type = _require2.test_execute_type;

  var _require3 = require('./syntax/syntax.test.js'),
      test_execute_syntax = _require3.test_execute_syntax;

  var _require4 = require('./test/test.test.js'),
      test_execute_test = _require4.test_execute_test;

  var _require5 = require('./compare/compare.test.js'),
      test_execute_compare = _require5.test_execute_compare;

  var _require6 = require('./convert/convert.test.js'),
      test_execute_convert = _require6.test_execute_convert;

  var _require7 = require('./number/number.test.js'),
      test_execute_number = _require7.test_execute_number;

  var _require8 = require('./string/string.test.js'),
      test_execute_string = _require8.test_execute_string;

  var _require9 = require('./object/object.test.js'),
      test_execute_object = _require9.test_execute_object;

  var _require10 = require('./array/array.test.js'),
      test_execute_array = _require10.test_execute_array;

  var _require11 = require('./consoleHook/consoleHook.test.js'),
      test_execute_consoleHook = _require11.test_execute_consoleHook;

  var _require12 = require('./other/other.test.js'),
      test_execute_other = _require12.test_execute_other;

  var test_execute_nameSpace = function test_execute_nameSpace(parts) {
    var _parts$test = parts.test,
        describe = _parts$test.describe,
        it = _parts$test.it;
    describe('test_execute_nameSpace', function () {
      var checkEqual = parts.test.checkEqual;
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      it('test_execute_nameSpace 1', function () {
        var countArray = !parts.platform.isWindowsScriptHost() ? [240, 13, 3, 140, 6, 11, 23, 24, 7, 6, 12, 33] : [239, 13, 3, 140, 6, 11, 23, 23, 7, 6, 12, 33];
        checkEqual(countArray.shift(), propertyCount(parts));
        checkEqual(countArray.shift(), propertyCount(parts.platform));
        checkEqual(countArray.shift(), propertyCount(parts.root));
        checkEqual(countArray.shift(), propertyCount(parts.type));
        checkEqual(countArray.shift(), propertyCount(parts.syntax));
        checkEqual(countArray.shift(), propertyCount(parts.test));
        checkEqual(countArray.shift(), propertyCount(parts.compare));
        checkEqual(countArray.shift(), propertyCount(parts.convert));
        checkEqual(countArray.shift(), propertyCount(parts.number));
        checkEqual(countArray.shift(), propertyCount(parts.string));
        checkEqual(countArray.shift(), propertyCount(parts.object));
        checkEqual(countArray.shift(), propertyCount(parts.array));
        checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'string,object,consoleHook'));
      });
      it('test_execute_nameSpace 2', function () {
        checkEqual(true, inProperty(parts, 'isUndefinedAll,isNotNullAll,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'matchSome,matchSomeValue,initialValue,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + 'root'));
        checkEqual(false, inProperty(parts, 'abc,' + ''));
      });
    });
  };

  var describe = parts.test.describe;
  describe('test_execute_index', function () {
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
  test_execute_index: test_execute_index
};