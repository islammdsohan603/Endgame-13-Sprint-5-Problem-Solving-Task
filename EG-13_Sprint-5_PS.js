// 01. Remove Duplicates from Sorted Array

var checkSubarraySum = function (nums, k) {
  if (nums.length === 0) return 0;

  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
};

console.log(checkSubarraySum([1, 1, 2]));
