import { ConnectFour } from "../utils/class";

describe("getSquare", () => {
  test("getSquare", () => {
    const c4 = new ConnectFour();
    expect(c4.getSquare(10, 20)).toStrictEqual(false);
  });

  test("getSquare II ", () => {
    const c4 = new ConnectFour();
    expect(c4.getSquare(200, 20)).toStrictEqual(false);
  });

  test("getSquare III ", () => {
    const c4 = new ConnectFour();
    expect(c4.getSquare(6, 7)).toStrictEqual(false);
  });
});
