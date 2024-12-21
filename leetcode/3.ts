// function lengthOfLongestSubstring(s: string): number {
//     if(s.length === 0)
//         return 0
//     let mostLength = 0;
//     for (let i = 0; i < s.length; i++) {
//         for(let j = i + mostLength; j<= s.length; j++){
//             const currentStr = s.slice(i,j)
//             if(new Set(currentStr).size === j - i){
//                 mostLength = Math.max(mostLength, j-i)
//             }else {
//                 break
//             }
//         }
        
       
//     }
//     return mostLength
// }


function lengthOfLongestSubstring(s: string): number {
    let set = new Set<string>();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // 如果字符重复，移动左指针直到没有重复字符
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        // 添加当前字符到集合，并更新最大长度
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring('dvdf'))