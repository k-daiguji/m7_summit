export abstract class BaseMountain {
  private hp: number;

  constructor(
    private readonly maxHp: number,
    private readonly atk: number,
  ) {
    this.hp = this.maxHp;
  }

  abstract getName: () => string;

  abstract getPath: () => string;

  public getRatio = () => {
    const ratio = (this.hp / this.maxHp) * 100;
    return Math.max(0, Math.ceil(ratio));
  };

  public attack = async (target: BaseMountain) => {
    target.hp = Math.max(0, target.hp - this.atk);
  };
}
