const _primitiveTypeCheckFunc = (typeName) => {
  return ((value) => typeof value === typeName);
};

const _isUndefined = _primitiveTypeCheckFunc('undefined');

module.exports = {
  _primitiveTypeCheckFunc,
  _isUndefined,
};

