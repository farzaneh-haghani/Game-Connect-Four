import { ConnectFour } from "../utils/class";

describe("drop piece", () => {
  describe("drop piece on top of piece", () => {
    test("drop piece", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);
    });

    test("drop piece on top of piece I", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 1);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);
    });

    test("drop piece on top of piece II", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);
    });

    test("drop piece on top of piece III", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);
      c4.playMove("y", 1);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);
    });

    test("drop piece on top of piece IV", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      expect(c4._grid).toStrictEqual([
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);
    });

    test("drop piece on top of piece V", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 2);
      c4.playMove("y", 2);
      c4.playMove("r", 2);
      c4.playMove("y", 2);
      c4.playMove("r", 2);
      c4.playMove("y", 2);
      expect(c4._grid).toStrictEqual([
        [null, "y", null, null, null, null, null],
        [null, "r", null, null, null, null, null],
        [null, "y", null, null, null, null, null],
        [null, "r", null, null, null, null, null],
        [null, "y", null, null, null, null, null],
        [null, "r", null, null, null, null, null],
      ]);
    });

    test("drop piece when it falls off the grid", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);
      c4.playMove("y", 1);
      c4.playMove("r", 1);
      expect(c4._grid).toStrictEqual([
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["y", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);
    });
  });

  describe("drop pieces in a line", () => {
    test("drop second piece in a line", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 2);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", "y", null, null, null, null, null],
      ]);
    });

    test("drop pieces in a line I", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 2);
      c4.playMove("r", 3);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", "y", "r", null, null, null, null],
      ]);
    });

    test("drop pieces in a line II", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("y", 2);
      c4.playMove("r", 8);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", "y", null, null, null, null, null],
      ]);
    });
  });
});
