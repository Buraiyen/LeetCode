// const prices = [7, 6, 4, 3, 1];
const prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));

function maxProfit(prices) {
  let profit = 0;
  let leftPointer = 0;
  let rightPointer = 1;

  while (rightPointer < prices.length) {
    console.log(`${prices[rightPointer]} - ${prices[leftPointer]}`);
    if (prices[leftPointer] < prices[rightPointer]) {
      const currentProfit = prices[rightPointer] - prices[leftPointer];
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    } else {
      leftPointer = rightPointer;
    }
    rightPointer++;
    console.log('----------');
  }
  return profit;
}
