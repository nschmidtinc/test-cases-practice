var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "",
  "abc",
  "123",
  "monkey",
  "bird"


]

let outputs = [
  undefined,
  "a",
  "1",
  "m",
  "b"
]

function f(str) {
   if (str[0] === undefined) {return undefined;
} 
  return str[0];
}



function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
