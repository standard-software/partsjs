export const isSymbol = (value) => typeof value === 'symbol';

export const isNotSymbol   = value => !isSymbol(value);

export default {
  isSymbol, isNotSymbol,
};

