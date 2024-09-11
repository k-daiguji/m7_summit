import { describe, expect, it } from "vitest";
import { Aconcagua } from "../../../src/models/mountains/aconcagua";

describe("Aconcagua", () => {
  it("Got name", () => {
    const testee = new Aconcagua();

    const actual = testee.getName();

    expect(actual).toBe("Aconcagua");
  });

  it("Got path", () => {
    const testee = new Aconcagua();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/Aconcagua.png");
  });

  it("Got height", () => {
    const testee = new Aconcagua();

    const actual = testee.getHeight();

    expect(actual).toBe("69%");
  });

  it("Changed hp ratio", () => {
    const p1 = new Aconcagua();
    const p2 = new Aconcagua();

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(100);

    p1.attack(p2);

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(98);

    p2.attack(p1);

    expect(p1.getRatio()).toBe(98);
    expect(p2.getRatio()).toBe(98);
  });
});
