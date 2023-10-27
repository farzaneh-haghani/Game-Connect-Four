import { ConnectFour } from "../utils/class";

describe("4 in a diagonal to the Right", () => {
  test("4 in a diagonal I to the Right", () => {
    const c4 = new ConnectFour([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "r", null, null, null],
      [null, null, "r", "y", null, null, null],
      [null, "r", "y", "y", null, null, null],
      ["r", "y", "y", "y", null, null, null],
    ]);
    expect(c4.getDiagonalRight(1, 1)).toStrictEqual([
      "r",
      "r",
      "r",
      "r",
      null,
      null,
    ]);
  });

  test("4 in a diagonal II to the Right", () => {
    const c4 = new ConnectFour([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, "r", null, null],
      [null, null, null, "r", "y", null, null],
      [null, null, "r", "y", "y", null, null],
      [null, "r", "y", "y", "y", null, null],
    ]);
    expect(c4.getDiagonalRight(1, 2)).toStrictEqual([
      "r",
      "r",
      "r",
      "r",
      null,
      null,
    ]);
  });

  test("4 in a diagonal III to the Right", () => {
    const c4 = new ConnectFour();
    c4.playMove("r", 3);
    c4.playMove("y", 4);
    c4.playMove("r", 4);
    c4.playMove("y", 5);
    c4.playMove("y", 5);
    c4.playMove("r", 5);
    c4.playMove("y", 6);
    c4.playMove("y", 6);
    c4.playMove("y", 6);
    c4.playMove("r", 6);
    expect(c4.getDiagonalRight(1, 3)).toStrictEqual(["r", "r", "r", "r", null]);
  });

  test("4 in a diagonal IV to the Right", () => {
    const c4 = new ConnectFour();
    c4.playMove("r", 4);
    c4.playMove("y", 5);
    c4.playMove("r", 5);
    c4.playMove("y", 6);
    c4.playMove("y", 6);
    c4.playMove("r", 6);
    c4.playMove("y", 7);
    c4.playMove("y", 7);
    c4.playMove("y", 7);
    c4.playMove("r", 7);
    expect(c4.getDiagonalRight(1, 4)).toStrictEqual(["r", "r", "r", "r"]);
  });

  test("4 in a diagonal V to the Right", () => {
    const c4 = new ConnectFour();
    c4.playMove("r", 5);
    c4.playMove("y", 6);
    c4.playMove("r", 6);
    c4.playMove("y", 7);
    c4.playMove("y", 7);
    c4.playMove("r", 7);

    expect(c4.getDiagonalRight(1, 5)).toStrictEqual(["r", "r", "r"]);
  });

  test("4 in a diagonal VI to the Right", () => {
    const c4 = new ConnectFour();
    c4.playMove("r", 2);
    c4.playMove("y", 3);
    c4.playMove("r", 3);
    c4.playMove("y", 4);
    c4.playMove("y", 4);
    c4.playMove("r", 4);
    c4.playMove("y", 5);
    c4.playMove("y", 5);
    c4.playMove("y", 5);
    c4.playMove("r", 5);

    expect(c4.getDiagonalRight(1, 2)).toStrictEqual([
      "r",
      "r",
      "r",
      "r",
      null,
      null,
    ]);
  });
});
