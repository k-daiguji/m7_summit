import { MOUNTAINS } from "../../constants/mountains";
import type { BaseMountain } from "../mountains/mountain";
import { FightingPage } from "./fighting";

export class SelectionPage {
  private readonly page: HTMLDivElement;

  constructor() {
    this.page = document.createElement("div");
    this.appendIcon();
  }

  public show = () => document.body.appendChild(this.page);

  private appendIcon = () => {
    const players: BaseMountain[] = [];
    MOUNTAINS.forEach((m, _) => {
      const btn = document.createElement("button");
      btn.className = "next selection-icon";
      btn.addEventListener("click", () => {
        btn.disabled = true;
        btn.style.backgroundColor = "red";
        players.push(m);
        if (players.length === 2) {
          document.body.removeChild(this.page);
          new FightingPage(players[0], players[1]).show();
        }
      });
      const name = document.createElement("div");
      name.className = "selection-name";
      name.textContent = m.getName();
      const img = document.createElement("img");
      img.src = m.getPath();
      img.className = "selection-image";
      btn.appendChild(name);
      btn.appendChild(img);
      this.page.appendChild(btn);
    });
  };
}
