var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3], 
  [2,6],
  [4,8],
  [2,3],
  [6,2],
  [7,1]
]  

let outputs = [
  6,
  0,
  12,
  6,
  undefined,
  undefined,
  7

]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
if (isNAN(x) || isNAN(y)) { return undefined;
}
 
 let sum = x + y;
if
    
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
