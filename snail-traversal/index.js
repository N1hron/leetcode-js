Array.prototype.snail = function(rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return [];
  };

  const result = new Array(rowsCount);

  for (let rn = 1; rn <= rowsCount; rn++) {
    result[rn - 1] = [];
    for (let cn = 1; cn <= colsCount; cn++) {
      if (cn % 2 === 1) {
        result[rn - 1][cn - 1] = this[(rowsCount * (cn - 1) + rn) - 1];
      } else {
        result[rn - 1][cn - 1] = this[rowsCount * cn - rn];
      }
    }
  }

  return result;
};