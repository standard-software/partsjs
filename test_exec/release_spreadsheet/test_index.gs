/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-var */

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

  test_parts.test_execute_index(parts);

  Browser.msgBox('test finish.');

  // Apps Script
  // https://script.google.com/home
}
