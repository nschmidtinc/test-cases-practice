var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hello world",
    "monster truck",
    "ooga booga chattanooga",
    "your mom dot com",
    "yo wassup"
  
]

let outputs = [
    "Hello World",
    "Monster Truck",
    "Ooga Booga Chattanooga",
    "Your Mom Dot Com",
    "Yo Wassup"
  
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
newArr = str.split(" ");

function f(str) {
for ( var i = 0; i <= newArr[i].length; i++) {
    newArr[i].charAt(0).toUpperCase();
} return newArr[i];
newArr[i].join(" ");
console.log(newArr);
}
str = newArr    
    

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

