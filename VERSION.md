# Parts.js

## Version

### 4.4.1
#### 2020/03/26(Thu)
- update array.operation
  - deleteLength/deleteIndex
- update README.md

### 4.4.0
#### 2020/03/12(Thu)
- add array.operation
  - deleteFirst/deleteLast
- update array.operation
  - insert/add args values>>valueArray
  - includeFirst/includeLast/includeBothEdges
  - excludeFirst/excludeLast/excludeBothEdges
  - deleteLength/deleteIndex
  - trimFirst/trimLast/trimBothEdges
- update array
  - isFirst/isLast/isBothEdges
- add makeInRange

### 4.3.0
#### 2020/03/01(Sun)
- update testcode for polyfill
- rename midian >> median(misstake!!)
- update isThrownException
- update array isBothEnds=isBothEdges
- rename array delete >> deleteLength
- add array 
  - deleteIndex
  - subIndex/subLength
  - subFirst/subLast
- add array.operation
  - includeFirst/includeLast
  - includeBothEdges(=includeBothEnds)
  - excludeFirst/excludeLast
  - excludeBothEdges(=excludeBothEnds)
  - trimFirst/trimLast
  - trimBothEdges(=trimBothEnds)
  - popFirst/popLast
  - pushFirst/pushLast
  - remainFirst/Last
  - filter
- update isMultiples isOdd isEven

### 4.2.0
#### 2020/02/26(Wed)
- update package.json
- add ./release_build/test_parts.js
- update platform.name
  - isWebBrowser/isWindowsScriptHost/isGoogleAppsScript/isNodeJs
- update platform.browserName
  - isChrome/isFirefox/isEdge/isInternetExplorer/isSafari/isOpera
- add @babel/polyfill
  - support IE polyfill
- delete parts polyfill.js

### 4.1.0
### 2020/02/11(Tue)
- update README.md
  - Operation check Google Apps Script Rhino and V8
  - Operation check Google Spreadsheet
- add array. isFirst / isLast /isBothEnds
- delete polyfill.js string.prototype.includes
- add platform.js
  - name = web/node/wsh
  - browserName = chrome(=vivaldi) firefox edge ie opera
- test support browser chrome firefox edge ie opera vivaldi

### 4.0.1
#### 2020/01/30(Thu)
- update isObjectParameter
- rename filename _isXxx.js >> isXxx.js
- eslint fix
- add other.test.js test_split

### 4.0.0
#### 2020/01/29(Wed)
- change build webpack config
  - change How to use HTML script tag
  - change How to use WSH
  - more simple
- add how_to_use.html how_to_use.wsf
- add _propertyCount.js
  - update propertyCount (hasOwn)
- update isObjectParameter
- update isEmptyObject object.js >> isType.js
- add isEmptyArray
- update isXxx >> isXxxAll
- update _isXxx >> isXxx

### 3.5.0
#### 2020/01/24(Fri)
- add includes includesSome inclludesAll
- delete string.includes
- update consoleHook
- _inProperty >> isObjectParameter
- update getProperty inProperty
- update polyfill String.prototype.includes
- update test output message
- update test output testname
- update propertyCount

### 3.4.0
#### 2020/01/15(Wed)
- delete isEmpty
- add isEmptyObject
- update setProperty return value
- findIndexFirst >> findFirstIndex
- findIndexLast >> findLastIndex
- add match.js
  - match >> matchSome
  - matchValue >> matchSomeValue
  - matchAll >> allMatchSome
  - matchSomeIndex >> indexOfMatchSome
  - matchSome >> someMatchSome
  - add match matchValue
  - add matchAll matchAllValue
  - add allMatchAll someMatchAll indexOfMatchAll
  - delete matchEvery matchAnyIndex matchAny
- add array .some .all

### 3.3.0
#### 2020/01/05(Sun)
- update checkEqual
  - update equal
  - add equalFunction.equalValue
- update array support Object Named Arguemnt
  - filter map count
  - findIndex findBackIndex find findBack
- add array operation
  - insert
  - add
  - delete
- test
  - support exception continue

### 3.2.0
#### 2020/01/02(Thu)
- delete Array.prototype.map polifill
- string
  - add repeat
  - add isLowerCase isUpperCase
- array
  - update unique
  - add findIndex
  - add findIndex(findIndexFirst)
  - add findBackjIndex(findIndexLast)
  - add find(findFirst)
  - add findBack(findLast)
- test
  - add testFrame
  - update describe it
  - update wsh test

### 3.1.0
#### 2019/12/20(Fri)
- array.js
  - add filter
  - add map
  - add unique
  - add single
  - add multiple
  - add mode
- update isOdd
- add jest test code
  - debug build
  - release build

### 3.0.0
#### 2019/12/18(Wed)
- delete array.equal
- array.js
  - add from
  - add sum average midian
- support eslint format fix
- support jest

### 2.12.0
#### 2019/11/15(Fri)
- add toNumber toNumberDefault
- add toInteger toIntegerDefault
- delete constant.js

### 2.11.0
#### 2019/11/06(Wed)
- update matchFormat

### 2.10.2
#### 2019/11/05(Tue)
- update cloneDeep
  - cloneMap
  - test code
- update namespace
  - compare
    - compare_common.js
    - equal.js
  - root
    - clone.js

### 2.10.1
#### 2019/11/04(Mon)
- update tag version mistake

### 2.10.0
#### 2019/11/04(Mon)
- update compare.equal add compare.equalDeep
  - add equalFunction
  - support CircularReference
- update clone cloneDeep

### 2.9.1
#### 2019/11/04(Mon)
- update clone cloneDeep cloneFunction
  - support only object and arrayType
  - clone ignore Math Object etc

### 2.9.0
#### 2019/11/01(Fri)
- update clone cloneDeep cloneFunction
  - support Map Set
  - clone ignore WeakMap WeakSet

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
- update Object Named Parameter
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
