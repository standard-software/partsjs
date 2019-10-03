const test_execute_index = (parts) => {

  const { test_execute_type     } = require('./type/type.test.js');
  const { test_execute_syntax   } = require('./syntax/syntax.test.js');
  const { test_execute_test     } = require('./test/test.test.js');
  const { test_execute_compare  } = require('./compare/compare.test.js');
  const { test_execute_convert  } = require('./convert.test.js');
  const { test_execute_string   } = require('./string.test.js');
  const { test_execute_object   } = require('./object/object.test.js');
  const { test_execute_consoleHook  } = require('./consoleHook.test.js');

  console.log('test start. ' + parts.VERSION);
  test_execute_type(parts);
  test_execute_syntax(parts);
  test_execute_test(parts);
  test_execute_compare(parts);
  test_execute_convert(parts);
  test_execute_string(parts);
  test_execute_object(parts);
  test_execute_consoleHook(parts);
  console.log('test finish.');
}

module.exports = {
  test_execute_index,
};