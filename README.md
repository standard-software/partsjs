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

### 5.0.0
#### 2020/05/03(Sun)
- Uninstall @babel/polyfill

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
  - toNumber >> valueToNumbeer
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
- update test message output

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

### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
