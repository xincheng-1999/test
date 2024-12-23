function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 确保 nums1 是较短的数组，以便优化二分查找的范围
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length; // nums1 的长度
  const n = nums2.length; // nums2 的长度
  let left = 0, right = m; // 二分查找的初始范围在 nums1 的索引 [0, m]

  while (left <= right) {
    // 在 nums1 中选择划分点 i
    const i = Math.floor((left + right) / 2); 
    // 在 nums2 中选择划分点 j，使得左半部分的总长度等于右半部分
    const j = Math.floor((m + n + 1) / 2) - i;

    // 边界值处理
    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1]; // nums1 左侧的最大值
    const nums1RightMin = i === m ? Infinity : nums1[i]; // nums1 右侧的最小值
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1]; // nums2 左侧的最大值
    const nums2RightMin = j === n ? Infinity : nums2[j]; // nums2 右侧的最小值
    console.log(nums1LeftMax, nums1RightMin, nums2LeftMax, nums2RightMin);
    
    // 检查是否满足划分条件：
    // 左侧的最大值 <= 右侧的最小值
    if(Math.max(nums1LeftMax, nums2LeftMax) <= Math.min(nums1RightMin, nums2RightMin)){
      
    }
    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      console.log('符合条件', nums1LeftMax, nums1RightMin, nums2LeftMax, nums2RightMin, i);
      
      // 如果总长度是偶数，中位数是左侧最大值和右侧最小值的平均值
      if ((m + n) % 2 === 0) {
        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
      } 
      // 如果总长度是奇数，中位数是左侧的最大值
      else {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }
    } 
    // 如果 nums1 左侧的最大值大于 nums2 右侧的最小值，说明 i 太大，需要向左调整
    else if (nums1LeftMax > nums2RightMin) {
      right = i - 1; // 移动右边界
    } 
    // 如果 nums2 左侧的最大值大于 nums1 右侧的最小值，说明 i 太小，需要向右调整
    else {
      left = i + 1; // 移动左边界
    }
  }

  // 如果输入数组不是有序的，抛出错误（根据题目假设，这种情况不应该发生）
  throw new Error("Input arrays are not sorted.");
}


console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]));
