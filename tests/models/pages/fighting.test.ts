import { describe, expect, it, vi } from "vitest";
import { FightingPage } from "../../../src/models/pages/fighting";
import { Fuji } from "../../../src/models/mountains/fuji";

describe("FightingPage", () => {
  it("Displayed page", () => {
    vi.useFakeTimers();
    const testee = new FightingPage(new Fuji(), new Fuji());

    testee.show();

    const headers = document.body.getElementsByClassName("fighting-header");
    expect(headers.length).toBe(1);
    const bars = headers[0].getElementsByClassName("fighting-bar");
    expect(bars.length).toBe(1);
    const timers = headers[0].getElementsByClassName("fighting-timer");
    expect(timers.length).toBe(1);
    expect(timers[0].textContent).toBe("99");

    vi.advanceTimersByTime(98000);

    expect(timers[0].textContent).toBe("1");

    vi.advanceTimersByTime(2000);

    expect(timers[0].textContent).toBe("0");
    vi.useRealTimers();
  });
});
