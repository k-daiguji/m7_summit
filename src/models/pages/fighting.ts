import type { BaseMountain } from "../mountains/mountain";

export class FightingPage {
  private readonly page: HTMLDivElement;
  private now = 99;

  constructor(
    private readonly p1: BaseMountain,
    private readonly p2: BaseMountain,
  ) {
    this.page = document.createElement("div");
    this.appendHeader();
    const canvas = document.createElement("canvas");
    canvas.className = "fill";
    this.page.appendChild(canvas);
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
        // TODO: Display result page
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
}
