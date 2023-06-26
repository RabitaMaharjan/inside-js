import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // read user text
  const text = readString('user-text)');

  /* let reversedString = '';
  for (let i = 0; i < text.length; i++);
  reversedString = text[i] + reversedString;

  // use a for loop that counts down (i--) to reverse the input

  // display the reversed string
  display('reversed-output', reversedString);
}); */

  const reversedString = text.split('').reverse().join('');

  // display the reversed string
  display('reversed-output', reversedString);
});
