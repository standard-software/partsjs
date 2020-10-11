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
  <script src="https://cdn.jsdelivr.net/npm/@standard-software/parts@8.1.0"></script>
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

### 8.3.0
#### 2020/10/11(Sun)
- update min/max
  - add __min / __max
  - support args func / detail
  - support full object parameter
- update unique
  - defalt func parameter rename
  - update args error
  - no publis __unique
  - add _unique.js __unique.js
- update group
  - defalt func parameter rename
  - add _group.js

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

### More Info
[VERSION.md](./VERSION.md)
