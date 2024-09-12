import { BaseMountain } from "./mountain";

export class Fuji extends BaseMountain {
  constructor() {
    super(3776, 200);
  }

  public getName = () => "Fuji";

  public getPath = () => "./dist/datasets/Fuji.png";

  public getHeight = () => "37%";

  public getAttackImage = () => "./dist/datasets/Green.png";
}
