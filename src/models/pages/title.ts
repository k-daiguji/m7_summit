import { MOUNTAINS } from "../../constants/mountains";
import { SelectionPage } from "./selection";

export class TitlePage {
  private readonly page: HTMLDivElement;

  constructor() {
    const positions = [
      { x: "0", y: "0" },
      { x: "0", y: "50%" },
      { x: "50%", y: "0" },
      { x: "50%", y: "50%" },
    ];
    this.page = document.createElement("div");
    const images = this.shuffle();
    positions.forEach((p, i) => this.appendImage(images[i], p.y, p.x));
    this.appendButton();
  }

  public show = () => document.body.appendChild(this.page);

  private shuffle = () => {
    const randoms: number[] = [];
    let length = 4;
    while (length) {
      const index = Math.floor(Math.random() * MOUNTAINS.length);
      if (!randoms.includes(index)) {
        randoms.push(index);
        length--;
      }
    }
    return randoms.map(random => MOUNTAINS[random].getPath());
  };

  private appendImage = (src: string, bottom: string, left: string) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "image title-image";
    img.style.bottom = bottom;
    img.style.left = left;
    this.page.appendChild(img);
  };

  private appendButton = () => {
    const btn = document.createElement("button");
    btn.className = "fill next title-next";
    btn.addEventListener("click", () => {
      document.body.removeChild(this.page);
      new SelectionPage().show();
    });
    const p = document.createElement("p");
    p.className = "title-text";
    p.textContent = "M7 Summit";
    btn.appendChild(p);
    this.page.appendChild(btn);
  };
}
