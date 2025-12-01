export const TimeLimitedCache = function() {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const exists = this.cache.has(key);

  if (exists) {
    clearTimeout(this.cache.get(key).timerId);
  }

  this.cache.set(key, {
    value, 
    timerId: setTimeout(() => this.cache.delete(key), duration),
  });

  return exists;
};

TimeLimitedCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }
  return -1;
};


TimeLimitedCache.prototype.count = function() {
  return this.cache.size;
};