let candies = [2, 3, 5, 1, 3];
console.log(kidsWithCandies(candies, 3));

candies = [4, 2, 1, 1, 2];
console.log(kidsWithCandies(candies, 1));

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandy);
}
