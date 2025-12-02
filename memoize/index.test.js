import { describe, expect, it, vi } from "vitest";

import { memoize } from ".";

describe("memoize", () => {
  it("should return memoized version of a function", () => {
    const sum = vi.fn(((a, b) => a + b));
    const factorialInner = (n) => n <= 1 ? 1 : n * factorialInner(n - 1);
    const factorial = vi.fn((n) => factorialInner(n));

    const sumMemo = memoize(sum);
    const factorialMemo = memoize(factorial);

    sumMemo(1, 2);
    sumMemo(2, 1);
    sumMemo(1, 2);
    sumMemo(2, 1);

    expect(sum).toHaveBeenCalledTimes(2);

    factorialMemo(1);
    factorialMemo(2);
    factorialMemo(3);
    factorialMemo(1);

    expect(factorial).toHaveBeenCalledTimes(3);
  });
});