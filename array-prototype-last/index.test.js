import { describe, expect, it } from "vitest";

import "./index";

describe("Array.prototype.last", () => {
  it("should return the last element in array", () => {
    expect([null, {}, 3].last()).toBe(3);
  });

  it("should return -1 if array is empty", () => {
    expect([].last()).toBe(-1);
  });
});