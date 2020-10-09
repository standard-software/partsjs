# Parts.js

## Version

### 8.2.0
#### 2020/10/10(Sat)
- update split
  - use _replaceAllArray
- update matchFormat
  - clear/add/reset method publish
- add date namespace
  - add Today Function
- rename inside var xxx_js >> xxxJs
- add github pages
  - https://standard-software.github.io/partsjs/test/web/test.html
  - https://standard-software.github.io/partsjs/test/web-cdn/test.html
- update README.md
  - GitHubPages
  - HTML CDN link
- update test code
  - Chrome Reflect / Intl
    - no update Vivaldi
  - Firefox WebAssembly

### 8.1.0
#### 2020/10/01(Thu)
- add from string_common.js
  - _indexOfFirst.js/indexOfFirst.js
  - _indexOfLast.js/indexOfLast.js
- add
  - _indexOfAnyFirst.js/indexOfAnyFirst.js
  - _indexOfAnyLast.js/indexOfAnyLast.js
  - _replaceAllArray.js/replaceAllArray.js
- add from array_common.js
  - _min.js/min.js
  - _max.js/max.js
- update package.json scripts
  - clasp:delete
  - clasp:release

### 8.0.0
#### 2020/09/27(Sun)
- update platform.js
  - isNodeJs >> isNode
  - name() Node.js >> Node
- add propertyList.js
- update test code
  - startName
  - write file /test/outputPropertyList
- update objectEntries
- add typeAlias.js
- bugfix
  - undefined function
    - isNot isArray isNotArray isAll isNotAll
      - ObjectType ObjectLike
      - ArrayType ArraySeries
  - noexist function
    - isNot isArray isNotArray isAll isNotAll
      - Undef
- add sortDictionary.js
  - from sort.js
  - sortDictionary add args casePriority
  - support full object parameter
- install npm-watch
- install @google/clasp
  - test/release/clasp
    - test_parts_spreadsheet_Rhino
    - test_parts_spreadsheet_v8
    - test_parts_standalone_Rhino
    - test_parts_standalone_v8
- update split
  - excludeSpace >> executeConvert
    - all >> excludeSpace
    - trim >> trimSpace
- add _split.js from split.js
- add _IntegerArray.js from IntegerArray.js
- add _NumberArray.js from NumberArray.js
- add __loop.js / _loop.js from loop.js
- add _Enum.js from Enum.js
- add _isObjectParameter
- rename arrayToIndexValueArray.js >> arrayEntries.js
- rename makeInRange >> keepMinMax
- uddate index.js
  - export structural changes
  - publish private function

### 7.6.0
#### 2020/09/07(Mon)
- update getProperty.js
  - rename _getProperyBase >> _getProperty
- update split
- add __includes.js from includes.js
- update split throw error
- add splitCommaItems / splitDotItems
- update copyProperty 
  - args propertyArray >> propertyNames
  - support full object parameter
  - bugfix return value
- update fixProperty
- update inProperty
- update getProperty

### 7.5.0
#### 2020/09/04(Fri)
- update platform.name / browserName
  - use cash var
- update canUse Map/WeakMap/Set/Weak
- add _global.js
- update package.json
  - scripts jest:watch
- add _hasOwn.js / hasOwn.js from has.js
- rename objectToKeyValueArray.js >> objectEntries.js
- add objectKeys.js / objectValues.js
- update Enum args(values) check string array
- update objectLike ErrorMessage
- update inProperty Error Check
- add fixProperty.js
- update sort use objectValues
- support full object parameter
  - update array.deleteFirst / Last
    - length default 1
  - update array.deleteLength
  - update string.deleteFirst / Last
  - update string.deleteLength
  - update array.isFirst / Last
    - support args function
- add split.js

### 7.4.0
#### 2020/08/25(Tue)
- update package.json scripts
- update assert
  - add _assert
  - support full object parameter
- add file from syntax.js
  - assert.js / guard.js / functionValue.js
  - / sc.js / if_.js / switch_.js / loop.js
  - / canUseMap.js / canUseSet.js
- add Enum.js
- update checkEqual log output object

### 7.3.0
#### 2020/08/12(Wed)
- add new_project_sample
  - wsh
    - NewProject
    - CopyFileFolder
- add parts.wsh namespace
  - add FileSystemObject
  - add Shell
  - add forceCreateFolder

### 7.2.0
#### 2020/08/02(Sun)
- support IE11
  - update isObject 
    - only IE11 bugfix
    - args Map/WeakSet/Set return true >> false
  - update isMap isWeakMap isSet
    - only IE11 bugfix
    - return false >> true
  - update equal equalDeep clone cloneDeep
    - only IE11 bugfix
    - support Map WeakMap Set
- add canUseWeakMap canUseWeakSet

### 7.1.1
#### 2020/07/23(Thu)
- delete no use file in build folder
- update package.json scripts
  - clear build folder

### 7.1.0
#### 2020/07/23(Thu)
- update sort
  - sort.targetFunc orderFunc
