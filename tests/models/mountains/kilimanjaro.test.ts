import { describe, expect, it } from "vitest";
import { Kilimanjaro } from "../../../src/models/mountains/kilimanjaro";

describe("Kilimanjaro", () => {
  it("Got name", () => {
    const testee = new Kilimanjaro();

    const actual = testee.getName();

    expect(actual).toBe("Kilimanjaro");
  });

  it("Got path", () => {
    const testee = new Kilimanjaro();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/Kilimanjaro.png");
  });

  it("Got height", () => {
    const testee = new Kilimanjaro();

    const actual = testee.getHeight();

    expect(actual).toBe("58%");
  });

  it("Changed hp ratio", () => {
    const p1 = new Kilimanjaro();
    const p2 = new Kilimanjaro();

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
