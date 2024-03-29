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

  fourInARow(array: (string | null)[]) {
    let i = 0;
    while (!array[i] && i < 8) {
      i++;
    }
    const char = array[i];
    for (let j = i + 1; j < i + 4; j++) {
      if (array[j] !== char) {
        return false;
      }
    }
    return char;
  }

  getSquare(x: number, y: number) {
    if (this._grid[x] === undefined || this._grid[x][y] === undefined) {
      return false;
    }
    return this._grid[x][y];
  }

  getDiagonalRight(row: number, column: number) {
    let x = 6;
    let y = -1;

    let result = [];

    while (this.getSquare(x - row, column + y) !== false) {
      result.push(this.getSquare(x - row, column + y));
      x--;
      y++;
    }
    return result;
  }

  getDiagonalLeft(row: number, column: number) {
    let x = 6;
    let y = 1;

    let result = [];
    while (this.getSquare(x - row, column - y) !== false) {
      result.push(this.getSquare(x - row, column - y));
      x--;
      y++;
    }
    return result;
  }

  gridAsString() {
    let output = "";
    this._grid.forEach((row) => {
      output = output + "|";
      row.forEach((square) => {
        if (square == null) {
          output = output + "_|";
        } else {
          output = output + square.charAt(0) + "|";
        }
      });
      output = output + "\n";
    });
    return output;
  }

  getColumn(column: number) {
    return [
      this._grid[5][column - 1],
      this._grid[4][column - 1],
      this._grid[3][column - 1],
      this._grid[2][column - 1],
      this._grid[1][column - 1],
      this._grid[0][column - 1],
    ];
  }

  winner() {
    for (let j = 1; j < 8; j++) {
      if (this.fourInARow(this.getColumn(j))) {
        return this.fourInARow(this.getColumn(j));
      }
    }
    for (let i = 5; i >= 0; i--) {
      if (this.fourInARow(this._grid[i])) {
        return this.fourInARow(this._grid[i]);
      }
    }
    return null;
  }
}
