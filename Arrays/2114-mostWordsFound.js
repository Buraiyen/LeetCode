const sentences = [
  'alice and bob love leetcode',
  'i think so too',
  'this is great thanks very much',
];
console.log(mostWordsFound(sentences));

/**
 * @param {string[]} sentences
 * @returns {number}
 */
function mostWordsFound(sentences) {
  let maxCount = 0;
  for (let i = 0; i < sentences.length; i++) {
    const count = sentences[i].split(' ').length;
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}
