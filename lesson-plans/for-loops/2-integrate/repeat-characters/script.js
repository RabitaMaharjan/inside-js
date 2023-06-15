import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values
  let inputText = readString("user-text");
  let repeatTimes = readNumber("number-of-times");

  // repeat the characters in the text
  let repeatedText = '';
  for (let i = 0; i < inputText.length; i++) {
    for (let j = 0; j < repeatTimes; j++) {
      repeatedText += inputText[i];
    }
  }

  // display the text with repeated characters
  console.log(repeatedText);
});