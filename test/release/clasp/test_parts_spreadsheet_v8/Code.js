function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name : 'execute myFunction',
      functionName : 'myFunction',
    },
  ];
  sheet.addMenu('run script', entries);
};

function myFunction() {
  Logger.log('start test_parts');
  test_parts.test_execute_index(parts);
  Logger.log('end test_parts');

  Browser.msgBox('test finish.');
}
