import { describe, expect, it } from "vitest";

import { checkIfInstanceOf } from ".";

describe("checkIfInstanceOf", () => {
  it("should check if a given value is an instance of a given class or superclass", () => {
    const testCases = [
      [[new Date(), Date], true],
      [[Date, Date], false],
      [[5, Number], true],
      [[null, null], false],
    ];

    for (const [args, expected] of testCases) {
      expect(checkIfInstanceOf(...args)).toBe(expected);
    }
  });
});