const largeArray = Array.from({ length: 90000000 }, (_, i) => i);

// 使用 for 循环
console.time("forLoop");
let resultForLoop = [];
for (let i = 0; i < largeArray.length; i++) {
  resultForLoop.push(largeArray[i] * 2);
}
console.timeEnd("forLoop");

// 使用 map 方法
console.time("map");
let resultMap = largeArray.map(x => x * 2);
console.timeEnd("map");
