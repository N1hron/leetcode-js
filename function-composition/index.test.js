import { describe, expect, it } from "vitest";

import { compose_mutates, compose_recursion } from ".";

describe("compose", () => {
  it("should return a new function that is the function composition of the array of functions", () => {
    const functions_one = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const functions_two = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];

    expect(compose_recursion(functions_one)(4)).toBe(65);
    expect(compose_mutates(functions_one)(4)).toBe(65);

    expect(compose_recursion(functions_two)(1)).toBe(1000);
    expect(compose_mutates(functions_two)(1)).toBe(1000);

    expect(compose_recursion([])(42)).toBe(42);
    expect(compose_mutates([])(42)).toBe(42);
  });
});