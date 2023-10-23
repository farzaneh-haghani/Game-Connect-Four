export class ConnectFour {
  public _grid: (string | null)[][];

  constructor(grid: (string | null)[][] | undefined = undefined) {
    if (!grid) {
      this._grid = Array.from(
        { length: 6 },
        () => Array.from({ length: 7 }).fill(null) as (string | null)[]
      );
    } else {
      this._grid = grid;
    }
  }

  playMove(colour: string, column: number) {
    let row = 1;
    while (this.isSquareOccupied(row, column)) {
      row++;
    }
    if (this.isSquareOccupied(row, column) === false) {
      this._grid[6 - row][column - 1] = colour;
    }
  }

  isSquareOccupied(row: number, column: number) {
    if (row > 6 || column > 7) {
      return null;
    }
    if (this._grid[6 - row][column - 1]) {
      return true;
    }
    return false;
  }
}
