import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const inputString = readString('user-text');
  const repetation = readNumber('number-of-times'); 

  // repeat the string
  let repeatedString = '';
  for (let i = 0; i < repetation ; i++); 
  repeatedString += inputString;



  // display the repeated string
  display (repeatedString);
});
