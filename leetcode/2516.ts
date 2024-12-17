async function sleep(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time));
}
function takeCharacters(s: string, k: number) {
  if (k === 0) {
    return 0;
  }
  // 统计字符总数
  const countTotal = { a: 0, b: 0, c: 0 };
  for (const char of s) {
    countTotal[char as "a" | "b" | "c"]++;
  }

  // 检查是否可以取到 k 个每种字符
  if (countTotal["a"] < k || countTotal["b"] < k || countTotal["c"] < k) {
    return -1;
  }
  const targetCount = { a: countTotal.a - k, b: countTotal.b - k, c: countTotal.c - k };
  let planC = {
    a: 0,
    b: 0,
    c: 0,
  };
  const length = s.length;
  let left = 0, maxLength = 0
  for (let i = 0; i < length; i++) {
    const char = s[i];
    planC[char]++;
    while (planC["a"] > targetCount["a"] || planC["b"] > targetCount["b"] || planC["c"] > targetCount["c"]) {
      const leftChar = s[left];
      planC[leftChar]--;
      left++;
    }
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return length - maxLength;
}

console.log(takeCharacters("aabaaaacaabc", 2));
