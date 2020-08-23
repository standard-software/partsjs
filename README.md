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
  - revive support wsh ver 7.x above
  - not support ver 6.x
  - support ver 5.x.x below

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
import parts from 'https://raw.githubusercontent.com/standard-software/partsjs/v6.0.0/source_code/index.js';

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

### refer to example

- partsjs/run_check/html/
- partsjs/test/release/web/

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
<script language="JavaScript" src="../../release/parts.js"></script>

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

### 7.4.0
#### 2020/08/23(Sun)

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

### More Info
[VERSION.md](./VERSION.md)
