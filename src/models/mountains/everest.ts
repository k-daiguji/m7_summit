import { BaseMountain } from "./mountain";

export class Everest extends BaseMountain {
  constructor() {
    super(8849, 200);
  }

  public getName = () => "Everest";

  public getPath = () => "./dist/datasets/Everest.png";

  public getHeight = () => "88%";

  public getAttackImage = () => "./dist/datasets/Snow.png";
}
