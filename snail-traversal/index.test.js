import { describe, expect, it } from "vitest";

import "./index";

describe("Array.prototype.snail", () => {
  it("should transform the 1D array into a 2D array organised in the snail traversal order pattern", () => {
    const testCases = [
      [
        [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],
        5,
        4,
        [
          [19, 17, 16, 15],
          [10, 1, 14, 4],
          [3, 2, 12, 20],
          [7, 5, 18, 11],
          [9, 8, 6, 13],
        ],
      ],
      [
        [1, 2, 3, 4],
        1,
        4,
        [[1, 2, 3, 4]],
      ],
      [
        [1, 3],
        2,
        2,
        [],
      ],
    ];

    for (const [nums, rows, cols, expected] of testCases) {
      expect(nums.snail(rows, cols)).toEqual(expected);
    }
  });
});