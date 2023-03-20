console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
/**
 * @param {string} s
 * @param {number[]} indices
 * @returns {string}
 */
function restoreString(s, indices) {
  if (s.length !== indices.length) {
    return console.log('Invalid parameter lengths');
  }
  let restored = new Array(s.length).fill('');
  for (let i = 0; i < indices.length; i++) {
    restored[indices[i]] = s[i];
  }
  return restored.join('');
}
