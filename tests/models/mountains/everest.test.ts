import { describe, expect, it } from "vitest";
import { Everest } from "../../../src/models/mountains/everest";

describe("Everest", () => {
  it("Got name", () => {
    const testee = new Everest();

    const actual = testee.getName();

    expect(actual).toBe("Everest");
  });

  it("Got path", () => {
    const testee = new Everest();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/Everest.png");
  });

  it("Got height", () => {
    const testee = new Everest();

    const actual = testee.getHeight();

    expect(actual).toBe("88%");
  });

  it("Changed hp ratio", () => {
    const p1 = new Everest();
    const p2 = new Everest();

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
