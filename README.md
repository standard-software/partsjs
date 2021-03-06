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

    npm i @standard-software/parts@10.7.0
    npm i @standard-software/parts@9.2.0

### type CommonJS

```js
// index.js
const parts = require("@standard-software/parts");

console.log(
  'parts version is ', parts.VERSION
);
```
    node index.js

### type ES Modules

```js
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

```js
// index.js
import parts from './source/index.js';

console.log(
  'parts version is ', parts.VERSION
);
```
    deno run index.js

### web

```js
// index.js
import parts from 'https://raw.githubusercontent.com/standard-software/partsjs/v10.7.0/source/index.js';

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

```html
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

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@standard-software/parts@10.7.0"></script>
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

## RunKit + npm

https://npm.runkit.com/%40standard-software%2Fparts

```js
var parts = require("@standard-software/parts")
console.log('parts version is ', parts.VERSION);
```

## JSBin CDN

https://jsbin.com/popuhog/edit?html,js,console

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/@standard-software/parts@10.7.0"></script>

</body>
</html>
```

```js
console.log('parts version is ' + parts.VERSION)
```

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

```js
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

```json
// appsscript.json
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

```js
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

```js
// code.gs
function myFunction() {
  console.log('parts version is ' + parts.VERSION);
  Browser.msgBox('parts version is ' + parts.VERSION);
}
```

run and see sheet page.

more write add code.gs

```js
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

```html
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

### 10.7.0
#### 2021/06/19(Sat)
- add getDatetime / getDatetimeUTC
- add getTimezoneOffset
- update Year() / Month() / Day()
  / dateToString() / stringToDate() / Datetime()
  - support timezoneOffset seconds
- update Jest test code
  - support invalid date
  - update jest.config.js

### 10.6.1
#### 2021/06/15(Tue)
- update dateToString
  - update default timezone
  - update __dateToStringRule.js
  - bugfix _minutesToTexts GMT-0230 or GMT-0930

### 10.6.0
#### 2021/06/14(Mon)
- add date.strintToDate date.stringToDateUTC
  - add stringToDateRule
  - support full object parameter
  - support timezone
- rename DateTime to Datetime
  - update inside
  - support timezone
- add DatetimeUTC
- rename datetimeToString >> dateToString
  - rename detetomeToStringFunc >> dateToStringRule
  - rename dateToString.func >> dateToString.rule
  - add function dateToStringUTC
  - support timezone
- update equal support Invalid Date
- add date.InvalidDate()
- add function
  - Year/YearUTC
  - Month/MonthUTC
  - Day/DayUTC
- update test code date
  - support timezone
- delete
  - Today >> replace Day('today')
  - dayOfWeekEnglishShort / dayOfWeekEnglishLong
  - dayOfWeekJapaneseShort / dayOfWeekJapaneseLong
  - nameOfMonthEnglishChar3 / Char4 / Long
- add date.minutesToTexts
- add date.textsToMinutes
- update replaceAllArray add args detail
- update number string convert testcode
- update parseInt testCode
- add string.escapeRegExp
- add checkNotEqual
- update instanceof code
- update test for deno for node
  - Reflect
  - Intl

### 10.5.0
#### 2021/03/29(Mon)
- update round
  - support full object parameter
- add roundUp / roundDown
  - webpack for wsh build size change
- update replaceAllRepeat
  - support args maxCount repeat
- update bugfix datetimeToString timezone string

### 10.4.1
#### 2021/01/20(Wed)
- update testcode build
- update package
  - babel
  - webpack
  - etc...

### 10.4.0
#### 2021/01/10(Sun)
- update replaceAll
  - support full object parameter
- add replaceAllRepeat
  - add _replaceAllRepeat.js replaceAllRepeat.js
- add string.includeCount
  - add _includeCount.js includeCount.js
- add datetimeToString
- add dayOfWeek
  - dayOfWeek
  - dayOfWeekEnglishShort / dayOfWeekEnglishLong
  - dayOfWeekJapaneseShort / dayOfWeekJapaneseLong
- add nameOfMonth
  - nameOfMonth.js
  - nameOfMonthEnglishChar3 / Char4 / Long
- update build for WSH
  - EncodingPlugin UTF-16LE for Japanese Support
  - update testCode about Zenkaku Space

### 10.3.0
#### 2020/12/09(Wed)
- add isPrimitiveType / isReferenceType
  - add isPrimitiveType.js / isReferenceType.js
- update setProperty
  - support objectLike (array function etc)
- update testCode 
  - update equalDeepUseRecursive
  - update cloneDeepUseRecursive
- from getProperty.js
  add _getProperty.js 
- from object_common.js
  - add _setProperty.js / setProperty.js
  - add _copyProperty.js / copyProperty.js
- update package.json scripts
- update .eslintrc.js
- update testcode bigint etc
- update merge
  - support deep merge
  - update testcode
- rename __returnValueFunction >> __returnFirstArgFunc
  - add __returnSecondArgFunc

### More Info
[VERSION.md](./VERSION.md)
