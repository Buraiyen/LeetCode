const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const zero = nums.splice(i, 1);
      nums.push(zero);
      i--;
    }
  }
}
