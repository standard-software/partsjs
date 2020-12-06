/* eslint-disable new-cap */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable no-new-wrappers */
/* eslint-disable max-len */
/* eslint-disable no-var */
export const test_execute_type = (parts) => {
  const { checkEqual, describe, it, testCounter } = parts.test;
  describe('test_execute_type', () => {

    const { isThrown } = parts.test;

    const {
      typeName,
      isPrimitiveType,
      isReferenceType,

      isUndefined, isNull, isNaNStrict,
      isBoolean, isNumber, isInteger, isString,
      isFunction,
      isObject, isObjectNormal, isObjectFromNull,
      isObjectLike,
      isArray, isArraySeries,
      isDate, isRegExp,
      isException,
      isBooleanObject, isNumberObject, isStringObject,
      isEmptyObject, isEmptyArray,
      isSymbol,
      isMap, isWeakMap,
      isSet, isWeakSet,

      isNotUndefined, isNotNull, isNotNaNStrict,
      isNotBoolean, isNotNumber, isNotInteger, isNotString,
      isNotFunction,
      isNotObject, isNotObjectNormal, isNotObjectFromNull,
      isNotObjectType,
      isNotArray, isNotArrayType,
      isNotDate, isNotRegExp,
      isNotException,
      isNotBooleanObject, isNotNumberObject, isNotStringObject,
      isNotEmptyObject, isNotEmptyArray,
      isNotSymbol,
      isNotMap, isNotWeakMap,
      isNotSet, isNotWeakSet,

      isUndefinedAll, isNullAll, isNaNStrictAll,
      isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
      isFunctionAll,
      isObjectAll, isObjectNormalAll, isObjectFromNullAll,
      isObjectLikeAll,
      isArrayAll, isArraySeriesAll,
      isDateAll, isRegExpAll,
      isExceptionAll,
      isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,
      isEmptyObjectAll, isEmptyArrayAll,
      isSymbolAll,
      isMapAll, isWeakMapAll,
      isSetAll, isWeakSetAll,

      isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
      isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
      isNotFunctionAll,
      isNotObjectAll, isNotObjectNormalAll, isNotObjectFromNullAll,
      isNotObjectTypeAll,
      isNotArrayAll, isNotArrayTypeAll,
      isNotDateAll, isNotRegExpAll,
      isNotExceptionAll,
      isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,
      isNotEmptyObjectAll, isNotEmptyArrayAll,
      isNotSymbolAll,
      isNotMapAll, isNotWeakMapAll,
      isNotSetAll, isNotWeakSetAll,

      isUndefinedArray, isNullArray, isNaNStrictArray,
      isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
      isFunctionArray,
      isObjectArray, isObjectNormalArray, isObjectFromNullArray,
      isObjectLikeArray,
      isArrayArray, isArraySeriesArray,
      isDateArray, isRegExpArray,
      isExceptionArray,
      isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
      isEmptyObjectArray, isEmptyArrayArray,
      isSymbolArray,
      isMapArray, isWeakMapArray,
      isSetArray, isWeakSetArray,

      isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
      isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
      isNotFunctionArray,
      isNotObjectArray, isNotObjectNormalArray, isNotObjectFromNullArray,
      isNotObjectTypeArray,
      isNotArrayArray, isNotArrayTypeArray,
      isNotDateArray, isNotRegExpArray,
      isNotExceptionArray,
      isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,
      isNotEmptyObjectArray, isNotEmptyArrayArray,
      isNotSymbolArray,
      isNotMapArray, isNotWeakMapArray,
      isNotSetArray, isNotWeakSetArray,

    } = parts.type;

    const {
      allMatchSome,
    } = parts.compare;

    const {
      objectToString,
    } = parts;

    const test_checkType = () => {
      it('test_checkType', () => {

        const checkType = function(
          typeofName,
          objectStringName,
          value,
        ) {
          checkEqual(typeofName, typeof value);
          // checkEqual(true, parts.includes(objectStringName, objectToString(value)));
          checkEqual(objectStringName, objectToString(value));
        };

        if (parts.platform.isWindowsScriptHost()) {
          checkType('undefined', '[object Object]',     undefined);
          checkType('object',    '[object Object]',     null);
        } else if (parts.platform.isGasRhino()) {
          checkType('undefined', '[object Object]',     undefined);
          checkType('object',    '[object Object]',     null); // bad specification
        } else {
          checkType('undefined', '[object Undefined]',  undefined);
          checkType('object',    '[object Null]',       null); // bad specification
        }
        checkType('boolean',   '[object Boolean]',    true);
        checkType('boolean',   '[object Boolean]',    false);
        checkType('object',    '[object Boolean]',    new Boolean);
        checkType('number',    '[object Number]',     1);
        checkType('number',    '[object Number]',     NaN);
        checkType('number',    '[object Number]',     Infinity);
        checkType('object',    '[object Number]',     new Number(1));
        checkType('object',    '[object Number]',     new Number(NaN));
        checkType('object',    '[object Number]',     new Number(Infinity));
        checkType('object',    '[object Number]',     new Number(null));
        checkType('object',    '[object Number]',     new Number(undefined));
        checkType('string',    '[object String]',     '');
        checkType('string',    '[object String]',     '1');
        checkType('object',    '[object String]',     new String(''));
        checkType('object',    '[object String]',     new String('1'));
        checkType('object',    '[object String]',     new String(null));
        checkType('object',    '[object String]',     new String(undefined));
        function testFunc() {}
        checkType('function',  '[object Function]',   testFunc);
        checkType('function',  '[object Function]',   function() {});
        checkType('function',  '[object Function]',   (() => {}));
        checkType('object',    '[object Object]',     {});
        checkType('object',    '[object Object]',     new Object());
        checkType('object',    '[object Array]',      []);
        checkType('object',    '[object Array]',      new Array());
        checkType('object',    '[object RegExp]',     /^a/);
        checkType('object',    '[object RegExp]',     new RegExp('^a'));
        checkType('object',    '[object Date]',       new Date());
        checkType('object',    '[object Math]',       Math);

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else {
          checkType('object',    '[object JSON]',               JSON);
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkType('object',    '[object Int8Array]',          new Int8Array());
          checkType('object',    '[object Uint8Array]',         new Uint8Array());
          checkType('object',    '[object Uint8ClampedArray]',  new Uint8ClampedArray());
          checkType('object',    '[object Int16Array]',         new Int16Array());
          checkType('object',    '[object Uint16Array]',        new Uint16Array());
          checkType('object',    '[object Int32Array]',         new Int32Array());
          checkType('object',    '[object Uint32Array]',        new Uint32Array());
          checkType('object',    '[object Float32Array]',       new Float32Array());
          checkType('object',    '[object Float64Array]',       new Float64Array());
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
          checkType('object',    '[object Object]',             new Map());
          checkType('object',    '[object Object]',             new WeakMap());
          checkType('object',    '[object Object]',             new Set());
        } else {
          checkType('object',    '[object Map]',                new Map());
          checkType('object',    '[object WeakMap]',            new WeakMap());
          checkType('object',    '[object Set]',                new Set());
          checkType('object',    '[object WeakSet]',            new WeakSet());
          checkType('symbol',    '[object Symbol]',             Symbol());
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkType('object',    '[object ArrayBuffer]',        new ArrayBuffer(8));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkType('object',    '[object SharedArrayBuffer]', new SharedArrayBuffer(8));
          checkType('object',    '[object Atomics]', Atomics);
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
          checkType('object',    '[object Object]',             new DataView(new ArrayBuffer(16)));
        } else {
          checkType('object',    '[object DataView]',           new DataView(new ArrayBuffer(16)));
          checkType('function',  '[object Function]',           Promise);
        }

        if (parts.platform.isDeno()) {
          function* Generator() { yield 1; yield 2; yield 3; }
          var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
          var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
          checkType('object',     '[object Generator]',         Generator());
          checkType('function',   '[object GeneratorFunction]', new GeneratorFunction());
          checkType('function',   '[object AsyncFunction]',     new AsyncFunction());
        }

        // Proxy
        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkType('object',    '[object Object]',             new Proxy({}, {}));
        }

        // WebAssembly
        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
          checkType('object',    '[object Object]',             WebAssembly);
        } else {
          checkType('object',    '[object WebAssembly]',        WebAssembly);
        }

        // Reflect
        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkType('object',    '[object Reflect]',  Reflect);
        } else {
          checkType('object',    '[object Object]',   Reflect);
        }

        // Intl
        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isDeno()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkType('object',    '[object Intl]',   Intl);
        } else {
          checkType('object',    '[object Object]', Intl);
        }
      });
    };

    const test_typeName = () => {
      it('test_typeName', () => {

        checkEqual('Undefined',           typeName(undefined));
        checkEqual('Null',                typeName(null));

        checkEqual('Boolean',             typeName(true));
        checkEqual('Boolean',             typeName(false));
        checkEqual('BooleanObject',       typeName(new Boolean));

        checkEqual('Number',              typeName(1));
        checkEqual('NaN',                 typeName(NaN));
        checkEqual('Infinity',            typeName(Infinity));
        checkEqual('Infinity',            typeName(-Infinity));
        checkEqual('Infinity',            typeName(Infinity / 2));
        checkEqual('NaN',                 typeName(Infinity / Infinity));
        checkEqual('NumberObject',        typeName(new Number(0)));
        checkEqual('NumberObject',        typeName(new Number(1)));
        checkEqual('NumberObject',        typeName(new Number(NaN)));
        checkEqual('NumberObject',        typeName(new Number(Infinity)));
        checkEqual('NumberObject',        typeName(new Number(-Infinity)));
        checkEqual('NumberObject',        typeName(new Number('')));
        checkEqual('NumberObject',        typeName(new Number('0')));
        checkEqual('NumberObject',        typeName(new Number('1')));
        checkEqual('NumberObject',        typeName(new Number(null)));
        checkEqual('NumberObject',        typeName(new Number()));

        checkEqual('String',              typeName(''));
        checkEqual('String',              typeName('a'));
        checkEqual('StringObject',        typeName(new String('')));
        checkEqual('StringObject',        typeName(new String('a')));
        checkEqual('StringObject',        typeName(new String(1)));
        checkEqual('StringObject',        typeName(new String(null)));
        checkEqual('StringObject',        typeName(new String()));

        checkEqual('Object',              typeName({}));
        checkEqual('Object',              typeName(new Object()));
        checkEqual('Object',              typeName(new Object(null)));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('Object',            typeName(Object.create({})));
          checkEqual('Object',            typeName(Object.create({ a: 'A' })));
          checkEqual('ObjectFromNull',    typeName(Object.create(null)));
        }

        function testFunc() {}
        checkEqual('Function',            typeName(testFunc));
        checkEqual('Function',            typeName(function() {}));
        checkEqual('Function',            typeName(() => {}));

        checkEqual('Array',               typeName([]));
        checkEqual('Array',               typeName([0, 1, 2]));
        checkEqual('Array',               typeName(new Array()));

        checkEqual('RegExp',              typeName(/^a/));
        checkEqual('RegExp',              typeName(new RegExp('^a')));

        checkEqual('Date',                typeName(new Date()));

        checkEqual('Math',                typeName(Math));

        if (parts.platform.isWindowsScriptHost()) {
        } else {
          checkEqual('JSON',              typeName(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual('Int8Array',         typeName(new Int8Array()));
          checkEqual('Uint8Array',        typeName(new Uint8Array()));
          checkEqual('Uint8ClampedArray', typeName(new Uint8ClampedArray()));
          checkEqual('Int16Array',        typeName(new Int16Array()));
          checkEqual('Uint16Array',       typeName(new Uint16Array()));
          checkEqual('Int32Array',        typeName(new Int32Array()));
          checkEqual('Uint32Array',       typeName(new Uint32Array()));
          checkEqual('Float32Array',      typeName(new Float32Array()));
          checkEqual('Float64Array',      typeName(new Float64Array()));
          checkEqual('ArrayBuffer',       typeName(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual('Map',               typeName(new Map()));
          checkEqual('WeakMap',           typeName(new WeakMap()));
          checkEqual('Set',               typeName(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual('WeakSet',           typeName(new WeakSet()));
          checkEqual('Symbol',            typeName(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual('SharedArrayBuffer', typeName(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual('Atomics',           typeName(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual('Object',            typeName(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual('DataView',          typeName(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual('Function',          typeName(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isGasV8()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isNode()) {
        } else if (parts.platform.isChrome()) {
        } else if (parts.platform.isEdge()) {
        } else if (parts.platform.isFirefox()) {
        } else if (parts.platform.isOpera()) {
        } else if (parts.platform.isJest()) {
        } else {
          function* Generator() { yield 1; yield 2; yield 3; }
          var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
          var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
          checkEqual('Generator',         typeName(Generator()));
          checkEqual('GeneratorFunction', typeName(new GeneratorFunction()));
          checkEqual('AsyncFunction',     typeName(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual('Object',            typeName(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
          checkEqual('Object',            typeName(WebAssembly));
        } else {
          checkEqual('WebAssembly',       typeName(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual('Reflect',           typeName(Reflect));
        } else {
          checkEqual('Object',            typeName(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isDeno()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual('Intl',              typeName(Intl));
        } else {
          checkEqual('Object',            typeName(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual('Module',            typeName(parts));
        }

      });
    };

    const test_isObjectLike2 = () => {
      it('test_isObjectLike2', () => {

        checkEqual(false,                 isObjectLike(undefined));
        checkEqual(false,                 isObjectLike(null));

        checkEqual(false,                 isObjectLike(true));
        checkEqual(false,                 isObjectLike(false));
        checkEqual(true,                  isObjectLike(new Boolean));

        checkEqual(false,                 isObjectLike(1));
        checkEqual(false,                 isObjectLike(NaN));
        checkEqual(false,                 isObjectLike(Infinity));
        checkEqual(false,                 isObjectLike(-Infinity));
        checkEqual(false,                 isObjectLike(Infinity / 2));
        checkEqual(false,                 isObjectLike(Infinity / Infinity));
        checkEqual(true,                  isObjectLike(new Number(0)));
        checkEqual(true,                  isObjectLike(new Number(1)));
        checkEqual(true,                  isObjectLike(new Number(NaN)));
        checkEqual(true,                  isObjectLike(new Number(Infinity)));
        checkEqual(true,                  isObjectLike(new Number(-Infinity)));
        checkEqual(true,                  isObjectLike(new Number('')));
        checkEqual(true,                  isObjectLike(new Number('0')));
        checkEqual(true,                  isObjectLike(new Number('1')));
        checkEqual(true,                  isObjectLike(new Number(null)));
        checkEqual(true,                  isObjectLike(new Number()));

        checkEqual(false,                 isObjectLike(''));
        checkEqual(false,                 isObjectLike('a'));
        checkEqual(true,                  isObjectLike(new String('')));
        checkEqual(true,                  isObjectLike(new String('a')));
        checkEqual(true,                  isObjectLike(new String(1)));
        checkEqual(true,                  isObjectLike(new String(null)));
        checkEqual(true,                  isObjectLike(new String()));

        checkEqual(true,                  isObjectLike({}));
        checkEqual(true,                  isObjectLike(new Object()));
        checkEqual(true,                  isObjectLike(new Object(null)));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true,                isObjectLike(Object.create({})));
          checkEqual(true,                isObjectLike(Object.create({ a: 'A' })));
          checkEqual(true,                isObjectLike(Object.create(null)));
        }

        function testFunc() {}
        checkEqual(true,                  isObjectLike(testFunc));
        checkEqual(true,                  isObjectLike(function() {}));
        checkEqual(true,                  isObjectLike(() => {}));

        checkEqual(true,                  isObjectLike([]));
        checkEqual(true,                  isObjectLike([0, 1, 2]));
        checkEqual(true,                  isObjectLike(new Array()));

        checkEqual(true,                  isObjectLike(/^a/));
        checkEqual(true,                  isObjectLike(new RegExp('^a')));

        checkEqual(true,                  isObjectLike(new Date()));

        checkEqual(true,                  isObjectLike(Math));

        if (parts.platform.isWindowsScriptHost()) {
        } else {
          checkEqual(true,                isObjectLike(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual(true,                isObjectLike(new Int8Array()));
          checkEqual(true,                isObjectLike(new Uint8Array()));
          checkEqual(true,                isObjectLike(new Uint8ClampedArray()));
          checkEqual(true,                isObjectLike(new Int16Array()));
          checkEqual(true,                isObjectLike(new Uint16Array()));
          checkEqual(true,                isObjectLike(new Int32Array()));
          checkEqual(true,                isObjectLike(new Uint32Array()));
          checkEqual(true,                isObjectLike(new Float32Array()));
          checkEqual(true,                isObjectLike(new Float64Array()));
          checkEqual(true,                isObjectLike(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual(true,                isObjectLike(new Map()));
          checkEqual(true,                isObjectLike(new WeakMap()));
          checkEqual(true,                isObjectLike(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(true,                isObjectLike(new WeakSet()));
          checkEqual(false,               isObjectLike(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual(true,                isObjectLike(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual(true,                isObjectLike(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true,                isObjectLike(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(true,                isObjectLike(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(true,                isObjectLike(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isGasV8()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isNode()) {
        } else if (parts.platform.isChrome()) {
        } else if (parts.platform.isEdge()) {
        } else if (parts.platform.isFirefox()) {
        } else if (parts.platform.isOpera()) {
        } else if (parts.platform.isJest()) {
        } else {
          function* Generator() { yield 1; yield 2; yield 3; }
          var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
          var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
          checkEqual(true,                isObjectLike(Generator()));
          checkEqual(true,                isObjectLike(new GeneratorFunction()));
          checkEqual(true,                isObjectLike(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(true,                isObjectLike(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
          checkEqual(true,                isObjectLike(WebAssembly));
        } else {
          checkEqual(true,                isObjectLike(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual(true,                isObjectLike(Reflect));
        } else {
          checkEqual(true,                isObjectLike(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isDeno()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual(true,                isObjectLike(Intl));
        } else {
          checkEqual(true,                isObjectLike(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(true,                isObjectLike(parts));
        }

      });
    };

    const test_isPrimitiveType = () => {
      it('test_isPrimitiveType', () => {

        checkEqual(true,                   isPrimitiveType(undefined));
        checkEqual(true,                   isPrimitiveType(null));

        checkEqual(true,                   isPrimitiveType(true));
        checkEqual(true,                   isPrimitiveType(false));
        checkEqual(false,                  isPrimitiveType(new Boolean));

        checkEqual(true,                   isPrimitiveType(1));
        checkEqual(true,                   isPrimitiveType(NaN));
        checkEqual(true,                   isPrimitiveType(Infinity));
        checkEqual(true,                   isPrimitiveType(-Infinity));
        checkEqual(true,                   isPrimitiveType(Infinity / 2));
        checkEqual(true,                   isPrimitiveType(Infinity / Infinity));
        checkEqual(false,                  isPrimitiveType(new Number(0)));
        checkEqual(false,                  isPrimitiveType(new Number(1)));
        checkEqual(false,                  isPrimitiveType(new Number(NaN)));
        checkEqual(false,                  isPrimitiveType(new Number(Infinity)));
        checkEqual(false,                  isPrimitiveType(new Number(-Infinity)));
        checkEqual(false,                  isPrimitiveType(new Number('')));
        checkEqual(false,                  isPrimitiveType(new Number('0')));
        checkEqual(false,                  isPrimitiveType(new Number('1')));
        checkEqual(false,                  isPrimitiveType(new Number(null)));
        checkEqual(false,                  isPrimitiveType(new Number()));

        checkEqual(true,                   isPrimitiveType(''));
        checkEqual(true,                   isPrimitiveType('a'));
        checkEqual(false,                  isPrimitiveType(new String('')));
        checkEqual(false,                  isPrimitiveType(new String('a')));
        checkEqual(false,                  isPrimitiveType(new String(1)));
        checkEqual(false,                  isPrimitiveType(new String(null)));
        checkEqual(false,                  isPrimitiveType(new String()));

        checkEqual(false,                  isPrimitiveType({}));
        checkEqual(false,                  isPrimitiveType(new Object()));
        checkEqual(false,                  isPrimitiveType(new Object(null)));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false,                isPrimitiveType(Object.create({})));
          checkEqual(false,                isPrimitiveType(Object.create({ a: 'A' })));
          checkEqual(false,                isPrimitiveType(Object.create(null)));
        }

        function testFunc() {}
        checkEqual(false,                  isPrimitiveType(testFunc));
        checkEqual(false,                  isPrimitiveType(function() {}));
        checkEqual(false,                  isPrimitiveType(() => {}));

        checkEqual(false,                  isPrimitiveType([]));
        checkEqual(false,                  isPrimitiveType([0, 1, 2]));
        checkEqual(false,                  isPrimitiveType(new Array()));

        checkEqual(false,                  isPrimitiveType(/^a/));
        checkEqual(false,                  isPrimitiveType(new RegExp('^a')));

        checkEqual(false,                  isPrimitiveType(new Date()));

        checkEqual(false,                  isPrimitiveType(Math));

        if (parts.platform.isWindowsScriptHost()) {
        } else {
          checkEqual(false,                isPrimitiveType(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual(false,                isPrimitiveType(new Int8Array()));
          checkEqual(false,                isPrimitiveType(new Uint8Array()));
          checkEqual(false,                isPrimitiveType(new Uint8ClampedArray()));
          checkEqual(false,                isPrimitiveType(new Int16Array()));
          checkEqual(false,                isPrimitiveType(new Uint16Array()));
          checkEqual(false,                isPrimitiveType(new Int32Array()));
          checkEqual(false,                isPrimitiveType(new Uint32Array()));
          checkEqual(false,                isPrimitiveType(new Float32Array()));
          checkEqual(false,                isPrimitiveType(new Float64Array()));
          checkEqual(false,                isPrimitiveType(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual(false,                isPrimitiveType(new Map()));
          checkEqual(false,                isPrimitiveType(new WeakMap()));
          checkEqual(false,                isPrimitiveType(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(false,                isPrimitiveType(new WeakSet()));
          checkEqual(true,                 isPrimitiveType(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual(false,                isPrimitiveType(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual(false,                isPrimitiveType(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(false,                isPrimitiveType(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(false,                isPrimitiveType(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(false,                isPrimitiveType(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isGasV8()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isNode()) {
        } else if (parts.platform.isChrome()) {
        } else if (parts.platform.isEdge()) {
        } else if (parts.platform.isFirefox()) {
        } else if (parts.platform.isOpera()) {
        } else if (parts.platform.isJest()) {
        } else {
          function* Generator() { yield 1; yield 2; yield 3; }
          var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
          var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
          checkEqual(false,                isPrimitiveType(Generator()));
          checkEqual(false,                isPrimitiveType(new GeneratorFunction()));
          checkEqual(false,                isPrimitiveType(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(false,                isPrimitiveType(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
          checkEqual(false,                isPrimitiveType(WebAssembly));
        } else {
          checkEqual(false,                isPrimitiveType(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual(false,                isPrimitiveType(Reflect));
        } else {
          checkEqual(false,                isPrimitiveType(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isDeno()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual(false,                isPrimitiveType(Intl));
        } else {
          checkEqual(false,                isPrimitiveType(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(false,                isPrimitiveType(parts));
        }

      });
    };

    const test_isReferenceType = () => {
      it('test_isReferenceType', () => {
        // return value exactly matches isObjectLike

        checkEqual(false,                 isReferenceType(undefined));
        checkEqual(false,                 isReferenceType(null));

        checkEqual(false,                 isReferenceType(true));
        checkEqual(false,                 isReferenceType(false));
        checkEqual(true,                  isReferenceType(new Boolean));

        checkEqual(false,                 isReferenceType(1));
        checkEqual(false,                 isReferenceType(NaN));
        checkEqual(false,                 isReferenceType(Infinity));
        checkEqual(false,                 isReferenceType(-Infinity));
        checkEqual(false,                 isReferenceType(Infinity / 2));
        checkEqual(false,                 isReferenceType(Infinity / Infinity));
        checkEqual(true,                  isReferenceType(new Number(0)));
        checkEqual(true,                  isReferenceType(new Number(1)));
        checkEqual(true,                  isReferenceType(new Number(NaN)));
        checkEqual(true,                  isReferenceType(new Number(Infinity)));
        checkEqual(true,                  isReferenceType(new Number(-Infinity)));
        checkEqual(true,                  isReferenceType(new Number('')));
        checkEqual(true,                  isReferenceType(new Number('0')));
        checkEqual(true,                  isReferenceType(new Number('1')));
        checkEqual(true,                  isReferenceType(new Number(null)));
        checkEqual(true,                  isReferenceType(new Number()));

        checkEqual(false,                 isReferenceType(''));
        checkEqual(false,                 isReferenceType('a'));
        checkEqual(true,                  isReferenceType(new String('')));
        checkEqual(true,                  isReferenceType(new String('a')));
        checkEqual(true,                  isReferenceType(new String(1)));
        checkEqual(true,                  isReferenceType(new String(null)));
        checkEqual(true,                  isReferenceType(new String()));

        checkEqual(true,                  isReferenceType({}));
        checkEqual(true,                  isReferenceType(new Object()));
        checkEqual(true,                  isReferenceType(new Object(null)));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true,                isReferenceType(Object.create({})));
          checkEqual(true,                isReferenceType(Object.create({ a: 'A' })));
          checkEqual(true,                isReferenceType(Object.create(null)));
        }

        function testFunc() {}
        checkEqual(true,                  isReferenceType(testFunc));
        checkEqual(true,                  isReferenceType(function() {}));
        checkEqual(true,                  isReferenceType(() => {}));

        checkEqual(true,                  isReferenceType([]));
        checkEqual(true,                  isReferenceType([0, 1, 2]));
        checkEqual(true,                  isReferenceType(new Array()));

        checkEqual(true,                  isReferenceType(/^a/));
        checkEqual(true,                  isReferenceType(new RegExp('^a')));

        checkEqual(true,                  isReferenceType(new Date()));

        checkEqual(true,                  isReferenceType(Math));

        if (parts.platform.isWindowsScriptHost()) {
        } else {
          checkEqual(true,                isReferenceType(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual(true,                isReferenceType(new Int8Array()));
          checkEqual(true,                isReferenceType(new Uint8Array()));
          checkEqual(true,                isReferenceType(new Uint8ClampedArray()));
          checkEqual(true,                isReferenceType(new Int16Array()));
          checkEqual(true,                isReferenceType(new Uint16Array()));
          checkEqual(true,                isReferenceType(new Int32Array()));
          checkEqual(true,                isReferenceType(new Uint32Array()));
          checkEqual(true,                isReferenceType(new Float32Array()));
          checkEqual(true,                isReferenceType(new Float64Array()));
          checkEqual(true,                isReferenceType(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else {
          checkEqual(true,                isReferenceType(new Map()));
          checkEqual(true,                isReferenceType(new WeakMap()));
          checkEqual(true,                isReferenceType(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(true,                isReferenceType(new WeakSet()));
          checkEqual(false,               isReferenceType(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual(true,                isReferenceType(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
        } else {
          checkEqual(true,                isReferenceType(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true,                isReferenceType(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(true,                isReferenceType(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(true,                isReferenceType(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isGasV8()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isNode()) {
        } else if (parts.platform.isChrome()) {
        } else if (parts.platform.isEdge()) {
        } else if (parts.platform.isFirefox()) {
        } else if (parts.platform.isOpera()) {
        } else if (parts.platform.isJest()) {
        } else {
          function* Generator() { yield 1; yield 2; yield 3; }
          var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
          var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
          checkEqual(true,                isReferenceType(Generator()));
          checkEqual(true,                isReferenceType(new GeneratorFunction()));
          checkEqual(true,                isReferenceType(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else {
          checkEqual(true,                isReferenceType(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isFirefox()) {
          checkEqual(true,                isReferenceType(WebAssembly));
        } else {
          checkEqual(true,                isReferenceType(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isInternetExplorer()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual(true,                isReferenceType(Reflect));
        } else {
          checkEqual(true,                isReferenceType(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {
        } else if (parts.platform.isGasRhino()) {
        } else if (parts.platform.isDeno()) {
        } else if (parts.platform.isChrome()
        || parts.platform.isEdge()
        || parts.platform.isFirefox()
        || parts.platform.isOpera()
        ) {
          checkEqual(true,                isReferenceType(Intl));
        } else {
          checkEqual(true,                isReferenceType(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(true,                isReferenceType(parts));
        }

      });
    };

    const test_isUndefinedAll = function() {
      it('test_isUndefinedAll', () => {

        var u1;
        var n1 = null;
        var v1 = 1;

        checkEqual(true,  isUndefinedAll(u1));
        checkEqual(false, isUndefinedAll(n1));
        checkEqual(false, isUndefinedAll(v1));
        checkEqual(true,  isUndefinedArray([u1]));
        checkEqual(false, isUndefinedArray([n1]));
        checkEqual(false, isUndefinedArray([v1]));

        checkEqual(true,  isUndefinedAll(u1, u1));
        checkEqual(false, isUndefinedAll(u1, n1));
        checkEqual(false, isUndefinedAll(u1, v1));
        checkEqual(true,  isUndefinedArray([u1, u1]));
        checkEqual(false, isUndefinedArray([u1, n1]));
        checkEqual(false, isUndefinedArray([u1, v1]));

        checkEqual(false, isNotUndefinedAll(u1));
        checkEqual(true,  isNotUndefinedAll(n1));
        checkEqual(true,  isNotUndefinedAll(v1));
        checkEqual(false, isNotUndefinedArray([u1]));
        checkEqual(true,  isNotUndefinedArray([n1]));
        checkEqual(true,  isNotUndefinedArray([v1]));

        checkEqual(false, isNotUndefinedAll(u1, u1));
        checkEqual(false, isNotUndefinedAll(u1, n1));
        checkEqual(true,  isNotUndefinedAll(n1, n1));
        checkEqual(false, isNotUndefinedAll(n1, u1));
        checkEqual(true,  isNotUndefinedAll(v1, v1));
        checkEqual(true,  isNotUndefinedAll(v1, n1));
        checkEqual(false, isNotUndefinedAll(v1, u1));
        checkEqual(false, isNotUndefinedArray([u1, u1]));
        checkEqual(false, isNotUndefinedArray([u1, n1]));
        checkEqual(true,  isNotUndefinedArray([n1, n1]));
        checkEqual(false, isNotUndefinedArray([n1, u1]));
        checkEqual(true,  isNotUndefinedArray([v1, v1]));
        checkEqual(true,  isNotUndefinedArray([v1, n1]));
        checkEqual(false, isNotUndefinedArray([v1, u1]));

        checkEqual(false, isUndefinedAll([v1, v1]));
        checkEqual(false, isUndefinedAll([u1, u1]));
        checkEqual(true,  isNotUndefinedAll([v1, v1]));
        checkEqual(true,  isNotUndefinedAll([u1, u1]));
      });
    };

    const test_isNull = function() {
      it('test_isNull', () => {

        var u1;
        var n1 = null;
        var v1 = 1;

        checkEqual(false, isNullAll(u1));
        checkEqual(true, isNullAll(n1));
        checkEqual(false, isNullAll(v1));
        checkEqual(false, isNullArray([u1]));
        checkEqual(true, isNullArray([n1]));
        checkEqual(false, isNullArray([v1]));

        checkEqual(true, isNullAll(n1, n1));
        checkEqual(false, isNullAll(n1, u1));
        checkEqual(false, isNullAll(n1, v1));
        checkEqual(true, isNullArray([n1, n1]));
        checkEqual(false, isNullArray([n1, u1]));
        checkEqual(false, isNullArray([n1, v1]));

        checkEqual(true, isNotNullAll(u1));
        checkEqual(false, isNotNullAll(n1));
        checkEqual(true, isNotNullAll(v1));
        checkEqual(true, isNotNullArray([u1]));
        checkEqual(false, isNotNullArray([n1]));
        checkEqual(true, isNotNullArray([v1]));

        checkEqual(true, isNotNullAll(u1, u1));
        checkEqual(false, isNotNullAll(u1, n1));
        checkEqual(false, isNotNullAll(n1, n1));
        checkEqual(false, isNotNullAll(n1, u1));
        checkEqual(true, isNotNullAll(v1, v1));
        checkEqual(false, isNotNullAll(v1, n1));
        checkEqual(true, isNotNullAll(v1, u1));
        checkEqual(true, isNotNullArray([u1, u1]));
        checkEqual(false, isNotNullArray([u1, n1]));
        checkEqual(false, isNotNullArray([n1, n1]));
        checkEqual(false, isNotNullArray([n1, u1]));
        checkEqual(true, isNotNullArray([v1, v1]));
        checkEqual(false, isNotNullArray([v1, n1]));
        checkEqual(true, isNotNullArray([v1, u1]));
      });
    };

    const test_isBoolean = function() {
      it('test_isBoolean', () => {

        checkEqual(true,  isBoolean(true));
        checkEqual(true,  isBoolean(false));
        checkEqual(false, isBoolean(undefined));
        checkEqual(false, isBoolean(null));
        checkEqual(false, isBoolean(''));
        checkEqual(false, isBoolean('aaa'));
        checkEqual(false, isBoolean(123));
        checkEqual(false, isBoolean(0));
        checkEqual(false, isBoolean(-1));
        checkEqual(false, isBoolean([]));
        checkEqual(false, isBoolean({}));

        checkEqual(true,  isBooleanAll(true, true));
        checkEqual(true,  isBooleanAll(true, false));
        checkEqual(false, isBooleanAll(true, 1));
        checkEqual(false, isBooleanAll(true, {}));
        checkEqual(false, isBooleanAll(true, []));
        checkEqual(false, isBooleanAll(true, null));
        checkEqual(false, isBooleanAll(true, undefined));
        checkEqual(false, isBooleanAll(true, ''));

        checkEqual(true,  isBooleanArray([true, true]));
        checkEqual(true,  isBooleanArray([true, false]));
        checkEqual(false, isBooleanArray([true, 1]));
        checkEqual(false, isBooleanArray([true, {}]));
        checkEqual(false, isBooleanArray([true, []]));
        checkEqual(false, isBooleanArray([true, null]));
        checkEqual(false, isBooleanArray([true, undefined]));
        checkEqual(false, isBooleanArray([true, '']));

        // boolean object
        checkEqual(false, isBoolean(new Boolean()));
        checkEqual(false, isBoolean(new Boolean(0)));
        checkEqual(false, isBoolean(new Boolean(1)));
        checkEqual(false, isBoolean(new Boolean(true)));
        checkEqual(false, isBoolean(new Boolean(false)));
        checkEqual(false, isBoolean(new Boolean('')));
        checkEqual(false, isBoolean(new Boolean('a')));
        checkEqual(false, isBoolean(new Boolean([])));
        checkEqual(false, isBoolean(new Boolean({})));

        checkEqual(true,  isBooleanObject(new Boolean()));
        checkEqual(true,  isBooleanObject(new Boolean(0)));
        checkEqual(true,  isBooleanObject(new Boolean(1)));
        checkEqual(true,  isBooleanObject(new Boolean(true)));
        checkEqual(true,  isBooleanObject(new Boolean(false)));
        checkEqual(true,  isBooleanObject(new Boolean('')));
        checkEqual(true,  isBooleanObject(new Boolean('a')));
        checkEqual(true,  isBooleanObject(new Boolean([])));
        checkEqual(true,  isBooleanObject(new Boolean({})));

        checkEqual(false, isBooleanObject(true));
        checkEqual(false, isBooleanObject(false));
        checkEqual(false, isBooleanObject(undefined));
        checkEqual(false, isBooleanObject(null));
        checkEqual(false, isBooleanObject(''));
        checkEqual(false, isBooleanObject('aaa'));
        checkEqual(false, isBooleanObject(123));
        checkEqual(false, isBooleanObject(0));
        checkEqual(false, isBooleanObject(-1));
        checkEqual(false, isBooleanObject([]));
        checkEqual(false, isBooleanObject({}));
      });
    };

    const test_isNumber = function() {
      it('test_isNumber', () => {

        checkEqual(true, isNumberAll(123));
        checkEqual(true, isNumberAll(0));
        checkEqual(true, isNumberAll(-1));
        checkEqual(true, isNumberAll(123.4));
        checkEqual(true, isNumberAll(123.0));
        checkEqual(false, isNumberAll(true));
        checkEqual(false, isNumberAll(false));
        checkEqual(false, isNumberAll(null));
        checkEqual(false, isNumberAll(undefined));
        checkEqual(false, isNumberAll(Infinity));  // Infinity is not number
        checkEqual(false, isNumberAll(NaN));
        checkEqual(false, isNumberAll(''));
        checkEqual(false, isNumberAll('ABC'));
        checkEqual(false, isNumberAll('ABC10'));
        checkEqual(false, isNumberAll('10ABC'));
        checkEqual(false, isNumberAll('0ABC'));
        checkEqual(false, isNumberAll('0'));
        checkEqual(false, isNumberAll('5'));
        checkEqual(false, isNumberAll('-5'));
        checkEqual(false, isNumberAll('100'));
        checkEqual(false, isNumberAll('-100'));
        checkEqual(false, isNumberAll([]));
        checkEqual(false, isNumberAll({}));

        checkEqual(false, isNotNumberAll(123));
        checkEqual(false, isNotNumberAll(0));
        checkEqual(true, isNotNumberAll(true));
        checkEqual(true, isNotNumberAll(null));
        checkEqual(true, isNotNumberAll(undefined));
        checkEqual(true, isNotNumberAll(Infinity));
        checkEqual(true, isNotNumberAll(NaN));
        checkEqual(true, isNotNumberAll(''));

        checkEqual(true, isNumberAll(1, 2));
        checkEqual(true, isNumberAll(3, 4, 5));
        checkEqual(true, isNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNumberAll(1, 2, true));

        checkEqual(false, isNotNumberAll(1, 2));
        checkEqual(false, isNotNumberAll(3, 4, 5));
        checkEqual(false, isNotNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNotNumberAll(1, 2, true));
        checkEqual(true, isNotNumberAll(false, true));
        checkEqual(true, isNotNumberAll('a', 'b'));

        checkEqual(false, isNumberAll([1, 2]));

        checkEqual(true, isNumberArray([1, 2]));
        checkEqual(true, isNumberArray([3, 4, 5]));
        checkEqual(true, isNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNumberArray([1, 2, true]));

        checkEqual(false, isNotNumberArray([1, 2]));
        checkEqual(false, isNotNumberArray([3, 4, 5]));
        checkEqual(false, isNotNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNotNumberArray([1, 2, true]));
        checkEqual(true, isNotNumberArray([false, true]));
        checkEqual(true, isNotNumberArray(['a', 'b']));

        checkEqual(0,   Number(new Number()));
        checkEqual(0,   Number(new Number('')));
        checkEqual(0,   Number(new Number(' ')));
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN,   Number(new Number('　')));
        } else {
          checkEqual(0,   Number(new Number('　')));
        }
        checkEqual(1,   Number(new Number('1')));
        checkEqual(1.1, Number(new Number('1.1')));
        checkEqual(NaN,       Number(new Number(NaN)));
        checkEqual(Infinity,  Number(new Number(Infinity)));
        checkEqual(NaN,       Number(new Number(undefined)));
        checkEqual(0,         Number(new Number(null)));

        checkEqual(false, isNumberAll(new Number()));
        checkEqual(false, isNumberAll(new Number('')));
        checkEqual(false, isNumberAll(new Number('1')));
        checkEqual(false, isNumberAll(new Number('1.1')));
        checkEqual(true,  isNumberObjectAll(new Number()));
        checkEqual(true,  isNumberObjectAll(new Number('')));
        checkEqual(true,  isNumberObjectAll(new Number('1')));
        checkEqual(true,  isNumberObjectAll(new Number('1.1')));
      });
    };

    const test_isInteger = function() {
      it('test_isInteger', () => {

        checkEqual(true,  isIntegerAll(123));
        checkEqual(true,  isIntegerAll(0));
        checkEqual(true,  isIntegerAll(-1));
        checkEqual(false, isIntegerAll(123.4));
        checkEqual(true,  isIntegerAll(123.0));
        // .0 equal Integer

        checkEqual(false, isIntegerAll(true));
        checkEqual(false, isIntegerAll(false));
        checkEqual(false, isIntegerAll(null));
        checkEqual(false, isIntegerAll(undefined));
        checkEqual(false, isIntegerAll(''));
        checkEqual(false, isIntegerAll('ABC'));
        checkEqual(false, isIntegerAll('0'));
        checkEqual(false, isIntegerAll('5'));
        checkEqual(false, isIntegerAll('-5'));
        checkEqual(false, isIntegerAll('100'));
        checkEqual(false, isIntegerAll('-100'));
        checkEqual(false, isIntegerAll([]));
        checkEqual(false, isIntegerAll({}));

        checkEqual(true, isIntegerAll(1, 2));
        checkEqual(true, isIntegerAll(3, 4, 5));
        checkEqual(true, isIntegerAll(10, 20, 30));
        checkEqual(false, isIntegerAll(1, 2, 3.5));

        checkEqual(false, isNotIntegerAll(1, 2));
        checkEqual(false, isNotIntegerAll(3, 4, 5));
        checkEqual(false, isNotIntegerAll(10, 20, 30));
        checkEqual(false, isNotIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2.1, 3.5));
        checkEqual(true,  isNotIntegerAll(1.1, 2.2, 3.5));

        checkEqual(false, isIntegerArray([]), '?');
        checkEqual(true,  isIntegerArray([1]));
        checkEqual(true,  isIntegerArray([1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(true,  isIntegerArray([1, 2, 0]));
        checkEqual(false, isIntegerArray([1, 2, NaN]));
        checkEqual(false, isIntegerArray([1, 2, null]));
        checkEqual(false, isIntegerArray(['a', 'b', 1]));
        checkEqual(false, isIntegerArray(['a', 'b', 1.1]));
        checkEqual(false, isIntegerArray(['a', 'b', 'c']));

        checkEqual(false, isNotIntegerArray([]));
        checkEqual(false, isNotIntegerArray([1]));
        checkEqual(false, isNotIntegerArray([1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2.2, 3]));
        checkEqual(true,  isNotIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(false, isNotIntegerArray([1, 2, 0]));
        checkEqual(false, isNotIntegerArray([1, 2, NaN]));
        checkEqual(false, isNotIntegerArray([1, 2, null]));
        checkEqual(false, isNotIntegerArray(['a', 'b', 1]));
        checkEqual(true,  isNotIntegerArray(['a', 'b', 1.1]));
        checkEqual(true,  isNotIntegerArray(['a', 'b', 'c']));

        checkEqual(false, isIntegerAll(new Number()));
        checkEqual(false, isIntegerAll(new Number('')));
        checkEqual(false, isIntegerAll(new Number('1')));
        checkEqual(false, isIntegerAll(new Number('1.1')));

        checkEqual(false, isIntegerAll(new Number(1)));
      });
    };

    const test_isString = function() {
      it('test_isString', () => {

        checkEqual(false, isString(true));
        checkEqual(false, isString(false));
        checkEqual(false, isString(undefined));
        checkEqual(false, isString(null));
        checkEqual(true,  isString(''));
        checkEqual(true,  isString('aaa'));
        checkEqual(false, isString(123));
        checkEqual(false, isString(0));
        checkEqual(false, isString(-1));
        checkEqual(false, isString([]));
        checkEqual(false, isString({}));

        checkEqual(true,  isStringAll(''));
        checkEqual(true,  isStringAll('a'));
        checkEqual(true,  isStringAll('a', 'b', 'c'));
        checkEqual(true,  isStringAll('a', 'b', ''));
        checkEqual(false, isStringAll('a', 'b', 0));
        checkEqual(false, isStringAll('a', 'b', 1));
        checkEqual(false, isStringAll('a', 'b', null));
        checkEqual(false, isStringAll('a', 'b', undefined));

        checkEqual(false, isStringArray([]));
        checkEqual(true,  isStringArray(['']));
        checkEqual(true,  isStringArray(['a']));
        checkEqual(true,  isStringArray(['a', 'b', 'c']));
        checkEqual(true,  isStringArray(['a', 'b', '']));
        checkEqual(false, isStringArray(['a', 'b', 0]));
        checkEqual(false, isStringArray(['a', 'b', 1]));
        checkEqual(false, isStringArray(['a', 'b', null]));
        checkEqual(false, isStringArray(['a', 'b', undefined]));

        checkEqual(false, isNotStringArray([]));
        checkEqual(false, isNotStringArray(['']));
        checkEqual(false, isNotStringArray(['a']));
        checkEqual(false, isNotStringArray(['a', 'b', 'c']));
        checkEqual(false, isNotStringArray(['a', 'b', '']));
        checkEqual(false, isNotStringArray(['a', 'b', 0]));
        checkEqual(false, isNotStringArray(['a', 'b', 1]));
        checkEqual(false, isNotStringArray(['a', 'b', null]));
        checkEqual(false, isNotStringArray(['a', 'b', undefined]));
        checkEqual(true,  isNotStringArray([0, 1, 2]));
        checkEqual(true,  isNotStringArray([0, null, undefined]));

        // string object
        checkEqual('',    String(new String()));
        checkEqual('',    String(new String('')));
        checkEqual(' ',   String(new String(' ')));
        checkEqual('　',   String(new String('　')));
        checkEqual('1',   String(new String('1')));
        checkEqual('1.1', String(new String('1.1')));
        checkEqual('1',   String(new String(1)));
        checkEqual('1.1', String(new String(1.1)));
        checkEqual('NaN',       String(new String(NaN)));
        checkEqual('Infinity',  String(new String(Infinity)));
        checkEqual('undefined', String(new String(undefined)));
        checkEqual('null',      String(new String(null)));

        checkEqual(false, isString(new String()));
        checkEqual(false, isString(new String(undefined)));
        checkEqual(false, isString(new String(null)));
        checkEqual(false, isString(new String('')));
        checkEqual(false, isString(new String('1')));
        checkEqual(false, isString(new String(1)));

        checkEqual(true,  isStringObject(new String()));
        checkEqual(true,  isStringObject(new String(undefined)));
        checkEqual(true,  isStringObject(new String(null)));
        checkEqual(true,  isStringObject(new String('')));
        checkEqual(true,  isStringObject(new String('1')));
        checkEqual(true,  isStringObject(new String(1)));

        checkEqual(false, isStringObject(true));
        checkEqual(false, isStringObject(false));
        checkEqual(false, isStringObject(undefined));
        checkEqual(false, isStringObject(null));
        checkEqual(false, isStringObject(''));
        checkEqual(false, isStringObject('aaa'));
        checkEqual(false, isStringObject(123));
        checkEqual(false, isStringObject(0));
        checkEqual(false, isStringObject(-1));
        checkEqual(false, isStringObject([]));
        checkEqual(false, isStringObject({}));
      });
    };

    const test_isFunction = function() {
      it('test_isFunction', () => {

        checkEqual(true, isFunctionAll(function() { }));
        checkEqual(false, isFunctionAll({}));

        checkEqual(true, isFunctionAll(function() { }, test_isFunction));
        checkEqual(false, isFunctionAll({}, test_isFunction));

        checkEqual(true, isFunctionArray(
          [function() { }, test_isFunction]));
        checkEqual(false, isFunctionArray(
          [{}, test_isFunction]));
      });
    };

    const test_different_objectNormal_objectFromNull = () => {
      checkEqual(true,  'hasOwnProperty' in {});
      checkEqual(true,  'constructor' in {});
      if (!parts.platform.isWindowsScriptHost()) {
        checkEqual(false, 'hasOwnProperty' in Object.create(null));
        checkEqual(false, 'constructor' in Object.create(null));

        checkEqual(false, isThrown(() => { typeName(Object.create({})); }));
        checkEqual(false, isThrown(() => { typeName(Object.create(null)); }));
        checkEqual(true,  isThrown(() => { typeName(Object.create()); }));
      } else {
        checkEqual(true,  isThrown(() => { typeName(Object.create({})); }));
        checkEqual(true,  isThrown(() => { typeName(Object.create(null)); }));
        checkEqual(true,  isThrown(() => { typeName(Object.create()); }));
      }


    };

    const test_isObject = function() {
      it('test_isObject', () => {

        // object other value
        checkEqual(false, isObject(null));
        checkEqual(false, isObject(undefined));
        checkEqual(false, isObject(undefined));
        checkEqual(false, isObject('a'));
        checkEqual(false, isObject(1));
        checkEqual(false, isObject(true));

        // normal object
        checkEqual(true,  isObject({}));
        checkEqual(true,  isObject({ a: 0 }));
        checkEqual(true,  isObject({ a: 0, b: 1 }));

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true,  isObject(Object.create(null)));
        }

        // object like
        checkEqual(false, isObject([]));
        checkEqual(false, isObject(function() { }));
        checkEqual(false, isObject(() => {}));
        checkEqual(false, isObject(new Error()));
        checkEqual(false, isObject(new Date()));
        checkEqual(false, isObject(new RegExp()));

        checkEqual(false, isObject(new String()));
        checkEqual(false, isObject(new Number()));
        checkEqual(false, isObject(new Boolean()));
        checkEqual(true,  isObject(new Object()));
        checkEqual(false, isObject(new Array()));
        checkEqual(false, isObject(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObject(parts));
        }

        // is...All
        checkEqual(true,  isObjectAll({ a: 0, b: 1 }, { c: 0, d: 1 }));

        // is...Array
        checkEqual(true,  isObjectArray([{}, { a: 0, b: 1 }]));
        checkEqual(false, isObjectArray([[], { a: 0, b: 1 }]));

        const TestObject = function() {
          this.a = 'a';
        };
        var testObject1 = new TestObject();
        checkEqual(true,  isObject(testObject1));
      });
    };

    const test_isObjectNormal = function() {
      it('test_isObjectNormal', () => {

        // object other value
        checkEqual(false, isObjectNormal(null));
        checkEqual(false, isObjectNormal(undefined));
        checkEqual(false, isObjectNormal(undefined));
        checkEqual(false, isObjectNormal('a'));
        checkEqual(false, isObjectNormal(1));
        checkEqual(false, isObjectNormal(true));

        // normal object
        checkEqual(true,  isObjectNormal({}));
        checkEqual(true,  isObjectNormal({ a: 0 }));
        checkEqual(true,  isObjectNormal({ a: 0, b: 1 }));

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false,  isObjectNormal(Object.create(null)));
        }

        // object like
        checkEqual(false, isObjectNormal([]));
        checkEqual(false, isObjectNormal(function() { }));
        checkEqual(false, isObjectNormal(() => {}));
        checkEqual(false, isObjectNormal(new Error()));
        checkEqual(false, isObjectNormal(new Date()));
        checkEqual(false, isObjectNormal(new RegExp()));

        checkEqual(false, isObjectNormal(new String()));
        checkEqual(false, isObjectNormal(new Number()));
        checkEqual(false, isObjectNormal(new Boolean()));
        checkEqual(true,  isObjectNormal(new Object()));
        checkEqual(false, isObjectNormal(new Array()));
        checkEqual(false, isObjectNormal(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObjectNormal(parts));
        }

        // is...All
        testCounter();
        checkEqual(true,  isObjectNormalAll({ a: 0, b: 1 }, { c: 0, d: 1 }));
        checkEqual(false, isNotObjectNormalAll({ a: 0, b: 1 }, { c: 0, d: 1 }));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormalAll({}, Object.create(null)));
          checkEqual(false, isObjectNormalAll(Object.create(null), Object.create(null)));
          checkEqual(false, isNotObjectNormalAll({}, Object.create(null)));
          checkEqual(true,  isNotObjectNormalAll(Object.create(null), Object.create(null)));
        }
        // is...Array
        checkEqual(true,  isObjectNormalArray([{}, { a: 0, b: 1 }]));
        checkEqual(false, isNotObjectNormalArray([{}, { a: 0, b: 1 }]));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormalArray([{}, Object.create(null)]));
          checkEqual(false, isObjectNormalArray([Object.create(null), Object.create(null)]));
          checkEqual(false, isNotObjectNormalArray([{}, Object.create(null)]));
          checkEqual(true,  isNotObjectNormalArray([Object.create(null), Object.create(null)]));
        }
        const TestObject = function() {
          this.a = 'a';
        };
        var testObject1 = new TestObject();
        checkEqual(true,  isObjectNormal(testObject1));
      });
    };

    const test_isObjectFromNull = function() {
      it('test_isObjectFromNull', () => {

        // object other value
        checkEqual(false, isObjectFromNull(null));
        checkEqual(false, isObjectFromNull(undefined));
        checkEqual(false, isObjectFromNull(undefined));
        checkEqual(false, isObjectFromNull('a'));
        checkEqual(false, isObjectFromNull(1));
        checkEqual(false, isObjectFromNull(true));

        // normal object
        checkEqual(false, isObjectFromNull({}));
        checkEqual(false, isObjectFromNull({ a: 0 }));
        checkEqual(false, isObjectFromNull({ a: 0, b: 1 }));

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true,  isObjectFromNull(Object.create(null)));
        }

        // object like
        checkEqual(false, isObjectFromNull([]));
        checkEqual(false, isObjectFromNull(function() { }));
        checkEqual(false, isObjectFromNull(() => {}));
        checkEqual(false, isObjectFromNull(new Error()));
        checkEqual(false, isObjectFromNull(new Date()));
        checkEqual(false, isObjectFromNull(new RegExp()));

        checkEqual(false, isObjectFromNull(new String()));
        checkEqual(false, isObjectFromNull(new Number()));
        checkEqual(false, isObjectFromNull(new Boolean()));
        checkEqual(false, isObjectFromNull(new Object()));
        checkEqual(false, isObjectFromNull(new Array()));
        checkEqual(false, isObjectFromNull(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObjectFromNull(parts));
        }

        // is...All
        testCounter();
        checkEqual(false, isObjectFromNullAll({ a: 0, b: 1 }, { c: 0, d: 1 }));
        checkEqual(true,  isNotObjectFromNullAll({ a: 0, b: 1 }, { c: 0, d: 1 }));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectFromNullAll({}, Object.create(null)));
          checkEqual(true,  isObjectFromNullAll(Object.create(null), Object.create(null)));
          checkEqual(false, isNotObjectFromNullAll({}, Object.create(null)));
          checkEqual(false, isNotObjectFromNullAll(Object.create(null), Object.create(null)));
        }
        // is...Array
        checkEqual(false, isObjectFromNullArray([{}, { a: 0, b: 1 }]));
        checkEqual(true,  isNotObjectFromNullArray([{}, { a: 0, b: 1 }]));
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectFromNullArray([{}, Object.create(null)]));
          checkEqual(true,  isObjectFromNullArray([Object.create(null), Object.create(null)]));
          checkEqual(false, isNotObjectFromNullArray([{}, Object.create(null)]));
          checkEqual(false, isNotObjectFromNullArray([Object.create(null), Object.create(null)]));
        }

        const TestObject = function() {
          this.a = 'a';
        };
        var testObject1 = new TestObject();
        checkEqual(false,  isObjectFromNull(testObject1));
      });
    };

    const test_isObjectLike1 = function() {
      it('test_isObjectLike1', () => {

        // object other value
        checkEqual(false, isObjectLike(null));
        checkEqual(false, isObjectLike(undefined));
        checkEqual(false, isObjectLike('a'));
        checkEqual(false, isObjectLike(1));
        checkEqual(false, isObjectLike(true));

        // normal object
        checkEqual(true,  isObjectLike({}));
        checkEqual(true,  isObjectLike({ a: 0 }));
        checkEqual(true,  isObjectLike({ a: 0, b: 1 }));

        // object from null
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true,  isObjectLike(Object.create(null)));
        }

        // object like
        checkEqual(true,  isObjectLike([]));
        checkEqual(true,  isObjectLike(function() { }));
        checkEqual(true,  isObjectLike(() => {}));
        checkEqual(true,  isObjectLike(new Error()));
        checkEqual(true,  isObjectLike(new Date()));
        checkEqual(true,  isObjectLike(new RegExp()));

        checkEqual(true,  isObjectLike(new String()));
        checkEqual(true,  isObjectLike(new Number()));
        checkEqual(true,  isObjectLike(new Boolean()));
        checkEqual(true,  isObjectLike(new Object()));
        checkEqual(true,  isObjectLike(new Array()));
        checkEqual(true,  isObjectLike(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(true, isObjectLike(parts));
        }

        // is...All
        checkEqual(true,  isObjectLikeAll({ a: 0, b: 1 }, { c: 0, d: 1 }));

        // is...Array
        checkEqual(true,  isObjectLikeArray([{}, { a: 0, b: 1 }]));
        checkEqual(true,  isObjectLikeArray([[], { a: 0, b: 1 }]));

        const TestObject = function() {
          this.a = 'a';
        };
        var testObject1 = new TestObject();
        checkEqual(true,  isObjectLikeAll(testObject1));
      });
    };

    const test_isModule = () => {
      it('test_isModule', () => {
        if (parts.isModule(parts)) {
          checkEqual(false, parts.platform.isWindowsScriptHost());
        }
      });
    };

    const test_isArray = function() {
      it('test_isArray', () => {

        checkEqual(true,  isArrayAll([123]));
        checkEqual(true,  isArrayAll([]));
        checkEqual(true,  isArrayAll([1, 2, 3]));
        checkEqual(false, isArrayAll(123));
        checkEqual(false, isArrayAll('1,2,3'));

        checkEqual(true,  isArrayAll([1], [2]));
        checkEqual(true,  isArrayAll([3], [4], [5]));
        checkEqual(true,  isArrayAll([10, 20], [30]));
        checkEqual(false, isArrayAll([1, 2], 3));

        checkEqual(true,  isNotArrayAll(1, 2));
        checkEqual(false, isNotArrayAll([3], [4], 5));
        checkEqual(true,  isNotArrayAll(10, 20, 30));
        checkEqual(false, isNotArrayAll(10, 20, [30]));


        checkEqual(true,  isArrayArray([[1], [2]]));
        checkEqual(true,  isArrayArray([[3], [4], [5]]));
        checkEqual(true,  isArrayArray([[10, 20], [30]]));
        checkEqual(false, isArrayArray([[1, 2], 3]));

        checkEqual(true,  isNotArrayArray([1, 2]));
        checkEqual(false, isNotArrayArray([[3], [4], 5]));
        checkEqual(true,  isNotArrayArray([10, 20, 30]));
        checkEqual(false, isNotArrayArray([10, 20, [30]]));
      });
    };

    const test_ArrayisArray = function() {
      it('test_ArrayisArray', () => {

        const ArrayisArrayAll = (...values) => {
          for (let i = 0, l = values.length; i < l; i += 1) {
            const result = Array.isArray(values[i]);
            if (result === false) {
              return false;
            }
          }
          return true;
        };
        const NotArrayisArrayAll = (...values) => {
          for (let i = 0, l = values.length; i < l; i += 1) {
            const result = Array.isArray(values[i]);
            if (result === true) {
              return false;
            }
          }
          return true;
        };
        checkEqual(true,  ArrayisArrayAll([123]));
        checkEqual(true,  ArrayisArrayAll([]));
        checkEqual(true,  ArrayisArrayAll([1, 2, 3]));
        checkEqual(false, ArrayisArrayAll(123));
        checkEqual(false, ArrayisArrayAll('1,2,3'));

        checkEqual(true,  ArrayisArrayAll([1], [2]));
        checkEqual(true,  ArrayisArrayAll([3], [4], [5]));
        checkEqual(true,  ArrayisArrayAll([10, 20], [30]));
        checkEqual(false, ArrayisArrayAll([1, 2], 3));

        checkEqual(true,  NotArrayisArrayAll(1, 2));
        checkEqual(false, NotArrayisArrayAll([3], [4], 5));
        checkEqual(true,  NotArrayisArrayAll(10, 20, 30));
        checkEqual(false, NotArrayisArrayAll(10, 20, [30]));

      });
    };

    const test_isArraySeries = function() {
      it('test_isArraySeries', () => {

        checkEqual(true,  Array.isArray([]));
        checkEqual(true,  Array.isArray([123]));
        checkEqual(true,  Array.isArray([1, 2, 3]));
        checkEqual(true,  Array.isArray(new Array()));
        checkEqual(true,  Array.isArray(new Array(1, 2, 3)));
        checkEqual(true,  Array.isArray(new Array()));
        if (!parts.platform.isWindowsScriptHost()
          && !parts.platform.isGasRhino()
        ) {
          checkEqual(false, Array.isArray(new Int8Array()));
          checkEqual(false, Array.isArray(new Uint8Array()));
          checkEqual(false, Array.isArray(new Uint8ClampedArray()));
          checkEqual(false, Array.isArray(new Int16Array()));
          checkEqual(false, Array.isArray(new Uint16Array()));
          checkEqual(false, Array.isArray(new Int32Array()));
          checkEqual(false, Array.isArray(new Uint32Array()));
          checkEqual(false, Array.isArray(new Float32Array()));
          checkEqual(false, Array.isArray(new Float64Array()));
        }

        checkEqual(true,  isArrayAll([]));
        checkEqual(true,  isArrayAll([123]));
        checkEqual(true,  isArrayAll([1, 2, 3]));
        checkEqual(true,  isArrayAll(new Array()));
        checkEqual(true,  isArrayAll(new Array(1, 2, 3)));
        checkEqual(true,  isArrayAll(new Array()));
        if (!parts.platform.isWindowsScriptHost()
          && !parts.platform.isGasRhino()
        ) {
          checkEqual(false, isArrayAll(new Int8Array()));
          checkEqual(false, isArrayAll(new Uint8Array()));
          checkEqual(false, isArrayAll(new Uint8ClampedArray()));
          checkEqual(false, isArrayAll(new Int16Array()));
          checkEqual(false, isArrayAll(new Uint16Array()));
          checkEqual(false, isArrayAll(new Int32Array()));
          checkEqual(false, isArrayAll(new Uint32Array()));
          checkEqual(false, isArrayAll(new Float32Array()));
          checkEqual(false, isArrayAll(new Float64Array()));
        }

        checkEqual(true,  isArraySeriesAll([]));
        checkEqual(true,  isArraySeriesAll([123]));
        checkEqual(true,  isArraySeriesAll([1, 2, 3]));
        checkEqual(true,  isArraySeriesAll(new Array()));
        checkEqual(true,  isArraySeriesAll(new Array(1, 2, 3)));
        checkEqual(true,  isArraySeriesAll(new Array()));
        if (!parts.platform.isWindowsScriptHost()
          && !parts.platform.isGasRhino()
        ) {
          checkEqual(true,  isArraySeriesAll(new Int8Array()));
          checkEqual(true,  isArraySeriesAll(new Uint8Array()));
          checkEqual(true,  isArraySeriesAll(new Uint8ClampedArray()));
          checkEqual(true,  isArraySeriesAll(new Int16Array()));
          checkEqual(true,  isArraySeriesAll(new Uint16Array()));
          checkEqual(true,  isArraySeriesAll(new Int32Array()));
          checkEqual(true,  isArraySeriesAll(new Uint32Array()));
          checkEqual(true,  isArraySeriesAll(new Float32Array()));
          checkEqual(true,  isArraySeriesAll(new Float64Array()));
        }
      });
    };

    const test_isDate = function() {
      it('test_isDate', () => {

        checkEqual(true, isDateAll(new Date(2017, 1, 1)));
        checkEqual(true, isDateAll(new Date('2017/01')));
        checkEqual(true, isDateAll(new Date(2017, 1)));
        checkEqual(true, isDateAll(new Date(2017, 1)));
      });
    };

    const test_isExcection = function() {
      it('test_isExcection', () => {

        checkEqual(true,  isExceptionAll({ name: '', message: '' }));
        checkEqual(false, isExceptionAll({ name: '' }));
        checkEqual(false, isExceptionAll({ message: '' }));

        checkEqual(true,  isExceptionAll(new Error()));
        checkEqual(true,  isExceptionAll(new TypeError()));
        checkEqual(true,  isExceptionAll(new SyntaxError()));
        checkEqual(true,  isExceptionAll(new ReferenceError()));

        const UserException = function(message) {
          this.message = message;
          this.name = 'UserException';
        };
        checkEqual(true, isExceptionAll(new UserException('message')));
      });
    };

    const test_isEmptyObject = () =>{
      it('test_isEmptyObject', () => {
        checkEqual(true,  isEmptyObjectAll({}));
        checkEqual(false, isEmptyObjectAll({ a: 1 }));
        checkEqual(false, isEmptyObjectAll(null));
        checkEqual(false, isEmptyObjectAll(undefined));
        checkEqual(false, isEmptyObjectAll(123));
        checkEqual(false, isEmptyObjectAll('abc'));
        checkEqual(false, isEmptyObjectAll([]));
        checkEqual(false, isEmptyObjectAll([123]));
      });
    };
    const test_isEmptyArray = () =>{
      it('test_isEmptyArray', () => {
        checkEqual(false, isEmptyArrayAll({}));
        checkEqual(false, isEmptyArrayAll({ a: 1 }));
        checkEqual(false, isEmptyArrayAll(null));
        checkEqual(false, isEmptyArrayAll(undefined));
        checkEqual(false, isEmptyArrayAll(123));
        checkEqual(false, isEmptyArrayAll('abc'));
        checkEqual(true,  isEmptyArrayAll([]));
        checkEqual(false, isEmptyArrayAll([123]));
      });
    };

    const test_isSymbol = function() {
      it('test_isSymbol', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isInternetExplorer()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isSymbolAll(1));
        checkEqual(true, isSymbolAll(Symbol()));
      });
    };

    const test_isMap = function() {
      it('test_isMap', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isMapAll({}));
        checkEqual(false, isWeakMapAll({}));
        checkEqual(true,  isMapAll(new Map()));
        checkEqual(false, isWeakMapAll(new Map()));
        checkEqual(false, isMapAll(new WeakMap()));
        checkEqual(true,  isWeakMapAll(new WeakMap()));

        checkEqual(true,  isObjectAll({}));
        checkEqual(false, isObjectAll(new Map()));
        checkEqual(false, isObjectAll(new WeakMap()));
      });
    };

    const test_isSet = function() {
      it('test_isSet', () => {

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }
        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isSetAll({}));
        checkEqual(true,  isSetAll(new Set()));
        checkEqual(false, isWeakSetAll({}));
        checkEqual(false, isWeakSetAll(new Set()));

        checkEqual(true,  isObjectAll({}));
        checkEqual(false, isObjectAll(new Set()));
        if (!parts.platform.isInternetExplorer()) {
          // IE11 no exist WeakSet
          checkEqual(false, isSetAll(new WeakSet()));
          checkEqual(true,  isWeakSetAll(new WeakSet()));
          checkEqual(false, isObjectAll(new WeakSet()));
        }

      });
    };

    test_checkType();

    test_typeName();
    test_isObjectLike2();
    test_isPrimitiveType();
    test_isReferenceType();

    test_isUndefinedAll();
    test_isNull();
    test_isBoolean();
    test_isNumber();
    test_isInteger();
    test_isString();
    test_isFunction();

    test_different_objectNormal_objectFromNull();
    test_isObject();
    test_isObjectNormal();
    test_isObjectFromNull();
    test_isObjectLike1();

    test_isModule();

    test_isArray();
    test_ArrayisArray();
    test_isArraySeries();
    test_isDate();
    test_isExcection();
    test_isEmptyObject();
    test_isEmptyArray();
    test_isSymbol();
    test_isMap();
    test_isSet();
  });
};

export default {
  test_execute_type,
};
