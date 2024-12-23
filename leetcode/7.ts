function reverse(x: number): number {
  const un = x < 0 ? -1 : 1
  const absNum = Number(Math.abs(x).toString().split('').reverse().join(''))
  if(absNum > 2**31 - 1) {
    return 0
  }
  return  absNum * un
};