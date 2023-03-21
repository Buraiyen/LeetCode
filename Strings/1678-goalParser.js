const command = 'G()(al)';
// const command = 'G()()()()(al)';
console.log(goalParser(command));

/**
 * @param {string} command
 * @returns  {string}
 */
function goalParser(command) {
  let parsed = '';
  const dict = {
    G: 'G',
    '()': 'o',
    '(al)': 'al',
  };
  let temp = '';
  for (let i = 0; i < command.length; i++) {
    temp += command[i];
    if (dict[temp]) {
      parsed += dict[temp];
      temp = '';
    }
  }
  return parsed;
}
