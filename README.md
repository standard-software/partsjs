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

- Major Web Browser
  - Chrome
  - Edge
  - firefox
  - Opera
  - Vivaldi
  - IE
- Google Apps Script
  - Google SpreadSheet
- Node
- Windows Scripting Host (WSH)

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
}
```

You can now use the functions of the parts.js object.

To see the execution results

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

## How to use parts.js in WSH (Windows Scripting Host .wsf file)

### refer to example

- partsjs/how_to_use.wsf
- partsjs/test_exec/release_wsh/test_index.wsf

### wsf file (ex. index.wsf)

```
<?xml version="1.0" encoding="shift-jis" ?>
<job>
  <script language="JavaScript">
  <![CDATA[
    var console = {};
  ]]>
  </script>
  <script language="JavaScript" src="./release_build/parts.js"></script>
  <script language="JavaScript">
  <![CDATA[
    WScript.Echo('parts version is ' + parts.VERSION)
  ]]>
  </script>
</job>
```

You can now use the functions of the parts.js object.


## Version

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

### More Info
[VERSION.md](./VERSION.md)
