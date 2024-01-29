const array = [1, 2, 3, [23, [3, 32, [32, [32]]]]];

// Array.prototype.myFlat = function (depth) {
//   let flatArr = this;
//   for (let currentDepth = 0; currentDepth < depth; currentDepth++) {
//     const tmpArr = [];
//     let hasArr = false;
//     for (let i = 0; i < flatArr.length; i++) {
//       if (Array.isArray(flatArr[i])) {
//         hasArr = true;
//         tmpArr.push(...flatArr[i]);
//       } else {
//         tmpArr.push(flatArr[i]);
//       }
//     }
//     flatArr = tmpArr;
//     if (!hasArr) {
//       break;
//     }
//   }
//   return flatArr;
// };

Array.prototype.myFlat = function (depth = 1) {
  return this.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) && depth ? item.myFlat(depth - 1) : item);
  }, []);
};
console.log(array.myFlat(Infinity));
console.log(array.flat(Infinity));
