export function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    let key;

    if (args.length === 1) {
      key = args[0];
    } else {
      key = args[0] + " " + args[1];
    }

    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }

    return cache.get(key);
  };
}