function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  if (0 < k) {
    let min = nums[0];
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
      }
    }
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === min) {
        nums[j] = min * multiplier;
        break
      }
    }
    
    return getFinalState(nums, k-1, multiplier);
  }
  return nums;
}


console.log(getFinalState([2,1,3,5,6], 5, 2));
