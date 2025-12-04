Array.prototype.groupBy = function(fn) {
  const table = {};
  for (const value of this) {
    const key = fn(value);
    if (!table[key]) {
      table[key] = [];
    }
    table[key].push(value);
  }
  return table;
};

Array.prototype.groupByShort = function(fn) {
  const table = {};
  for (const value of this) {
    (table[fn(value)] ||= []).push(value);
  }
  return table;
};