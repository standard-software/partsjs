# Parts.js
JavaScript Code Parts TypeSafe Library Compatible with many js platform

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
  - revive support wsh Parts.js ver 10.x after
  - not support wsh Parts.js ver 6.x / 9.x
  - support wsh Parts.js ver 8.x / 7.x / 5.x before

## How to use parts.js in Node.js

### npm install

Normal
    npm i @standard-software/parts

When specifying the version
    npm i @standard-software/parts@9.2.0
    npm i @standard-software/parts@10.0.0

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

### refer to example

- partsjs/run_check/node_release/
- partsjs/test/build/

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
import parts from 'https://raw.githubusercontent.com/standard-software/partsjs/v10.0.0/source/index.js';

console.log(
  'parts version is ', parts.VERSION
);
```
    deno run index.js

### refer to example

- partsjs/run_check/deno_local/
- partsjs/run_check/deno_web/
- partsjs/test/source/

## How to use parts.js in HTML page

### HTML file

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <script src="./release_build/parts.js"></script>
  <script>
    document.write('parts version is ' + parts.VERSION)
  </script>
</body>
```

You can now use the functions of the parts.js object.

### HTML file CDN

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@standard-software/parts@10.0.0"></script>
  <script>
    document.write('parts version is ' + parts.VERSION)
  </script>
</body>
```

You can now use the functions of the parts.js object.

### refer to example

- partsjs/run_check/html/
- partsjs/test/release/web/
- partsjs/docs/test/web/test.html  
  https://standard-software.github.io/partsjs/test/web/test.html
- partsjs/docs/test/web-cdn/test.html  
  https://standard-software.github.io/partsjs/test/web-cdn/test.html

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

## How to use parts.js in WSH (Windows Scripting Host .wsf file)

### refer to example

- partsjs/run_check/wsh/
- partsjs/test/release/wsh/

### wsf file (ex. index.wsf)

```
<?xml version="1.0" encoding="shift-jis" ?>

<job>
<script language="JavaScript">
<![CDATA[

  var outputMessage = '';
  var console = {
    log: function() {
      var args = Array.prototype.slice.call(arguments);
      for (var i = 0; i < args.length; i += 1) {
        outputMessage += args[i];
        outputMessage += '\n'
      }
    }
  };

  var module = {};
]]>
</script>
<script language="JavaScript" src="./polyfill_Object_defineProperty.js"></script>
<script language="JavaScript" src="../../release_wsh/1.parts.js"></script>
<script language="JavaScript" src="../../release_wsh/2.parts.js"></script>
<script language="JavaScript" src="../../release_wsh/parts.js"></script>

<script language="JavaScript">
<![CDATA[

  console.log('test_index.wsf\n\n');
  console.log(parts.VERSION);

  WScript.Echo(outputMessage);

]]>
</script>
</job>
```

You can now use the functions of the parts.js object.


## Version

### 10.1.0
#### 2020/11/22(Sun)
- add namespace system
  - revive system.consoleHook
  - revive system.wsh
- update NumberArray IntegerArray
  - can new NumberArray
- add DateTime
  - _DateTime.js / DateTime.js
- add isInvalidDate
  - isInvalidDate.js
  - add Polifill Date.prototype.toISOString for WSH
- update setProperty
  - first piriod accept
- add _arrayEntries.js from arrayEntries.js
- update recursive
  - add args property path
- update getProperty
  - support objectLike (array function etc)
- update platform.js
  - delete browserName()
  - update and rename name() >> platformName()
  - update startName >> testStartFileName

### 10.0.0
#### 2020/11/13(Fri)
- update test output
  - add testFrame
- Revive support wsh
  - use webpack.optimize.AggressiveSplittingPlugin
  - update test_parts.js
    - Same simple description as v7.6.0
- update npm scripts
- update run_check wsh index.wsf
- update syntax.recursiveCall >> syntax.recursive
  - delete _recursiveCall.js / recursiveCall.js
  - add _recursive.js / recursive.js

### 9.2.0
#### 2020/11/06(Fri)
- add popArrayFirst / popArrayLast
- add _objectEntries.js from objectEntries.js
- update loop.js
  - delete _loopBase
- add syntax.recursiveCall
  - add _recursiveCall.js / recursiveCall.js

### 9.1.0
#### 2020/11/02(Mon)
- update clone / cloneDeep
  - if clone / cloneDeep args cloneFunc is undefined
    call clone / cloneDeep Fast version
    __clone.js / __cloneDeep.js
  - delete cloneFast / cloneDeepFast
- update array operation deleteLength
- update isArray
  - isArray = Array.isArray
  - Speeding up
- add from array_common.js
  - _map.js/map.js
- add SortFunc
  - _SortFunc.js / SortFunc.js
  - __SortFuncOrder.js
- delete array.operation.sort
  - sort / sortNumber / sortLength / sortDictionary

### 9.0.0
#### 2020/10/27(Tue)
- unsupport WSH
  - delete namespace WSH
  - Parts.js file 512KB over 
    and WSH unsupport 512KB over file
  - I feel that I can handle it if I put effort,
    but I decided to give up already
- delete consoleHook
  - The reason is not convenient.
- update isObject
  - Speeding up
- add cloneDeepFast.js
  - only object and array Recursive clone
  - Equally fastest level compared to rfdc and clone-deep
- update cloneDeep.js
  - _cloneDeep.js / cloneDeep.js
- add paddingFirst / paddingLast

### More Info
[VERSION.md](./VERSION.md)
