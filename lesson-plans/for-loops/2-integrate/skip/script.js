import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const size = readNumber('skip-size');
  const userText = readString('user-text');

  // create a new string with skipped characters
  for (let index = 0; index < word.length; index++) {
  if (index % 2 === 0 || index % 2 ===1 ) {
    continue;
  }
  userText += size[index];
}

display(usertext);
});