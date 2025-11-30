export function checkIfInstanceOf(obj, classFunction) {
  if (obj == null || classFunction == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(obj);

  if (prototype === null) {
    return false;
  }

  if (prototype === classFunction.prototype) {
    return true;
  }

  return checkIfInstanceOf(prototype, classFunction);
}