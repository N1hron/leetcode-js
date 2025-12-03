import { describe, expect, it } from "vitest";

import { reduce } from ".";

describe("reduce", () => {
  it("should execute the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element",
    () => {
      const nums = [1, 2, 3, 4];

      expect(reduce(nums, (accum, curr) => accum + curr, 0)).toBe(10);
      expect(reduce(nums, (accum, curr) => accum + curr * curr, 100)).toBe(130);
      expect(reduce([], () => 0, 25)).toBe(25);
    },
  );
});