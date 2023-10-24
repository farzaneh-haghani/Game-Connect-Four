import { ConnectFour } from "../utils/class";

describe("is square occupied", () => {
  test("is square occupied", () => {
    const c4 = new ConnectFour([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["r", null, null, null, null, null, null],
    ]);
    let result = c4.isSquareOccupied(1, 1);
    expect(result).toStrictEqual(true);
  });

  test("is square occupied II", () => {
    const c4 = new ConnectFour();
    let result = c4.isSquareOccupied(1, 1);
    expect(result).toStrictEqual(false);
  });

  test("is square occupied III", () => {
    const c4 = new ConnectFour();
    let result = c4.isSquareOccupied(8, 8); // <-----
    expect(result).toStrictEqual(null);
  });
});
