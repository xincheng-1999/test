function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let current = 0;
  let addFlag = true;
  const strArr = new Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
      strArr[current] += s[i];
      current += addFlag ? 1:-1
      if (current === 0 || current === numRows - 1) {
        addFlag = !addFlag;
      }
  }
  return strArr.join("");
}

convert("PAYPALISHIRING", 3);
