let nums = [2, 5, 1, 3, 4, 7];
console.log(shuffle(nums, 3));

nums = [1, 2, 3, 4, 4, 3, 2, 1];
console.log(shuffle(nums, 4));

function shuffle(nums, n) {
  const shuffled = [];
  for (let i = 0; i < n; i++) {
    shuffled.push(nums[i], nums[i + n]);
  }
  return shuffled;
}
