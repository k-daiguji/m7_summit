import { describe, expect, it } from "vitest";
import { Matterhorn } from "../../../src/models/mountains/matterhorn";

describe("Matterhorn", () => {
  it("Got name", () => {
    const testee = new Matterhorn();

    const actual = testee.getName();

    expect(actual).toBe("Matterhorn");
  });

  it("Got path", () => {
    const testee = new Matterhorn();

    const actual = testee.getPath();

    expect(actual).toBe("./dist/datasets/Matterhorn.png");
  });

  it("Got height", () => {
    const testee = new Matterhorn();

    const actual = testee.getHeight();

    expect(actual).toBe("44%");
  });

  it("Changed hp ratio", () => {
    const p1 = new Matterhorn();
    const p2 = new Matterhorn();

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(100);

    p1.attack(p2);

    expect(p1.getRatio()).toBe(100);
    expect(p2.getRatio()).toBe(97);

    p2.attack(p1);

    expect(p1.getRatio()).toBe(97);
    expect(p2.getRatio()).toBe(97);
  });
});
