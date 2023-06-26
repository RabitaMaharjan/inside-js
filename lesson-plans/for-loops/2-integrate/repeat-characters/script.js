import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const inputChar = readString ('user-text');
  const repetation = readNumber('number-of-times');

  // repeat the characters in the text

  let repeatedString= ''
  for (let i= 0; i < repetation; i++) {
    repeatedString += inputChar
  }

  // display the text with repeated characters
  display(repeatedString);
});


/* read user values
  const inputString = readString('user-text');
  const repetation = readNumber('number-of-times'); 

  // repeat the string
  let repeatedString = '';
  for (let i = 0; i < repetation ; i++); 
  repeatedString += inputString;



  // display the repeated string
  display (repeatedString);
});