- update equal
  - equalFuncion >> equal.func
  - delete equalFunction.js
- update clone
  - cloneFuncion >> clone.func
  - delete cloneFunction.js
- npm update
  - babel / eslint / webpack-cli

### 7.0.0
#### 2020/07/22(Wed)
- Revive support wsh
  - add /test/wsh/test.wsf /run_check/wsh/index.wsf
  - delete export * from
  - add polyfill.js polyfill_Object_defineProperty.js
- compare_common.js >> or.js

### 6.5.0
#### 2020/07/18(Sat)
- update browserName isEdge
  - new Edge browser(Chromium base)
- update 
  - isEven 0 is even
  - isMultiples 0 is all numbers multiple
- add group.js group function
  - support full object parameter
- add unique.js unique function
  - move from array_common.js
  - support full object parameter
  - add args func, detail
- update equal / equalDeep
  - args equalFunction
  - support full object parameter
  - equalFunction.js equal.js equalDeep.js
- update array.operation.sort
  - support full object parameter
  - add sortNumber sortLength sortDictionary

### 6.4.0
#### 2020/07/05(Sun)
- update clone / cloneDeep
  - args cloneFunction
  - support full object parameter
  - cloneFunction.js clone.js cloneDeep.js
- add parts.string functions
  - subFirstDelimFirst.js 
  - subFirstDelimLast.js
  - subLastDelimFirst.js 
  - subLastDelimLast.js
  - tagInnerFirst.js
  - tagOuterFirst.js
  - tagInnerLast.js
  - tagOuterLast.js
    - support full object parameter

### 6.3.0
#### 2020/06/30(Tue)
- delete isType.js _objectToStringCheck
- bugfix isBooleanObject / isStringObject
- rename
  - isArrayType >> isArraySeries
    - alias name isArrayType
  - isObjectType >> isObjectLike
    - alias name isObjectType
- update clone / cloneDeep
  - support ObjectFromNull

