import { describe, expect, it, vi } from "vitest";

import { memoize } from ".";

describe("memoize (no constraints on types of values)", () => {
  it("should return memoized version of a function", () => {
    const fn = vi.fn((a) => a);
    const memoizedFn = memoize(fn);

    expect(memoizedFn(2)).toBe(2);
    expect(memoizedFn(2)).toBe(2);
    expect(memoizedFn(1)).toBe(1);

    expect(fn).toHaveBeenCalledTimes(2);
  });
});