import { describe, expect, it } from "vitest";
import { Kilauea } from "../../../src/models/mountains/kilauea";

describe("Kilauea", () => {
  it("Got name", () => {
    const testee = new Kilauea();

    const actual = testee.getName();

    expect(actual).toBe("Kilauea");
  });

  it("Got path", () => {
    const testee = new Kilauea();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/Kilauea.png");
  });

  it("Got height", () => {
    const testee = new Kilauea();

    const actual = testee.getHeight();

    expect(actual).toBe("12%");
  });

  it("Changed hp ratio", () => {
    const p1 = new Kilauea();
    const p2 = new Kilauea();

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(100);

    p1.attack(p2);

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(84);

    p2.attack(p1);

    expect(p1.getRatio()).toBe(84);
    expect(p2.getRatio()).toBe(84);
  });
});