### 6.2.0
#### 2020/06/30(Tue)
- object.hasOwnProperty >> Object.prototype.hasOwnProperty.call(object,
- upddate testcode
  - source deno import pattern
  - build babel/webpack node requier pattern
  - delete local isTypeAll
- add isModule isNotModule etc
- update inProperty 
  - support Module Object etc object like
  - args propertyPathArray >> propertyPaths
- update object.js move function
  - add getProperty.js
  - add propertyCount.js
- add has.js
  - has / hasOwn / hasPrototype
- support full object parameter
  - has / hasOwn / hasPrototype
  - propertyCount
  - getProperty
  - inProperty
- add isObjectNormal isObjectFromNull
  - isNot... is...All / is...Array
- delete isType.js _typeofCheck
- resetting eslint fix

### 6.1.0
#### 2020/06/24(Wed)
- rename folder
  - source_code >> source
  - debug_build >> build/babel_webpack/babel
  - release_build >> build/babel_webpack/webpack
- add platform.js
  - googleAppScriptEngineName isGasV8 isGasRhino
- add run_check files
- update testcode support Gas Rhino

### 6.0.0
#### 2020/06/20(Sat)
- support deno 
  - source CommonJS to ESModules
  - add code change tool parts-CommonJS_To_ESModules
- unsupport wsh
  - Code converted from ESModules by babel does not support wsh
- delete test_jest/source
- delete test_exec/release_wsh

### 5.8.2
#### 2020/06/19(Fri)
- bugfix not necessary require isException
- bugfix not necessary require _findIndex

### 5.8.1
#### 2020/06/16(Tue)
- update test code for IE11
  - no support object.entries / for of array.entries

### 5.8.0
#### 2020/06/15(Mon)
- update match.js move function
  - match series
    - add indexOfMatch.js someMatch.js
  - matchSome series
    - add matchSome.js matchSomeValue.js 
      indexOfMatchSome.js allMatchSome.js someMatchSome.js
  - matchAll series
    - add matchAll.js matchAllValue.js
      indexOfMatchAll.js allMatchAll.js someMatchAll.js
- support full object parameter
  - match series
    - match initialValue indexOfMatch allMatch someMatch
  - matchSome series
    - matchSome matchSomeValue indexOfMatchSome allMatchSome someMatchSome
  - matchAll series
    - matchAll matchAllValue indexOfMatchAll allMatchAll someMatchAll
- rename args valueWhenMatched >> match
  - initialValue matchSomeValue matchAllValue
- add args unmatch
  - matchSomeValue matchAllValue

### 5.7.0
#### 2020/06/11(Thu)
- update matchValue
  - move match.js >> matchValue.js
  - rename args valueWhenMatched >> match
  - add args unmatch
  - support full object parameter
- update allMatch
  - move motch.js >> allMatch.js
- update initialValue
  - move motch.js >> initialValue.js
- update inProperty args propertyPathArray support empty str
- add alias name objectEntries objectToKeyValueArray
- add alias name arrayEntries arrayEntries

### 5.6.0
#### 2020/05/23(Sat)
- add objectToKeyValueArray (Ponyfill Object.entries)
- add arrayToIndexValueArray (Ponyfill array.entries)
- update loop
  - support object loop

### 5.5.0
#### 2020/05/22(Fri)
- update checkEqual for jest
  - checkEqual = expect().toEqual()
  - expect().toEqual()
  - expect().not.toBe()
  - expect().not.toEqual()
- update array.median
- update array error check
  - min / max
  - sum / average
- add array
  - NumberArray
  - IntegerArray
- add syntax.loop

### 5.4.0
#### 2020/05/14(Thu)
- add isTypeArray.js
  - isNullArray isStringArray isIntegerArray etc...
- bugfix isUndef isBool isNum etc...
- add isUndefAll isBoolAll isNumAll etc..
- add string
  - trimFirst / trimLast / trimBothEnds
  - insert / add
- update index.js copyProperty

### 5.3.3
#### 2020/05/12(Tue)
- bugfix string.isLast

### 5.3.2
#### 2020/05/10(Sun)
- update test code
  - add test_isObjectParameter
  - update test_operation_deleteFirst
  - update test_operation_deleteLast

### 5.3.1
#### 2020/05/10(Sun)
- update array.operation.deleteLength 
  - default parameter
  - bugfix range length
  - update test code
- update compare.initialValue
  - add args compareArray

### 5.3.0
#### 2020/05/09(Sat)
- add string
  - includeFirst / includeLast / includeBothEnds
  - excludeFirst / excludeLast / excludeBothEnds
  - deleteIndex / deleteLength
  - deleteFirst / deleteLast

### 5.2.1
#### 2020/05/08(Fri)
- update array.subIndex default parameter
  - update test code

### 5.2.0
#### 2020/05/08(Fri)
- update polyfill.js
  - delete Object.entries
  - delete Object.defineProperties
- rename BothEdges >> BothEnds
  - BothEnds change alias name to original name
  - delete BothEdges
    - array.isBothEdges >> isBothEnds
    - array.operation.includeBothEdges >> includeBothEnds
    - array.operation.excludeBothEdges >> excludeBothEnds
    - array.operation.trimBothEdges >> trimBothEnds
- rename args name indexFirst >> indexStart / indexLast >> indexEnd
  - Reference String.prototype.substring()
    - array.subIndex
    - array.operation.deleteIndex
- rename args name startIndex >> indexStart
  - string.indexOfFirst / indexOfLast
- add string
  - isBothEnds
  - subIndex / subLength
  - subFirst / subLast
- update array
  - default parameter
    - subLength / subFirst / subLast
- bugfix array.subLength range length

### 5.1.0
#### 2020/05/06(Wed)
- add string.indexOfFirst/indexOfLast
- add string.isFirst/isLast like startsWith/endsWith
- add parts.parts SelfReference
- move matchFormat from string_common.js to matchFormat.js
- args name change value >> str
  - repeat
  - isLowerCase/isUpperCase
- update test code
- update polyfill.js
  - delete String.prototype.includes
  - delete String.protoype.startsWith/endsWith
  - delete Array.prototype.includes

### 5.0.0
#### 2020/05/04(Mon)
- Uninstall @babel/polyfill
  - support IE11 test all success
- add Polyfill String.includes
- support bugfix run jest
- npm update
  - moment 2.24.0
    - 2.25.0-2 webpack build bug exists

### 4.10.1
#### 2020/05/02(Sat)
- upddate unique

### 4.10.0
#### 2020/05/01(Fri)
- add canUseMap
- add canUseSet
- update unique
- rename
  - toString >> valueToString
  - toNumber >> valueToNumber
  - toInteger >> valueToInteger

### 4.9.2
#### 2020/04/30(Thu)
- bugfix convert.toString
- add testCounter
- update testCode

### 4.9.1
#### 2020/04/28(Tue)
- update test code
  - String(value)
  - value.toString()
  - parseInt

### 4.9.0
#### 2020/04/27(Mon)
- add toString
- add test code
  - String Cast
  - value.toString()
  - parseFloat
  - parseInt
- update eslint setting

### 4.8.0
#### 2020/04/25(Sat)
- update if_
  - update if_(true/false)({ then: A, else: B })
  - add if_(true/false)(A, B)
  - add if_(true/false).then(A).else(B)
  - add if_(true/false).else(A).then(B)

### 4.7.0
#### 2020/04/21(Tue)
- npm update
- @babel/polyfill devDependencies > dependencies

### 4.6.1
#### 2020/04/19(Sun)
- bugfix inProperty

### 4.6.0
#### 2020/04/04(Sat)
- update matchValue matchSomeValue matchAllValue
- update toNumber toInteger
- add test.js expect().toBe()
- update equalDeep
- update functionValue

### 4.5.0
#### 2020/03/30(Mon)
- add array.operation
  - sort(Number|Length|Dictionary)(Ascending|Descending)
- add compare
  - allMatch someMatch indexOfMatch
- update consoleHook ErrorType
- bugfix stringToInteger

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
