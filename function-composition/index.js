export const composeMutates = function(functions) {
  return function(x) {
    while (functions.length) {
      x = functions.pop()(x);
    }
    return x;
  };
};

export const composeRecursion = function(functions) {
  return function(x) {
    if (functions.length > 0) {
      return composeRecursion(functions.slice(0, -1))(functions.at(-1)(x));
    }
    return x;
  };
};