export function memoize_slow(fn) {
  const cache = [];
  return function() {
    outer: for (const cached of cache) {
      if (cached.arguments.length === arguments.length) {
        for (let i = 0; i < arguments.length; i++) {
          if (cached.arguments[i] !== arguments[i]) {
            continue outer;
          }
        }
        return cached.result;
      }
    }
    const result = fn.apply(null, arguments);
    cache.push({ arguments, result });
    return result;
  };
}

export function memoize(fn) {
  const cache = new Map();
  return function() {
    let nestedCache = cache;
    for (let i = 0; i < arguments.length; i++) {
      if (nestedCache.has(arguments[i]) && nestedCache.get("n") === i) {
        nestedCache = nestedCache.get(arguments[i]);
      } else {
        nestedCache.set("n", i);
        nestedCache.set(arguments[i], new Map());
        nestedCache = nestedCache.get(arguments[i]);
      }
    }
    if (!nestedCache.has("result")) {
      nestedCache.set("result", fn.apply(null, arguments));
    }
    return nestedCache.get("result");
  };
}