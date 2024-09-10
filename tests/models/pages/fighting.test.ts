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
    const imgs = document.body.getElementsByTagName("img");
    expect(imgs.length).toBe(3);
    const [stage, p1, p2] = imgs;
    expect(stage.className).toBe("fill image");
    expect(stage.style.position).toBe("absolute");
    expect(p1.className).toBe("image fighting-p1");
    expect(p2.className).toBe("image fighting-p2");

    document.body.onkeydown({ key: "Right" } as KeyboardEvent);

    expect(p1.style.left).toBe("1%");

    document.body.onkeydown({ key: "ArrowRight" } as KeyboardEvent);

    expect(p1.style.left).toBe("2%");

    document.body.onkeydown({ key: "Left" } as KeyboardEvent);

    expect(p1.style.left).toBe("1%");

    document.body.onkeydown({ key: "ArrowLeft" } as KeyboardEvent);

    expect(p1.style.left).toBe("0%");

    vi.advanceTimersByTime(98000);

    expect(timers[0].textContent).toBe("1");
    expect(show).toHaveBeenCalledTimes(0);

    vi.advanceTimersByTime(1000);

    expect(show).toHaveBeenCalledOnce();
    expect(show).toHaveBeenCalledWith();
    vi.useRealTimers();
  });
});
