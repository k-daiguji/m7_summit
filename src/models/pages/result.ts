import type { BaseMountain } from "../mountains/mountain";
import { TitlePage } from "./title";

export class ResultPage {
  private readonly page: HTMLDivElement;

  constructor(private readonly winner: BaseMountain) {
    this.page = document.createElement("div");
    this.appendIcon();
  }

  public show = () => document.body.appendChild(this.page);

  private appendIcon = () => {
    const btn = document.createElement("button");
    btn.className = "fill next result-icon";
    btn.addEventListener("click", () => {
      document.body.removeChild(this.page);
      new TitlePage().show();
    });
    const name = document.createElement("div");
    name.className = "result-name";
    name.textContent = `WINNER: ${this.winner.getName()}`;
    const img = document.createElement("img");
    img.src = this.winner.getPath();
    img.className = "result-image";
    btn.appendChild(name);
    btn.appendChild(img);
    this.page.appendChild(btn);
  };
}
