export abstract class BaseMountain {
  private readonly speed: number;
  private canAttack = true;
  private hp: number;

  constructor(
    private readonly maxHp: number,
    private readonly atk: number,
  ) {
    this.speed = this.maxHp * 0.4;
    this.hp = this.maxHp;
  }

  abstract getName: () => string;

  abstract getPath: () => string;

  abstract getHeight: () => string;

  public reset = () => {
    this.hp = this.maxHp;
  };

  public getRatio = () => {
    const ratio = (this.hp / this.maxHp) * 100;
    return Math.max(0, Math.ceil(ratio));
  };

  public attack = async (target: BaseMountain) => {
    if (this.canAttack) {
      target.hp = Math.max(0, target.hp - this.atk);
      this.canAttack = false;
      setTimeout(() => {
        this.canAttack = true;
      }, this.speed);
    }
  };
}
