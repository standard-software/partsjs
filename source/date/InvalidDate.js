export const InvalidDate = function() {
  if (!(this instanceof InvalidDate)) {
    return new InvalidDate();
  }

  return new Date('');
};

export default { InvalidDate };
