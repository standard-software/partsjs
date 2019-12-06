const _replaceAll = (str, before, after) => {
  return str.split(before).join(after);
};

module.exports = {
  _replaceAll,
};
