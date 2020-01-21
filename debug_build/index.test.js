"use strict";

var test_execute_index = function test_execute_index(parts) {
  console.log("parts.js version: ".concat(parts.VERSION));
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

  var test_execute_nameSpace = function test_execute_nameSpace(parts) {
    var _parts$test = parts.test,
        describe = _parts$test.describe,
        it = _parts$test.it;
    describe(test_execute_nameSpace.name, function () {
      var checkEqual = parts.test.checkEqual;
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      it("".concat(test_execute_nameSpace.name, " 1"), function () {
        checkEqual(161, propertyCount(parts));
        checkEqual(64, propertyCount(parts.type));
        checkEqual(9, propertyCount(parts.test));
        checkEqual(20, propertyCount(parts.compare));
        checkEqual(23, propertyCount(parts.convert));
        checkEqual(7, propertyCount(parts.number));
        checkEqual(6, propertyCount(parts.string));
        checkEqual(14, propertyCount(parts.object));
        checkEqual(25, propertyCount(parts.array));
        checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'string,object,consoleHook'));
      });
      it("".concat(test_execute_nameSpace.name, " 2"), function () {
        checkEqual(true, inProperty(parts, 'isUndefined,isNotNull,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'matchSome,matchSomeValue,initialValue,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + ''));
        checkEqual(false, inProperty(parts, 'abc,' + ''));
      });
    });
  };

  if (parts.platform.wsh) {
    test_execute_index.name = 'test_execute_index';
    test_execute_root.name = 'test_execute_root';
    test_execute_type.name = 'test_execute_type';
    test_execute_syntax.name = 'test_execute_syntax';
    test_execute_test.name = 'test_execute_test';
    test_execute_compare.name = 'test_execute_compare';
    test_execute_convert.name = 'test_execute_convert';
    test_execute_number.name = 'test_execute_number';
    test_execute_string.name = 'test_execute_string';
    test_execute_object.name = 'test_execute_object';
    test_execute_array.name = 'test_execute_array';
    test_execute_consoleHook.name = 'test_execute_consoleHook';
    test_execute_nameSpace.name = 'test_execute_nameSpace';
  }

  var describe = parts.test.describe;
  describe(test_execute_index.name, function () {
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
  });
};

module.exports = {
  test_execute_index: test_execute_index
};