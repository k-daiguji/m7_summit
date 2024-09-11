import { describe, expect, it } from "vitest";
import { K2 } from "../../../src/models/mountains/k2";

describe("K2", () => {
  it("Got name", () => {
    const testee = new K2();

    const actual = testee.getName();

    expect(actual).toBe("K2");
  });

  it("Got path", () => {
    const testee = new K2();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/K2.png");
  });

  it("Got height", () => {
    const testee = new K2();

    const actual = testee.getHeight();

    expect(actual).toBe("86%");
  });

  it("Changed hp ratio", () => {
    const p1 = new K2();
    const p2 = new K2();

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
