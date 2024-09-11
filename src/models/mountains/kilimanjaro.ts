import { BaseMountain } from "./mountain";

export class Kilimanjaro extends BaseMountain {
  constructor() {
    super(5895, 160);
  }

  public getName = () => "Kilimanjaro";

  public getPath = () => "./dist/datasets/Kilimanjaro.png";

  public getHeight = () => "58%";
}
