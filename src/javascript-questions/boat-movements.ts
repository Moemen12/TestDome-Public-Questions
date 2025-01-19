export function canTravelTo(
  gameMatrix: boolean[][],
  fromRow: number,
  fromColumn: number,
  toRow: number,
  toColumn: number
): boolean {
  // Then check bounds
  if (
    fromRow < 0 ||
    fromColumn < 0 ||
    toRow < 0 ||
    toColumn < 0 ||
    fromRow >= gameMatrix.length ||
    fromColumn >= gameMatrix[0].length ||
    toRow >= gameMatrix.length ||
    toColumn >= gameMatrix[0].length
  ) {
    return false;
  }

  // check if they start or end with false (land)
  else if (
    gameMatrix[fromRow][fromColumn] === false ||
    gameMatrix[toRow][toColumn] === false
  ) {
    return false;
  }

  // check horizontally
  else if (fromRow === toRow) {
    //    0      1    2      3      4     5
    // [false, true, true, false, true, true], // row 3

    const specificArray = gameMatrix[fromRow].slice(fromColumn, toColumn + 1);
    const row = specificArray;

    row.pop();
    row.shift();

    if (row.includes(false)) {
      console.log("boat can't move horizontally and faced some obstacles");
      return false;
    }

    console.log("boat moved horizontally without obstacles");
  }

  // check vertically
  else if (fromColumn === toColumn) {
    const mergedArray: Array<Array<boolean>> = [];
    for (let i = fromRow + 1; i < toRow; i++) {
      mergedArray.push(gameMatrix[i]);
    }

    const result = mergedArray.some((row) => row[fromColumn] === false);

    if (result) {
      console.log("boat can't move vertically and faced some obstacles");
      return false;
    }

    console.log("boat moved vertically without obstacles");
    return true;
  } else {
    return true;
  }

  return true;
}

export const gameMatrix: boolean[][] = [
  [false, true, true, false, false, false],
  [true, true, true, false, false, false],
  [true, true, true, true, true, true],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, false, false, false],
];
