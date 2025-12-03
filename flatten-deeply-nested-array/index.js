export const flat = function (arr, n) {
  if (n > 0) {
    const flatten = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatten.push(...flat(item, n - 1));
      } else {
        flatten.push(item);
      }
    }
    return flatten;
  };
  return arr;
};