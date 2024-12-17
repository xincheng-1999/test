function twoSum(nums: number[], target: number): number[] {
    const seenMap = new Map()
    for(let i = 0; i< nums.length; i ++){
      const current = nums[i]
      const diff = target - current
      
      if(seenMap.get(diff) >=0 ){
        return [seenMap.get(diff), i]
      }
      seenMap.set(current, i)
    }
    return []
};
console.log(twoSum([2,7,11,15], 9));
