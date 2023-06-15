import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("reversed-output").addEventListener('click', () => {
  debugger;

  // read user text
  let inputText = readString("user-text");

  // use a for loop that counts down (i--) to reverse the input
  let reversedText = '';
  for (let i = inputText.length - 1; i >= 0; i--) {
    reversedText += inputText[i];
  }

  // display the reversed string
  console.log(reversedText);
});