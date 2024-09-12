import type { BaseMountain } from "../mountains/mountain";
import { ResultPage } from "./result";

export class FightingPage {
  private readonly moveMap = new Map([
    ["Left", -1],
    ["ArrowLeft", -1],
    ["Right", 1],
    ["ArrowRight", 1],
  ]);
  private readonly page: HTMLDivElement;
  private now = 99;
  private p1Element: HTMLImageElement | undefined = undefined;
  private p2Element: HTMLImageElement | undefined = undefined;
  private p1HpBar: HTMLDivElement | undefined = undefined;
  private p2HpBar: HTMLDivElement | undefined = undefined;
  private id: NodeJS.Timeout | undefined = undefined;

  constructor(
    private readonly p1: BaseMountain,
    private readonly p2: BaseMountain,
  ) {
    this.p1.reset();
    this.p2.reset();
    this.page = document.createElement("div");
    this.appendStage();
    this.appendHeader();
    this.appendCharacters();
  }

  public show = () => {
    document.body.appendChild(this.page);
    document.body.onkeydown = (e: KeyboardEvent) => this.keydown(e);
    this.id = setInterval(() => {
      this.now = this.now - 1;
      this.page.querySelector(".fighting-timer").textContent =
        this.now.toString();
      this.p2.attack(this.p1);
      if (this.p1.getRatio() === 0) this.finish();
      this.p1HpBar.style.width = `${this.p1.getRatio()}%`;
      if (this.now <= 0) this.finish();
    }, 1000);
  };

  private finish = () => {
    clearInterval(this.id);
    document.body.onkeydown = () => undefined;
    document.body.removeChild(this.page);
    new ResultPage(
      this.p1.getRatio() > this.p2.getRatio() ? this.p1 : this.p2,
    ).show();
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
    if (this.p1HpBar) {
      this.p2HpBar = now;
    } else {
      this.p1HpBar = now;
    }
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
    stage.className = "fill image";
    stage.style.position = "absolute";
    stage.src = "./dist/datasets/NightSky.png";
    this.page.appendChild(stage);
  };

  private appendCharacters = () => {
    this.p1Element = this.createCharacter(
      this.p1.getPath(),
      this.p1.getHeight(),
      "image fighting-p1",
    );
    this.page.appendChild(this.p1Element);
    this.p2Element = this.createCharacter(
      this.p2.getPath(),
      this.p2.getHeight(),
      "image fighting-p2",
    );
    this.page.appendChild(this.p2Element);
  };

  private createCharacter = (
    path: string,
    height: string,
    className: string,
  ) => {
    const img = document.createElement("img");
    img.className = className;
    img.style.height = height;
    img.src = path;
    return img;
  };

  private keydown = (e: KeyboardEvent) => {
    const current = Number(this.p1Element.style.left.replace(/[^0-9]/g, ""));
    const offset = this.moveMap.get(e.key) ?? 0;
    this.p1Element.style.left = `${Math.min(20, Math.max(0, current + offset))}%`;
    if (e.key === "a") {
      this.p1.attack(this.p2);
      if (this.p2.getRatio() === 0) this.finish();
      this.p2HpBar.style.width = `${this.p2.getRatio()}%`;
    }
  };
}
