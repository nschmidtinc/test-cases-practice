
var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["wow", 2],
  ["there", 2],
  ["some", 2],
  ["kind", 1],
  ["of", 1]

]

let outputs = [
  "o",
  undefined,
  "w",
  "e",
  "m",
  "i",
  "f"
]





/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f("hello", 1); // e
f("", 4); // undefined
f("abc", 0); // a

*/
function f(str, index) { 
  let letter = str[index];
  return letter;
}  

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
