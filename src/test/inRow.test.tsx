import { ConnectFour } from "../utils/class";

describe("4 in a row", () => {
  test("4 in a row I", () => {
    const c4 = new ConnectFour();

    expect(c4.fourInARow(["r", "r", "r", "r", null, null, null])).toStrictEqual(
      "r"
    );
  });

  test("4 in a row II", () => {
    const c4 = new ConnectFour();

    expect(c4.fourInARow([null, "r", "r", "r", "r", null, null])).toStrictEqual(
      "r"
    );
  });

  test("4 in a row III", () => {
    const c4 = new ConnectFour();

    expect(c4.fourInARow([null, null, "r", "r", "r", "r", null])).toStrictEqual(
      "r"
    );
  });

  test("4 in a row IV", () => {
    const c4 = new ConnectFour();

    expect(c4.fourInARow([null, null, "r", null, "r", "r", "r"])).toStrictEqual(
      false
    );
  });
});
