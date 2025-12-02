import { describe, expect, it, vi } from "vitest";

import { TimeLimitedCache } from ".";

describe("TimeLimitedCache", () => {
  it("allows getting and setting key-value pairs with a time until expiration associated with each key", () => {
    const timeLimitedCache = new TimeLimitedCache();
    const millis = 1000;

    vi.useFakeTimers();

    expect(timeLimitedCache.set("foo", "bar", millis)).toBe(false);
    expect(timeLimitedCache.set("foo", "bar", millis)).toBe(true);
    expect(timeLimitedCache.get("foo")).toBe("bar");
    expect(timeLimitedCache.count()).toBe(1);

    vi.advanceTimersByTime(millis / 2);
    expect(timeLimitedCache.get("foo")).toBe("bar");
    expect(timeLimitedCache.count()).toBe(1);

    vi.advanceTimersByTime(millis / 2);
    expect(timeLimitedCache.get("foo")).toBe(-1);
    expect(timeLimitedCache.count()).toBe(0);

    vi.useRealTimers();
  });
});