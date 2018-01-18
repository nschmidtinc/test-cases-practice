var assert = require('assert');

// we need 5 test cases. 
let inputs = ["daddy",
              "bilbo",
              "racecar",
              "dangodango",
              "bicycle"
  
]

let outputs = ["yddad",
    "oblib",
    "racecar",
    "dangodango",
    "elcycib"
  
]
var newArr = [];
/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {

    var arr = str.split("");

    console.log(arr);
    
        for (var i = str.length; i > 0; i--) {
         newArr.push(arr[i -1]);
        
    } 
    return newArr.join;
    console.log (newArr.join);
       
}
    str = newArr.join
function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    console.log(actual);
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

