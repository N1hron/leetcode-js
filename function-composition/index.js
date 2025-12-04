export const compose_mutates = function(functions) {
  return function(x) {
    while (functions.length) {
      x = functions.pop()(x);
    }
    return x;
  };
};

export const compose_recursion = function(functions) {
  return function(x) {
    if (functions.length > 0) {
      return compose_recursion(functions.slice(0, -1))(functions.at(-1)(x));
    }
    return x;
  };
};