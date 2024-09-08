import { describe, expect, it } from "vitest";
import { Fuji } from "../../../src/models/mountains/fuji";

describe("Fuji", () => {
  it("Got name", () => {
    const testee = new Fuji();

    const actual = testee.getName();

    expect(actual).toBe("Fuji");
  });

  it("Got path", () => {
    const testee = new Fuji();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/Fuji.png");
  });

  it("Changed hp ratio", () => {
    const p1 = new Fuji();
    const p2 = new Fuji();

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(100);

    p1.attack(p2);

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(95);

    p2.attack(p1);

    expect(p1.getRatio()).toBe(95);
    expect(p2.getRatio()).toBe(95);
  });
});
