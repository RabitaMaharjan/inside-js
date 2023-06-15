// #todo

'use strict';

console.log('-- begin --');

// there may be more than one correct answer
//  try finding as many as you can
//  what do all the solutions have in common?
// or maybe the asserted path is unreachable!

const value1 = true;
const value2 = false;
let path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if';
}

console.assert(path === 'if');

console.log('-- end --');
