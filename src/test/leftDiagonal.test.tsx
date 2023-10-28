import { ConnectFour } from "../utils/class";

describe("4 in a diagonal to the left", () => {
  test("4 in a diagonal to the left", () => {
    const c4 = new ConnectFour([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["r", null, "r", null, null, null, null],
      ["y", "r", null, "r", null, null, null],
      ["y", "r", "r", null, "r", null, null],
      ["y", "y", "r", "r", null, "r", null],
    ]);
    console.log(c4.gridAsString());
    expect(c4.getDiagonalLeft(1, 4)).toStrictEqual(["r", "r", "r", "r"]);
    expect(c4.getDiagonalLeft(1, 3)).toStrictEqual(["r", "r", "y"]);
    expect(c4.getDiagonalLeft(2, 3)).toStrictEqual(["r", "r", "r"]);
    expect(c4.getDiagonalLeft(1, 6)).toStrictEqual([
      "r",
      "r",
      "r",
      "r",
      null,
      null,
    ]);
  });
});
