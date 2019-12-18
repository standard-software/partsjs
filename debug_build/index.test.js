"use strict";

var test_execute_index = function test_execute_index(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_index', function () {
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
      var _parts$test2 = parts.test,
          checkEqual = _parts$test2.checkEqual,
          describe = _parts$test2.describe,
          it = _parts$test2.it,
          test = _parts$test2.test;
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      describe('test_execute_nameSpace', function () {
        it('test_execute_nameSpace1', function () {
          checkEqual(149, propertyCount(parts));
          checkEqual(64, propertyCount(parts.type));
          checkEqual(8, propertyCount(parts.test));
          checkEqual(14, propertyCount(parts.compare));
          checkEqual(23, propertyCount(parts.convert));
          checkEqual(7, propertyCount(parts.number));
          checkEqual(3, propertyCount(parts.string));
          checkEqual(9, propertyCount(parts.object));
          checkEqual(6, propertyCount(parts.array));
          checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'string,object,consoleHook'));
        });
        it('test_execute_nameSpace2', function () {
          checkEqual(true, inProperty(parts, 'isUndefined,isNotNull,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'match,matchValue,initialValue,' + 'isEmpty,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + ''));
          checkEqual(false, inProperty(parts, 'abc,' + ''));
        });
      });
    };

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
  });
};

module.exports = {
  test_execute_index: test_execute_index
};