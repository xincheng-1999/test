function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const m = rowSum.length;
  const n = colSum.length;
  const matrix = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          // 取当前行和列可以填充的最小值
          const value = Math.min(rowSum[i], colSum[j]);

          // 填充矩阵
          matrix[i][j] = value;
          console.log('第%d行，%d列', i, j);
          
          // 更新剩余的行和列的和
          rowSum[i] -= value;
          colSum[j] -= value;
          console.log(rowSum);
          console.log(colSum)
          console.table(matrix);
          console.log('\n');
      }
  }

  return matrix;
}

// 示例
const rowSum = [5,7,10];
const colSum = [8,6,8];
console.log(restoreMatrix(rowSum, colSum));
