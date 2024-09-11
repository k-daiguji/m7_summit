import { BaseMountain } from "./mountain";

export class Kilauea extends BaseMountain {
  constructor() {
    super(1247, 200);
  }

  public getName = () => "Kilauea";

  public getPath = () => "./dist/datasets/Kilauea.png";

  public getHeight = () => "12%";
}
