import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let firstNumber = readNumber('left');
  let lastNumber = readNumber('right');

  // use a for loop to multiply the two numbers
  const result = firstNumber * lastNumber;

  // display the product

  display('product', result);
});
