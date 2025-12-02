import { describe, expect, it, vi } from "vitest";

import { sleep } from ".";

describe("sleep", () => {
  it("should return a promise that resolves after specified time", async () => {
    vi.useFakeTimers();

    let cb = vi.fn();

    const millis = 1000;
    sleep(millis).then(cb);

    expect(cb).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(millis - 1);
    expect(cb).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(cb).toHaveBeenCalledOnce();

    vi.useRealTimers();
  });
});