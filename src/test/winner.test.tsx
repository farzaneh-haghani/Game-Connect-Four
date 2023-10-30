import { ConnectFour } from "../utils/class";

describe("win", () => {
  describe("win in a line", () => {
    test("win in a line I", () => {
      const c4 = new ConnectFour();

      c4.playMove("r", 1);
      c4.playMove("r", 1);
      c4.playMove("r", 1);
      c4.playMove("r", 1);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
        ["r", null, null, null, null, null, null],
      ]);

      expect(c4.winner()).toStrictEqual("r");
    });

    test("win in a line II", () => {
      const c4 = new ConnectFour();

      c4.playMove("r", 2);
      c4.playMove("r", 2);
      c4.playMove("r", 2);
      c4.playMove("r", 2);

      expect(c4.winner()).toStrictEqual("r");
    });

    test("win in a line III", () => {
      const c4 = new ConnectFour();

      c4.playMove("r", 5);
      c4.playMove("r", 5);
      c4.playMove("r", 5);
      c4.playMove("r", 5);

      expect(c4.winner()).toStrictEqual("r");
    });

    test("win in a line IV", () => {
      const c4 = new ConnectFour();

      c4.playMove("r", 8);
      c4.playMove("r", 8);
      c4.playMove("r", 8);
      c4.playMove("r", 8);

      expect(c4.winner()).toStrictEqual(null);
    });
  });

  describe("win in a row", () => {
    test("drop pieces in a line III", () => {
      const c4 = new ConnectFour();
      c4.playMove("r", 1);
      c4.playMove("r", 2);
      c4.playMove("r", 3);
      c4.playMove("r", 4);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["r", "r", "r", "r", null, null, null],
      ]);

      expect(c4.winner()).toStrictEqual("r");
    });

    test("drop pieces in a line IV", () => {
      const c4 = new ConnectFour();

      c4.playMove("r", 2);
      c4.playMove("r", 3);
      c4.playMove("r", 4);
      c4.playMove("r", 5);

      expect(c4._grid).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, "r", "r", "r", "r", null, null],
      ]);

      expect(c4.winner()).toStrictEqual("r");
    });
  });
});
