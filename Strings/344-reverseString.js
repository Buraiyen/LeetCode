console.log(reverseString('Gigatummy'.split('')));

function reverseString(s) {
  if (s.length === 1) return;

  let leftPoint = 0;
  let rightPoint = s.length - 1;

  while (leftPoint <= rightPoint) {
    const temp = s[leftPoint];
    s[leftPoint] = s[rightPoint];
    s[rightPoint] = temp;
    leftPoint++;
    rightPoint--;
  }
  return s;
}
