# Parts.js

## Version

### 2.9.0
#### 2019/11/01(Fri)
- update clone cloneDeep cloneFunction

### 2.8.0
#### 2019/10/31(Thu)
- add getProperty(getProp)
- add setProperty(setProp)
- update some ErrorMessage
- bugfix matchSome matchSomeIndex

### 2.7.0
### 2019/10/30(Wed)
- add
  - matchAll(matchEvery)
  - matchSome(matchAny)
  - matchSomeIndex(matchAnyIndex)
- delete isXxxArray, isNotXxxArray

### 2.6.2
#### 2019/10/28(Mon)
- add isArrayType
- update stringToNumber stringToInteger
- add stringToNumberDefault stringToIntegerDefault
  - strToNumberDef strToIntegerDef
  - strToNumDef strToIntDef

### 2.6.1
#### 2019/10/28(Mon)
- add isBooleanObject, isNumberObject, isStringObject
- add isMap isWeakMap isSet isWeakSet

### 2.6.0
#### 2019/10/20(Sun)
- add isSymbol
- update strintToNumber stringToInteger

### 2.5.3
#### 2019/10/17(Thu)
- update cloneDeep support CircularReference 
- update test code

### 2.5.2
#### 2019/10/14(Mon)
- update clone cloneDeep
- add cloneFunction

### 2.5.1
#### 2019/10/12(Sat)
- update match test
- update clone cloneDeep
- delete polifill Array.some

### 2.5.0
#### 2019/10/10(Thu)
- add root.js clone cloneDeep
  - support date type
- delete object.clone cloneDeep
- delete array.clone cloneDeep
- update test test_index.html test_index.wsf

### 2.4.0
#### 2019/10/09(Wed)
- add replaceAll
- add _inProperty.js
- update _copyProperty _inProperty 
- update test message output
- add array.js equal min max clone cloneDeep
- add object.clone cloneDeep
- update Package.json main

### 2.3.0
#### 2019/10/05(Sat)
- add number.js
  - isMultiples,isEven,isOdd,
  - round,nearEqual,inRange,randomInt

### 2.2.0
#### 2019/10/04(Fri)
- move webpack.config.js babel.config.js
- update test release_wsh
- change file position
- add constant.js
- add test nameSpace

### 2.1.1
#### 2019/10/03(Thu)
- update consoleHook.hookXxx

### 2.1.0
#### 2019/10/01(Tue)
- update copyProperty
- add inProperty
- add isObjectType
- add polyfill array.includes
- add polyfill Object.keys entries
- update polyfill array.some
- add propertyCount
- add isEmpty
- update consoleHook.hook,accept

### 2.0.1
#### 2019/09/26(Thu)
- document update
- update test code(html, wsf)

### 2.0.0
#### 2019/09/26(Thu)
- update consoleHook
- add object.js copyProperty
  - add test_copyProperty
- update Parameter Args
- define root function(property) name
- define public function(property) name
- update test_isObject
- add Shortcut Name

### 1.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)

### 0.9.0
#### 2019/09/17(Tue)
- add consoleHook.js

### 0.8.1
#### 2019/09/16(Mon)
- add string.includes
  - test code
- update string.matchFormat

### 0.8.0
#### 2019/09/15(Sun)
- add convert.js
  - numberToString,stringToNumber,stringToInteger,
- add string.js
  - matchFormat
- add _isNotXxx
- change defaultValue -> initalValue

### 0.7.2
#### 2019/09/14(Sat)
- update ErrorMessage
- add Polyfill Array.forEach
- add _text.js(discard)

### 0.7.1
#### 2019/09/12(Thu)
- update or, match, matchValue Error handling
  - SyntaxError -> TypeError, ReferenceError
- update ErrorMessage

### 0.7.0
#### 2019/09/05(Thu)
- add compare.js
  - equal, or, match, matchValue, defaultValue,
  - add test code for each
- support named arguemnt
  - equal and add test_sc
  - or
  - update match, matchValue
- add polyfill.js
  - String.includes startsWith endsWith
  - Array.some map

### 0.6.1
#### 2019/09/04(Wed)
- add sc, if_, switch_
  - add test code for each
- update test code

### 0.6.0
#### 2019/09/03(Tue)
- add syntax.js
  - assert
  - guard
  - functionValue
  - isThrown isThrownValue isThrownException isNotThrown
- add syntax.test.js
- update test code(html, wsf)

### 0.5.0
#### 2019/09/02(Mon)
- support wsh(Windows Scripting Host)
  /test_exec/release_wsh/test_index.html
- Rename folder test_code/ >> test_exec
- Uninstall @babel/polyfill
- update document "How to use WSH .wsf file"

### 0.4.1
#### 2019/09/02(Mon)
- update document "How to use HTML Page"

### 0.4.0
#### 2019/09/01(Sun)
- for web
  /test_code/release_web/test_index.html
- update document

### 0.3.0
#### 2019/08/31(Sat)
- webpack ver4.x install
- change test code file structure

### 0.2.3
#### 2019/08/30(Fri)
- add TypeCheck (type.js)
  - PrimitiveTypeCheck
    - isUndefined
    - isNull
    - isNaNStrict
    - isBoolean
    - isNumber
    - isInteger
    - isString
    - isFunction
  - ObjectTypeCheck
    - isObject
    - isArray
    - isDate
    - isRegExp
  - OtherTypeCheck
    - isException
  - For Each isNotXxx isXxxArrayVersion isNotXxxArray
- add TestCode TypeCheck (test_type.js)

### 0.2.2
#### 2019/08/30(Fri)
- Document update
- add type.js (_isUndefined)
- add debug test code

### 0.2.1
#### 2019/08/29(Thu)
- repair version number miss

### 0.2.0
#### 2019/08/29(Thu)
- babel 7 install
- babel 6 install and uninstall

### 0.1.1
#### 2019/08/29(Thu)
- npm regist

### 0.1.0
#### 2019/08/28(Wed)
- First Comit
  parts.js/
    test_code/test_index.js
    source_code/index.js

### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
