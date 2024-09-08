import { describe, expect, it, vi } from "vitest";
import { SelectionPage } from "../../../src/models/pages/selection";
import { MOUNTAINS } from "../../../src/constants/mountains";

const show = vi.fn();
vi.mock("../../../src/models/pages/fighting", () => {
  return { FightingPage: vi.fn(() => ({ show })) };
});

describe("SelectionPage", () => {
  it("Displayed page", () => {
    const testee = new SelectionPage();
    show.mockClear();

    testee.show();

    const buttons = document.body.getElementsByTagName("button");
    expect(buttons.length).toBe(7);
    const imgs = document.body.getElementsByTagName("img");
    expect(imgs.length).toBe(7);
    MOUNTAINS.forEach((m, i) => {
      expect(buttons[i].className).toBe("next selection-icon");
      expect(buttons[i].disabled).toBe(false);
      expect(buttons[i].style.backgroundColor).toBe("");
      const texts = buttons[i].getElementsByTagName("div");
      expect(texts.length).toBe(1);
      expect(texts[0].className).toBe("selection-name");
      expect(texts[0].textContent).toBe(m.getName());
      const imgs = buttons[i].getElementsByTagName("img");
      expect(imgs.length).toBe(1);
      expect(imgs[0].className).toBe("selection-image");
    });

    buttons[0].click();

    expect(buttons[0].disabled).toBe(true);
    expect(buttons[0].style.backgroundColor).toBe("red");

    buttons[1].click();

    expect(show).toHaveBeenCalledOnce();
    expect(show).toHaveBeenCalledWith();
  });
});
