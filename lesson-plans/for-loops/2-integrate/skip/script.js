import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("skip-them").addEventListener('click', () => {
  debugger;

  // read user values
  let inputNumber = readNumber("skip-size");
  let inputText = readString("user-text");

  // create a new string with skipped characters
  let skippedString = "";
  for (let i = 0; i < inputText.length; i += inputNumber) {
    skippedString += inputText[i];
  }

  // display the skipped string
  display(skippedString);
});