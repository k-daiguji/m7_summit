import { BaseMountain } from "./mountain";

export class Aconcagua extends BaseMountain {
  constructor() {
    super(6960, 170);
  }

  public getName = () => "Aconcagua";

  public getPath = () => "./dist/datasets/Aconcagua.png";

  public getHeight = () => "69%";
}
