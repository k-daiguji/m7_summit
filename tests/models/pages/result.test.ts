import { describe, expect, it, vi } from "vitest";
import { ResultPage } from "../../../src/models/pages/result";
import { Fuji } from "../../../src/models/mountains/fuji";

const show = vi.fn();
vi.mock("../../../src/models/pages/title", () => {
  return { TitlePage: vi.fn(() => ({ show })) };
});

describe("ResultPage", () => {
  it("Displayed page", () => {
    const testee = new ResultPage(new Fuji());
    show.mockClear();

    testee.show();

    const buttons = document.body.getElementsByTagName("button");
    expect(buttons.length).toBe(1);
    expect(buttons[0].className).toBe("fill next result-icon");
    const names = buttons[0].getElementsByTagName("div");
    expect(names.length).toBe(1);
    expect(names[0].className).toBe("result-name");
    expect(names[0].textContent).toBe("WINNER: Fuji");
    const imgs = buttons[0].getElementsByTagName("img");
    expect(imgs.length).toBe(1);
    expect(imgs[0].className).toBe("image result-image");
    expect(show).toHaveBeenCalledTimes(0);

    buttons[0].click();

    expect(show).toHaveBeenCalledOnce();
    expect(show).toHaveBeenCalledWith();
  });
});
