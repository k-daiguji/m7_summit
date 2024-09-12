import { BaseMountain } from "./mountain";

export class Matterhorn extends BaseMountain {
  constructor() {
    super(4478, 150);
  }

  public getName = () => "Matterhorn";

  public getPath = () => "./dist/datasets/Matterhorn.png";

  public getHeight = () => "44%";

  public getAttackImage = () => "./dist/datasets/Snow.png";
}
