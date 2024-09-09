import type { BaseMountain } from "../mountains/mountain";
import { ResultPage } from "./result";

export class FightingPage {
  private readonly page: HTMLDivElement;
  private now = 99;

  constructor(
    private readonly p1: BaseMountain,
    private readonly p2: BaseMountain,
  ) {
    this.page = document.createElement("div");
    this.appendStage();
    this.appendHeader();
    this.appendCharacters();
  }

  public show = () => {
    document.body.appendChild(this.page);
    const id = setInterval(() => {
      this.now = this.now - 1;
      this.page.querySelector(".fighting-timer").textContent =
        this.now.toString();
      if (this.now <= 0) {
        clearInterval(id);
        document.body.removeChild(this.page);
        new ResultPage(
          this.p1.getRatio() > this.p2.getRatio() ? this.p1 : this.p2,
        ).show();
      }
    }, 1000);
  };

  private appendHeader = () => {
    const header = document.createElement("div");
    header.className = "fighting-header";
    const bar = document.createElement("div");
    bar.className = "fighting-bar";
    bar.appendChild(this.createHpBar(this.p1.getName()));
    bar.appendChild(this.createTimer());
    bar.appendChild(this.createHpBar(this.p2.getName()));
    header.appendChild(bar);
    this.page.appendChild(header);
  };

  private createHpBar = (target: string) => {
    const bar = document.createElement("div");
    bar.style.width = "45%";
    const max = document.createElement("div");
    max.style.backgroundColor = "red";
    const now = document.createElement("div");
    now.style.backgroundColor = "yellow";
    now.style.height = "50%";
    const name = document.createElement("div");
    name.textContent = target;
    name.style.color = "orange";
    name.style.height = "50%";
    max.appendChild(now);
    bar.appendChild(max);
    bar.appendChild(name);
    return bar;
  };

  private createTimer = () => {
    const timer = document.createElement("p");
    timer.className = "fighting-timer";
    timer.textContent = this.now.toString();
    return timer;
  };

  private appendStage = () => {
    const stage = document.createElement("img");
    stage.className = "fill";
    stage.style.position = "absolute";
    stage.src = "./dist/datasets/NightSky.png";
    this.page.appendChild(stage);
  };

  private appendCharacters = () => {
    this.page.appendChild(
      this.createCharacter(this.p1.getPath(), "fighting-p1"),
    );
    this.page.appendChild(
      this.createCharacter(this.p2.getPath(), "fighting-p2"),
    );
  };

  private createCharacter = (path: string, className: string) => {
    const img = document.createElement("img");
    img.className = className;
    img.src = path;
    return img;
  };
}
