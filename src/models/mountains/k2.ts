import { BaseMountain } from "./mountain";

export class K2 extends BaseMountain {
  constructor() {
    super(8611, 180);
  }

  public getName = () => "K2";

  public getPath = () => "./dist/datasets/K2.png";

  public getHeight = () => "86%";

  public getAttackImage = () => "./dist/datasets/Snow.png";
}
