// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["sub", 33, -12],
  ["mult", 6,12],
  ["add", 9,5],
  [123, 43, 5]
]

let outputs = [
  30,
  undefined,
  45,
  72,
  14,
  undefined
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f("add", 10, 20); // 30
f("mult", 2, 3); // 6
f("spoof", 10, 10); // undefined

*/
function f(operation, firstArgument, secondArgument) {
  //console.log(operation); 
  if (isNaN(firstArgument) || isNaN(secondArgument)){
    //console.log(operation);
    return undefined;
    
   } else if (operation == "add"){
    return firstArgument + secondArgument;
   } 
    else if (operation == "sub"){
    return firstArgument - secondArgument;
    }
     else if (operation == "mult") {
      return firstArgument * secondArgument;
    } 
    
    }
  

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    //console.log("hereee",actual);
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
