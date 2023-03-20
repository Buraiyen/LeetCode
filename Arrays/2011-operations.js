const operations = ['--X', 'X++', 'X++'];
console.log(finalValueAfterOperations(operations));

/**
 * @param {string[]} operations
 * @returns {number}
 */
function finalValueAfterOperations(operations) {
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
    operations[i] === 'X++' || operations[i] === '++X' ? X++ : X--;
  }
  return X;
}
