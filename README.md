# Parts.js
JavaScript Code Parts TypeSafe Library Compatible with any js platform

## URL

### GitHub
standard-software/partsjs: JavaScript Code Parts  
https://github.com/standard-software/partsjs

### npm
@standard-software/parts - npm  
https://www.npmjs.com/package/@standard-software/parts

## Support platform

- Node.js
- Deno
- Major Web Browser
  - Chrome
  - Edge
  - firefox
  - Opera
  - Vivaldi
  - IE11
- Google Apps Script
  - Google SpreadSheet
  - V8 
  - Rhino
- Windows Scripting Host (WSH)
  - (not support above ver 6.0.0, support below ver 5.8.2 )

## How to use parts.js in Node.js

### npm install
    npm i @standard-software/parts

### type CommonJS

```
// index.js
const parts = require("@standard-software/parts");

console.log(
  'parts version is ', parts.VERSION
);
```
    node index.js

### type ES Modules

```
// index.mjs
import parts from '@standard-software/parts';

console.log(
  'parts version is ', parts.VERSION
);
```
    node --experimental-modules index.mjs

## How to use parts.js in Deno

### local
```
// index.js
import parts from './source/index.js';

console.log(
  'parts version is ', parts.VERSION
);
```
    deno run index.js

### web
```
// index.js
import parts from 'https://raw.githubusercontent.com/standard-software/partsjs/v6.0.0/source_code/index.js';

console.log(
  'parts version is ', parts.VERSION
);
```
    deno run index.js

## How to use parts.js in HTML page

### refer to example

- partsjs/how_to_use.html
- partsjs/test_exec/release_web/test_index.html

### HTML file

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>how_to_use.html</title>
</head>
<body>
  <script src="./release_build/parts.js"></script>
  <script>
    document.write('parts version is ' + parts.VERSION)
  </script>
</body>
```

You can now use the functions of the parts.js object.

## How to use parts.js in Google Apps Script for Rhino and V8

### access Google Apps Script Home 

https://script.google.com/home

### create new Project

- input name for example [parts.js test]
- menu [file][new][script file]
- input [parts] and created parts.gs file
- Please copy and paste ./release_build/parts.js to parts.gs 

- project
  - code.gs
  - parts.gs

### code.gs

```
// code.gs
function myFunction() {
  console.log('parts version is ' + parts.VERSION);
}
```

You can now use the functions of the parts.js object.

To see console.log execution results

Google Apps Script Home
[parts.js test][run count][my function]

### support V8

- menu [view][show manifest file]

update manifest file
```
// appsscript.json
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

```
// code.gs
function myFunction() {
  outputFunction = () => {
    return 'parts version is ' + parts.VERSION
  }
  console.log(outputFunction());
}
```

V8 engine support arrow function.

You can now use the functions of the parts.js object.

## How to use parts.js in Google SpreadSheet

same [How to use Google Apps Script]

### access Google SpreadSheet

### create new script

- spreadsheet menu [tool][script editor]

open google apps script project

- input name for example [SpreadSheets parts.js test]
- menu [file][new][script file]
- input [parts]
- created parts.gs

You can copy and paste ./release_build/parts.js code into parts.gs

- project
  - code.gs
  - parts.gs

### code.gs

```
// code.gs
function myFunction() {
  console.log('parts version is ' + parts.VERSION);
  Browser.msgBox('parts version is ' + parts.VERSION);
}
```

run and see sheet page.

more write add code.gs

```
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name : "execute myFunction",
      functionName : "myFunction"
    }
  ];
  sheet.addMenu("run script", entries);
};

function myFunction() {
  console.log('parts version is ' + parts.VERSION);
  Browser.msgBox('parts version is ' + parts.VERSION);
}
```

- spreadsheet menu [run script]execute myFunction]

### support V8

same [How to use Google Apps Script]

## Version

### 6.3.0
#### 2020/06/30(Tue)
- delete isType.js _objectToStringCheck
- bugfix isBooleanObject / isStringObject
- rename
  - isArrayType >> isArraySeries
    - alias name isArrayType
  - isObjectType >> isObjectLike
    - alias name isObjectType

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

### More Info
[VERSION.md](./VERSION.md)
