const value1IsValue2 = (value1, value2) => {
  return `${value1} is ${value2}`;
};

const value1IsNotValue2 = (value1, value2) => {
  return `${value1} is not ${value2}`;
}

const value1IsNotDefined = (value1) => {
  return value1IsNotValue2(value1, 'defined');
}

const ReferenceError = {};

ReferenceError.value1IsNotDefined = value1IsNotDefined;

/**
 * xxx parameter args(yyy) is not defined
 */
ReferenceError.value1ParameterArgsValue2IsNotDefined = (value1, value2) => {
  return value1IsNotDefined(`${value1} parameter args(${value2})`);
};

/**
 * TypeError
 *  value1IsBoolean / value1IsNumber / etc...
 *  value1IsNotBoolean / value1IsNotNumber / etc...
 */
const TypeError = {};
const TypeName = [
  'Boolean', 'Number','Integer', 'String', 'Array',
  'Function'
];
TypeName.forEach(element => {
  TypeError[`value1Is${element}`] = (value1) => {
    return value1IsValue2(value1, element.toLowerCase());
  };
  TypeError[`value1IsNot${element}`] = (value1) => {
    return value1IsNotValue2(value1, element.toLowerCase());
  };
  TypeError[`value1ArgsValue2IsNot${element}`] = (value1, value2) => {
    return value1IsNotValue2(`${value1} args(${value2})`, element.toLowerCase());
  };
});

module.exports = {
  value1IsValue2,
  value1IsNotValue2,
  ReferenceError,
  TypeError,
};