// #todo

'use strict';
console.log('-- begin --');

// fill in the blanks to pass the assertions
// fill in the documentation to describe the function

const scramble = (param1, param2, param3) => {
  const result = param3 + param1 + param2;
  return result;
};

// In this function scramble 'a' is param1 'b' is param2 and 'c' s param3
const _1_actual = scramble('a', 'c', 'b');
const _1_expect = 'bca';
console.assert(_1_actual === _1_expect, 'Test 1');

// In this function scramble 'a' is param1 'b' is param2 and 'c' s param3
const _2_expect = 'cab';
const _2_actual = scramble('a', 'b', 'c');
console.assert(_2_actual === _2_expect, 'Test 2');

// In this function scramble 'c' is param1 'b' is param2 and 'a' s param3
const _3_expect = 'acb';
const _3_actual = scramble('c', 'b', 'a');
console.assert(_3_actual === _3_expect, 'Test 3');

// In this function scramble 'b' is param1 'a' is param2 and 'c' s param3
const _4_expect = 'cba';
const _4_actual = scramble('b', 'a', 'c');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'abc';
const _5_actual = scramble('b', 'c', 'a');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = scramble('c', 'a', 'b');
console.assert(_6_actual === _6_expect, 'Test 6');

console.log('-- end --');
