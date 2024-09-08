import { describe, expect, it, vi } from "vitest";
import { FightingPage } from "../../../src/models/pages/fighting";
import { Fuji } from "../../../src/models/mountains/fuji";

const show = vi.fn();
vi.mock("../../../src/models/pages/result", () => {
  return { ResultPage: vi.fn(() => ({ show })) };
});

describe("FightingPage", () => {
  it("Displayed page", () => {
    vi.useFakeTimers();
    const testee = new FightingPage(new Fuji(), new Fuji());
    show.mockClear();

    testee.show();

    const headers = document.body.getElementsByClassName("fighting-header");
    expect(headers.length).toBe(1);
    const bars = headers[0].getElementsByClassName("fighting-bar");
    expect(bars.length).toBe(1);
    const timers = headers[0].getElementsByClassName("fighting-timer");
    expect(timers.length).toBe(1);
    expect(timers[0].textContent).toBe("99");
    const stages = document.body.getElementsByClassName("fill");
    expect(stages.length).toBe(1);

    vi.advanceTimersByTime(98000);

    expect(timers[0].textContent).toBe("1");
    expect(show).toHaveBeenCalledTimes(0);

    vi.advanceTimersByTime(1000);

    expect(show).toHaveBeenCalledOnce();
    expect(show).toHaveBeenCalledWith();
    vi.useRealTimers();
  });
});
