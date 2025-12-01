Array.prototype.last = function() {
  if (this && this.length > 0) {
    return this[this.length - 1];
  }
  return -1;
};