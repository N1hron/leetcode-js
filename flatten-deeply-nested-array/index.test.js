import { describe, it, expect } from "vitest";

import { flat } from "./index";

describe("flat", () => {
  it("should return a flattened version of array", () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

    expect(flat(arr, 0)).toBe(arr);
    expect(flat(arr, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]);
    expect(flat(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
});