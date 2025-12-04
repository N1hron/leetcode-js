import { describe, expect, it } from "vitest";

import { composeMutates, composeRecursion } from ".";

describe("compose", () => {
  it("should return a new function that is the function composition of the array of functions", () => {
    const functions_one = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const functions_two = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];

    expect(composeRecursion(functions_one)(4)).toBe(65);
    expect(composeMutates(functions_one)(4)).toBe(65);

    expect(composeRecursion(functions_two)(1)).toBe(1000);
    expect(composeMutates(functions_two)(1)).toBe(1000);

    expect(composeRecursion([])(42)).toBe(42);
    expect(composeMutates([])(42)).toBe(42);
  });
});