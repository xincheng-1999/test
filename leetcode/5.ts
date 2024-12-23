function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }
  
  let longestStr = s[0];

  for (let i = 0; i < s.length; i++) {
    // 奇数长度回文
    let oddStart = 0;
    while (s[i - oddStart] !== undefined && s[i + oddStart] !== undefined && s[i - oddStart] === s[i + oddStart]) {
      oddStart++;
    }
    oddStart--;  // 调整超出步长
    if (oddStart * 2 + 1 > longestStr.length) {
      longestStr = s.slice(i - oddStart, i + oddStart + 1);
    }

    // 偶数长度回文
    let evenStart = 0;
    while (s[i - evenStart - 1] !== undefined && s[i + evenStart] !== undefined && s[i - evenStart - 1] === s[i + evenStart]) {
      evenStart++;
    }
    if (evenStart * 2 > longestStr.length) {
      longestStr = s.slice(i - evenStart, i + evenStart);
    }
  }
  
  return longestStr;
}

console.log(longestPalindrome("bb"));
