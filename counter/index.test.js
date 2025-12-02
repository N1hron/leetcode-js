import { describe, expect, it } from "vitest";

import { createCounter } from ".";

describe("createCounter", () => {
  it("creates counter function that returns 1 more than the previous value", () => {
    let counter = createCounter(10);

    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);

    counter = createCounter(-2);

    expect(counter()).toBe(-2);
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });
});