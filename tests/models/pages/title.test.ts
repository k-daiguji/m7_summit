import { describe, expect, it } from "vitest";
import { TitlePage } from "../../../src/models/pages/title";

describe("TitlePage", () => {
  it("Displayed page", () => {
    const testee = new TitlePage();

    testee.show();

    const imgs = document.body.getElementsByTagName("img");
    expect(imgs.length).toBe(4);
    const positions = [
      { x: "0px", y: "0px" },
      { x: "0px", y: "50%" },
      { x: "50%", y: "0px" },
      { x: "50%", y: "50%" },
    ];
    positions.forEach((p, i) => {
      expect(imgs[i].className).toBe("title-image");
      expect(imgs[i].style.bottom).toBe(p.y);
      expect(imgs[i].style.left).toBe(p.x);
    });
    const buttons = document.body.getElementsByTagName("button");
    expect(buttons.length).toBe(1);
    expect(buttons[0].className).toBe("fill next title-next");
    const texts = buttons[0].getElementsByTagName("p");
    expect(texts.length).toBe(1);
    expect(texts[0].className).toBe("title-text");
    expect(texts[0].textContent).toBe("M7 Summit");
  });
});
