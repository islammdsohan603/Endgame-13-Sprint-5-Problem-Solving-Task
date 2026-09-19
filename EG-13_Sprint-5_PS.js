// 07. Rotate Array

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.reverse();

  reverse(nums, 0, k - 1);

  reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    start++;
    end--;
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7];

rotate(nums, 3);

console.log(nums);
