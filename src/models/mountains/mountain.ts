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

  abstract getAttackImage: () => string;

  public reset = () => {
    this.hp = this.maxHp;
  };

  public getRatio = () => {
    const ratio = (this.hp / this.maxHp) * 100;
    return Math.max(0, Math.ceil(ratio));
  };

  public penalty = () => {
    this.hp = Math.max(0, this.hp - this.atk * 13);
  };

  public attack = (target: BaseMountain) => {
    if (this.canAttack) {
      this.canAttack = false;
      setTimeout(() => {
        target.hp = Math.max(0, target.hp - this.atk);
        this.canAttack = true;
      }, this.speed);
      return true;
    }
    return false;
  };
}
