const s = 'anagram',
  t = 'nagaram';

console.log(isAnagram(s, t));
/**
 * @param {string} s
 * @param {string} t
 * @returns
 */

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};

  // count the characters in the 's' string
  for (let c of s) {
    if (!(c in sMap)) {
      sMap[c] = 1;
    } else {
      sMap[c] += 1;
    }
  }

  // count the characters in the 't' string
  for (let c of t) {
    if (!(c in tMap)) {
      tMap[c] = 1;
    } else {
      tMap[c] += 1;
    }
  }
  const tMapKeys = Object.keys(tMap);

  // check if the maps have different keys or the number
  // of occurences of a letter are uneven between the two
  for (let key of tMapKeys) {
    if (!sMap.hasOwnProperty(key) || sMap[key] !== tMap[key]) {
      return false;
    }
  }
  return true;
}
