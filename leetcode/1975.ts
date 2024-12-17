function maxMatrixSum(matrix: number[][]): number {
  const flatArray = matrix.flat(1);
  let minAbsNum = Infinity;
  let totalNegativeNum = 0;
  let haveZero = false;
  let absTotal = 0;
  for (let index = 0; index < flatArray.length; index++) {
    const item = flatArray[index];
    const absNum = Math.abs(item);
    absTotal += absNum;
    if (item === 0) {
      haveZero = true;
      continue;
    }

    if (absNum < minAbsNum) {
      minAbsNum = absNum;
    }
    if (item < 0) {
      totalNegativeNum++;
    }
  }

  console.log(absTotal, totalNegativeNum, minAbsNum);

  if (haveZero || totalNegativeNum % 2 === 0) {
    return absTotal;
  } else {
    return absTotal - minAbsNum - minAbsNum;
  }
}

console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
);
