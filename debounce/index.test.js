import { describe, expect, it, vi } from "vitest";
import { debounce } from ".";

describe("debounce", () => {
  it("should return debounced version of a function", () => {
    const time = 1000;
    const fn = vi.fn();
    const debouncedFn = debounce(fn, time);

    vi.useFakeTimers();

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(time);

    expect(fn).toHaveBeenCalledOnce();
  });
});